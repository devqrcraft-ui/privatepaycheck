import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Ohio Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Ohio paycheck calculator 2026. See exact take-home pay after federal + Ohio state tax (up to 3.99%) and FICA. All salary levels. 100% private.',
  keywords: 'ohio paycheck calculator 2026, ohio take home pay, ohio salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/ohio-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,057","$1,899"],["$40,000","$3,333","$2,661","$2,456"],["$50,000","$4,167","$3,213","$2,966"],["$60,000","$5,000","$3,728","$3,442"],["$75,000","$6,250","$4,440","$4,099"],["$100,000","$8,333","$5,655","$5,220"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Ohio income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Ohio top income tax rate is 3.99% in 2026."}},{"@type":"Question","name":"How much is $50,000 take-home in Ohio?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,556/year ($3,213/month) after federal, FICA, and OH state tax."}},{"@type":"Question","name":"Do Ohio cities have income tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most Ohio cities levy a local income tax of 1%–3%. Columbus is 2.5%, Cleveland is 2%. This is withheld from your paycheck."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Ohio Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Ohio Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Ohio state income tax: <strong>up to 3.99%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Ohio state income tax: up to 3.99% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Ohio Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Ohio paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Ohio income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Ohio top income tax rate is 3.99% in 2026.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Ohio?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,556/year ($3,213/month) after federal, FICA, and OH state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Do Ohio cities have income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. Most Ohio cities levy a local income tax of 1%–3%. Columbus is 2.5%, Cleveland is 2%. This is withheld from your paycheck.</p>
    </main>
  )
}
