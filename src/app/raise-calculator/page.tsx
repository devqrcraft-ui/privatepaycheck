'use client';

import Link from 'next/link';
import { useState } from 'react';

const STATE_TAX: Record<string, number> = {
  AL:0.05,AK:0,AZ:0.025,AR:0.047,CA:0.093,CO:0.044,CT:0.065,DE:0.066,FL:0,GA:0.055,
  HI:0.08,ID:0.058,IL:0.0495,IN:0.0305,IA:0.06,KS:0.057,KY:0.045,LA:0.0425,ME:0.075,
  MD:0.0575,MA:0.05,MI:0.0425,MN:0.0985,MS:0.05,MO:0.054,MT:0.069,NE:0.0684,NV:0,
  NH:0,NJ:0.0637,NM:0.059,NY:0.0685,NC:0.0499,ND:0.029,OH:0.04,OK:0.0475,OR:0.099,
  PA:0.0307,RI:0.0599,SC:0.07,SD:0,TN:0,TX:0,UT:0.0465,VT:0.0875,VA:0.0575,WA:0,
  WV:0.065,WI:0.0765,WY:0,DC:0.085,
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

function netPay(gross: number, filing: string, state: string): number {
  const brackets =
    filing === 'married'
      ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
      : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
  let fed = 0, prev = 0;
  for (const [limit, rate] of brackets as [number,number][]) {
    if (gross <= prev) break;
    fed += (Math.min(gross, limit) - prev) * rate;
    prev = limit;
  }
  const ss   = Math.min(gross, 168600) * 0.062;
  const medi = gross * 0.0145;
  const stTax = gross * (STATE_TAX[state] ?? 0);
  return gross - fed - ss - medi - stTax;
}

const BG = { minHeight:'100vh', background:'#091526', color:'#fff', fontFamily:'system-ui,sans-serif' };
const NAV_STYLE = { padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky' as const, top:0, zIndex:100 };
const CARD = { background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'16px', padding:'24px' };
const LABEL = { fontSize:'11px', fontWeight:700, letterSpacing:'0.08em', color:'rgba(255,255,255,0.5)', textTransform:'uppercase' as const, marginBottom:'8px' };
const INPUT_S = { width:'100%', background:'#1e293b', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'10px', padding:'12px 14px', color:'#fff', fontSize:'16px', boxSizing:'border-box' as const, outline:'none', colorScheme:'dark' };
export default function RaiseCalculator() {
  const [salary, setSalary]   = useState(75000);
  const [raise, setRaise]     = useState(10);
  const [raiseType, setRaiseType] = useState<'pct'|'fixed'>('pct');
  const [state, setState]     = useState('CA');
  const [filing, setFiling]   = useState('single');

  const newSalary = raiseType === 'pct' ? salary * (1 + raise / 100) : salary + raise;
  const raiseAmount = newSalary - salary;

  const oldNet = netPay(salary, filing, state);
  const newNet = netPay(newSalary, filing, state);
  const netGain = newNet - oldNet;

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const fmtD = (n: number) => (n >= 0 ? '+' : '') + '$' + Math.round(Math.abs(n)).toLocaleString();
  const pct = (n: number) => (n * 100).toFixed(1) + '%';
  const keepRate = netGain / raiseAmount;

  return (
    <div style={BG}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        "name":"Raise Calculator 2026 — How Much Will I Take Home?",
        "url":"https://www.privatepaycheck.com/raise-calculator",
        "description":"See exactly how much extra take-home pay a raise gives you after federal, state and FICA taxes. Free, private, no signup.",
        "applicationCategory":"FinanceApplication","operatingSystem":"Any",
        "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
      })}} />


      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'32px 16px' }}>

        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'12px', color:'#4ade80' }}>
             Private calculation — your data stays in your browser
          </div>
          <h1 style={{ fontSize:'clamp(24px,5vw,48px)', fontWeight:900, margin:'0 0 12px', lineHeight:1.15 }}>
            Raise Calculator 2026
            <br/><span style={{ color:'#F5C842' }}>How Much Will Your Raise Actually Be?</span>
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'560px', margin:'0 auto', lineHeight:1.7 }}>
            A 10% raise doesn&apos;t mean 10% more in your pocket. See exactly how much extra take-home pay you'll get after all taxes.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>

          <div style={CARD}>
            <h2 style={{ fontSize:'16px', fontWeight:800, margin:'0 0 20px' }}>Your Raise Details</h2>

            <div style={{ marginBottom:'16px' }}>
              <div style={LABEL}>Current Annual Salary</div>
              <div style={{ position:'relative' }}>
                <span style={{ position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', color:'#4ade80', fontWeight:700 }}>$</span>
                <input type="number" value={salary} onChange={e=>setSalary(+e.target.value)} style={{ ...INPUT_S, paddingLeft:'28px' }} />
              </div>
            </div>

            <div style={{ marginBottom:'8px' }}>
              <div style={LABEL}>Raise Type</div>
              <div style={{ display:'flex', gap:'8px' }}>
                {(['pct','fixed'] as const).map(t=>(
                  <button key={t} onClick={()=>setRaiseType(t)} style={{
                    flex:1, padding:'10px', borderRadius:'8px', border:'1px solid',
                    borderColor: raiseType===t ? '#F5C842' : 'rgba(255,255,255,0.15)',
                    background: raiseType===t ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
                    color:'#fff', fontWeight:700, fontSize:'13px', cursor:'pointer',
                  }}>{t==='pct' ? 'Percentage %' : 'Fixed Amount $'}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom:'16px', marginTop:'12px' }}>
              <div style={LABEL}>{raiseType==='pct' ? 'Raise Percentage' : 'Raise Amount'}</div>
              <div style={{ position:'relative' }}>
                <span style={{ position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', color:'#F5C842', fontWeight:700 }}>
                  {raiseType==='pct' ? '%' : '$'}
                </span>
                <input type="number" value={raise} onChange={e=>setRaise(+e.target.value)} step={raiseType==='pct'?0.5:500} style={{ ...INPUT_S, paddingLeft:'28px' }} />
              </div>
            </div>

            <div style={{ marginBottom:'16px' }}>
              <div style={LABEL}>State</div>
              <select value={state} onChange={e=>setState(e.target.value)} style={{ ...INPUT_S, cursor:'pointer', colorScheme:'dark', backgroundColor:'#0d1f35' }}>
                {Object.entries(STATE_NAMES).sort((a,b)=>a[1].localeCompare(b[1])).map(([k,v])=>(
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <div>
              <div style={LABEL}>Filing Status</div>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={{ ...INPUT_S, cursor:'pointer', colorScheme:'dark', backgroundColor:'#0d1f35' }}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>

            <div style={{ ...CARD, background:'linear-gradient(135deg,rgba(74,222,128,0.15),rgba(201,168,76,0.15))', border:'1px solid rgba(74,222,128,0.3)', textAlign:'center', padding:'24px' }}>
              <div style={{ fontSize:'13px', opacity:0.65, marginBottom:'4px' }}>Extra Take-Home Per Year</div>
              <div style={{ fontSize:'48px', fontWeight:900, color:'#4ade80' }}>{fmtD(netGain)}</div>
              <div style={{ fontSize:'13px', opacity:0.5 }}>= {fmt(netGain/12)}/month · {fmt(netGain/26)}/bi-weekly</div>
            </div>

            <div style={CARD}>
              <div style={{ fontSize:'13px', fontWeight:700, marginBottom:'14px', opacity:0.7 }}>Before vs After</div>
              {[
                { label:'Gross Salary', before:salary, after:newSalary },
                { label:'Net Take-Home', before:oldNet, after:newNet, highlight:true },
                { label:'Raise (Gross)', before:null, after:raiseAmount },
                { label:'Raise (Net)', before:null, after:netGain, highlight:true },
              ].map(row=>(
                <div key={row.label} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize:'13px', opacity:0.7 }}>{row.label}</span>
                  <span style={{ fontSize:'13px', fontWeight:700, color: row.highlight ? '#4ade80' : 'white' }}>
                    {row.before !== null ? `${fmt(row.before)} → ${fmt(row.after)}` : fmt(row.after)}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ ...CARD, border:'1px solid rgba(251,191,36,0.3)', background:'rgba(251,191,36,0.06)' }}>
              <div style={{ fontSize:'13px', fontWeight:700, color:'#fbbf24', marginBottom:'6px' }}> You Keep {pct(keepRate)} of Your Raise</div>
              <div style={{ fontSize:'13px', opacity:0.65, lineHeight:1.6 }}>
                Your gross raise is {fmt(raiseAmount)}, but taxes take {fmt(raiseAmount - netGain)}. That's normal — your new income pushes more dollars into higher brackets.
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop:'40px', ...CARD }}>
          <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'20px' }}>Raise FAQ</h2>
          {[
            { q:'Why do I keep less than my raise percentage?', a:'As your salary increases, more of your income falls into higher tax brackets. A 10% raise doesn&apos;t mean 10% more net pay — typically you keep 60%–70% of the raise after taxes depending on your state and situation.' },
            { q:'How do I use this to negotiate a raise?', a:'Work backwards: decide how much extra monthly income you need, then use this calculator to find the gross raise required. For example, to get $500/month more in Texas, you may only need a $7,500 raise. In California, you might need $10,000+.' },
            { q:'Does a raise change my 401k contribution?', a:'If your 401k contribution is percentage-based, yes — it increases automatically. If it&apos;s a fixed dollar amount, you may want to revisit your contribution to take advantage of the extra income.' },
            { q:'What if my raise pushes me into a higher tax bracket?', a:'Only the income above the bracket threshold is taxed at the higher rate. A raise never makes you take home less money. The marginal rate only applies to the new dollars, not your entire salary.' },
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
              { href:'/bonus-tax-calculator', label:' Bonus Tax Calculator' },
              { href:'/signing-bonus-tax-calculator', label:' Signing Bonus Tax' },
              { href:'/overtime-calculator', label:' Overtime Calculator' },
              { href:'/', label:' Paycheck Calculator' },
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
    </div>
  );
}
