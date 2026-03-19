import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'New York Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'New York paycheck calculator 2026. See exact take-home after federal, NY state (4%–10.9%), NYC tax (3.078%–3.876%), and FICA. All salary levels.',
  keywords: 'new york paycheck calculator 2026, ny take home pay, new york salary after taxes, nyc paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/new-york-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$1,883','$1,739','$1,608'],
    ['$40,000','$3,333','$2,458','$2,256','$2,075'],
    ['$50,000','$4,167','$2,992','$2,733','$2,495'],
    ['$60,000','$5,000','$3,487','$3,163','$2,871'],
    ['$75,000','$6,250','$4,142','$3,713','$3,326'],
    ['$100,000','$8,333','$5,217','$4,617','$4,062'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is taken out of a New York paycheck in 2026?","acceptedAnswer":{"@type":"Answer","text":"New York withholds federal income tax, FICA (7.65%), NY state income tax (4%–10.9%), and if you live in NYC, an additional NYC tax (3.078%–3.876%). Total effective rate for a $75,000 salary is roughly 34%–38%."}},
          {"@type":"Question","name":"What is the NYC income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"NYC income tax ranges from 3.078% to 3.876% in 2026, on top of NY state tax. Only NYC residents pay this — workers who live outside NYC but work there do not pay NYC tax."}},
          {"@type":"Question","name":"How much is $75,000 take-home in New York City?","acceptedAnswer":{"@type":"Answer","text":"A $75,000 salary in NYC results in approximately $44,556/year take-home ($3,713/month) for a single filer in 2026 after federal, NY state, and NYC taxes plus FICA."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › New York Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>New York Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>New York has both <strong>NY state tax (up to 10.9%)</strong> and an extra <strong>NYC tax (up to 3.876%)</strong> for city residents. See your exact take-home below or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a>.</p>
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>
        NYC residents pay 3 layers: federal + NY state + NYC local tax. Non-NYC NY residents skip the NYC layer.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>New York state tax is up to 10.9%, plus NYC residents pay additional city tax up to 3.876%.</div>
        <a href="/?state=new-york" style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: 'linear-gradient(135deg,#8b5cf6,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>
          ⚡ Calculate My New York Paycheck →
        </a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>New York Take-Home Pay — State vs NYC (Single Filer, 2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>NY State Net/mo</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>NYC Net/mo</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,nyc,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px', color: '#c00', fontWeight: 600 }}>{nyc}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact New York paycheck →</a>
      </div>
    
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#1a56db', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color: '#1a56db', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color: '#1a56db', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color: '#1a56db', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    </main>
  )
}
