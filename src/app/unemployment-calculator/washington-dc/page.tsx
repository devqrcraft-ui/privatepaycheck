import type { Metadata } from 'next'
import UnemployCalc from '../texas/_calc'

export const metadata: Metadata = {
  title: 'Washington DC Unemployment Calculator 2026 — Estimate Your Weekly Benefits',
  description: 'Free Washington DC unemployment calculator 2026. Estimate your weekly benefit amount (WBA). DC pays up to $444/week for up to 26 weeks. Instant, no signup.',
  keywords: 'washington dc unemployment calculator, dc unemployment benefits 2026, dc WBA calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/washington-dc' },
}

export default function Page() {
  const rows = [
    ['$300/wk','$15,600/yr','$150','$75'],
    ['$500/wk','$26,000/yr','$250','$125'],
    ['$700/wk','$36,400/yr','$350','$175'],
    ['$900/wk','$46,800/yr','$444','$222'],
    ['$1,200/wk','$62,400/yr','$444','$222'],
    ['$1,500/wk','$78,000/yr','$444','$222'],
  ]
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', color:'#e2e8f0', background:'#0f1629', minHeight:'100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is Washington DC unemployment in 2026?","acceptedAnswer":{"@type":"Answer","text":"Washington DC unemployment benefits (WBA) in 2026 are up to $444 per week. Benefits are calculated as 1/26 of wages in your two highest-earning base period quarters. The minimum is $50/week."}},{"@type":"Question","name":"How long do Washington DC unemployment benefits last?","acceptedAnswer":{"@type":"Answer","text":"Washington DC unemployment benefits last up to 26 weeks. The exact duration depends on your total base-period wages."}},{"@type":"Question","name":"Is Washington DC unemployment taxable?","acceptedAnswer":{"@type":"Answer","text":"Yes, Washington DC unemployment benefits are subject to both federal and DC state income tax. You can elect voluntary withholding to avoid a tax bill at year end."}},{"@type":"Question","name":"How do I apply for Washington DC unemployment?","acceptedAnswer":{"@type":"Answer","text":"Apply online at does.dc.gov. You must have earned wages in DC during the base period and been separated through no fault of your own."}}]}) }} />
      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> ›{' '}
        <a href="/unemployment-calculator" style={{ color:'#b8c8dc' }}>Unemployment Calculator</a> ›{' '}
        Washington DC
      </nav>
      <h1 style={{ fontSize:'clamp(26px,4vw,36px)', fontWeight:900, marginBottom:8, color:'#f1f5f9' }}>
        Washington DC Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize:17, color:'#94a3b8', marginBottom:20, lineHeight:1.7 }}>
        Estimate your Washington DC weekly unemployment benefit (WBA) for 2026.
        DC pays <strong style={{ color:'#F5C842' }}>up to $444/week</strong> for up to 26 weeks.
        Formula: 1/26 of wages in your two highest base-period quarters.
      </p>

      <UnemployCalc maxWBA={444} minWBA={50} stateName="Washington DC" />

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:28, fontSize:14, color:'#fde68a' }}>
        DC max WBA 2026: <strong>$444/week</strong> · Minimum: $50/week · Duration: up to 26 weeks · DC income tax applies.
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>DC Weekly Benefit by Wage (2026)</h2>
      <div style={{ overflowX:'auto', marginBottom:32 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:480 }}>
          <thead><tr style={{ background:'rgba(99,102,241,0.12)' }}>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#e2e8f0' }}>Weekly Wage</th>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#e2e8f0' }}>Annual Salary</th>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#F5C842' }}>Est. WBA</th>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#e2e8f0' }}>After 10% Fed Tax</th>
          </tr></thead>
          <tbody>
            {rows.map(([w,a,b,t],i) => (
              <tr key={i} style={{ borderTop:'1px solid rgba(255,255,255,0.07)', background: i%2===0 ? 'transparent' : 'rgba(255,255,255,0.03)' }}>
                <td style={{ padding:'9px 14px', color:'#e2e8f0' }}>{w}</td>
                <td style={{ padding:'9px 14px', color:'#94a3b8' }}>{a}</td>
                <td style={{ padding:'9px 14px', color:'#F5C842', fontWeight:700 }}>{b}</td>
                <td style={{ padding:'9px 14px', color:'#94a3b8' }}>{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize:20, fontWeight:800, marginBottom:10 }}>How DC Unemployment Benefits Are Calculated</h2>
      <p style={{ fontSize:15, color:'#94a3b8', lineHeight:1.8, marginBottom:24 }}>
        DC uses your two highest-earning quarters in the base period. Your WBA is 1/26 of the combined wages from those two quarters, capped at $444/week. You must have earned at least $1,300 in your highest quarter.
      </p>

      <h2 style={{ fontSize:20, fontWeight:800, marginBottom:10 }}>DC Unemployment Eligibility 2026</h2>
      <p style={{ fontSize:15, color:'#94a3b8', lineHeight:1.8, marginBottom:32 }}>
        To qualify, you must have worked in DC during the base period, earned at least $1,300 in your highest quarter, and been separated from your job through no fault of your own. Apply at <strong style={{ color:'#e2e8f0' }}>does.dc.gov</strong>.
      </p>
    </main>
  )
}
