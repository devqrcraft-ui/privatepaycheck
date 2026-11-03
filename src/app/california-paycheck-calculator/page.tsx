import type { Metadata } from 'next'
import CaCalcEmbed from '@/components/CaCalcEmbed'
import FreshnessBar from '@/components/FreshnessBar'
import LinkCardGrid from '@/components/LinkCardGrid'
import { CA_TAX_BRACKETS_MARRIED, CA_TAX_BRACKETS_SINGLE, CA_TAX_YEAR, estimateCaPaycheck } from '@/lib/caTax'
import { estimatePaycheck } from '@/lib/paycheck'
import { stateIncomeTax } from '@/lib/stateTax'

export const metadata: Metadata = {
  title: 'California Paycheck Calculator 2026 — Estimate Take-Home Pay',
  description: 'Estimate California take-home pay with 2026 federal tax and SDI assumptions, California income-tax estimates, and FICA. Free calculator.',
  keywords: 'california paycheck calculator 2026, california take home pay, california salary after taxes, ca paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/california-paycheck-calculator' },
  openGraph: {
    url: 'https://www.privatepaycheck.com/california-paycheck-calculator',
    type: 'website',
  },
}
export default function Page() {
  const money = (amount: number) => '$' + Math.round(amount).toLocaleString('en-US')
  const estimate = (annual: number, freq = 1) =>
    estimateCaPaycheck({ annual, freq, filing: 'single' })
  const ca75 = estimate(75000)
  const ca60 = estimate(60000)
  const ca50 = estimate(50000)
  const ca41600 = estimate(41600)
  const ca60EffectiveRate = ((60000 - ca60.netYear) / 60000 * 100).toFixed(1)
  const salaryLevels = [30000, 40000, 50000, 60000, 75000, 100000, 150000, 200000, 500000]
  const rows = salaryLevels.map((annual) => {
    const result = estimate(annual)
    return [money(annual), money(annual / 12), money(result.netYear / 12), money(result.netYear / 26)]
  })
  const taxFreeStateNet = estimatePaycheck({
    annual: 75000, freq: 1, stateRatePct: 0, filing: 'single', k401Pct: 0,
  }).net
  const stateNet = (state: string) =>
    taxFreeStateNet - stateIncomeTax(state, 75000, 'single')
  const paycheckRows = [40000, 50000, 60000, 75000, 100000, 150000].map((annual) => {
    const result = estimate(annual)
    return [money(annual), money(result.netYear / 52), money(result.netYear / 26), money(result.netYear / 12)]
  })
  const occupationExamples: [string, number][] = [
    ['Registered Nurse', 95000],
    ['Software Engineer', 145000],
    ['Teacher (public school)', 68000],
    ['Electrician', 72000],
    ['Delivery Driver', 48000],
    ['Medical Assistant', 44000],
    ['Accountant', 82000],
    ['Police Officer', 88000],
  ]
  const bracketRows = CA_TAX_BRACKETS_SINGLE.map(([upper, rate], index) => {
    const lower = index === 0 ? 0 : CA_TAX_BRACKETS_SINGLE[index - 1][0]
    const [marriedUpper] = CA_TAX_BRACKETS_MARRIED[index]
    const marriedLower = index === 0 ? 0 : CA_TAX_BRACKETS_MARRIED[index - 1][0]
    const range = (start: number, end: number) => `${money(start)} – ${Number.isFinite(end) ? money(end) : 'and over'}`
    return {
      rate: `${(rate * 100).toFixed(rate * 100 % 1 ? 1 : 0)}%`,
      single: range(lower, upper),
      married: range(marriedLower, marriedUpper),
    }
  })
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(24px,4vw,48px) clamp(16px,4vw,24px)', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com","logo":"https://www.privatepaycheck.com/og-image.svg","description":"Free paycheck calculators for all 50 US states. Federal + state taxes, FICA, 401k. 100% private."}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"California Paycheck Calculator","item":"https://www.privatepaycheck.com/california-paycheck-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"California Paycheck Calculator","datePublished":"2026-01-15","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/california-paycheck-calculator"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is taken out of a paycheck in California 2026?","acceptedAnswer":{"@type":"Answer","text":`For a $60,000 salary, this single-filer estimate includes ${money(60000 - ca60.netYear)} in federal income tax, FICA, California income tax, and SDI (${ca60EffectiveRate}% of gross). Actual paycheck withholding varies with Forms W-4 and DE 4, pay frequency, benefits, and credits.`}},
          {"@type":"Question","name":"What is California state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"California has 9 marginal tax brackets in 2026 ranging from 1% to 13.3%. The 13.3% rate applies only to taxable income over $1 million; marginal rates do not apply to all income."}},
          {"@type":"Question","name":"Does California have SDI tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. California SDI (State Disability Insurance) is 1.3% of gross wages in 2026 with no wage base cap. It is withheld from every paycheck automatically."}},
          {"@type":"Question","name":"How much is $75,000 salary take-home in California?","acceptedAnswer":{"@type":"Answer","text":`A $75,000 salary is estimated at ${money(ca75.netYear)}/year take-home (${money(ca75.netYear / 12)}/month) for a single filer, before voluntary benefits or local taxes.`}},
          {"@type":"Question","name":"What are California paycheck deductions in 2026?","acceptedAnswer":{"@type":"Answer","text":"California paycheck deductions include: federal income tax (10%–37%), Social Security (6.2% up to $184,500), Medicare (1.45%+), California state income tax (1%–13.3%), and SDI (1.3% with no wage cap in 2026)."}},
          {"@type":"Question","name":"How much is taken out of a $50,000 salary in California?","acceptedAnswer":{"@type":"Answer","text":`A $50,000 salary is estimated at ${money(ca50.netYear)}/year take-home. The estimate includes ${money(ca50.fed)} federal income tax, ${money(ca50.ss + ca50.med)} FICA, ${money(ca50.caState)} California income tax, and ${money(ca50.caSDI)} SDI.`}},
          {"@type":"Question","name":"Does California tax Social Security income?","acceptedAnswer":{"@type":"Answer","text":"No. California does not tax Social Security benefits, making it relatively favorable for retirees despite high income tax rates on wages."}},
          {"@type":"Question","name":"How much is $20/hour after taxes in California?","acceptedAnswer":{"@type":"Answer","text":`At 40 hours per week, $20/hour is $41,600 gross per year. The estimated take-home is ${money(ca41600.netYear)}/year or ${money(estimate(41600, 26).net)}/biweekly for a single filer.`}}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to Calculate Your California Paycheck in 2026","description":"Step-by-step guide to calculating take-home pay for California workers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Enter your gross salary","text":"Start with your annual or hourly gross pay before any deductions."},{"@type":"HowToStep","position":2,"name":"Subtract federal income tax","text":"Apply 2026 IRS tax brackets (10%-37%) based on filing status and standard deduction of $16,100 single / $32,200 MFJ."},{"@type":"HowToStep","position":3,"name":"Subtract FICA taxes","text":"Deduct Social Security (6.2% up to $184,500) and Medicare (1.45%) from gross pay."},{"@type":"HowToStep","position":4,"name":"Subtract California state tax","text":"Apply California state income tax rates for 2026 to your taxable income."},{"@type":"HowToStep","position":5,"name":"Calculate net take-home pay","text":"Subtract all deductions from gross pay to get your California take-home pay per paycheck."}]}' }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › California Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#e8edf8' }}>California Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 12 }}>Estimate California take-home pay for <strong>hourly and salary</strong> income with federal tax, FICA, California income tax, and SDI. The result is an estimate, not a payroll withholding quote; filing details, benefits, and local taxes can change your paycheck. <span style={{fontSize:12,color:'#94a3b8',display:'block',marginTop:6}}>Updated November 2, 2026 — federal 2026 rules and California's published tax schedule used for this estimate.</span></p>
      <CaCalcEmbed />

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32, marginBottom: 16 }}>How to Calculate Your California Paycheck in 2026</h2>
      <ol style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 2, paddingLeft: 20, marginBottom: 24 }}>
        <li><strong>Enter your gross salary</strong> — Start with your annual or hourly gross pay before any deductions.</li>
        <li><strong>Subtract federal income tax</strong> — Apply 2026 IRS tax brackets (10%-37%) based on filing status and standard deduction of $16,100 single / $32,200 MFJ.</li>
        <li><strong>Subtract FICA taxes</strong> — Deduct Social Security (6.2% up to $184,500) and Medicare (1.45%) from gross pay.</li>
        <li><strong>Estimate California deductions</strong> — Apply the published California income-tax schedule used by this estimate and the 2026 SDI rate (1.3%). Actual payroll withholding depends on Form DE 4 and payroll details.</li>
        <li><strong>Calculate net take-home pay</strong> — Subtract all deductions from gross pay to get your California take-home pay per paycheck.</li>
      </ol>

      {/* ANSWER-FIRST GEO BLOCK */}
      <div style={{ background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
        <div style={{ fontSize:13, fontWeight:700, color:'#F5C842', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Take-Home Summary — California</div>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
          A $75,000 salary is estimated at <strong style={{ color:'#fff' }}>{money(ca75.netYear)} take-home pay</strong> for a single filer. Breakdown: federal income tax {money(ca75.fed)} + California income tax {money(ca75.caState)} + Social Security {money(ca75.ss)} + Medicare {money(ca75.med)} + SDI {money(ca75.caSDI)} = {money(75000 - ca75.netYear)} estimated deductions. This estimate excludes voluntary benefits and local taxes. California SDI is 1.3% with no wage base cap in 2026.
        </p>
      </div>

        {/* Key Takeaways */}
        <div style={{background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:24,marginTop:16}}>
          <div style={{fontWeight:800,color:'#F5C842',marginBottom:10,fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>{'California has the highest state income tax in the US — up to 13.3% on income over $1 million'}</li>
            <li>{`On a $75K salary, estimated take-home is ${money(ca75.netYear)}/year for a single filer before voluntary benefits and local taxes`}</li>
            <li>{'SDI (State Disability Insurance) is 1.3% with no wage base cap since Jan 2024'}</li>
            <li>{'The 2026 employee 401(k) contribution limit is $24,500; California tax treatment may differ from federal treatment'}</li>
            <li>{'Standard deduction 2026: $16,100 single / $32,200 married filing jointly'}</li>
          </ul>
        </div>

      <FreshnessBar state="California" items={["SDI rate: 1.3% with no wage base cap (since Jan 2024)","Federal SS wage base: $184,500 for 2026","Standard deduction: $16,100 single / $32,200 married","CA minimum wage: $16.90/hr statewide"]} />
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>
        Estimate uses the published California income-tax schedule configured in the calculator; the 2026 SDI withholding rate is 1.3% with no wage cap.
      </div>
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '12px', alignItems: 'center', textAlign: 'center' as const }}>
        <div style={{ fontSize: '15px', opacity: 0.8 }}>California has a top marginal state income tax rate of 13.3%. Use the calculator below for an estimate of your take-home pay.</div>
        <a href="/?state=california" className="ca-calc-btn">
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
            <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.65)' }}>{gross}</td>
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
          ['Federal Income Tax','10%–37%','Based on taxable income after $16,100 standard deduction'],
          ['Social Security','6.2%','On wages up to $184,500'],
          ['Medicare','1.45%','No wage cap; +0.9% over $200k'],
          ['CA State Income Tax','Progressive','Estimate uses California-specific deductions and credits'],
          ['CA SDI','1.3%','No wage base cap since 2024'],
        ].map(([d,r,n]) => (
          <tr key={d} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{d}</td>
            <td style={{ padding: '10px 14px', color: '#f87171', fontWeight: 700 }}>{r}</td>
            <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{n}</td>
          </tr>
        ))}</tbody></table></div>
      <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <strong>Need a personalized estimate?</strong> The table uses a single-filer scenario. Actual payroll withholding depends on filing details, Forms W-4 and DE 4, pay frequency, and benefits.{' '}
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Open the paycheck calculator →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is California the highest taxed state?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>Yes, for high earners. California top rate of 13.3% is the highest state income tax in the US. However, for earners under $60,000, the effective state rate is typically 4%–6%, which is moderate compared to other high-tax states like New York or Oregon.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How do I reduce my California paycheck taxes?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>For 2026, the employee 401(k) deferral limit is $24,500. The HSA contribution limit is $4,400 for self-only coverage and $8,750 for family coverage. California generally does not conform to the federal HSA deduction; eligibility and payroll treatment can affect the result.</p>
    
      
      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How California Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Progressive tax: 9 brackets from 1% to 13.3% (13.3% only above $1 million)</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Most earners ($40k–$100k) pay an effective CA state rate of 4%–7%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>SDI (State Disability Insurance): 1.3% on all wages, no cap since 2024</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>No local income tax in most CA cities (exception: some counties have small surcharges)</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This is an annual estimate, not a paycheck-withholding calculation; actual withholding depends on Form DE 4 and payroll details</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in California?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>California uses a progressive income tax with separate state deductions and credits. The calculator estimates annual federal tax, FICA, California income tax, and SDI; actual withholding depends on Forms W-4 and DE 4, pay frequency, and benefits.</p>
      </div>
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <LinkCardGrid minCardWidth={140} links={[["/california-paycheck-calculator","California Calculator"],["/texas-paycheck-calculator","Texas Calculator"],["/florida-paycheck-calculator","Florida Calculator"],["/new-york-paycheck-calculator","New York Calculator"],["/illinois-paycheck-calculator","Illinois Calculator"],["/washington-paycheck-calculator","Washington Calculator"],["/nevada-paycheck-calculator","Nevada Calculator"],["/arizona-paycheck-calculator","Arizona Calculator"],["/colorado-paycheck-calculator","Colorado Calculator"],["/pennsylvania-paycheck-calculator","Pennsylvania Calculator"]]} />
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color:'#F5C842', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color:'#F5C842', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>{`California Income Tax Schedule ${CA_TAX_YEAR}`}</h2>
      <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.7 }}>{`Taxable-income brackets for the 2026 California tax schedule are shown below. The calculator applies California's standard deduction and exemption credit, then estimates tax; this is not an individualized payroll-withholding calculation.`}</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Tax Rate</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Single Taxable Income</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Married Filing Jointly</th>
          </tr></thead>
          <tbody>
            {bracketRows.map(({ rate, single, married }, i) => (
              <tr key={rate} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#818cf8' }}>{rate}</td>
                <td style={{ padding: '10px 14px', color: '#e2e8f0' }}>{single}</td>
                <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.65)' }}>{married}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, lineHeight: 1.7 }}>The California 1% Mental Health Services Tax may apply to taxable income over $1 million, making the top marginal rate 13.3%. Source: <a href="https://www.ftb.ca.gov/forms/2026/2026-540-tax-rate-schedules.pdf" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>FTB 2026 Tax Rate Schedules</a>.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California Paycheck by City (2026)</h2>
      <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.7 }}>State taxes are the same across California, but minimum wage and local rules vary. Los Angeles and San Francisco have higher minimum wages ($17.28/hr+).</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 32 }}>
        {[
          { city: 'Los Angeles', salary: 65000 },
          { city: 'San Francisco', salary: 95000 },
          { city: 'San Diego', salary: 70000 },
          { city: 'Sacramento', salary: 60000 },
        ].map(c2 => (
          <div key={c2.city} style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 8, padding: '14px 16px' }}>
            <div style={{ fontWeight: 800, color: '#e8edf8', marginBottom: 4 }}>{c2.city}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>Example gross salary: {money(c2.salary)}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#818cf8', margin: '6px 0' }}>Estimated take-home: {money(estimate(c2.salary).netYear)}/yr</div>
            <div style={{ fontSize: 12, color: '#e2e8f0' }}>Illustrative input; local payroll taxes and benefits are not modeled.</div>
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
            {[16.9, 20, 25, 30, 40, 50].map((rate, i) => {
              const annual = rate * 2080
              const result = estimate(annual)
              const label = i === 0 ? `$${rate.toFixed(2)} (2026 state minimum)` : `$${rate}/hr`
              return (
              <tr key={rate} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#e8edf8' }}>{label}</td>
                <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.65)' }}>{money(annual)}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 700 }}>{money(result.netYear)}</td>
                <td style={{ padding: '10px 14px', color: '#818cf8' }}>{money(estimate(annual, 26).net)}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California vs Other States: Take-Home Comparison</h2>
      <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.7 }}>On a $75,000 salary, these are estimated annual take-home amounts for a single filer. State estimates exclude local taxes and use the site's state-tax model.</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 360 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>State</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>State Tax Rate</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Take-Home ($75k)</th>
          </tr></thead>
          <tbody>
            {[
              ['Texas','0%',money(taxFreeStateNet)],
              ['Florida','0%',money(taxFreeStateNet)],
              ['Nevada','0%',money(taxFreeStateNet)],
              ['California','Progressive',money(ca75.netYear)],
              ['New York','Progressive',money(stateNet('ny'))],
              ['Oregon','Progressive',money(stateNet('or'))],
            ].map(([state,rate,th],i) => (
              <tr key={state} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: state==='California'?'rgba(99,102,241,0.1)':i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: state==='California'?800:400, color: state==='California'?'#818cf8':'#e2e8f0' }}>{state}{state==='California'?' ★':''}</td>
                <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.65)' }}>{rate}</td>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#4ade80' }}>{th}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: 10, padding: '20px 24px', marginBottom: 32, marginTop: 40 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#fde68a', marginBottom: 8 }}>💡 How to Reduce Your California Taxes in 2026</div>
        <ul style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 2, margin: 0, paddingLeft: 20 }}>
          <li>Maximize 401(k): up to <strong style={{color:'#e2e8f0'}}>$24,500</strong> in 2026, subject to plan rules</li>
          <li>HSA contributions: up to <strong style={{color:'#e2e8f0'}}>$4,400</strong> self-only or <strong style={{color:'#e2e8f0'}}>$8,750</strong> family coverage in 2026; California generally does not conform to the federal HSA deduction</li>
          <li>Claim all deductions: mortgage interest, charitable donations, medical expenses over 7.5% AGI</li>
          <li>Consider S-Corp if self-employed and earning over $80,000/year in CA</li>
        </ul>
      </div>


      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California Paycheck by Pay Period (2026)</h2>
      <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.7 }}>Illustrative per-paycheck estimates for common salaries, assuming a single filer, 52 weekly periods, 26 biweekly periods, or 12 monthly periods.</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Annual Salary</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Weekly</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Biweekly</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Monthly</th>
          </tr></thead>
          <tbody>
            {paycheckRows.map(([sal,wk,bwk,mo],i) => (
              <tr key={sal} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700, color: '#e2e8f0' }}>{sal}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 600 }}>{wk}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 600 }}>{bwk}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 600 }}>{mo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>California Take-Home Pay by Occupation (2026)</h2>
      <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.7 }}>Real take-home estimates for common California jobs, single filer 2026. Includes federal tax, CA state tax, FICA, and SDI.</p>
      <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 360 }}>
          <thead><tr style={{ background: 'rgba(99,102,241,0.12)' }}>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Job</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Avg CA Salary</th>
            <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e2e8f0' }}>Monthly Take-Home</th>
          </tr></thead>
          <tbody>
            {occupationExamples.map(([job, salary], i) => (
              <tr key={job} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0?'rgba(255,255,255,0.02)':'transparent' }}>
                <td style={{ padding: '10px 14px', fontWeight: 600, color: '#e2e8f0' }}>{job}</td>
                <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.65)' }}>{money(salary)}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80', fontWeight: 700 }}>{money(estimate(salary).netYear / 12)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 40 }}>More California Paycheck Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is taken out of a paycheck in California 2026?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{`For a $60,000 salary, this single-filer estimate includes ${money(60000 - ca60.netYear)} in federal income tax, FICA, estimated California income tax, and SDI (${ca60EffectiveRate}% of gross). Actual paycheck withholding varies with Forms W-4 and DE 4, pay frequency, benefits, and credits.`}</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is the California state income tax rate in 2026?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>California has 9 marginal tax brackets ranging from 1% to 13.3%. The 13.3% rate applies only to taxable income over $1 million; the marginal rate is not applied to all income.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does California have SDI tax?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>Yes. California SDI (State Disability Insurance) is 1.3% of gross wages in 2026 with no wage base cap. It is automatically withheld from every paycheck.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is a $75,000 salary take-home in California?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{`A $75,000 salary is estimated at ${money(ca75.netYear)}/year (${money(ca75.netYear / 12)}/month) for a single filer, before voluntary benefits and local taxes.`}</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What are California paycheck deductions in 2026?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>California paycheck deductions include: federal income tax (10% to 37%), Social Security (6.2% up to $184,500), Medicare (1.45%), California state income tax (1% to 13.3%), and SDI (1.3% with no wage cap).</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is taken out of a $50,000 salary in California?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{`A $50,000 salary is estimated at ${money(ca50.netYear)}/year take-home for a single filer. The estimate includes ${money(ca50.fed)} federal income tax, ${money(ca50.ss + ca50.med)} FICA, ${money(ca50.caState)} California income tax, and ${money(ca50.caSDI)} SDI.`}</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does California tax Social Security income?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>No. California does not tax Social Security benefits. This makes it relatively favorable for retirees despite having the highest state income tax rate in the US for wage earners.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $20/hour after taxes in California?</h3>
      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{`At 40 hours per week, $20/hour is $41,600 gross per year. The estimated take-home is ${money(ca41600.netYear)}/year or ${money(estimate(41600, 26).net)}/biweekly for a single filer.`}</p>

      <section aria-label="Sources and assumptions" style={{ marginTop: 32, color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 18, color: '#e8edf8' }}>Sources and assumptions</h2>
        <p>Annual estimate for a single filer using the 2026 federal tax brackets and standard deduction, 2026 Social Security wage base, FTB California tax schedule, and 2026 California SDI rate. Local taxes, credits beyond the configured exemption credit, benefits, and employee-specific withholding elections are not modeled.</p>
        <ul>
          <li><a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>IRS Revenue Procedure 2025-32 (2026 federal inflation adjustments)</a></li>
          <li><a href="https://www.irs.gov/publications/p15" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>IRS Publication 15 (2026 Social Security and Medicare rates)</a></li>
          <li><a href="https://www.ftb.ca.gov/forms/2026/2026-540-tax-rate-schedules.pdf" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>California FTB 2026 tax rate schedules</a></li>
          <li><a href="https://edd.ca.gov/en/payroll_taxes/rates_and_withholding/" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>California EDD payroll rates (2026 SDI)</a></li>
        </ul>
      </section>

      <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <LinkCardGrid title="Related Calculators" minCardWidth={150} links={[["/florida-paycheck-calculator","Florida Paycheck Calculator"],["/texas-paycheck-calculator","Texas Paycheck Calculator"],["/new-york-paycheck-calculator","New York Paycheck Calculator"],["/hourly-paycheck-calculator/california","California Hourly Calculator"],["/bonus-tax-calculator/california","California Bonus Tax Calculator"]]} />
      </div>
</main>
  )
}
