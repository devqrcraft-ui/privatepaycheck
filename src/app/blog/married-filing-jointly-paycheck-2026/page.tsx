import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Married Filing Jointly Paycheck Calculator 2026 | PrivatePaycheck',
  description: 'How does married filing jointly affect your paycheck in 2026? See take-home pay for dual-income households. Standard deduction $30,000 for MFJ.',
  keywords: 'married filing jointly paycheck 2026, married take home pay calculator, MFJ standard deduction 2026, married couple paycheck after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/married-filing-jointly-paycheck-2026' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the standard deduction for married filing jointly in 2026?","acceptedAnswer":{"@type":"Answer","text":"The standard deduction for married filing jointly (MFJ) in 2026 is $30,000 — double the single filer amount of $15,000. This significantly reduces the taxable income for married couples."}},{"@type":"Question","name":"Does filing jointly lower my paycheck withholding?","acceptedAnswer":{"@type":"Answer","text":"Yes. When you file W-4 as married filing jointly, your employer withholds less federal income tax per paycheck because the IRS assumes you will claim the larger $30,000 standard deduction. Your take-home pay is higher each period."}},{"@type":"Question","name":"How much less tax do married couples pay vs single?","acceptedAnswer":{"@type":"Answer","text":"A married couple each earning $60,000 ($120k combined) filing jointly typically pays $3,000–$6,000 less in federal income tax than if each filed as single. The marriage bonus is largest when incomes are unequal."}},{"@type":"Question","name":"What is the marriage penalty in 2026?","acceptedAnswer":{"@type":"Answer","text":"A marriage penalty occurs when two high earners filing jointly pay more tax than they would as single filers. In 2026, this can occur when combined income exceeds $400,000 and both earn similar amounts."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › Married Filing Jointly Paycheck</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Married Filing Jointly Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>Filing as <strong>married filing jointly (MFJ)</strong> gives you a <strong>$30,000 standard deduction</strong> in 2026 — double the single amount. This directly increases your paycheck take-home.</p>

      <div style={{ background: '#d4edda', border: '1px solid #28a745', borderRadius: 8, padding: '14px 18px', marginBottom: 28 }}>
        <strong>Key 2026 MFJ numbers:</strong> Standard deduction $30,000 · Top bracket 37% starts at $731,200 · 22% bracket starts at $96,950 combined
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Single vs Married Filing Jointly — Tax Comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Combined Income</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Tax (Both Single)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Tax (MFJ)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>MFJ Savings</th>
        </tr></thead>
        <tbody>{[
          ['$80,000 ($40k each)','$8,756','$5,528','+$3,228'],
          ['$100,000 ($50k each)','$12,880','$8,428','+$4,452'],
          ['$120,000 ($60k each)','$16,680','$12,228','+$4,452'],
          ['$150,000 ($75k each)','$24,156','$19,228','+$4,928'],
          ['$200,000 ($100k each)','$38,724','$34,148','+$4,576'],
          ['$200,000 ($150k+$50k)','$35,056','$28,928','+$6,128'],
        ].map(([inc,s,m,sav]) => (
          <tr key={inc} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{inc}</td>
            <td style={{ padding: '10px 14px', color: '#c00' }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#1a56db', fontWeight: 700 }}>{m}</td>
            <td style={{ padding: '10px 14px', color: '#28a745', fontWeight: 700 }}>{sav}</td>
          </tr>
        ))}</tbody>
      </table>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>How to Update Your W-4 After Marriage</h2>
      <ol style={{ color: '#444', lineHeight: 2, paddingLeft: 20, marginBottom: 32 }}>
        <li>Get a new W-4 form from your employer or download from IRS.gov</li>
        <li>Check box for <strong>Married filing jointly</strong> in Step 1(c)</li>
        <li>If both spouses work: use the IRS withholding estimator or check Step 2 box</li>
        <li>Submit to your payroll/HR department — takes effect next paycheck</li>
      </ol>

      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your married filing jointly take-home pay →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['$150k After Taxes','/blog/150k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
