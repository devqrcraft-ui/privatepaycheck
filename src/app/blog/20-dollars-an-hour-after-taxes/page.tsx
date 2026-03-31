import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$20 an Hour After Taxes 2026 — Exact Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $20 an hour after taxes in 2026? See exact take-home pay for every state. $20/hr = $41,600/year gross. After federal + state taxes: $32,000–$35,000 depending on state.',
  keywords: '20 dollars an hour after taxes, 20 an hour take home pay 2026, 20 per hour after taxes by state',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/20-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows = [
    ['Texas',      'None',   '$34,860', '$16.76'],
    ['Florida',    'None',   '$34,860', '$16.76'],
    ['California', '9.30%',  '$31,200', '$15.00'],
    ['New York',   '6.85%',  '$32,340', '$15.55'],
    ['Illinois',   '4.95%',  '$33,150', '$15.94'],
    ['Washington', 'None',   '$34,860', '$16.76'],
    ['Oregon',     '8.75%',  '$31,720', '$15.25'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is $20 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$20 an hour equals $41,600 per year gross. After federal taxes and FICA, take-home pay is approximately $32,000–$35,000 depending on your state. In no-income-tax states like Texas and Florida, you keep about $34,860."}},
          {"@type":"Question","name":"What is $20 per hour annually before and after taxes?","acceptedAnswer":{"@type":"Answer","text":"$20/hr × 2,080 hours = $41,600 gross. After federal income tax (12% bracket), Social Security (6.2%), and Medicare (1.45%), net pay is roughly $33,000–$35,000 for a single filer in a no-tax state."}},
          {"@type":"Question","name":"Which state gives the most take-home pay at $20 an hour?","acceptedAnswer":{"@type":"Answer","text":"No-income-tax states — Texas, Florida, Washington, Nevada, Wyoming — give the highest take-home at $20/hr: approximately $34,860/year or $16.76/hr effective."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $20 an Hour After Taxes
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$20 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}>$20 an hour × 2,080 hours = <strong>$41,600/year gross</strong>. After federal + state taxes, your actual take-home ranges from <strong>$31,200 to $34,860</strong> depending on which state you live in.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay by State at $20/Hour</h2>
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

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$20/Hour Pay Breakdown (Single Filer, Texas)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Item</th>
          <th style={{ padding: '10px 14px', textAlign: 'right' }}>Amount</th>
        </tr></thead>
        <tbody>{[
          ['Gross Annual Pay','$41,600'],
          ['Federal Income Tax (12%)','−$3,028'],
          ['Social Security (6.2%)','−$2,579'],
          ['Medicare (1.45%)','−$603'],
          ['Standard Deduction','−$15,000'],
          ['Net Take-Home','$34,860'],
        ].map(([l,v]) => <tr key={l} style={{ borderBottom:'1px solid #1e2d5a' }}>
          <td style={{ padding:'10px 14px' }}>{l}</td>
          <td style={{ padding:'10px 14px', textAlign:'right', fontWeight: l==='Net Take-Home'?700:400, color: l==='Net Take-Home'?'#F5C842':'inherit' }}>{v}</td>
        </tr>)}</tbody>
      </table>

      <p style={{ color: '#b0b8d1', marginBottom: 16 }}>Want the exact number for your state and filing status? Use the <a href="/" style={{ color:'#F5C842' }}>free PrivatePaycheck calculator</a> — 100% private, all math in your browser.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $20 an hour a good wage in 2026?</h3>
      <p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>$20/hr puts you at $41,600/year gross — above the federal poverty line for a single adult, but tight in high cost-of-living states like California or New York where take-home drops to ~$31,000.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $20 an hour biweekly after taxes?</h3>
      <p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>$20 × 80 hours = $1,600 gross per biweek. After taxes in a no-tax state, approximately $1,341 net per paycheck.</p>
    
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
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
            <a key={s} href={"/blog/" + s} style={{ display:'block', padding:'8px 12px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>All Tax Guides</a>
          <a href="/california-paycheck-calculator" style={{ color:'#F5C842', fontSize: 14 }}>California Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color:'#F5C842', fontSize: 14 }}>Texas Calculator</a>
        </div>
      </div>
    </main>
  )
}
