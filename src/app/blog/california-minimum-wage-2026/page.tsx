
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "What is the minimum wage in California in 2026?", acceptedAnswer: { '@type': 'Answer', text: "California minimum wage is $16.50/hour as of 2026 for most workers. Fast food workers earn $20/hour under AB 1228. Healthcare workers have a $25/hour minimum under SB 525." } },
    { '@type': 'Question', name: "How much is California minimum wage per year?", acceptedAnswer: { '@type': 'Answer', text: "At $16.50/hour working full-time (40 hrs/week, 52 weeks), a California worker earns $34,320/year before taxes. After federal and state taxes, take-home is approximately $27,000-$28,000/year." } },
    { '@type': 'Question', name: "Does California have a higher minimum wage than federal?", acceptedAnswer: { '@type': 'Answer', text: "Yes. The federal minimum wage is $7.25/hour, while California is $16.50/hour — more than double. California has had a higher state minimum wage than the federal rate since 2008." } }
  ],
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California Minimum Wage 2026 — History, Changes & What Workers Need to Know',
  description: 'California minimum wage is $16.50/hour in 2026. See the full history from 2016 to 2026, fast food exceptions, local rates, and tipped worker rules.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/california-minimum-wage-2026' },
};

const HISTORY = [
  { year:'2016', rate:'$10.00' },
  { year:'2017', rate:'$10.50' },
  { year:'2018', rate:'$11.00' },
  { year:'2019', rate:'$12.00' },
  { year:'2020', rate:'$13.00' },
  { year:'2021', rate:'$14.00' },
  { year:'2022', rate:'$15.00' },
  { year:'2023', rate:'$15.50' },
  { year:'2024', rate:'$16.00' },
  { year:'2025', rate:'$16.50' },
  { year:'2026', rate:'$16.50', current:true },
];

