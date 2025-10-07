const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SNAPSHOT_FILE = path.join(ROOT, 'predictor-assets', 'last-snapshot.json');
let lastSnapshot = null; // { map: string[25], ts: number }

function loadSnapshotFromDisk(){
  try { lastSnapshot = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8')); } catch(_) { lastSnapshot = null; }
}
function saveSnapshotToDisk(){
  try { if (!lastSnapshot) return; fs.mkdirSync(path.dirname(SNAPSHOT_FILE), { recursive: true }); fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(lastSnapshot), 'utf8'); } catch(_) {}
}
loadSnapshotFromDisk();

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Cache-Control': 'no-store', ...headers });
  if (Buffer.isBuffer(body) || typeof body === 'string') return res.end(body);
  res.end(JSON.stringify(body));
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  }[ext] || 'application/octet-stream';
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) return send(res, 404, 'Not Found');
    send(res, 200, data, { 'Content-Type': getContentType(filePath) });
  });
}

// простая функция-предсказатель
function predictNextMove(state) {
  // здесь ты потом подключишь свою модель (CatBoost, hash, NN и т.д.)
  // пока — рандом от 1 до 25 (ячейки мин)
  return {
    safeCell: Math.floor(Math.random() * 25) + 1,
    minesLeft: state?.minesLeft ?? null
  };
}

function createPredictorServer(port, htmlFile) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') return send(res, 204, '');

    if (url.pathname === '/' || url.pathname === '/setup' || url.pathname === '/predictor-setup.html') {
      return sendFile(res, path.join(ROOT, 'predictor-setup.html'));
    }
    
    if (url.pathname === '/predictor.html') {
      return sendFile(res, path.join(ROOT, 'predictor.html'));
    }

    if (
      url.pathname.startsWith('/predictor-assets/') ||
      url.pathname.startsWith('/static/') ||
      url.pathname.startsWith('/prod-rnd-frontend-php-orchestra.100hp.app/')
    ) {
      const fp = path.join(ROOT, url.pathname.replace(/^\/+/, ''));
      return sendFile(res, fp);
    }

    if (url.pathname === '/predictor-snapshot') {
      if (lastSnapshot) return send(res, 200, lastSnapshot, { 'Content-Type': 'application/json' });
      try { loadSnapshotFromDisk(); } catch(_) {}
      return send(res, lastSnapshot ? 200 : 204, lastSnapshot || {}, { 'Content-Type': 'application/json' });
    }

    if (url.pathname === '/mines/debug/state') {
      // Get player ID from query parameter or header
      const playerId = url.searchParams.get('playerId') || req.headers['x-user-id'];
      const gameUrl = url.searchParams.get('gameUrl') || 'https://1waion-life.vercel.app';
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx or X-User-ID header' }, { 'Content-Type': 'application/json' });
      }
      
      // Use provided game URL or default
      const upstreamUrl = `${gameUrl}/mines/debug/state`;
      
      // Choose http or https based on URL
      const client = upstreamUrl.startsWith('https') ? https : http;
      
      // Add player ID to headers
      const options = {
        headers: {
          'X-User-ID': playerId,
          'Cookie': `userId=${playerId}`
        }
      };
      
      return client.get(upstreamUrl, options, (r) => {
        let data = '';
        r.on('data', (c) => (data += c));
        r.on('end', () => {
          try {
            const upstream = JSON.parse(data);
            // Simple next-safe prediction: first safe cell not yet revealed
            let nextSafe = null;
            try {
              const revealedSet = new Set((upstream.revealed||[]).map(c=>`${c.col}:${c.row}`));
              const candidate = (upstream.safe||[]).find(c=>!revealedSet.has(`${c.col}:${c.row}`));
              if (candidate) nextSafe = candidate;
            } catch {}
            const prediction = { nextSafe, minesLeft: upstream?.minesLeft ?? null };
            // Build and persist latest snapshot map when signal present
            try {
              const bombsArr = Array.isArray(upstream.bombs) ? upstream.bombs : [];
              const safeArr = Array.isArray(upstream.safe) ? upstream.safe : [];
              if (bombsArr.length > 0 || safeArr.length > 0) {
                const bombSet = new Set(bombsArr.map(b => `${b.row}:${b.col}`));
                const map = new Array(25);
                for (let r=0;r<5;r++) {
                  for (let c=0;c<5;c++) {
                    const key = `${r}:${c}`;
                    map[r*5+c] = bombSet.has(key) ? 'mine' : 'safe';
                  }
                }
                lastSnapshot = { map, ts: Date.now() };
                saveSnapshotToDisk();
              }
            } catch(_) {}
            // Expose upstream fields at top-level so predictor.html can read them directly
            send(res, 200, { ...upstream, prediction }, { 'Content-Type': 'application/json' });
          } catch (e) {
            send(res, 500, { error: 'Bad upstream data' }, { 'Content-Type': 'application/json' });
          }
        });
      }).on('error', () =>
        send(res, 502, { error: 'Upstream not available' }, { 'Content-Type': 'application/json' })
      );
    }

    send(res, 404, 'Not Found');
  });

  server.listen(port, () => {
    console.log(`Predictor (${htmlFile}) is running on http://localhost:${port}`);
  });
}

