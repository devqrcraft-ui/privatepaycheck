'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import CalculatorResultActions from '@/components/CalculatorResultActions';
import { estimateFederalIncomeTax, estimatePaycheck, type FilingStatus } from '@/lib/paycheck';

// ── All 50 states ──────────────────────────────────────────────────────────
const STATES = [
  { code:'AL',name:'Alabama',slug:'alabama' },
  { code:'AK',name:'Alaska',slug:'alaska' },
  { code:'AZ',name:'Arizona',slug:'arizona' },
  { code:'AR',name:'Arkansas',slug:'arkansas' },
  { code:'CA',name:'California',slug:'california' },
  { code:'CO',name:'Colorado',slug:'colorado' },
  { code:'CT',name:'Connecticut',slug:'connecticut' },
  { code:'DE',name:'Delaware',slug:'delaware' },
  { code:'FL',name:'Florida',slug:'florida' },
  { code:'GA',name:'Georgia',slug:'georgia' },
  { code:'HI',name:'Hawaii',slug:'hawaii' },
  { code:'ID',name:'Idaho',slug:'idaho' },
  { code:'IL',name:'Illinois',slug:'illinois' },
  { code:'IN',name:'Indiana',slug:'indiana' },
  { code:'IA',name:'Iowa',slug:'iowa' },
  { code:'KS',name:'Kansas',slug:'kansas' },
  { code:'KY',name:'Kentucky',slug:'kentucky' },
  { code:'LA',name:'Louisiana',slug:'louisiana' },
  { code:'ME',name:'Maine',slug:'maine' },
  { code:'MD',name:'Maryland',slug:'maryland' },
  { code:'MA',name:'Massachusetts',slug:'massachusetts' },
  { code:'MI',name:'Michigan',slug:'michigan' },
  { code:'MN',name:'Minnesota',slug:'minnesota' },
  { code:'MS',name:'Mississippi',slug:'mississippi' },
  { code:'MO',name:'Missouri',slug:'missouri' },
  { code:'MT',name:'Montana',slug:'montana' },
  { code:'NE',name:'Nebraska',slug:'nebraska' },
  { code:'NV',name:'Nevada',slug:'nevada' },
  { code:'NH',name:'New Hampshire',slug:'new-hampshire' },
  { code:'NJ',name:'New Jersey',slug:'new-jersey' },
  { code:'NM',name:'New Mexico',slug:'new-mexico' },
  { code:'NY',name:'New York',slug:'new-york' },
  { code:'NC',name:'North Carolina',slug:'north-carolina' },
  { code:'ND',name:'North Dakota',slug:'north-dakota' },
  { code:'OH',name:'Ohio',slug:'ohio' },
  { code:'OK',name:'Oklahoma',slug:'oklahoma' },
  { code:'OR',name:'Oregon',slug:'oregon' },
  { code:'PA',name:'Pennsylvania',slug:'pennsylvania' },
  { code:'RI',name:'Rhode Island',slug:'rhode-island' },
  { code:'SC',name:'South Carolina',slug:'south-carolina' },
  { code:'SD',name:'South Dakota',slug:'south-dakota' },
  { code:'TN',name:'Tennessee',slug:'tennessee' },
  { code:'TX',name:'Texas',slug:'texas' },
  { code:'UT',name:'Utah',slug:'utah' },
  { code:'VT',name:'Vermont',slug:'vermont' },
  { code:'VA',name:'Virginia',slug:'virginia' },
  { code:'WA',name:'Washington',slug:'washington' },
  { code:'WV',name:'West Virginia',slug:'west-virginia' },
  { code:'WI',name:'Wisconsin',slug:'wisconsin' },
  { code:'WY',name:'Wyoming',slug:'wyoming' },
];

const NO_STATE_INCOME_TAX = new Set(['AK', 'FL', 'NH', 'NV', 'SD', 'TN', 'TX', 'WA', 'WY']);
const HSA_LIMIT_2026 = 4400;

