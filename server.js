// Clean local server for Mines game (no SW required)
// Usage: node server-fixed.js

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process');

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const ROOT = process.cwd();
const HISTORY_FILE = path.join(ROOT,'prod-rnd-backend-php-orchestra.100hp.app','mines','sessions.html');
const GOOGLE_MAP_FILE = path.join(ROOT,'prod-rnd-backend-php-orchestra.100hp.app','mines','google_map.json');

// Google OAuth2 config via env
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  if (Buffer.isBuffer(body) || typeof body === 'string') return res.end(body);
  if (body == null) return res.end();
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}

// --- Simple JSON helpers ---
function readJsonFileSafe(filePath, fallback){
  try { const txt = fs.readFileSync(filePath,'utf8'); return JSON.parse(txt); } catch { return fallback; }
}
function writeJsonFileSafe(filePath, data){
  try { fs.mkdirSync(path.dirname(filePath), { recursive:true }); fs.writeFileSync(filePath, JSON.stringify(data), 'utf8'); } catch {}
}

// Generate unique user ID
function generateUserId() {
  return 'user_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Get or create user
function getUser(userId) {
  if (!userId) {
    userId = generateUserId();
  }
  
  if (!Store.users.has(userId)) {
    Store.users.set(userId, {
      id: userId,
      language: 'ru', 
      currency: 'RUB', 
      sessionId: null, 
      balance: 1000.00, 
      name: 'Player', 
      avatar: '', 
      exchangeRate: 1,
      history: []
    });
  }
  
  return Store.users.get(userId);
}

// --- Google mapping: googleSub/email -> userId ---
const GoogleMap = readJsonFileSafe(GOOGLE_MAP_FILE, { subs:{}, emails:{} });
function getOrCreateUserForGoogle(googleSub, email, name, avatar){
  let uid = (googleSub && GoogleMap.subs[googleSub]) || (email && GoogleMap.emails[email]);
  if (!uid) {
    uid = generateUserId();
    if (googleSub) GoogleMap.subs[googleSub] = uid;
    if (email) GoogleMap.emails[email] = uid;
    writeJsonFileSafe(GOOGLE_MAP_FILE, GoogleMap);
  }
  const user = getUser(uid);
  if (name) user.name = name;
  if (avatar) user.avatar = avatar;
  return user;
}

// Send SSE message to specific user's clients
function sendSSEToUser(userId, data) {
  const message = `data: ${JSON.stringify(data)}\n\n`;
  const userClients = Store.sseClients.get(userId);
  if (userClients) {
    userClients.forEach(client => {
      try {
        client.write(message);
      } catch (e) {
        // Remove disconnected clients
        userClients.delete(client);
      }
    });
  }
}

// Send predictor SSE to specific user's clients
function sendPredictorSSEToUser(userId, data) {
  const message = `data: ${JSON.stringify(data)}\n\n`;
  const userClients = Store.predictorSseClients.get(userId);
  if (userClients) {
    userClients.forEach(client => {
      try {
        client.write(message);
      } catch (e) {
        userClients.delete(client);
      }
    });
  }
}

function buildPredictorPayload(userId) {
  const user = getUser(userId);
  const s = user.activeSession;
  if (!s) {
    return {
      success: false,
      message: 'No active game session',
      playerId: userId,
      gameState: 'No session',
      bombs: [],
      safe: [],
      revealed: [],
      balance: user.balance,
      currency: user.currency,
      sessionId: null,
      lastRound: 0,
      timestamp: new Date().toISOString(),
      type: 'predictor_update'
    };
  }
  const bombsList = [];
  const safeList = [];
  const revealedList = [];
  try {
    s._internal.bombs.forEach(k => {
      const parts = String(k).split(',');
      bombsList.push({ col: Number(parts[0]), row: Number(parts[1]) });
    });
    (s.gameData.expectedChoices || []).forEach(choice => {
      if (choice && choice.category === 0) {
        safeList.push({ col: choice.value.col, row: choice.value.row });
      }
    });
    (s.gameData.userChoices || []).forEach(choice => {
      revealedList.push({ col: choice.value.col, row: choice.value.row });
    });
  } catch {}
  return {
    success: true,
    type: 'predictor_update',
    playerId: userId,
    sessionId: s.id,
    gameState: s.state,
    lastRound: s.lastRound,
    bombs: bombsList,
    safe: safeList,
    revealed: revealedList,
    minesLeft: s._internal.bombs.size,
    balance: user.balance,
    currency: user.currency,
    bet: s.bet,
    coefficient: s.coefficient,
    availableCashout: s.availableCashout,
    timestamp: new Date().toISOString()
  };
}

// Send SSE message to all connected clients (legacy)
function sendSSEToAll(data) {
  const message = `data: ${JSON.stringify(data)}\n\n`;
  Store.sseClients.forEach(userClients => {
    userClients.forEach(client => {
      try {
        client.write(message);
      } catch (e) {
        // Remove disconnected clients
        userClients.delete(client);
      }
    });
  });
}

function contentType(filePath) {
  const m = new Map([
    ['.html', 'text/html; charset=utf-8'],
    ['.js', 'application/javascript; charset=utf-8'],
    ['.css', 'text/css; charset=utf-8'],
    ['.json', 'application/json; charset=utf-8'],
    ['.svg', 'image/svg+xml'],
    ['.png', 'image/png'],
    ['.webp', 'image/webp'],
    ['.jpg', 'image/jpeg'],
    ['.jpeg', 'image/jpeg'],
    ['.gif', 'image/gif'],
    ['.woff2', 'font/woff2'],
    ['.mp3', 'audio/mpeg'],
  ]);
  const ext = path.extname(filePath).toLowerCase();
  return m.get(ext) || 'application/octet-stream';
}

function safeResolve(urlPath) {
  const decoded = decodeURIComponent((urlPath || '/').split('?')[0]);
  const target = path.join(ROOT, decoded.replace(/^\/+/, ''));
  const resolved = path.resolve(target);
  if (!resolved.startsWith(path.resolve(ROOT))) return null;
  return resolved;
}


function readJson(req, cb) {
  let data = '';
  req.on('data', c => { data += c; if (data.length > 1e6) req.destroy(); });
  req.on('end', () => { try { cb(JSON.parse(data||'{}')); } catch { cb({}); } });
  req.on('error', () => cb({}));
}

// -------- Local API store --------
const Store = {
  // Individual users storage
  users: new Map(), // userId -> user data
  // SSE clients for real-time balance updates (userId -> Set of clients)
  sseClients: new Map(),
  predictorSseClients: new Map(),
  settings: (() => {
    try {
      const p = path.join(ROOT, 'prod-rnd-backend-php-orchestra.100hp.app', 'mines', 'settings.html');
      const settings = JSON.parse(fs.readFileSync(p, 'utf8'));
      // Force RUB as primary currency
      return {
        ...settings,
        supportedCurrencies: ['RUB', ...settings.supportedCurrencies.filter(c => c !== 'RUB')],
        bets: { 
          RUB: { quickBets: { min: 5, max: 20000 }, defaultBet: 100, steps: [] },
          ...settings.bets 
        },
        presets: [
          { presetValue: 1, isDefault: false },
          { presetValue: 3, isDefault: true },
          { presetValue: 5, isDefault: false },
          { presetValue: 7, isDefault: false }
        ],
        rates: [
          { presetValue: 1, rates: [0.99,1.04,1.09,1.14,1.19,1.26,1.33,1.4,1.49,1.59,1.71,1.84,1.99,2.17,2.39,2.65,2.98,3.41,3.98,4.78,5.97,7.96,11.94,23.88] },
          { presetValue: 3, rates: [1.09,1.24,1.43,1.65,1.93,2.27,2.69,3.23,3.92,4.83,6.03,7.68,9.98,13.31,18.3,26.15,39.22,62.76,109.83,219.65,549.13,2196.5] },
          { presetValue: 5, rates: [1.19,1.51,1.93,2.49,3.27,4.36,5.92,8.2,11.62,16.9,25.34,39.42,64.06,109.83,201.35,402.69,906.06,1937.37,2968.69,4000] },
          { presetValue: 7, rates: [1.32,1.86,2.68,3.93,5.89,9.11,14.43,23.6,40.13,71.34,133.76,267.52,579.63,1463.71,2347.78,3231.85,4115.93,5000] }
        ],
        roundsCount: 25,
      };
    } catch {
      return {
        supportedCurrencies: ['RUB'],
        bets: { RUB: { quickBets: { min: 5, max: 20000 }, defaultBet: 100, steps: [] } },
        presets: [
          { presetValue: 1, isDefault: false },
          { presetValue: 3, isDefault: true },
          { presetValue: 5, isDefault: false },
          { presetValue: 7, isDefault: false }
        ],
        rates: [
          { presetValue: 1, rates: [0.99,1.04,1.09,1.14,1.19,1.26,1.33,1.4,1.49,1.59,1.71,1.84,1.99,2.17,2.39,2.65,2.98,3.41,3.98,4.78,5.97,7.96,11.94,23.88] },
          { presetValue: 3, rates: [1.09,1.24,1.43,1.65,1.93,2.27,2.69,3.23,3.92,4.83,6.03,7.68,9.98,13.31,18.3,26.15,39.22,62.76,109.83,219.65,549.13,2196.5] },
          { presetValue: 5, rates: [1.19,1.51,1.93,2.49,3.27,4.36,5.92,8.2,11.62,16.9,25.34,39.42,64.06,109.83,201.35,402.69,906.06,1937.37,2968.69,4000] },
          { presetValue: 7, rates: [1.32,1.86,2.68,3.93,5.89,9.11,14.43,23.6,40.13,71.34,133.76,267.52,579.63,1463.71,2347.78,3231.85,4115.93,5000] }
        ],
        roundsCount: 25,
      };
    }
  })(),
  activeSession: null,
  history: [],
};

// Move a finished (non-Active) session to history and clear references,
// so a page reload does not resurrect the previous game.
function archiveAndClearIfFinished(userId){
  const user = getUser(userId);
  const s = user.activeSession;
  if (!s) return;
  if (s.state && s.state !== 'Active') {
    const ended = publicSession(s);
    if (!user.history.find(h => h.id === ended.id)) {
      user.history.unshift(ended);
      saveUserHistoryToDisk(userId);
    }
    user.activeSession = null;
    user.sessionId = null;
  }
}

// ---------- History persistence ----------
function loadHistoryFromDisk(){
  try {
    const raw = fs.readFileSync(HISTORY_FILE,'utf8');
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.data)) {
      Store.history = parsed.data;
    }
  } catch {
    // try fallback sessions-*.html
    try {
      const dir = path.dirname(HISTORY_FILE);
      const files = fs.readdirSync(dir).filter(f=>/^sessions-.*\.html$/i.test(f));
      if (files.length){
        const raw = fs.readFileSync(path.join(dir,files[0]),'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.data)) Store.history = parsed.data;
      }
    } catch {}
  }
}

