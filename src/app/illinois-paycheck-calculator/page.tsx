import StateCalcEmbed from '@/components/StateCalcEmbed';
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
    ['$150,000','$12,500','$7,875','$7,237'],
    ['$200,000','$16,667','$9,833','$9,000'],
    ['$500,000','$41,667','$22,250','$20,375'],
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
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Illinois Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>Illinois Paycheck Calculator 2026</h1>
      <StateCalcEmbed stateName="Illinois" stateTaxRate={4.95} hasSDI={false} sdiRate={0} noStateTax={false} />

      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>Illinois uses a <strong>flat 4.95% state income tax</strong> — the same rate for every income level. Simple to calculate, and lower than California or New York for high earners.</p>
      <div style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid #1a56db', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>
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
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact Illinois paycheck →</a>
      </div>
    
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Illinois Paycheck Deductions Breakdown</h2>
      <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>Example: $60,000 salary, single filer, 2026</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>Deduction</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>Rate</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>Annual Amount</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' as const }}>Monthly Amount</th>
        </tr></thead>
        <tbody>
          {[
            ['Federal Income Tax','~14% effective','$8,400/yr','$700/mo'],
            ['Social Security','6.2%','$3,720/yr','$310/mo'],
            ['Medicare','1.45%','$870/yr','$72.50/mo'],
            ['Illinois State Tax','4.95% flat','$2,970/yr','$247.50/mo'],
            ['Total Withheld','','$15,960/yr','$1,330/mo'],
            ['Take-Home Pay','','~$44,040/yr','~$3,670/mo'],
          ].map(([label, rate, annual, monthly]) => (
            <tr key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', fontWeight: label === 'Take-Home Pay' ? 800 : 400 }}>
              <td style={{ padding: '10px 14px', color: '#e2e8f0' }}>{label}</td>
              <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{rate}</td>
              <td style={{ padding: '10px 14px', color:'#F5C842', fontWeight: 600 }}>{annual}</td>
              <td style={{ padding: '10px 14px', color: '#c7d2fe', fontWeight: 600 }}>{monthly}</td>
            </tr>
          ))}
        </tbody>
      </table></div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Frequently Asked Questions</h2>
      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#c7d2fe' }}>Is Illinois a high-tax state?</h3>
        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 20 }}>Illinois has a flat 4.95% state income tax — lower than California (up to 13.3%) or New York (up to 10.9%), but higher than the 9 states with no income tax. The simplicity of a flat rate means every dollar of income is taxed at the same rate, regardless of how much you earn.</p>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#c7d2fe' }}>How can I reduce Illinois state tax on my paycheck?</h3>
        <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>Maximize pre-tax contributions: 401(k) up to $23,500 in 2026, HSA up to $4,300 (self-only). These reduce federal taxable income. Note: Illinois does not allow an HSA deduction on state taxes, but federal savings still apply.</p>
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

      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How Illinois Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Flat rate: 4.95% flat rate on all taxable income — simple and predictable</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Chicago has city tax ~1%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>FICA: Social Security 6.2% (up to $184,500 wage base) + Medicare 1.45% — applies in all states</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator uses 2026 IRS Publication 15-T tables and Illinois 2026 withholding rates</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in Illinois?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>Illinois uses a flat 4.95% flat rate on all taxable income. Combined with federal tax (10%–37%) and FICA (7.65%), a $60,000 salary typically results in about 24%–28% total withholding for a single filer.</p>
      </div>
    </main>
  )
}
