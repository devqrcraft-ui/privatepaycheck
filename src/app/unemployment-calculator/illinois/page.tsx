import type { Metadata } from 'next'
import IlUnemployCalcEmbed from '@/components/IlUnemployCalcEmbed'

export const metadata: Metadata = {
  title: 'Illinois Unemployment Calculator 2026 — Estimate Your Weekly Benefits',
  description: 'Free Illinois unemployment calculator 2026. Estimate your weekly benefit amount (WBA) based on your earnings. Illinois pays up to $693/week. Instant, no signup.',
  keywords: 'illinois unemployment calculator, illinois unemployment benefits 2026, illinois WBA calculator, illinois unemployment weekly benefit',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/illinois' },
}

export default function Page() {
  const rows = [
    ['$400/wk','$16 Qtr','$208','$104'],
    ['$600/wk','$24 Qtr','$312','$156'],
    ['$800/wk','$32 Qtr','$416','$208'],
    ['$1,000/wk','$40 Qtr','$520','$260'],
    ['$1,200/wk','$48 Qtr','$600','$300'],
    ['$1,500/wk','$60 Qtr','$693','$346'],
    ['$2,000/wk','$80 Qtr','$693','$346'],
  ]
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', color:'#e2e8f0', background:'#0f1629', minHeight:'100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is Illinois unemployment in 2026?","acceptedAnswer":{"@type":"Answer","text":"Illinois unemployment benefits (WBA) in 2026 are calculated as 47% of your average weekly wage in your two highest-earning quarters, up to a maximum of $693 per week. Benefits last up to 26 weeks."}},
          {"@type":"Question","name":"How long do Illinois unemployment benefits last?","acceptedAnswer":{"@type":"Answer","text":"Illinois unemployment benefits last up to 26 weeks (6 months). Extended benefits may be available during periods of high unemployment."}},
          {"@type":"Question","name":"How do I calculate my Illinois unemployment benefit?","acceptedAnswer":{"@type":"Answer","text":"Illinois pays 47% of your average weekly wage from your two highest-earning base period quarters. The minimum is $51/week and the maximum is $693/week in 2026."}},
          {"@type":"Question","name":"Is Illinois unemployment taxable?","acceptedAnswer":{"@type":"Answer","text":"Yes. Illinois unemployment benefits are subject to federal income tax. Illinois does not tax unemployment benefits at the state level. You can elect to withhold 10% federal tax from your payments."}},
        ]
      }) }} />
      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> ›{' '}
        <a href="/unemployment-calculator" style={{ color:'#b8c8dc' }}>Unemployment Calculator</a> ›{' '}
        Illinois
      </nav>
      <h1 style={{ fontSize:'clamp(26px,4vw,36px)', fontWeight:900, marginBottom:8, color:'#f1f5f9' }}>
        Illinois Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize:17, color:'#94a3b8', marginBottom:20, lineHeight:1.7 }}>
        Estimate your Illinois weekly unemployment benefit (WBA) for 2026.
        Illinois pays <strong style={{ color:'#F5C842' }}>up to $693/week</strong> for up to 26 weeks.
        Benefits = 47% of your average weekly wage in your two highest quarters.
      </p>

      <IlUnemployCalcEmbed />

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:28, fontSize:14, color:'#fde68a' }}>
        Illinois max WBA 2026: <strong>$693/week</strong> · Minimum: $51/week · Duration: up to 26 weeks · No state tax on UI benefits.
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Illinois Weekly Benefit by Wage (2026)</h2>
      <div style={{ overflowX:'auto', marginBottom:32 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:480 }}>
          <thead><tr style={{ background:'rgba(99,102,241,0.12)' }}>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Weekly Wage</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Quarterly Earnings</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Weekly Benefit (WBA)</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Biweekly Payment</th>
          </tr></thead>
          <tbody>{rows.map(([ww,qe,wba,bw])=>(
            <tr key={ww} style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              <td style={{ padding:'10px 14px', fontWeight:600 }}>{ww}</td>
              <td style={{ padding:'10px 14px', color:'#94a3b8' }}>{qe}</td>
              <td style={{ padding:'10px 14px', fontWeight:700, color:'#F5C842' }}>{wba}</td>
              <td style={{ padding:'10px 14px' }}>{bw}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How much is Illinois unemployment in 2026?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Illinois WBA = 47% of your average weekly wage in your two highest base-period quarters, capped at $693/week. The base period is the first four of the last five completed calendar quarters before you file.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>Is Illinois unemployment taxable?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Federal income tax applies to Illinois unemployment benefits — you can elect 10% withholding. Illinois state income tax does NOT apply to unemployment benefits, which is a significant advantage over many other states.</p>
      <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>How long do benefits last in Illinois?</h3>
      <p style={{ color:'#94a3b8', lineHeight:1.7 }}>Up to 26 weeks (6 months). The exact duration depends on your total base-period wages — you must have earned at least 1.6x your highest-quarter wages across the full base period to qualify for the maximum duration.</p>

      <div style={{ borderTop:'2px solid rgba(255,255,255,0.1)', marginTop:40, paddingTop:32 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Other State Unemployment Calculators</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:8, marginBottom:24 }}>
          {[['Texas','texas'],['Florida','florida'],['California','california'],['New York','new-york'],['Pennsylvania','pennsylvania'],['Ohio','ohio'],['Michigan','michigan'],['Georgia','georgia']].map(([n,s])=>(
            <a key={s} href={'/unemployment-calculator/'+s} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Unemployment</a>
          ))}
        </div>
        <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
          <a href="/" style={{ color:'#F5C842', fontSize:14 }}>Free Paycheck Calculator</a>
          <a href="/illinois-paycheck-calculator" style={{ color:'#F5C842', fontSize:14 }}>Illinois Paycheck Calculator</a>
          <a href="/unemployment-calculator" style={{ color:'#F5C842', fontSize:14 }}>All States Unemployment</a>
        </div>
      </div>
    </main>
  )
}
