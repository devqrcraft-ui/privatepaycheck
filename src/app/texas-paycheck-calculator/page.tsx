import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Texas Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Texas paycheck calculator 2026. No state income tax — see exact take-home after federal tax and FICA only. All salary levels. 100% private, no signup.',
  keywords: 'texas paycheck calculator 2026, texas take home pay, texas salary after taxes, tx paycheck no state tax',
  alternates: { canonical: 'https://www.privatepaycheck.com/texas-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$2,153','$1,994'],
    ['$40,000','$3,333','$2,783','$2,572'],
    ['$50,000','$4,167','$3,360','$3,103'],
    ['$60,000','$5,000','$3,912','$3,612'],
    ['$75,000','$6,250','$4,677','$4,318'],
    ['$100,000','$8,333','$5,958','$5,498'],
    ['$150,000','$12,500','$8,417','$7,770'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Does Texas have state income tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"No. Texas has no state income tax. Workers only pay federal income tax and FICA (Social Security 6.2% + Medicare 1.45%). This makes Texas one of the highest take-home pay states in the US."}},
          {"@type":"Question","name":"How much is $60,000 take-home pay in Texas?","acceptedAnswer":{"@type":"Answer","text":"A $60,000 salary in Texas results in approximately $46,944/year take-home ($3,912/month) for a single filer in 2026, after federal income tax and FICA. No state tax is withheld."}},
          {"@type":"Question","name":"How much of my Texas paycheck goes to taxes?","acceptedAnswer":{"@type":"Answer","text":"In Texas, only federal taxes are withheld: federal income tax (10%–22% for most earners) plus FICA 7.65%. Total effective withholding for a $50,000 salary is roughly 19%–21%."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Texas Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Texas Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Texas has <strong>no state income tax</strong> — you only pay federal income tax and FICA. This means Texans keep significantly more of every paycheck compared to residents of CA, NY, or IL.</p>
      <div style={{ background: '#d4edda', border: '1px solid #28a745', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#155724' }}>
        No Texas state income tax in 2026. Only federal withholding applies. Compare: at $75k salary, Texas take-home is ~$8,700/year MORE than California.
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Texas Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Texas vs California Take-Home Comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Texas Annual Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>California Annual Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>TX Advantage</th>
        </tr></thead>
        <tbody>{[
          ['$50,000','$40,320','$37,404','+$2,916'],
          ['$75,000','$56,124','$52,500','+$3,624'],
          ['$100,000','$71,496','$66,480','+$5,016'],
          ['$150,000','$101,004','$91,344','+$9,660'],
        ].map(([s,tx,ca,diff]) => (
          <tr key={s} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{tx}</td>
            <td style={{ padding: '10px 14px', color: '#888' }}>{ca}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#28a745' }}>{diff}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Texas paycheck →</a>
      </div>
    
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{n} Calculator</a>
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
