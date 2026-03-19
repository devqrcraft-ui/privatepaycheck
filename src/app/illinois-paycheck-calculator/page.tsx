import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Illinois Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Illinois paycheck calculator 2026. Flat 4.95% state income tax. See exact take-home after federal, IL state, and FICA. All salary levels. 100% private.',
  keywords: 'illinois paycheck calculator 2026, illinois take home pay, illinois salary after taxes, il paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/illinois-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$2,029','$1,873'],
    ['$40,000','$3,333','$2,633','$2,430'],
    ['$50,000','$4,167','$3,188','$2,942'],
    ['$60,000','$5,000','$3,700','$3,415'],
    ['$75,000','$6,250','$4,406','$4,067'],
    ['$100,000','$8,333','$5,617','$5,185'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"What is the Illinois income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"Illinois has a flat 4.95% state income tax rate in 2026. Unlike most states, Illinois uses a single flat rate for all income levels — no brackets."}},
          {"@type":"Question","name":"How much is taken out of an Illinois paycheck?","acceptedAnswer":{"@type":"Answer","text":"Illinois withholds federal income tax, FICA (7.65%), and flat 4.95% IL state tax. On a $60,000 salary, total effective withholding is roughly 26%–28% for a single filer."}},
          {"@type":"Question","name":"How much is $60,000 take-home in Illinois 2026?","acceptedAnswer":{"@type":"Answer","text":"A $60,000 salary in Illinois results in approximately $44,400/year take-home ($3,700/month) for a single filer after federal income tax, FICA, and 4.95% IL state tax."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Illinois Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>Illinois Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>Illinois uses a <strong>flat 4.95% state income tax</strong> — the same rate for every income level. Simple to calculate, and lower than California or New York for high earners.</p>
      <div style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid #1a56db', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>
        IL flat tax 2026: 4.95% on all income. No brackets. No local income tax except Chicago (none for wages).
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Illinois Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Illinois paycheck →</a>
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
