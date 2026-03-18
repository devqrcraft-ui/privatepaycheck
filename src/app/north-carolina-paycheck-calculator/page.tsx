import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'North Carolina Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'North Carolina paycheck calculator 2026. See exact take-home pay after federal + North Carolina state tax (4.5% flat) and FICA. All salary levels. 100% private.',
  keywords: 'north carolina paycheck calculator 2026, north carolina take home pay, north carolina salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/north-carolina-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,044","$1,887"],["$40,000","$3,333","$2,645","$2,442"],["$50,000","$4,167","$3,196","$2,950"],["$60,000","$5,000","$3,710","$3,425"],["$75,000","$6,250","$4,421","$4,081"],["$100,000","$8,333","$5,633","$5,200"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is North Carolina income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"North Carolina has a flat 4.5% income tax rate in 2026, continuing a trend of rate reductions (was 5.25% in 2021)."}},{"@type":"Question","name":"How much is $60,000 take-home in North Carolina?","acceptedAnswer":{"@type":"Answer","text":"Approximately $44,520/year ($3,710/month) after federal, FICA, and 4.5% NC state tax."}},{"@type":"Question","name":"Is North Carolina reducing income tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. NC has been steadily cutting its rate and aims to phase it out entirely by 2030 if revenue targets are met."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › North Carolina Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>North Carolina Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>North Carolina state income tax: <strong>4.5% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>North Carolina state income tax: 4.5% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>North Carolina Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact North Carolina paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is North Carolina income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>North Carolina has a flat 4.5% income tax rate in 2026, continuing a trend of rate reductions (was 5.25% in 2021).</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in North Carolina?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $44,520/year ($3,710/month) after federal, FICA, and 4.5% NC state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is North Carolina reducing income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. NC has been steadily cutting its rate and aims to phase it out entirely by 2030 if revenue targets are met.</p>
    </main>
  )
}