export default function HourlyPaycheckCalculator() {
  const [hourly, setHourly]   = useState('25');
  const [hours,  setHours]    = useState('40');
  const [weeks,  setWeeks]    = useState('52');
  const [filing, setFiling]   = useState('single');
  const [state,  setState]    = useState('TX');
  const [k401,   setK401]     = useState('0');
  const [hsa,    setHsa]      = useState('0');
  const [hasCalculated, setHasCalculated] = useState(false);
  const [error, setError] = useState('');

  const r = useMemo(() => {
    const h = Number(hourly), hw = Number(hours), w = Number(weeks);
    const annual = h * hw * w;
    const kRequested = Number(k401), hsaV = Number(hsa);
    if (!Number.isFinite(annual) || annual <= 0 ||
      !Number.isFinite(kRequested) || kRequested < 0 ||
      !Number.isFinite(hsaV) || hsaV < 0) return null;

    const k = Math.min(kRequested, 24500);
    const filingStatus: FilingStatus = filing === 'married' ? 'married' : filing === 'hoh' ? 'head' : 'single';
    const estimate = estimatePaycheck({
      annual,
      freq: 1,
      stateRatePct: 0,
      stateCode: state.toLowerCase(),
      filing: filingStatus,
      k401Pct: k / annual,
    });
    const fed = estimateFederalIncomeTax(Math.max(0, annual - estimate.k401 - hsaV), filingStatus);
    const fica = estimate.ss + estimate.med;
    const stateTx = estimate.state;
    const total = fed + fica + stateTx;
    const net = annual - total - estimate.k401 - hsaV;
    return { annual, fed, fica, stateTx, total, net, k: estimate.k401, hsaV,
      perPaycheck: net/26, weekly: w > 0 ? net/w : 0,
      effectiveRate: annual > 0 ? (total/annual)*100 : 0 };
  }, [hourly, hours, weeks, filing, state, k401, hsa]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const input: React.CSSProperties = { width:'100%', padding:'10px 14px', background:'#0F2040', border:'1px solid rgba(201,168,76,0.5)', borderRadius:'8px', color:'#fff', fontSize:'16px', boxSizing:'border-box', fontFamily:'inherit' };
  const lbl:   React.CSSProperties = { fontSize:'16px', color:'rgba(255,255,255,0.82)', fontWeight:600, marginBottom:'6px', display:'block' };
  const card:  React.CSSProperties = { background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'16px' };
  const sel = state;
  const stObj = STATES.find(s => s.code === sel)!;

  function calculate() {
    const hourlyValue = Number(hourly);
    const hoursValue = Number(hours);
    const weeksValue = Number(weeks);
    const k401Value = Number(k401);
    const hsaValue = Number(hsa);
    const annualGross = hourlyValue * hoursValue * weeksValue;
    if (!Number.isFinite(hourlyValue) || hourlyValue <= 0 ||
      !Number.isFinite(hoursValue) || hoursValue < 1 || hoursValue > 168 ||
      !Number.isFinite(weeksValue) || weeksValue < 1 || weeksValue > 52 ||
      !Number.isFinite(k401Value) || k401Value < 0 || k401Value > 24500 ||
      !Number.isFinite(hsaValue) || hsaValue < 0 || hsaValue > HSA_LIMIT_2026 ||
      k401Value + hsaValue > annualGross || !r) {
      setError(`Enter a valid hourly rate, 1–168 hours, 1–52 weeks, 401(k) from $0–$24,500, and HSA from $0–$${HSA_LIMIT_2026}; contributions cannot exceed annual gross pay.`);
      setHasCalculated(false);
      return;
    }
    setError('');
    setHasCalculated(true);
  }

  return (
    <div style={{ minHeight:'100vh', background:'var(--navy,#091526)', color:'#fff', fontFamily:'system-ui,sans-serif' }}>
      
      

      {/* NAV */}

      <style>{`
        .hourly-calculator-input:focus-visible,
        .hourly-calc-button:focus-visible,
        .hourly-state-button:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
        .hourly-calc-button:hover { filter: brightness(1.08); }
        .hourly-state-button:hover { background: rgba(129,140,248,0.18) !important; }
      `}</style>
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'32px 6px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'13px', opacity: 0.8, marginBottom:'20px' }}>
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
            Enter your hourly rate and hours worked to estimate weekly, biweekly, and annual take-home pay using modeled federal, state, and payroll taxes. Actual withholding may differ.
          </p>
        </div>

        {/* CALCULATOR CARD */}
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(201,168,76,0.3)', borderRadius:'16px', padding:'28px', marginBottom:'28px' }}>

          {/* ROW 1: Hourly + Hours + Weeks */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', marginBottom:'16px' }}>
            <div>
              <label htmlFor="hourly-rate" style={lbl}>Hourly Rate ($)</label>
              <input className="hourly-calculator-input" id="hourly-rate" type="number" value={hourly} onChange={e=>{setHourly(e.target.value);setHasCalculated(false);setError('');}} style={input} placeholder="25.00" min="0.01" step="0.25" />
            </div>
            <div>
              <label htmlFor="hours-per-week" style={lbl}>Hours per Week</label>
              <input className="hourly-calculator-input" id="hours-per-week" type="number" value={hours} onChange={e=>{setHours(e.target.value);setHasCalculated(false);setError('');}} style={input} placeholder="40" min="1" max="168" />
            </div>
            <div>
              <label htmlFor="weeks-per-year" style={lbl}>Weeks per Year</label>
              <input className="hourly-calculator-input" id="weeks-per-year" type="number" value={weeks} onChange={e=>{setWeeks(e.target.value);setHasCalculated(false);setError('');}} style={input} placeholder="52" min="1" max="52" />
            </div>
          </div>

          {/* ROW 2: Filing + State */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', marginBottom:'16px' }}>
            <div>
              <label htmlFor="filing-status" style={lbl}>Filing Status</label>
              <select className="hourly-calculator-input" id="filing-status" value={filing} onChange={e=>{setFiling(e.target.value);setHasCalculated(false);setError('');}} style={{...input, colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div>
              <label htmlFor="work-state" style={lbl}>State</label>
              <select className="hourly-calculator-input" id="work-state" value={state} onChange={e=>{setState(e.target.value);setHasCalculated(false);setError('');}} onFocus={e=>{e.currentTarget.scrollIntoView({behavior:"smooth",block:"center"});}} style={{...input, colorScheme:'dark'}}>
                {STATES.map(s => <option key={s.code} value={s.code}>{s.name}{NO_STATE_INCOME_TAX.has(s.code) ? ' (no wage income tax)' : ''}</option>)}
              </select>
            </div>
          </div>

          {/* ROW 3: 401k + HSA */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', marginBottom:'24px' }}>
            <div>
              <label htmlFor="401k-contribution" style={lbl}>401(k) contribution ($/yr, max $24,500)</label>
              <input className="hourly-calculator-input" id="401k-contribution" type="number" value={k401} onChange={e=>{setK401(e.target.value);setHasCalculated(false);setError('');}} style={input} placeholder="0" min="0" max="24500" />
            </div>
            <div>
              <label htmlFor="hsa-contribution" style={lbl}>HSA contribution ($/yr, max $4,400 self-only)</label>
              <input className="hourly-calculator-input" id="hsa-contribution" type="number" value={hsa} onChange={e=>{setHsa(e.target.value);setHasCalculated(false);setError('');}} style={input} placeholder="0" min="0" max={HSA_LIMIT_2026} />
            </div>
          </div>
          <button className="hourly-calc-button" type="button" onClick={calculate} style={{ width:'100%', padding:'13px 16px', marginTop:20, border:0, borderRadius:9, background:'linear-gradient(135deg,#F5C842,#FFD700)', color:'#091526', fontSize:16, fontWeight:800, cursor:'pointer' }}>
            Calculate My Take-Home Pay →
          </button>
          {error && <p role="alert" style={{ color:'#fca5a5', fontSize:12, lineHeight:1.5, margin:'10px 0 0' }}>{error}</p>}

          {/* RESULTS */}
          {hasCalculated && r && <>
          <div style={{ background:'linear-gradient(135deg,rgba(74,222,128,0.12),rgba(201,168,76,0.12))', border:'1px solid rgba(74,222,128,0.25)', borderRadius:'12px', padding:'24px' }}>
            <div style={{ textAlign:'center', marginBottom:'20px' }}>
              <div style={{ fontSize:'15px', opacity:0.82, marginBottom:'4px' }}>Estimated annual take-home</div>
              <div style={{ fontSize:'clamp(28px,5vw,48px)', fontWeight:900, color:'#4ade80', lineHeight:1 }}>{fmt(r.net)}</div>
              <div style={{ fontSize:'13px', opacity: 0.8, marginTop:'4px' }}>per year · {stObj.name}</div>
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
                  <span>{stObj.name} income/payroll taxes</span><span>-{fmt(r.stateTx)}</span>
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
          <p style={{ textAlign:'center', fontSize:'11px', opacity: 0.8, margin:'12px 0 0' }}> All calculations happen in your browser — your data is never sent anywhere</p>
          <CalculatorResultActions
            summary={`2026 ${stObj.name} hourly paycheck estimate (${filing})\nAnnual gross: ${fmt(r.annual)}\nFederal tax estimate: ${fmt(r.fed)}\nSocial Security and Medicare estimate: ${fmt(r.fica)}\nState income/payroll tax estimate: ${fmt(r.stateTx)}\n401(k): ${fmt(r.k)}\nHSA: ${fmt(r.hsaV)}\nEstimated annual take-home: ${fmt(r.net)}\nEffective modeled tax rate: ${r.effectiveRate.toFixed(1)}%\nThis estimate uses modeled federal and state rules. Local taxes, credits, and HSA payroll-tax/state treatment may differ.`}
            relatedLinks={[
              { href: '/teacher-paycheck-calculator', label: 'Teacher paycheck →' },
              { href: '/1099-paycheck-calculator', label: '1099 tax calculator →' },
            ]}
          />
          </>}
        </div>

        {/* QUICK REFERENCE TABLE */}
        <div style={{ ...card, marginBottom:'28px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>Common Hourly Rates — Annual & Take-Home (2026)</h2>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'13px' }}>
              <thead>
                <tr style={{ borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                  {['Hourly Rate','Annual Gross','Federal Tax','FICA','Estimated take-home (TX, Single)'].map(h => (
                    <th key={h} style={{ textAlign:'left', padding:'8px 12px', opacity:0.6, fontWeight:600, fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[15,17,20,25,30,35,40,50,60,75,100].map(rate => {
                  const ann = rate*40*52;
                  const estimate = estimatePaycheck({
                    annual: ann,
                    freq: 1,
                    stateRatePct: 0,
                    stateCode: 'tx',
                    filing: 'single',
                    k401Pct: 0,
                  });
                  const fed = estimate.fed;
                  const fica = estimate.ss + estimate.med;
                  const net = estimate.net;
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
          <p style={{ fontSize:'16px', opacity:0.85, lineHeight:1.8, marginBottom:'12px' }}>
            Annual gross pay is hourly rate × hours per week × weeks worked. The estimate applies the shared federal, state, Social Security, and Medicare model. Traditional 401(k) contributions reduce modeled taxable wages; the HSA input is treated as a federal income-tax deduction only. HSA payroll-tax and state-tax treatment can differ.
          </p>
          <p style={{ fontSize:'16px', opacity:0.85, lineHeight:1.8 }}>
            This is an estimate, not an exact paycheck or tax determination. Local taxes, credits, withholding elections, benefits, and individual circumstances may change actual pay. Calculations run in your browser; the entered values are not sent to the server.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ ...card, marginBottom:'28px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'20px' }}>Frequently Asked Questions</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {[
              { q:'How much is $20 an hour after taxes?', a:'It depends on hours and weeks worked, filing status, state, deductions, and withholding elections. Enter your details to get a modeled estimate; the result is not an exact paycheck.' },
              { q:'What is the hourly equivalent of a $60,000 salary?', a:'At 40 hours per week for 52 weeks, $60,000 is about $28.85 per hour before taxes ($60,000 ÷ 2,080 hours). Actual hours and compensation can vary.' },
              { q:'Does my employer match affect my take-home pay?', a:'An employer 401(k) match is generally not an employee paycheck deduction. This estimate includes only the employee contribution entered; plan terms and tax treatment vary.' },
              { q:'How does overtime affect my hourly paycheck?', a:'Overtime rules depend on coverage, exemption status, state law, and the workweek. This calculator does not model overtime premiums; use the overtime calculator for a separate estimate, not an exact amount.' },
              { q:'Why is my actual paycheck different from the calculator?', a:'Withholding elections, local taxes, benefits, credits, garnishments, pay periods, and state-specific rules can change actual pay. This calculator uses a simplified modeled estimate.' },
            ].map(item => (
              <div key={item.q}>
                <h3 style={{ fontSize:'16px', fontWeight:700, marginBottom:'6px' }}>{item.q}</h3>
                <p style={{ fontSize:'16px', opacity:0.85, lineHeight:1.7, margin:0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATE LINKS */}
        <div style={{ marginTop: '32px' }}>
          <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '12px', textAlign: 'center' as const }}>Hourly Paycheck by State</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(56px,1fr))', gap: '6px' }}>
              <Link key="alabama" href="/hourly-paycheck-calculator/alabama" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>AL</Link>
              <Link key="alaska" href="/hourly-paycheck-calculator/alaska" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>AK •</Link>
              <Link key="arizona" href="/hourly-paycheck-calculator/arizona" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>AZ</Link>
              <Link key="arkansas" href="/hourly-paycheck-calculator/arkansas" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>AR</Link>
              <Link key="california" href="/hourly-paycheck-calculator/california" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>CA</Link>
              <Link key="colorado" href="/hourly-paycheck-calculator/colorado" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>CO</Link>
              <Link key="connecticut" href="/hourly-paycheck-calculator/connecticut" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>CT</Link>
              <Link key="delaware" href="/hourly-paycheck-calculator/delaware" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>DE</Link>
              <Link key="florida" href="/hourly-paycheck-calculator/florida" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>FL •</Link>
              <Link key="georgia" href="/hourly-paycheck-calculator/georgia" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>GA</Link>
              <Link key="hawaii" href="/hourly-paycheck-calculator/hawaii" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>HI</Link>
              <Link key="idaho" href="/hourly-paycheck-calculator/idaho" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>ID</Link>
              <Link key="illinois" href="/hourly-paycheck-calculator/illinois" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>IL</Link>
              <Link key="indiana" href="/hourly-paycheck-calculator/indiana" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>IN</Link>
              <Link key="iowa" href="/hourly-paycheck-calculator/iowa" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>IA</Link>
              <Link key="kansas" href="/hourly-paycheck-calculator/kansas" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>KS</Link>
              <Link key="kentucky" href="/hourly-paycheck-calculator/kentucky" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>KY</Link>
              <Link key="louisiana" href="/hourly-paycheck-calculator/louisiana" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>LA</Link>
              <Link key="maine" href="/hourly-paycheck-calculator/maine" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>ME</Link>
              <Link key="maryland" href="/hourly-paycheck-calculator/maryland" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MD</Link>
              <Link key="massachusetts" href="/hourly-paycheck-calculator/massachusetts" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MA</Link>
              <Link key="michigan" href="/hourly-paycheck-calculator/michigan" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MI</Link>
              <Link key="minnesota" href="/hourly-paycheck-calculator/minnesota" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MN</Link>
              <Link key="mississippi" href="/hourly-paycheck-calculator/mississippi" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MS</Link>
              <Link key="missouri" href="/hourly-paycheck-calculator/missouri" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MO</Link>
              <Link key="montana" href="/hourly-paycheck-calculator/montana" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>MT</Link>
              <Link key="nebraska" href="/hourly-paycheck-calculator/nebraska" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NE</Link>
              <Link key="nevada" href="/hourly-paycheck-calculator/nevada" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NV •</Link>
              <Link key="new-hampshire" href="/hourly-paycheck-calculator/new-hampshire" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NH •</Link>
              <Link key="new-jersey" href="/hourly-paycheck-calculator/new-jersey" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NJ</Link>
              <Link key="new-mexico" href="/hourly-paycheck-calculator/new-mexico" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NM</Link>
              <Link key="new-york" href="/hourly-paycheck-calculator/new-york" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NY</Link>
              <Link key="north-carolina" href="/hourly-paycheck-calculator/north-carolina" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>NC</Link>
              <Link key="north-dakota" href="/hourly-paycheck-calculator/north-dakota" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>ND</Link>
              <Link key="ohio" href="/hourly-paycheck-calculator/ohio" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>OH</Link>
              <Link key="oklahoma" href="/hourly-paycheck-calculator/oklahoma" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>OK</Link>
              <Link key="oregon" href="/hourly-paycheck-calculator/oregon" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>OR</Link>
              <Link key="pennsylvania" href="/hourly-paycheck-calculator/pennsylvania" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>PA</Link>
              <Link key="rhode-island" href="/hourly-paycheck-calculator/rhode-island" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>RI</Link>
              <Link key="south-carolina" href="/hourly-paycheck-calculator/south-carolina" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>SC</Link>
              <Link key="south-dakota" href="/hourly-paycheck-calculator/south-dakota" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>SD •</Link>
              <Link key="tennessee" href="/hourly-paycheck-calculator/tennessee" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>TN •</Link>
              <Link key="texas" href="/hourly-paycheck-calculator/texas" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>TX •</Link>
              <Link key="utah" href="/hourly-paycheck-calculator/utah" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>UT</Link>
              <Link key="vermont" href="/hourly-paycheck-calculator/vermont" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>VT</Link>
              <Link key="virginia" href="/hourly-paycheck-calculator/virginia" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>VA</Link>
              <Link key="washington" href="/hourly-paycheck-calculator/washington" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>WA •</Link>
              <Link key="west-virginia" href="/hourly-paycheck-calculator/west-virginia" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>WV</Link>
              <Link key="wisconsin" href="/hourly-paycheck-calculator/wisconsin" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>WI</Link>
              <Link key="wyoming" href="/hourly-paycheck-calculator/wyoming" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>WY •</Link>
              <Link key="washington-dc" href="/hourly-paycheck-calculator/washington-dc" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', textAlign: 'center' as const }}>DC</Link>
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
          <p style={{ textAlign:'center', opacity: 0.82, fontSize:'15px', marginBottom:'20px' }}>Choose a state-specific tax model by selecting a card.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'8px' }}>
            {STATES.map(s => (
              <button
                key={s.code}
                className="hourly-state-button"
                type="button"
                aria-pressed={state === s.code}
                onClick={() => { setState(s.code); setHasCalculated(false); setError(''); }}
                style={{ background: state===s.code ? 'rgba(129,140,248,0.15)' : 'rgba(255,255,255,0.04)', border: state===s.code ? '1px solid rgba(129,140,248,0.65)' : '1px solid rgba(255,255,255,0.2)', borderRadius:'8px', padding:'12px', cursor:'pointer', color:'#fff', textAlign:'left', minHeight:64 }}
              >
                <div style={{ fontWeight:700, fontSize:'16px' }}>{s.name}</div>
                <div style={{ fontSize:'14px', color:'rgba(255,255,255,0.8)', marginTop:'4px' }}>{NO_STATE_INCOME_TAX.has(s.code) ? 'No wage income tax' : 'State tax schedule modeled'}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity: 0.8, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </div>
  );
}
