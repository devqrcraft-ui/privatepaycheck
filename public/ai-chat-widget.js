(function() {
  // ── CONFIG ──────────────────────────────────────────────────────────────────
  var WORKER_URL = 'https://dry-flower-b3e7.dev-qrcraft.workers.dev/';
  var domain = window.location.hostname.replace('www.', '');

  var THEMES = {
    'privatepaycheck.com': {
      accent:      '#F5C842',
      accentDark:  '#d4a800',
      bg:          '#091526',
      bgPanel:     '#0d1f35',
      border:      'rgba(245,200,66,0.35)',
      title:       'Paycheck AI',
      subtitle:    'Ask about take-home pay & taxes',
      greeting:    "Hi! I'm your Paycheck AI Assistant. Ask me anything about take-home pay, federal/state taxes, or 2026 IRS rules.",
    },
    'gigwisetax.com': {
      accent:      '#4ade80',
      accentDark:  '#22c55e',
      bg:          '#0d1117',
      bgPanel:     '#161b22',
      border:      'rgba(74,222,128,0.35)',
      title:       'GigWise AI',
      subtitle:    'Ask about 1099 taxes & deductions',
      greeting:    "Hi! I'm your GigWise Tax Assistant. Ask me anything about self-employment taxes, 1099 deductions, or quarterly payments.",
    },
  };

  var theme = THEMES[domain] || THEMES['privatepaycheck.com'];

  // ── SOUND ───────────────────────────────────────────────────────────────────
  function playPing() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.setValueAtTime(880, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
      g.gain.setValueAtTime(0.18, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      o.start(ctx.currentTime);
      o.stop(ctx.currentTime + 0.35);
    } catch(e) {}
  }

  // ── STYLES ──────────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '#aicw-bubble{position:fixed;bottom:22px;right:22px;width:52px;height:52px;border-radius:50%;',
    'background:' + theme.accent + ';cursor:pointer;display:none;align-items:center;justify-content:center;',
    'box-shadow:0 4px 20px rgba(0,0,0,.45);z-index:99999;transition:transform .2s;}',
    '#aicw-bubble:hover{transform:scale(1.1);}',
    '#aicw-bubble svg{width:26px;height:26px;fill:' + theme.bg + ';}',

    '#aicw-widget{position:fixed;bottom:22px;right:22px;width:340px;max-width:calc(100vw - 32px);',
    'background:' + theme.bg + ';border:1px solid ' + theme.border + ';border-radius:16px;',
    'box-shadow:0 8px 40px rgba(0,0,0,.6);z-index:99999;display:none;flex-direction:column;',
    'font-family:system-ui,sans-serif;overflow:hidden;}',

    '#aicw-header{display:flex;align-items:center;justify-content:space-between;',
    'padding:12px 14px;background:' + theme.bgPanel + ';border-bottom:1px solid ' + theme.border + ';}',
    '#aicw-header-left{display:flex;align-items:center;gap:10px;}',
    '#aicw-dot{width:9px;height:9px;border-radius:50%;background:' + theme.accent + ';',
    'box-shadow:0 0 7px ' + theme.accent + ';animation:aicw-pulse 2s infinite;}',
    '@keyframes aicw-pulse{0%,100%{opacity:1}50%{opacity:.4}}',
    '#aicw-title{color:#fff;font-size:14px;font-weight:700;line-height:1;}',
    '#aicw-sub{color:rgba(255,255,255,.45);font-size:11px;margin-top:2px;}',
    '#aicw-btns{display:flex;gap:6px;}',
    '#aicw-btns button{background:none;border:none;cursor:pointer;padding:2px 5px;',
    'color:rgba(255,255,255,.5);font-size:16px;line-height:1;border-radius:4px;transition:all .15s;}',
    '#aicw-btns button:hover{color:#fff;background:rgba(255,255,255,.08);}',

    '#aicw-messages{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;',
    'max-height:310px;min-height:200px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.1) transparent;}',
    '#aicw-messages::-webkit-scrollbar{width:4px;}',
    '#aicw-messages::-webkit-scrollbar-thumb{background:rgba(255,255,255,.12);border-radius:4px;}',

    '.aicw-msg{max-width:82%;font-size:13px;line-height:1.5;padding:9px 12px;border-radius:12px;word-break:break-word;}',
    '.aicw-msg.bot{background:' + theme.bgPanel + ';border:1px solid ' + theme.border + ';color:#e8eaf0;border-bottom-left-radius:3px;}',
    '.aicw-msg.user{background:' + theme.accent + ';color:' + theme.bg + ';font-weight:600;',
    'margin-left:auto;border-bottom-right-radius:3px;}',
    '.aicw-typing span{display:inline-block;width:6px;height:6px;border-radius:50%;',
    'background:' + theme.accent + ';animation:aicw-bounce .9s infinite;}',
    '.aicw-typing span:nth-child(2){animation-delay:.18s}',
    '.aicw-typing span:nth-child(3){animation-delay:.36s}',
    '@keyframes aicw-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}',

    '#aicw-input-row{display:flex;gap:8px;padding:10px 12px;border-top:1px solid ' + theme.border + ';',
    'background:' + theme.bgPanel + ';}',
    '#aicw-input{flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);',
    'border-radius:8px;padding:8px 11px;color:#fff;font-size:13px;outline:none;',
    'transition:border-color .2s;}',
    '#aicw-input:focus{border-color:' + theme.accent + ';}',
    '#aicw-input::placeholder{color:rgba(255,255,255,.3);}',
    '#aicw-send{background:' + theme.accent + ';border:none;border-radius:8px;width:36px;',
    'cursor:pointer;display:flex;align-items:center;justify-content:center;',
    'transition:opacity .2s;}',
    '#aicw-send:hover{opacity:.85;}',
    '#aicw-send svg{width:16px;height:16px;fill:' + theme.bg + ';}',

    '#aicw-widget.aicw-in{animation:aicw-slidein .35s cubic-bezier(.2,1.4,.4,1) forwards;}',
    '@keyframes aicw-slidein{from{opacity:0;transform:translateY(24px) scale(.94)}to{opacity:1;transform:none}}',
  ].join('');
  document.head.appendChild(style);

  // ── HTML ────────────────────────────────────────────────────────────────────
  var widget = document.createElement('div');
  widget.id = 'aicw-widget';
  widget.innerHTML = [
    '<div id="aicw-header">',
      '<div id="aicw-header-left">',
        '<div id="aicw-dot"></div>',
        '<div><div id="aicw-title">' + theme.title + '</div><div id="aicw-sub">' + theme.subtitle + '</div></div>',
      '</div>',
      '<div id="aicw-btns">',
        '<button id="aicw-min" title="Minimize">&#8211;</button>',
        '<button id="aicw-close" title="Close">&#x2715;</button>',
      '</div>',
    '</div>',
    '<div id="aicw-messages"></div>',
    '<div id="aicw-input-row">',
      '<input id="aicw-input" placeholder="Ask a question..." autocomplete="off"/>',
      '<button id="aicw-send">',
        '<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>',
      '</button>',
    '</div>',
  ].join('');
  document.body.appendChild(widget);

  var bubble = document.createElement('div');
  bubble.id = 'aicw-bubble';
  bubble.title = 'Open AI Assistant';
  bubble.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>';
  document.body.appendChild(bubble);

  // ── LOGIC ────────────────────────────────────────────────────────────────────
  var msgs = document.getElementById('aicw-messages');
  var input = document.getElementById('aicw-input');
  var history = [];
  var isOpen = false;

  function addMsg(text, role) {
    var d = document.createElement('div');
    d.className = 'aicw-msg ' + role;
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function showTyping() {
    var d = document.createElement('div');
    d.className = 'aicw-msg bot aicw-typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function openWidget() {
    widget.style.display = 'flex';
    bubble.style.display = 'none';
    widget.classList.remove('aicw-in');
    void widget.offsetWidth;
    widget.classList.add('aicw-in');
    isOpen = true;
    if (msgs.children.length === 0) addMsg(theme.greeting, 'bot');
    setTimeout(function(){ input.focus(); }, 350);
  }

  function minimizeWidget() {
    widget.style.display = 'none';
    bubble.style.display = 'flex';
    isOpen = false;
  }

  document.getElementById('aicw-min').addEventListener('click', minimizeWidget);
  document.getElementById('aicw-close').addEventListener('click', function() {
    widget.remove(); bubble.remove();
  });
  bubble.addEventListener('click', openWidget);

  async function sendMsg() {
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    addMsg(text, 'user');
    history.push({ role: 'user', content: text });

    var typing = showTyping();
    input.disabled = true;

    var systemPrompt = 'You are the Official AI Tax Assistant for ' + domain + '.\n' +
      (domain === 'privatepaycheck.com'
        ? 'You are an expert in 2026 US Payroll, exact take-home pay calculations, and federal/state withholdings. Help users understand their paycheck deductions.'
        : domain === 'gigwisetax.com'
        ? 'You are a specialist in 1099 gig income, business expense deductions, self-employment tax (15.3%), and quarterly estimated taxes for gig workers.'
        : 'You are a tax expert helping users maximize deductions and understand their tax obligations.') +
      '\nRules: 1) Detect user language and respond in the SAME language. 2) Be professional yet friendly. ' +
      '3) If the question is unrelated to taxes, politely redirect. 4) Keep responses concise (2-3 short paragraphs max).';

    try {
      var res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt: systemPrompt, messages: history })
      });
      var data = await res.json();
      typing.remove();
      var reply = data.response || data.error || 'Sorry, something went wrong.';
      addMsg(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
    } catch(e) {
      typing.remove();
      addMsg('Connection error. Please try again.', 'bot');
    }
    input.disabled = false;
    input.focus();
  }

  document.getElementById('aicw-send').addEventListener('click', sendMsg);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
  });

  // ── SHOW AFTER 10s ──────────────────────────────────────────────────────────
  setTimeout(function() {
    playPing();
    openWidget();
  }, 10000);

})();
