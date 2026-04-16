import type { Metadata } from 'next'
import UnemployCalc from './_calc'

export const metadata: Metadata = {
  title: 'Texas Unemployment Calculator 2026 — Estimate Your Weekly Benefits',
  description: 'How much will Texas unemployment pay you? Estimate your weekly benefit up to $648/week for 26 weeks. Enter your wages — get instant results. No signup.',
  keywords: 'texas unemployment calculator, texas unemployment benefits 2026, texas WBA calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/texas' },
}

export default function Page() {
  const rows = [["$400/wk","$10,400/yr","$248","$124"],["$600/wk","$15,600/yr","$372","$186"],["$800/wk","$20,800/yr","$496","$248"],["$1,000/wk","$26,000/yr","$600","$300"],["$1,200/wk","$31,200/yr","$648","$324"],["$1,500/wk","$39,000/yr","$648","$324"]]
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', color:'#e2e8f0', background:'#0f1629', minHeight:'100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is Texas unemployment in 2026?","acceptedAnswer":{"@type":"Answer","text":"Texas unemployment benefits (WBA) in 2026 are up to $648 per week. Benefits are calculated as approximately 1/25 of wages in your highest-earning base period quarter. The minimum is $70/week."}},{"@type":"Question","name":"How long do Texas unemployment benefits last?","acceptedAnswer":{"@type":"Answer","text":"Texas unemployment benefits last 10–26 weeks depending on your total base-period wages and the state unemployment rate. Most claimants receive 26 weeks."}},{"@type":"Question","name":"Is Texas unemployment taxable?","acceptedAnswer":{"@type":"Answer","text":"Texas unemployment benefits are subject to federal income tax. Texas has no state income tax, so there is no state tax on your benefits. You can elect 10% federal withholding."}},{"@type":"Question","name":"How do I apply for Texas unemployment?","acceptedAnswer":{"@type":"Answer","text":"Apply online at TWC.texas.gov within 3 weeks of losing your job. You must have earned wages in at least two base-period quarters and been separated through no fault of your own."}}]}) }} />
      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> ›{' '}
        <a href="/unemployment-calculator" style={{ color:'#b8c8dc' }}>Unemployment Calculator</a> ›{' '}
        Texas
      </nav>
      <h1 style={{ fontSize:'clamp(26px,4vw,36px)', fontWeight:900, marginBottom:8, color:'#f1f5f9' }}>
        Texas Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize:17, color:'#94a3b8', marginBottom:20, lineHeight:1.7 }}>
        Estimate your Texas weekly unemployment benefit (WBA) for 2026.
        Texas pays <strong style={{ color:'#F5C842' }}>up to $648/week</strong> for up to 26 weeks.
        Formula: ~47% of avg weekly wage, max $648/week.
      </p>

      <UnemployCalc maxWBA={648} minWBA={70} stateName="Texas" />

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:28, fontSize:14, color:'#fde68a' }}>
        Texas max WBA 2026: <strong>$648/week</strong> · Minimum: $70/week · Duration: up to 26 weeks · No state income tax on UI benefits.
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Texas Weekly Benefit by Wage (2026)</h2>
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
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How much is Texas unemployment in 2026?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Texas unemployment benefits (WBA) in 2026 are up to $648 per week. Benefits are calculated as approximately 1/25 of wages in your highest-earning base period quarter. The minimum is $70/week.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How long do Texas unemployment benefits last?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Texas unemployment benefits last 10–26 weeks depending on your total base-period wages and the state unemployment rate. Most claimants receive 26 weeks.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>Is Texas unemployment taxable?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Texas unemployment benefits are subject to federal income tax. Texas has no state income tax, so there is no state tax on your benefits. You can elect 10% federal withholding.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How do I apply for Texas unemployment?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Apply online at TWC.texas.gov within 3 weeks of losing your job. You must have earned wages in at least two base-period quarters and been separated through no fault of your own.</p>

      <div style={{ borderTop:'2px solid rgba(255,255,255,0.1)', marginTop:40, paddingTop:32 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Other State Unemployment Calculators</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:8, marginBottom:24 }}>
          {[["Illinois","illinois"],["Florida","florida"],["California","california"],["New York","new-york"],["Pennsylvania","pennsylvania"],["Ohio","ohio"],["Michigan","michigan"],["Georgia","georgia"]].map(([n,s]: string[])=>(
            <a key={s} href={'/unemployment-calculator/'+s} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Unemployment</a>
          ))}
        </div>
        <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
          <a href="/" style={{ color:'#F5C842', fontSize:14 }}>Free Paycheck Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color:'#F5C842', fontSize:14 }}>Texas Paycheck Calculator</a>
          <a href="/unemployment-calculator" style={{ color:'#F5C842', fontSize:14 }}>All States Unemployment</a>
        </div>
      </div>
    </main>
  )
}
