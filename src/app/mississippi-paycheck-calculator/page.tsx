import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Mississippi Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Mississippi paycheck calculator 2026. See exact take-home pay after federal + Mississippi state tax (4.7% flat) and FICA. All salary levels. 100% private.',
  keywords: 'mississippi paycheck calculator 2026, mississippi take home pay, mississippi salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/mississippi-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,038","$1,881"],["$40,000","$3,333","$2,633","$2,430"],["$50,000","$4,167","$3,178","$2,934"],["$60,000","$5,000","$3,686","$3,403"],["$75,000","$6,250","$4,387","$4,050"],["$100,000","$8,333","$5,584","$5,154"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Mississippi income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Mississippi has a flat 4.7% income tax rate in 2026, phasing toward elimination."}},{"@type":"Question","name":"How much is $50,000 take-home in Mississippi?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,136/year ($3,178/month) after federal, FICA, and MS state tax."}},{"@type":"Question","name":"Is Mississippi eliminating income tax?","acceptedAnswer":{"@type":"Answer","text":"Mississippi passed legislation to eliminate its income tax — the 4.7% rate will continue declining until fully phased out."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Mississippi Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Mississippi Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Mississippi state income tax: <strong>4.7% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Mississippi state income tax: 4.7% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Mississippi Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Mississippi paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Mississippi income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Mississippi has a flat 4.7% income tax rate in 2026, phasing toward elimination.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Mississippi?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,136/year ($3,178/month) after federal, FICA, and MS state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is Mississippi eliminating income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Mississippi passed legislation to eliminate its income tax — the 4.7% rate will continue declining until fully phased out.</p>
    </main>
  )
}
