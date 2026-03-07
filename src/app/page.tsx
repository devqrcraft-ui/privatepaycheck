import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Paycheck Calculator 2026 — Free, Private | PrivatePaycheck',
  description: 'Calculate your exact take-home pay for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private — your salary never leaves your browser.',
  alternates: { canonical: 'https://www.privatepaycheck.com/' },
};

const TOP_STATES = [
  { slug:'california',     name:'California',     rate:'Up to 13.3%' },
  { slug:'new-york',       name:'New York',        rate:'Up to 10.9%' },
  { slug:'texas',          name:'Texas',           rate:'0% State Tax' },
  { slug:'florida',        name:'Florida',         rate:'0% State Tax' },
  { slug:'illinois',       name:'Illinois',        rate:'4.95% Flat'  },
  { slug:'pennsylvania',   name:'Pennsylvania',    rate:'3.07% Flat'  },
  { slug:'ohio',           name:'Ohio',            rate:'Up to 3.99%' },
  { slug:'georgia',        name:'Georgia',         rate:'Up to 5.75%' },
  { slug:'north-carolina', name:'North Carolina',  rate:'5.25% Flat'  },
  { slug:'michigan',       name:'Michigan',        rate:'4.25% Flat'  },
  { slug:'new-jersey',     name:'New Jersey',      rate:'Up to 10.75%'},
  { slug:'washington',     name:'Washington',      rate:'0% State Tax' },
  { slug:'virginia',       name:'Virginia',        rate:'Up to 5.75%' },
  { slug:'massachusetts',  name:'Massachusetts',   rate:'5% Flat'     },
  { slug:'arizona',        name:'Arizona',         rate:'2.5% Flat'   },
  { slug:'colorado',       name:'Colorado',        rate:'4.4% Flat'   },
  { slug:'minnesota',      name:'Minnesota',       rate:'Up to 9.85%' },
  { slug:'maryland',       name:'Maryland',        rate:'Up to 5.75%' },
  { slug:'oregon',         name:'Oregon',          rate:'Up to 9.9%'  },
  { slug:'connecticut',    name:'Connecticut',     rate:'Up to 6.99%' },
];

