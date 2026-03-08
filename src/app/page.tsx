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
  .hero{background:linear-gradient(150deg,#091526 0%,#102040 55%,#0A1A30 100%);padding:72px 24px 80px;position:relative;overflow:hidden;}
  .hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 70% at 72% 50%,rgba(245,200,66,.07) 0%,transparent 65%);pointer-events:none;}
  .hero-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 420px;gap:56px;align-items:center;position:relative;z-index:1;}
  .hero-badge{display:inline-flex;align-items:center;gap:9px;background:rgba(245,200,66,.11);border:1px solid rgba(245,200,66,.40);color:#F5C842;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;padding:7px 16px;border-radius:4px;margin-bottom:24px;}
  .badge-dot{width:7px;height:7px;border-radius:50%;background:#4ADE80;animation:bdpulse 2s infinite;flex-shrink:0;}
  @keyframes bdpulse{0%,100%{opacity:1}50%{opacity:.3}}
  .hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,56px);font-weight:900;line-height:1.08;color:#fff;margin-bottom:20px;}
  .hero h1 em{color:#FFD700;font-style:normal;}
  .hero-desc{font-size:16px;color:#B8D0EE;line-height:1.78;margin-bottom:32px;max-width:500px;}
  .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:36px;}
  .tag{background:rgba(255,255,255,.06);border:1px solid rgba(245,200,66,.28);color:#D8E8FF;font-size:12px;font-weight:600;padding:6px 14px;border-radius:4px;}
  .stats{display:flex;flex-wrap:wrap;gap:32px;}
  .stat-n{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#FFD700;line-height:1;}
  .stat-l{font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7A9FBF;margin-top:4px;}
  .trust{background:rgba(245,200,66,.05);border-top:1px solid rgba(245,200,66,.18);border-bottom:1px solid rgba(245,200,66,.18);padding:26px 24px;}
  .trust-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px;text-align:center;}
  .t-n{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#FFD700;}
  .t-l{font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7A9FBF;margin-top:3px;}
  .pp-section{padding:72px 24px;}
  .pp-section-alt{background:linear-gradient(155deg,#08142A 0%,#091A32 100%);}
  .s-head{text-align:center;margin-bottom:48px;}
  .s-tag{display:inline-block;font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#F5C842;border-bottom:2px solid rgba(245,200,66,.40);padding-bottom:5px;margin-bottom:16px;}
  .pp-section h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,38px);font-weight:700;color:#fff;margin-bottom:14px;line-height:1.15;}
  .pp-section h2 em{color:#FFD700;font-style:normal;}
  .s-desc{font-size:15px;color:#90B4D0;max-width:560px;margin:0 auto;line-height:1.78;}
  .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1200px;margin:0 auto;}
  .feat-card{background:rgba(255,255,255,.04);border:1px solid rgba(245,200,66,.17);border-radius:10px;padding:28px 24px;transition:all .3s ease;}
  .feat-card:hover{background:rgba(245,200,66,.07);border-color:rgba(245,200,66,.50);transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,.40);}
  .feat-icon{font-size:36px;margin-bottom:16px;}
  .feat-title{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:#F0E090;margin-bottom:10px;}
  .feat-desc{font-size:14px;color:#90B4D0;line-height:1.75;}
  .states-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:9px;max-width:1200px;margin:0 auto;}
  .s-card{background:rgba(255,255,255,.04);border:1px solid rgba(245,200,66,.17);border-radius:7px;padding:13px 14px;text-align:center;transition:all .22s ease;display:block;text-decoration:none;}
  .s-card:hover{background:rgba(245,200,66,.10);border-color:#F5C842;transform:translateY(-3px);box-shadow:0 8px 22px rgba(0,0,0,.40);}
  .s-name{font-size:13px;font-weight:700;color:#DDEEFF;}
  .s-rate{font-size:11px;color:#7A9FBF;margin-top:3px;}
  .all-link{display:block;text-align:center;margin-top:28px;color:#F5C842;font-size:14px;font-weight:700;letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;}
  .all-link:hover{color:#FFD700;}
  @media(max-width:900px){.hero-inner{grid-template-columns:1fr;gap:40px;}.hero{padding:52px 20px 60px;}.feat-grid{grid-template-columns:repeat(2,1fr);}}
  @media(max-width:540px){.hero{padding:40px 16px 48px;}.hero h1{font-size:32px;}.pp-section{padding:52px 16px;}.feat-grid{grid-template-columns:1fr;}.states-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />

      <section className="hero">
        <div className="hero-inner">
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
          <div><div className="t-n">2.4M+</div><div className="t-l">Calculations Done</div></div>
          <div><div className="t-n">50</div><div className="t-l">States Covered</div></div>
          <div><div className="t-n">0</div><div className="t-l">Data Stored</div></div>
          <div><div className="t-n">$0</div><div className="t-l">Cost Forever</div></div>
          <div><div className="t-n">2026</div><div className="t-l">IRS Tables</div></div>
        </div>
      </div>

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
    </>
  );
}