// For Vercel deployment
if (process.env.VERCEL) {
  // Vercel serverless function
  module.exports = (req, res) => {
    const url = new URL(req.url, `https://${req.headers.host}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') return send(res, 204, '');

    if (url.pathname === '/' || url.pathname === '/setup' || url.pathname === '/predictor-setup.html') {
      return sendFile(res, path.join(ROOT, 'predictor-setup.html'));
    }
    
    if (url.pathname === '/predictor.html') {
      return sendFile(res, path.join(ROOT, 'predictor.html'));
    }

    if (
      url.pathname.startsWith('/predictor-assets/') ||
      url.pathname.startsWith('/static/') ||
      url.pathname.startsWith('/prod-rnd-frontend-php-orchestra.100hp.app/')
    ) {
      const fp = path.join(ROOT, url.pathname.replace(/^\/+/, ''));
      return sendFile(res, fp);
    }

    if (url.pathname === '/predictor-snapshot') {
      if (lastSnapshot) return send(res, 200, lastSnapshot, { 'Content-Type': 'application/json' });
      try { loadSnapshotFromDisk(); } catch(_) {}
      return send(res, lastSnapshot ? 200 : 204, lastSnapshot || {}, { 'Content-Type': 'application/json' });
    }

    if (url.pathname === '/mines/debug/state') {
      // Get player ID from query parameter or header
      const playerId = url.searchParams.get('playerId') || req.headers['x-user-id'];
      const gameUrl = url.searchParams.get('gameUrl') || 'https://1waion-life.vercel.app';
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx or X-User-ID header' }, { 'Content-Type': 'application/json' });
      }
      
      // Use provided game URL or default
      const upstreamUrl = `${gameUrl}/mines/debug/state`;
      
      // Add player ID to headers
      const options = {
        headers: {
          'X-User-ID': playerId,
          'Cookie': `userId=${playerId}`
        }
      };
      
      return https.get(upstreamUrl, options, (r) => {
        let data = '';
        r.on('data', (c) => (data += c));
        r.on('end', () => {
          try {
            const upstream = JSON.parse(data);
            // Simple next-safe prediction: first safe cell not yet revealed
            let nextSafe = null;
            try {
              const revealedSet = new Set((upstream.revealed||[]).map(c=>`${c.col}:${c.row}`));
              const candidate = (upstream.safe||[]).find(c=>!revealedSet.has(`${c.col}:${c.row}`));
              if (candidate) nextSafe = candidate;
            } catch {}
            const prediction = { nextSafe, minesLeft: upstream?.minesLeft ?? null };
            // Build and persist latest snapshot map when signal present
            try {
              const bombsArr = Array.isArray(upstream.bombs) ? upstream.bombs : [];
              const safeArr = Array.isArray(upstream.safe) ? upstream.safe : [];
              if (bombsArr.length > 0 || safeArr.length > 0) {
                const bombSet = new Set(bombsArr.map(b => `${b.row}:${b.col}`));
                const map = new Array(25);
                for (let r=0;r<5;r++) {
                  for (let c=0;c<5;c++) {
                    const key = `${r}:${c}`;
                    map[r*5+c] = bombSet.has(key) ? 'mine' : 'safe';
                  }
                }
                lastSnapshot = { map, ts: Date.now() };
                saveSnapshotToDisk();
              }
            } catch(_) {}
            // Expose upstream fields at top-level so predictor.html can read them directly
            send(res, 200, { ...upstream, prediction }, { 'Content-Type': 'application/json' });
          } catch (e) {
            send(res, 500, { error: 'Bad upstream data' }, { 'Content-Type': 'application/json' });
          }
        });
      }).on('error', () =>
        send(res, 502, { error: 'Upstream not available' }, { 'Content-Type': 'application/json' })
      );
    }

    send(res, 404, 'Not Found');
  };
} else {
  // Local development
  // 8082 — твой предсказатель
  createPredictorServer(8082, 'predictor.html');
}

// Simple Top-up UI server on 8083
function createTopupServer(port) {
  const html = `<!doctype html><html lang="ru"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>1WIN • Пополнение счета</title><style>*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;font-family:'Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;background:linear-gradient(135deg,#0a0e1a 0%,#1a1f2e 50%,#0a0e1a 100%);color:#fff;overflow-x:hidden}body::before{content:'';position:fixed;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 20% 80%,rgba(0,180,255,0.1) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(26,255,182,0.1) 0%,transparent 50%);pointer-events:none;z-index:-1}.header{position:fixed;top:0;left:0;right:0;height:70px;background:rgba(10,14,26,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.1);z-index:1000;display:flex;align-items:center;justify-content:space-between;padding:0 30px}.logo{display:flex;align-items:center;gap:15px}.logo img{width:120px;height:auto}.logo-text{font-size:24px;font-weight:800;background:linear-gradient(135deg,#00d1ff,#1affb5);-webkit-background-clip:text;background-clip:text;color:transparent}.user-info{display:flex;align-items:center;gap:20px}.balance-display{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:12px 20px;text-align:center}.balance-label{font-size:12px;color:#9bb4d1;margin-bottom:4px}.balance-amount{font-size:18px;font-weight:700;color:#00d1ff}.main-container{max-width:1200px;margin:90px auto 0;padding:40px 20px;display:grid;grid-template-columns:1fr 400px;gap:40px;min-height:calc(100vh - 90px)}.payment-section{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:40px;backdrop-filter:blur(10px)}.section-title{font-size:28px;font-weight:700;margin-bottom:30px;background:linear-gradient(135deg,#00d1ff,#1affb5);-webkit-background-clip:text;background-clip:text;color:transparent}.payment-methods{display:grid;gap:16px;margin-bottom:40px}.payment-method{display:flex;align-items:center;gap:20px;padding:20px;background:rgba(255,255,255,0.03);border:2px solid rgba(255,255,255,0.1);border-radius:16px;cursor:pointer;transition:all 0.3s ease;position:relative;overflow:hidden}.payment-method::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(0,209,255,0.1),rgba(26,255,181,0.1));opacity:0;transition:opacity 0.3s ease}.payment-method:hover::before{opacity:1}.payment-method:hover{border-color:rgba(0,209,255,0.5);transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,209,255,0.2)}.payment-method.selected{border-color:#00d1ff;background:rgba(0,209,255,0.1)}.payment-method.selected::before{opacity:1}.method-icon{width:50px;height:50px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;position:relative;z-index:1}.method-icon.card{background:linear-gradient(135deg,#ff6b6b,#ee5a24)}.method-icon.crypto{background:linear-gradient(135deg,#f39c12,#e67e22)}.method-icon.bank{background:linear-gradient(135deg,#00b894,#00a085)}.method-icon.electronic{background:linear-gradient(135deg,#9b59b6,#8e44ad)}.method-info{flex:1;position:relative;z-index:1}.method-name{font-size:18px;font-weight:600;margin-bottom:6px}.method-desc{font-size:14px;color:#9bb4d1;margin-bottom:8px}.method-features{display:flex;gap:12px;font-size:12px}.feature{background:rgba(114,255,162,0.1);color:#72ffa2;padding:4px 8px;border-radius:6px}.amount-section{margin-bottom:30px}.amount-input-group{position:relative;margin-bottom:20px}.amount-input{width:100%;padding:20px 24px;background:rgba(255,255,255,0.03);border:2px solid rgba(255,255,255,0.1);border-radius:16px;color:#fff;font-size:18px;font-weight:500;outline:none;transition:all 0.3s ease}.amount-input:focus{border-color:#00d1ff;box-shadow:0 0 0 4px rgba(0,209,255,0.1)}.amount-input::placeholder{color:#9bb4d1}.currency-label{position:absolute;right:20px;top:50%;transform:translateY(-50%);color:#9bb4d1;font-size:16px;font-weight:500}.quick-amounts{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}.quick-btn{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:12px;color:#fff;cursor:pointer;transition:all 0.3s ease;text-align:center;font-weight:500}.quick-btn:hover{background:rgba(0,209,255,0.1);border-color:rgba(0,209,255,0.3)}.quick-btn.active{background:rgba(0,209,255,0.2);border-color:#00d1ff;color:#00d1ff}.submit-btn{width:100%;padding:20px;background:linear-gradient(135deg,#00d1ff,#1affb5);border:none;border-radius:16px;color:#0a0e1a;font-size:18px;font-weight:700;cursor:pointer;transition:all 0.3s ease;position:relative;overflow:hidden}.submit-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);transition:left 0.5s}.submit-btn:hover::before{left:100%}.submit-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,209,255,0.4)}.submit-btn:disabled{opacity:0.5;cursor:not-allowed;transform:none}.limits-info{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px;margin-bottom:20px}.limits-title{font-size:14px;font-weight:600;margin-bottom:8px;color:#9bb4d1}.limits-list{display:grid;gap:8px;font-size:13px;color:#9bb4d1}.limit-item{display:flex;justify-content:space-between}.limit-value{color:#72ffa2}.status-message{text-align:center;padding:16px;border-radius:12px;margin-top:20px;font-weight:500}.status-message.success{background:rgba(114,255,162,0.1);border:1px solid rgba(114,255,162,0.3);color:#72ffa2}.status-message.error{background:rgba(255,128,128,0.1);border:1px solid rgba(255,128,128,0.3);color:#ff8080}.info-section{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:40px;backdrop-filter:blur(10px)}.info-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;margin-bottom:24px}.info-card:last-child{margin-bottom:0}.info-title{font-size:18px;font-weight:600;margin-bottom:16px;color:#00d1ff}.info-list{list-style:none}.info-item{display:flex;align-items:center;gap:12px;margin-bottom:12px;font-size:14px;color:#9bb4d1}.info-item::before{content:'✓';color:#72ffa2;font-weight:bold}.security-badge{display:flex;align-items:center;gap:8px;background:rgba(114,255,162,0.1);color:#72ffa2;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:500;margin-top:16px}.footer{text-align:center;padding:20px;color:#9bb4d1;font-size:12px;border-top:1px solid rgba(255,255,255,0.1);margin-top:40px}@media (max-width:768px){.main-container{grid-template-columns:1fr;gap:20px;padding:20px}.header{padding:0 20px}.logo img{width:100px}.payment-section,.info-section{padding:30px 20px}.quick-amounts{grid-template-columns:repeat(2,1fr)}}</style></head><body><div class="header"><div class="logo"><img src="https://v1.bundlecdn.com/img/logo/1win-logo.svg" alt="1WIN"/><span class="logo-text">Пополнение</span></div><div class="user-info"><div class="balance-display"><div class="balance-label">Баланс</div><div class="balance-amount" id="bal">—</div></div></div></div><div class="main-container"><div class="payment-section"><div class="section-title">Выберите способ пополнения</div><div class="payment-methods"><div class="payment-method" data-method="card"><div class="method-icon card">💳</div><div class="method-info"><div class="method-name">Банковские карты</div><div class="method-desc">Visa, MasterCard, МИР, JCB</div><div class="method-features"><span class="feature">Мгновенно</span><span class="feature">0% комиссия</span></div></div></div><div class="payment-method" data-method="crypto"><div class="method-icon crypto">₿</div><div class="method-info"><div class="method-name">Криптовалюты</div><div class="method-desc">Bitcoin, Ethereum, USDT, USDC</div><div class="method-features"><span class="feature">Анонимно</span><span class="feature">0% комиссия</span></div></div></div><div class="payment-method" data-method="bank"><div class="method-icon bank">🏦</div><div class="method-info"><div class="method-name">Банковские переводы</div><div class="method-desc">СБП, Тинькофф, Сбербанк, Альфа-Банк</div><div class="method-features"><span class="feature">Безопасно</span><span class="feature">0% комиссия</span></div></div></div><div class="payment-method" data-method="electronic"><div class="method-icon electronic">⚡</div><div class="method-info"><div class="method-name">Электронные кошельки</div><div class="method-desc">QIWI, ЮMoney, WebMoney</div><div class="method-features"><span class="feature">Быстро</span><span class="feature">0% комиссия</span></div></div></div></div><div class="amount-section"><div class="amount-input-group"><input type="number" id="amount" class="amount-input" min="100" max="20000" step="100" placeholder="Введите сумму пополнения"/><span class="currency-label">₽</span></div><div class="quick-amounts"><div class="quick-btn" data-amount="500">500 ₽</div><div class="quick-btn" data-amount="1000">1 000 ₽</div><div class="quick-btn" data-amount="2000">2 000 ₽</div><div class="quick-btn" data-amount="5000">5 000 ₽</div><div class="quick-btn" data-amount="10000">10 000 ₽</div><div class="quick-btn" data-amount="15000">15 000 ₽</div><div class="quick-btn" data-amount="20000">20 000 ₽</div><div class="quick-btn" data-amount="custom">Другая</div></div></div><div class="limits-info"><div class="limits-title">Лимиты пополнения</div><div class="limits-list"><div class="limit-item"><span>Минимальная сумма:</span><span class="limit-value">100 ₽</span></div><div class="limit-item"><span>Максимальная сумма:</span><span class="limit-value">20 000 ₽</span></div><div class="limit-item"><span>Комиссия:</span><span class="limit-value">0%</span></div><div class="limit-item"><span>Время зачисления:</span><span class="limit-value">Мгновенно</span></div></div></div><button id="btn" class="submit-btn" disabled>Пополнить счет</button><div id="msg" class="status-message" style="display:none;"></div></div><div class="info-section"><div class="info-card"><div class="info-title">Преимущества 1WIN</div><ul class="info-list"><li class="info-item">Мгновенное зачисление средств</li><li class="info-item">Безопасные платежи по SSL</li><li class="info-item">Поддержка всех популярных способов</li><li class="info-item">Круглосуточная служба поддержки</li><li class="info-item">Лицензированная деятельность</li></ul><div class="security-badge">🔒 Защищено SSL-шифрованием</div></div><div class="info-card"><div class="info-title">Как пополнить счет</div><ul class="info-list"><li class="info-item">Выберите удобный способ оплаты</li><li class="info-item">Введите сумму пополнения</li><li class="info-item">Нажмите кнопку "Пополнить счет"</li><li class="info-item">Следуйте инструкциям платежной системы</li><li class="info-item">Получите подтверждение зачисления</li></ul></div><div class="info-card"><div class="info-title">Безопасность</div><ul class="info-list"><li class="info-item">256-битное SSL-шифрование</li><li class="info-item">Защита от мошенничества</li><li class="info-item">Соответствие PCI DSS</li><li class="info-item">Регулярные аудиты безопасности</li></ul></div></div></div><div class="footer"><div>© 2024 1WIN. Все права защищены. | Игра на <b>8080</b> • Пополнение на <b>8083</b></div></div><script>const API='http://localhost:8080';let selectedMethod='card';let selectedAmount=0;async function fetchUser(){try{const r=await fetch(API+'/mines/user',{cache:'no-store'});const j=await r.json();document.getElementById('bal').textContent=(j.balance||0).toLocaleString('ru-RU')+' ₽';}catch(_){document.getElementById('bal').textContent='—';}}

// SSE for real-time balance updates
const eventSource = new EventSource(API+'/mines/sse');
eventSource.onmessage = function(event) {
  try {
    const data = JSON.parse(event.data);
    if (data.type === 'balance_update') {
      document.getElementById('bal').textContent = data.balance.toLocaleString('ru-RU') + ' ₽';
    }
  } catch (e) {
    console.log('SSE parse error:', e);
  }
};
eventSource.onerror = function() {
  console.log('SSE connection error');
};

function updateButton() {
  const amount = Number(document.getElementById('amount').value || 0);
  const btn = document.getElementById('btn');
  btn.disabled = amount < 100 || amount > 20000;
  selectedAmount = amount;
}

function selectQuickAmount(amount) {
  if (amount === 'custom') {
    document.getElementById('amount').focus();
    return;
  }
  document.getElementById('amount').value = amount;
  updateButton();
  updateQuickButtons(amount);
}

function updateQuickButtons(selectedAmount) {
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.amount == selectedAmount) {
      btn.classList.add('active');
    }
  });
}

