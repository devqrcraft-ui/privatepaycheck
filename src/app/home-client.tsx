'use client';

import Link from 'next/link';
import Calculator from '@/components/Calculator';
import { estimatePaycheck } from '@/lib/paycheck';

function estimateNet(annual: number, stateCode: string) {
  return estimatePaycheck({
    annual,
    freq: 1,
    stateRatePct: 0,
    stateCode,
    filing: 'single',
    k401Pct: 0,
  }).net;
}

function estimateStateAndPayrollTax(annual: number, stateCode: string) {
  return estimatePaycheck({
    annual,
    freq: 1,
    stateRatePct: 0,
    stateCode,
    filing: 'single',
    k401Pct: 0,
  }).state;
}

function formatMoney(value: number) {
  return '$' + Math.round(value).toLocaleString('en-US');
}

function formatPayExample(annual: number, stateCode: string) {
  const net = estimateNet(annual, stateCode);
  return `${formatMoney(net)}/yr · ${formatMoney(net / 26)}/biweekly`;
}

const TOP_STATES = [
  { slug:'california',    name:'California',     rate:'Progressive tax' },
  { slug:'new-york',      name:'New York',       rate:'State + local rules' },
  { slug:'texas',         name:'Texas',          rate:'No individual income tax' },
  { slug:'florida',       name:'Florida',        rate:'No individual income tax' },
  { slug:'washington',    name:'Washington',     rate:'No individual income tax' },
  { slug:'illinois',      name:'Illinois',       rate:'State income tax' },
  { slug:'pennsylvania',  name:'Pennsylvania',   rate:'State income tax' },
  { slug:'ohio',          name:'Ohio',           rate:'State + local rules' },
  { slug:'georgia',       name:'Georgia',        rate:'State income tax' },
  { slug:'north-carolina',name:'North Carolina', rate:'State income tax' },
  { slug:'michigan',      name:'Michigan',       rate:'State income tax' },
  { slug:'new-jersey',    name:'New Jersey',     rate:'Progressive tax' },
  { slug:'virginia',      name:'Virginia',       rate:'State income tax' },
  { slug:'massachusetts', name:'Massachusetts',  rate:'State income tax' },
  { slug:'arizona',       name:'Arizona',        rate:'State income tax' },
  { slug:'colorado',      name:'Colorado',       rate:'State income tax' },
  { slug:'minnesota',     name:'Minnesota',      rate:'Progressive tax' },
  { slug:'maryland',      name:'Maryland',       rate:'State + local rules' },
  { slug:'oregon',        name:'Oregon',          rate:'Progressive tax' },
  { slug:'connecticut',   name:'Connecticut',    rate:'Progressive tax' },
];

const FEATURES = [
  { icon:'', title:'Private by design', desc:'Calculator inputs and results are processed in your browser; no login is required.', href:'/' },
  { icon:'', title:'2026 Tax Models', desc:'Uses 2026 federal, FICA, and state tax assumptions. Local taxes, credits, and individual withholding details can change results.', href:'/methodology' },
  { icon:'', title:'Instant Results',     desc:'See an estimated take-home breakdown for federal income tax, modeled state tax, Social Security, and Medicare.', href:'/' },
  { icon:'', title:'Salary & Hourly',     desc:'Works for salaried and hourly workers. Supports weekly, bi-weekly, semi-monthly, and monthly pay schedules.', href:'/hourly-paycheck-calculator' },
  { icon:'', title:'Bonus Calculator',    desc:'Estimate take-home pay on year-end bonuses and signing bonuses using supplemental-wage assumptions.', href:'/bonus-tax-calculator' },
  { icon:'', title:'All 50 States',       desc:'From no-tax states like Texas and Florida to high-tax states like California and New York — every state covered.', href:'/all-states' },
];

