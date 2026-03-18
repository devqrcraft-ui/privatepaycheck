import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Louisiana Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Louisiana paycheck calculator 2026. See exact take-home pay after federal + Louisiana state tax (3% flat) and FICA. All salary levels. 100% private.',
  keywords: 'louisiana paycheck calculator 2026, louisiana take home pay, louisiana salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/louisiana-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,079","$1,919"],["$40,000","$3,333","$2,688","$2,482"],["$50,000","$4,167","$3,246","$2,996"],["$60,000","$5,000","$3,766","$3,477"],["$75,000","$6,250","$4,487","$4,142"],["$100,000","$8,333","$5,715","$5,275"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Louisiana income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Louisiana moved to a flat 3% income tax rate in 2025, one of the lowest in the South."}},{"@type":"Question","name":"How much is $50,000 take-home in Louisiana?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,952/year ($3,246/month) after federal, FICA, and LA state tax."}},{"@type":"Question","name":"Why did Louisiana cut income taxes?","acceptedAnswer":{"@type":"Answer","text":"Louisiana cut rates and eliminated its top bracket to boost economic competitiveness with neighboring no-tax states like Texas."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Louisiana Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Louisiana Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Louisiana state income tax: <strong>3% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Louisiana state income tax: 3% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Louisiana Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Louisiana paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Louisiana income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Louisiana moved to a flat 3% income tax rate in 2025, one of the lowest in the South.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Louisiana?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,952/year ($3,246/month) after federal, FICA, and LA state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Why did Louisiana cut income taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Louisiana cut rates and eliminated its top bracket to boost economic competitiveness with neighboring no-tax states like Texas.</p>
    </main>
  )
}