async function topup() {
  const v = Number(document.getElementById('amount').value || 0);
  const msg = document.getElementById('msg');
  msg.style.display = 'none';
  
  if (v < 100 || v > 20000) {
    msg.textContent = 'Сумма должна быть от 100 до 20000 ₽';
    msg.className = 'status-message error';
    msg.style.display = 'block';
    return;
  }
  
  // Show loading state
  const btn = document.getElementById('btn');
  const originalText = btn.textContent;
  btn.textContent = 'Обработка...';
  btn.disabled = true;
  
  try {
    const r = await fetch(API + '/mines/debug/topup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: v })
    });
    const j = await r.json();
    
    if (r.ok && j && j.ok) {
      msg.textContent = '✅ Счет успешно пополнен на ' + (j.credited || 0).toLocaleString('ru-RU') + ' ₽ через ' + getMethodName(selectedMethod);
      msg.className = 'status-message success';
      document.getElementById('amount').value = '';
      updateButton();
      updateQuickButtons(0);
      fetchUser();
    } else {
      msg.textContent = '❌ Ошибка: ' + (j && j.error && j.error.message) || 'Не удалось пополнить счет';
      msg.className = 'status-message error';
    }
  } catch (e) {
    msg.textContent = '❌ Нет связи с сервером 8080';
    msg.className = 'status-message error';
  }
  
  msg.style.display = 'block';
  btn.textContent = originalText;
  btn.disabled = false;
}

