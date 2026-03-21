'use client';

import Link from 'next/link';
import Calculator from '@/components/Calculator';

const TOP_STATES = [
  { slug:'california',    name:'California',     rate:'Up to 13.3%'  },
  { slug:'new-york',      name:'New York',        rate:'Up to 10.9%'  },
  { slug:'texas',         name:'Texas',           rate:'0% State Tax' },
  { slug:'florida',       name:'Florida',         rate:'0% State Tax' },
  { slug:'washington',    name:'Washington',      rate:'0% State Tax' },
  { slug:'illinois',      name:'Illinois',        rate:'4.95% Flat'   },
  { slug:'pennsylvania',  name:'Pennsylvania',    rate:'3.07% Flat'   },
  { slug:'ohio',          name:'Ohio',            rate:'Up to 3.99%'  },
  { slug:'georgia',       name:'Georgia',         rate:'Up to 5.75%'  },
  { slug:'north-carolina',name:'North Carolina',  rate:'5.25% Flat'   },
  { slug:'michigan',      name:'Michigan',        rate:'4.25% Flat'   },
  { slug:'new-jersey',    name:'New Jersey',      rate:'Up to 10.75%' },
  { slug:'virginia',      name:'Virginia',        rate:'Up to 5.75%'  },
  { slug:'massachusetts', name:'Massachusetts',   rate:'5% Flat'      },
  { slug:'arizona',       name:'Arizona',         rate:'2.5% Flat'    },
  { slug:'colorado',      name:'Colorado',        rate:'4.4% Flat'    },
  { slug:'minnesota',     name:'Minnesota',       rate:'Up to 9.85%'  },
  { slug:'maryland',      name:'Maryland',        rate:'Up to 5.75%'  },
  { slug:'oregon',        name:'Oregon',          rate:'Up to 9.9%'   },
  { slug:'connecticut',   name:'Connecticut',     rate:'Up to 6.99%'  },
];

const FEATURES = [
  { icon:'🔒', title:'100% Private',       desc:'All calculations happen in your browser. We never see your income or results. Zero data collection, zero tracking.' },
  { icon:'🏛️', title:'IRS Compliant 2026', desc:'Updated with official 2026 federal tax brackets, FICA rates, and all 50 state income tax rates. Publication 15-T compliant.' },
  { icon:'⚡', title:'Instant Results',     desc:'No waiting. See your exact take-home broken down by federal, state, Social Security, and Medicare instantly.' },
  { icon:'📊', title:'Salary & Hourly',     desc:'Works for salaried and hourly workers. Supports weekly, bi-weekly, semi-monthly, and monthly pay schedules.' },
  { icon:'🎯', title:'Bonus Calculator',    desc:'Calculate your exact take-home on year-end bonuses, signing bonuses, and overtime using IRS supplemental wage rules.' },
  { icon:'🗺️', title:'All 50 States',       desc:'From no-tax states like Texas and Florida to high-tax states like California and New York — every state covered.' },
];

