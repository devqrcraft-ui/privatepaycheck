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
    ['$150,000','$12,500','$7,200','$6,350','$5,600'],
    ['$200,000','$16,667','$9,100','$7,950','$6,950'],
    ['$500,000','$41,667','$18,500','$15,800','$13,500'],
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
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>
        NYC residents pay 3 layers: federal + NY state + NYC local tax. Non-NYC NY residents skip the NYC layer.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>New York state tax is up to 10.9%, plus NYC residents pay additional city tax up to 3.876%.</div>
        <a href="/?state=new-york" style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: 'linear-gradient(135deg,#8b5cf6,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>
           Calculate My New York Paycheck →
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

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>New York Paycheck Deductions Breakdown</h2>
      <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>Example: $75,000 salary, single filer, NYC resident vs NY state only (2026)</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>Deduction</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>Rate</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>NY State Only</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>NYC Resident</th>
        </tr></thead>
        <tbody>
          {[
            ['Federal Income Tax','~18% effective','$13,500/yr','$13,500/yr'],
            ['Social Security','6.2%','$4,650/yr','$4,650/yr'],
            ['Medicare','1.45%','$1,088/yr','$1,088/yr'],
            ['NY State Income Tax','up to 10.9%','$5,466/yr','$5,466/yr'],
            ['NYC Local Tax','3.078%–3.876%','—','$2,700/yr'],
            ['Total Withheld','','$24,704/yr','$27,404/yr'],
            ['Take-Home Pay','','~$50,296/yr','~$47,596/yr'],
          ].map(([label, rate, state, nyc]) => (
            <tr key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', fontWeight: label === 'Take-Home Pay' ? 800 : 400 }}>
              <td style={{ padding: '10px 14px', color: '#e2e8f0' }}>{label}</td>
              <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{rate}</td>
              <td style={{ padding: '10px 14px', color: '#1a56db', fontWeight: 600 }}>{state}</td>
              <td style={{ padding: '10px 14px', color: '#f87171', fontWeight: 600 }}>{nyc}</td>
            </tr>
          ))}
        </tbody>
      </table></div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Frequently Asked Questions</h2>
      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#c7d2fe' }}>Is New York the highest-taxed state?</h3>
        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 20 }}>For NYC residents, yes — the combination of NY state tax (up to 10.9%) and NYC local tax (up to 3.876%) makes effective total state+local tax one of the highest in the US. California’s top rate of 13.3% is higher for very high earners, but NYC residents at moderate incomes face a heavier combined burden.</p>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#c7d2fe' }}>How can I reduce NY state tax on my paycheck?</h3>
        <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>Maximize pre-tax deductions: 401(k) up to $23,500 in 2026, HSA up to $4,300 (self-only), FSA up to $3,300. These reduce federal and NY state taxable income. NY does conform to HSA deductions, unlike California.</p>
      </div>

      
      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How New York Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Progressive NY state tax: 4% to 10.9% across 9 brackets</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>NYC residents pay an additional local tax: 3.078%–3.876%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Yonkers residents pay a Yonkers surcharge on top of NY state tax</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>FICA applies: Social Security 6.2% + Medicare 1.45%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator includes 2026 NY state brackets and NYC local tax if applicable</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in New York?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>New York has one of the highest combined tax burdens in the US. NYC residents face state tax (up to 10.9%) plus a city tax (up to 3.876%), making effective rates among the highest nationally. A $75,000 salary in NYC typically nets around $52,000–54,000 after all taxes.</p>
      </div>
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Calculator</a>
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