function getMethodName(method) {
  const names = {
    'card': 'банковскую карту',
    'crypto': 'криптовалюту',
    'bank': 'банковский перевод',
    'electronic': 'электронный кошелек'
  };
  return names[method] || 'банковскую карту';
}

// Event listeners
document.querySelectorAll('.payment-method').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
    el.classList.add('selected');
    selectedMethod = el.dataset.method;
  });
});

document.querySelectorAll('.quick-btn').forEach(el => {
  el.addEventListener('click', () => {
    selectQuickAmount(el.dataset.amount);
  });
});

document.getElementById('btn').addEventListener('click', topup);
document.getElementById('amount').addEventListener('input', updateButton);
document.getElementById('amount').addEventListener('keyup', e => {
  if (e.key === 'Enter' && !document.getElementById('btn').disabled) topup();
});

// Initialize
fetchUser();
updateButton();
document.querySelector('.payment-method[data-method="card"]').classList.add('selected');
</script></body></html>`;
  const server = http.createServer((req,res)=>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname === '/' || url.pathname === '/index.html') return send(res,200,html,{ 'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-store' });
    return send(res,404,'Not Found');
  });
  server.listen(port, ()=>{ console.log(`Topup UI running at http://localhost:${port}`); });
}
createTopupServer(8083);