const FEATURES = [
  { icon:'🔒', title:'100% Private',       desc:'All calculations happen in your browser. We never see your income or results. Zero data collection, zero tracking.' },
  { icon:'🏛️', title:'IRS Compliant 2026', desc:'Updated with official 2026 federal tax brackets, FICA rates, and all 50 state income tax rates. Publication 15-T compliant.' },
  { icon:'⚡', title:'Instant Results',    desc:'No waiting, no loading. See your exact take-home pay broken down by federal tax, state tax, Social Security, and Medicare.' },
  { icon:'📊', title:'Salary & Hourly',    desc:'Works for salaried and hourly workers. Supports weekly, bi-weekly, semi-monthly, and monthly pay schedules.' },
  { icon:'🎯', title:'Bonus Calculator',   desc:'Calculate exact take-home on year-end bonuses, signing bonuses, and overtime using IRS supplemental wage rules.' },
  { icon:'🗺️', title:'All 50 States',      desc:'From no-income-tax states like Texas and Florida to high-tax states like California and New York — every state covered.' },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:wght@300;400;600&display=swap');
        :root {
          --navy:#0B1E4A; --navy2:#091640; --gold:#C9A84C; --gold-b:#FFD700;
          --gold-l:#F5DC80; --white:#F0EAD6; --body:#D4E0F0; --muted:#9AB0D0; --border:rgba(201,168,76,.32);
        }
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:var(--navy);color:var(--body);font-family:'Source Serif 4',serif;}
        .btn-gold{display:inline-block;background:linear-gradient(135deg,#B8922A,#FFD700);color:#091640;padding:14px 28px;border-radius:3px;font-weight:800;font-size:14px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;box-shadow:0 2px 16px rgba(201,168,76,.45);transition:transform .18s,box-shadow .18s,filter .18s;}
        .btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(255,215,0,.55);filter:brightness(1.09);color:#091640;}
        .btn-gold:active{transform:translateY(0);}

        /* HERO */
        .hero{background:linear-gradient(155deg,#091640 0%,#0E2258 55%,#071030 100%);padding:64px 24px 72px;position:relative;overflow:hidden;}
        .hero::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.035'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E");}
        .hero-inner{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1fr 390px;gap:52px;align-items:center;position:relative;}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(201,168,76,.13);border:1px solid rgba(201,168,76,.45);color:var(--gold-l);font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;padding:6px 14px;border-radius:2px;margin-bottom:20px;}
        .dot{width:7px;height:7px;background:#4CAF50;border-radius:50%;animation:pulse 2s infinite;}
        @keyframes pulse{0%,100%{opacity:1;}50%{opacity:.3;}}
        h1{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,50px);font-weight:900;line-height:1.1;color:#EDE5CC;margin-bottom:20px;}
        h1 em{color:var(--gold-b);font-style:normal;}
        .hero-desc{font-size:16px;color:#BCCFE8;line-height:1.75;margin-bottom:28px;max-width:480px;}
        .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:30px;}
        .tag{background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.26);color:var(--gold-l);font-size:12px;font-weight:600;letter-spacing:.06em;padding:5px 12px;border-radius:2px;}
        .stats{display:flex;flex-wrap:wrap;gap:28px;}
        .stat-v{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--gold-b);}
        .stat-l{font-size:11px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-top:2px;}

        /* TRUST */
        .trust{background:rgba(201,168,76,.06);border-top:1px solid rgba(201,168,76,.2);border-bottom:1px solid rgba(201,168,76,.2);padding:24px;}
        .trust-inner{max-width:1160px;margin:0 auto;display:flex;justify-content:space-around;flex-wrap:wrap;gap:16px;}
        .trust-n{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:var(--gold-b);}
        .trust-t{font-size:10px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-top:2px;}

        /* SECTIONS */
        .section{padding:64px 24px;}
        .section-alt{background:linear-gradient(160deg,#081538 0%,#0B1E4A 100%);}
        .sec-hdr{text-align:center;margin-bottom:44px;}
        .sec-tag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);border-bottom:1px solid rgba(201,168,76,.4);padding-bottom:5px;margin-bottom:12px;}
        h2{font-family:'Playfair Display',serif;font-size:clamp(26px,3vw,36px);font-weight:700;color:#EDE5CC;margin-bottom:12px;}
        h2 em{color:var(--gold-b);font-style:normal;}
        .sec-desc{font-size:15px;color:#9AB8D8;max-width:540px;margin:0 auto;line-height:1.75;}

        /* FEATURES */
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:1160px;margin:0 auto;}
        .feat-card{background:rgba(255,255,255,.04);border:1px solid rgba(201,168,76,.2);border-radius:5px;padding:26px 22px;transition:border-color .25s,background .25s,transform .25s,box-shadow .25s;}
        .feat-card:hover{border-color:rgba(201,168,76,.55);background:rgba(201,168,76,.07);transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.3);}
        .feat-icon{font-size:30px;margin-bottom:12px;}
        .feat-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--gold-l);margin-bottom:9px;}
        .feat-desc{font-size:13px;color:#9AB8D8;line-height:1.7;}

        /* STATES */
        .states-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:8px;max-width:1160px;margin:0 auto;}
        .state-card{background:rgba(255,255,255,.04);border:1px solid rgba(201,168,76,.18);border-radius:4px;padding:12px 13px;text-align:center;text-decoration:none;display:block;transition:all .2s;}
        .state-card:hover{background:rgba(201,168,76,.1);border-color:var(--gold);transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.25);}
        .state-n{font-size:13px;font-weight:600;color:#C8DCF4;}
        .state-r{font-size:11px;color:var(--muted);margin-top:2px;}

        /* RESPONSIVE */
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr;}
          .feat-grid{grid-template-columns:repeat(2,1fr);}
        }
        @media(max-width:600px){
          .hero{padding:44px 16px 52px;}
          .feat-grid{grid-template-columns:1fr;}
          .stats{gap:20px;}
          .section{padding:48px 16px;}
          .states-grid{grid-template-columns:repeat(2,1fr);}
        }
      `}</style>

      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge"><div className="dot"/>&nbsp;Updated January 2026 · IRS Compliant</div>
            <h1>Calculate Your <em>Exact</em><br/>Take-Home Pay</h1>
            <p className="hero-desc">Free, private paycheck calculator for all 50 states. Based on 2026 IRS withholding tables. Your data never leaves your browser — no accounts, no fees, ever.</p>
            <div className="tags">
              {['✓ Federal + State Taxes','✓ All 50 States','✓ No Registration','✓ 2026 Tax Rules','✓ Bonus Calculator','✓ Hourly & Salary'].map(t=>(
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="stats">
              <div><div className="stat-v">2.4M+</div><div className="stat-l">Calculations</div></div>
              <div><div className="stat-v">50</div><div className="stat-l">States</div></div>
              <div><div className="stat-v">100%</div><div className="stat-l">Free & Private</div></div>
              <div><div className="stat-v">$0</div><div className="stat-l">Cost Ever</div></div>
            </div>
          </div>
          <Calculator />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust">
        <div className="trust-inner">
          {[['2.4M+','Calculations'],['50','States'],['0','Data Stored'],['$0','Cost Forever'],['2026','IRS Tables']].map(([n,t])=>(
            <div key={t} style={{textAlign:'center'}}><div className="trust-n">{n}</div><div className="trust-t">{t}</div></div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="section">
        <div className="sec-hdr">
          <div className="sec-tag">Why PrivatePaycheck</div>
          <h2>The Most <em>Trusted</em> Paycheck Calculator</h2>
          <p className="sec-desc">Built for American workers who need accurate, private results without giving up personal data.</p>
        </div>
        <div className="feat-grid">
          {FEATURES.map(f=>(
            <div key={f.title} className="feat-card">
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATES */}
      <section className="section section-alt">
        <div className="sec-hdr">
          <div className="sec-tag">By State</div>
          <h2>Calculate by <em>Your State</em></h2>
          <p className="sec-desc">Select your state for a precise calculation including your local income tax rate.</p>
        </div>
        <div className="states-grid">
          {TOP_STATES.map(s=>(
            <Link key={s.slug} href={`/${s.slug}`} className="state-card">
              <div className="state-n">{s.name}</div>
              <div className="state-r">{s.rate}</div>
            </Link>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:28}}>
          <Link href="/all-states" style={{color:'var(--gold)',fontSize:14,fontWeight:600,letterSpacing:'.1em',textDecoration:'none',borderBottom:'1px solid rgba(201,168,76,.4)',paddingBottom:2}}>
            View All 50 States →
          </Link>
        </div>
      </section>
    </>
  );
}
