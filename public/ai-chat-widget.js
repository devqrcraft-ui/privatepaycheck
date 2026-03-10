(function () {
  const WORKER_URL = 'https://dry-flower-b3e7.dev-qrcraft.workers.dev/';

  function getSiteInfo() {
    const host = window.location.hostname;
    if (host.includes('privatepaycheck')) return {
      name: 'PrivatePaycheck.com',
      title: 'Paycheck AI',
      system: `You are the AI Assistant for PrivatePaycheck.com — a free US paycheck calculator for all 50 states with 2026 IRS tables. Your job is to help users with take-home pay, federal/state taxes, FICA, deductions, filing status, and paycheck calculations. Rules: 1) Always greet with "Hi! I'm the AI Assistant for PrivatePaycheck.com. How can I help you today?" on first message. 2) Keep answers to 2-3 sentences max. 3) Stay on topic — paycheck and tax questions only. 4) No file uploads, no essays, no long explanations. 5) Respond in the same language the user writes in. 6) Be helpful and to the point.`
    };
    if (host.includes('gigwise')) return {
      name: 'GigWiseTax.com',
      title: 'GigWise AI',
      system: `You are the AI Assistant for GigWiseTax.com — a tax calculator for gig workers, freelancers, and 1099 contractors. Your job is to help with self-employment tax (15.3%), quarterly estimated taxes, Schedule C deductions, and 1099 filing. Rules: 1) Always greet with "Hi! I'm the AI Assistant for GigWiseTax.com. How can I help you today?" on first message. 2) Keep answers to 2-3 sentences max. 3) Stay on topic — gig work taxes only. 4) No file uploads, no essays, no long explanations. 5) Respond in the same language the user writes in. 6) Be helpful and to the point.`
    };
    if (host.includes('compressto20kb') || host.includes('imagecompress')) return {
      name: 'CompressTo20KB.com',
      title: 'Compress AI',
      system: `You are the AI Assistant for CompressTo20KB.com — a free image compression tool. Help users compress images, understand file formats, and reduce file sizes. Rules: 1) Greet with "Hi! I'm the AI Assistant for CompressTo20KB.com. How can I help you today?" 2) Keep answers to 2-3 sentences max. 3) Stay on topic. 4) Respond in the same language the user writes in.`
    };
    if (host.includes('1099')) return {
      name: '1099Deductions.com',
      title: '1099 AI',
      system: `You are the AI Assistant for 1099Deductions.com — a resource for 1099 contractor tax deductions. Help users find deductions, understand Schedule C, and reduce their tax bill. Rules: 1) Greet with "Hi! I'm the AI Assistant for 1099Deductions.com. How can I help you today?" 2) Keep answers to 2-3 sentences max. 3) Stay on topic. 4) Respond in the same language the user writes in.`
    };
    return {
      name: 'this site',
      title: 'AI Assistant',
      system: `You are a helpful AI Assistant. Keep answers to 2-3 sentences max. Respond in the same language the user writes in.`
    };
  }

  const site = getSiteInfo();

  // Sound
  function playOpenSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.setValueAtTime(520, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.12);
      g.gain.setValueAtTime(0.18, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      o.start(ctx.currentTime);
      o.stop(ctx.currentTime + 0.3);
    } catch(e) {}
  }

  const style = document.createElement('style');
  style.textContent = `
    #ai-chat-fab {
      position: fixed; bottom: 28px; right: 28px;
      width: 56px; height: 56px; border-radius: 50%;
      background: #f5a623; border: none; cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      display: flex; align-items: center; justify-content: center;
      z-index: 99999; transition: transform 0.2s;
    }
    #ai-chat-fab:hover { transform: scale(1.08); }
    #ai-chat-fab svg { width: 28px; height: 28px; fill: #1a1a2e; }
    #ai-chat-fab.pulse { animation: fabPulse 2.5s infinite; }
    @keyframes fabPulse {
      0%   { box-shadow: 0 4px 16px rgba(245,166,35,0.4); }
      50%  { box-shadow: 0 4px 28px rgba(245,166,35,0.9), 0 0 0 8px rgba(245,166,35,0.15); }
      100% { box-shadow: 0 4px 16px rgba(245,166,35,0.4); }
    }
    #ai-chat-window {
      position: fixed; bottom: 96px; right: 28px;
      width: 340px; max-height: 480px;
      background: #1a1a2e; border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.45);
      display: flex; flex-direction: column;
      z-index: 99998; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      overflow: hidden; border: 1px solid #2a2a4a;
      animation: slideUp 0.25s ease;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    #ai-chat-window.hidden { display: none; }
    #ai-chat-header {
      background: #0f0f23; padding: 12px 16px;
      display: flex; align-items: center; gap: 10px;
      border-bottom: 1px solid #2a2a4a;
    }
    #ai-chat-dot { width: 10px; height: 10px; border-radius: 50%; background: #4caf50; flex-shrink: 0; }
    #ai-chat-header-text { flex: 1; }
    #ai-chat-header-title { color: #f5a623; font-weight: 700; font-size: 14px; line-height: 1.2; }
    #ai-chat-header-sub { color: #888; font-size: 11px; line-height: 1.2; }
    #ai-chat-minimize {
      color: #888; font-size: 20px; line-height: 1;
      padding: 2px 8px; border-radius: 4px; cursor: pointer;
      transition: color 0.2s; user-select: none;
    }
    #ai-chat-minimize:hover { color: #f5a623; }
    #ai-chat-messages {
      flex: 1; overflow-y: auto; padding: 12px;
      display: flex; flex-direction: column; gap: 8px;
      min-height: 180px; max-height: 320px;
    }
    #ai-chat-messages::-webkit-scrollbar { width: 4px; }
    #ai-chat-messages::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 2px; }
    .ai-msg {
      max-width: 85%; padding: 8px 12px; border-radius: 12px;
      font-size: 13px; line-height: 1.5; word-break: break-word;
    }
    .ai-msg.bot { background: #0f0f23; color: #e0e0e0; align-self: flex-start; border-bottom-left-radius: 4px; }
    .ai-msg.user { background: #f5a623; color: #1a1a2e; align-self: flex-end; border-bottom-right-radius: 4px; font-weight: 500; }
    .ai-msg.typing { color: #888; font-style: italic; }
    #ai-chat-input-row {
      display: flex; padding: 10px 12px; gap: 8px;
      border-top: 1px solid #2a2a4a; background: #0f0f23;
    }
    #ai-chat-input {
      flex: 1; background: #1a1a2e; border: 1px solid #2a2a4a;
      border-radius: 20px; padding: 8px 14px; color: #e0e0e0;
      font-size: 13px; outline: none; transition: border-color 0.2s;
    }
    #ai-chat-input:focus { border-color: #f5a623; }
    #ai-chat-input::placeholder { color: #555; }
    #ai-chat-send {
      width: 36px; height: 36px; border-radius: 50%;
      background: #f5a623; border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: opacity 0.2s;
    }
    #ai-chat-send:hover { opacity: 0.85; }
    #ai-chat-send svg { width: 16px; height: 16px; fill: #1a1a2e; }
    @media (max-width: 400px) {
      #ai-chat-window { width: calc(100vw - 32px); right: 16px; bottom: 88px; }
      #ai-chat-fab { right: 16px; bottom: 20px; }
    }
  `;
  document.head.appendChild(style);

  const fab = document.createElement('button');
  fab.id = 'ai-chat-fab';
  fab.title = site.title;
  fab.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6V10h12v2zm0-3H6V7h12v2z"/></svg>`;
  fab.classList.add('pulse');
  document.body.appendChild(fab);

  const win = document.createElement('div');
  win.id = 'ai-chat-window';
  win.classList.add('hidden');
  win.innerHTML = `
    <div id="ai-chat-header">
      <div id="ai-chat-dot"></div>
      <div id="ai-chat-header-text">
        <div id="ai-chat-header-title">${site.title}</div>
        <div id="ai-chat-header-sub">AI Assistant · ${site.name}</div>
      </div>
      <div id="ai-chat-minimize">−</div>
    </div>
    <div id="ai-chat-messages"></div>
    <div id="ai-chat-input-row">
      <input id="ai-chat-input" type="text" placeholder="Ask a question..." maxlength="300" />
      <button id="ai-chat-send">
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
  `;
  document.body.appendChild(win);

  const messages = win.querySelector('#ai-chat-messages');
  const input = win.querySelector('#ai-chat-input');
  const sendBtn = win.querySelector('#ai-chat-send');
  const minimizeBtn = win.querySelector('#ai-chat-minimize');

  let isOpen = false;
  let isLoading = false;
  let greeted = false;
  const history = [];

  function addMessage(text, role) {
    const el = document.createElement('div');
    el.className = 'ai-msg ' + role;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  async function sendToAI(userText) {
    history.push({ role: 'user', content: userText });
    const typingEl = addMessage('...', 'bot typing');
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt: site.system, messages: history }),
      });
      const data = await res.json();
      const reply = data.response || 'Sorry, could not generate a response.';
      typingEl.classList.remove('typing');
      typingEl.textContent = reply;
      history.push({ role: 'assistant', content: reply });
    } catch (e) {
      typingEl.classList.remove('typing');
      typingEl.textContent = 'Connection error. Please try again.';
    }
    isLoading = false;
    messages.scrollTop = messages.scrollHeight;
  }

  async function openChat() {
    if (isOpen) return;
    isOpen = true;
    win.classList.remove('hidden');
    fab.classList.remove('pulse');
    playOpenSound();
    if (!greeted) {
      greeted = true;
      isLoading = true;
      await sendToAI('Hello');
    }
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    win.classList.add('hidden');
    setTimeout(() => fab.classList.add('pulse'), 10000);
  }

  fab.addEventListener('click', () => { if (isOpen) closeChat(); else openChat(); });
  minimizeBtn.addEventListener('click', closeChat);

  async function sendMessage() {
    const text = input.value.trim();
    if (!text || isLoading) return;
    input.value = '';
    isLoading = true;
    addMessage(text, 'user');
    await sendToAI(text);
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  // Auto-open after 5 seconds
  setTimeout(() => {
    if (!isOpen) openChat();
  }, 5000);

})();
