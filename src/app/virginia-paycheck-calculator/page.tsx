import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Virginia Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Virginia paycheck calculator 2026. See exact take-home pay after federal + Virginia state tax (up to 5.75%) and FICA. All salary levels. 100% private.',
  keywords: 'virginia paycheck calculator 2026, virginia take home pay, virginia salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/virginia-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,011","$1,857"],["$40,000","$3,333","$2,599","$2,399"],["$50,000","$4,167","$3,136","$2,895"],["$60,000","$5,000","$3,635","$3,356"],["$75,000","$6,250","$4,316","$3,984"],["$100,000","$8,333","$5,495","$5,073"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Virginia income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Virginia top income tax rate is 5.75%, which kicks in at just $17,000 of taxable income."}},{"@type":"Question","name":"How much is $50,000 take-home in Virginia?","acceptedAnswer":{"@type":"Answer","text":"Approximately $37,632/year ($3,136/month) after federal, FICA, and VA state tax."}},{"@type":"Question","name":"Is Virginia a good state for taxes?","acceptedAnswer":{"@type":"Answer","text":"Virginia is moderate. The 5.75% top rate is average, but it applies at a very low income threshold."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Virginia Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Virginia Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Virginia state income tax: <strong>up to 5.75%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Virginia state income tax: up to 5.75% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Virginia Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Virginia paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Virginia income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Virginia top income tax rate is 5.75%, which kicks in at just $17,000 of taxable income.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Virginia?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $37,632/year ($3,136/month) after federal, FICA, and VA state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is Virginia a good state for taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Virginia is moderate. The 5.75% top rate is average, but it applies at a very low income threshold.</p>
    </main>
  )
}
