import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Nevada vs California Salary 2026 — Take-Home Pay Comparison | PrivatePaycheck',
  description: 'Nevada vs California salary after taxes 2026. No Nevada state income tax. See how much more you keep in Las Vegas vs Los Angeles.',
  keywords: 'nevada vs california salary, nevada vs california taxes, move from california to nevada, las vegas vs los angeles salary',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/nevada-vs-california-salary' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much more do you keep in Nevada vs California?","acceptedAnswer":{"@type":"Answer","text":"At $100,000 salary, a Nevada resident takes home $71,496/year vs $66,480 in California — a $5,016 annual difference. Nevada has no state income tax."}},{"@type":"Question","name":"Is moving from California to Nevada worth it for taxes?","acceptedAnswer":{"@type":"Answer","text":"At $100k salary, moving from CA to NV saves $5,016/year. At $150k, savings are $9,660/year. Over 10 years at $100k, the tax savings exceed $50,000."}},{"@type":"Question","name":"Does Nevada have income tax?","acceptedAnswer":{"@type":"Answer","text":"No. Nevada has no state income tax, no corporate income tax, and no franchise tax. It is one of the most tax-friendly states in the US."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › Nevada vs California Salary</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Nevada vs California Salary 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}>Nevada has <strong>no state income tax.</strong> California has up to <strong>13.3%.</strong> Here is the exact take-home difference at every income level.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Nevada Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>California Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>NV Advantage</th>
        </tr></thead>
        <tbody>{[
          ['$50,000','$40,320','$37,404','+$2,916'],
          ['$75,000','$56,124','$52,500','+$3,624'],
          ['$100,000','$71,496','$66,480','+$5,016'],
          ['$150,000','$101,004','$91,344','+$9,660'],
          ['$200,000','$130,404','$117,204','+$13,200'],
        ].map(([s,nv,ca,diff]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{nv}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{ca}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#28a745' }}>{diff}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your NV vs CA take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
