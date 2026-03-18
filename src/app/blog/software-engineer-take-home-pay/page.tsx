import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Software Engineer Take-Home Pay 2026 — After Taxes by State | PrivatePaycheck',
  description: 'How much do software engineers take home after taxes in 2026? See net pay for $100k, $130k, $150k, $200k salaries in TX, CA, NY, WA.',
  keywords: 'software engineer take home pay 2026, software engineer salary after taxes, swe net pay calculator, engineer paycheck after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/software-engineer-take-home-pay' },
}
export default function Page() {
  const rows: string[][] = [["$100k — Texas","None","$71,496","$34.37"],["$100k — California","9.30%","$66,480","$31.96"],["$150k — Texas","None","$101,004","$48.56"],["$150k — California","9.3%+","$91,344","$43.92"],["$150k — Washington","None","$101,004","$48.56"],["$150k — NYC","10.75%","$84,804","$40.77"],["$200k — Texas","None","$130,404","$62.69"],["$200k — California","13.3%","$117,204","$56.35"]]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a software engineer take home after taxes?","acceptedAnswer":{"@type":"Answer","text":"A SWE earning $150k in Texas takes home approximately $101,004/year. The same salary in California yields $91,344 — a $9,660 annual difference from state tax alone."}},{"@type":"Question","name":"Is it worth moving from California to Texas as a software engineer?","acceptedAnswer":{"@type":"Answer","text":"At $150k salary, moving from CA to TX saves approximately $9,660/year in taxes. At $200k, the savings exceed $13,000/year. Over 5 years, the tax savings can exceed $60,000."}},{"@type":"Question","name":"How much do FAANG engineers take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A Google/Meta/Apple engineer earning $200k base in California takes home approximately $117,204/year after all taxes. With RSUs and bonuses, effective rates are higher."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › Software Engineer Take-Home Pay 2026</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Software Engineer Take-Home Pay 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>Software engineer salaries range from <strong>$100k to $200k+</strong>. The state you work in has a massive impact — a $150k SWE in Texas keeps $17,000 more per year than the same salary in California. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
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
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much does a software engineer take home after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>A SWE earning $150k in Texas takes home approximately $101,004/year. The same salary in California yields $91,344 — a $9,660 annual difference from state tax alone.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is it worth moving from California to Texas as a software engineer?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>At $150k salary, moving from CA to TX saves approximately $9,660/year in taxes. At $200k, the savings exceed $13,000/year. Over 5 years, the tax savings can exceed $60,000.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much do FAANG engineers take home after taxes in 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>A Google/Meta/Apple engineer earning $200k base in California takes home approximately $117,204/year after all taxes. With RSUs and bonuses, effective rates are higher.</p>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, margin: '32px 0' }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact take-home pay →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['Biweekly Pay Guide','/blog/biweekly-paycheck-after-taxes'],['All Tax Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
