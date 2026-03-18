import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Indiana Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Indiana paycheck calculator 2026. See exact take-home pay after federal + Indiana state tax (3.05% flat) and FICA. All salary levels. 100% private.',
  keywords: 'indiana paycheck calculator 2026, indiana take home pay, indiana salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/indiana-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,077","$1,918"],["$40,000","$3,333","$2,685","$2,479"],["$50,000","$4,167","$3,242","$2,993"],["$60,000","$5,000","$3,762","$3,473"],["$75,000","$6,250","$4,481","$4,137"],["$100,000","$8,333","$5,707","$5,268"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Indiana income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Indiana has a flat 3.05% income tax rate in 2026, reduced from 3.15%."}},{"@type":"Question","name":"How much is $50,000 take-home in Indiana?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,904/year ($3,242/month) after federal, FICA, and IN state tax."}},{"@type":"Question","name":"Do Indiana counties have income tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most Indiana counties levy additional income taxes ranging from 0.5% to 3.38%. Your total rate depends on your county of residence."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Indiana Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Indiana Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Indiana state income tax: <strong>3.05% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Indiana state income tax: 3.05% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Indiana Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Indiana paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Indiana income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Indiana has a flat 3.05% income tax rate in 2026, reduced from 3.15%.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Indiana?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,904/year ($3,242/month) after federal, FICA, and IN state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Do Indiana counties have income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. Most Indiana counties levy additional income taxes ranging from 0.5% to 3.38%. Your total rate depends on your county of residence.</p>
    </main>
  )
}