function saveHistoryToDisk(){
  try {
    const payload = { limit: Store.history.length, offset: 0, data: Store.history };
    fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(payload), 'utf8');
  } catch {}
}

// User-specific history persistence
function getUserHistoryFile(userId) {
  return path.join(ROOT, 'prod-rnd-backend-php-orchestra.100hp.app', 'mines', `user_${userId}_sessions.html`);
}

function loadUserHistoryFromDisk(userId) {
  try {
    const userHistoryFile = getUserHistoryFile(userId);
    const raw = fs.readFileSync(userHistoryFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.data)) {
      const user = getUser(userId);
      user.history = parsed.data;
    }
  } catch {
    // User history doesn't exist yet, start with empty array
  }
}

function saveUserHistoryToDisk(userId) {
  try {
    const user = getUser(userId);
    const userHistoryFile = getUserHistoryFile(userId);
    const payload = { limit: user.history.length, offset: 0, data: user.history };
    fs.mkdirSync(path.dirname(userHistoryFile), { recursive: true });
    fs.writeFileSync(userHistoryFile, JSON.stringify(payload), 'utf8');
  } catch {}
}

// User balance persistence
function getUserBalanceFile(userId) {
  return path.join(ROOT, 'prod-rnd-backend-php-orchestra.100hp.app', 'mines', `user_${userId}_balance.json`);
}

function loadUserBalanceFromDisk(userId) {
  try {
    const userBalanceFile = getUserBalanceFile(userId);
    const raw = fs.readFileSync(userBalanceFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.balance === 'number') {
      const user = getUser(userId);
      user.balance = parsed.balance;
    }
  } catch {
    // User balance doesn't exist yet, use default 1000
  }
}

function saveUserBalanceToDisk(userId) {
  try {
    const user = getUser(userId);
    const userBalanceFile = getUserBalanceFile(userId);
    const payload = { balance: user.balance, currency: user.currency, lastUpdated: new Date().toISOString() };
    fs.mkdirSync(path.dirname(userBalanceFile), { recursive: true });
    fs.writeFileSync(userBalanceFile, JSON.stringify(payload), 'utf8');
  } catch {}
}

// load on start
loadHistoryFromDisk();

function getRates(preset) {
  const e = (Store.settings.rates||[]).find(r=>r.presetValue===preset);
  return e ? e.rates.slice() : [];
}
function randomBombs(traps) {
  const set = new Set();
  while (set.size < Math.min(traps,25)) {
    const col = Math.floor(Math.random()*5); const row = Math.floor(Math.random()*5);
    set.add(`${col},${row}`);
  }
  const expectedChoices = [];
  for (let r=0;r<5;r++) for (let c=0;c<5;c++) expectedChoices.push({ value:{col:c,row:r}, category: set.has(`${c},${r}`)?1:0 });
  return { bombs:set, expectedChoices };
}

function bombMatrixFromSet(bombs) {
  const m = Array.from({length:5},()=>Array(5).fill(0));
  for (let r=0;r<5;r++) for (let c=0;c<5;c++) { if (bombs.has(`${c},${r}`)) m[r][c]=1; }
  return m;
}

function generateSaltAndHash(bombs) {
  const left = Math.random().toString(16).slice(2);
  const right = Math.random().toString(16).slice(2);
  const matrix = bombMatrixFromSet(bombs);
  const salt = `${left}|${JSON.stringify(matrix)}|${right}`;
  const hash = crypto.createHash('sha256').update(salt).digest('hex');
  return { salt, hash };
}
function buildSession(amount, presetValue, userId) {
  const id = Math.random().toString(36).slice(2)+Date.now().toString(36);
  const { bombs, expectedChoices } = randomBombs(presetValue||3);
  const { salt, hash } = generateSaltAndHash(bombs);
  const coeffs = getRates(presetValue||3);
  const user = getUser(userId);
  return {
    id, state:'Active', bet:amount, hash, salt, lastRound:0, coefficient:0, availableCashout:0,
    startDate:new Date().toISOString(), endDate:'', currency:user.currency,
    gameData:{ presetValue:presetValue||3, coefficients:coeffs, userChoices:[], expectedChoices, currentRoundId:0, rounds:[{id:0,amount:0,availableCash:0,odd:1}] },
    _internal:{ bombs }
  };
}
function finishRound(session, click, userId){
  const key = `${click.col},${click.row}`; 
  const isBomb = session._internal.bombs.has(key);
  
  // Проверяем, не была ли уже открыта эта клетка
  const alreadyOpened = session.gameData.userChoices.some(choice => 
    choice.value.col === click.col && choice.value.row === click.row
  );
  
  if (alreadyOpened) {
    // Если клетка уже открыта, просто возвращаем текущее состояние
    return;
  }
  
  // Добавляем выбор игрока
  session.gameData.userChoices.push({ 
    value: {col: click.col, row: click.row}, 
    category: isBomb ? 1 : 0 
  });
  
  const next = session.lastRound + 1;
  const coeff = session.gameData.coefficients[Math.max(0, next-1)] || session.coefficient || 0;
  
  session.lastRound = next;
  session.coefficient = isBomb ? session.coefficient : coeff;
  
  // Обновляем раунды
  session.gameData.currentRoundId = next;
  session.gameData.rounds.push({ 
    id: next, 
    amount: session.bet, 
    availableCash: Math.round(session.bet * (isBomb ? session.coefficient : coeff)), 
    odd: session.coefficient 
  });
  
  if (isBomb) { 
    // Игрок наступил на мину - игра окончена
    session.state = 'Loss'; 
    session.availableCashout = 0; 
    session.endDate = new Date().toISOString(); 
  } else { 
    // Игрок открыл безопасную клетку
    session.availableCashout = Math.round(session.bet * session.coefficient); 
    
    // Проверяем, открыл ли игрок все безопасные клетки
    const totalSafeCells = session.gameData.expectedChoices.filter(choice => choice.category === 0).length;
    const openedCells = session.gameData.userChoices.filter(choice => choice.category === 0).length;
    
    if (openedCells >= totalSafeCells) { 
      // Игрок открыл все безопасные клетки - победа!
      session.state = 'Win'; 
      session.endDate = new Date().toISOString(); 
      
      // Автоматически зачисляем выигрыш
      if (!session._internal.paid) {
        const user = getUser(userId);
        user.balance = Math.round((user.balance + session.availableCashout) * 100) / 100;
        session._internal.paid = true;
        // Send real-time balance update to user
        sendSSEToUser(userId, { type: 'balance_update', balance: user.balance, currency: user.currency });
        saveUserBalanceToDisk(userId);
      }
    } 
  }
  // Push predictor update for this user after any round outcome
  try { sendPredictorSSEToUser(userId, buildPredictorPayload(userId)); } catch {}
}
function cashout(userId){ 
  const user = getUser(userId);
  const s = user.activeSession; 
  if(!s) return; 
  if(s.state==='Active'&&s.availableCashout>0){ 
    user.balance = Math.round((user.balance + s.availableCashout) * 100) / 100; 
    s.state='Win'; 
    s.endDate=new Date().toISOString(); 
    // Send real-time balance update to user
    sendSSEToUser(userId, { type: 'balance_update', balance: user.balance, currency: user.currency });
    saveUserBalanceToDisk(userId);
  }
  user.history.unshift(publicSession(s));
  user.activeSession = null;
  user.sessionId = null;
  saveUserHistoryToDisk(userId);
};
function publicSession(s){ if(!s) return {}; const {_internal,...rest}=s; return rest; }

// Get user ID from request (from cookie, header, or generate new)
function getUserIdFromRequest(req) {
  // Try to get from cookie
  const cookieHeader = req.headers.cookie;
  if (cookieHeader) {
    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});
    if (cookies.userId) {
      return cookies.userId;
    }
  }
  
  // Try to get from header
  if (req.headers['x-user-id']) {
    return req.headers['x-user-id'];
  }
  
  // Generate new user ID
  return generateUserId();
}

// Set user ID cookie
function setUserIdCookie(res, userId) {
  res.setHeader('Set-Cookie', `userId=${userId}; Path=/; Max-Age=31536000; HttpOnly`);
}

// Функция для получения playerId в предсказателе
function getPredictorPlayerId(req) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let playerId = url.searchParams.get('playerId') || req.headers['x-user-id'];
  
  // Если playerId не указан, возвращаем ошибку
  if (!playerId) {
    return null;
  }
  
  return playerId;
}

