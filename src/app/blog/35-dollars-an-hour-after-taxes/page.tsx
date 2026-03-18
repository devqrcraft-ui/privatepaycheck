import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$35 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $35 an hour after taxes in 2026? $35/hr = $72,800/year gross. See exact take-home for every state.',
  keywords: '35 dollars an hour after taxes, 35 an hour take home 2026, 72800 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/35-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [["Texas","None","$60,516","$29.09"],["Florida","None","$60,516","$29.09"],["California","9.30%","$54,132","$26.02"],["New York","6.85%","$56,340","$27.09"],["Illinois","4.95%","$57,960","$27.87"],["Washington","None","$60,516","$29.09"]]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $35 an hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$35/hr = $72,800/year gross. Take-home in Texas: ~$60,516/year ($29.09/hr). In California: ~$54,132/year."}},{"@type":"Question","name":"Is $35 an hour middle class?","acceptedAnswer":{"@type":"Answer","text":"Yes. $72,800/year is solidly middle class nationwide and above median in most states. It covers a comfortable lifestyle outside major metros."}},{"@type":"Question","name":"How much is $35/hr biweekly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$35 × 80 hours = $2,800 gross biweekly. After taxes in Texas: approximately $2,328 net per paycheck."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $35 an Hour After Taxes 2026
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$35 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$72,800/year gross</strong>. Take-home varies by state — see exact numbers below or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a>.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay by State</h2>
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
            <td style={{ padding: '10px 14px' }}>{h}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Get your exact take-home pay →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $35 an hour after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$35/hr = $72,800/year gross. Take-home in Texas: ~$60,516/year ($29.09/hr). In California: ~$54,132/year.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $35 an hour middle class?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Yes. $72,800/year is solidly middle class nationwide and above median in most states. It covers a comfortable lifestyle outside major metros.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $35/hr biweekly after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$35 × 80 hours = $2,800 gross biweekly. After taxes in Texas: approximately $2,328 net per paycheck.</p>
    
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 8, marginBottom: 24 }}>
          {([
            ['$20 an Hour After Taxes','20-dollars-an-hour-after-taxes'],
            ['$25 an Hour After Taxes','25-dollars-an-hour-after-taxes'],
            ['$30 an Hour After Taxes','30-dollars-an-hour-after-taxes'],
            ['$35 an Hour After Taxes','35-dollars-an-hour-after-taxes'],
            ['$40 an Hour After Taxes','40-dollars-an-hour-after-taxes'],
            ['$50k a Year After Taxes','50k-a-year-after-taxes'],
            ['$75k a Year After Taxes','75k-a-year-after-taxes'],
            ['$100k a Year After Taxes','100k-a-year-after-taxes'],
            ['Biweekly Paycheck Guide','biweekly-paycheck-after-taxes'],
          ] as [string,string][]).map(([t,s]) => (
            <a key={s} href={"/blog/" + s} style={{ display:'block', padding:'8px 12px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#1a56db', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color: '#1a56db', fontSize: 14 }}>All Tax Guides</a>
          <a href="/california-paycheck-calculator" style={{ color: '#1a56db', fontSize: 14 }}>California Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color: '#1a56db', fontSize: 14 }}>Texas Calculator</a>
        </div>
      </div>
    </main>
  )
}