const CSS = `
  
  
  .featured-states{padding:32px 24px;background:linear-gradient(155deg,#071420 0%,#0C1C38 100%);border-top:1px solid rgba(245,200,66,.10);}
  .fs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1200px;margin:0 auto;} @media(max-width:768px){.fs-grid{grid-template-columns:1fr;}}
  .fs-card{background:rgba(255,255,255,.04);border:1px solid rgba(245,200,66,.20);border-radius:14px;padding:28px 24px;text-decoration:none;display:block;transition:all .25s ease;}
  .fs-card:hover{background:rgba(245,200,66,.07);border-color:rgba(245,200,66,.50);transform:translateY(-4px);box-shadow:0 14px 36px rgba(0,0,0,.45);}
  .fs-state{font-size:13px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#F5C842;margin-bottom:10px;}
  .fs-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:8px;line-height:1.3;}
  .fs-rate{font-size:26px;font-weight:900;color:#4ade80;margin-bottom:10px;}
  .fs-facts{display:flex;flex-direction:column;gap:5px;margin-bottom:14px;}
  .fs-fact{font-size:14px;color:#90B4D0;line-height:1.5;}
  .fs-cta{font-size:15px;font-weight:700;color:#F5C842;}
  @media(max-width:768px){.fs-grid{grid-template-columns:1fr;}}

  .obbb-section{padding:32px 24px;background:linear-gradient(155deg,#07111F 0%,#0D1E35 100%);border-top:1px solid rgba(245,200,66,.12);overflow:hidden;}
  .obbb-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1200px;margin:0 auto;width:100%;box-sizing:border-box;} @media(max-width:900px){.obbb-grid{grid-template-columns:repeat(2,1fr);gap:12px;}} @media(max-width:540px){.obbb-grid{grid-template-columns:1fr;gap:10px;}} @media(max-width:380px){.obbb-grid{grid-template-columns:1fr;}}
  .obbb-card{background:rgba(255,255,255,.04);border:1px solid rgba(99,102,241,.25);border-radius:12px;padding:20px 16px;text-decoration:none;transition:all .25s ease;display:flex;flex-direction:column;gap:4px;box-sizing:border-box;min-width:0;overflow:hidden;}
  .obbb-card:hover{background:rgba(99,102,241,.12);border-color:rgba(99,102,241,.60);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.40);}
  .obbb-badge{display:inline-block;font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;background:rgba(99,102,241,.25);color:#a5b4fc;padding:4px 10px;border-radius:3px;margin-bottom:12px;}
  .obbb-icon{font-size:28px;margin-bottom:10px;}
  .obbb-title{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:#e0e7ff;margin-bottom:8px;line-height:1.3;}
  .obbb-save{font-size:22px;font-weight:900;color:#818cf8;margin-bottom:6px;}
  .obbb-desc{font-size:14px;color:#6b7280;line-height:1.6;}
  
  @media(max-width:540px){.obbb-card{padding:14px 12px;}.obbb-title{font-size:13px!important;}.obbb-save{font-size:16px!important;}.obbb-desc{font-size:12px!important;}.obbb-icon{font-size:22px;margin-bottom:6px;}}

  .hero{background:linear-gradient(150deg,#091526 0%,#102040 55%,#0A1A30 100%);padding:0 24px 16px;position:relative;overflow:hidden;}
  .hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 70% at 72% 50%,rgba(245,200,66,.07) 0%,transparent 65%);pointer-events:none;}
  .hero-inner{max-width:100%;width:100%;margin:0 auto;display:grid;grid-template-columns:1fr minmax(0,480px);gap:20px;align-items:start;position:relative;z-index:1;padding-top:16px;}
  .hero-copy{display:flex;flex-direction:column;justify-content:flex-start;align-self:start;}
  .hero-badge{display:inline-flex;align-items:center;gap:9px;background:rgba(245,200,66,.11);border:1px solid rgba(245,200,66,.40);color:#F5C842;font-size:13px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;padding:6px 14px;border-radius:4px;margin-bottom:12px;}
  .badge-dot{width:7px;height:7px;border-radius:50%;background:#4ADE80;animation:bdpulse 2s infinite;flex-shrink:0;}
  @keyframes bdpulse{0%,100%{opacity:1}50%{opacity:.3}}
  .hero h1{font-family:'Playfair Display',serif;font-size:clamp(24px,3.2vw,38px);font-weight:900;line-height:1.1;color:#fff;margin-bottom:10px;text-shadow:2px 4px 12px rgba(0,0,0,0.6),0 2px 4px rgba(0,0,0,0.4);}
  .hero h1 em{color:#FFD700;font-style:normal;}
  .hero-desc{font-size:14px;color:#B8D0EE;line-height:1.55;margin-bottom:10px;max-width:100%;}
  .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:36px;}
  .tag{background:rgba(255,255,255,.06);border:1px solid rgba(245,200,66,.28);color:#D8E8FF;font-size:13px;font-weight:600;padding:8px 16px;border-radius:6px;border:1px solid rgba(245,200,66,.45);}
  .stats{display:flex;flex-wrap:wrap;gap:32px;}
  .stat-n{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#FFD700;line-height:1;}
  .stat-l{font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7A9FBF;margin-top:4px;}
  .trust{background:rgba(245,200,66,.05);border-top:1px solid rgba(245,200,66,.18);border-bottom:1px solid rgba(245,200,66,.18);padding:26px 24px;}
  .testimonial-bar{background:rgba(15,12,41,0.8);padding:10px 20px;text-align:center;font-size:13px;color:rgba(255,255,255,0.65);border-bottom:1px solid rgba(245,200,66,0.1);}
  .testimonial-bar strong{color:#F5C842;}
  .trust-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px;text-align:center;}
  .t-n{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#FFD700;}
  .t-l{font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7A9FBF;margin-top:3px;}
  .pp-section{padding:36px 24px;}
  .pp-section-alt{background:linear-gradient(155deg,#08142A 0%,#091A32 100%);}
  .s-head{text-align:center;margin-bottom:16px;}
  .s-tag{display:inline-block;font-size:12px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#F5C842;border-bottom:2px solid rgba(245,200,66,.40);padding-bottom:5px;margin-bottom:16px;}
  .pp-section h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,38px);font-weight:700;color:#fff;margin-bottom:14px;line-height:1.15;}
  .pp-section h2 em{color:#FFD700;font-style:normal;}
  .s-desc{font-size:15px;color:#90B4D0;max-width:100%;margin:0 auto;line-height:1.78;}
  .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1200px;margin:0 auto;} @media(max-width:768px){.feat-grid{grid-template-columns:1fr;}}
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
  .all-link{display:block;text-align:center;margin-top:16px;color:#F5C842;font-size:14px;font-weight:700;letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;padding-bottom:16px;border-bottom:1px solid rgba(245,200,66,0.15);}
  .all-link:hover{color:#FFD700;}
  
@media(max-width:900px){.hero-inner{grid-template-columns:1fr;gap:20px;}.hero{padding:0 16px 20px;}.feat-grid{grid-template-columns:repeat(2,1fr);}.hero-copy{order:-1;}}
  @media(max-width:540px){.hero{padding:0 12px 16px;}.hero h1{font-size:28px;}.hero-desc{font-size:15px!important;}.pp-section{padding:16px 12px;}.featured-states{padding:16px 12px;}.obbb-section{padding:16px 12px;}.feat-grid{grid-template-columns:1fr;}.feat-card{padding:20px 16px;}.feat-title{font-size:20px!important;}.feat-desc{font-size:16px!important;line-height:1.75!important;}.states-grid{grid-template-columns:repeat(2,1fr);}.salary-grid{grid-template-columns:1fr!important;}.high-income-grid{grid-template-columns:1fr!important;}.s-desc{font-size:16px!important;line-height:1.7!important;}.pp-section h2{font-size:26px!important;}.fs-fact{font-size:16px!important;line-height:1.7!important;}.fs-title{font-size:20px!important;}.fs-rate{font-size:30px!important;}.fs-card{padding:20px 16px;}.hwc-grid{grid-template-columns:1fr!important;}.s-name{font-size:16px!important;}.s-rate{font-size:15px!important;}.obbb-desc{font-size:15px!important;}.obbb-title{font-size:17px!important;}.stat-n{font-size:28px!important;}.t-n{font-size:26px!important;}.trust{padding:16px 12px;}.pp-section h2{margin-bottom:8px!important;}.feat-card{margin-bottom:0!important;}.obbb-grid{gap:10px!important;}.feat-grid{gap:12px!important;}.fs-grid{gap:12px!important;}}
`;

