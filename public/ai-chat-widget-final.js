(function () {
  // Prevent double-load
  if (window.__aiChatLoaded) return;
  window.__aiChatLoaded = true;

  const WORKER_URL = 'https://dry-flower-b3e7.dev-qrcraft.workers.dev/';

  const SITE_CONFIGS = {
    '1099deductions.com': {
      name: '1099 AI',
      greeting: 'Hi! Ask me about deductions, deadlines or the calculator.',
      systemPrompt: `You are the on-site assistant for 1099Deductions.com — free 1099 tax deduction checklist hub for gig workers. PAGES: Home | By Job Type (DoorDash, Uber, Lyft, Instacart, Amazon Flex, Airbnb, OnlyFans, freelancers, truck drivers, tutors and more) | Calculator | Deadlines | Blog. BEHAVIOR: Start by asking what their gig job is. If unsure where to click — tell them to tap "By Job Type" and pick their job card. If on a job page — explain main deduction categories: mileage ($0.725/mile), phone, home office, supplies. Never say an expense "is 100% deductible" — say "often deductible" and mention IRS rules. DEADLINES 2026: Q1 Apr 15, Q2 Jun 16, Q3 Sep 15, Q4 Jan 15 2027. MUST NOT: give personalized tax strategies, answer generic finance questions. RULES: Answer ONLY questions about this website. If off-topic say: "I can only help you use this website." Reply in EXACT SAME LANGUAGE the user wrote in — Ukrainian, English, Polish, Russian, Spanish — never switch. Keep answers to 1-2 short sentences OR 2-4 bullet points max. Always end with 1 guiding question to move user forward. Never calculate amounts yourself — guide user to enter numbers into the site calculator. You are a navigator, not a calculator. Mobile-first: short sentences, no long paragraphs, no essays.`
    },
    'privatepaycheck.com': {
      name: 'Paycheck AI',
      greeting: 'Hi! Ask me about your paycheck, taxes or any US state.',
      systemPrompt: `You are the on-site assistant for PrivatePaycheck.com — free privacy-first paycheck calculator for the U.S., all 50 states. PAGES: Home (main calculator) | All States | Blog. CALCULATORS: paycheck, hourly, overtime, bonus, unemployment, Trump account, senior deduction. KEY FACTS: FICA 7.65%. Standard deduction $14,600 single / $29,200 married. No-income-tax states: FL TX NV WA WY SD TN NH. BEHAVIOR: If on homepage — ask which state and pay type (salary/hourly/overtime/bonus)? Guide to correct calculator. If on state calculator — ask pay type, guide to fill income + frequency + state + filing status + click Calculate. Explain Net Pay and tax breakdown in 1-2 sentences. If on bonus/overtime — ask scenario, show which fields to fill. MUST NOT: do real calculations, give personal tax advice, answer general finance questions not about site tools. RULES: Answer ONLY questions about this website. If off-topic say: "I can only help you use this website." Reply in EXACT SAME LANGUAGE the user wrote in — Ukrainian, English, Polish, Russian, Spanish — never switch. Keep answers to 1-2 short sentences OR 2-4 bullet points max. Always end with 1 guiding question to move user forward. Never calculate amounts yourself — guide user to enter numbers into the site calculator. You are a navigator, not a calculator. Mobile-first: short sentences, no long paragraphs, no essays.`
    },
    'gigwisetax.com': {
      name: 'GigWise AI',
      greeting: 'Hi! Ask me about gig taxes, deductions or quarterly payments.',
      systemPrompt: `You are the on-site assistant for GigWiseTax.com — free SE tax calculator for U.S. gig workers, all 51 states. PAGES: Tax Calculator | 2026 Deadlines | All Platforms (DoorDash, Uber, Lyft, Etsy, Airbnb, OnlyFans, Instacart, Amazon Flex) | By State | Tax Tools. KEY FACTS: SE Tax = 15.3%. Mileage $0.725/mile. Quarterly 2026: Q1 Apr 15, Q2 Jun 16, Q3 Sep 15, Q4 Jan 15 2027. BEHAVIOR: If on main calculator — ask state and approximate 1099 income, guide to enter and click Calculate, explain total tax and quarterly payment in 1-2 sentences. If on state page — ask if they drive/deliver/create/rent/freelance, confirm calculator works for all platforms in that state. If on platform page — ask state and annual income, guide to calculator then deductions section. MUST NOT: do exact tax calculations, give personalized filing advice, answer non-gig-tax questions. RULES: Answer ONLY questions about this website. If off-topic say: "I can only help you use this website." Reply in EXACT SAME LANGUAGE the user wrote in — Ukrainian, English, Polish, Russian, Spanish — never switch. Keep answers to 1-2 short sentences OR 2-4 bullet points max. Always end with 1 guiding question to move user forward. Never calculate amounts yourself — guide user to enter numbers into the site calculator. You are a navigator, not a calculator. Mobile-first: short sentences, no long paragraphs, no essays.`
    },
    'compressto20kb.com': {
      name: 'Compress AI',
      greeting: 'Hi! I can help you compress images. What size do you need?',
      systemPrompt: `You are the on-site assistant for CompressTo20KB.com — free browser-based image compression and conversion toolkit. 100% private, no server upload. TOOLS: Compress image | Exact KB target (20KB, 50KB, 100KB, 200KB) | JPG to PNG | PNG to JPG | Image to PDF | Image to Text (OCR) | Presets: Shopify, Email, USCIS, Zoom, Pinterest, WordPress, eBay, Amazon, Instagram. BEHAVIOR: Always start by asking: compress, convert, or extract text? If compress — ask where they upload (email/Shopify/USCIS/social), suggest KB range, explain how to tap Exact KB Mode, type size, press Compress. If convert — ask from/to format (JPG/PNG/PDF/Word), point to correct page, explain upload-convert-download. If text from image — point to Image to Text tool, explain: upload then OCR then copy text. MUST NOT: edit or generate images, give legal visa photo rules, answer generic image editing questions. RULES: Answer ONLY questions about this website. If off-topic say: "I can only help you use this website." Reply in EXACT SAME LANGUAGE the user wrote in — Ukrainian, English, Polish, Russian, Spanish — never switch. Keep answers to 1-2 short sentences OR 2-4 bullet points max. Always end with 1 guiding question to move user forward. Never calculate amounts yourself — guide user to enter numbers into the site calculator. You are a navigator, not a calculator. Mobile-first: short sentences, no long paragraphs, no essays.`
    }
  };

  function getConfig() {
    const host = window.location.hostname.replace('www.', '');
    return SITE_CONFIGS[host] || SITE_CONFIGS['gigwisetax.com'];
  }

  function detectLang(text) {
    if (!text) return 'en';
    const hasCyr = /[а-яёА-ЯЁіїєґІЇЄҐ]/.test(text);
    if (!hasCyr) return 'en';
    // Spanish check
    const hasSpanish = /[áéíóúüñ¿¡]/i.test(text);
    if (hasSpanish) return 'es';
    // Ukrainian specific letters
    const hasUkr = /[іїєґІЇЄҐ]/.test(text);
    const hasRuOnly = /[ъыэёЪЫЭЁ]/.test(text);
    if (hasRuOnly) return 'ru';
    if (hasUkr) return 'uk';
    return 'ru'; // default Cyrillic = Russian
  }

  // Also detect Spanish without Cyrillic
  function detectLangFull(text) {
    if (!text) return 'en';
    const hasSpanish = /[áéíóúüñ¿¡]/i.test(text);
    if (hasSpanish) return 'es';
    return detectLang(text);
  }

  const LANG_NAMES = { en: 'English', uk: 'Ukrainian', ru: 'Russian', es: 'Spanish' };

  const config = getConfig();
  let messages = [];
  let isOpen = false;
  let isSending = false;
  let currentLang = 'en';

  // ── STYLES ──
  const style = document.createElement('style');
  style.textContent = `
    #ai-fab {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #B8924A;
      border: none;
      cursor: pointer;
      z-index: 9998;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 14px rgba(184,146,74,0.5);
      transition: transform 0.2s, opacity 0.2s;
      animation: fabGlow 2.5s ease-in-out infinite;
    }
    #ai-fab.hidden {
      opacity: 0;
      pointer-events: none;
      transform: scale(0.7);
    }
    #ai-fab:hover { transform: scale(1.08); }
    #ai-fab svg { width: 22px; height: 22px; fill: #fff; }
    @keyframes fabGlow {
      0%,100% { box-shadow: 0 3px 14px rgba(184,146,74,0.5); }
      50% { box-shadow: 0 0 24px 8px rgba(184,146,74,0.8); }
    }

    #ai-chat-window {
      position: fixed;
        left: 0;
        right: 0;
        max-width: 100vw;
        overflow-x: hidden;
      bottom: 0;
      width: 100%;
      height: calc(40vh - 26px);
      max-height: calc(40vh - 26px);
      background: #0D1F38;
      border: none;
      border-top: 1px solid rgba(184,146,74,0.35);
      border-radius: 14px 14px 0 0;
      display: none;
      flex-direction: column;
      z-index: 9999;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      box-sizing: border-box;
    }
    #ai-chat-window.open { display: flex; }

    @media (min-width: 601px) {
      #ai-chat-window {
        left: auto;
        right: 20px;
        bottom: 0;
        width: 340px;
        height: 46vh;
        max-height: 46vh;
        border-radius: 14px 14px 0 0;
        border: 1px solid rgba(184,146,74,0.35);
        border-bottom: none;
      }
    }

    #ai-chat-header {
      background: #0A1828;
      padding: 6px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(184,146,74,0.2);
      flex-shrink: 0;
      min-height: 36px;
    }
    #ai-chat-header-left { display: flex; align-items: center; gap: 8px; }
    #ai-online-dot { width: 8px; height: 8px; border-radius: 50%; background: #4CAF50; flex-shrink: 0; }
    #ai-chat-name { color: #B8924A; font-weight: 700; font-size: 13px; }
    #ai-chat-sub { color: #8899AA; font-size: 11px; margin-top: 0; margin-left: 6px; }
    #ai-chat-close {
      background: none; border: none; cursor: pointer;
      color: #B8924A; font-size: 24px; padding: 0 4px; line-height: 1;
      font-weight: 700;
    }
    #ai-chat-close:hover { color: #fff; }

    #ai-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 0;
    }
    #ai-chat-messages::-webkit-scrollbar { width: 3px; }
    #ai-chat-messages::-webkit-scrollbar-thumb { background: rgba(184,146,74,0.3); border-radius: 2px; }

    .ai-msg {
      max-width: 100%;
      padding: 8px 12px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.6;
      word-break: break-word;
    }
    .ai-msg.bot {
      background: #162840;
      color: #D0E0F0;
      align-self: flex-start;
      border: 1px solid rgba(184,146,74,0.12);
    }
    .ai-msg.user {
      background: #B8924A;
      color: #fff;
      align-self: flex-end;
    }
    .ai-msg.typing { color: #8899AA; font-style: italic; }

    #ai-chat-input-row {
      display: flex;
      gap: 8px;
      padding: 9px 12px;
      border-top: 1px solid rgba(184,146,74,0.2);
      background: #0A1828;
      flex-shrink: 0;
    }
    #ai-chat-input {
      flex: 1;
      background: #162840;
      border: 1px solid rgba(184,146,74,0.25);
      border-radius: 8px;
      color: #D0E0F0;
      font-size: 16px;
      padding: 8px 11px;
      outline: none;
      min-width: 0;
    }
    #ai-chat-input::placeholder { color: #556677; }
    #ai-chat-input:focus { border-color: rgba(184,146,74,0.6); }
    #ai-chat-send {
      background: #B8924A;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 16px;
      padding: 0 14px;
      cursor: pointer;
      flex-shrink: 0;
      transition: background 0.15s;
    }
    #ai-chat-send:hover { background: #d4a84e; }
    #ai-chat-send:disabled { background: #4a3a1a; cursor: not-allowed; }
  `;
  document.head.appendChild(style);

  // ── FAB ──
  const fab = document.createElement('button');
  fab.id = 'ai-fab';
  fab.title = config.name;
  fab.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>`;
  document.body.appendChild(fab);

  // ── CHAT WINDOW ──
  const win = document.createElement('div');
  win.id = 'ai-chat-window';
  win.innerHTML = `
    <div id="ai-chat-header">
      <div id="ai-chat-header-left">
        <div id="ai-online-dot"></div>
        <div id="ai-chat-name">${config.name}</div>
        <div id="ai-chat-sub">Online · Fast replies</div>
      </div>
      <button id="ai-chat-close">−</button>
    </div>
    <div id="ai-chat-messages"></div>
    <div id="ai-chat-input-row">
      <input id="ai-chat-input" type="text" placeholder="Ask a question..." autocomplete="off" />
      <button id="ai-chat-send">&#10148;</button>
    </div>
  `;
  document.body.appendChild(win);

  const msgContainer = win.querySelector('#ai-chat-messages');
  const input = win.querySelector('#ai-chat-input');
  const sendBtn = win.querySelector('#ai-chat-send');
  const closeBtn = win.querySelector('#ai-chat-close');

  function addMessage(text, role) {
    const div = document.createElement('div');
    div.className = 'ai-msg ' + role;
    div.textContent = text;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return div;
  }

  function openChat() {
    if (isOpen) return;
    isOpen = true;
    win.classList.add('open');
    fab.classList.add('hidden');
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage(config.greeting, 'bot');
        messages.push({ role: 'assistant', content: config.greeting });
      }, 150);
    }
    setTimeout(() => input.focus(), 300);
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove('open');
    fab.classList.remove('hidden');
  }

  fab.addEventListener('click', openChat);
  closeBtn.addEventListener('click', closeChat);

  async function sendMessage() {
    const text = input.value.trim();
    if (!text || isSending) return;

    // Detect language from user message
    const lang = detectLangFull(text);
    currentLang = lang;

    isSending = true;
    sendBtn.disabled = true;
    input.value = '';

    addMessage(text, 'user');
    messages.push({ role: 'user', content: text });

    const typingDiv = addMessage('···', 'bot typing');

    const langName = LANG_NAMES[currentLang] || 'English';
    const systemFull = `${config.systemPrompt}\n\nLANGUAGE: User wrote in ${langName}. Reply ONLY in ${langName}. Never switch languages.`;

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: systemFull,
          messages: messages.slice(-10)
        })
      });

      if (!res.ok) {
        typingDiv.textContent = 'Service unavailable. Try again shortly.';
        typingDiv.classList.remove('typing');
      } else {
        const data = await res.json();
        const reply = data.response || (data.content && data.content[0] && data.content[0].text) || data.reply || data.text || data.message || '...';
        typingDiv.textContent = reply;
        typingDiv.classList.remove('typing');
        messages.push({ role: 'assistant', content: reply });
      }
    } catch (e) {
      typingDiv.textContent = 'Connection error. Check your internet.';
      typingDiv.classList.remove('typing');
    }

    isSending = false;
    sendBtn.disabled = false;
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  // Auto-open after 6s
  setTimeout(() => { if (!isOpen) openChat(); }, 20000);

})();
