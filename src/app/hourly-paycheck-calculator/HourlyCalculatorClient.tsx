'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

// ── All 50 states with 2026 rates ──────────────────────────────────────────
const STATES = [
  { code:'AL',name:'Alabama',slug:'alabama',rate:0.05 },
  { code:'AK',name:'Alaska',slug:'alaska',rate:0 },
  { code:'AZ',name:'Arizona',slug:'arizona',rate:0.025 },
  { code:'AR',name:'Arkansas',slug:'arkansas',rate:0.044 },
  { code:'CA',name:'California',slug:'california',rate:0.093 },
  { code:'CO',name:'Colorado',slug:'colorado',rate:0.044 },
  { code:'CT',name:'Connecticut',slug:'connecticut',rate:0.05 },
  { code:'DE',name:'Delaware',slug:'delaware',rate:0.066 },
  { code:'FL',name:'Florida',slug:'florida',rate:0 },
  { code:'GA',name:'Georgia',slug:'georgia',rate:0.055 },
  { code:'HI',name:'Hawaii',slug:'hawaii',rate:0.08 },
  { code:'ID',name:'Idaho',slug:'idaho',rate:0.058 },
  { code:'IL',name:'Illinois',slug:'illinois',rate:0.0495 },
  { code:'IN',name:'Indiana',slug:'indiana',rate:0.0305 },
  { code:'IA',name:'Iowa',slug:'iowa',rate:0.057 },
  { code:'KS',name:'Kansas',slug:'kansas',rate:0.057 },
  { code:'KY',name:'Kentucky',slug:'kentucky',rate:0.045 },
  { code:'LA',name:'Louisiana',slug:'louisiana',rate:0.0425 },
  { code:'ME',name:'Maine',slug:'maine',rate:0.075 },
  { code:'MD',name:'Maryland',slug:'maryland',rate:0.0575 },
  { code:'MA',name:'Massachusetts',slug:'massachusetts',rate:0.05 },
  { code:'MI',name:'Michigan',slug:'michigan',rate:0.0425 },
  { code:'MN',name:'Minnesota',slug:'minnesota',rate:0.0985 },
  { code:'MS',name:'Mississippi',slug:'mississippi',rate:0.047 },
  { code:'MO',name:'Missouri',slug:'missouri',rate:0.048 },
  { code:'MT',name:'Montana',slug:'montana',rate:0.059 },
  { code:'NE',name:'Nebraska',slug:'nebraska',rate:0.0664 },
  { code:'NV',name:'Nevada',slug:'nevada',rate:0 },
  { code:'NH',name:'New Hampshire',slug:'new-hampshire',rate:0 },
  { code:'NJ',name:'New Jersey',slug:'new-jersey',rate:0.0637 },
  { code:'NM',name:'New Mexico',slug:'new-mexico',rate:0.059 },
  { code:'NY',name:'New York',slug:'new-york',rate:0.0685 },
  { code:'NC',name:'North Carolina',slug:'north-carolina',rate:0.0499 },
  { code:'ND',name:'North Dakota',slug:'north-dakota',rate:0.025 },
  { code:'OH',name:'Ohio',slug:'ohio',rate:0.04 },
  { code:'OK',name:'Oklahoma',slug:'oklahoma',rate:0.0475 },
  { code:'OR',name:'Oregon',slug:'oregon',rate:0.099 },
  { code:'PA',name:'Pennsylvania',slug:'pennsylvania',rate:0.0307 },
  { code:'RI',name:'Rhode Island',slug:'rhode-island',rate:0.0599 },
  { code:'SC',name:'South Carolina',slug:'south-carolina',rate:0.064 },
  { code:'SD',name:'South Dakota',slug:'south-dakota',rate:0 },
  { code:'TN',name:'Tennessee',slug:'tennessee',rate:0 },
  { code:'TX',name:'Texas',slug:'texas',rate:0 },
  { code:'UT',name:'Utah',slug:'utah',rate:0.0485 },
  { code:'VT',name:'Vermont',slug:'vermont',rate:0.0875 },
  { code:'VA',name:'Virginia',slug:'virginia',rate:0.0575 },
  { code:'WA',name:'Washington',slug:'washington',rate:0 },
  { code:'WV',name:'West Virginia',slug:'west-virginia',rate:0.065 },
  { code:'WI',name:'Wisconsin',slug:'wisconsin',rate:0.0765 },
  { code:'WY',name:'Wyoming',slug:'wyoming',rate:0 },
];

