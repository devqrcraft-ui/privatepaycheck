import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Florida Paycheck Calculator 2026 — No State Tax, See Exact Take-Home Pay',
  description: 'Florida paycheck calculator 2026. No state income tax — $60k salary keeps ~$47,600/year after federal tax and FICA only. Instant results, no signup.',
  keywords: 'florida paycheck calculator 2026, florida take home pay, florida salary after taxes, fl paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/florida-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$2,153','$1,994'],
    ['$40,000','$3,333','$2,783','$2,572'],
    ['$50,000','$4,167','$3,360','$3,103'],
    ['$60,000','$5,000','$3,912','$3,612'],
    ['$75,000','$6,250','$4,677','$4,318'],
    ['$100,000','$8,333','$5,958','$5,498'],
    ['$150,000','$12,500','$8,250','$7,612'],
    ['$200,000','$16,667','$10,417','$9,583'],
    ['$500,000','$41,667','$23,750','$21,875'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Does Florida have state income tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"No. Florida has no state income tax. Workers only pay federal income tax and FICA. Florida is consistently one of the top states for take-home pay in the US."}},
          {"@type":"Question","name":"How much is $50,000 take-home pay in Florida 2026?","acceptedAnswer":{"@type":"Answer","text":"A $50,000 salary in Florida gives approximately $40,320/year take-home ($3,360/month) for a single filer after federal income tax and FICA only."}},
          {"@type":"Question","name":"What taxes are taken out of a Florida paycheck?","acceptedAnswer":{"@type":"Answer","text":"Only federal taxes: federal income tax (10%–22% for most earners) and FICA (Social Security 6.2% + Medicare 1.45%). No state income tax, no state SDI."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Florida Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>Florida Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>Florida has <strong>no state income tax</strong>. Your paycheck deductions are federal income tax and FICA only — making Florida one of the best states for take-home pay.</p>
      <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#6ee7b7' }}>
        No Florida state income tax in 2026. Same take-home as Texas, Nevada, and Washington.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>Florida has no state income tax. Use the calculator for your exact federal + FICA take-home.</div>
        <a href="/?state=florida" style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: 'linear-gradient(135deg,#f59e0b,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>
           Calculate My Florida Paycheck →
        </a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Florida Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Florida paycheck →</a>
      </div>
    
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#1a56db', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color: '#1a56db', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color: '#1a56db', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color: '#1a56db', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    </main>
  )
}
