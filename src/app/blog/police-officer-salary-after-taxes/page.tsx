import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Police Officer Salary After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much do police officers take home after taxes in 2026? Average police salary $67,600. See net pay by state with pension deductions.',
  keywords: 'police officer salary after taxes 2026, police take home pay, cop paycheck calculator, law enforcement salary net',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$51,720','$24.87'],
    ['Florida','None','$51,720','$24.87'],
    ['California','9.30%','$46,212','$22.22'],
    ['New York','6.85%','$48,216','$23.18'],
    ['Illinois','4.95%','$49,344','$23.72'],
    ['Washington','None','$51,720','$24.87'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do police officers take home after taxes?","acceptedAnswer":{"@type":"Answer","text":"A police officer earning the national average of $67,600 takes home approximately $51,720 in Texas, $49,344 in Illinois, and $46,212 in California after federal, FICA, and state taxes."}},{"@type":"Question","name":"Do police officers pay into pensions?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most police pension plans require 8%–12% employee contributions deducted from gross pay. This reduces take-home but also lowers current taxable income slightly."}},{"@type":"Question","name":"What is the average police officer salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national average police officer salary is approximately $67,600/year in 2026. Ranges vary significantly: NYPD officers can earn $100,000+ while rural departments average $45,000–$55,000."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › Police Officer Salary After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Police Officer Salary After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}>The national average police officer salary is <strong>$67,600/year</strong>. After taxes, take-home is $46,212–$51,720 before pension deductions (typically 8%–12% additional).</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Police Officer Take-Home by State</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Take-Home</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Hourly</th>
        </tr></thead>
        <tbody>{rows.map(([s,t,a,h]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{h}/hr</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['$150k After Taxes','/blog/150k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
