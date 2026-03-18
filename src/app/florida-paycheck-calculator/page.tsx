import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Florida Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Florida paycheck calculator 2026. No state income tax. See exact take-home pay after federal tax and FICA. All salary levels. 100% private.',
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
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
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
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Florida Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Florida has <strong>no state income tax</strong>. Your paycheck deductions are federal income tax and FICA only — making Florida one of the best states for take-home pay.</p>
      <div style={{ background: '#d4edda', border: '1px solid #28a745', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#155724' }}>
        No Florida state income tax in 2026. Same take-home as Texas, Nevada, and Washington.
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Florida Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Florida paycheck →</a>
      </div>
    </main>
  )
}
