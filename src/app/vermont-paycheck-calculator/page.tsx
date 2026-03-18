import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Vermont Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Vermont paycheck calculator 2026. See exact take-home pay after federal + Vermont state tax (up to 8.75%) and FICA. All salary levels. 100% private.',
  keywords: 'vermont paycheck calculator 2026, vermont take home pay, vermont salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/vermont-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$1,941","$1,792"],["$40,000","$3,333","$2,495","$2,303"],["$50,000","$4,167","$3,007","$2,776"],["$60,000","$5,000","$3,478","$3,211"],["$75,000","$6,250","$4,115","$3,798"],["$100,000","$8,333","$5,186","$4,788"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Vermont income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Vermont top income tax rate is 8.75% in 2026."}},{"@type":"Question","name":"How much is $60,000 take-home in Vermont?","acceptedAnswer":{"@type":"Answer","text":"Approximately $41,736/year ($3,478/month) after federal, FICA, and VT state tax."}},{"@type":"Question","name":"Does Vermont tax Social Security?","acceptedAnswer":{"@type":"Answer","text":"Vermont partially taxes Social Security — lower-income residents may be exempt."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Vermont Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Vermont Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Vermont state income tax: <strong>up to 8.75%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Vermont state income tax: up to 8.75% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Vermont Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Vermont paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Vermont income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Vermont top income tax rate is 8.75% in 2026.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in Vermont?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $41,736/year ($3,478/month) after federal, FICA, and VT state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Vermont tax Social Security?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Vermont partially taxes Social Security — lower-income residents may be exempt.</p>
    </main>
  )
}