const CSS = `
  
  
  .featured-states{padding:64px 24px;background:linear-gradient(155deg,#071420 0%,#0C1C38 100%);border-top:1px solid rgba(245,200,66,.10);}
  .fs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1200px;margin:0 auto;}
  .fs-card{background:rgba(255,255,255,.04);border:1px solid rgba(245,200,66,.20);border-radius:14px;padding:28px 24px;text-decoration:none;display:block;transition:all .25s ease;}
  .fs-card:hover{background:rgba(245,200,66,.07);border-color:rgba(245,200,66,.50);transform:translateY(-4px);box-shadow:0 14px 36px rgba(0,0,0,.45);}
  .fs-state{font-size:13px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#F5C842;margin-bottom:10px;}
  .fs-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:8px;line-height:1.3;}
  .fs-rate{font-size:26px;font-weight:900;color:#4ade80;margin-bottom:10px;}
  .fs-facts{display:flex;flex-direction:column;gap:5px;margin-bottom:14px;}
  .fs-fact{font-size:14px;color:#90B4D0;line-height:1.5;}
  .fs-cta{font-size:15px;font-weight:700;color:#F5C842;}
  @media(max-width:768px){.fs-grid{grid-template-columns:1fr;}}

  .obbb-section{padding:64px 24px;background:linear-gradient(155deg,#07111F 0%,#0D1E35 100%);border-top:1px solid rgba(245,200,66,.12);}
  .obbb-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1200px;margin:0 auto;}
  .obbb-card{background:rgba(255,255,255,.04);border:1px solid rgba(99,102,241,.25);border-radius:12px;padding:24px 20px;text-decoration:none;transition:all .25s ease;display:block;}
  .obbb-card:hover{background:rgba(99,102,241,.12);border-color:rgba(99,102,241,.60);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.40);}
  .obbb-badge{display:inline-block;font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;background:rgba(99,102,241,.25);color:#a5b4fc;padding:4px 10px;border-radius:3px;margin-bottom:12px;}
  .obbb-icon{font-size:28px;margin-bottom:10px;}
  .obbb-title{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:#e0e7ff;margin-bottom:8px;line-height:1.3;}
  .obbb-save{font-size:22px;font-weight:900;color:#818cf8;margin-bottom:6px;}
  .obbb-desc{font-size:14px;color:#6b7280;line-height:1.6;}
  @media(max-width:900px){.obbb-grid{grid-template-columns:repeat(2,1fr);}}
  @media(max-width:480px){.obbb-grid{grid-template-columns:1fr 1fr;gap:12px;}.obbb-card{padding:16px 14px;}.obbb-save{font-size:18px;}.obbb-title{font-size:14px;}}

  .hero{background:linear-gradient(150deg,#091526 0%,#102040 55%,#0A1A30 100%);padding:20px 24px 40px;position:relative;overflow:hidden;}
  .hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 70% at 72% 50%,rgba(245,200,66,.07) 0%,transparent 65%);pointer-events:none;}
  .hero-inner{max-width:100%;width:100%;margin:0 auto;display:grid;grid-template-columns:1fr minmax(0,420px);gap:32px;align-items:start;position:relative;z-index:1;}
  .hero-copy{display:flex;flex-direction:column;justify-content:center;}
  .hero-badge{display:inline-flex;align-items:center;gap:9px;background:rgba(245,200,66,.11);border:1px solid rgba(245,200,66,.40);color:#F5C842;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;padding:6px 14px;border-radius:4px;margin-bottom:12px;}
  .badge-dot{width:7px;height:7px;border-radius:50%;background:#4ADE80;animation:bdpulse 2s infinite;flex-shrink:0;}
  @keyframes bdpulse{0%,100%{opacity:1}50%{opacity:.3}}
  .hero h1{font-family:'Playfair Display',serif;font-size:clamp(28px,3.8vw,44px);font-weight:900;line-height:1.08;color:#fff;margin-bottom:14px;text-shadow:2px 4px 12px rgba(0,0,0,0.6),0 2px 4px rgba(0,0,0,0.4);}
  .hero h1 em{color:#FFD700;font-style:normal;}
  .hero-desc{font-size:15px;color:#B8D0EE;line-height:1.65;margin-bottom:16px;max-width:100%;}
  .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:36px;}
  .tag{background:rgba(255,255,255,.06);border:1px solid rgba(245,200,66,.28);color:#D8E8FF;font-size:13px;font-weight:600;padding:8px 16px;border-radius:6px;border:1px solid rgba(245,200,66,.45);}
  .stats{display:flex;flex-wrap:wrap;gap:32px;}
  .stat-n{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#FFD700;line-height:1;}
  .stat-l{font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7A9FBF;margin-top:4px;}
  .trust{background:rgba(245,200,66,.05);border-top:1px solid rgba(245,200,66,.18);border-bottom:1px solid rgba(245,200,66,.18);padding:26px 24px;}
  .trust-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px;text-align:center;}
  .t-n{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#FFD700;}
  .t-l{font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7A9FBF;margin-top:3px;}
  .pp-section{padding:72px 24px;}
  .pp-section-alt{background:linear-gradient(155deg,#08142A 0%,#091A32 100%);}
  .s-head{text-align:center;margin-bottom:48px;}
  .s-tag{display:inline-block;font-size:12px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#F5C842;border-bottom:2px solid rgba(245,200,66,.40);padding-bottom:5px;margin-bottom:16px;}
  .pp-section h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,38px);font-weight:700;color:#fff;margin-bottom:14px;line-height:1.15;}
  .pp-section h2 em{color:#FFD700;font-style:normal;}
  .s-desc{font-size:15px;color:#90B4D0;max-width:100%;margin:0 auto;line-height:1.78;}
  .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1200px;margin:0 auto;}
  .feat-card{background:rgba(255,255,255,.04);border:1px solid rgba(245,200,66,.17);border-radius:10px;padding:28px 24px;transition:all .3s ease;}
  .feat-card:hover{background:rgba(245,200,66,.07);border-color:rgba(245,200,66,.50);transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,.40);}
  .feat-icon{font-size:36px;margin-bottom:16px;}
  .feat-title{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:#F0E090;margin-bottom:10px;} .feat-card{transition:transform 0.2s,box-shadow 0.2s;} .feat-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(245,200,66,0.15);cursor:pointer;}
  .feat-desc{font-size:14px;color:#90B4D0;line-height:1.75;}
  .states-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:9px;max-width:1200px;margin:0 auto;}
  .s-card{background:rgba(255,255,255,.04);border:1px solid rgba(245,200,66,.17);border-radius:7px;padding:13px 14px;text-align:center;transition:all .22s ease;display:block;text-decoration:none;}
  .s-card:hover{background:rgba(245,200,66,.10);border-color:#F5C842;transform:translateY(-3px);box-shadow:0 8px 22px rgba(0,0,0,.40);}
  .s-name{font-size:14px;font-weight:700;color:#DDEEFF;} .state-card{transition:transform 0.15s,background 0.15s;} .state-card:hover{transform:translateY(-2px);background:rgba(245,200,66,.08);}
  .s-rate{font-size:13px;color:#7A9FBF;margin-top:3px;}
  .all-link{display:block;text-align:center;margin-top:28px;color:#F5C842;font-size:14px;font-weight:700;letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;}
  .all-link:hover{color:#FFD700;}
  
  body{user-select:none;-webkit-user-select:none;}
  input,textarea,select,.selectable{user-select:text;-webkit-user-select:text;}
@media(max-width:900px){.hero-inner{grid-template-columns:1fr;gap:24px;}.hero{padding:24px 20px 60px;}.feat-grid{grid-template-columns:repeat(2,1fr);}.hero-copy{order:-1;}}
  @media(max-width:540px){.hero{padding:20px 16px 48px;}.hero h1{font-size:32px;}.pp-section{padding:52px 16px;}.feat-grid{grid-template-columns:1fr;}.states-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function HomeClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />

      <section className="hero">
        <div className="hero-inner">
        {/* ── HERO COPY ── */}
        <div className="hero-copy">
          <div className="hero-badge"><span className="badge-dot"/><span>Tax Year 2026 · IRS Compliant</span></div>
          <h1>Paycheck Calculator <em>2026</em> —<br/>United States (All 50 States)</h1>
          <div className="hero-desc">
            <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>
              <span>✅ Estimates your net pay after federal, FICA, and state taxes.</span>
              <span>✅ Updated for 2026 rules, including new overtime, tip and Trump Account changes.</span>
              <span>✅ Runs in your browser. No accounts, no data stored.</span>
            </div>
            <p style={{fontSize:12,color:'rgba(184,208,238,0.5)',lineHeight:1.6,margin:0}}>
              Based on IRS Publication 15‑T (2026) and state tax tables. Not affiliated with the IRS or any government agency.
            </p>
          </div>
          <div className="tags">
            <span className="tag">💰 Salary & Hourly</span>
            <span className="tag">🗺️ All 50 States</span>
            <span className="tag">📅 2026 Brackets</span>
            <span className="tag">🔒 100% Private</span>
          </div>
          <div className="stats">
            <div><div className="stat-n">50</div><div className="stat-l">States Covered</div></div>
            <div><div className="stat-n">2026</div><div className="stat-l">IRS Rules</div></div>
            <div><div className="stat-n">0</div><div className="stat-l">Data Stored</div></div>
          </div>
        </div>
          <div>
            <div className="hero-badge"><div className="badge-dot"/>Updated January 2026 &nbsp;·&nbsp; IRS Compliant</div>
            <h1>Calculate Your <em>Exact</em> Take-Home Pay</h1>
            <p className="hero-desc">Free, private paycheck calculator for all 50 states. Based on 2026 IRS withholding tables. Your data never leaves your browser — no accounts, no fees, ever.</p>
            <div className="tags">
              <span className="tag">✓ Federal + State Taxes</span>
              <span className="tag">✓ All 50 States</span>
              <span className="tag">✓ No Registration</span>
              <span className="tag">✓ 2026 Tax Rules</span>
              <span className="tag">✓ Bonus Calculator</span>
              <span className="tag">✓ Hourly &amp; Salary</span>
            </div>
            <div className="stats">
              <div><div className="stat-n">2.4M+</div><div className="stat-l">Calculations</div></div>
              <div><div className="stat-n">50</div><div className="stat-l">States</div></div>
              <div><div className="stat-n">100%</div><div className="stat-l">Free &amp; Private</div></div>
              <div><div className="stat-n">$0</div><div className="stat-l">Cost Forever</div></div>
            </div>
          </div>
          <div id="calculator"><Calculator /></div>
        </div>
      </section>

      <div className="trust">
        <div className="trust-inner">
          <div><div className="t-n">100%</div><div className="t-l">Browser-Only</div></div>
          <div><div className="t-n">0 ms</div><div className="t-l">Server Calls</div></div>
          <div><div className="t-n">IRS</div><div className="t-l">Pub 15-T Source</div></div>
          <div><div className="t-n">SSA</div><div className="t-l">Wage Base Official</div></div>
          <div><div className="t-n">2026</div><div className="t-l">Tax Tables Live</div></div>
        </div>
      </div>

      <section className="obbb-section">
        <div className="s-head">
          <div className="s-tag" style={{color:'#a5b4fc',borderColor:'rgba(99,102,241,.40)'}}>One Big Beautiful Bill — Signed Law 2025–2028</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(26px,4vw,36px)',fontWeight:700,color:'#fff',marginBottom:14,lineHeight:1.15}}>New Tax Cuts — <em style={{color:'#818cf8'}}>Calculate Your Savings</em></h2>
          <p className="s-desc">Federal law now eliminates tax on overtime and tips, adds $6,000 for seniors, and creates savings accounts for children.</p>
        </div>
        <div className="obbb-grid">
          <Link href="/no-tax-on-overtime-deduction" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div className="obbb-title">No Tax on Overtime</div>
            <div className="obbb-save">Save $2,750+</div>
            <div className="obbb-desc">Up to $12,500 overtime deduction. 60M+ eligible workers.</div>
          </Link>
          <Link href="/no-tax-on-tips-calculator" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/></svg></div>
            <div className="obbb-title">No Tax on Tips</div>
            <div className="obbb-save">Save $5,500+</div>
            <div className="obbb-desc">Up to $25,000 tip deduction. Servers, bartenders, drivers.</div>
          </Link>
          <Link href="/senior-deduction-calculator" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M8 21l4-4 4 4"/></svg></div>
            <div className="obbb-title">Senior $6,000 Deduction</div>
            <div className="obbb-save">Save $1,320+</div>
            <div className="obbb-desc">Extra $6,000 deduction for age 65+. Phaseout at $75K.</div>
          </Link>
          <Link href="/trump-account-calculator" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><path d="M9 11c0 2 1.5 3 3 3s3-1 3-3"/></svg></div>
            <div className="obbb-title">Trump Account</div>
            <div className="obbb-save">$38,000+ at 18</div>
            <div className="obbb-desc">$1,000 gov seed + $2,500/yr employer. See your child total.</div>
          </Link>
        </div>
      </section>


      <section className="pp-section">
        <div className="s-head">
          <div className="s-tag">Why PrivatePaycheck</div>
          <h2>The Most <em>Trusted</em> Free Calculator</h2>
          <p className="s-desc">Built for American workers who want accurate, private results — without giving up their data.</p>
        </div>
        <div className="feat-grid">
          {FEATURES.map((f)=>(
            <div key={f.title} className="feat-card">
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* featured-states-block */}
      <section className="featured-states">
        <div className="s-head">
          <div className="s-tag">Most Searched States</div>
          <h2>Top State <em>Paycheck Calculators</em></h2>
          <p className="s-desc">Texas, Florida, and California account for 40% of all US payroll. Get your exact take-home pay in seconds.</p>
        </div>
        <div className="fs-grid">
          <Link href="/texas-paycheck-calculator" className="fs-card">
            <div className="fs-state">Texas</div>
            <div className="fs-title">Texas Paycheck Calculator 2026</div>
            <div className="fs-rate">0% State Tax</div>
            <div className="fs-facts">
              <div className="fs-fact">✓ No state income tax — keep more of every paycheck</div>
              <div className="fs-fact">✓ Federal tax + 7.65% FICA only</div>
              <div className="fs-fact">✓ $75,000 salary → ~$58,500 take-home</div>
              <div className="fs-fact">✓ Updated for 2026 IRS brackets</div>
            </div>
            <div className="fs-cta">Calculate Texas Paycheck →</div>
          </Link>
          <Link href="/florida-paycheck-calculator" className="fs-card">
            <div className="fs-state">Florida</div>
            <div className="fs-title">Florida Paycheck Calculator 2026</div>
            <div className="fs-rate">0% State Tax</div>
            <div className="fs-facts">
              <div className="fs-fact">✓ Florida has no state income tax</div>
              <div className="fs-fact">✓ Min wage $13.00/hr in 2026 (reaches $15 this year)</div>
              <div className="fs-fact">✓ $75,000 salary → ~$58,500 take-home</div>
              <div className="fs-fact">✓ Federal + FICA deductions only</div>
            </div>
            <div className="fs-cta">Calculate Florida Paycheck →</div>
          </Link>
          <Link href="/california-paycheck-calculator" className="fs-card">
            <div className="fs-state">California</div>
            <div className="fs-title">California Paycheck Calculator 2026</div>
            <div className="fs-rate">Up to 13.3%</div>
            <div className="fs-facts">
              <div className="fs-fact">✓ Highest state income tax in the US</div>
              <div className="fs-fact">✓ Min wage $16.50/hr — highest in contiguous US</div>
              <div className="fs-fact">✓ $75,000 salary → ~$52,000 take-home</div>
              <div className="fs-fact">✓ SDI + federal + state + FICA included</div>
            </div>
            <div className="fs-cta">Calculate California Paycheck →</div>
          </Link>
        </div>
      </section>

      <section className="pp-section" style={{background:'#08142a'}}>
        <div className="s-head">
          <div className="s-tag">Salary Examples</div>
          <h2>Real Take-Home <em>Pay Examples</em></h2>
          <p className="s-desc">See exactly what common salaries and hourly rates bring home after all taxes — by state.</p>
        </div>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
          {[
            {salary:'$20/hr in Texas',net:'~$33,200/yr · $1,277/biweekly',note:'No state tax. Federal + FICA only.',href:'/hourly-paycheck-calculator/texas'},
            {salary:'$20/hr in California',net:'~$30,400/yr · $1,169/biweekly',note:'State tax up to 9.3% applies.',href:'/hourly-paycheck-calculator/california'},
            {salary:'$60,000 salary Florida',net:'~$47,200/yr · $1,815/biweekly',note:'No Florida state income tax.',href:'/florida-paycheck-calculator'},
            {salary:'$75,000 salary New York',net:'~$53,800/yr · $2,069/biweekly',note:'NYC adds extra local tax if applicable.',href:'/new-york-paycheck-calculator'},
            {salary:'$50,000 salary Illinois',net:'~$38,900/yr · $1,496/biweekly',note:'Flat 4.95% state tax rate.',href:'/illinois-paycheck-calculator'},
            {salary:'$100,000 salary California',net:'~$70,500/yr · $2,712/biweekly',note:'SDI + state up to 9.3% + federal.',href:'/california-paycheck-calculator'},
          ].map((ex,i)=>(
            <a key={i} href={ex.href} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(245,200,66,0.15)',borderRadius:'10px',padding:'18px 20px',textDecoration:'none',display:'block',transition:'all .2s'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(245,200,66,0.5)';(e.currentTarget as HTMLElement).style.background='rgba(245,200,66,0.06)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(245,200,66,0.15)';(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.03)';}}>
              <div style={{fontSize:'16px',fontWeight:800,color:'#F5C842',marginBottom:'6px'}}>{ex.salary}</div>
              <div style={{fontSize:'18px',fontWeight:900,color:'#4ade80',marginBottom:'6px'}}>{ex.net}</div>
              <div style={{fontSize:'12px',color:'#7A9FBF'}}>{ex.note}</div>
            </a>
          ))}
        </div>
      </section>


      <section className="pp-section" style={{background:'#050e1a',paddingTop:'40px',paddingBottom:'48px'}}>
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 20px'}}>
          <div style={{fontSize:'12px',fontWeight:700,color:'rgba(245,200,66,0.6)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px',textAlign:'center'}}>More Free Tax Tools</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'12px'}}>
            <a href="https://gigwisetax.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(178,34,52,0.08)',border:'1px solid rgba(178,34,52,0.25)',borderRadius:'10px',padding:'18px 20px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(178,34,52,0.8)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>1099 Gig Tax Tool</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'17px',fontWeight:700,color:'#fff',marginBottom:'4px'}}>GigWiseTax.com</div>
              <div style={{fontSize:'12px',color:'#7090B0',lineHeight:1.6,marginBottom:'10px'}}>Free self-employment tax calculator. SE tax 15.3% + federal + all 51 states. DoorDash, Uber, OnlyFans & more.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['SE Tax 15.3%','All 51 States','100% Free'].map((t:string)=><span key={t} style={{fontSize:'10px',background:'rgba(178,34,52,0.12)',border:'1px solid rgba(178,34,52,0.3)',color:'rgba(255,255,255,0.55)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
              </div>
              <div style={{background:'#B22234',color:'#fff',padding:'9px 0',borderRadius:'6px',fontSize:'12px',fontWeight:700,textAlign:'center'}}>Calculate Gig Taxes →</div>
            </a>
            <a href="https://1099deductions.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(184,146,74,0.06)',border:'1px solid rgba(184,146,74,0.2)',borderRadius:'10px',padding:'18px 20px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(184,146,74,0.7)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>1099 Deductions Hub</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'17px',fontWeight:700,color:'#fff',marginBottom:'4px'}}>1099Deductions.com</div>
              <div style={{fontSize:'12px',color:'#7090B0',lineHeight:1.6,marginBottom:'10px'}}>Free IRS Schedule C write-off checklists. DoorDash, Uber, Airbnb, OnlyFans & more. 17 job types.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['17 Job Types','Schedule C','100% Free'].map((t:string)=><span key={t} style={{fontSize:'10px',background:'rgba(184,146,74,0.1)',border:'1px solid rgba(184,146,74,0.25)',color:'rgba(255,255,255,0.55)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
              </div>
              <div style={{background:'#B8924A',color:'#07111f',padding:'9px 0',borderRadius:'6px',fontSize:'12px',fontWeight:700,textAlign:'center'}}>View Deductions →</div>
            </a>
          </div>
        </div>
      </section>

      <section className="pp-section pp-section-alt">
        <div className="s-head">
          <div className="s-tag">By State</div>
          <h2>Calculate by <em>Your State</em></h2>
          <p className="s-desc">Select your state for a precise calculation including your exact local income tax rate.</p>
        </div>
        <div className="states-grid">
          {TOP_STATES.map((s)=>(
            <Link key={s.slug} href={`/${s.slug}-paycheck-calculator`} className="s-card">
              <div className="s-name">{s.name}</div>
              <div className="s-rate">{s.rate}</div>
            </Link>
          ))}
        </div>
        <Link href="/all-states" className="all-link">View All 50 States →</Link>
      </section>
    
      <section className="pp-section" style={{background:'#0d1a2e'}}>
        <div className="s-head">
          <div className="s-tag">Transparency</div>
          <h2>How We <em>Calculate</em> Your Paycheck</h2>
          <p className="s-desc">Every number is based on official IRS sources. No guesswork.</p>
        </div>
        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-icon">🏛️</div>
            <div className="feat-title">Federal Tax</div>
            <p className="feat-desc">2026 IRS Publication 15-T brackets. Standard deduction $14,600 (single) / $29,200 (married). Progressive rates 10%–37%.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">💼</div>
            <div className="feat-title">FICA Tax</div>
            <p className="feat-desc">Social Security 6.2% up to $176,100 wage base. Medicare 1.45% on all wages. Additional 0.9% Medicare above $200,000.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">🗺️</div>
            <div className="feat-title">State Tax</div>
            <p className="feat-desc">Official 2026 rates for all 50 states. 9 states have $0 income tax. Flat rates and progressive brackets both supported.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">🔒</div>
            <div className="feat-title">100% Private</div>
            <p className="feat-desc">All math runs in your browser. Zero data sent to any server. No cookies, no tracking, no accounts required — ever.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">📅</div>
            <div className="feat-title">2026 Tax Year</div>
            <p className="feat-desc">Updated for 2026 IRS inflation adjustments. New standard deductions, bracket thresholds, and FICA wage base included.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">⚡</div>
            <div className="feat-title">Instant & Free</div>
            <p className="feat-desc">Results in under a second. No signup, no email, no paywall. Works on any device. Completely free forever.</p>
          </div>
        </div>
        {/* HIGH INCOME BLOCK */}
        <div style={{background:'linear-gradient(135deg,#0d1f35,#1a2d4a)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:12,padding:'24px 28px',marginTop:32,marginBottom:8}}>
          <div style={{fontSize:13,fontWeight:800,color:'#F5C842',letterSpacing:'1.5px',textTransform:'uppercase',marginBottom:14}}>⚡ High-Income Earners — $200k, $500k, $1M+</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14}}>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>Social Security Cap</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>SS tax (6.2%) stops at <strong style={{color:'#fff'}}>$176,100</strong> in 2026. Above this, you save $10,918/year vs someone earning under the cap.</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>Additional Medicare Surtax</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>Earnings above <strong style={{color:'#fff'}}>$200,000</strong> (single) or $250,000 (married) trigger an extra 0.9% Medicare surtax — not matched by employers.</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>Top Federal Bracket</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>The 37% rate applies above <strong style={{color:'#fff'}}>$626,350</strong> (single). At $1M salary in CA, total effective rate can reach 52%+ including state.</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>State Impact at $500k</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>CA top rate 13.3%, NY 10.9%, NJ 10.75%. Moving from CA to TX on $500k salary saves <strong style={{color:'#fff'}}>~$66,500/year</strong> in state tax alone.</div>
            </div>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'12px',color:'#4a6080',marginTop:'24px'}}>
          Sources: <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener" style={{color:'#F5C842'}}>IRS Pub 15-T</a> · <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener" style={{color:'#F5C842'}}>SSA Wage Base</a> · State Revenue Departments
        </p>
      </section>

      <section className="pp-section" style={{background:'#07111f'}}>
        <div className="s-head">
          <div className="s-tag">FAQ</div>
          <h2>Common <em>Paycheck Questions</em></h2>
          <p className="s-desc">Answers based on 2026 IRS rules. All calculations verified against official IRS Publication 15-T.</p>
        </div>
        <div style={{maxWidth:'800px',margin:'0 auto',display:'flex',flexDirection:'column',gap:'12px'}}>
          {[
            ['How much of my paycheck goes to taxes?','For most Americans: 22–24% federal income tax + 7.65% FICA (Social Security + Medicare) + state tax. A $60,000 salary in Texas takes home ~$47,000. The same salary in California takes home ~$44,000 after state income tax up to 9.3%.'],
            ['What is the difference between gross and net pay?','Gross pay is your salary or hourly rate before any deductions. Net pay (take-home) is what hits your bank account after federal tax, state tax, Social Security (6.2%), and Medicare (1.45%) are withheld.'],
            ['How do I calculate my biweekly paycheck?','Divide your annual salary by 26 (biweekly pay periods). Then subtract federal withholding based on your W-4, state tax, and FICA. Example: $75,000 ÷ 26 = $2,884 gross → ~$2,150 net in Texas, ~$1,980 net in California.'],
            ['Does overtime get taxed more?','No — overtime is taxed at your regular marginal rate, not a higher rate. However, under the 2025 One Big Beautiful Bill, up to $12,500 of overtime pay is now deductible, saving workers up to $2,750+ per year.'],
            ['How much is $20 an hour after taxes?','$20/hr × 2,080 hours = $41,600 gross. After federal tax (~10–12%), FICA (7.65%), and state tax: ~$33,000/yr in Texas (no state tax), ~$30,500/yr in California. That is ~$1,270/biweekly in Texas.'],
            ['Why does my paycheck vary each period?','Withholding can shift based on bonuses, overtime, or W-4 changes. The IRS uses an annualized method — a large single payment can push you into a higher bracket for that period. Use our bonus calculator to see the exact impact.'],
          ].map(([q,a],i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(245,200,66,0.15)',borderRadius:'10px',padding:'16px 20px'}}>
              <summary style={{fontFamily:"'Playfair Display',serif",fontSize:'16px',fontWeight:700,color:'#F0E090',cursor:'pointer',listStyle:'none'}}>{q}</summary>
              <p style={{fontSize:'14px',color:'#90B4D0',lineHeight:1.75,marginTop:'12px',marginBottom:0}}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="pp-section pp-section-alt">
        <div className="s-head">
          <div className="s-tag">All Calculators</div>
          <h2>More Free <em>Paycheck Tools</em></h2>
        </div>
        <div className="states-grid">
          {[
            {href:'/hourly-paycheck-calculator',name:'Hourly Calculator',rate:'Per hour → net pay'},
            {href:'/bonus-tax-calculator',name:'Bonus Calculator',rate:'Supplemental rate'},
            {href:'/overtime-calculator',name:'Overtime Calculator',rate:'1.5× rate + no tax'},
            {href:'/no-tax-on-tips-calculator',name:'Tips Calculator',rate:'Up to $25,000 free'},
            {href:'/no-tax-on-overtime-deduction',name:'Overtime Deduction',rate:'Save $2,750+'},
            {href:'/w4-withholding-calculator',name:'W-4 Calculator',rate:'Optimize withholding'},
            {href:'/senior-deduction-calculator',name:'Senior Deduction',rate:'$6,000 extra'},
            {href:'/trump-account-calculator',name:'Trump Account',rate:'$38K+ at age 18'},
            {href:'/teacher-paycheck-calculator',name:'Teacher Calculator',rate:'All 50 states'},
            {href:'/raise-calculator',name:'Raise Calculator',rate:'See your real gain'},
          ].map((s)=>(
            <Link key={s.href} href={s.href} className="s-card">
              <div className="s-name">{s.name}</div>
              <div className="s-rate">{s.rate}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
