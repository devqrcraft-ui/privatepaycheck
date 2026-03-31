import type { Metadata } from 'next'
import FlTxCalcEmbed from '@/components/FlTxCalcEmbed'
export const metadata: Metadata = {
  title: 'Florida Paycheck Calculator 2026 — No State Tax, See Exact Take-Home Pay',
  description: 'Free Florida paycheck calculator. Find your 2026 take-home pay after federal income tax and FICA (no state tax in Florida). Simple, fast and 100% private — your salary stays in your browser.',
  keywords: 'florida paycheck calculator 2026, florida take home pay, florida salary after taxes, fl paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/florida-paycheck-calculator' },
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
          {"@type":"Question","name":"Does Florida have state income tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"No. Florida has no state income tax. Workers only pay federal income tax and FICA. Florida is consistently one of the top states for take-home pay in the US."}},
          {"@type":"Question","name":"How much is $50,000 take-home pay in Florida 2026?","acceptedAnswer":{"@type":"Answer","text":"A $50,000 salary in Florida gives approximately $40,320/year take-home ($3,360/month) for a single filer after federal income tax and FICA only."}},
          {"@type":"Question","name":"What taxes are taken out of a Florida paycheck?","acceptedAnswer":{"@type":"Answer","text":"Only federal taxes: federal income tax (10%–22% for most earners) and FICA (Social Security 6.2% + Medicare 1.45%). No state income tax, no state SDI."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Florida Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>Florida Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>Florida has <strong>no state income tax</strong>. Your paycheck deductions are federal income tax and FICA only — making Florida one of the best states for take-home pay.</p>
      <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#6ee7b7' }}>
        No Florida state income tax in 2026. Same take-home as Texas, Nevada, and Washington.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>Florida has no state income tax. Use the calculator for your exact federal + FICA take-home.</div>
        <a href="/?state=florida" style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: 'linear-gradient(135deg,#f59e0b,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>
           Calculate My Florida Paycheck →
        </a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Florida Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact Florida paycheck →</a>
      </div>
    
      
      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How Florida Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Florida has no state income tax — zero state withholding from paychecks</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>No local income tax in Florida cities or counties</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>You pay federal income tax (10%–37%) and FICA (7.65%) only</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>A $60,000 salary in Florida nets approximately $46,500–$47,500/year</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator uses 2026 IRS Publication 15-T federal tables</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in Florida?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>Florida is one of 9 states with no state income tax. Workers keep more of each paycheck compared to high-tax states. The only deductions from a Florida paycheck are federal income tax and FICA — Social Security (6.2%) and Medicare (1.45%).</p>
      <FlTxCalcEmbed state="florida" />
      </div>
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color:'#F5C842', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color:'#F5C842', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    </main>
  )
}
