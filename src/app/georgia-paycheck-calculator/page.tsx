import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Georgia Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Georgia paycheck calculator 2026. See exact take-home pay after federal + Georgia state tax (5.39% flat) and FICA. All salary levels. 100% private.',
  keywords: 'georgia paycheck calculator 2026, georgia take home pay, georgia salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/georgia-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,029","$1,873"],["$40,000","$3,333","$2,621","$2,419"],["$50,000","$4,167","$3,163","$2,919"],["$60,000","$5,000","$3,668","$3,385"],["$75,000","$6,250","$4,366","$4,030"],["$100,000","$8,333","$5,558","$5,131"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Georgia income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Georgia transitioned to a flat 5.39% income tax rate in 2024, phasing down toward 4.99% over time."}},{"@type":"Question","name":"How much is $60,000 take-home in Georgia?","acceptedAnswer":{"@type":"Answer","text":"Approximately $44,016/year ($3,668/month) after federal, FICA, and GA state tax."}},{"@type":"Question","name":"Is Georgia reducing income tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Georgia passed legislation to gradually reduce its flat rate toward 4.99%."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Georgia Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Georgia Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Georgia state income tax: <strong>5.39% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Georgia state income tax: 5.39% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Georgia Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Georgia paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Georgia income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Georgia transitioned to a flat 5.39% income tax rate in 2024, phasing down toward 4.99% over time.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in Georgia?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $44,016/year ($3,668/month) after federal, FICA, and GA state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is Georgia reducing income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. Georgia passed legislation to gradually reduce its flat rate toward 4.99%.</p>
    </main>
  )
}
