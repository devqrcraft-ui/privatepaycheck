'use client';

import Link from 'next/link';
import { useState } from 'react';

const STATE_TAX: Record<string, number> = {
  AL: 0.05, AK: 0, AZ: 0.025, AR: 0.047, CA: 0.093, CO: 0.044, CT: 0.065,
  DE: 0.066, FL: 0, GA: 0.055, HI: 0.08, ID: 0.058, IL: 0.0495, IN: 0.0305,
  IA: 0.06, KS: 0.057, KY: 0.045, LA: 0.0425, ME: 0.075, MD: 0.0575,
  MA: 0.05, MI: 0.0425, MN: 0.0985, MS: 0.05, MO: 0.054, MT: 0.069,
  NE: 0.0684, NV: 0, NH: 0, NJ: 0.0637, NM: 0.059, NY: 0.0685, NC: 0.0499,
  ND: 0.029, OH: 0.04, OK: 0.0475, OR: 0.099, PA: 0.0307, RI: 0.0599,
  SC: 0.07, SD: 0, TN: 0, TX: 0, UT: 0.0465, VT: 0.0875, VA: 0.0575,
  WA: 0, WV: 0.065, WI: 0.0765, WY: 0, DC: 0.085,
};

const STATE_NAMES: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
  CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',
  IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',
  ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',
  MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',
  WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'Washington DC',
};

function federalTax(income: number, filing: string): number {
  const brackets =
    filing === 'married'
      ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
      : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets as [number,number][]) {
    if (income <= prev) break;
    tax += (Math.min(income, limit) - prev) * rate;
    prev = limit;
  }
  return tax;
}

