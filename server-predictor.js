// Dedicated server for Mines Predictor
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const ROOT = process.cwd();

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  if (Buffer.isBuffer(body) || typeof body === 'string') return res.end(body);
  if (body == null) return res.end();
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
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

// -------- Local API store --------
const Store = {
  users: new Map(),
  settings: {
    supportedCurrencies: ['RUB'],
    bets: { RUB: { quickBets: { min: 1, max: 20000 }, defaultBet: 100, steps: [] } },
    presets: [{ presetValue: 3, isDefault: true }],
    rates: [{ presetValue: 3, rates: [1.09,1.24,1.43,1.65,1.93,2.27,2.69,3.23,3.92] }],
    roundsCount: 25,
  },
  activeSession: null,
  history: [],
};

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
  const coeffs = Store.settings.rates[0].rates;
  const user = getUser(userId);
  return {
    id, state:'Active', bet:amount, hash, salt, lastRound:0, coefficient:0, availableCashout:0,
    startDate:new Date().toISOString(), endDate:'', currency:user.currency,
    gameData:{ presetValue:presetValue||3, coefficients:coeffs, userChoices:[], expectedChoices, currentRoundId:0, rounds:[{id:0,amount:0,availableCash:0,odd:1}] },
    _internal:{ bombs }
  };
}

// Get user ID from request
function getUserIdFromRequest(req) {
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
  
  if (req.headers['x-user-id']) {
    return req.headers['x-user-id'];
  }
  
  return generateUserId();
}

// Set user ID cookie
function setUserIdCookie(res, userId) {
  res.setHeader('Set-Cookie', `userId=${userId}; Path=/; Max-Age=31536000; HttpOnly`);
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
      const playerId = url.searchParams.get('playerId') || req.headers['x-user-id'];
      
      if (!playerId) {
        return send(res, 400, { error: 'Player ID required. Use ?playerId=user_xxx or X-User-ID header' }, { 'Content-Type':'application/json' });
      }
      
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
    
    return resolve(false);
  });
}

// -------- API handler --------
function handleApi(req,res){
  return new Promise((resolve) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const p = url.pathname; const m = req.method;
    const userId = getUserIdFromRequest(req);
    
    if(p==='/mines/user'&&m==='GET'){ 
      const user = getUser(userId);
      setUserIdCookie(res, userId);
      const userData = { ...user };
      send(res,200,userData,{ 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' }); 
      return resolve(true); 
    }
    
    if(p==='/mines/session'&&m==='POST'){
      const body = JSON.parse(req.body || '{}');
      const amount=Number(body.amount||0), preset=Number(body.presetValue||3);
      const user = getUser(userId);
      
      if(amount<1) { send(res,400,{ error:{ type:'smallBid', header:'Rate below the minimum', message:'Rate below the minimum' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
      if(amount>20000) { send(res,400,{ error:{ type:'highBid', header:'Rate above the maximum', message:'Rate above the maximum' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
      if(amount>user.balance) { send(res,400,{ error:{ type:'insufficientFunds', header:'Insufficient funds', message:'Insufficient funds' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
      if(user.activeSession) { send(res,400,{ error:{ type:'activeSessionExists', header:'Active session already exists', message:'Active session already exists' }},{ 'Content-Type':'application/json' }); return resolve(true);} 
      
      user.balance = Math.round((user.balance - amount) * 100) / 100; 
      user.activeSession = buildSession(amount, preset, userId);
      user.sessionId = user.activeSession.id;
      
      const publicSession = (s) => { if(!s) return {}; const {_internal,...rest}=s; return rest; };
      send(res,200,publicSession(user.activeSession),{ 'Content-Type':'application/json' });
      return resolve(true);
    }
    
    return resolve(false);
  });
}

const server = http.createServer(async (req,res)=>{
  try{
    const urlPath = req.url || '/';

    // Redirect root to predictor setup
    if (urlPath === '/') {
      return send(res, 302, '', { Location: '/predictor-setup' });
    }

    // Predictor endpoints
    if (urlPath === '/predictor' || urlPath === '/predictor.html') {
      return send(res,200,fs.readFileSync(path.join(ROOT,'predictor.html'),'utf8'),{ 'Content-Type':'text/html; charset=utf-8' });
    }
    
    if (urlPath === '/predictor-setup' || urlPath === '/predictor-setup.html') {
      return send(res,200,fs.readFileSync(path.join(ROOT,'predictor-setup.html'),'utf8'),{ 'Content-Type':'text/html; charset=utf-8' });
    }
    
    // Predictor API endpoints
    if (urlPath.startsWith('/predictor-api/')) {
      const handled = await handlePredictorApi(req,res); if (handled) return;
    }

    // Mines API endpoints
    if (urlPath.startsWith('/mines')) {
      const handled = await handleApi(req,res); if (handled) return;
    }
    
    return send(res,404,'Not Found');
  }catch(e){
    console.error('[server] 500', e && e.message);
    if (!res.headersSent) return send(res,500,'Internal Server Error');
    try { res.end(); } catch {}
    return;
  }
});

// For Vercel deployment
module.exports = server;