export default function Post() {
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'California Minimum Wage 2026 — History, Changes & What Workers Need to Know',
        url:'https://privatepaycheck.com/blog/california-minimum-wage-2026',
        datePublished:'2026-02-23', author:{'@type':'Organization', name:'PrivatePaycheck'},
      })}} />

      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › California Minimum Wage 2026
        </div>
        <div style={{ display:'inline-block', background:'rgba(16,185,129,0.1)', color:'#6ee7b7', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>MINIMUM WAGE</div>
        <h1 style={{ fontSize:'clamp(22px,4vw,38px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>California Minimum Wage 2026 — History, Changes & What Workers Need to Know</h1>
        <p style={{ opacity:0.5, fontSize:'13px', marginBottom:'32px' }}>February 23, 2026 · 6 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>California's minimum wage has more than doubled since 2016, rising from $10/hour to $16.50/hour in 2026. The state has no separate tipped minimum wage — all workers receive the full rate regardless of tips. Here's everything workers and employers need to know.</p>

          {/* Current rate highlight */}
          <div style={{ background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:'12px', padding:'24px', margin:'24px 0', textAlign:'center' }}>
            <div style={{ fontSize:'13px', opacity:0.6, marginBottom:'8px' }}>CALIFORNIA MINIMUM WAGE 2026</div>
            <div style={{ fontSize:'56px', fontWeight:900, color:'#4ade80', lineHeight:1 }}>$16.50</div>
            <div style={{ fontSize:'18px', opacity:0.7, marginTop:'4px' }}>per hour</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'8px', marginTop:'16px' }}>
              {[
                { label:'Per Day (8h)', value:'$132' },
                { label:'Per Week', value:'$660' },
                { label:'Per Month', value:'$2,860' },
                { label:'Per Year', value:'$34,320' },
              ].map(s => (
                <div key={s.label} style={{ background:'rgba(255,255,255,0.06)', borderRadius:'8px', padding:'10px 6px' }}>
                  <div style={{ fontSize:'10px', opacity:0.5, marginBottom:'2px' }}>{s.label}</div>
                  <div style={{ fontWeight:700, fontSize:'14px' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>California Minimum Wage History 2016–2026</h2>
          <div style={{ margin:'16px 0' }}>
            {HISTORY.map(h => (
              <div key={h.year} style={{ display:'flex', alignItems:'center', gap:'12px', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ width:'48px', opacity:0.6, fontSize:'13px' }}>{h.year}</span>
                <div style={{ flex:1, background:'rgba(255,255,255,0.06)', borderRadius:'4px', overflow:'hidden', height:'24px', position:'relative' }}>
                  <div style={{ background: h.current ? '#4ade80' : '#818cf8', height:'100%', width:`${(parseFloat(h.rate.replace('$','')) / 16.50) * 100}%`, transition:'width 0.3s' }} />
                </div>
                <span style={{ width:'56px', fontWeight:700, color: h.current ? '#4ade80' : 'white', fontSize:'14px' }}>{h.rate}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Special Industry Rates</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'10px', margin:'16px 0' }}>
            {[
              { industry:'Fast Food Workers', rate:'$20.00/hr', note:'AB 1228 — applies to fast food chains with 60+ locations nationally (effective April 2024)' },
              { industry:'Healthcare Workers', rate:'$23–$25/hr', note:'Phased minimum for healthcare workers at covered facilities (SB 525)' },
              { industry:'All Other Workers', rate:'$16.50/hr', note:'Standard California minimum wage' },
            ].map(s => (
              <div key={s.industry} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px 16px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'4px' }}>
                  <strong style={{ fontSize:'14px' }}>{s.industry}</strong>
                  <strong style={{ color:'#4ade80', fontSize:'15px' }}>{s.rate}</strong>
                </div>
                <p style={{ fontSize:'12px', opacity:0.55, margin:0 }}>{s.note}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Local Minimum Wages Higher Than State</h2>
          <p>Many California cities have minimum wages above the state rate:</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'10px', margin:'16px 0' }}>
            {[
              { city:'San Francisco', rate:'$18.67' },
              { city:'West Hollywood', rate:'$19.08' },
              { city:'Los Angeles', rate:'$17.28' },
              { city:'Santa Monica', rate:'$17.27' },
              { city:'Pasadena', rate:'$17.50' },
              { city:'San Jose', rate:'$17.55' },
            ].map(c => (
              <div key={c.city} style={{ background:'rgba(16,185,129,0.06)', border:'1px solid rgba(16,185,129,0.15)', borderRadius:'8px', padding:'12px' }}>
                <div style={{ fontSize:'12px', opacity:0.6 }}>{c.city}</div>
                <div style={{ fontWeight:800, color:'#4ade80', fontSize:'18px' }}>{c.rate}/hr</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>No Tipped Minimum Wage in California</h2>
          <p>California is one of the few states that does not allow a tipped credit. All workers — including servers, bartenders, and delivery drivers — must receive the full $16.50/hour minimum wage. Tips are on top of this amount, not a substitute for wages.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>What Does $16.50/Hour Mean for Your Paycheck?</h2>
          <p>At minimum wage in California, a full-time worker earns $34,320/year gross. But California has state income tax starting at 1% — use the calculator to see your exact net pay after all deductions.</p>
        </div>

        <div style={{ margin:'40px 0', background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.25)', borderRadius:'14px', padding:'24px', textAlign:'center' }}>
          <div style={{ fontSize:'24px', marginBottom:'8px' }}></div>
          <div style={{ fontWeight:800, fontSize:'18px', marginBottom:'8px' }}>Calculate California Take-Home Pay</div>
          <p style={{ opacity:0.65, fontSize:'14px', marginBottom:'16px' }}>See exactly what you take home at any California wage after state + federal taxes.</p>
          <div style={{ display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/california-paycheck-calculator" style={{ display:'inline-block', background:'#4ade80', color:'#0f0c29', fontWeight:800, padding:'12px 24px', borderRadius:'10px', textDecoration:'none', fontSize:'14px' }}>
              CA Paycheck Calculator →
            </Link>
            <Link href="/minimum-wage/california" style={{ display:'inline-block', background:'rgba(255,255,255,0.1)', color:'white', fontWeight:700, padding:'12px 24px', borderRadius:'10px', textDecoration:'none', fontSize:'14px' }}>
              CA Minimum Wage Page →
            </Link>
          </div>
        </div>

        <div style={{ marginTop:'32px' }}>
          <h3 style={{ fontSize:'16px', fontWeight:800, marginBottom:'14px', opacity:0.7 }}>More California Calculators</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'10px' }}>
            <Link href="/overtime-calculator/california" style={{ display:'block', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'13px' }}>CA Overtime Calculator</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginTop:'4px' }}>Double-time rules →</div>
            </Link>
            <Link href="/unemployment-calculator/california" style={{ display:'block', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.2)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'13px' }}>CA Unemployment</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginTop:'4px' }}>Up to $450/week →</div>
            </Link>
            <Link href="/blog/overtime-pay-rules-by-state" style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'13px' }}>Overtime Rules by State</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginTop:'4px' }}>CA has strictest rules →</div>
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
