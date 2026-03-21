import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Nurse Paycheck Calculator 2026 — RN Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'How much do nurses take home after taxes in 2026? RN average salary $77,600. See take-home pay by state, shift differentials, and OT impact.',
  keywords: 'nurse paycheck calculator 2026, rn take home pay, nurse salary after taxes, registered nurse paycheck',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["Texas","None","$59,040","$28.38"],["Florida","None","$59,040","$28.38"],["California","9.30%","$52,500","$25.24"],["New York","6.85%","$54,840","$26.37"],["Illinois","4.95%","$56,160","$27.00"],["Washington","None","$59,040","$28.38"],["Pennsylvania","3.07%","$57,504","$27.65"]]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do nurses take home after taxes?","acceptedAnswer":{"@type":"Answer","text":"An RN earning $77,600/year takes home approximately $59,040 in Texas, $56,160 in Illinois, and $52,500 in California after all taxes."}},{"@type":"Question","name":"Do nurses pay more taxes due to overtime?","acceptedAnswer":{"@type":"Answer","text":"Yes. Overtime pay is taxed at your marginal rate. An RN in the 22% federal bracket will pay 22% federal + state tax on all overtime hours, reducing the net benefit."}},{"@type":"Question","name":"What is the average RN salary after taxes in California?","acceptedAnswer":{"@type":"Answer","text":"A California RN earning the state average of ~$130,000 takes home approximately $91,344/year after 9.3% state tax, federal taxes, and FICA."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › Nurse Paycheck Calculator 2026</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Nurse Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>The average RN salary is <strong>$77,600/year</strong> ($37.31/hr) in 2026. After federal taxes and FICA — and state taxes that vary dramatically — take-home ranges from $55,000 to $62,000. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.2)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Scenario</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Take-Home</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Hourly</th>
        </tr></thead>
        <tbody>{rows.map(([s,t,a,h]) => (
          <tr key={s} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{h}</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much do nurses take home after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>An RN earning $77,600/year takes home approximately $59,040 in Texas, $56,160 in Illinois, and $52,500 in California after all taxes.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Do nurses pay more taxes due to overtime?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. Overtime pay is taxed at your marginal rate. An RN in the 22% federal bracket will pay 22% federal + state tax on all overtime hours, reducing the net benefit.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is the average RN salary after taxes in California?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>A California RN earning the state average of ~$130,000 takes home approximately $91,344/year after 9.3% state tax, federal taxes, and FICA.</p>
      <div style={{ background: 'rgba(99,102,241,0.2)', borderRadius: 8, padding: 20, margin: '32px 0' }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact take-home pay →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['Biweekly Pay Guide','/blog/biweekly-paycheck-after-taxes'],['All Tax Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
