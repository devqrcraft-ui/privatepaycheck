import type { Metadata } from 'next'
import CaCalcEmbed from '@/components/CaCalcEmbed'
export const metadata: Metadata = {
  title: 'California Paycheck Calculator 2026 — Take Home Pay After Taxes',
  description: 'Free California paycheck calculator 2026. See exact take-home pay after federal income tax, CA state tax (up to 12.3%), SDI & FICA. Hourly & salary. Instant, private.',
  keywords: 'california paycheck calculator 2026, california take home pay, california salary after taxes, ca paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/california-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$1,942','$1,617'],
    ['$40,000','$3,333','$2,558','$2,090'],
    ['$50,000','$4,167','$3,117','$2,512'],
    ['$60,000','$5,000','$3,650','$2,896'],
    ['$75,000','$6,250','$4,375','$3,388'],
    ['$100,000','$8,333','$5,540','$4,158'],
    ['$150,000','$12,500','$7,650','$5,412'],
    ['$200,000','$16,667','$9,750','$6,917'],
    ['$500,000','$41,667','$19,750','$13,250'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(24px,4vw,48px) clamp(16px,4vw,24px)', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is taken out of a paycheck in California 2026?","acceptedAnswer":{"@type":"Answer","text":"California withholds federal income tax, Social Security (6.2%), Medicare (1.45%), California state income tax (1%–13.3%), and SDI (1.3%). On a $60,000 salary, total withholding is roughly 27%–31% depending on filing status."}},
          {"@type":"Question","name":"What is California state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"California has 9 tax brackets in 2026 ranging from 1% to 13.3%. The 13.3% rate applies only to income over $1 million. Most middle-income earners fall in the 6%–9.3% range."}},
          {"@type":"Question","name":"Does California have SDI tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. California SDI (State Disability Insurance) is 1.3% of gross wages in 2026 with no wage base cap. It is withheld from every paycheck automatically."}},
          {"@type":"Question","name":"How much is $75,000 salary take-home in California?","acceptedAnswer":{"@type":"Answer","text":"A $75,000 salary in California results in approximately $52,650/year take-home ($4,375/month) for a single filer after federal tax, FICA, CA state tax, and SDI (1.3%)."}},
          {"@type":"Question","name":"What are California paycheck deductions in 2026?","acceptedAnswer":{"@type":"Answer","text":"California paycheck deductions include: federal income tax (10%–37%), Social Security (6.2% up to $176,100), Medicare (1.45%+), California state income tax (1%–13.3%), and SDI (1.3% with no wage cap in 2026)."}},
          {"@type":"Question","name":"How much is taken out of a $50,000 salary in California?","acceptedAnswer":{"@type":"Answer","text":"On a $50,000 salary in California, a single filer takes home approximately $37,400/year ($3,117/month). Deductions include ~$4,500 federal tax, ~$3,825 FICA, and ~$1,750 CA state tax plus $650 SDI."}},
          {"@type":"Question","name":"Does California tax Social Security income?","acceptedAnswer":{"@type":"Answer","text":"No. California does not tax Social Security benefits, making it relatively favorable for retirees despite high income tax rates on wages."}},
          {"@type":"Question","name":"How much is $20/hour after taxes in California?","acceptedAnswer":{"@type":"Answer","text":"At $20/hour (about $41,600/year) in California, a single filer takes home approximately $31,200/year or $1,200 biweekly after federal tax, CA state tax, FICA, and SDI."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › California Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>California Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>Free California paycheck calculator 2026 for <strong>hourly & salary</strong> workers. Federal + state income tax + SDI. California has the highest state tax in the US — up to <strong>13.3%</strong>. See your exact take-home pay instantly. <span style={{fontSize:12,color:'#94a3b8',display:'block',marginTop:6}}>Updated April 2026 — 2026 CA tax brackets, FICA & SDI rates.</span></p>
      <CaCalcEmbed />
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>
        CA state tax rates 2026: 1% – 9.3% for most earners. SDI: 1.3% (no cap). CA SDI changed in 2024 — no wage base limit.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>California has the highest state income tax — up to 13.3%. Use the calculator below for your exact take-home.</div>
        <a href="/?state=california" style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>
           Calculate My California Paycheck →
        </a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>California Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody></table></div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>California Paycheck Deductions Breakdown</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}><table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Deduction</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Rate</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
        </tr></thead>
        <tbody>{[
          ['Federal Income Tax','10%–37%','Based on taxable income after $15,000 standard deduction'],
          ['Social Security','6.2%','On wages up to $184,500'],
          ['Medicare','1.45%','No wage cap; +0.9% over $200k'],
          ['CA State Income Tax','1%–13.3%','9 brackets; most earners pay 6%–9.3%'],
          ['CA SDI','1.3%','No wage base cap since 2024'],
        ].map(([d,r,n]) => (
          <tr key={d} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{d}</td>
            <td style={{ padding: '10px 14px', color: '#f87171', fontWeight: 700 }}>{r}</td>
            <td style={{ padding: '10px 14px', color: '#94a3b8', fontSize: 13 }}>{n}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <strong>Want the exact number?</strong> The table uses single-filer estimates. Your actual take-home depends on filing status, allowances, and pre-tax deductions (401k, health insurance).{' '}
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact California paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is California the highest taxed state?</h3>
      <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>Yes, for high earners. California top rate of 13.3% is the highest state income tax in the US. However, for earners under $60,000, the effective state rate is typically 4%–6%, which is moderate compared to other high-tax states like New York or Oregon.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How do I reduce my California paycheck taxes?</h3>
      <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>Maximize pre-tax contributions: 401(k) up to $23,500 in 2026, HSA up to $4,300 (self-only). These reduce both federal and CA state taxable income. California does not conform to HSA deductions, but federal savings still apply.</p>
    
      
      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How California Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Progressive tax: 9 brackets from 1% to 13.3% (13.3% only above $1 million)</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Most earners ($40k–$100k) pay an effective CA state rate of 4%–7%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>SDI (State Disability Insurance): 1.3% on all wages, no cap since 2024</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>No local income tax in most CA cities (exception: some counties have small surcharges)</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator uses 2026 CA FTB withholding tables and SDI rate</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in California?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>California uses a progressive income tax with 9 brackets. For most middle-income earners, the effective state rate lands between 4% and 7%. Combined with federal tax and FICA, a $60,000 salary typically results in about 27–30% total withholding.</p>
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
    
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California Income Tax Brackets 2026</h2>
      <p style={{ color: '#94a3b8', marginBottom: 16, lineHeight: 1.7 }}>California uses a progressive income tax system with 9 brackets. Unlike federal taxes, California has no standard deduction for most filers — but does offer a personal exemption credit of $144 (single) or $288 (married).</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Tax Rate</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Single Filer Income</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Married Filing Jointly</th>
          </tr></thead>
          <tbody>
            {[
              ['1%','$0 – $10,756','$0 – $21,512'],
              ['2%','$10,757 – $25,499','$21,513 – $50,998'],
              ['4%','$25,500 – $40,245','$50,999 – $80,490'],
              ['6%','$40,246 – $55,866','$80,491 – $111,732'],
              ['8%','$55,867 – $70,606','$111,733 – $141,212'],
              ['9.3%','$70,607 – $360,659','$141,213 – $721,318'],
              ['10.3%','$360,660 – $432,787','$721,319 – $865,574'],
              ['11.3%','$432,788 – $721,314','$865,575 – $1,000,000'],
              ['12.3%','$721,315 – $1,000,000','$1,000,001+'],
              ['13.3%','Over $1,000,000','Over $1,000,000'],
            ].map(([rate, single, married], i) => (
              <tr key={rate} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#818cf8' }}>{rate}</td>
                <td style={{ padding: '10px 14px', color: '#e2e8f0' }}>{single}</td>
                <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{married}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California Paycheck by City (2026)</h2>
      <p style={{ color: '#94a3b8', marginBottom: 16, lineHeight: 1.7 }}>State taxes are the same across California, but minimum wage and local rules vary. Los Angeles and San Francisco have higher minimum wages ($17.28/hr+).</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 32 }}>
        {[
          { city: 'Los Angeles', salary: '$65,000', takehome: '~$46,800/yr', note: 'Min wage $17.28/hr' },
          { city: 'San Francisco', salary: '$95,000', takehome: '~$65,200/yr', note: 'Min wage $18.67/hr' },
          { city: 'San Diego', salary: '$70,000', takehome: '~$50,100/yr', note: 'Min wage $16.85/hr' },
          { city: 'Sacramento', salary: '$60,000', takehome: '~$43,500/yr', note: 'State min wage $16.50/hr' },
        ].map(c2 => (
          <div key={c2.city} style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 8, padding: '14px 16px' }}>
            <div style={{ fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>{c2.city}</div>
            <div style={{ fontSize: 13, color: '#94a3b8' }}>Avg salary: {c2.salary}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#818cf8', margin: '6px 0' }}>{c2.takehome}</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>{c2.note}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>Hourly Wage Take-Home in California (2026)</h2>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Hourly Rate</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Annual Gross</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Take-Home/Year</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Biweekly Net</th>
          </tr></thead>
          <tbody>
            {[
              ['$16.50 (min wage)','$34,320','$27,100','$1,042'],
              ['$20/hr','$41,600','$32,100','$1,235'],
              ['$25/hr','$52,000','$38,800','$1,492'],
              ['$30/hr','$62,400','$45,200','$1,738'],
              ['$40/hr','$83,200','$57,900','$2,227'],
              ['$50/hr','$104,000','$69,800','$2,685'],
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

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California vs Other States: Take-Home Comparison</h2>
      <p style={{ color: '#94a3b8', marginBottom: 16, lineHeight: 1.7 }}>On a $75,000 salary, here's how California compares to other states for a single filer in 2026:</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 360 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>State</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>State Tax Rate</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Take-Home ($75k)</th>
          </tr></thead>
          <tbody>
            {[
              ['Texas','0%','~$57,200'],
              ['Florida','0%','~$57,200'],
              ['Nevada','0%','~$57,200'],
              ['California','Up to 9.3%','~$52,650'],
              ['New York','Up to 6.85%','~$53,400'],
              ['Oregon','Up to 9.9%','~$51,800'],
            ].map(([state,rate,th],i) => (
              <tr key={state} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: state==='California'?'rgba(99,102,241,0.1)':i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: state==='California'?800:400, color: state==='California'?'#818cf8':'#e2e8f0' }}>{state}{state==='California'?' ★':''}</td>
                <td style={{ padding: '10px 14px', color: '#94a3b8' }}>{rate}</td>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#4ade80' }}>{th}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: 10, padding: '20px 24px', marginBottom: 32, marginTop: 40 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#fde68a', marginBottom: 8 }}>💡 How to Reduce Your California Taxes in 2026</div>
        <ul style={{ color: '#94a3b8', lineHeight: 2, margin: 0, paddingLeft: 20 }}>
          <li>Maximize 401(k): up to <strong style={{color:'#e2e8f0'}}>$23,500</strong> pre-tax (reduces federal + CA state taxable income)</li>
          <li>HSA contributions: up to <strong style={{color:'#e2e8f0'}}>$4,300</strong> (self-only) — federal deduction only, CA does not conform</li>
          <li>Claim all deductions: mortgage interest, charitable donations, medical expenses over 7.5% AGI</li>
          <li>Consider S-Corp if self-employed and earning over $80,000/year in CA</li>
        </ul>
      </div>

      <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#f1f5f9', marginBottom: 16 }}>Related Calculators</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10 }}>
          {[
            ['/florida-paycheck-calculator','Florida Paycheck Calculator'],
            ['/texas-paycheck-calculator','Texas Paycheck Calculator'],
            ['/new-york-paycheck-calculator','New York Paycheck Calculator'],
            ['/hourly-paycheck-calculator/california','California Hourly Calculator'],
            ['/bonus-tax-calculator/california','California Bonus Tax Calculator'],
          ].map(([href,label]) => (
            <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#b8c8dc', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>{label}</a>
          ))}
        </div>
      </div>
</main>
  )
}
