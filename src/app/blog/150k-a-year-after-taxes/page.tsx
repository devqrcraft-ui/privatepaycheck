import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$150,000 a Year After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $150k a year after taxes in 2026? Monthly: $6,400–$8,417. See exact take-home for all 50 states including CA, TX, NY.',
  keywords: '150k a year after taxes, 150000 salary after taxes 2026, 150k take home pay, six figures after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/150k-a-year-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$101,004','$48.56'],
    ['Florida','None','$101,004','$48.56'],
    ['Washington','None','$101,004','$48.56'],
    ['Nevada','None','$101,004','$48.56'],
    ['California','9.30%+','$91,344','$43.92'],
    ['New York (state)','6.85%','$94,200','$45.29'],
    ['NYC','10.75%','$84,804','$40.77'],
    ['New Jersey','10.75%','$90,984','$43.74'],
    ['Illinois','4.95%','$96,504','$46.39'],
    ['Oregon','9.9%','$90,600','$43.56'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $150,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$150k gross. In Texas: approximately $101,004/year ($8,417/month). In California: approximately $91,344/year ($7,612/month). In NYC: approximately $84,804/year ($7,067/month) after city, state, and federal taxes."}},{"@type":"Question","name":"How much is $150k per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$150,000 / 2,080 hours = $72.12/hr gross. After taxes in Texas: approximately $48.56/hr effective. In California: approximately $43.92/hr."}},{"@type":"Question","name":"Is $150k a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"$150k puts you in approximately the top 10% of US earners. After taxes in Texas you keep $101k — comfortable anywhere. In NYC or SF, $84k-$91k take-home is upper-middle class given high costs."}},{"@type":"Question","name":"How much is $150,000 a year monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$150k/year = $12,500/month gross. After taxes: Texas $8,417/month, California $7,612/month, NYC $7,067/month."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $150k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$150,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$150k/year gross = $72.12/hour.</strong> After federal taxes and FICA, take-home ranges from <strong>$84,804 (NYC) to $101,004 (Texas)</strong> — a $16,200 difference purely from state taxes.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$150k Take-Home by State (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Get exact $150k take-home for your state →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['Biweekly Pay Guide','/blog/biweekly-paycheck-after-taxes'],['All Tax Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