export default function HomeClient() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>

      <div className="testimonial-bar">
        🔒 Calculations stay in your browser &nbsp;|&nbsp; ✓ 2026 IRS rates
      </div>
      <section className="hero">
        <div className="hero-inner">
        {/* ── HERO COPY ── */}
        <div className="hero-copy">
          <div style={{fontSize:11,fontWeight:800,color:'#F5C842',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:10}}>privatepaycheck.com</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3.5vw,42px)',fontWeight:900,lineHeight:1.1,color:'#fff',marginBottom:8}}>
            Free Paycheck Calculator <em style={{color:'#FFD700',fontStyle:'normal'}}>2026</em>
          </h1>
          <div style={{fontSize:13,fontWeight:700,color:'#F5C842',textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:10}}>W-2 Salary · Hourly · Bonus · All 50 States</div>

          <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:12}}>
            {[
              'W-2 Salary · Hourly · Bonus Calculator',
              'All 50 States + 2026 IRS Tax Brackets',
              'Federal · State · FICA Full Breakdown',
              'Calculations stay in your browser · 100% Private',
            ].map((item,i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:14}}>
                <div style={{width:32,height:32,borderRadius:'6px',border:'3px solid #22c55e',background:'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,boxShadow:'0 2px 8px rgba(34,197,94,0.25)'}}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><polyline points="2,8 7,13 14,3" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{fontSize:16,fontWeight:600,color:'#e8edf8',lineHeight:1.35}}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,borderTop:'1px solid rgba(245,200,66,0.15)',paddingTop:16,marginTop:8}}>
            <div><div className="stat-n">2026</div><div className="stat-l">Tax Year</div></div>
            <div><div className="stat-n">50</div><div className="stat-l">States</div></div>
            <div><div className="stat-n">100%</div><div className="stat-l">Private</div></div>
            <div><div className="stat-n">$0</div><div className="stat-l">Always Free</div></div>
          </div>
          <div style={{background:'rgba(99,102,241,0.07)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:10,padding:'14px 16px',marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:800,color:'#a5b4fc',letterSpacing:'0.16em',textTransform:'uppercase',marginBottom:10}}>2026 Tax Law Updates</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr',gap:8}}>
                {[
                  ['Qualified Overtime Deduction','/no-tax-on-overtime-deduction','Eligibility and limits apply'],
                  ['Qualified Tip Income Deduction','/no-tax-on-tips-calculator','Eligibility and limits apply'],
                  ['Additional Senior Deduction','/senior-deduction-calculator','Income limits apply'],
                  ['Trump Account','/trump-account-calculator','Hypothetical balance projection'],
                ].map(([label, href, save]) => (
                  <a key={href} href={href} style={{display:'block',background:'rgba(99,102,241,0.10)',border:'1px solid rgba(99,102,241,0.25)',borderRadius:10,padding:'12px 16px',textDecoration:'none',textAlign:'center'}}>
                    <div style={{fontSize:15,fontWeight:700,color:'#e0e7ff',lineHeight:1.3,marginBottom:4}}>{label}</div>
                    <div style={{fontSize:13,color:'#818cf8',fontWeight:700}}>{save}</div>
                  </a>
                ))}
              </div>
            </div>
            {/* Quick salary examples */}
          <div style={{marginTop:28,display:'flex',flexDirection:'column',gap:10}}>
            <div style={{fontSize:11,fontWeight:800,color:'rgba(245,200,66,0.7)',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:4}}>Quick Examples</div>
            {[
              {label:'$65,000 salary · Texas',net:formatPayExample(65000, 'tx'),color:'#4ade80'},
              {label:'$85,000 salary · California',net:formatPayExample(85000, 'ca'),color:'#4ade80'},
              {label:'$20/hr · Florida',net:formatPayExample(20 * 2080, 'fl'),color:'#4ade80'},
              {label:'$120,000 salary · New York',net:formatPayExample(120000, 'ny'),color:'#4ade80'},
            ].map((ex,i)=>(
              <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(245,200,66,0.12)',borderRadius:8,padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}}>
                <span style={{fontSize:13,fontWeight:600,color:'#c8d8ec'}}>{ex.label}</span>
                <span style={{fontSize:13,fontWeight:800,color:ex.color,whiteSpace:'nowrap' as const}}>{ex.net}</span>
              </div>
            ))}
          </div>
        </div>
          {/* ── CALCULATOR COLUMN ── */}
          <div id="calculator" style={{display:'flex',flexDirection:'column',gap:12}}>
            <Calculator />
            {/* HOW WE CALCULATE — under calculator */}
            <div className="how-we-calculate-block" style={{ padding: '0' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '14px 16px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }} className="hwc-grid">
                {[
                  { label: 'Federal income tax', detail: 'Uses 2026 IRS federal brackets (annualized estimate, modeled on Publication 15-T). Standard deduction $16,100 (single) / $32,200 (married). Rates 10%–37%.' },
                  { label: 'FICA taxes', detail: 'Social Security 6.2% on wages up to $184,500. Medicare 1.45% on all wages. Additional 0.9% Medicare surtax above $200,000.' },
                  { label: 'State income tax', detail: "Uses modeled 2026 state income-tax schedules. Local taxes, credits, and state-specific rules may not be included; see the methodology." },
                ].map(item => (
                  <div key={item.label} style={{ borderLeft: '3px solid rgba(245,200,66,0.5)', paddingLeft: 10 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: '#F5C842', marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                ))}
              </div>
              <div style={{ paddingTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
                Based on 2026 IRS federal brackets (modeled on Publication 15-T). <a href="/methodology" style={{ color: '#F5C842', textDecoration: 'underline none' }}>See full methodology →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="trust-inner">
          <div><div className="t-n">100%</div><div className="t-l">Browser-Only</div></div>
          <div><div className="t-n">0</div><div className="t-l">Signups Needed</div></div>
          <div><div className="t-n">IRS</div><div className="t-l">Rates Source</div></div>
          <div><div className="t-n">SSA</div><div className="t-l">Wage Base Official</div></div>
          <div><div className="t-n">2026</div><div className="t-l">Tax Tables Live</div></div>
        </div>
      </div>

      <section className="obbb-section">
        <div className="s-head">
          <div className="s-tag" style={{color:'#a5b4fc',borderColor:'rgba(99,102,241,.40)'}}>One Big Beautiful Bill — Signed Law 2025–2028</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(26px,4vw,36px)',fontWeight:700,color:'#fff',marginBottom:14,lineHeight:1.15}}>New Tax Cuts — <em style={{color:'#818cf8'}}>Calculate Your Savings</em></h2>
          <p className="s-desc">Federal law now offers deductions for qualified overtime and tips, adds a $6,000 deduction for seniors, and creates savings accounts for children.</p>
        </div>
        <div className="obbb-grid">
          <Link href="/no-tax-on-overtime-deduction" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div className="obbb-title">Qualified Overtime Deduction</div>
            <div className="obbb-save">Eligibility and limits apply</div>
            <div className="obbb-desc">Some eligible overtime compensation may qualify for a federal deduction. FICA and other taxes may still apply.</div>
          </Link>
          <Link href="/no-tax-on-tips-calculator" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/></svg></div>
            <div className="obbb-title">Qualified Tip Income Deduction</div>
            <div className="obbb-save">Eligibility and limits apply</div>
            <div className="obbb-desc">Eligible tip income may qualify for a federal deduction; this does not remove every payroll or state tax.</div>
          </Link>
          <Link href="/senior-deduction-calculator" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M8 21l4-4 4 4"/></svg></div>
            <div className="obbb-title">Senior $6,000 Deduction</div>
            <div className="obbb-save">Up to $1,320 at 22%</div>
            <div className="obbb-desc">Extra $6,000 deduction for age 65+. Phaseout at $75K.</div>
          </Link>
          <Link href="/trump-account-calculator" className="obbb-card">
            <div className="obbb-badge">New Law</div>
            <div className="obbb-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><path d="M9 11c0 2 1.5 3 3 3s3-1 3-3"/></svg></div>
            <div className="obbb-title">Trump Account</div>
            <div className="obbb-save">Check eligibility and assumptions</div>
            <div className="obbb-desc">Review IRS rules and model a hypothetical balance with an assumed return.</div>
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
            <Link key={f.title} href={f.href} className="feat-card" style={{textDecoration:'none'}}>
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>


      {/* featured-states-block */}
      <section className="featured-states">
        <div className="s-head">
          <div className="s-tag">Most Searched States</div>
          <h2>Top State <em>Paycheck Calculators</em></h2>
          <p className="s-desc">Get an estimated take-home pay for Texas, Florida and California in seconds.</p>
        </div>
        <div className="fs-grid">
          <Link href="/texas-paycheck-calculator" className="fs-card">
            <div className="fs-state">Texas</div>
            <div className="fs-title">Texas Paycheck Calculator 2026</div>
            <div className="fs-rate">No individual income tax</div>
            <div className="fs-facts">
              <div className="fs-fact"> No state income tax — keep more of every paycheck</div>
              <div className="fs-fact"> Federal tax + 7.65% FICA only</div>
              <div className="fs-fact"> $75,000 salary → {formatMoney(estimateNet(75000, 'tx'))} estimated annual net</div>
              <div className="fs-fact"> Uses modeled 2026 federal tax and FICA</div>
            </div>
            <div className="fs-cta">Calculate Texas Paycheck <span className="arr">→</span></div>
          </Link>
          <Link href="/florida-paycheck-calculator" className="fs-card">
            <div className="fs-state">Florida</div>
            <div className="fs-title">Florida Paycheck Calculator 2026</div>
            <div className="fs-rate">No individual income tax</div>
            <div className="fs-facts">
              <div className="fs-fact"> Florida has no state income tax</div>
              <div className="fs-fact">Minimum wage and local ordinances can vary by date and location</div>
              <div className="fs-fact"> $75,000 salary → {formatMoney(estimateNet(75000, 'fl'))} estimated annual net</div>
              <div className="fs-fact"> Modeled federal tax and FICA; no state income tax</div>
            </div>
            <div className="fs-cta">Calculate Florida Paycheck <span className="arr">→</span></div>
          </Link>
          <Link href="/california-paycheck-calculator" className="fs-card">
            <div className="fs-state">California</div>
            <div className="fs-title">California Paycheck Calculator 2026</div>
            <div className="fs-rate">Progressive tax</div>
            <div className="fs-facts">
            <div className="fs-fact">State income tax and employee SDI can affect net pay</div>
            <div className="fs-fact">Minimum wage may vary by city and employer</div>
            <div className="fs-fact"> $75,000 salary → {formatMoney(estimateNet(75000, 'ca'))} estimated annual net</div>
            <div className="fs-fact">Estimate includes modeled federal, state, payroll-tax, and SDI deductions</div>
            </div>
            <div className="fs-cta">Calculate California Paycheck <span className="arr">→</span></div>
          </Link>
        </div>
      </section>

      <section className="pp-section" style={{background:'#08142a'}}>
        <div className="s-head">
          <div className="s-tag">Salary Examples</div>
          <h2>Illustrative Take-Home <em>Pay Examples</em></h2>
          <p className="s-desc">Compare modeled take-home pay for common salaries. Estimates assume a single filer and exclude some local taxes and personal deductions.</p>
        </div>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}} className='salary-grid'>
          {[
            {salary:'$20/hr in Texas',net:formatPayExample(20 * 2080, 'tx'),note:'Illustrative single-filer estimate; no individual income tax.',href:'/hourly-paycheck-calculator/texas'},
            {salary:'$20/hr in California',net:formatPayExample(20 * 2080, 'ca'),note:'Includes modeled state income tax and California SDI.',href:'/hourly-paycheck-calculator/california'},
            {salary:'$60,000 salary Florida',net:formatPayExample(60000, 'fl'),note:'Illustrative single-filer estimate; no individual income tax.',href:'/florida-paycheck-calculator'},
            {salary:'$75,000 salary New York',net:formatPayExample(75000, 'ny'),note:'Excludes NYC and other local income taxes.',href:'/new-york-paycheck-calculator'},
            {salary:'$50,000 salary Illinois',net:formatPayExample(50000, 'il'),note:'Includes modeled Illinois income tax.',href:'/illinois-paycheck-calculator'},
            {salary:'$100,000 salary California',net:formatPayExample(100000, 'ca'),note:'Includes modeled state income tax and California SDI.',href:'/california-paycheck-calculator'},
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


      <section className="pp-section" style={{background:'#050e1a',paddingTop:'24px',paddingBottom:'24px'}}>
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 20px'}}>
          <div style={{fontSize:'12px',fontWeight:700,color:'rgba(245,200,66,0.85)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px',textAlign:'center'}}>More Free Tax Tools</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'12px'}}>
            <a href="https://gigwisetax.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(178,34,52,0.08)',border:'1px solid rgba(178,34,52,0.25)',borderRadius:'10px',padding:'18px 20px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(255,100,100,1)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>1099 Gig Tax Tool</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'17px',fontWeight:700,color:'#fff',marginBottom:'4px'}}>GigWiseTax.com</div>
              <div style={{fontSize:'12px',color:'#7090B0',lineHeight:1.6,marginBottom:'10px'}}>Free self-employment tax calculator. SE tax 15.3% + federal + all 50 states + DC. DoorDash, Uber, OnlyFans & more.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['SE Tax 15.3%','All 50 States + DC','100% Free'].map((t:string)=><span key={t} style={{fontSize:'10px',background:'rgba(178,34,52,0.12)',border:'1px solid rgba(178,34,52,0.3)',color:'rgba(255,255,255,0.85)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
              </div>
              <div style={{background:'#B22234',color:'#fff',padding:'9px 0',borderRadius:'6px',fontSize:'12px',fontWeight:700,textAlign:'center'}}>Calculate Gig Taxes →</div>
            </a>
            <a href="https://1099deductions.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(184,146,74,0.06)',border:'1px solid rgba(184,146,74,0.2)',borderRadius:'10px',padding:'18px 20px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(245,200,66,1)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>1099 Deductions Hub</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'17px',fontWeight:700,color:'#fff',marginBottom:'4px'}}>1099Deductions.com</div>
              <div style={{fontSize:'12px',color:'#7090B0',lineHeight:1.6,marginBottom:'10px'}}>Free IRS Schedule C write-off checklists. DoorDash, Uber, Airbnb, OnlyFans & more. 17 job types.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['17 Job Types','Schedule C','100% Free'].map((t:string)=><span key={t} style={{fontSize:'10px',background:'rgba(184,146,74,0.1)',border:'1px solid rgba(184,146,74,0.25)',color:'rgba(255,255,255,0.85)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
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
          <p className="s-desc">Choose a state for an estimate using the applicable modeled tax schedule. Local taxes and individual deductions may not be included.</p>
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
            
            <div className="feat-title">Federal Tax</div>
            <p className="feat-desc">2026 IRS federal tax brackets. Standard deduction $16,100 (single) / $32,200 (married). Progressive rates 10%–37%.</p>
          </div>
          <div className="feat-card">
            
            <div className="feat-title">FICA Tax</div>
            <p className="feat-desc">Social Security 6.2% up to $184,500 wage base. Medicare 1.45% on all wages. Additional 0.9% Medicare above $200,000.</p>
          </div>
          <div className="feat-card">
            
            <div className="feat-title">State Tax</div>
            <p className="feat-desc">Official 2026 rates for all 50 states. 9 states have $0 income tax. Flat rates and progressive brackets both supported.</p>
          </div>
          <div className="feat-card">
            
            <div className="feat-title">100% Private</div>
            <p className="feat-desc">All math runs in your browser. Calculator inputs are never sent to our servers. No ad cookies, no accounts required — ever.</p>
          </div>
          <div className="feat-card">
            
            <div className="feat-title">2026 Tax Year</div>
            <p className="feat-desc">Updated for 2026 IRS inflation adjustments. New standard deductions, bracket thresholds, and FICA wage base included.</p>
          </div>
          <div className="feat-card">
            
            <div className="feat-title">Instant & Free</div>
            <p className="feat-desc">Results in under a second. No signup, no email, no paywall. Works on any device. Completely free forever.</p>
          </div>
        </div>
        {/* HIGH INCOME BLOCK */}
        <div style={{background:'linear-gradient(135deg,#0d1f35,#1a2d4a)',border:'1px solid rgba(245,200,66,0.75)',borderRadius:12,padding:'24px 28px',marginTop:32,marginBottom:8}}>
          <div style={{fontSize:13,fontWeight:800,color:'#F5C842',letterSpacing:'1.5px',textTransform:'uppercase',marginBottom:14}}> High-Income Earners — $200k, $500k, $1M+</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14}} className='high-income-grid'>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>Social Security Cap</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>SS tax (6.2%) stops at <strong style={{color:'#fff'}}>$184,500</strong> in 2026. Above this, you save $11,439/year vs someone earning under the cap.</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>Additional Medicare Surtax</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>Earnings above <strong style={{color:'#fff'}}>$200,000</strong> (single) or $250,000 (married) trigger an extra 0.9% Medicare surtax — not matched by employers.</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>Top Federal Bracket</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>The 37% rate applies above <strong style={{color:'#fff'}}>$640,600</strong> (single). At $1M salary in CA, total effective rate can reach 52%+ including state.</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'14px 16px'}}>
              <div style={{fontSize:12,fontWeight:700,color:'#F5C842',marginBottom:6}}>State Impact at $500k</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>At $500,000 of modeled wages, the estimated state and payroll-tax difference between California and Texas is {formatMoney(estimateStateAndPayrollTax(500000, 'ca') - estimateStateAndPayrollTax(500000, 'tx'))} per year. This illustration excludes local taxes, credits, and individual filing details.</div>
            </div>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'12px',color:'#a8c8e8',marginTop:'24px'}}>
          Sources: <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener" style={{color:'#F5C842',textDecoration:'underline'}}>IRS Pub 15-T</a> · <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener" style={{color:'#F5C842',textDecoration:'underline'}}>SSA Wage Base</a> · State Revenue Departments
        </p>
      </section>


      <section className="pp-section" style={{background:'#060f1e'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto'}}>

          <div style={{marginBottom:40}}>
            <div style={{textAlign:'center' as const,marginBottom:28}}>
              <div className="s-tag">What&apos;s New</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(24px,3.5vw,34px)',fontWeight:700,color:'#fff',margin:'8px 0 0',lineHeight:1.2}}>2026 Updates <em style={{color:'#FFD700',fontStyle:'normal'}}>Included</em></h2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16}}>
              {[
                {title:'2026 IRS Tax Brackets',desc:'Updated federal brackets and standard deductions: $16,100 single / $32,200 married filing jointly.'},
                {title:'FICA & Social Security',desc:'Social Security wage base $184,500. Medicare 1.45% on all wages. Additional 0.9% above $200k.'},
                {title:'Overtime & Tips',desc:'Use dedicated estimates for qualified overtime and qualified tips deductions; eligibility and limits apply.'},
                {title:'Senior deduction & Trump Accounts',desc:'Learn about the additional deduction for eligible adults age 65+ and current IRS Trump Account rules.'},
              ].map(item => (
                <div key={item.title} style={{background:'rgba(245,200,66,0.06)',border:'1px solid rgba(245,200,66,0.2)',borderRadius:12,padding:'22px 20px',transition:'transform 0.2s,box-shadow 0.2s',cursor:'default'}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.boxShadow='0 8px 24px rgba(245,200,66,0.15)';}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(0)';(e.currentTarget as HTMLElement).style.boxShadow='none';}}>
                  <div style={{fontSize:16,fontWeight:800,color:'#FFD700',marginBottom:10}}>{item.title}</div>
                  <div style={{fontSize:15,color:'#b0c4de',lineHeight:1.75}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:16,padding:'28px 24px'}}>
            <div style={{textAlign:'center' as const,marginBottom:24}}>
              <div className="s-tag">Transparency</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(22px,3vw,30px)',fontWeight:700,color:'#fff',margin:'8px 0 0'}}>How We Calculate <em style={{color:'#FFD700',fontStyle:'normal'}}>Your Paycheck</em></h2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,marginBottom:20}}>
              {[
                {num:'01',title:'2026 IRS Federal Brackets',desc:'We use 2026 IRS federal brackets and the standard deduction to estimate federal income tax. Your employer’s payroll system may withhold differently.'},
                {num:'02',title:'FICA Rates',desc:'Uses statutory Social Security and Medicare rates and the 2026 wage base. Your payroll withholding may differ.'},
                {num:'03',title:'State Tax Tables',desc:'Uses 2026 modeled state income-tax schedules for all states and D.C. Local taxes and some state-specific rules may not be included.'},
                {num:'04',title:'100% Private',desc:'All calculations run in your browser. We never see your income or results. Calculations stay in your browser, ever.'},
              ].map(item => (
                <div key={item.num} style={{display:'flex',gap:16,alignItems:'flex-start'}}>
                  <div style={{fontSize:28,fontWeight:900,color:'rgba(245,200,66,0.75)',flexShrink:0,lineHeight:1,fontFamily:"'Playfair Display',serif",minWidth:32}}>{item.num}</div>
                  <div>
                    <div style={{fontSize:16,fontWeight:700,color:'#e8edf8',marginBottom:6}}>{item.title}</div>
                    <div style={{fontSize:14,color:'#a8c8e8',lineHeight:1.75}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{textAlign:'center' as const,paddingTop:16,borderTop:'1px solid rgba(255,255,255,0.06)'}}>
              <a href="/methodology" style={{color:'#FFD700',fontSize:14,fontWeight:700,textDecoration:'none'}}>Read full methodology →</a>
            </div>
          </div>

        </div>
      </section>
      <section className="pp-section" style={{background:'#07111f'}}>
        <div className="s-head">
          <div className="s-tag">FAQ</div>
          <h2>Common <em>Paycheck Questions</em></h2>
          <p className="s-desc">Answers based on 2026 IRS rules. Calculations are estimates based on 2026 IRS rates; see our methodology.</p>
        </div>
        <div style={{maxWidth:'800px',margin:'0 auto',display:'flex',flexDirection:'column',gap:'12px'}}>
          {[
            ['How much of my paycheck goes to taxes?',`There is no single percentage: filing status, deductions, state, and pay details change the result. For an illustrative $60,000 single-filer salary, this model estimates ${formatMoney(estimateNet(60000, 'tx'))} annual take-home in Texas and ${formatMoney(estimateNet(60000, 'ca'))} in California, before benefits and local taxes.`],
            ['What is the difference between gross and net pay?','Gross pay is your salary or hourly rate before any deductions. Net pay (take-home) is what hits your bank account after federal tax, state tax, Social Security (6.2%), and Medicare (1.45%) are withheld.'],
            ['How do I calculate my biweekly paycheck?',`For a salary, divide annual gross pay by 26 to get a simple gross-pay average; net withholding depends on your W-4, state, benefits, and payroll schedule. The model estimates ${formatMoney(estimateNet(75000, 'tx') / 26)} net per period in Texas and ${formatMoney(estimateNet(75000, 'ca') / 26)} in California for a $75,000 single-filer example.`],
            ['Does overtime get taxed more?','Overtime is generally included in wage income and is not automatically taxed at a special higher rate. Eligible workers may qualify for a federal overtime deduction under current law, but limits and eligibility apply; this base paycheck estimate does not calculate that deduction.'],
            ['How much is $20 an hour after taxes?',`At 2,080 hours per year, $20/hour is $41,600 gross. Under this model, estimated annual net is ${formatMoney(estimateNet(41600, 'tx'))} in Texas and ${formatMoney(estimateNet(41600, 'ca'))} in California, before benefits and any local tax.`],
            ['Why does my paycheck vary each period?','Withholding can shift based on bonuses, overtime, benefits, or W-4 changes. A per-paycheck withholding amount is not necessarily the same as your final annual tax. Use our bonus calculator for a separate supplemental-wage estimate.'],
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
            {href:'/overtime-calculator',name:'Overtime Calculator',rate:'1.5× rate + OT deduction'},
            {href:'/no-tax-on-tips-calculator',name:'Tips Calculator',rate:'Up to $25,000 free'},
            {href:'/no-tax-on-overtime-deduction',name:'Overtime Deduction',rate:'Eligibility and limits apply'},
            {href:'/w4-withholding-calculator',name:'W-4 Calculator',rate:'Estimate withholding'},
            {href:'/senior-deduction-calculator',name:'Senior Deduction',rate:'$6,000 extra'},
            {href:'/trump-account-calculator',name:'Trump Account',rate:'Hypothetical projection'},
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
      {/* Popular Articles — internal linking for SEO */}
      <section style={{maxWidth:'1200px',margin:'0 auto',padding:'48px 16px 64px',boxSizing:'border-box'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
          <div style={{width:'3px',height:'20px',background:'#F5C842',borderRadius:'2px'}}></div>
          <span style={{fontSize:'11px',fontWeight:800,color:'#F5C842',letterSpacing:'1.5px',textTransform:'uppercase'}}>Paycheck Guides</span>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:900,color:'#e8edf8',marginBottom:'6px',marginLeft:'13px'}}>Popular Paycheck Calculators & Guides</h2>
        <p style={{fontSize:'13px',color:'rgba(232,237,248,0.5)',marginBottom:'24px',marginLeft:'13px'}}>Step-by-step guides for every salary, state, and situation.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'12px'}}>
          {[
            {href:'/blog/100k-a-year-after-taxes',title:'$100k a Year After Taxes',desc:'Compare estimated take-home pay on a $100,000 salary across states.'},
            {href:'/blog/california-paycheck-calculator-guide',title:'California Paycheck Calculator Guide',desc:'How California state taxes affect your paycheck — 2026 rates.'},
            {href:'/blog/texas-paycheck-calculator-guide',title:'Texas Paycheck Calculator Guide',desc:'No state income tax in Texas — see what you actually keep.'},
            {href:'/nurse-paycheck-calculator',title:'Nurse Paycheck Calculator',desc:'Take-home pay for RNs, LPNs and travel nurses after taxes.'},
            {href:'/blog/200k-a-year-after-taxes',title:'$200k a Year After Taxes',desc:'What $200,000 looks like after federal, state and FICA taxes.'},
            {href:'/blog/2026-federal-tax-brackets',title:'2026 Federal Tax Brackets',desc:'Full IRS bracket table and how to calculate your marginal rate.'},
            {href:'/blog/texas-vs-california-salary',title:'Texas vs California Salary',desc:'Side-by-side take-home pay comparison for the two biggest states.'},
            {href:'/blog/software-engineer-take-home-pay',title:'Software Engineer Take-Home Pay',desc:'What $120k–$300k engineering salaries net out to after taxes.'},
            {href:'/blog/how-to-calculate-take-home-pay-2026',title:'How to Calculate Take-Home Pay',desc:'Step-by-step guide: federal, FICA, state and local tax math.'},
            {href:'/blog/what-is-fica-tax',title:'What is FICA Tax?',desc:'Social Security and Medicare explained — rates, limits, examples.'},
            {href:'/blog/married-filing-jointly-paycheck-2026',title:'Married Filing Jointly Paycheck',desc:'How marriage changes your withholding and take-home pay.'},
            {href:'/blog/no-income-tax-states-2026',title:'States With No Income Tax 2026',desc:'9 states with zero income tax — and what that means for your pay.'},
          ].map(({href,title,desc})=>(
            <a key={href} href={href} style={{textDecoration:'none',display:'block',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(245,200,66,0.12)',borderRadius:'8px',padding:'16px',transition:'border-color .15s'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(245,200,66,0.4)')}
              onMouseLeave={e=>(e.currentTarget.style.borderColor='rgba(245,200,66,0.12)')}>
              <div style={{fontSize:'15px',fontWeight:700,color:'#e8edf8',marginBottom:'6px',lineHeight:'1.3'}}>{title}</div>
              <div style={{fontSize:'12px',color:'rgba(232,237,248,0.55)',lineHeight:'1.6'}}>{desc}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
