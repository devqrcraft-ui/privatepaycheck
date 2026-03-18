import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Illinois Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Illinois paycheck calculator 2026. Flat 4.95% state income tax. See exact take-home after federal, IL state, and FICA. All salary levels. 100% private.',
  keywords: 'illinois paycheck calculator 2026, illinois take home pay, illinois salary after taxes, il paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/illinois-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$2,029','$1,873'],
    ['$40,000','$3,333','$2,633','$2,430'],
    ['$50,000','$4,167','$3,188','$2,942'],
    ['$60,000','$5,000','$3,700','$3,415'],
    ['$75,000','$6,250','$4,406','$4,067'],
    ['$100,000','$8,333','$5,617','$5,185'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"What is the Illinois income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"Illinois has a flat 4.95% state income tax rate in 2026. Unlike most states, Illinois uses a single flat rate for all income levels — no brackets."}},
          {"@type":"Question","name":"How much is taken out of an Illinois paycheck?","acceptedAnswer":{"@type":"Answer","text":"Illinois withholds federal income tax, FICA (7.65%), and flat 4.95% IL state tax. On a $60,000 salary, total effective withholding is roughly 26%–28% for a single filer."}},
          {"@type":"Question","name":"How much is $60,000 take-home in Illinois 2026?","acceptedAnswer":{"@type":"Answer","text":"A $60,000 salary in Illinois results in approximately $44,400/year take-home ($3,700/month) for a single filer after federal income tax, FICA, and 4.95% IL state tax."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Illinois Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Illinois Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Illinois uses a <strong>flat 4.95% state income tax</strong> — the same rate for every income level. Simple to calculate, and lower than California or New York for high earners.</p>
      <div style={{ background: '#f0f4ff', border: '1px solid #1a56db', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>
        IL flat tax 2026: 4.95% on all income. No brackets. No local income tax except Chicago (none for wages).
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Illinois Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Illinois paycheck →</a>
      </div>
    </main>
  )
}
