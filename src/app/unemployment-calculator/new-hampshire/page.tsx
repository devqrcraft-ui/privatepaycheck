import type { Metadata } from 'next'
import UnemployCalc from './_calc'

export const metadata: Metadata = {
  title: 'New Hampshire Unemployment Calculator 2026 — Estimate Your Weekly Benefits',
  description: 'Free New Hampshire unemployment calculator 2026. Estimate your weekly benefit amount (WBA). New Hampshire pays up to $427/week for up to 26 weeks. Instant, no signup.',
  keywords: 'new-hampshire unemployment calculator, new-hampshire unemployment benefits 2026, new-hampshire WBA calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/new-hampshire' },
}

export default function Page() {
  const rows = [["$400/wk","$10,400/yr","$200","$100"],["$600/wk","$15,600/yr","$300","$150"],["$800/wk","$20,800/yr","$400","$200"],["$900/wk","$23,400/yr","$427","$213"],["$1,200/wk","$31,200/yr","$427","$213"],["$1,500/wk","$39,000/yr","$427","$213"]]
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', color:'#e2e8f0', background:'#0f1629', minHeight:'100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is New Hampshire unemployment in 2026?","acceptedAnswer":{"@type":"Answer","text":"New Hampshire unemployment benefits in 2026 pay up to $427 per week. The WBA is calculated as 1/26 of the average of your two highest base-period quarters. The minimum is $32/week."}},{"@type":"Question","name":"How long do New Hampshire unemployment benefits last?","acceptedAnswer":{"@type":"Answer","text":"New Hampshire unemployment benefits last up to 26 weeks. The exact duration depends on your total base-period wages."}},{"@type":"Question","name":"Is New Hampshire unemployment taxable?","acceptedAnswer":{"@type":"Answer","text":"New Hampshire unemployment benefits are subject to federal income tax. NH has no broad income tax (only taxes interest and dividends), so state tax does not apply to unemployment benefits."}},{"@type":"Question","name":"How do I apply for New Hampshire unemployment?","acceptedAnswer":{"@type":"Answer","text":"Apply at NHworks.nh.gov. File within 3 weeks of your last day of work. You need to have earned wages in at least two quarters of the base period."}}]}) }} />
      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> ›{' '}
        <a href="/unemployment-calculator" style={{ color:'#b8c8dc' }}>Unemployment Calculator</a> ›{' '}
        New Hampshire
      </nav>
      <h1 style={{ fontSize:'clamp(26px,4vw,36px)', fontWeight:900, marginBottom:8, color:'#f1f5f9' }}>
        New Hampshire Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize:17, color:'#94a3b8', marginBottom:20, lineHeight:1.7 }}>
        Estimate your New Hampshire weekly unemployment benefit (WBA) for 2026.
        New Hampshire pays <strong style={{ color:'#F5C842' }}>up to $427/week</strong> for up to 26 weeks.
        Formula: ~50% of avg weekly wage, max $427/week.
      </p>

      <UnemployCalc maxWBA={427} minWBA={32} stateName="New Hampshire" />

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:28, fontSize:14, color:'#fde68a' }}>
        New Hampshire max WBA 2026: <strong>$427/week</strong> · Minimum: $32/week · Duration: up to 26 weeks · No state income tax on UI benefits.
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>New Hampshire Weekly Benefit by Wage (2026)</h2>
      <div style={{ overflowX:'auto', marginBottom:32 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:480 }}>
          <thead><tr style={{ background:'rgba(99,102,241,0.12)' }}>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Weekly Wage</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Annual Earnings</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Weekly Benefit (WBA)</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Biweekly Payment</th>
          </tr></thead>
          <tbody>{rows.map(([ww,ae,wba,bw]: string[])=>(
            <tr key={ww} style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              <td style={{ padding:'10px 14px', fontWeight:600 }}>{ww}</td>
              <td style={{ padding:'10px 14px', color:'#94a3b8' }}>{ae}</td>
              <td style={{ padding:'10px 14px', fontWeight:700, color:'#F5C842' }}>{wba}</td>
              <td style={{ padding:'10px 14px' }}>{bw}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How much is New Hampshire unemployment in 2026?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>New Hampshire unemployment benefits in 2026 pay up to $427 per week. The WBA is calculated as 1/26 of the average of your two highest base-period quarters. The minimum is $32/week.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How long do New Hampshire unemployment benefits last?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>New Hampshire unemployment benefits last up to 26 weeks. The exact duration depends on your total base-period wages.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>Is New Hampshire unemployment taxable?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>New Hampshire unemployment benefits are subject to federal income tax. NH has no broad income tax (only taxes interest and dividends), so state tax does not apply to unemployment benefits.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How do I apply for New Hampshire unemployment?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Apply at NHworks.nh.gov. File within 3 weeks of your last day of work. You need to have earned wages in at least two quarters of the base period.</p>

      <div style={{ borderTop:'2px solid rgba(255,255,255,0.1)', marginTop:40, paddingTop:32 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Other State Unemployment Calculators</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:8, marginBottom:24 }}>
          {[["Texas","texas"],["Illinois","illinois"],["Florida","florida"],["California","california"],["New York","new-york"],["Pennsylvania","pennsylvania"],["Ohio","ohio"],["Georgia","georgia"]].map(([n,s]: string[])=>(
            <a key={s} href={'/unemployment-calculator/'+s} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Unemployment</a>
          ))}
        </div>
        <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
          <a href="/" style={{ color:'#F5C842', fontSize:14 }}>Free Paycheck Calculator</a>
          <a href="/new-hampshire-paycheck-calculator" style={{ color:'#F5C842', fontSize:14 }}>New Hampshire Paycheck Calculator</a>
          <a href="/unemployment-calculator" style={{ color:'#F5C842', fontSize:14 }}>All States Unemployment</a>
        </div>
      </div>
    </main>
  )
}
