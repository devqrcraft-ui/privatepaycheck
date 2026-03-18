import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Michigan Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Michigan paycheck calculator 2026. See exact take-home pay after federal + Michigan state tax (4.05% flat) and FICA. All salary levels. 100% private.',
  keywords: 'michigan paycheck calculator 2026, michigan take home pay, michigan salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/michigan-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,052","$1,895"],["$40,000","$3,333","$2,655","$2,451"],["$50,000","$4,167","$3,208","$2,961"],["$60,000","$5,000","$3,724","$3,437"],["$75,000","$6,250","$4,437","$4,096"],["$100,000","$8,333","$5,654","$5,219"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Michigan state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"Michigan has a flat 4.05% income tax rate in 2026 (reduced from 4.25%)."}},{"@type":"Question","name":"How much is $50,000 take-home in Michigan?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,496/year ($3,208/month) after federal, FICA, and 4.05% MI state tax."}},{"@type":"Question","name":"Do Michigan cities have income tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Detroit levies 2.4% for residents (1.2% for non-residents). Other cities like Grand Rapids and Lansing have smaller local taxes."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Michigan Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Michigan Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Michigan state income tax: <strong>4.05% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Michigan state income tax: 4.05% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Michigan Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Michigan paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Michigan state income tax rate in 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Michigan has a flat 4.05% income tax rate in 2026 (reduced from 4.25%).</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Michigan?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,496/year ($3,208/month) after federal, FICA, and 4.05% MI state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Do Michigan cities have income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. Detroit levies 2.4% for residents (1.2% for non-residents). Other cities like Grand Rapids and Lansing have smaller local taxes.</p>
    </main>
  )
}
