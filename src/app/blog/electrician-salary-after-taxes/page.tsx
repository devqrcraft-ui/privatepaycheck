import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Electrician Salary After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much do electricians take home after taxes in 2026? Average electrician salary $65,000. See net pay for all states.',
  keywords: 'electrician salary after taxes 2026, electrician take home pay, electrician paycheck calculator, journeyman electrician salary net',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/electrician-salary-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$49,716','$23.90'],
    ['Florida','None','$49,716','$23.90'],
    ['California','9.30%','$44,460','$21.37'],
    ['New York','6.85%','$46,344','$22.28'],
    ['Illinois','4.95%','$47,484','$22.83'],
    ['Washington','None','$49,716','$23.90'],
    ['Pennsylvania','3.07%','$48,552','$23.34'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do electricians take home after taxes?","acceptedAnswer":{"@type":"Answer","text":"An electrician earning $65,000/year takes home approximately $49,716 in Texas, $47,484 in Illinois, and $44,460 in California after all taxes."}},{"@type":"Question","name":"What is the average electrician salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national average electrician salary is $65,000–$75,000 in 2026. Journeyman electricians in union markets like New York or California can earn $90,000–$120,000 including benefits."}},{"@type":"Question","name":"Do electricians pay more taxes as self-employed?","acceptedAnswer":{"@type":"Answer","text":"Yes. Self-employed electricians pay 15.3% SE tax on net profit plus income tax. However, they can deduct tools, vehicle mileage, home office, and other business expenses."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › Electrician Salary After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Electrician Salary After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>The average electrician earns <strong>$65,000/year</strong> in 2026. After taxes, take-home is <strong>$44,460–$49,716</strong> by state.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Take-Home</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Hourly</th>
        </tr></thead>
        <tbody>{rows.map(([s,t,a,h]) => (
          <tr key={s} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{h}/hr</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact electrician take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$60k After Taxes','/blog/60k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
