import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Florida vs New York Salary Comparison 2026 — Take-Home Pay Difference | PrivatePaycheck',
  description: 'Florida vs New York salary after taxes in 2026. At $75k, FL residents keep $9,300 more per year than NYC residents. See full comparison.',
  keywords: 'florida vs new york salary, florida vs new york taxes, move from ny to florida salary, florida take home vs new york',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/florida-vs-new-york-salary' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much more do you keep in Florida vs New York?","acceptedAnswer":{"@type":"Answer","text":"At $75,000 salary, a Florida resident takes home $56,124/year vs $49,716 in NYC — a $6,408 annual difference. At $100,000, the gap is $8,292/year in favor of Florida."}},{"@type":"Question","name":"Is it worth moving from New York to Florida for taxes?","acceptedAnswer":{"@type":"Answer","text":"At $100k salary, moving from NYC to Florida saves $8,292/year in taxes alone. Over 10 years, that is $82,920 before investment returns. Combined with lower cost of living in most FL cities, the financial case is strong."}},{"@type":"Question","name":"Does Florida have state income tax?","acceptedAnswer":{"@type":"Answer","text":"No. Florida has no state income tax. New York has state tax up to 10.9% plus NYC residents pay an additional 3.078%–3.876% city tax."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › Florida vs New York Salary</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Florida vs New York Salary 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}>Florida has <strong>no state income tax.</strong> New York has up to <strong>10.9% state + 3.876% NYC tax.</strong> Here is exactly how much more you keep in Florida at every salary level.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Florida vs NYC Take-Home Comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Florida Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>NYC Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>FL Advantage</th>
        </tr></thead>
        <tbody>{[
          ['$50,000','$40,320','$29,940','+$10,380'],
          ['$60,000','$46,944','$41,244','+$5,700'],
          ['$75,000','$56,124','$49,716','+$6,408'],
          ['$100,000','$71,496','$63,204','+$8,292'],
          ['$150,000','$101,004','$84,804','+$16,200'],
          ['$200,000','$130,404','$105,204','+$25,200'],
        ].map(([s,fl,ny,diff]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{fl}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{ny}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#28a745' }}>{diff}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Florida vs NY take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$60k After Taxes','/blog/60k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
