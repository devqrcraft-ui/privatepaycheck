import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Delaware Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Delaware paycheck calculator 2026. See exact take-home pay after federal + Delaware state tax (up to 6.6%) and FICA. All salary levels. 100% private.',
  keywords: 'delaware paycheck calculator 2026, delaware take home pay, delaware salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/delaware-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$1,994","$1,840"],["$40,000","$3,333","$2,579","$2,381"],["$50,000","$4,167","$3,111","$2,872"],["$60,000","$5,000","$3,607","$3,329"],["$75,000","$6,250","$4,283","$3,954"],["$100,000","$8,333","$5,454","$5,034"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Delaware income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Delaware top income tax rate is 6.6% in 2026, with graduated brackets starting at 2.2%."}},{"@type":"Question","name":"How much is $50,000 take-home in Delaware?","acceptedAnswer":{"@type":"Answer","text":"Approximately $37,332/year ($3,111/month) after federal, FICA, and DE state tax."}},{"@type":"Question","name":"Does Delaware have sales tax?","acceptedAnswer":{"@type":"Answer","text":"No. Delaware has no sales tax, which offsets the income tax burden for many residents."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Delaware Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Delaware Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Delaware state income tax: <strong>up to 6.6%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Delaware state income tax: up to 6.6% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Delaware Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Delaware paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Delaware income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Delaware top income tax rate is 6.6% in 2026, with graduated brackets starting at 2.2%.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Delaware?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $37,332/year ($3,111/month) after federal, FICA, and DE state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Delaware have sales tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>No. Delaware has no sales tax, which offsets the income tax burden for many residents.</p>
    </main>
  )
}