// -------- Predictor API handler --------
function handlePredictorApi(req,res){
  return new Promise((resolve) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const p = url.pathname; const m = req.method;
    
    // CORS headers for predictor
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control, X-User-ID');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') return send(res, 204, '');
    
    if (p === '/predictor-api/mines/debug/state' && m === 'GET') {
      const playerId = getPredictorPlayerId(req);
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx' }, { 'Content-Type':'application/json' });
      }
      
      // Get user data
      const user = getUser(playerId);
      const s = user.activeSession;
      
      if (!s) {
        const payload = {
          sessionId: user.sessionId || null,
          lastRound: 0,
          bombs: [],
          revealed: [],
          safe: [],
          balance: user.balance,
          currency: user.currency,
          minesLeft: null,
          gameState: 'No active session',
          playerId: playerId
        };
        send(res,200,payload,{ 'Content-Type':'application/json' });
        return resolve(true);
      }
      
      const bombsList = [];
      try {
        s._internal.bombs.forEach(k=>{ const parts = String(k).split(','); bombsList.push({ col:Number(parts[0]), row:Number(parts[1]) }); });
      } catch {}
      const revealedList = (s.gameData.userChoices||[]).map(c=>({ col:c.value.col, row:c.value.row }));
      const safeList = (s.gameData.expectedChoices||[]).filter(e=>e && e.category===0 && e.value).map(e=>({ col:e.value.col, row:e.value.row }));
      const payload = {
        sessionId: s.id,
        lastRound: s.lastRound,
        bombs: bombsList,
        revealed: revealedList,
        safe: safeList,
        balance: user.balance,
        currency: user.currency,
        minesLeft: (s._internal && s._internal.bombs && typeof s._internal.bombs.size==='number') ? s._internal.bombs.size : null,
        gameState: s.state,
        playerId: playerId,
        bet: s.bet,
        coefficient: s.coefficient,
        availableCashout: s.availableCashout
      };
      send(res,200,payload,{ 'Content-Type':'application/json' });
      return resolve(true);
    }

    // Predictor SSE stream per player
    if (p === '/predictor-api/mines/sse' && m === 'GET') {
      const playerId = getPredictorPlayerId(req);
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx' }, { 'Content-Type':'application/json' });
      }
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      });
      if (!Store.predictorSseClients.has(playerId)) {
        Store.predictorSseClients.set(playerId, new Set());
      }
      Store.predictorSseClients.get(playerId).add(res);
      try { res.write(`data: ${JSON.stringify(buildPredictorPayload(playerId))}\n\n`); } catch {}
      req.on('close', () => {
        const set = Store.predictorSseClients.get(playerId);
        if (set) set.delete(res);
      });
      return resolve(true);
    }
    
    // API для получения информации о пользователе
    if (p === '/predictor-api/mines/user' && m === 'GET') {
      const playerId = getPredictorPlayerId(req);
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx' }, { 'Content-Type':'application/json' });
      }
      
      const user = getUser(playerId);
      const userData = {
        id: user.id,
        balance: user.balance,
        currency: user.currency,
        name: user.name,
        hasActiveSession: !!user.activeSession,
        sessionId: user.sessionId
      };
      
      send(res, 200, userData, { 'Content-Type':'application/json' });
      return resolve(true);
    }
    
    // API для получения истории игр
    if (p === '/predictor-api/mines/history' && m === 'GET') {
      const playerId = getPredictorPlayerId(req);
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx' }, { 'Content-Type':'application/json' });
      }
      
      const user = getUser(playerId);
      const history = user.history.slice(0, 10); // Последние 10 игр
      
      send(res, 200, { history, playerId }, { 'Content-Type':'application/json' });
      return resolve(true);
    }
    
    // API для подключения предсказателя к игре
    if (p === '/predictor-api/connect' && m === 'POST') {
      const playerId = getPredictorPlayerId(req);
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx' }, { 'Content-Type':'application/json' });
      }
      
      const user = getUser(playerId);
      const response = {
        success: true,
        playerId: playerId,
        gameUrl: `https://${req.headers.host}`,
        apiUrl: `https://${req.headers.host}/predictor-api`,
        message: 'Predictor connected successfully',
        user: {
          id: user.id,
          balance: user.balance,
          currency: user.currency,
          hasActiveSession: !!user.activeSession
        }
      };
      
      send(res, 200, response, { 'Content-Type':'application/json' });
      return resolve(true);
    }
    
    // API для получения полной информации о минах (только для предсказателя)
    if (p === '/predictor-api/mines/full-state' && m === 'GET') {
      const playerId = getPredictorPlayerId(req);
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx' }, { 'Content-Type':'application/json' });
      }
      
      const user = getUser(playerId);
      const s = user.activeSession;
      
      if (!s) {
        const payload = {
          success: false,
          message: 'No active game session',
          playerId: playerId,
          gameState: 'No session',
          bombs: [],
          safe: [],
          revealed: []
        };
        send(res, 200, payload, { 'Content-Type':'application/json' });
        return resolve(true);
      }
      
      // Полная информация о минах для предсказателя
      const bombsList = [];
      const safeList = [];
      const revealedList = [];
      
      try {
        // Получаем все мины
        s._internal.bombs.forEach(k => {
          const parts = String(k).split(',');
          bombsList.push({ col: Number(parts[0]), row: Number(parts[1]) });
        });
        
        // Получаем безопасные ячейки
        s.gameData.expectedChoices.forEach((choice, index) => {
          if (choice && choice.category === 0) {
            safeList.push({ col: choice.value.col, row: choice.value.row });
          }
        });
        
        // Получаем открытые ячейки
        s.gameData.userChoices.forEach(choice => {
          revealedList.push({ col: choice.value.col, row: choice.value.row });
        });
      } catch (error) {
        console.error('Error processing game data:', error);
      }
      
      const payload = {
        success: true,
        playerId: playerId,
        sessionId: s.id,
        gameState: s.state,
        lastRound: s.lastRound,
        bombs: bombsList,
        safe: safeList,
        revealed: revealedList,
        minesLeft: s._internal.bombs.size,
        balance: user.balance,
        currency: user.currency,
        bet: s.bet,
        coefficient: s.coefficient,
        availableCashout: s.availableCashout,
        timestamp: new Date().toISOString()
      };
      
      send(res, 200, payload, { 'Content-Type':'application/json' });
      return resolve(true);
    }
    
    return resolve(false);
  });
}

