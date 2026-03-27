'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

// Вся логіка на клієнті — generateStaticParams в окремому серверному компоненті
// Цей файл — client wrapper який читає slug з URL через usePathname

import { usePathname } from 'next/navigation';

const STATES: Record<string, { name: string; rate: number; slug: string }> = {
  alabama:        { name:'Alabama',       rate:0.05,   slug:'alabama' },
  alaska:         { name:'Alaska',        rate:0,      slug:'alaska' },
  arizona:        { name:'Arizona',       rate:0.025,  slug:'arizona' },
  arkansas:       { name:'Arkansas',      rate:0.044,  slug:'arkansas' },
  california:     { name:'California',    rate:0.093,  slug:'california' },
  colorado:       { name:'Colorado',      rate:0.044,  slug:'colorado' },
  connecticut:    { name:'Connecticut',   rate:0.05,   slug:'connecticut' },
  delaware:       { name:'Delaware',      rate:0.066,  slug:'delaware' },
  florida:        { name:'Florida',       rate:0,      slug:'florida' },
  georgia:        { name:'Georgia',       rate:0.055,  slug:'georgia' },
  hawaii:         { name:'Hawaii',        rate:0.08,   slug:'hawaii' },
  idaho:          { name:'Idaho',         rate:0.058,  slug:'idaho' },
  illinois:       { name:'Illinois',      rate:0.0495, slug:'illinois' },
  indiana:        { name:'Indiana',       rate:0.0305, slug:'indiana' },
  iowa:           { name:'Iowa',          rate:0.057,  slug:'iowa' },
  kansas:         { name:'Kansas',        rate:0.057,  slug:'kansas' },
  kentucky:       { name:'Kentucky',      rate:0.045,  slug:'kentucky' },
  louisiana:      { name:'Louisiana',     rate:0.0425, slug:'louisiana' },
  maine:          { name:'Maine',         rate:0.075,  slug:'maine' },
  maryland:       { name:'Maryland',      rate:0.0575, slug:'maryland' },
  massachusetts:  { name:'Massachusetts', rate:0.05,   slug:'massachusetts' },
  michigan:       { name:'Michigan',      rate:0.0425, slug:'michigan' },
  minnesota:      { name:'Minnesota',     rate:0.0985, slug:'minnesota' },
  mississippi:    { name:'Mississippi',   rate:0.047,  slug:'mississippi' },
  missouri:       { name:'Missouri',      rate:0.048,  slug:'missouri' },
  montana:        { name:'Montana',       rate:0.059,  slug:'montana' },
  nebraska:       { name:'Nebraska',      rate:0.0664, slug:'nebraska' },
  nevada:         { name:'Nevada',        rate:0,      slug:'nevada' },
  'new-hampshire':{ name:'New Hampshire', rate:0,      slug:'new-hampshire' },
  'new-jersey':   { name:'New Jersey',    rate:0.0637, slug:'new-jersey' },
  'new-mexico':   { name:'New Mexico',    rate:0.059,  slug:'new-mexico' },
  'new-york':     { name:'New York',      rate:0.0685, slug:'new-york' },
  'north-carolina':{ name:'North Carolina',rate:0.0499,slug:'north-carolina' },
  'north-dakota': { name:'North Dakota',  rate:0.025,  slug:'north-dakota' },
  ohio:           { name:'Ohio',          rate:0.04,   slug:'ohio' },
  oklahoma:       { name:'Oklahoma',      rate:0.0475, slug:'oklahoma' },
  oregon:         { name:'Oregon',        rate:0.099,  slug:'oregon' },
  pennsylvania:   { name:'Pennsylvania',  rate:0.0307, slug:'pennsylvania' },
  'rhode-island': { name:'Rhode Island',  rate:0.0599, slug:'rhode-island' },
  'south-carolina':{ name:'South Carolina',rate:0.064, slug:'south-carolina' },
  'south-dakota': { name:'South Dakota',  rate:0,      slug:'south-dakota' },
  tennessee:      { name:'Tennessee',     rate:0,      slug:'tennessee' },
  texas:          { name:'Texas',         rate:0,      slug:'texas' },
  utah:           { name:'Utah',          rate:0.0485, slug:'utah' },
  vermont:        { name:'Vermont',       rate:0.0875, slug:'vermont' },
  virginia:       { name:'Virginia',      rate:0.0575, slug:'virginia' },
  washington:     { name:'Washington',    rate:0,      slug:'washington' },
  'west-virginia':{ name:'West Virginia', rate:0.065,  slug:'west-virginia' },
  wisconsin:      { name:'Wisconsin',     rate:0.0765, slug:'wisconsin' },
  wyoming:        { name:'Wyoming',       rate:0,      slug:'wyoming' },
};

function calcFederal(taxable: number, filing: string): number {
  const std = filing === 'married' ? 32200 : 16100;
  const t = Math.max(0, taxable - std);
  const b: [number,number][] = filing === 'married'
    ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
    : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
  let tax = 0, prev = 0;
  for (const [lim, rate] of b) { if (t <= prev) break; tax += (Math.min(t,lim)-prev)*rate; prev=lim; }
  return tax;
}

