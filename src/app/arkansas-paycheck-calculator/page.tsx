import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Arkansas Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Arkansas paycheck calculator 2026. See exact take-home pay after federal + Arkansas state tax (up to 4.4%) and FICA. All salary levels. 100% private.',
  keywords: 'arkansas paycheck calculator 2026, arkansas take home pay, arkansas salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/arkansas-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,048","$1,890"],["$40,000","$3,333","$2,647","$2,444"],["$50,000","$4,167","$3,199","$2,953"],["$60,000","$5,000","$3,714","$3,429"],["$75,000","$6,250","$4,427","$4,087"],["$100,000","$8,333","$5,641","$5,208"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Arkansas income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Arkansas top rate is 4.4% in 2026, reduced from previous years."}},{"@type":"Question","name":"How much is $50,000 take-home in Arkansas?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,388/year ($3,199/month) after federal, FICA, and AR state tax."}},{"@type":"Question","name":"Is Arkansas reducing income taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Arkansas has been aggressively cutting income tax rates and aims to continue reductions."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Arkansas Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Arkansas Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Arkansas state income tax: <strong>up to 4.4%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Arkansas state income tax: up to 4.4% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Arkansas Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Arkansas paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Arkansas income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Arkansas top rate is 4.4% in 2026, reduced from previous years.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Arkansas?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,388/year ($3,199/month) after federal, FICA, and AR state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is Arkansas reducing income taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. Arkansas has been aggressively cutting income tax rates and aims to continue reductions.</p>
    </main>
  )
}