// -------- API handler (always returns a Promise<boolean>) --------
function handleApi(req,res){
  return new Promise((resolve) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const p = url.pathname; const m = req.method;
    const userId = getUserIdFromRequest(req);
    // Ensure a stable userId cookie on EVERY API request to avoid session mismatches
    try { setUserIdCookie(res, userId); } catch(_) {}
    
    // Load user data from disk
    loadUserHistoryFromDisk(userId);
    loadUserBalanceFromDisk(userId);
    
    // Ensure any finished session is archived before answering any API call
    archiveAndClearIfFinished(userId);
    const isApi = (p==='/mines/user'&&m==='GET')||(p==='/mines/settings'&&m==='GET')||(p==='/mines/sessions'&&m==='GET')||(p==='/mines/session'&&m==='POST')||(p==='/mines/round'&&m==='PUT')||(p==='/mines/debug/state'&&m==='GET')||(p==='/mines/debug/topup'&&(m==='POST'||m==='OPTIONS'))||(p==='/mines/debug/set-balance'&&(m==='POST'||m==='OPTIONS'))||(p==='/mines/debug/assume-user'&&(m==='POST'||m==='OPTIONS'))||(/^\/mines\/session\//.test(p)&&['GET','PUT'].includes(m));
    if(/^\/mines\/session\/[A-Za-z0-9_-]+$/.test(p) && m==='GET'){
      const id = p.split('/').pop();
      const user = getUser(userId);
      if (user.activeSession && user.activeSession.id === id) {
        send(res,200,publicSession(user.activeSession),{ 'Content-Type':'application/json' });
        return resolve(true);
      }
      const found = user.history.find(s=>s.id===id);
      if (found) { send(res,200,found,{ 'Content-Type':'application/json' }); return resolve(true); }
      // If requested session id not found, but there IS an active session,
      // return it to keep the UI interactive (prevents stuck masked board)
      if (user.activeSession) {
        send(res,200,publicSession(user.activeSession),{ 'Content-Type':'application/json' });
        return resolve(true);
      }
      // Otherwise, if there is at least one past session, return the last one
      if (user.history && user.history.length) {
        send(res,200,user.history[0],{ 'Content-Type':'application/json' });
        return resolve(true);
      }
      // Fallback: neutral payload to keep app stable
      const neutral = { id, state:'Not started', availableCashout:0, coefficient:0, lastRound:0, currency:(user&&user.currency)||'RUB', gameData:{ currentRoundId:0, availableCashout:false, rounds:[], coefficients:[], expectedChoices:[] } };
      send(res,200,neutral,{ 'Content-Type':'application/json' });
      return resolve(true);
    }
    if(p==='/mines/debug/state'&&m==='GET'){
      archiveAndClearIfFinished(userId);
      const user = getUser(userId);
      const s = user.activeSession;
      if(!s){
        const payload = {
          sessionId: user.sessionId || null,
          lastRound: 0,
          bombs: [],
          revealed: [],
          safe: [],
          balance: user.balance,
          currency: user.currency,
          minesLeft: null
        };
        send(res,200,payload,{ 'Content-Type':'application/json' });
        return resolve(true);
      }
      const bombsList = [];
      try {
        s._internal.bombs.forEach(k=>{ const parts = String(k).split(','); bombsList.push({ col:Number(parts[0]), row:Number(parts[1]) }); });
      } catch {}
      const revealedList = (s.gameData.userChoices||[]).map(c=>({ col:c.value.col, row:c.value.row }));
      const safeList = (s.gameData.expectedChoices||[]).filter(e=>e && e.category===0 && e.value).map(e=>({ col:e.value.col, row:e.value.row }));
      const payload = {
        sessionId: s.id,
        lastRound: s.lastRound,
        bombs: bombsList,
        revealed: revealedList,
        safe: safeList,
        balance: user.balance,
        currency: user.currency,
        minesLeft: (s._internal && s._internal.bombs && typeof s._internal.bombs.size==='number') ? s._internal.bombs.size : null
      };
      send(res,200,payload,{ 'Content-Type':'application/json' });
      return resolve(true);
    }
    if(!isApi) return resolve(false);
    if(p==='/mines/debug/topup'&&m==='OPTIONS'){
      send(res,204,'',{ 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'POST, OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' });
      return resolve(true);
    }
    if(p==='/mines/debug/set-balance'&&m==='OPTIONS'){
      send(res,204,'',{ 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'POST, OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' });
      return resolve(true);
    }
    if(p==='/mines/debug/assume-user'&&m==='OPTIONS'){
      send(res,204,'',{ 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'POST, OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' });
      return resolve(true);
    }
    if(p==='/mines/user'&&m==='GET'){
      archiveAndClearIfFinished(userId);
      const user = getUser(userId);
      setUserIdCookie(res, userId);
      const userData = { ...user };
      // Ensure expected flags are present for frontend heuristics
      userData.hasActiveSession = !!user.activeSession && user.activeSession.state === 'Active';
      userData.sessionId = user.activeSession ? user.activeSession.id : (user.sessionId || null);
      send(res,200,userData,{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' });
      return resolve(true);
    }
    if(p==='/mines/sse'&&m==='GET'){
      // Server-Sent Events endpoint for real-time balance updates
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Cache-Control'
      });
      
      const user = getUser(userId);
      setUserIdCookie(res, userId);
      
      // Send initial balance
      res.write(`data: ${JSON.stringify({ type: 'balance_update', balance: user.balance, currency: user.currency })}\n\n`);
      
      // Add client to user's SSE clients set
      if (!Store.sseClients.has(userId)) {
        Store.sseClients.set(userId, new Set());
      }
      Store.sseClients.get(userId).add(res);
      
      // Remove client when connection closes
      req.on('close', () => {
        const userClients = Store.sseClients.get(userId);
        if (userClients) {
          userClients.delete(res);
        }
      });
      
      return resolve(true);
    }
    if(p==='/mines/settings'&&m==='GET'){ send(res,200,Store.settings,{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' }); return resolve(true); }
    if(p==='/mines/debug/topup'&&m==='POST'){
      readJson(req, body=>{
        const amount = Number(body.amount||0);
        const max = 20000;
        if(!Number.isFinite(amount) || amount<=0){ send(res,400,{ error:{ type:'badAmount', message:'Amount must be positive number' }},{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' }); return resolve(true);} 
        if(amount>max){ send(res,400,{ error:{ type:'tooHigh', message:`Max topup is ${max}` }},{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' }); return resolve(true);} 
        const user = getUser(userId);
        const before = user.balance;
        user.balance = Math.round((user.balance + amount)*100)/100;
        const delta = Math.round((user.balance - before)*100)/100;
        saveUserBalanceToDisk(userId);
        send(res,200,{ ok:true, credited: delta, balance: user.balance, currency: user.currency },{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' });
        // Send real-time balance update to user
        sendSSEToUser(userId, { type: 'balance_update', balance: user.balance, currency: user.currency });
        return resolve(true);
      });
      return; // will resolve in callback
    }
    if(p==='/mines/debug/set-balance'&&m==='POST'){
      readJson(req, body=>{
        const value = Number(body.value);
        if(!Number.isFinite(value)){
          send(res,400,{ error:{ type:'badAmount', message:'Value must be a number' }},{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' });
          return resolve(true);
        }
        const user = getUser(userId);
        user.balance = Math.round(value * 100) / 100;
        saveUserBalanceToDisk(userId);
        send(res,200,{ ok:true, balance: user.balance, currency: user.currency },{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' });
        // Push real-time balance update to user
        sendSSEToUser(userId, { type: 'balance_update', balance: user.balance, currency: user.currency });
        return resolve(true);
      });
      return; // will resolve in callback
    }
    if(p==='/mines/debug/assume-user'&&m==='POST'){
      readJson(req, body=>{
        const requested = String(body.userId||'').trim();
        if (!requested) { send(res,400,{ error:{ type:'badUserId' } },{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' }); return resolve(true); }
        // Create or get this user and set cookie so the app uses it
        getUser(requested);
        setUserIdCookie(res, requested);
        send(res,200,{ ok:true, userId: requested },{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' });
        return resolve(true);
      });
      return; // will resolve in callback
    }
    if(p==='/mines/sessions'&&m==='GET'){
      const user = getUser(userId);
      // Always return user's history (used for "My" tab). Auto-restore is prevented elsewhere.
      send(res,200,{ limit:30, offset:0, data:user.history.slice(0,30) },{ 'Content-Type':'application/json' });
      return resolve(true);
    }
    if(p==='/mines/session'&&m==='POST'){
      readJson(req, body=>{
        const amount=Number(body.amount||0), preset=Number(body.presetValue||3);
        const user = getUser(userId);
        const qb = Store.settings.bets[user.currency]?.quickBets || { min:1,max:100 };
        // If there is a finished session lingering (Loss/Win), archive and clear it to allow new game
        if (user.activeSession && user.activeSession.state !== 'Active') {
          const ended = publicSession(user.activeSession);
          if (!user.history.find(s=>s.id===ended.id)) { user.history.unshift(ended); saveUserHistoryToDisk(userId); }
          user.activeSession = null;
          user.sessionId = null;
        }
        if(amount<qb.min) { send(res,400,{ error:{ type:'smallBid', header:'Rate below the minimum', message:'Rate below the minimum' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
        if(amount>qb.max) { send(res,400,{ error:{ type:'highBid', header:'Rate above the maximum', message:'Rate above the maximum' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
        if(amount>user.balance) { send(res,400,{ error:{ type:'insufficientFunds', header:'Insufficient funds', message:'Insufficient funds' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
        if(user.activeSession && user.activeSession.state==='Active') {
          // Instead of error, return current active session so UI can продолжить игру
          send(res,200,publicSession(user.activeSession),{ 'Content-Type':'application/json' });
          return resolve(true);
        }
        user.balance = Math.round((user.balance - amount) * 100) / 100; 
        user.activeSession = buildSession(amount, preset, userId);
        user.sessionId = user.activeSession.id;
        saveUserBalanceToDisk(userId);
        // Send real-time balance update to user
        sendSSEToUser(userId, { type: 'balance_update', balance: user.balance, currency: user.currency });
        // Push predictor snapshot on new session
        try { sendPredictorSSEToUser(userId, buildPredictorPayload(userId)); } catch {}
        send(res,200,publicSession(user.activeSession),{ 'Content-Type':'application/json' });
        return resolve(true);
      });
      return; // will resolve in callback
    }
    if(p==='/mines/round'&&m==='PUT'){
      readJson(req, body=>{
        const user = getUser(userId);
        if(!user.activeSession) {
          // When no active session, hard return neutral but consistent payload
          const neutral = {
            userChoices: [],
            state: 'Not started',
            availableCashout: 0,
            coefficient: 0,
            lastRound: 0,
            gameData: {
              currentRoundId: 0,
              availableCashout: false,
              rounds: [],
              coefficients: [],
              expectedChoices: []
            }
          };
          send(res,200,neutral,{ 'Content-Type':'application/json' });
          return resolve(true);
        }
        const click={ col:Number(body.col), row:Number(body.row) };
        const dup = user.activeSession.gameData.userChoices.some(c=>c.value.col===click.col&&c.value.row===click.row);
        if(!dup){
          finishRound(user.activeSession, click, userId);
        } // If duplicate, fall through and return current state as 200 (idempotent)
        const s = user.activeSession;
        const payload = {
          userChoices: s.gameData.userChoices,
          state: s.state,
          availableCashout: s.availableCashout || 0,
          coefficient: s.coefficient || 0,
          lastRound: s.lastRound || 0,
          gameData: {
            currentRoundId: s.gameData.currentRoundId,
            availableCashout: s.availableCashout > 0,
            rounds: s.gameData.rounds,
            coefficients: s.gameData.coefficients,
            expectedChoices: s.gameData.expectedChoices
          }
        };
        send(res,200,payload,{ 'Content-Type':'application/json' });
        return resolve(true);
      });
      return; // will resolve in callback
    }
    if(/^\/mines\/session\//.test(p)&&m==='PUT'){
      // Perform cashout and always return a complete, finalized session object
      const endedBefore = (() => {
        const u = getUser(userId);
        return u && u.activeSession ? publicSession(u.activeSession) : null;
      })();
      cashout(userId);
      const user = getUser(userId);
      const ended = user.history && user.history.length ? user.history[0] : endedBefore || {};
      // Push predictor snapshot after cashout
      try { sendPredictorSSEToUser(userId, buildPredictorPayload(userId)); } catch {}
      send(res,200,ended,{ 'Content-Type':'application/json' });
      return resolve(true);
    }
    return resolve(false);
  });
}

const server = http.createServer(async (req,res)=>{
  try{
    const urlPath = req.url || '/';

    // Handle root path - serve 1waion classic shell and embed our Mines index inside it
    if (urlPath === '/' || urlPath === '/index.html') {
      const classicPath = path.join(ROOT,'1waion.life','casino','play','v_1winGamesMines_classic.html');
      if (fs.existsSync(classicPath)) {
        try { const uid = getUserIdFromRequest(req); setUserIdCookie(res, uid); } catch(_){ }
        let html = fs.readFileSync(classicPath,'utf8');
        const unfreeze = `<script>(function(){try{
          // Stop SW/redirect waiters if present
          if (window.cda && window.cda.isEnabledPromise && typeof window.cda.isEnabledPromise.resolve==='function') {
            window.cda.isEnabledPromise.resolve(false);
          }
          // Hide loader overlay and allow scrolling
          var loader=document.getElementById('loader');
          if(loader){ loader.classList.add('hidden'); loader.classList.add('transparent'); }
          document.body && document.body.classList.remove('withOverflowHidden');
          // Create unified iframe with Mines
          var existing=document.getElementById('unified-mines');
          if(!existing){
            var style=document.createElement('style');
            style.id='unified-mines-style';
            style.textContent='#unified-mines{position:fixed;inset:0;border:0;width:100vw;height:100vh;z-index:1;background:#090f1e}';
            document.head.appendChild(style);
            var frame=document.createElement('iframe');
            frame.id='unified-mines';
            frame.src='/mines/';
            frame.setAttribute('loading','eager');
            document.body.appendChild(frame);
          }
          // Notify that platform root is mounted
          try{ window.dispatchEvent(new CustomEvent('1w:platformRootMounted')); }catch(e){}
          // Safety fallback to ensure UI appears
          setTimeout(function(){
            var l=document.getElementById('loader'); if(l){ l.classList.add('hidden'); l.classList.add('transparent'); }
            document.body && document.body.classList.remove('withOverflowHidden');
          }, 800);
        }catch(e){}})();</script>`;
        html = html.replace(/<\/body>/i, unfreeze + '</body>');
        return send(res,200,html,{ 'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-store' });
      }
      // Fallback directly to /mines/
      const minesPath = path.join(ROOT,'prod-rnd-frontend-php-orchestra.100hp.app','mines','index.html');
      if (fs.existsSync(minesPath)) {
        try { const uid = getUserIdFromRequest(req); setUserIdCookie(res, uid); } catch(_){ }
        return send(res,200,fs.readFileSync(minesPath,'utf8'),{ 'Content-Type':'text/html; charset=utf-8' });
      }
      return send(res,404,'Main page not found',{ 'Content-Type':'text/plain; charset=utf-8' });
    }

    // (keep /mines/ serving the game normally)
    // Handle mines game path
    if (urlPath === '/mines/' || urlPath === '/mines') {
      const minesPath = path.join(ROOT, 'prod-rnd-frontend-php-orchestra.100hp.app', 'mines', 'index.html');
      if (fs.existsSync(minesPath)) {
        try { const uid = getUserIdFromRequest(req); setUserIdCookie(res, uid); } catch(_){}
        return send(res, 200, fs.readFileSync(minesPath, 'utf8'), { 'Content-Type': 'text/html; charset=utf-8' });
      }
      return send(res, 404, 'Mines game not found', { 'Content-Type': 'text/plain' });
    }

    // Minimal manifest
    if (urlPath === '/manifest.json') {
      return send(res,200,{ name:'1WIN', short_name:'1WIN', start_url:'/mines/', display:'standalone', icons:[] },{ 'Content-Type':'application/manifest+json' });
    }
    // Google OAuth2 start
    if (urlPath === '/auth/google') {
      if (!GOOGLE_CLIENT_ID) {
        return send(res,400,'Google OAuth not configured');
      }
      const origin = `https://${req.headers.host}`.replace('http://','https://');
      const redirectUri = `${origin}/auth/google/callback`;
      const params = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: 'openid email profile',
        access_type: 'online',
        include_granted_scopes: 'true',
        prompt: 'select_account'
      });
      return send(res,302,'',{ Location: `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}` });
    }
    // Google OAuth2 callback
    if (urlPath === '/auth/google/callback') {
      const u = new URL(req.url, `http://${req.headers.host}`);
      const code = u.searchParams.get('code');
      if (!code) return send(res,400,'Missing code');
      if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) return send(res,400,'Google OAuth not configured');
      const origin = `https://${req.headers.host}`.replace('http://','https://');
      const redirectUri = `${origin}/auth/google/callback`;
      (async()=>{
        try{
          // Exchange code for tokens
          const tokenRes = await fetch('https://oauth2.googleapis.com/token',{
            method:'POST',
            headers:{ 'Content-Type':'application/x-www-form-urlencoded' },
            body:new URLSearchParams({
              code,
              client_id: GOOGLE_CLIENT_ID,
              client_secret: GOOGLE_CLIENT_SECRET,
              redirect_uri: redirectUri,
              grant_type: 'authorization_code'
            })
          });
          const tokenJson = await tokenRes.json();
          const idToken = tokenJson.id_token;
          if (!idToken) return send(res,400,'No id_token');
          // Decode id_token (no verification here; acceptable for dev/local)
          const payload = JSON.parse(Buffer.from(idToken.split('.')[1]||'', 'base64').toString('utf8')||'{}');
          const sub = payload.sub;
          const email = payload.email;
          const name = payload.name || payload.given_name || 'Player';
          const picture = payload.picture || '';
          const user = getOrCreateUserForGoogle(sub, email, name, picture);
          setUserIdCookie(res, user.id);
          return send(res,302,'',{ Location:'/mines/' });
        }catch(e){
          return send(res,500,'Google auth failed');
        }
      })();
      return;
    }
    // Health/probe files from wrapper
    if (urlPath.startsWith('/1.txt')) return send(res,200,'ok',{ 'Content-Type':'text/plain; charset=utf-8' });
    if (urlPath === '/sw.9624630e.js') return send(res,200,'// noop',{ 'Content-Type':'application/javascript; charset=utf-8' });
    // Service worker mock (optional)
    if (urlPath === '/mines/mock-sw.js') {
      const p = path.join(ROOT,'prod-rnd-frontend-php-orchestra.100hp.app','mines','mock-sw.js');
      if (fs.existsSync(p)) return send(res,200,fs.readFileSync(p),{ 'Content-Type':'application/javascript; charset=utf-8' });
      return send(res,200,'// no sw',{ 'Content-Type':'application/javascript; charset=utf-8' });
    }

    // Serve Mines app normally (no predictor page on 8080)

    // No external proxy: serve only local assets and Mines API

    // Predictor endpoint - separate from main game
    if (urlPath === '/predictor' || urlPath === '/predictor.html') {
      // Inject auto-detection script for Player ID
      let html = fs.readFileSync(path.join(ROOT,'predictor.html'),'utf8');
      
      const autoDetectScript = `<script>
        (function() {
          // Auto-detect Player ID and update URL if needed
          const urlParams = new URLSearchParams(window.location.search);
          let playerId = urlParams.get('playerId');
          
          if (!playerId) {
            // Try to get from cookies first
            const cookieMatch = document.cookie.match(/userId=([^;]+)/);
            if (cookieMatch) {
              playerId = cookieMatch[1];
              console.log('🎮 Player ID from cookie:', playerId);
            } else {
              // Get from API
              fetch('/mines/user')
                .then(r => r.json())
                .then(data => {
                  if (data.id) {
                    playerId = data.id;
                    console.log('🎮 Player ID from API:', playerId);
                    console.log('💰 Balance:', data.balance, data.currency);
                    console.log('🔗 Predictor URL:', window.location.origin + '/predictor?playerId=' + playerId);
                    
                    // Update URL with Player ID
                    const newUrl = window.location.origin + '/predictor?playerId=' + playerId;
                    window.history.replaceState({}, '', newUrl);
                  }
                })
                .catch(e => console.log('Failed to get Player ID:', e));
            }
          }
        })();
      </script>`;
      
      html = html.replace('</head>', autoDetectScript + '</head>');
      return send(res,200,html,{ 'Content-Type':'text/html; charset=utf-8' });
    }
    
    // Casino shell that embeds our Mines app inside a 1waion-like layout
    if (urlPath === '/casino/mines' || urlPath === '/casino/mines.html') {
      const shell = [
        '<!doctype html><html lang="ru"><head>',
        '<meta charset="utf-8"/>',
        '<meta name="viewport" content="width=device-width,initial-scale=1"/>',
        '<title>1win — Mines</title>',
        '<link rel="icon" href="/favicon.svg"/>',
        '<link href="/1waion.life/cdn/css/index.e36644051.css" rel="stylesheet">',
        '<style>',
        '  html,body{height:100%;background:#090f1e;margin:0}',
        '  #header{position:fixed;left:0;right:0;top:0;height:56px;display:flex;align-items:center;gap:16px;padding:10px 16px;background:linear-gradient(90deg,rgba(14,18,26,.95),rgba(14,18,26,.75));z-index:1000}',
        '  #header img{height:28px;display:block}',
        '  #nav{display:flex;gap:14px;margin-left:10px}',
        '  #nav a{color:#fff;text-decoration:none;font:600 13px/1 Segoe UI,Arial,sans-serif;opacity:.92}',
        '  #side{position:fixed;left:0;top:56px;bottom:0;width:240px;background:linear-gradient(180deg,#0e121a,#121826);z-index:900;overflow:auto}',
        '  #side h4{margin:12px 10px 6px;color:#8fa0b2;font:700 12px/1 Segoe UI,Arial,sans-serif;text-transform:uppercase;letter-spacing:.04em}',
        '  #side a{display:block;padding:10px 12px;color:#dbe7ff;text-decoration:none;font:600 13px/1 Segoe UI,Arial,sans-serif;opacity:.9}',
        '  #side a:hover{background:rgba(255,255,255,.06)}',
        '  #content{position:relative;padding-top:56px;padding-left:240px;height:100%}',
        '  #frame{position:absolute;inset:56px 0 0 240px;border:0;width:calc(100% - 240px);height:calc(100% - 56px)}',
        '</style>',
        '</head><body>',
        '<div id="header">',
        '  <a href="/1waion.life/"><img src="/1waion.life/img/logo/main/1win-normal.svg" alt="1win"></a>',
        '  <nav id="nav">',
        '    <a href="/casino/mines">Mines</a>',
        '    <a href="/1waion.life/casino/play/v_1winGamesMines_classic.html">Classic</a>',
        '    <a href="/predictor-setup">Predictor</a>',
        '  </nav>',
        '  <div style="margin-left:auto"><a href="/affiliate:link_visit" style="color:#9fd3ff;font:600 12px/1 Segoe UI,Arial,sans-serif;text-decoration:none">Affiliate</a></div>',
        '</div>',
        '<aside id="side">',
        '  <h4>Категории</h4>',
        '  <a href="/casino/mines">1win Games</a>',
        '  <a href="/1waion.life/casino/play/v_1winGamesMines_classic.html">Classic Mines</a>',
        '  <a href="/mines/">Быстрые игры</a>',
        '  <a href="/mines/">Популярные</a>',
        '</aside>',
        '<main id="content"></main>',
        '<iframe id="frame" src="/mines/"></iframe>',
        '</body></html>'
      ].join('');
      return send(res,200,shell,{ 'Content-Type':'text/html; charset=utf-8' });
    }
    
    if (urlPath === '/predictor-setup' || urlPath === '/predictor-setup.html') {
      return send(res,200,fs.readFileSync(path.join(ROOT,'predictor-setup.html'),'utf8'),{ 'Content-Type':'text/html; charset=utf-8' });
    }
    
    // Predictor API endpoints
    if (urlPath.startsWith('/predictor-api/')) {
      handlePredictorApi(req,res).then(handled => { if (handled) return; });
      return;
    }

    // Quick mocks to prevent classic shell from hanging on external calls
    if (urlPath === '/api/v1/sw/check') { return send(res,200,'hi',{ 'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store' }); }
    if (urlPath === '/api/domains/web') { return send(res,200,JSON.stringify({ items: [] }),{ 'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store' }); }
    if (urlPath === '/fss/swa') { return send(res,200,JSON.stringify({ ok:true }),{ 'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store' }); }
    if (urlPath.startsWith('/ed')) { return send(res,204,'',{ 'Access-Control-Allow-Origin':'*' }); }
    if (urlPath === '/cdn-cgi/challenge-platform/scripts/jsd/main.js') { return send(res,200,'// cf noop',{ 'Content-Type':'application/javascript; charset=utf-8','Cache-Control':'no-store' }); }

    // Local API (works even without SW)
    if (urlPath.startsWith('/mines')) {
      handleApi(req,res).then(handled => { if (handled) return; });
      return;
    }
    
    // Serve anything under /1waion.life/* from the local 1waion.life directory
    if (urlPath === '/1waion.life' || urlPath === '/1waion.life/') {
      const indexGuess = path.join(ROOT,'1waion.life','index.html');
      if (fs.existsSync(indexGuess)) {
        return send(res,200,fs.readFileSync(indexGuess,'utf8'),{ 'Content-Type':'text/html; charset=utf-8' });
      }
      // If no index, list is not allowed; return 404
      return send(res,404,'Not found');
    }
    if (urlPath.startsWith('/1waion.life/')) {
      const localPath = urlPath.replace(/^\/1waion\.life\//,'');
      const fp = path.join(ROOT,'1waion.life', localPath);
      if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
        const ct = contentType(fp);
        return send(res,200,fs.readFileSync(fp),{ 'Content-Type': ct });
      }
      // Try .html fallback for single-line files in this bundle
      if (fs.existsSync(fp + '.html')) {
        const ct = contentType(fp + '.html');
        return send(res,200,fs.readFileSync(fp + '.html'),{ 'Content-Type': ct });
      }
      return send(res,404,'Not found');
    }

    // 1waion asset mapping (serve local static for classic shell)
    const oneRoot = path.join(ROOT,'1waion.life');
    const onePrefixes = ['/cdn/','/img/','/core-js/','/firebase/','/threatmetrix/','/fss/','/api/','/cdn-cgi/','/common/','/analytics/'];
    const cleanUrlPath = (urlPath || '/').split('?')[0];
    if (cleanUrlPath === '/sw.7432934f.js') {
      const fp = path.join(oneRoot,'sw.7432934f.js');
      if (fs.existsSync(fp)) return send(res,200,fs.readFileSync(fp,'utf8'),{ 'Content-Type':'application/javascript; charset=utf-8', 'Cache-Control':'no-store' });
    }
    if (cleanUrlPath === '/version.json') {
      const fp = path.join(oneRoot,'version.json');
      if (fs.existsSync(fp)) return send(res,200,fs.readFileSync(fp,'utf8'),{ 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store' });
    }
    if (cleanUrlPath === '/affiliatelink_visit.html') {
      const fp = path.join(oneRoot,'affiliatelink_visit.html');
      if (fs.existsSync(fp)) return send(res,200,fs.readFileSync(fp,'utf8'),{ 'Content-Type':'text/html; charset=utf-8' });
    }
    // Special: classic requests /fss/web-app-manifest?h=...; serve local HTML file
    if (cleanUrlPath === '/fss/web-app-manifest') {
      const fp = path.join(oneRoot,'fss','web-app-manifest.html');
      if (fs.existsSync(fp)) return send(res,200,fs.readFileSync(fp,'utf8'),{ 'Content-Type':'application/manifest+json; charset=utf-8','Cache-Control':'no-store' });
    }
    if (onePrefixes.some(p=>cleanUrlPath.startsWith(p))) {
      const fp = path.join(oneRoot, cleanUrlPath.replace(/^\//,''));
      if (fs.existsSync(fp)) {
        const ct = contentType(fp);
        return send(res,200,fs.readFileSync(fp),{ 'Content-Type': ct });
      }
    }
    // Generic fallback: if a file exists under 1waion.life matching the path, serve it
    {
      const fp = path.join(oneRoot, cleanUrlPath.replace(/^\//,''));
      if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
        const ct = contentType(fp);
        return send(res,200,fs.readFileSync(fp),{ 'Content-Type': ct });
      }
    }
    
    

    // Map asset root used by bundle
    let pth = urlPath;
    if (pth.startsWith('/static/')) pth = path.posix.join('/prod-rnd-frontend-php-orchestra.100hp.app', pth);
    if (pth === '/favicon.svg') pth = path.posix.join('/prod-rnd-frontend-php-orchestra.100hp.app', pth);
    if (pth === '/manifest.json') pth = path.posix.join('/prod-rnd-frontend-php-orchestra.100hp.app', pth);

    // Handle static files first for Vercel
    if (urlPath.startsWith('/static/') || urlPath === '/favicon.svg' || urlPath === '/manifest.json') {
      try {
        // Try multiple paths for static files
        const possiblePaths = [
          path.join(ROOT, pth.replace(/^\//, '')),
          path.join(ROOT, 'public', urlPath),
          path.join(ROOT, urlPath),
          path.join(ROOT, 'prod-rnd-frontend-php-orchestra.100hp.app', urlPath)
        ];
        
        let filePath = null;
        for (const testPath of possiblePaths) {
          if (fs.existsSync(testPath)) {
            filePath = testPath;
            break;
          }
        }
        
        if (filePath) {
          const ext = path.extname(filePath);
          const contentType = {
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.svg': 'image/svg+xml',
            '.png': 'image/png',
            '.webp': 'image/webp',
            '.woff2': 'font/woff2',
            '.woff': 'font/woff',
            '.mp3': 'audio/mpeg',
            '.json': 'application/json'
          }[ext] || 'application/octet-stream';
          
          const content = fs.readFileSync(filePath);
          send(res, 200, content, { 'Content-Type': contentType });
          return;
        } else {
          // For missing JS chunks, return empty module to prevent errors
          if (urlPath.includes('.chunk.js')) {
            send(res, 200, '// Empty chunk', { 'Content-Type': 'application/javascript' });
            return;
          } else if (urlPath.includes('.woff2') || urlPath.includes('.woff')) {
            // For missing fonts, return empty response
            send(res, 200, '', { 'Content-Type': 'font/woff2' });
            return;
          } else {
            send(res, 404, 'File not found');
            return;
          }
        }
      } catch (error) {
        send(res, 500, 'Error reading file');
        return;
      }
    }

    // Static serving
    const resolved = safeResolve(pth);
    if (!resolved) return send(res,403,'Forbidden');
    let filePath = resolved;
    if (pth.endsWith('/')) { const idx=path.join(resolved,'index.html'); if (fs.existsSync(idx)) filePath=idx; }
    if (!fs.existsSync(filePath)) {
      // Synthesize missing chunks so app doesn't hard-crash
      const m = /static\/js\/([0-9]+)\.[A-Za-z0-9]+\.chunk\.js$/.exec(pth);
      if (m) {
        const id = m[1];
        const code = `;(self.webpackChunkcoin_flip_app_ts=self.webpackChunkcoin_flip_app_ts||[]).push([[${id}],{${id}:(m)=>{m.exports={};}}]);`;
        return send(res,200,code,{ 'Content-Type':'application/javascript; charset=utf-8', 'Cache-Control':'no-store' });
      }
      if (fs.existsSync(filePath + '.html')) filePath = filePath + '.html';
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      // Try to find mines game in different locations
      const minesPaths = [
        path.join(ROOT,'prod-rnd-frontend-php-orchestra.100hp.app','mines','index.html'),
        path.join(ROOT,'mines','index.html'),
        path.join(ROOT,'1waion.life','casino','play','v_1winGamesMines_classic.html'),
        path.join(ROOT,'вот что скачал','1waion.life','casino','play','v_1winGamesMines_classic.html')
      ];
      
      for (const minesPath of minesPaths) {
        if (fs.existsSync(minesPath)) {
          return send(res,200,fs.readFileSync(minesPath),{ 'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-store' });
        }
      }
      
      return send(res,404,'Mines game not found');
    }

    const ct = contentType(filePath);
    const noCache = /\.(?:html|js)$/.test(filePath);
    const headers = { 'Content-Type': ct, 'Cache-Control': noCache ? 'no-store' : 'public, max-age=31536000, immutable' };
    // Inject runtime translation for Mines index
    if (/html/.test(ct) && /prod-rnd-frontend-php-orchestra\.100hp\.app[\\\/]mines[\\\/]index\.html$/.test(filePath)) {
      let html = fs.readFileSync(filePath,'utf8');
      // Inject 1waion header + left sidebar overlay around the game
      const casinoChrome = [
        '<style id="onewin-chrome-style">',
        '  :root{--onewin-header-h:56px;--onewin-side-w:240px;--onewin-bg:#0e121a;--onewin-bg2:#121826;} ',
        '  body{padding-top:var(--onewin-header-h)!important;padding-left:var(--onewin-side-w)!important;background:#0c1018!important}',
        '  #onewin-header{position:fixed;inset:0 0 auto 0;height:var(--onewin-header-h);z-index:2147483600;display:flex;align-items:center;gap:16px;padding:10px 16px;background:linear-gradient(90deg,rgba(14,18,26,.95),rgba(14,18,26,.75));box-shadow:0 2px 10px rgba(0,0,0,.35);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}',
        '  #onewin-header a{color:#fff;text-decoration:none;font:600 13px/1.2 Segoe UI,Arial,sans-serif;opacity:.92}',
        '  #onewin-logo{height:28px;display:block;filter:drop-shadow(0 1px 1px rgba(0,0,0,.4))}',
        '  #onewin-nav{display:flex;gap:14px;margin-left:10px}',
        '  #onewin-user{margin-left:auto;display:flex;gap:10px;align-items:center}',
        '  #onewin-side{position:fixed;inset:var(--onewin-header-h) auto 0 0;width:var(--onewin-side-w);background:linear-gradient(180deg,var(--onewin-bg),var(--onewin-bg2));z-index:2147483500;box-shadow:2px 0 10px rgba(0,0,0,.35)}',
        '  #onewin-side .grp{padding:12px 10px 6px;color:#8fa0b2;font:700 12px/1 Segoe UI,Arial,sans-serif;text-transform:uppercase;letter-spacing:.04em}',
        '  #onewin-side a{display:flex;align-items:center;gap:10px;padding:8px 12px;color:#dbe7ff;text-decoration:none;font:600 13px/1 Segoe UI,Arial,sans-serif;opacity:.9}',
        '  #onewin-side a:hover{background:rgba(255,255,255,.06)}',
        '  #onewin-collapse{position:fixed;top:calc(var(--onewin-header-h) + 8px);left:calc(var(--onewin-side-w) + 8px);z-index:2147483601;background:#1b2230;color:#bcd2ff;border:none;border-radius:6px;padding:6px 8px;font:600 11px/1 Segoe UI,Arial,sans-serif;cursor:pointer;opacity:.9}',
        '  body.onewin-narrow{padding-left:72px!important}',
        '  body.onewin-narrow #onewin-side{width:64px}',
        '  body.onewin-narrow #onewin-collapse{left:72px}',
        '</style>',
        '<div id="onewin-header">',
        '  <a href="/1waion.life/"><img id="onewin-logo" src="/1waion.life/img/logo/main/1win-normal.svg" alt="1win"/></a>',
        '  <nav id="onewin-nav">',
        '    <a href="/mines/">Mines</a>',
        '    <a href="/1waion.life/casino/play/v_1winGamesMines_classic.html">Classic</a>',
        '    <a href="/predictor-setup">Predictor</a>',
        '  </nav>',
        '  <div id="onewin-user">',
        '    <a href="/affiliate:link_visit" style="color:#9fd3ff">Affiliate</a>',
        '  </div>',
        '</div>',
        '<aside id="onewin-side">',
        '  <div class="grp">Категории</div>',
        '  <a href="/mines/">1win Games</a>',
        '  <a href="/1waion.life/casino/play/v_1winGamesMines_classic.html">Classic Mines</a>',
        '  <a href="/mines/">Быстрые игры</a>',
        '  <a href="/mines/">Популярные</a>',
        '</aside>',
        '<button id="onewin-collapse" type="button">≡</button>',
        '<script>(function(){try{',
        '  var btn=document.getElementById("onewin-collapse");',
        '  if(btn){ btn.addEventListener("click",function(){ document.body.classList.toggle("onewin-narrow"); }); }',
        '}catch(e){}})();</script>'
      ].join('');
      html = html.replace(/<body[^>]*>/i, m => m + casinoChrome);
      // Inject Google Sign-In button (top-right small link)
      const googleBtn = '<a href="/auth/google" style="position:fixed;top:10px;left:10px;z-index:2147483647;font:600 12px/1.2 sans-serif;color:#fff;background:#4285F4;padding:6px 10px;border-radius:4px;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,.2)">Войти через Google</a>';
      html = html.replace(/<body[^>]*>/i, match => match + googleBtn);
      const inject = `<script>(function(){try{
        // Order matters to avoid partial overlaps (HowToPlay before Play)
        const rules=[
          {re:/\bHowToPlay\b/g, to:'Как играть'},
          {re:/(^|\s)Play(\s|$)/g, to:'$1Играть$2'},
          {re:/\bMy\b/g, to:'Мои'},
          {re:/\bPlayer\b/g, to:'Игрок'},
          {re:/\bBet\b/g, to:'Ставка'},
          {re:/\bCoef\b/g, to:'Коэф'},
          {re:/\bWin\b/g, to:'Выигрыш'},
          {re:/\bTraps\b/g, to:'Ловушки'},
          {re:/\bYourWinnings\b/g, to:'Ваш выигрыш'},
          {re:/\bNextStep\b/g, to:'След. шаг'},
          {re:/\bTakeMoney\b/g, to:'Забрать'},
          {re:/\bYouWon\b/g, to:'Вы выиграли'}
        ];
        function trText(t){ if(!t) return t; if(/\bLive\b/.test(t) || /CAVEMINES/.test(t)) return t; let out=t; for(const {re,to} of rules){ out=out.replace(re,to);} return out; }
        function trNode(n){ if(n.nodeType===Node.TEXT_NODE){ n.nodeValue=trText(n.nodeValue); } else if(n.nodeType===Node.ELEMENT_NODE){ if(n.childNodes&&n.childNodes.length===1&&n.firstChild.nodeType===Node.TEXT_NODE){ n.textContent=trText(n.textContent);} } }
        function run(){ try{ const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null); let node; while(node=w.nextNode()){ trNode(node);} document.querySelectorAll('button,span,div,li,th,strong,b').forEach(trNode);}catch(_){} }
        let _trTimer=null; const mo=new MutationObserver(()=>{ clearTimeout(_trTimer); _trTimer=setTimeout(run,120); });
        run(); mo.observe(document.body,{childList:true,subtree:true,characterData:true});
      }catch(_){}})();</script>`;
      
      // SSE for real-time balance updates
      const sseScript = `<script>(function(){
        // Connect to SSE for real-time balance updates
        const eventSource = new EventSource('/mines/sse');
        
        // Function to force React re-render by intercepting fetch calls
        let currentBalance = null; // Unknown until fetched/SSE
        // Local cache helpers (client-side persistence)
        function setCache(key, value){ try { localStorage.setItem(key, JSON.stringify({ v:value, t:Date.now() })); } catch(_){} }
        function getCache(key){ try { const raw = localStorage.getItem(key); if(!raw) return null; const p = JSON.parse(raw); return p && p.v; } catch(_) { return null; } }
        
        function forceReactUpdate(newBalance) {
          if (typeof newBalance === 'number' && !Number.isNaN(newBalance)) {
            currentBalance = newBalance;
          }
          // Method 1: Update all balance elements directly
          const balanceSelectors = [
            '[data-testid="balance"]',
            '.balance',
            '[class*="balance"]',
            '[class*="Balance"]',
            '[class*="user-balance"]',
            '[class*="userBalance"]',
            'span:contains("₽")',
            'span:contains("RUB")'
          ];
          
          balanceSelectors.forEach(selector => {
            try {
              const elements = document.querySelectorAll(selector);
              elements.forEach(el => {
                if (typeof currentBalance === 'number' && el.textContent && (el.textContent.includes('₽') || el.textContent.includes('RUB'))) {
                  el.textContent = currentBalance.toLocaleString('ru-RU') + ' ₽';
                  // Trigger input event to notify React
                  el.dispatchEvent(new Event('input', { bubbles: true }));
                }
              });
            } catch (e) {}
          });
          
          // Method 2: Intercept fetch calls to /mines/user and return updated balance
          const originalFetch = window.fetch;
          window.fetch = function(...args) {
            const [url, options] = args;
            if (typeof url === 'string' && url.includes('/mines/user')) {
              return originalFetch.apply(this, args).then(response => {
                if (response.ok) {
                  return response.clone().json().then(data => {
                    if (typeof currentBalance === 'number') data.balance = currentBalance;
                    // Cache user for reloads
                    try { setCache('user_last', data); } catch(_){ }
                    return new Response(JSON.stringify(data), {
                      status: 200,
                      headers: response.headers
                    });
                  });
                }
                // Fallback to cached user if available
                try {
                  const cached = getCache('user_last');
                  if (cached && typeof currentBalance === 'number') {
                    cached.balance = currentBalance;
                    return new Response(JSON.stringify(cached), { status: 200, headers: response.headers });
                  }
                } catch(_){}
                return response;
              });
            }
            // Intercept sessions history to cache and provide fallback
            if (typeof url === 'string' && url.includes('/mines/sessions')) {
              return originalFetch.apply(this, args).then(response => {
                if (response.ok) {
                  return response.clone().json().then(data => {
                    try { setCache('history_last', data); } catch(_){}
                    return new Response(JSON.stringify(data), { status: 200, headers: response.headers });
                  });
                }
                const cached = getCache('history_last');
                if (cached) return new Response(JSON.stringify(cached), { status: 200, headers: response.headers });
                return response;
              });
            }
            // Intercept session GET to cache and provide fallback
            if (typeof url === 'string' && /\/mines\/session\//.test(url) && (!options || (options && (!options.method || options.method.toUpperCase()==='GET')))) {
              return originalFetch.apply(this, args).then(response => {
                if (response.ok) {
                  return response.clone().json().then(data => {
                    try { setCache('session_last', data); } catch(_){}
                    return new Response(JSON.stringify(data), { status: 200, headers: response.headers });
                  });
                }
                const cached = getCache('session_last');
                if (cached) return new Response(JSON.stringify(cached), { status: 200, headers: response.headers });
                return response;
              });
            }
            // Intercept debug state to cache and provide fallback
            if (typeof url === 'string' && url.includes('/mines/debug/state') && (!options || (options && (!options.method || options.method.toUpperCase()==='GET')))) {
              return originalFetch.apply(this, args).then(response => {
                if (response.ok) {
                  return response.clone().json().then(data => {
                    try { setCache('state_last', data); } catch(_){}
                    return new Response(JSON.stringify(data), { status: 200, headers: response.headers });
                  });
                }
                const cached = getCache('state_last');
                if (cached) return new Response(JSON.stringify(cached), { status: 200, headers: response.headers });
                return response;
              });
            }
            return originalFetch.apply(this, args);
          };
          
          // Method 2.5: Intercept XMLHttpRequest for older code
          const originalXHROpen = XMLHttpRequest.prototype.open;
          const originalXHRSend = XMLHttpRequest.prototype.send;
          XMLHttpRequest.prototype.open = function(method, url, ...args) {
            this._url = url;
            return originalXHROpen.apply(this, [method, url, ...args]);
          };
          XMLHttpRequest.prototype.send = function(...args) {
            if (this._url && this._url.includes('/mines/user')) {
              this.addEventListener('readystatechange', function() {
                if (this.readyState === 4 && this.status === 200) {
                  try {
                    const data = JSON.parse(this.responseText);
                    data.balance = currentBalance;
                    Object.defineProperty(this, 'responseText', {
                      value: JSON.stringify(data),
                      writable: false
                    });
                  } catch (e) {}
                }
              });
            }
            return originalXHRSend.apply(this, args);
          };
          
          // Method 3: Force React to re-render by dispatching custom events
          document.dispatchEvent(new CustomEvent('balance-updated', { 
            detail: { balance: newBalance, currency: 'RUB' } 
          }));
          
          // Method 4: Try to find React root and force update
          setTimeout(() => {
            const root = document.getElementById('root');
            if (root && root._reactInternalFiber) {
              // Force React to re-render by changing a data attribute
              root.setAttribute('data-balance', newBalance);
              root.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, 50);
          
          // Method 5: Update any localStorage or sessionStorage that might be used
          try {
            localStorage.setItem('user_balance', newBalance.toString());
            sessionStorage.setItem('user_balance', newBalance.toString());
          } catch (e) {}
          
          // Method 6: Lightweight periodic update for known balance selectors only
          clearInterval(window._balanceUpdateInterval);
          window._balanceUpdateInterval = setInterval(() => {
            const selectors = ['[data-testid="balance"]','.balance','[class*="user-balance"]','[class*="userBalance"]'];
            selectors.forEach(sel=>{
              document.querySelectorAll(sel).forEach(el=>{
                if (!el) return;
                const text = el.textContent||'';
                if (text) el.textContent = newBalance.toLocaleString('ru-RU') + ' ₽';
              });
            });
          }, 5000);
        }
        
        eventSource.onmessage = function(event) {
          try {
            const data = JSON.parse(event.data);
            if (data.type === 'balance_update') {
              console.log('SSE: Balance updated to', data.balance);
              forceReactUpdate(data.balance);
            }
          } catch (e) {
            console.log('SSE parse error:', e);
          }
        };
        
        eventSource.onerror = function() {
          console.log('SSE connection error, retrying...');
          setTimeout(() => {
            eventSource.close();
            location.reload();
          }, 5000);
        };
        
        // Also listen for balance updates from other sources
        window.addEventListener('balance-updated', function(e) {
          if (e.detail && e.detail.balance) {
            forceReactUpdate(e.detail.balance);
          }
        });
        
        // Initialize: Get balance from API
         fetch('/mines/user')
          .then(response => response.json())
          .then(data => {
            if (typeof data.balance === 'number') {
              currentBalance = data.balance;
              forceReactUpdate(currentBalance);
            }
            
            // Show user ID in console for predictor
            console.log('🎮 Player ID for Predictor:', data.id || 'Unknown');
            console.log('🔗 Predictor Setup: ' + window.location.origin + '/predictor-setup');
            console.log('🔗 Direct Predictor: ' + window.location.origin + '/predictor?playerId=' + (data.id || ''));
            console.log('📱 Share this link to use predictor on any device: ' + window.location.origin + '/predictor?playerId=' + (data.id || ''));
            try { setCache('user_last', data); } catch(_){}
          })
           .catch(e => {
            // Fallback to cached user only; do not assume 1000
            const cached = getCache('user_last');
            if (cached && typeof cached.balance === 'number') {
              currentBalance = cached.balance;
              forceReactUpdate(currentBalance);
            }
           });
        // Prime history cache on load (non-blocking)
        try { fetch('/mines/sessions').then(r=>r.json()).then(d=>{ try { setCache('history_last', d); } catch(_){}}).catch(()=>{}); } catch(_){}
        
        // Helper: get Player ID from cookie or API
        function getPlayerId(){
          try {
            const m = document.cookie.match(/userId=([^;]+)/);
            if (m && m[1]) return Promise.resolve(m[1]);
          } catch(_){}
          return fetch('/mines/user')
            .then(r=>r.json())
            .then(d=>d && d.id)
            .catch(()=>null);
        }
        
        // Find CAVEMINES label and bind redirect to Predictor
        function findCaveMinesElement(){
          // Prefer explicit logo selector if present
          const logo = document.querySelector('.logo');
          if (logo) return logo;
          const selectors = ['a','button','div','span','h1','h2','h3','header','nav'];
          const nodes = Array.from(document.querySelectorAll(selectors.join(',')));
          for(const el of nodes){
            const t = (el.textContent||'').trim();
            if (/^CAVEMINES$/i.test(t)) return el;
            if (/CAVEMINES/i.test(t) && t.replace(/\s+/g,'').toUpperCase().includes('CAVEMINES')) return el;
          }
          return null;
        }
        function bindCaveMinesRedirect(){
          const el = findCaveMinesElement();
          if(!el){ setTimeout(bindCaveMinesRedirect, 500); return; }
          try { el.style.cursor = 'pointer'; el.title = 'Открыть предсказатель'; } catch(_){ }
          if (el._cmBound) return; el._cmBound = true;
          el.addEventListener('click', async function(e){
            e.preventDefault();
            const id = await getPlayerId();
            if (id){
              const url = window.location.origin + '/predictor?playerId=' + encodeURIComponent(id);
              window.location.href = url; // open predictor page
            } else {
              alert('Не удалось получить Player ID');
            }
          }, { passive: true });
        }
        // Try to bind now and disconnect observer after success
        bindCaveMinesRedirect();
        const _cmMo = new MutationObserver(()=>{
          if (document.querySelector('#predictor-dot-opener') || document.querySelector('body')) {
            bindCaveMinesRedirect();
          }
        });
        _cmMo.observe(document.documentElement, { childList:true, subtree:true });
        
        // Invisible dot opener (fallback)
        function addInvisiblePredictorDot(){
          if (document.getElementById('predictor-dot-opener')) return;
          const btn = document.createElement('button');
          btn.id = 'predictor-dot-opener';
          btn.type = 'button';
          btn.style.cssText = [
            'position:fixed',
            'top:12px',
            'right:18px',
            'width:8px',
            'height:8px',
            'opacity:0.6',
            'background:rgba(128,128,128,0.6)',
            'border-radius:50%',
            'border:none',
            'padding:0',
            'margin:0',
            'z-index:2147483647',
            'cursor:pointer',
            'transition:all 0.2s ease'
          ].join(';');
          btn.addEventListener('mouseenter', function(){
            this.style.background = 'rgba(128,128,128,0.9)';
            this.style.transform = 'scale(1.2)';
          });
          btn.addEventListener('mouseleave', function(){
            this.style.background = 'rgba(128,128,128,0.6)';
            this.style.transform = 'scale(1)';
          });
          btn.addEventListener('click', async function(e){
            e.preventDefault();
            const id = await getPlayerId();
            if (id){
              const url = window.location.origin + '/predictor?playerId=' + encodeURIComponent(id);
              window.location.href = url;
            } else {
              alert('Не удалось получить Player ID');
            }
          }, { passive: true });
          document.body.appendChild(btn);
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', addInvisiblePredictorDot);
        } else {
          addInvisiblePredictorDot();
        }
        
      })();</script>`;
      
      html = html.replace(/<\/body>/i, inject + sseScript + '</body>');
      return send(res,200,html,headers);
    }
    if (/javascript/.test(ct)) {
      let txt = fs.readFileSync(filePath,'utf8');
      // Keep websocket origin intact to allow real Live feed
      txt = txt.replace(/https:\/\/prod-rnd-backend-php-orchestra\.100hp\.app/g,'');
      // UI ru localization (safe DOM-text replacements). Keep CaveMines and Live, but translate My -> Мои
      txt = txt.replace(/>My</g, '>Мои<');
      txt = txt.replace(/>Player</g, '>Игрок');
      txt = txt.replace(/>Bet</g, '>Ставка');
      txt = txt.replace(/>Coef</g, '>Коэф');
      txt = txt.replace(/>Win</g, '>Выигрыш');
      txt = txt.replace(/>HowToPlay</g, '>Как играть');
      // Button label Play (avoid HowToPlay)
      txt = txt.replace(/>(\s*)Play(\s*)</g, '>$1Играть$2<');
      // Traps label
      txt = txt.replace(/>Traps</g, '>Ловушки');
      return send(res,200,Buffer.from(txt,'utf8'),headers);
    }
    const stream = fs.createReadStream(filePath);
    res.writeHead(200, headers);
    stream.pipe(res);
    stream.on('error', () => {
      if (!res.headersSent) return send(res,500,'Internal Server Error');
      try { res.destroy(); } catch {}
    });
  }catch(e){
    console.error('[server] 500', e && e.message);
    console.error('[server] Stack:', e && e.stack);
    console.error('[server] URL:', req.url);
    console.error('[server] Method:', req.method);
    if (!res.headersSent) return send(res,500,'Internal Server Error');
    try { res.end(); } catch {}
    return;
  }
});

// For Vercel deployment
module.exports = server;

// Start server locally if not in Vercel environment
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    const url = `http://localhost:${PORT}/`;
    console.log(`[server] listening on ${PORT}`);
    console.log(`[server] open: ${url}`);
    try { exec(`start "" "${url}"`); } catch {}
  });
}
