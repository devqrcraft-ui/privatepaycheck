import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Washington vs California Salary 2026 — Take-Home Pay Comparison | PrivatePaycheck',
  description: 'Washington state vs California salary after taxes 2026. At $100k, WA residents keep $5,016 more per year. See full comparison at every salary level.',
  keywords: 'washington vs california salary, washington state vs california taxes, move from california to washington, wa vs ca take home pay',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/washington-vs-california-salary' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much more do you keep in Washington vs California?","acceptedAnswer":{"@type":"Answer","text":"At $100,000 salary, a Washington state resident takes home $71,496/year vs $66,480 in California — a $5,016 annual difference. At $150k the gap grows to $9,660/year."}},{"@type":"Question","name":"Does Washington state have income tax?","acceptedAnswer":{"@type":"Answer","text":"No. Washington state has no income tax on wages. California has income tax up to 13.3%. This makes Washington significantly better for take-home pay despite similar cost of living in major metros."}},{"@type":"Question","name":"Is Seattle or San Francisco better for tech salaries after taxes?","acceptedAnswer":{"@type":"Answer","text":"Seattle (Washington) wins on take-home pay — no state income tax. A $200k tech salary in Seattle yields approximately $130,404 take-home vs $117,204 in San Francisco — a $13,200/year difference from state taxes alone."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › Washington vs California Salary</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Washington vs California Salary 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>Washington has <strong>no state income tax.</strong> California has up to <strong>13.3% state income tax.</strong> Here is exactly how much more you keep in Washington at every salary level.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Washington vs California Take-Home Comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Washington Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>California Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>WA Advantage</th>
        </tr></thead>
        <tbody>{[
          ['$50,000','$40,320','$37,404','+$2,916'],
          ['$75,000','$56,124','$52,500','+$3,624'],
          ['$100,000','$71,496','$66,480','+$5,016'],
          ['$150,000','$101,004','$91,344','+$9,660'],
          ['$200,000','$130,404','$117,204','+$13,200'],
        ].map(([s,wa,ca,diff]) => (
          <tr key={s} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{wa}</td>
            <td style={{ padding: '10px 14px', color: '#888' }}>{ca}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#28a745' }}>{diff}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact WA vs CA take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
