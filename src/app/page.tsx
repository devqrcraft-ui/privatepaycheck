import Calculator from '@/components/Calculator';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PrivatePaycheck.com — Free Paycheck Calculator 2026',
  description: 'Free paycheck calculator 2026. All 50 states. 100% private — calculated in your browser, never stored. No signup required.',
};

const STATES_GRID = [
  { name: 'California',     rate: 'Up to 13.3%',   slug: 'california' },
  { name: 'New York',       rate: 'Up to 10.9%',   slug: 'new-york' },
  { name: 'Texas',          rate: '0% State Tax',   slug: 'texas' },
  { name: 'Florida',        rate: '0% State Tax',   slug: 'florida' },
  { name: 'Washington',     rate: '0% State Tax',   slug: 'washington' },
  { name: 'Illinois',       rate: '4.95% Flat',     slug: 'illinois' },
  { name: 'Pennsylvania',   rate: '3.07% Flat',     slug: 'pennsylvania' },
  { name: 'Ohio',           rate: 'Up to 3.99%',    slug: 'ohio' },
  { name: 'Georgia',        rate: 'Up to 5.75%',    slug: 'georgia' },
  { name: 'North Carolina', rate: '5.25% Flat',     slug: 'north-carolina' },
  { name: 'Michigan',       rate: '4.25% Flat',     slug: 'michigan' },
  { name: 'New Jersey',     rate: 'Up to 10.75%',   slug: 'new-jersey' },
  { name: 'Virginia',       rate: 'Up to 5.75%',    slug: 'virginia' },
  { name: 'Massachusetts',  rate: '5% Flat',        slug: 'massachusetts' },
  { name: 'Arizona',        rate: '2.5% Flat',      slug: 'arizona' },
  { name: 'Colorado',       rate: '4.4% Flat',      slug: 'colorado' },
  { name: 'Minnesota',      rate: 'Up to 9.85%',    slug: 'minnesota' },
  { name: 'Maryland',       rate: 'Up to 5.75%',    slug: 'maryland' },
  { name: 'Oregon',         rate: 'Up to 9.9%',     slug: 'oregon' },
  { name: 'Connecticut',    rate: 'Up to 6.99%',    slug: 'connecticut' },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@400;500;600;700;800&display=swap');
        :root{--navy:#091526;--navy2:#0F2040;--gold:#F5C842;--gold2:#FFD700;--muted:#7A9FBF;--border:rgba(245,200,66,0.30);}
        .hero{background:linear-gradient(155deg,#091526 0%,#0C1A35 100%);padding:72px 24px;position:relative;overflow:hidden;}
        .hero::after{content:'';position:absolute;top:-100px;right:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(245,200,66,.07) 0%,transparent 70%);pointer-events:none;}
        .hero-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 440px;gap:60px;align-items:start;}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(245,200,66,0.1);border:1px solid var(--border);border-radius:50px;padding:6px 16px;font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
        .badge-dot{width:7px;height:7px;border-radius:50%;background:var(--gold);animation:pulse 2s infinite;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        .hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,58px);font-weight:900;line-height:1.1;color:#fff;margin-bottom:20px;}
        .hero h1 em{color:var(--gold);font-style:italic;}
        .hero-desc{font-size:17px;color:#B8D0E8;line-height:1.7;margin-bottom:28px;max-width:520px;}
        .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px;}
        .tag{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:50px;padding:5px 14px;font-size:12px;font-weight:600;color:#B8D0E8;}
        .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
        .stat-n{font-family:'Playfair Display',serif;font-size:28px;font-weight:900;color:var(--gold);}
        .stat-l{font-size:12px;color:var(--muted);margin-top:2px;}
        .trust{background:#0A1628;border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:28px 24px;}
        .trust-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-around;flex-wrap:wrap;gap:24px;text-align:center;}
        .t-n{font-family:'Playfair Display',serif;font-size:26px;font-weight:900;color:var(--gold);}
        .t-l{font-size:12px;color:var(--muted);margin-top:2px;}
        .section{padding:72px 24px;background:var(--navy);}
        .section-alt{background:linear-gradient(155deg,#08142A 0%,#091A32 100%);}
        .s-head{text-align:center;max-width:640px;margin:0 auto 48px;}
        .s-tag{display:inline-block;background:rgba(245,200,66,.1);border:1px solid var(--border);border-radius:50px;padding:5px 16px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;}
        .s-head h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:900;color:#fff;line-height:1.15;margin-bottom:14px;}
        .s-head h2 em{color:var(--gold);font-style:italic;}
        .s-desc{font-size:16px;color:#B8D0E8;line-height:1.6;}
        .feat-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .feat-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:28px 24px;transition:border-color .2s,transform .2s;}
        .feat-card:hover{border-color:var(--border);transform:translateY(-3px);}
        .feat-icon{font-size:28px;margin-bottom:12px;}
        .feat-title{font-size:17px;font-weight:700;color:#fff;margin-bottom:8px;}
        .feat-desc{font-size:14px;color:#7A9FBF;line-height:1.6;}
        .states-grid{max-width:1200px;margin:0 auto 32px;display:grid;grid-template-columns:repeat(5,1fr);gap:12px;}
        .s-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px;text-align:center;transition:border-color .2s,background .2s;}
        .s-card:hover{border-color:var(--border);background:rgba(245,200,66,.06);}
        .s-name{font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;}
        .s-rate{font-size:12px;color:var(--muted);}
        .all-link{display:block;text-align:center;color:var(--gold);font-weight:700;font-size:15px;letter-spacing:.05em;}
        .all-link:hover{text-decoration:underline;}
        footer{background:#060F1E;border-top:1px solid var(--border);padding:56px 24px 32px;}
        .foot-inner{max-width:1200px;margin:0 auto;}
        .foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:40px;}
        .foot-brand{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--gold);margin-bottom:12px;}
        .foot-desc{font-size:14px;color:#4A6A8A;line-height:1.6;}
        .foot-col-title{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;}
        .foot-links{list-style:none;display:flex;flex-direction:column;gap:10px;}
        .foot-links a{font-size:14px;color:#4A6A8A;transition:color .15s;}
        .foot-links a:hover{color:#B8D0E8;}
        .foot-bottom{border-top:1px solid rgba(255,255,255,.06);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:12px;color:#2A4A6A;}
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr;}
          .feat-grid{grid-template-columns:repeat(2,1fr);}
          .states-grid{grid-template-columns:repeat(3,1fr);}
          .foot-grid{grid-template-columns:1fr;gap:32px;}
          .stats{grid-template-columns:repeat(2,1fr);}
        }
        @media(max-width:600px){
          .feat-grid{grid-template-columns:1fr;}
          .states-grid{grid-template-columns:repeat(2,1fr);}
          .trust-inner{flex-direction:column;align-items:center;}
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge"><div className="badge-dot"></div>Updated January 2026 &nbsp;·&nbsp; IRS Compliant</div>
            <h1>Calculate Your <em>Exact</em> Take-Home Pay</h1>
            <p className="hero-desc">Free, private paycheck calculator for all 50 states. Based on 2026 IRS withholding tables. Your data never leaves your browser — no accounts, no fees, ever.</p>
            <div className="tags">
              <span className="tag">✓ Federal + State Taxes</span>
              <span className="tag">✓ All 50 States</span>
              <span className="tag">✓ No Registration</span>
              <span className="tag">✓ 2026 Tax Rules</span>
              <span className="tag">✓ Bonus Calculator</span>
              <span className="tag">✓ Hourly & Salary</span>
            </div>
            <div className="stats">
              <div><div className="stat-n">2.4M+</div><div className="stat-l">Calculations</div></div>
              <div><div className="stat-n">50</div><div className="stat-l">States</div></div>
              <div><div className="stat-n">100%</div><div className="stat-l">Free & Private</div></div>
              <div><div className="stat-n">$0</div><div className="stat-l">Cost Forever</div></div>
            </div>
          </div>
          <Calculator />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust">
        <div className="trust-inner">
          <div><div className="t-n">2.4M+</div><div className="t-l">Calculations Done</div></div>
          <div><div className="t-n">50</div><div className="t-l">States Covered</div></div>
          <div><div className="t-n">0</div><div className="t-l">Data Stored</div></div>
          <div><div className="t-n">$0</div><div className="t-l">Cost Forever</div></div>
          <div><div className="t-n">2026</div><div className="t-l">IRS Tables</div></div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="section">
        <div className="s-head">
          <div className="s-tag">Why PrivatePaycheck</div>
          <h2>The Most <em>Trusted</em> Free Calculator</h2>
          <p className="s-desc">Built for American workers who want accurate, private results — without giving up their data.</p>
        </div>
        <div className="feat-grid">
          {[
            {icon:'🔒',title:'100% Private',desc:'All calculations happen in your browser. We never see your income or results. Zero data collection, zero tracking.'},
            {icon:'🏛️',title:'IRS Compliant 2026',desc:'Updated with official 2026 federal tax brackets, FICA rates, and all 50 state income tax rates. Publication 15-T compliant.'},
            {icon:'⚡',title:'Instant Results',desc:'No waiting. See your exact take-home broken down by federal, state, Social Security, and Medicare instantly.'},
            {icon:'📊',title:'Salary & Hourly',desc:'Works for salaried and hourly workers. Supports weekly, bi-weekly, semi-monthly, and monthly pay schedules.'},
            {icon:'🎯',title:'Bonus Calculator',desc:'Calculate your exact take-home on year-end bonuses, signing bonuses, and overtime using IRS supplemental wage rules.'},
            {icon:'🗺️',title:'All 50 States',desc:'From no-tax states like Texas and Florida to high-tax states like California and New York — every state covered.'},
          ].map(f=>(
            <div className="feat-card" key={f.title}>
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATES */}
      <section className="section section-alt">
        <div className="s-head">
          <div className="s-tag">By State</div>
          <h2>Calculate by <em>Your State</em></h2>
          <p className="s-desc">Select your state for a precise calculation including your exact local income tax rate.</p>
        </div>
        <div className="states-grid">
          {STATES_GRID.map(s=>(
            <Link href={`/${s.slug}`} className="s-card" key={s.slug}>
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