const BG = { minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' };
const NAV_STYLE = { padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky' as const, top:0, zIndex:100 };
const CARD = { background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'16px', padding:'24px' };
const LABEL = { fontSize:'11px', fontWeight:700, letterSpacing:'0.08em', color:'rgba(255,255,255,0.5)', textTransform:'uppercase' as const, marginBottom:'8px' };
const INPUT_S = { width:'100%', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'10px', padding:'12px 14px', color:'white', fontSize:'16px', boxSizing:'border-box' as const, outline:'none' , colorScheme: 'dark' as const };

export default function SigningBonusCalculator() {
  const [bonus, setBonus]     = useState(20000);
  const [salary, setSalary]   = useState(120000);
  const [state, setState]     = useState('CA');
  const [filing, setFiling]   = useState('single');
  const [clawback, setClawback] = useState(12);

  const fica = Math.min(bonus, Math.max(0, 168600 - salary)) * 0.062 + bonus * 0.0145;
  const fedTax = federalTax(salary + bonus, filing) - federalTax(salary, filing);
  const stateTax = bonus * (STATE_TAX[state] ?? 0);
  const total = fedTax + stateTax + fica;
  const takeHome = bonus - total;
  const effectiveRate = total / bonus;
  const monthlyValue = takeHome / clawback;

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number) => (n * 100).toFixed(1) + '%';

  return (
    <main style={BG}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        "name":"Signing Bonus Tax Calculator 2026",
        "url":"https://privatepaycheck.com/signing-bonus-tax-calculator",
        "description":"Calculate your signing bonus after taxes. See exactly how much you'll take home. Includes federal, state, FICA, and clawback analysis.",
        "applicationCategory":"FinanceApplication","operatingSystem":"Any",
        "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
      })}} />


      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'32px 16px' }}>

        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'12px', color:'#4ade80' }}>
            🔒 Private calculation — no data sent anywhere
          </div>
          <h1 style={{ fontSize:'clamp(24px,5vw,48px)', fontWeight:900, margin:'0 0 12px', lineHeight:1.15 }}>
            Signing Bonus Tax Calculator 2026
            <br/><span style={{ color:'#F5C842' }}>How Much Will You Actually Get?</span>
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'580px', margin:'0 auto', lineHeight:1.7 }}>
            Got a job offer with a signing bonus? See exactly how much lands in your account — after federal, state, and FICA taxes. Plus clawback analysis.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>

          <div style={CARD}>
            <h2 style={{ fontSize:'16px', fontWeight:800, margin:'0 0 20px' }}>Your Offer Details</h2>

            <div style={{ marginBottom:'16px' }}>
              <div style={LABEL}>Signing Bonus</div>
              <div style={{ position:'relative' }}>
                <span style={{ position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', color:'#4ade80', fontWeight:700 }}>$</span>
                <input type="number" value={bonus} onChange={e=>setBonus(+e.target.value)} style={{ ...INPUT_S, paddingLeft:'28px' }} />
              </div>
            </div>

            <div style={{ marginBottom:'16px' }}>
              <div style={LABEL}>Annual Base Salary</div>
              <div style={{ position:'relative' }}>
                <span style={{ position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', color:'#4ade80', fontWeight:700 }}>$</span>
                <input type="number" value={salary} onChange={e=>setSalary(+e.target.value)} style={{ ...INPUT_S, paddingLeft:'28px' }} />
              </div>
            </div>

            <div style={{ marginBottom:'16px' }}>
              <div style={LABEL}>State</div>
              <select value={state} onChange={e=>setState(e.target.value)} style={{ ...INPUT_S, cursor:'pointer' }}>
                {Object.entries(STATE_NAMES).sort((a,b)=>a[1].localeCompare(b[1])).map(([k,v])=>(
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom:'16px' }}>
              <div style={LABEL}>Filing Status</div>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={{ ...INPUT_S, cursor:'pointer' }}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>

            <div>
              <div style={LABEL}>Clawback Period (months)</div>
              <input type="number" value={clawback} onChange={e=>setClawback(+e.target.value)} min={1} max={36} style={INPUT_S} />
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.35)', marginTop:'4px' }}>
                How long until you're free to leave without repaying?
              </div>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            <div style={{ ...CARD, background:'linear-gradient(135deg,rgba(74,222,128,0.15),rgba(201,168,76,0.15))', border:'1px solid rgba(74,222,128,0.3)', textAlign:'center', padding:'28px' }}>
              <div style={{ fontSize:'13px', opacity:0.65, marginBottom:'6px' }}>You'll Take Home</div>
              <div style={{ fontSize:'48px', fontWeight:900, color:'#4ade80' }}>{fmt(takeHome)}</div>
              <div style={{ fontSize:'13px', opacity:0.5, marginTop:'6px' }}>from {fmt(bonus)} signing bonus</div>
            </div>

            <div style={CARD}>
              <div style={{ fontSize:'13px', fontWeight:700, marginBottom:'14px', opacity:0.7 }}>Tax Breakdown</div>
              {[
                { label:'Federal Income Tax', value:fedTax, color:'#f87171' },
                { label:`State Tax (${STATE_NAMES[state]})`, value:stateTax, color:'#fb923c' },
                { label:'FICA (SS + Medicare)', value:fica, color:'#facc15' },
                { label:'Total Tax', value:total, color:'#e879f9', bold:true },
              ].map(row=>(
                <div key={row.label} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize:'13px', opacity:row.bold?1:0.7, fontWeight:row.bold?700:400 }}>{row.label}</span>
                  <span style={{ color:row.color, fontWeight:700, fontSize:row.bold?'16px':'14px' }}>{fmt(row.value)}</span>
                </div>
              ))}
              <div style={{ marginTop:'12px', textAlign:'center' }}>
                <span style={{ fontSize:'13px', opacity:0.5 }}>Effective Rate: </span>
                <span style={{ color:'#e879f9', fontWeight:700 }}>{pct(effectiveRate)}</span>
              </div>
            </div>

            <div style={{ ...CARD, border:'1px solid rgba(251,191,36,0.3)' }}>
              <div style={{ fontSize:'13px', fontWeight:700, marginBottom:'8px', color:'#fbbf24' }}>⚠️ Clawback Analysis</div>
              <div style={{ fontSize:'13px', opacity:0.65, lineHeight:1.6 }}>
                If you leave before <strong style={{ color:'white' }}>{clawback} months</strong>, you may owe back {fmt(bonus)} gross.<br/><br/>
                Your net bonus equals <strong style={{ color:'#4ade80' }}>{fmt(monthlyValue)}/month</strong> of "golden handcuffs" — worth it?
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop:'40px', ...CARD }}>
          <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'20px' }}>Signing Bonus FAQ</h2>
          {[
            { q:'Is a signing bonus taxed differently than regular salary?', a:'Not in terms of your final liability — it adds to your taxable income and is taxed at your marginal rate. However, employers often withhold at a flat 22% supplemental rate. If your actual rate is higher, you may owe more at tax time.' },
            { q:'What happens if I leave before the clawback period?', a:'You typically owe back the gross amount — before taxes. But since you already paid taxes on it, you can claim a deduction or credit on next year&apos;s return. This is a critical detail most people miss.' },
            { q:'Should I negotiate a higher signing bonus or higher salary?', a:'Higher base salary is almost always better long-term: it compounds into raises, bonuses, 401k matches, and severance. A signing bonus is taxed heavily and is one-time. Use this calculator to see the real after-tax value.' },
            { q:'Can I reduce taxes on my signing bonus?', a:'Yes — ask your employer if you can defer part into your 401k directly, or time it into a year where your other income is lower. Some negotiate to receive it in Q1 of the following year.' },
          ].map(({q,a})=>(
            <div key={q} style={{ marginBottom:'16px', paddingBottom:'16px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'6px' }}>{q}</div>
              <div style={{ fontSize:'13px', opacity:0.6, lineHeight:1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:'32px', textAlign:'center' }}>
          <div style={{ fontSize:'14px', opacity:0.5, marginBottom:'12px' }}>Related Calculators</div>
          <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', justifyContent:'center' }}>
            {[
              { href:'/bonus-tax-calculator', label:'🎁 Bonus Tax Calculator' },
              { href:'/raise-calculator', label:'📈 Raise Calculator' },
              { href:'/overtime-calculator', label:'⏰ Overtime Calculator' },
              { href:'/', label:'💰 Paycheck Calculator' },
            ].map(l=>(
              <Link key={l.href} href={l.href} style={{ background:'rgba(129,140,248,0.15)', border:'1px solid rgba(129,140,248,0.3)', borderRadius:'20px', padding:'8px 16px', color:'#a5b4fc', textDecoration:'none', fontSize:'13px', fontWeight:600 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
