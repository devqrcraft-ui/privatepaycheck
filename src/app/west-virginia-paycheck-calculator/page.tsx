import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'West Virginia Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'West Virginia paycheck calculator 2026. See exact take-home pay after federal + West Virginia state tax (up to 5.12%) and FICA. All salary levels. 100% private.',
  keywords: 'west virginia paycheck calculator 2026, west virginia take home pay, west virginia salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/west-virginia-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,033","$1,876"],["$40,000","$3,333","$2,626","$2,424"],["$50,000","$4,167","$3,170","$2,926"],["$60,000","$5,000","$3,678","$3,395"],["$75,000","$6,250","$4,380","$4,044"],["$100,000","$8,333","$5,576","$5,147"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is West Virginia income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"West Virginia top rate is 5.12% in 2026, reduced from 6.5%."}},{"@type":"Question","name":"How much is $50,000 take-home in West Virginia?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,040/year ($3,170/month) after federal, FICA, and WV state tax."}},{"@type":"Question","name":"Is West Virginia reducing income taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. WV is aggressively cutting rates and aims to eliminate income tax entirely over the next decade."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › West Virginia Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>West Virginia Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>West Virginia state income tax: <strong>up to 5.12%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>West Virginia state income tax: up to 5.12% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>West Virginia Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact West Virginia paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is West Virginia income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>West Virginia top rate is 5.12% in 2026, reduced from 6.5%.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in West Virginia?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,040/year ($3,170/month) after federal, FICA, and WV state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is West Virginia reducing income taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. WV is aggressively cutting rates and aims to eliminate income tax entirely over the next decade.</p>
    </main>
  )
}
