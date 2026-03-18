import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Iowa Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Iowa paycheck calculator 2026. See exact take-home pay after federal + Iowa state tax (3.8% flat) and FICA. All salary levels. 100% private.',
  keywords: 'iowa paycheck calculator 2026, iowa take home pay, iowa salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/iowa-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,060","$1,902"],["$40,000","$3,333","$2,665","$2,460"],["$50,000","$4,167","$3,218","$2,970"],["$60,000","$5,000","$3,735","$3,447"],["$75,000","$6,250","$4,448","$4,107"],["$100,000","$8,333","$5,667","$5,231"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Iowa income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Iowa moved to a flat 3.8% income tax rate in 2026, down from graduated rates."}},{"@type":"Question","name":"How much is $50,000 take-home in Iowa?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,616/year ($3,218/month) after federal, FICA, and IA state tax."}},{"@type":"Question","name":"Is Iowa eliminating income tax?","acceptedAnswer":{"@type":"Answer","text":"Iowa is phasing down toward a 3.5% flat rate in future years."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Iowa Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Iowa Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Iowa state income tax: <strong>3.8% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Iowa state income tax: 3.8% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Iowa Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Iowa paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Iowa income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Iowa moved to a flat 3.8% income tax rate in 2026, down from graduated rates.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Iowa?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $38,616/year ($3,218/month) after federal, FICA, and IA state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is Iowa eliminating income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Iowa is phasing down toward a 3.5% flat rate in future years.</p>
    </main>
  )
}
