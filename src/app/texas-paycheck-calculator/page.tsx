import type { Metadata } from 'next'
import FlTxCalcEmbed from '@/components/FlTxCalcEmbed'
export const metadata: Metadata = {
  title: 'Texas Paycheck Calculator 2026 — Take Home Pay, No State Tax',
  description: 'Free Texas paycheck calculator 2026. Texas has zero state income tax — see your exact take-home pay after federal tax & FICA. Hourly & salary. Instant & private.',
  keywords: 'texas paycheck calculator 2026, texas take home pay, texas salary after taxes, tx paycheck no state tax',
  alternates: { canonical: 'https://www.privatepaycheck.com/texas-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$2,153','$1,994'],
    ['$40,000','$3,333','$2,783','$2,572'],
    ['$50,000','$4,167','$3,360','$3,103'],
    ['$60,000','$5,000','$3,912','$3,612'],
    ['$75,000','$6,250','$4,677','$4,318'],
    ['$100,000','$8,333','$5,958','$5,498'],
    ['$150,000','$12,500','$8,250','$7,612'],
    ['$200,000','$16,667','$10,417','$9,583'],
    ['$500,000','$41,667','$23,750','$21,875'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Does Texas have state income tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"No. Texas has no state income tax. Workers only pay federal income tax and FICA (Social Security 6.2% + Medicare 1.45%). This makes Texas one of the highest take-home pay states in the US."}},
          {"@type":"Question","name":"How much is $60,000 take-home pay in Texas?","acceptedAnswer":{"@type":"Answer","text":"A $60,000 salary in Texas results in approximately $46,944/year take-home ($3,912/month) for a single filer in 2026, after federal income tax and FICA. No state tax is withheld."}},
          {"@type":"Question","name":"How much of my Texas paycheck goes to taxes?","acceptedAnswer":{"@type":"Answer","text":"In Texas, only federal taxes are withheld: federal income tax (10%–22% for most earners) plus FICA 7.65%. Total effective withholding for a $50,000 salary is roughly 19%–21%."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Texas Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>Texas Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>Texas has <strong>no state income tax</strong> — you only pay federal income tax and FICA. This means Texans keep significantly more of every paycheck compared to residents of CA, NY, or IL.</p>

      <FlTxCalcEmbed state="texas" />
      <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#6ee7b7' }}>
        No Texas state income tax in 2026. Only federal withholding applies. Compare: at $75k salary, Texas take-home is ~$8,700/year MORE than California.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>Texas has no state income tax — you keep significantly more of every paycheck vs CA or NY.</div>
        <a href="/?state=texas" style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: 'linear-gradient(135deg,#10b981,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>
           Calculate My Texas Paycheck →
        </a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Texas Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody></table></div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Texas vs California Take-Home Comparison</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Texas Annual Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>California Annual Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>TX Advantage</th>
        </tr></thead>
        <tbody>{[
          ['$50,000','$40,320','$37,404','+$2,916'],
          ['$75,000','$56,124','$52,500','+$3,624'],
          ['$100,000','$71,496','$66,480','+$5,016'],
          ['$150,000','$101,004','$91,344','+$9,660'],
        ].map(([s,tx,ca,diff]) => (
          <tr key={s} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{tx}</td>
            <td style={{ padding: '10px 14px', color: '#888' }}>{ca}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#28a745' }}>{diff}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact Texas paycheck →</a>
      </div>
    
      
      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How Texas Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Texas has no state income tax — one of 9 states with $0 state tax</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>You still pay federal income tax (10%–37%) and FICA (7.65%)</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>No SDI, no local income tax in Texas</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Higher take-home than most states: a $60,000 salary nets ~$47,000/year</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator applies 2026 IRS federal brackets and FICA rates only</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in Texas?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>Texas residents pay no state income tax, making it one of the most tax-friendly states for workers. Your paycheck deductions are limited to federal income tax and FICA (Social Security + Medicare), giving you significantly more take-home pay than in states like California or New York.</p>
      </div>
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 10, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'12px 16px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:8, fontSize:15, fontWeight:700, color:'#818cf8', textDecoration:'none', textAlign:'center' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color:'#F5C842', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color:'#F5C842', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>Texas: No State Income Tax Explained</h2>
      <p style={{ color: '#94a3b8', marginBottom: 16, lineHeight: 1.7 }}>Texas has <strong style={{color:'#e2e8f0'}}>no state income tax</strong> — one of only 9 states. On a $75,000 salary, Texas workers take home ~$57,200/year vs ~$52,650 in California. The difference compounds: over 10 years that's <strong style={{color:'#4ade80'}}>$45,000+ more</strong> in your pocket. You still owe federal income tax and FICA.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>Texas Take-Home Pay by Salary (2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Annual Salary</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Monthly Gross</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Take-Home/Year</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Biweekly Net</th>
          </tr></thead>
          <tbody>
            {[
              ['$30,000','$2,500','$25,100','$965'],
              ['$40,000','$3,333','$32,700','$1,258'],
              ['$50,000','$4,167','$40,100','$1,542'],
              ['$60,000','$5,000','$47,100','$1,812'],
              ['$75,000','$6,250','$57,200','$2,200'],
              ['$100,000','$8,333','$73,200','$2,815'],
              ['$150,000','$12,500','$102,400','$3,938'],
              ['$200,000','$16,667','$130,100','$5,004'],
            ].map(([sal,mo,net,bw],i) => (
              <tr key={sal} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#f1f5f9' }}>{sal}</td>
                <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{mo}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 700 }}>{net}</td>
                <td style={{ padding: '10px 14px', color: '#818cf8' }}>{bw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>Texas Hourly Wage After Taxes (2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 360 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Hourly Rate</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Annual Gross</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Take-Home/Year</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Biweekly Net</th>
          </tr></thead>
          <tbody>
            {[
              ['$7.25 (fed min)','$15,080','$13,200','$508'],
              ['$15/hr','$31,200','$25,800','$992'],
              ['$20/hr','$41,600','$33,500','$1,288'],
              ['$25/hr','$52,000','$41,000','$1,577'],
              ['$30/hr','$62,400','$48,300','$1,858'],
              ['$50/hr','$104,000','$76,800','$2,954'],
            ].map(([rate,gross,net,bw],i) => (
              <tr key={rate} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#f1f5f9' }}>{rate}</td>
                <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{gross}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 700 }}>{net}</td>
                <td style={{ padding: '10px 14px', color: '#818cf8' }}>{bw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>Texas Cities: Average Salary & Take-Home</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 12, marginBottom: 32 }}>
        {[
          { city:'Houston', avg:'$68,000', net:'~$52,100/yr', note:'Energy & healthcare hub' },
          { city:'Dallas', avg:'$72,000', net:'~$54,800/yr', note:'Finance & tech center' },
          { city:'Austin', avg:'$85,000', net:'~$63,200/yr', note:'Tech boom city' },
          { city:'San Antonio', avg:'$55,000', net:'~$43,500/yr', note:'Military & healthcare' },
        ].map(c2 => (
          <div key={c2.city} style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 8, padding: '14px 16px' }}>
            <div style={{ fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>{c2.city}</div>
            <div style={{ fontSize: 13, color: '#94a3b8' }}>Avg salary: {c2.avg}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#4ade80', margin: '6px 0' }}>{c2.net}</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>{c2.note}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#fde68a', marginBottom: 8 }}>💡 Texas Paycheck Tips 2026</div>
        <ul style={{ color: '#94a3b8', lineHeight: 2, margin: 0, paddingLeft: 20 }}>
          <li>No state income tax — but <strong style={{color:'#e2e8f0'}}>property taxes are among the highest</strong> in the US (avg 1.6%)</li>
          <li>Federal minimum wage applies: <strong style={{color:'#e2e8f0'}}>$7.25/hr</strong> — no state increase</li>
          <li>No TX disability insurance deduction — more take-home vs CA/NJ</li>
          <li>Maximize 401(k) to $23,500 and HSA to $4,300 to cut federal tax</li>
        </ul>
      </div>

      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#f1f5f9', marginBottom: 16 }}>Related Calculators</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10 }}>
          {[
            ['/florida-paycheck-calculator','Florida Paycheck Calculator'],
            ['/california-paycheck-calculator','California Paycheck Calculator'],
            ['/new-york-paycheck-calculator','New York Paycheck Calculator'],
            ['/hourly-paycheck-calculator/texas','Texas Hourly Calculator'],
            ['/bonus-tax-calculator/texas','Texas Bonus Tax Calculator'],
          ].map(([href,label]) => (
            <a key={href} href={href} style={{ padding:'8px 16px', borderRadius:8, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#b8c8dc', textDecoration:'none', fontSize:14, fontWeight:600 }}>{label}</a>
          ))}
        </div>
      </div>
</main>
  )
}
