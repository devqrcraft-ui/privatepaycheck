(function(){
  var isOpen = false;

  var style = document.createElement('style');
  style.textContent = [
    '.pp-fab{position:fixed;bottom:20px;right:20px;width:52px;height:52px;border-radius:50%;',
    'background:linear-gradient(135deg,#F5C842,#e0a800);border:none;cursor:pointer;',
    'box-shadow:0 4px 16px rgba(245,200,66,0.45);z-index:9998;',
    'display:flex;align-items:center;justify-content:center;transition:transform 0.2s;}',
    '.pp-fab:hover{transform:scale(1.08);}',
    '.pp-fab svg{width:26px;height:26px;fill:#0f0c29;transition:opacity 0.2s;}',
    '.pp-win{position:fixed;bottom:20px;right:20px;width:320px;height:420px;',
    'background:#0f1629;border:1.5px solid rgba(245,200,66,0.35);border-radius:16px;',
    'box-shadow:0 8px 32px rgba(0,0,0,0.6);z-index:9999;display:flex;',
    'flex-direction:column;overflow:hidden;opacity:0;pointer-events:none;',
    'transform:translateY(12px) scale(0.97);transition:opacity 0.22s,transform 0.22s;}',
    '.pp-win.on{opacity:1;pointer-events:all;transform:translateY(0) scale(1);}',
    '.pp-head{display:flex;align-items:center;gap:10px;padding:13px 16px;',
    'background:rgba(245,200,66,0.1);border-bottom:1px solid rgba(245,200,66,0.2);}',
    '.pp-head strong{color:#F5C842;font-size:14px;font-weight:700;flex:1;}',
    '#pp-x{background:none;border:none;color:#94a3b8;cursor:pointer;font-size:20px;',
    'line-height:1;padding:0 2px;}#pp-x:hover{color:#F5C842;}',
    '.pp-msgs{flex:1;overflow-y:auto;padding:14px 12px;display:flex;',
    'flex-direction:column;gap:10px;scroll-behavior:smooth;}',
    '.pp-msgs::-webkit-scrollbar{width:4px;}',
    '.pp-msgs::-webkit-scrollbar-thumb{background:rgba(245,200,66,0.3);border-radius:2px;}',
    '.pp-msg{max-width:85%;padding:9px 13px;border-radius:12px;font-size:13.5px;line-height:1.5;}',
    '.pp-bot{background:rgba(245,200,66,0.1);color:#e8edf8;border-bottom-left-radius:4px;align-self:flex-start;}',
    '.pp-user{background:rgba(245,200,66,0.22);color:#f1f5f9;border-bottom-right-radius:4px;align-self:flex-end;}',
    '.pp-typing{display:flex;gap:5px;align-items:center;padding:10px 14px;',
    'background:rgba(245,200,66,0.07);border-radius:12px;align-self:flex-start;width:52px;}',
    '.pp-typing span{width:7px;height:7px;background:#F5C842;border-radius:50%;',
    'animation:ppbounce 1.2s infinite;}',
    '.pp-typing span:nth-child(2){animation-delay:0.2s;}',
    '.pp-typing span:nth-child(3){animation-delay:0.4s;}',
    '@keyframes ppbounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}',
    '.pp-form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid rgba(245,200,66,0.15);}',
    '.pp-form input{flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(245,200,66,0.25);',
    'border-radius:8px;padding:9px 12px;color:#e8edf8;font-size:13px;outline:none;}',
    '.pp-form input:focus{border-color:rgba(245,200,66,0.55);}',
    '.pp-form button{width:36px;height:36px;border-radius:8px;border:none;',
    'background:#F5C842;cursor:pointer;display:flex;align-items:center;justify-content:center;}',
    '.pp-form button svg{width:16px;height:16px;fill:#0f0c29;}',
    '.pp-badge{position:absolute;top:-3px;right:-3px;width:13px;height:13px;',
    'background:#ef4444;border-radius:50%;border:2px solid #0f0c29;',
    'display:none;}.pp-badge.on{display:block;}',
    '@media(max-width:380px){.pp-win{width:calc(100vw - 24px);right:12px;bottom:12px;}',
    '.pp-fab{bottom:12px;right:12px;}}'
  ].join('');
  document.head.appendChild(style);

  var fab = document.createElement('button');
  fab.className = 'pp-fab';
  fab.setAttribute('aria-label', 'Open PayCheck AI chat');
  fab.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';

  var badge = document.createElement('div');
  badge.className = 'pp-badge';
  fab.style.position = 'relative';
  fab.appendChild(badge);

  var win = document.createElement('div');
  win.className = 'pp-win';
  win.innerHTML = '<div class="pp-head"><span>💬</span><strong>PayCheck AI</strong><button id="pp-x" aria-label="Close chat">✕</button></div>' +
    '<div class="pp-msgs" id="pp-msgs"></div>' +
    '<form class="pp-form" id="pp-form"><input id="pp-inp" type="text" placeholder="Ask about your paycheck..." autocomplete="off" />' +
    '<button type="submit" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg></button></form>';

  document.body.appendChild(fab);
  document.body.appendChild(win);

  var msgs = document.getElementById('pp-msgs');
  var inp = document.getElementById('pp-inp');

  function addMsg(text, cls) {
    var m = document.createElement('div');
    m.className = 'pp-msg ' + cls;
    m.textContent = text;
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
    return m;
  }

  function showTyping() {
    var d = document.createElement('div');
    d.className = 'pp-typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function openChat() {
    isOpen = true;
    win.classList.add('on');
    fab.style.display = 'none';
    badge.classList.remove('on');
    setTimeout(function(){ inp.focus(); }, 50);
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove('on');
    fab.style.display = 'flex';
  }

  fab.addEventListener('click', openChat);
  document.getElementById('pp-x').addEventListener('click', closeChat);

  var SYSTEM = 'You are PayCheck AI on privatepaycheck.com — a free US paycheck and tax calculator. ' +
    'Help users understand take-home pay, federal and state taxes, FICA, 401k, W-2, bonuses, overtime. ' +
    'IMPORTANT: Detect the language of the user message and always reply in that SAME language. ' +
    'If the user writes in Ukrainian — reply in Ukrainian. If English — reply in English. ' +
    'For off-topic questions say in the users language: I only help with paycheck and tax questions. ' +
    'Keep answers under 2 sentences. End with one short follow-up question. ' +
    'Never give exact tax numbers — direct to the free calculator at privatepaycheck.com.';

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
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 150,
          system: SYSTEM,
          messages: history
        })
      });
      var data = await res.json();
      var reply = (data.content && data.content[0] && data.content[0].text) ||
        'Use our free calculator at privatepaycheck.com!';
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
  }, 20000);

})();
