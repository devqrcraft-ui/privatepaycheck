(function(){
if (window.__ppChatLoaded) return;
window.__ppChatLoaded = true;

var style = document.createElement('style');
style.textContent = [
  '#pp-fab{position:fixed;bottom:20px;right:20px;z-index:9999;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#F5C842,#e0a800);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(245,200,66,0.6);}',
  '#pp-fab svg{width:26px;height:26px;fill:#0f0c29;}',
  '#pp-badge{position:absolute;top:-5px;right:-5px;background:#ff4444;color:#fff;font-size:11px;font-weight:900;border-radius:10px;padding:2px 6px;display:none;}',
  '#pp-badge.on{display:block;}',
  '#pp-win{position:fixed;bottom:84px;right:16px;z-index:9998;width:320px;height:400px;background:#0f0c29;border:2px solid rgba(245,200,66,0.5);border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.8);display:none;flex-direction:column;overflow:hidden;}',
  '#pp-win.on{display:flex;}',
  '#pp-head{background:#1a1040;border-bottom:2px solid rgba(245,200,66,0.3);padding:12px 16px;display:flex;align-items:center;gap:10px;}',
  '#pp-dot{width:8px;height:8px;border-radius:50%;background:#4ade80;}',
  '#pp-title{font-size:14px;font-weight:800;color:#F5C842;flex:1;font-family:sans-serif;}',
  '#pp-x{background:none;border:none;color:#aaa;font-size:22px;cursor:pointer;line-height:1;padding:0;}',
  '#pp-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;}',
  '.pp-bot{background:rgba(245,200,66,0.1);border:1px solid rgba(245,200,66,0.25);color:#e8edf8;padding:10px 12px;border-radius:4px 12px 12px 12px;font-size:15px;line-height:1.5;font-family:sans-serif;max-width:90%;align-self:flex-start;}',
  '.pp-user{background:rgba(245,200,66,0.2);color:#fff;font-weight:600;padding:10px 12px;border-radius:12px 4px 12px 12px;font-size:15px;font-family:sans-serif;max-width:90%;align-self:flex-end;}',
  '.pp-typing{padding:10px 12px;display:flex;gap:4px;}',
  '.pp-typing span{width:7px;height:7px;border-radius:50%;background:#F5C842;display:inline-block;animation:pp-t 1.2s infinite;}',
  '.pp-typing span:nth-child(2){animation-delay:.2s;}.pp-typing span:nth-child(3){animation-delay:.4s;}',
  '@keyframes pp-t{0%,60%,100%{opacity:.2;transform:scale(.8)}30%{opacity:1;transform:scale(1)}}',
  '#pp-form{padding:10px 12px;border-top:1px solid rgba(245,200,66,0.15);display:flex;gap:8px;}',
  '#pp-inp{flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(245,200,66,0.3);border-radius:8px;color:#fff;font-size:15px;padding:10px 12px;outline:none;}',
  '#pp-inp:focus{border-color:#F5C842;}',
  '#pp-send{background:#F5C842;border:none;border-radius:8px;width:42px;height:42px;cursor:pointer;flex-shrink:0;}',
  '#pp-send svg{width:18px;height:18px;fill:#0f0c29;}',
  '@media(max-width:540px){#pp-win{width:calc(100vw - 24px);right:12px;height:320px;}}'
].join('');
document.head.appendChild(style);

var fab = document.createElement('button');
fab.id = 'pp-fab';
fab.setAttribute('aria-label','PayCheck AI');
fab.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14H7v-2h6v2zm2-4H7v-2h8v2zm0-4H7V6h8v2z"/></svg><div id="pp-badge">1</div>';
document.body.appendChild(fab);

var win = document.createElement('div');
win.id = 'pp-win';
win.innerHTML = '<div id="pp-head"><div id="pp-dot"></div><div id="pp-title">PayCheck AI</div><button id="pp-x">×</button></div><div id="pp-msgs"></div><form id="pp-form" autocomplete="off"><input id="pp-inp" type="text" placeholder="Ask about your paycheck..." maxlength="300"/><button type="submit" id="pp-send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></form>';
document.body.appendChild(win);

var msgs = document.getElementById('pp-msgs');
var inp = document.getElementById('pp-inp');
var badge = document.getElementById('pp-badge');
var isOpen = false;

function addMsg(t, cls) {
  var d = document.createElement('div');
  d.className = cls;
  d.textContent = t;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  var d = document.createElement('div');
  d.className = 'pp-typing';
  d.innerHTML = '<span></span><span></span><span></span>';
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
  return d;
}

function open() { isOpen = true; win.classList.add('on'); badge.classList.remove('on'); inp.focus(); }
function close() { isOpen = false; win.classList.remove('on'); }

fab.addEventListener('click', function(){ isOpen ? close() : open(); });
document.getElementById('pp-x').addEventListener('click', close);

var SYSTEM = 'You are PayCheck AI on privatepaycheck.com — free US paycheck calculator. Answer ONLY about paycheck, take-home pay, federal/state taxes, FICA, 401k, W-2. Off-topic: say "I only help with paycheck questions. Salary or hourly?" Detect user language and reply in same language. Max 2 sentences. End with one follow-up question. Never calculate exact numbers — say "Use our free calculator at privatepaycheck.com."';

var history = [];

document.getElementById('pp-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  var text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  addMsg(text, 'pp-user');
  history.push({ role: 'user', content: text });
  var typing = showTyping();
  try {
    var res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 120, system: SYSTEM, messages: history })
    });
    var data = await res.json();
    var reply = (data.content && data.content[0] && data.content[0].text) || 'Use our calculator at privatepaycheck.com!';
    history.push({ role: 'assistant', content: reply });
    typing.remove();
    addMsg(reply, 'pp-bot');
  } catch(err) {
    typing.remove();
    addMsg('Use our free calculator at privatepaycheck.com!', 'pp-bot');
  }
});

setTimeout(function() {
  addMsg('Your take-home pay depends on your state — CA takes up to 13.3%, TX takes 0%. What state are you in?', 'pp-bot');
  badge.classList.add('on');
  setTimeout(function() { if (!isOpen) open(); }, 1500);
}, 25000);

})();