function calcFederal(taxable: number, filing: string): number {
  const std = filing === 'married' ? 32200 : 16100;
  const t = Math.max(0, taxable - std);
  const brackets: [number,number][] = filing === 'married'
    ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
    : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
  let tax = 0, prev = 0;
  for (const [lim, rate] of brackets) {
    if (t <= prev) break;
    tax += (Math.min(t, lim) - prev) * rate;
    prev = lim;
  }
  return tax;
}

export default function HourlyPaycheckCalculator() {
  const [hourly, setHourly]   = useState('25');
  const [hours,  setHours]    = useState('40');
  const [weeks,  setWeeks]    = useState('52');
  const [filing, setFiling]   = useState('single');
  const [state,  setState]    = useState('TX');
  const [k401,   setK401]     = useState('0');
  const [hsa,    setHsa]      = useState('0');

  const r = useMemo(() => {
    const h = parseFloat(hourly)||0, hw = parseFloat(hours)||0, w = parseFloat(weeks)||52;
    const annual = h * hw * w;
    const k = Math.min(parseFloat(k401)||0, 23500);
    const hsaV = Math.min(parseFloat(hsa)||0, 4300);
    const preTax = annual - k - hsaV;
    const fed    = calcFederal(preTax, filing);
    const fica   = Math.min(annual, 184500)*0.062 + annual*0.0145;
    const st     = STATES.find(s => s.code === state)!;
    const stateTx = st.rate > 0 ? Math.max(0, preTax - 5000) * st.rate : 0;
    const total  = fed + fica + stateTx;
    const net    = annual - total - k - hsaV;
    return { annual, fed, fica, stateTx, total, net, k, hsaV,
      perPaycheck: net/26, weekly: w > 0 ? net/w : 0,
      effectiveRate: annual > 0 ? (total/annual)*100 : 0 };
  }, [hourly, hours, weeks, filing, state, k401, hsa]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const input: React.CSSProperties = { width:'100%', padding:'10px 14px', background:'#0F2040', border:'1px solid rgba(201,168,76,0.3)', borderRadius:'8px', color:'#fff', fontSize:'15px', outline:'none', boxSizing:'border-box', fontFamily:'inherit' };
  const lbl:   React.CSSProperties = { fontSize:'11px', color:'rgba(255,255,255,0.45)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'6px', display:'block' };
  const card:  React.CSSProperties = { background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'16px' };
  const sel = state;
  const stObj = STATES.find(s => s.code === sel)!;

  return (
    <main style={{ minHeight:'100vh', background:'var(--navy,#091526)', color:'#fff', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebApplication',
        name:'Hourly Paycheck Calculator 2026 — PrivatePaycheck',
        url:'https://www.privatepaycheck.com/hourly-paycheck-calculator',
        description:'Free hourly paycheck calculator. Enter your hourly rate and hours per week to see exact take-home pay after federal, state, FICA taxes, 401k and HSA. All 50 states.',
        applicationCategory:'FinanceApplication', operatingSystem:'Any',
        offers:{'@type':'Offer', price:'0', priceCurrency:'USD'},
        featureList:['Hourly to annual salary conversion','Federal income tax','State income tax all 50 states','FICA Social Security Medicare','401k HSA deductions'],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          { '@type':'Question', name:'How do I calculate take-home pay from hourly wage?', acceptedAnswer:{ '@type':'Answer', text:'Multiply your hourly rate by hours per week and weeks per year (usually 52) to get annual gross pay. Then subtract federal income tax, state income tax, Social Security (6.2%), Medicare (1.45%), 401k, and HSA contributions.' }},
          { '@type':'Question', name:'How much is $25 an hour annually?', acceptedAnswer:{ '@type':'Answer', text:'$25/hour × 40 hours/week × 52 weeks = $52,000 per year gross. After taxes (federal + FICA), take-home pay is approximately $40,000-$43,000 depending on your state and deductions.' }},
          { '@type':'Question', name:'What is the difference between gross and net pay?', acceptedAnswer:{ '@type':'Answer', text:'Gross pay is your total earnings before any deductions. Net pay (take-home pay) is what you actually receive after federal taxes, state taxes, Social Security, Medicare, 401k, HSA, and other deductions.' }},
          { '@type':'Question', name:'How accurate is this hourly paycheck calculator?', acceptedAnswer:{ '@type':'Answer', text:'This calculator uses 2026 federal tax brackets, current FICA rates (6.2% SS + 1.45% Medicare), and up-to-date state tax rates for all 50 states. It is highly accurate for W-2 employees with standard deductions.' }},
        ],
      })}} />

      {/* NAV */}

      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'32px 16px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'20px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › Hourly Paycheck Calculator
        </div>

        {/* HERO */}
        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'12px', color:'#4ade80' }}>
             Your data NEVER leaves your browser
          </div>
          <h1 style={{ fontSize:'clamp(26px,5vw,52px)', fontWeight:900, margin:'0 0 12px', textTransform:'uppercase', letterSpacing:'-1px', lineHeight:1.15 }}>
            Hourly Paycheck<br/><span style={{ color:'#FFFFFF' }}>Calculator 2026</span>
          </h1>
          <p style={{ fontSize:'17px', opacity:0.65, maxWidth:'580px', margin:'0 auto', lineHeight:1.7 }}>
            Enter your hourly rate and hours worked. Instantly see your weekly, biweekly, and annual take-home pay after all taxes for all 50 states.
          </p>
        </div>

        {/* CALCULATOR CARD */}
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(201,168,76,0.3)', borderRadius:'16px', padding:'28px', marginBottom:'28px' }}>

          {/* ROW 1: Hourly + Hours + Weeks */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', marginBottom:'16px' }}>
            <div>
              <label style={lbl}>Hourly Rate ($)</label>
              <input type="number" value={hourly} onChange={e=>setHourly(e.target.value)} style={input} placeholder="25.00" min="0" step="0.25" />
            </div>
            <div>
              <label style={lbl}>Hours per Week</label>
              <input type="number" value={hours} onChange={e=>setHours(e.target.value)} style={input} placeholder="40" min="1" max="168" />
            </div>
            <div>
              <label style={lbl}>Weeks per Year</label>
              <input type="number" value={weeks} onChange={e=>setWeeks(e.target.value)} style={input} placeholder="52" min="1" max="52" />
            </div>
          </div>

          {/* ROW 2: Filing + State */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', marginBottom:'16px' }}>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={{...input, colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div>
              <label style={lbl}>State</label>
              <select value={state} onChange={e=>setState(e.target.value)} onFocus={e=>{e.currentTarget.scrollIntoView({behavior:"smooth",block:"center"});}} style={{...input, colorScheme:'dark'}}>
                {STATES.map(s => <option key={s.code} value={s.code}>{s.name}{s.rate===0 ? ' (no income tax)' : ''}</option>)}
              </select>
            </div>
          </div>

          {/* ROW 3: 401k + HSA */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', marginBottom:'24px' }}>
            <div>
              <label style={lbl}>401(k) Contribution ($/yr, max $23,500)</label>
              <input type="number" value={k401} onChange={e=>setK401(e.target.value)} style={input} placeholder="0" min="0" max="23500" />
            </div>
            <div>
              <label style={lbl}>HSA Contribution ($/yr, max $4,300)</label>
              <input type="number" value={hsa} onChange={e=>setHsa(e.target.value)} style={input} placeholder="0" min="0" max="4300" />
            </div>
          </div>

          {/* RESULTS */}
          <div style={{ background:'linear-gradient(135deg,rgba(74,222,128,0.12),rgba(201,168,76,0.12))', border:'1px solid rgba(74,222,128,0.25)', borderRadius:'12px', padding:'24px' }}>
            <div style={{ textAlign:'center', marginBottom:'20px' }}>
              <div style={{ fontSize:'13px', opacity:0.6, marginBottom:'4px' }}>Annual Gross → Take-Home</div>
              <div style={{ fontSize:'clamp(28px,5vw,48px)', fontWeight:900, color:'#4ade80', lineHeight:1 }}>{fmt(r.net)}</div>
              <div style={{ fontSize:'13px', opacity:0.5, marginTop:'4px' }}>per year · {stObj.name}</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:'12px', marginBottom:'20px' }}>
              {[
                { label:'Hourly (net)', value: r.annual > 0 ? '$'+(r.net / (parseFloat(hours)||40) / (parseFloat(weeks)||52)).toFixed(2) : '$0' },
                { label:'Weekly',      value: fmt(r.weekly) },
                { label:'Biweekly',    value: fmt(r.perPaycheck) },
                { label:'Monthly',     value: fmt(r.net/12) },
              ].map(b => (
                <div key={b.label} style={{ background:'rgba(0,0,0,0.25)', borderRadius:'8px', padding:'12px', textAlign:'center' }}>
                  <div style={{ fontSize:'11px', opacity:0.55, marginBottom:'4px' }}>{b.label}</div>
                  <div style={{ fontWeight:800, fontSize:'18px' }}>{b.value}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'16px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'8px', fontSize:'13px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}>
                <span>Gross Annual</span><span>{fmt(r.annual)}</span>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}>
                <span>Federal Tax</span><span>-{fmt(r.fed)}</span>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}>
                <span>FICA (SS+Medicare)</span><span>-{fmt(r.fica)}</span>
              </div>
              {r.stateTx > 0 && (
                <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}>
                  <span>{stObj.name} State Tax</span><span>-{fmt(r.stateTx)}</span>
                </div>
              )}
              {r.k > 0 && (
                <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}>
                  <span>401(k)</span><span>-{fmt(r.k)}</span>
                </div>
              )}
              {r.hsaV > 0 && (
                <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}>
                  <span>HSA</span><span>-{fmt(r.hsaV)}</span>
                </div>
              )}
              <div style={{ display:'flex', justifyContent:'space-between', fontWeight:700, color:'#4ade80' }}>
                <span>Effective Tax Rate</span><span>{r.effectiveRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>
          <p style={{ textAlign:'center', fontSize:'11px', opacity:0.3, margin:'12px 0 0' }}> All calculations happen in your browser — your data is never sent anywhere</p>
        </div>

        {/* QUICK REFERENCE TABLE */}
        <div style={{ ...card, marginBottom:'28px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>Common Hourly Rates — Annual & Take-Home (2026)</h2>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'13px' }}>
              <thead>
                <tr style={{ borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                  {['Hourly Rate','Annual Gross','Federal Tax','FICA','Take-Home (TX, Single)'].map(h => (
                    <th key={h} style={{ textAlign:'left', padding:'8px 12px', opacity:0.6, fontWeight:600, fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[15,17,20,25,30,35,40,50,60,75,100].map(rate => {
                  const ann = rate*40*52;
                  const fed = calcFederal(ann,'single');
                  const fica = Math.min(ann,184500)*0.062+ann*0.0145;
                  const net = ann-fed-fica;
                  return (
                    <tr key={rate} style={{ borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding:'8px 12px', fontWeight:700, color:'#F5C842' }}>${rate}/hr</td>
                      <td style={{ padding:'8px 12px' }}>{fmt(ann)}</td>
                      <td style={{ padding:'8px 12px', color:'#f87171' }}>-{fmt(fed)}</td>
                      <td style={{ padding:'8px 12px', color:'#f87171' }}>-{fmt(fica)}</td>
                      <td style={{ padding:'8px 12px', fontWeight:700, color:'#4ade80' }}>{fmt(net)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div style={{ ...card, marginBottom:'28px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>How to Calculate Hourly Take-Home Pay</h2>
          <p style={{ fontSize:'14px', opacity:0.7, lineHeight:1.8, marginBottom:'12px' }}>
            To find your annual gross: multiply <strong>hourly rate × hours/week × weeks/year</strong>. For a standard full-time job, that's rate × 40 × 52. From gross pay, subtract pre-tax deductions like 401(k) and HSA, then apply federal income tax brackets, FICA (6.2% Social Security on first $184,500 + 1.45% Medicare on all wages), and your state income tax.
          </p>
          <p style={{ fontSize:'14px', opacity:0.7, lineHeight:1.8 }}>
            The result is your annual net pay. Divide by 26 for biweekly paychecks, by 24 for semi-monthly, or by 12 for monthly. This calculator handles all of that instantly and privately — zero data sent to any server.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ ...card, marginBottom:'28px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'20px' }}>Frequently Asked Questions</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {[
              { q:'How much is $20 an hour after taxes?', a:'$20/hr × 40 hrs × 52 weeks = $41,600 gross. In Texas (no state tax), a single filer takes home roughly $33,500–$34,000 after federal tax and FICA. In California add ~$2,500 state tax, reducing net to ~$31,000.' },
              { q:'What is the hourly equivalent of a $60,000 salary?', a:'$60,000 ÷ 52 weeks ÷ 40 hours = $28.85/hour. After federal tax and FICA (single, no state tax), take-home is roughly $47,000/year or $22.60/hr net.' },
              { q:'Does my employer match affect my take-home pay?', a:'No — employer 401(k) match does not appear on your paycheck as a deduction. It is additional compensation added to your retirement account. Only your own contributions reduce your taxable income.' },
              { q:'How does overtime affect my hourly paycheck?', a:'Overtime hours are paid at 1.5× your regular rate. However, the additional income can push you into a higher marginal tax bracket. Use our Overtime Calculator to see your exact take-home including OT hours.' },
              { q:'Why is my actual paycheck different from the calculator?', a:'Common reasons: pre-tax health insurance premiums, life insurance, local city taxes, additional state withholding, garnishments, or different pay periods. This calculator uses the standard deduction — itemizers may pay less tax.' },
            ].map(item => (
              <div key={item.q}>
                <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'6px' }}>{item.q}</h3>
                <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CROSS-LINKS */}
        <div style={{ marginBottom:'28px' }}>
          <h2 style={{ fontSize:'16px', fontWeight:800, marginBottom:'16px', opacity:0.7 }}>More Free Calculators</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'12px' }}>
            <Link href="/" style={{ display:'block', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'12px', padding:'16px', color:'#fff', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}></div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>Salary Paycheck Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>Annual salary → take-home pay →</div>
            </Link>
            <Link href="/overtime-calculator" style={{ display:'block', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'12px', padding:'16px', color:'#fff', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}></div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>Overtime Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>Time-and-a-half & double time →</div>
            </Link>
            <Link href="/unemployment-calculator" style={{ display:'block', background:'rgba(201,168,76,0.08)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'12px', padding:'16px', color:'#fff', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}></div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>Unemployment Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>Estimate weekly benefits →</div>
            </Link>
            <Link href="/minimum-wage" style={{ display:'block', background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:'12px', padding:'16px', color:'#fff', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}></div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>Minimum Wage by State</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>2026 rates all 50 states →</div>
            </Link>
          </div>
        </div>

        {/* STATE GRID */}
        <div>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'8px', textAlign:'center' }}>Hourly Calculator by State</h2>
          <p style={{ textAlign:'center', opacity:0.5, fontSize:'13px', marginBottom:'20px' }}>State tax rates automatically applied when you select your state above</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'8px' }}>
            {STATES.map(s => (
              <div key={s.code} onClick={() => setState(s.code)} style={{ background: state===s.code ? 'rgba(129,140,248,0.15)' : 'rgba(255,255,255,0.03)', border: state===s.code ? '1px solid rgba(129,140,248,0.4)' : '1px solid rgba(255,255,255,0.06)', borderRadius:'8px', padding:'10px 12px', cursor:'pointer', transition:'all .15s' }}>
                <div style={{ fontWeight:700, fontSize:'13px' }}>{s.name}</div>
                <div style={{ fontSize:'11px', opacity:0.45, marginTop:'2px' }}>{s.rate===0 ? 'No state tax' : (s.rate*100).toFixed(2)+'% state tax'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
