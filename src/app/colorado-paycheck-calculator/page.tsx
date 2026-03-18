import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Colorado Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Colorado paycheck calculator 2026. See exact take-home pay after federal + Colorado state tax (4.4% flat) and FICA. All salary levels. 100% private.',
  keywords: 'colorado paycheck calculator 2026, colorado take home pay, colorado salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/colorado-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,048","$1,890"],["$40,000","$3,333","$2,650","$2,446"],["$50,000","$4,167","$3,202","$2,956"],["$60,000","$5,000","$3,718","$3,432"],["$75,000","$6,250","$4,430","$4,089"],["$100,000","$8,333","$5,645","$5,211"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Colorado state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"Colorado has a flat 4.4% income tax rate in 2026."}},{"@type":"Question","name":"How much is $60,000 take-home in Colorado?","acceptedAnswer":{"@type":"Answer","text":"Approximately $44,616/year ($3,718/month) after federal, FICA, and 4.4% CO state tax for a single filer."}},{"@type":"Question","name":"Does Colorado have local income taxes?","acceptedAnswer":{"@type":"Answer","text":"Some Colorado cities (Denver, Aurora) levy a small flat occupational privilege tax of $5.75/month, but no major local income tax."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Colorado Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Colorado Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Colorado state income tax: <strong>4.4% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Colorado state income tax: 4.4% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Colorado Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Colorado paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Colorado state income tax rate in 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Colorado has a flat 4.4% income tax rate in 2026.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in Colorado?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $44,616/year ($3,718/month) after federal, FICA, and 4.4% CO state tax for a single filer.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Colorado have local income taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Some Colorado cities (Denver, Aurora) levy a small flat occupational privilege tax of $5.75/month, but no major local income tax.</p>
    </main>
  )
}
