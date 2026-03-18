import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Connecticut Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Connecticut paycheck calculator 2026. See exact take-home pay after federal + Connecticut state tax (3%–6.99%) and FICA. All salary levels. 100% private.',
  keywords: 'connecticut paycheck calculator 2026, connecticut take home pay, connecticut salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/connecticut-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$1,998","$1,844"],["$40,000","$3,333","$2,585","$2,386"],["$50,000","$4,167","$3,118","$2,878"],["$60,000","$5,000","$3,616","$3,338"],["$75,000","$6,250","$4,294","$3,964"],["$100,000","$8,333","$5,468","$5,047"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Connecticut income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Connecticut has graduated rates from 3% to 6.99% in 2026."}},{"@type":"Question","name":"How much is $75,000 take-home in Connecticut?","acceptedAnswer":{"@type":"Answer","text":"Approximately $51,528/year ($4,294/month) after federal, FICA, and CT state tax."}},{"@type":"Question","name":"Does Connecticut have a payroll tax?","acceptedAnswer":{"@type":"Answer","text":"Connecticut has a Paid Family and Medical Leave payroll tax of 0.5% withheld from employee wages."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Connecticut Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Connecticut Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Connecticut state income tax: <strong>3%–6.99%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Connecticut state income tax: 3%–6.99% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Connecticut Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Connecticut paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Connecticut income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Connecticut has graduated rates from 3% to 6.99% in 2026.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $75,000 take-home in Connecticut?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $51,528/year ($4,294/month) after federal, FICA, and CT state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Connecticut have a payroll tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Connecticut has a Paid Family and Medical Leave payroll tax of 0.5% withheld from employee wages.</p>
    </main>
  )
}
