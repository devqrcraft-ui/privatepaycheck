import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Nevada Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Nevada paycheck calculator 2026. See exact take-home pay after federal and FICA. All salary levels. 100% private.',
  keywords: 'nevada paycheck calculator 2026, nevada take home pay, nevada salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/nevada-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,153","$1,971"],["$40,000","$3,333","$2,783","$2,572"],["$50,000","$4,167","$3,360","$3,103"],["$60,000","$5,000","$3,912","$3,612"],["$75,000","$6,250","$4,677","$4,318"],["$100,000","$8,333","$5,958","$5,498"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Nevada have state income tax?","acceptedAnswer":{"@type":"Answer","text":"No. Nevada has no state income tax. Workers only pay federal income tax and FICA — same take-home as Texas and Florida."}},{"@type":"Question","name":"How much is $60,000 take-home in Nevada?","acceptedAnswer":{"@type":"Answer","text":"A $60,000 salary in Nevada results in approximately $46,944/year ($3,912/month) after federal taxes and FICA."}},{"@type":"Question","name":"Why do people move to Nevada for taxes?","acceptedAnswer":{"@type":"Answer","text":"No state income tax, no inheritance tax, and relatively low property taxes make Nevada one of the most tax-friendly states for workers and retirees."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Nevada Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Nevada Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}><strong>No state income tax</strong> in Nevada — only federal income tax and FICA are withheld. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#d4edda', border: '1px solid #28a745', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#155724' }}>No Nevada state income tax in 2026. Only federal withholding applies.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Nevada Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Nevada paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Nevada have state income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>No. Nevada has no state income tax. Workers only pay federal income tax and FICA — same take-home as Texas and Florida.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in Nevada?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>A $60,000 salary in Nevada results in approximately $46,944/year ($3,912/month) after federal taxes and FICA.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Why do people move to Nevada for taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>No state income tax, no inheritance tax, and relatively low property taxes make Nevada one of the most tax-friendly states for workers and retirees.</p>
    </main>
  )
}