export default function HourlyStateCalculator({ stateSlug }: { stateSlug: string }) {
  const st = STATES[stateSlug];
  const [hourly, setHourly] = useState('25');
  const [hours,  setHours]  = useState('40');
  const [weeks,  setWeeks]  = useState('52');
  const [filing, setFiling] = useState('single');
  const [k401,   setK401]   = useState('0');
  const [hsa,    setHsa]    = useState('0');

  const r = useMemo(() => {
    const h=parseFloat(hourly)||0, hw=parseFloat(hours)||0, w=parseFloat(weeks)||52;
    const annual=h*hw*w, k=Math.min(parseFloat(k401)||0,23500), hsaV=Math.min(parseFloat(hsa)||0,4300);
    const preTax=annual-k-hsaV, fed=calcFederal(preTax,filing);
    const fica=Math.min(annual,176100)*0.062+annual*0.0145;
    const stateTx=st&&st.rate>0?Math.max(0,preTax-5000)*st.rate:0;
    const total=fed+fica+stateTx, net=annual-total-k-hsaV;
    return { annual, fed, fica, stateTx, total, net, k, hsaV, perPaycheck:net/26, weekly:w>0?net/w:0, effectiveRate:annual>0?(total/annual)*100:0 };
  }, [hourly, hours, weeks, filing, k401, hsa, st]);

  const fmt = (n:number) => '$'+Math.round(n).toLocaleString();
  const inp: React.CSSProperties = { width:'100%', padding:'10px 14px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'8px', color:'white', fontSize:'15px', outline:'none', boxSizing:'border-box', fontFamily:'inherit' };
  const lbl: React.CSSProperties = { fontSize:'11px', color:'rgba(255,255,255,0.45)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'6px', display:'block' };

  if (!st) return <div style={{ padding:'40px', textAlign:'center', color:'white' }}>State not found</div>;
  const noTax = st.rate === 0;
  const rateStr = (st.rate*100).toFixed(2)+'%';

  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href="/" style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}><span style={{ color:'#4ade80' }}>$</span> PrivatePaycheck</Link>
        <div style={{ display:'flex', gap:'16px', fontSize:'13px' }}>
          <Link href="/hourly-paycheck-calculator" style={{ color:'#818cf8', textDecoration:'none' }}>← All States</Link>
          <Link href="/overtime-calculator" style={{ color:'#fbbf24', textDecoration:'none' }}>Overtime</Link>
        </div>
      </nav>

      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'32px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'20px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> ›{' '}
          <Link href="/hourly-paycheck-calculator" style={{ color:'inherit', textDecoration:'none' }}>Hourly Calculator</Link> ›{' '}
          <span>{st.name}</span>
        </div>

        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          {noTax && (
            <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'12px', color:'#4ade80' }}>
              🎉 {st.name} has NO state income tax!
            </div>
          )}
          <h1 style={{ fontSize:'clamp(24px,4vw,44px)', fontWeight:900, margin:'0 0 12px', lineHeight:1.2 }}>
            {st.name} Hourly Paycheck Calculator 2026
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'540px', margin:'0 auto', lineHeight:1.7 }}>
            {noTax
              ? `No ${st.name} state income tax. Enter your hourly rate to see take-home pay after federal taxes and FICA.`
              : `${st.name} state income tax: ${rateStr}. See your exact take-home after all deductions.`
            }
          </p>
        </div>

        {/* CALCULATOR */}
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:'16px', padding:'28px', marginBottom:'28px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(155px,1fr))', gap:'16px', marginBottom:'16px' }}>
            <div><label style={lbl}>Hourly Rate ($)</label><input type="number" value={hourly} onChange={e=>setHourly(e.target.value)} style={inp} placeholder="25.00" /></div>
            <div><label style={lbl}>Hours per Week</label><input type="number" value={hours} onChange={e=>setHours(e.target.value)} style={inp} placeholder="40" /></div>
            <div><label style={lbl}>Weeks per Year</label><input type="number" value={weeks} onChange={e=>setWeeks(e.target.value)} style={inp} placeholder="52" /></div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(155px,1fr))', gap:'16px', marginBottom:'16px' }}>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={inp}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>
            <div><label style={lbl}>401(k) /yr (max $23,500)</label><input type="number" value={k401} onChange={e=>setK401(e.target.value)} style={inp} placeholder="0" /></div>
            <div><label style={lbl}>HSA /yr (max $4,300)</label><input type="number" value={hsa} onChange={e=>setHsa(e.target.value)} style={inp} placeholder="0" /></div>
          </div>

          {/* RESULTS */}
          <div style={{ background:'linear-gradient(135deg,rgba(74,222,128,0.12),rgba(99,102,241,0.12))', border:'1px solid rgba(74,222,128,0.25)', borderRadius:'12px', padding:'24px' }}>
            <div style={{ textAlign:'center', marginBottom:'20px' }}>
              <div style={{ fontSize:'12px', opacity:0.6, marginBottom:'4px' }}>Annual Take-Home · {st.name}</div>
              <div style={{ fontSize:'clamp(28px,5vw,48px)', fontWeight:900, color:'#4ade80', lineHeight:1 }}>{fmt(r.net)}</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))', gap:'10px', marginBottom:'20px' }}>
              {[
                { l:'Weekly',    v:fmt(r.weekly) },
                { l:'Biweekly',  v:fmt(r.perPaycheck) },
                { l:'Monthly',   v:fmt(r.net/12) },
                { l:'Eff. Rate', v:r.effectiveRate.toFixed(1)+'%' },
              ].map(b=>(
                <div key={b.l} style={{ background:'rgba(0,0,0,0.25)', borderRadius:'8px', padding:'10px', textAlign:'center' }}>
                  <div style={{ fontSize:'11px', opacity:0.5, marginBottom:'3px' }}>{b.l}</div>
                  <div style={{ fontWeight:800, fontSize:'16px' }}>{b.v}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'14px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:'6px', fontSize:'13px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}><span>Gross Annual</span><span>{fmt(r.annual)}</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}><span>Federal Tax</span><span>-{fmt(r.fed)}</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}><span>FICA</span><span>-{fmt(r.fica)}</span></div>
              {r.stateTx>0&&<div style={{ display:'flex', justifyContent:'space-between', opacity:0.7 }}><span>{st.name} Tax</span><span>-{fmt(r.stateTx)}</span></div>}
            </div>
          </div>
          <p style={{ textAlign:'center', fontSize:'11px', opacity:0.3, margin:'10px 0 0' }}>🔒 All calculations in your browser — data never sent anywhere</p>
        </div>

        {/* FAQ */}
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'24px', marginBottom:'28px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>Hourly Pay in {st.name} — FAQ</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            {[
              { q:`What is $25/hour after taxes in ${st.name}?`,
                a:`$25/hr × 40 hrs × 52 weeks = $52,000 gross. ${noTax?`In ${st.name} (no state tax), a single filer takes home roughly $40,500–$41,500 after federal tax and FICA.`:`After federal tax, FICA, and ${st.name} state tax (${rateStr}), a single filer takes home roughly $38,000–$40,000 depending on deductions.`}` },
              { q:`Does ${st.name} have state income tax on hourly wages?`,
                a: noTax ? `No — ${st.name} has no state income tax. Hourly workers only pay federal income tax and FICA (Social Security + Medicare).` : `Yes — ${st.name} has a state income tax rate of ${rateStr} applied to hourly wages above the standard deduction.` },
              { q:'How do I convert hourly to annual salary?',
                a:'Multiply: hourly rate × hours per week × weeks per year. Standard full-time: rate × 40 × 52. For 50 weeks (accounting for 2 weeks unpaid vacation): rate × 40 × 50.' },
            ].map(item=>(
              <div key={item.q}>
                <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px' }}>{item.q}</h3>
                <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CROSS-LINKS */}
        <div>
          <h2 style={{ fontSize:'16px', fontWeight:800, marginBottom:'14px', opacity:0.7 }}>More {st.name} Calculators</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'12px' }}>
            <Link href={`/${stateSlug}-paycheck-calculator`} style={{ display:'block', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'12px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'18px', marginBottom:'6px' }}>💰</div>
              <div style={{ fontWeight:700, fontSize:'13px', marginBottom:'3px' }}>{st.name} Salary Paycheck</div>
              <div style={{ fontSize:'11px', opacity:0.5 }}>Annual salary → net pay →</div>
            </Link>
            <Link href={`/overtime-calculator/${stateSlug}`} style={{ display:'block', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'12px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'18px', marginBottom:'6px' }}>⏰</div>
              <div style={{ fontWeight:700, fontSize:'13px', marginBottom:'3px' }}>{st.name} Overtime</div>
              <div style={{ fontSize:'11px', opacity:0.5 }}>1.5x & double time →</div>
            </Link>
            <Link href={`/unemployment-calculator/${stateSlug}`} style={{ display:'block', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.2)', borderRadius:'12px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'18px', marginBottom:'6px' }}>📋</div>
              <div style={{ fontWeight:700, fontSize:'13px', marginBottom:'3px' }}>{st.name} Unemployment</div>
              <div style={{ fontSize:'11px', opacity:0.5 }}>Weekly benefits →</div>
            </Link>
            <Link href={`/minimum-wage/${stateSlug}`} style={{ display:'block', background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:'12px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'18px', marginBottom:'6px' }}>💵</div>
              <div style={{ fontWeight:700, fontSize:'13px', marginBottom:'3px' }}>{st.name} Min Wage</div>
              <div style={{ fontSize:'11px', opacity:0.5 }}>2026 hourly rate →</div>
            </Link>
          </div>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
