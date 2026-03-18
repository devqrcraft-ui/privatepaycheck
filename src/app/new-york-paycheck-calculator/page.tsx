import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'New York Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'New York paycheck calculator 2026. See exact take-home after federal, NY state (4%–10.9%), NYC tax (3.078%–3.876%), and FICA. All salary levels.',
  keywords: 'new york paycheck calculator 2026, ny take home pay, new york salary after taxes, nyc paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/new-york-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$1,883','$1,739','$1,608'],
    ['$40,000','$3,333','$2,458','$2,256','$2,075'],
    ['$50,000','$4,167','$2,992','$2,733','$2,495'],
    ['$60,000','$5,000','$3,487','$3,163','$2,871'],
    ['$75,000','$6,250','$4,142','$3,713','$3,326'],
    ['$100,000','$8,333','$5,217','$4,617','$4,062'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is taken out of a New York paycheck in 2026?","acceptedAnswer":{"@type":"Answer","text":"New York withholds federal income tax, FICA (7.65%), NY state income tax (4%–10.9%), and if you live in NYC, an additional NYC tax (3.078%–3.876%). Total effective rate for a $75,000 salary is roughly 34%–38%."}},
          {"@type":"Question","name":"What is the NYC income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"NYC income tax ranges from 3.078% to 3.876% in 2026, on top of NY state tax. Only NYC residents pay this — workers who live outside NYC but work there do not pay NYC tax."}},
          {"@type":"Question","name":"How much is $75,000 take-home in New York City?","acceptedAnswer":{"@type":"Answer","text":"A $75,000 salary in NYC results in approximately $44,556/year take-home ($3,713/month) for a single filer in 2026 after federal, NY state, and NYC taxes plus FICA."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › New York Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>New York Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>New York has both <strong>NY state tax (up to 10.9%)</strong> and an extra <strong>NYC tax (up to 3.876%)</strong> for city residents. See your exact take-home below or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a>.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>
        NYC residents pay 3 layers: federal + NY state + NYC local tax. Non-NYC NY residents skip the NYC layer.
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>New York Take-Home Pay — State vs NYC (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>NY State Net/mo</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>NYC Net/mo</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,nyc,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px', color: '#c00', fontWeight: 600 }}>{nyc}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact New York paycheck →</a>
      </div>
    </main>
  )
}
