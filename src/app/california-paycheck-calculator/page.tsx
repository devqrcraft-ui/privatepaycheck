import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'California Paycheck Calculator 2026 — See Your Exact Take-Home Pay | Free',
  description: 'Free California paycheck calculator for 2026. See your exact take-home pay after federal, state, Social Security and Medicare taxes — for any salary or hourly rate. No signup, 100% private.',
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
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is taken out of a paycheck in California 2026?","acceptedAnswer":{"@type":"Answer","text":"California withholds federal income tax, Social Security (6.2%), Medicare (1.45%), California state income tax (1%–13.3%), and SDI (0.9%). On a $60,000 salary, total withholding is roughly 27%–31% depending on filing status."}},
          {"@type":"Question","name":"What is California state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"California has 9 tax brackets in 2026 ranging from 1% to 13.3%. The 13.3% rate applies only to income over $1 million. Most middle-income earners fall in the 6%–9.3% range."}},
          {"@type":"Question","name":"Does California have SDI tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. California SDI (State Disability Insurance) is 0.9% of gross wages in 2026 with no wage base cap. It is withheld from every paycheck automatically."}},
          {"@type":"Question","name":"How much is $75,000 salary take-home in California?","acceptedAnswer":{"@type":"Answer","text":"A $75,000 salary in California results in approximately $52,650/year take-home ($4,375/month) for a single filer after federal tax, FICA, CA state tax, and SDI."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › California Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>California Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 12 }}>California has the highest state income tax in the US — up to <strong>13.3%</strong> — plus SDI. Use the table below to see your exact take-home pay, or use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a> for your specific situation.</p>
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>
        CA state tax rates 2026: 1% – 9.3% for most earners. SDI: 0.9% (no cap). CA SDI changed in 2024 — no wage base limit.
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
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
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
          ['CA SDI','0.9%','No wage base cap since 2024'],
        ].map(([d,r,n]) => (
          <tr key={d} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{d}</td>
            <td style={{ padding: '10px 14px', color: '#c00', fontWeight: 700 }}>{r}</td>
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
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>SDI (State Disability Insurance): 0.9% on all wages, no cap since 2024</span></li>
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
    </main>
  )
}
