import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Paycheck Calculator Methodology 2026 — How We Calculate | PrivatePaycheck',
  description: 'How PrivatePaycheck calculates take-home pay. All formulas use 2026 IRS tax brackets, standard deductions, FICA rates, and state tax tables sourced directly from official government publications.',
  alternates: { canonical: 'https://www.privatepaycheck.com/methodology' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}><a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Methodology</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>How We Calculate Paycheck Take-Home Pay</h1>
      <p style={{ fontSize: 17, color:'#c8d4e8', marginBottom: 32 }}>All calculations on PrivatePaycheck use official 2026 IRS and state tax authority data. Every formula runs entirely in your browser — we never see your numbers.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Data Sources</h2>
      <ul style={{ color:'#c8d4e8', lineHeight: 2, paddingLeft: 20, marginBottom: 32 }}>
        <li><strong>Federal tax brackets:</strong> IRS Rev. Proc. 2025-xx (2026 inflation adjustments)</li>
        <li><strong>Standard deduction 2026:</strong> $15,000 single / $30,000 married filing jointly</li>
        <li><strong>FICA rates:</strong> Social Security 6.2% (wage base $176,100) + Medicare 1.45%</li>
        <li><strong>State income tax rates:</strong> Each state Department of Revenue official rate schedules</li>
        <li><strong>State SDI/SUI:</strong> State workforce agency publications</li>
      </ul>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Federal Tax Brackets 2026 (Single Filer)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Rate</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Taxable Income Range</th>
        </tr></thead>
        <tbody>{[
          ['10%','$0 – $11,925'],
          ['12%','$11,926 – $48,475'],
          ['22%','$48,476 – $103,350'],
          ['24%','$103,351 – $197,300'],
          ['32%','$197,301 – $250,525'],
          ['35%','$250,526 – $626,350'],
          ['37%','Over $626,350'],
        ].map(([r,range]) => (
          <tr key={r} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{r}</td>
            <td style={{ padding: '10px 14px' }}>{range}</td>
          </tr>
        ))}</tbody>
      </table>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Calculation Formula</h2>
      <ol style={{ color:'#c8d4e8', lineHeight: 2, paddingLeft: 20, marginBottom: 32 }}>
        <li>Start with <strong>gross annual salary</strong></li>
        <li>Subtract <strong>pre-tax deductions</strong> (401k, HSA, health insurance premiums)</li>
        <li>Subtract <strong>standard deduction</strong> ($15,000 single / $30,000 MFJ) to get taxable income</li>
        <li>Apply <strong>federal tax brackets</strong> progressively</li>
        <li>Calculate <strong>FICA</strong>: Social Security 6.2% on first $176,100 + Medicare 1.45% on all wages</li>
        <li>Apply <strong>state income tax</strong> using each state official rate schedule</li>
        <li>Apply any <strong>state-specific payroll taxes</strong> (CA SDI, NJ UI, NY SDI, etc.)</li>
        <li>Result = <strong>net take-home pay</strong></li>
      </ol>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Important Limitations</h2>
      <p style={{ color:'#c8d4e8', lineHeight: 1.7, marginBottom: 16 }}>Our calculators provide estimates for <strong>single filers taking the standard deduction</strong> unless otherwise specified. Actual withholding may differ based on W-4 elections, pre-tax benefit deductions, supplemental wages, and local taxes not covered in our state tables.</p>
      <p style={{ color:'#c8d4e8', lineHeight: 1.7, marginBottom: 32 }}>This tool is for educational and planning purposes only and does not constitute tax advice. For precise withholding, consult a tax professional or use the <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener" style={{ color:'#F5C842' }}>IRS Tax Withholding Estimator</a>.</p>

      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Use the free paycheck calculator →</a>
        {' · '}
        <a href="/blog" style={{ color:'#F5C842', fontWeight: 700 }}>Read tax guides →</a>
      </div>
    </main>
  )
}
