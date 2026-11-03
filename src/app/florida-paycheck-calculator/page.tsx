import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
import LinkCardGrid from '@/components/LinkCardGrid'
import { estimateCaPaycheck } from '@/lib/caTax'
import { FEDERAL_BRACKETS_SINGLE, STANDARD_DEDUCTION } from '@/lib/taxRates2026'
import { estimatePaycheck } from '@/lib/paycheck'
import { stateIncomeTax } from '@/lib/stateTax'

export const metadata: Metadata = {
  title: 'Florida Paycheck Calculator 2026 — $75K = $61,593 Take-Home (No State Tax)',
  description: 'Free Florida paycheck calculator 2026. No state income tax — $75K salary = ~$61,593 take-home after federal tax and FICA only. Instant results, no signup.',
  alternates: { canonical: 'https://www.privatepaycheck.com/florida-paycheck-calculator' },
  openGraph: {
    url: 'https://www.privatepaycheck.com/florida-paycheck-calculator',
    title: 'Florida Paycheck Calculator 2026 — $75K = $61,593 Take-Home (No State Tax)',
    description: 'Calculate your Florida take-home pay after federal tax and FICA. No state income tax in 2026.',
    type: 'article',
  },
}

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Florida Paycheck Calculator 2026","item":"https://www.privatepaycheck.com/florida-paycheck-calculator"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Florida Paycheck Calculator 2026: Take-Home Pay After Taxes","datePublished":"2026-01-01","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"reviewedBy":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/florida-paycheck-calculator"}}'

const money = (amount: number) => '$' + Math.round(amount).toLocaleString('en-US')
const floridaEstimate = (annual: number, freq = 1) =>
  estimatePaycheck({ annual, freq, stateRatePct: 0, filing: 'single', k401Pct: 0 })
const fl75 = floridaEstimate(75000)
const ca75 = estimateCaPaycheck({ annual: 75000, freq: 1, filing: 'single' })
const salaryRows = [30000, 40000, 50000, 60000, 75000, 100000, 150000, 200000].map((annual) => {
  const taxableIncome = Math.max(0, annual - STANDARD_DEDUCTION.single)
  const bracket = FEDERAL_BRACKETS_SINGLE.find(({ max }) => taxableIncome <= max)?.rate ?? 0.37
  const result = floridaEstimate(annual)
  return [money(annual), money(annual / 12), money(result.net), money(floridaEstimate(annual, 26).net), `${Math.round(bracket * 100)}%`]
})

const hourlyRows = [15, 20, 25, 30, 50].map((rate, index) => {
  const annual = rate * 2080
  const result = floridaEstimate(annual)
  return [index === 0 ? '$15.00 (current min wage)' : `$${rate}/hr`, money(annual), money(result.net), money(floridaEstimate(annual, 26).net)]
})
const fl75Net = money(fl75.net)
const fl75Monthly = money(fl75.net / 12)
const flMinWageAnnual = 15 * 2080
const flMinWageNet = floridaEstimate(flMinWageAnnual)
const caDifference = money(fl75.net - ca75.net)
const fl60Biweekly = money(floridaEstimate(60000, 26).net)
const fl60Monthly = money(floridaEstimate(60000).net / 12)
const comparisonValues: [string, number, number][] = [
  ['Florida', 0, fl75.net],
  ['Texas', 0, fl75.net],
  ['Nevada', 0, fl75.net],
  ['Washington', 0, fl75.net],
  ['Georgia', stateIncomeTax('ga', 75000, 'single'), fl75.net - stateIncomeTax('ga', 75000, 'single')],
  ['New York', stateIncomeTax('ny', 75000, 'single'), fl75.net - stateIncomeTax('ny', 75000, 'single')],
  ['California', fl75.net - ca75.net, ca75.net],
  ['Oregon', stateIncomeTax('or', 75000, 'single'), fl75.net - stateIncomeTax('or', 75000, 'single')],
]
const comparisonRows = comparisonValues.map(([state, tax, net]): [string, string, string, string] => [
  state,
  money(tax),
  money(net),
  net === fl75.net ? '$0' : `${net < fl75.net ? '-' : ''}${money(Math.abs(net - fl75.net))}`,
])
const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does Florida have state income tax in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'No. Florida has no state individual income tax. This estimate includes federal income tax and FICA only.' } },
    { '@type': 'Question', name: 'How much is a $75,000 salary take-home in Florida in 2026?', acceptedAnswer: { '@type': 'Answer', text: `About ${fl75Net} per year (${fl75Monthly} per month) for a single filer using the standard deduction, before benefits or other payroll deductions.` } },
    { '@type': 'Question', name: 'What taxes are taken out of a Florida paycheck?', acceptedAnswer: { '@type': 'Answer', text: 'Federal income tax and FICA (Social Security and Medicare) generally apply. Florida has no state individual income tax.' } },
    { '@type': 'Question', name: 'How does Florida compare to California for take-home pay?', acceptedAnswer: { '@type': 'Answer', text: `Under these calculator assumptions, take-home on $75,000 is ${fl75Net} in Florida and ${money(ca75.net)} in California, a difference of ${caDifference} per year.` } },
    { '@type': 'Question', name: 'What is the Florida minimum wage in 2026?', acceptedAnswer: { '@type': 'Answer', text: `Florida's minimum wage became $15 per hour on September 30, 2026. At 2,080 hours per year, that is ${money(flMinWageAnnual)} gross; estimated take-home is ${money(flMinWageNet.net)} for a single filer before benefits or other payroll deductions.` } },
    { '@type': 'Question', name: 'Do I need to pay quarterly taxes as a Florida freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'Self-employed people may need to make federal estimated tax payments. Federal deadlines and liability depend on individual circumstances; Florida has no state individual income tax.' } },
    { '@type': 'Question', name: 'How do I reduce taxes on my Florida paycheck?', acceptedAnswer: { '@type': 'Answer', text: 'Eligible workers may reduce federal taxable income with qualifying pre-tax retirement and health-plan contributions. Contribution limits and eligibility rules apply; traditional 401(k) deferrals generally remain subject to Social Security and Medicare taxes.' } },
    { '@type': 'Question', name: 'Is overtime taxed differently in Florida in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Eligible workers may claim a federal deduction of up to $12,500 ($25,000 for joint filers) for qualified overtime compensation, subject to eligibility and income limits. It is not an exemption from payroll taxes.' } },
    { '@type': 'Question', name: 'What is the biweekly take-home for $60,000 in Florida?', acceptedAnswer: { '@type': 'Answer', text: `${fl60Biweekly} per biweekly pay period (26 periods) and approximately ${fl60Monthly} per month for a single filer using the standard deduction, before benefits or other payroll deductions.` } },
  ],
})

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: breadcrumbSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: articleSchema}} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{maxWidth:780, margin:'0 auto', padding:'clamp(14px,4vw,28px)', background:'#0f0c29', color:'#e8edf8', minHeight:'100vh'}}
      >
        <header>
          <nav aria-label="breadcrumb" style={{fontSize:13, color:'rgba(255,255,255,0.65)', marginBottom:16}}>
            <a href="/" style={{color:'rgba(255,255,255,0.65)', textDecoration:'none'}}>Home</a>
            {' › '}
            <span style={{color:'rgba(255,255,255,0.65)'}}>Florida Paycheck Calculator 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Florida Paycheck Calculator 2026: How Much Is Your Take-Home Pay?
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: November 2, 2026</span>
            <span>{'·'}</span>
            <span>By the PrivatePaycheck Team</span>
            <span>{'·'}</span>
            <span>{'~7 min read · 1,800 words'}</span>
          </div>
        </header>

        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {`A $75,000 salary in Florida gives an estimated ${fl75Net}/year take-home (${fl75Monthly}/month) for a single filer in 2026. Florida has no state individual income tax; this estimate includes federal income tax and FICA. Compared with the California estimate on the same assumptions, the difference is ${caDifference}/year.`}
          </p>
        </div>

        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Florida has zero state income tax — only federal + FICA (7.65%) withheld'}</li>
            <li>{`$75,000 salary = estimated ${fl75Net}/year take-home (${fl75Monthly}/month) for a single filer`}</li>
            <li>{`Estimated Florida take-home is ${caDifference}/year higher than California on the same $75,000 assumptions`}</li>
            <li>{`Florida's minimum wage is $15/hour as of September 30, 2026 (${money(flMinWageAnnual)} gross/year at 2,080 hours)`}</li>
            <li>{'Eligible workers may deduct up to $12,500 of qualified overtime compensation from federal taxable income ($25,000 for joint filers); payroll taxes still apply'}</li>
            <li>{'The 2026 employee 401(k) elective deferral limit is $24,500; eligibility and plan rules apply'}</li>
          </ul>
        </div>

        <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2, fontSize:14, color:'rgba(255,255,255,0.8)'}}>
            <li><a href="#salary-table" style={{color:'rgba(245,200,66,0.9)', textDecoration:'none'}}>Florida Take-Home Pay by Salary</a></li>
            <li><a href="#how-calculated" style={{color:'rgba(245,200,66,0.9)', textDecoration:'none'}}>How Is Florida Paycheck Calculated?</a></li>
            <li><a href="#vs-other-states" style={{color:'rgba(245,200,66,0.9)', textDecoration:'none'}}>Florida vs California vs New York</a></li>
            <li><a href="#hourly" style={{color:'rgba(245,200,66,0.9)', textDecoration:'none'}}>Hourly Wage Take-Home</a></li>
            <li><a href="#tips" style={{color:'rgba(245,200,66,0.9)', textDecoration:'none'}}>How to Maximize Take-Home Pay</a></li>
            <li><a href="#faq" style={{color:'rgba(245,200,66,0.9)', textDecoration:'none'}}>FAQ</a></li>
          </ol>
        </div>

        <section id="salary-table">
          <h2 style={{fontSize:'clamp(18px,4vw,22px)', fontWeight:800, color:'#e8edf8', marginBottom:8, marginTop:36}}>
            What Is Florida Take-Home Pay by Salary in 2026?
          </h2>
          <p style={{fontSize:15, color:'rgba(255,255,255,0.8)', marginBottom:4, fontWeight:700}}>
            {'Florida has no state individual income tax, so this estimate includes federal income tax and FICA only.'}
          </p>
          <p style={{fontSize:14, color:'rgba(255,255,255,0.7)', marginBottom:16, lineHeight:1.8}}>
            {'The table below shows annual salary, monthly gross, annual take-home, and biweekly net for a single filer claiming the standard deduction in Florida 2026. Only federal income tax and FICA are deducted.'}
          </p>
          <div style={{overflowX:'auto', marginBottom:24, borderRadius:8, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:480}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.1)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Annual Salary</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Monthly Gross</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Take-Home/Year</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Biweekly Net</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Fed Bracket</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([sal,mo,net,bw,br], i) => (
                  <tr key={sal} style={{borderBottom:'1px solid rgba(255,255,255,0.05)', background: i === salaryRows.length-1 ? 'rgba(245,200,66,0.08)' : i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                    <td style={{padding:'10px 14px', fontWeight:700, color: i === salaryRows.length-1 ? '#F5C842' : '#e8edf8', borderTop: i === salaryRows.length-1 ? '1px solid rgba(245,200,66,0.3)' : 'none'}}>{sal}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.65)'}}>{mo}</td>
                    <td style={{padding:'10px 14px', color: i === salaryRows.length-1 ? '#F5C842' : '#4ade80', fontWeight:700}}>{net}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.8)'}}>{bw}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.6)', fontSize:13}}>{br}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="how-calculated">
          <h2 style={{fontSize:'clamp(18px,4vw,22px)', fontWeight:800, color:'#e8edf8', marginBottom:8, marginTop:36}}>
            How Is a Florida Paycheck Calculated in 2026?
          </h2>
          <p style={{fontSize:15, color:'rgba(255,255,255,0.8)', marginBottom:8, fontWeight:700}}>
            {'Estimated Florida paycheck = gross pay minus federal income tax and FICA. Florida has no state individual income tax.'}
          </p>
          <p style={{fontSize:14, color:'rgba(255,255,255,0.7)', marginBottom:16, lineHeight:1.8}}>
            {'Here is the step-by-step calculation for a $75,000 Florida salary in 2026:'}
          </p>
          <ol style={{margin:'0 0 20px 0', padding:'0 0 0 20px', fontSize:14, lineHeight:2, color:'rgba(255,255,255,0.8)'}}>
            <li>{'Gross salary: $75,000'}</li>
            <li>{'Subtract standard deduction: $75,000 - $16,100 = $58,900 taxable income'}</li>
            <li>{'Federal income tax on $58,900: $1,240 (10%) + $4,560 (12%) + $1,870 (22%) = $7,670'}</li>
            <li>{'FICA: $75,000 x 7.65% = $5,738'}</li>
            <li>{'Florida state tax: $0'}</li>
            <li>{'Take-home: $75,000 - $7,670 - $5,737.50 = $61,592.50 (rounded to $61,593)'}</li>
          </ol>

          <div style={{overflowX:'auto', marginBottom:24, borderRadius:8, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:380}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.1)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Deduction</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Rate</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Amount on $75K</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Federal Income Tax','2026 progressive brackets',money(fl75.fed)],
                  ['Social Security','6.2% on first $184,500',money(fl75.ss)],
                  ['Medicare','1.45%',money(fl75.med)],
                  ['Florida State Income Tax','None','$0'],
                  ['Total Deductions','',money(fl75.gross - fl75.net)],
                  ['Estimated Take-Home','',money(fl75.net)],
                ].map(([d,r,a],i) => (
                  <tr key={d} style={{borderBottom:'1px solid rgba(255,255,255,0.05)', background: i >= 4 ? 'rgba(245,200,66,0.08)' : 'transparent'}}>
                    <td style={{padding:'10px 14px', color: i >= 4 ? '#F5C842' : '#e8edf8', fontWeight: i >= 4 ? 700 : 400, borderTop: i === 4 ? '1px solid rgba(245,200,66,0.3)' : 'none'}}>{d}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.6)', fontSize:13}}>{r}</td>
                    <td style={{padding:'10px 14px', color: i >= 4 ? '#F5C842' : '#4ade80', fontWeight: i >= 4 ? 700 : 600}}>{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.6)', padding:'12px 16px', margin:'24px 0', color:'rgba(200,216,236,0.8)', fontSize:14, fontStyle:'italic', background:'rgba(245,200,66,0.05)', borderRadius:'0 6px 6px 0'}}>
            {'Self-employed individuals must pay both the employee and employer portions of Social Security and Medicare taxes, totalling 15.3% on net earnings up to $184,500.'} &mdash; <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>IRS.gov &mdash; Self-Employed Tax Center</a>
          </blockquote>
        </section>

        <section id="vs-other-states">
          <h2 style={{fontSize:'clamp(18px,4vw,22px)', fontWeight:800, color:'#e8edf8', marginBottom:8, marginTop:36}}>
            How Does Florida Compare to Other States for Take-Home Pay?
          </h2>
          <p style={{fontSize:15, color:'rgba(255,255,255,0.8)', marginBottom:8, fontWeight:700}}>
            {`On a $75,000 salary, the Florida estimate is ${caDifference} higher per year than the California estimate with the same federal assumptions.`}
          </p>
          <div style={{overflowX:'auto', marginBottom:24, borderRadius:8, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:420}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.1)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>State</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>State Income Tax / SDI Estimate</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Estimated Take-Home on $75K</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>vs Florida</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([st,tax,net,diff],i) => (
                  <tr key={st} style={{borderBottom:'1px solid rgba(255,255,255,0.05)', background: i === 0 ? 'rgba(245,200,66,0.08)' : 'transparent', borderTop: i === 0 ? '1px solid rgba(245,200,66,0.3)' : 'none'}}>
                    <td style={{padding:'10px 14px', fontWeight: i===0 ? 800 : 600, color: i===0 ? '#F5C842' : '#e8edf8'}}>{st}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.6)', fontSize:13}}>{tax}</td>
                    <td style={{padding:'10px 14px', color: i===0 ? '#F5C842' : '#4ade80', fontWeight:700}}>{net}</td>
                    <td style={{padding:'10px 14px', color: diff.startsWith('-') ? '#f87171' : i===0 ? '#F5C842' : '#4ade80', fontWeight:600}}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul style={{margin:'0 0 24px 0', padding:'0 0 0 20px', fontSize:14, lineHeight:2, color:'rgba(255,255,255,0.8)'}}>
            <li>{'Florida, Texas, Nevada, and Washington all have zero state income tax'}</li>
            <li>{`California state income tax and SDI increase estimated deductions by ${caDifference}/year compared with Florida on a $75,000 salary`}</li>
            <li>{'Oregon and New York state income taxes can add to paycheck deductions; local taxes are not included here'}</li>
            <li>{'Florida also has no state disability insurance (unlike CA SDI at 1.3%)'}</li>
            <li>{'Florida has no local individual income tax; some cities elsewhere, including New York City, levy local income taxes'}</li>
          </ul>
        </section>

        <section id="hourly">
          <h2 style={{fontSize:'clamp(18px,4vw,22px)', fontWeight:800, color:'#e8edf8', marginBottom:8, marginTop:36}}>
            What Is Florida Hourly Wage Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:15, color:'rgba(255,255,255,0.8)', marginBottom:8, fontWeight:700}}>
            {`Florida's minimum wage is $15.00/hour as of September 30, 2026. At 2,080 hours, estimated take-home is ${money(flMinWageNet.net)} per year (${money(flMinWageNet.net / 2080)}/hour) for a single filer, before benefits or other payroll deductions.`}
          </p>
          <div style={{overflowX:'auto', marginBottom:24, borderRadius:8, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:420}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.1)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Hourly Rate</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Annual Gross</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Take-Home/Year</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, fontSize:13}}>Biweekly Net</th>
                </tr>
              </thead>
              <tbody>
                {hourlyRows.map(([rate,gross,net,bw],i) => (
                  <tr key={rate} style={{borderBottom:'1px solid rgba(255,255,255,0.05)', background: i === hourlyRows.length-1 ? 'rgba(245,200,66,0.08)' : i%2===0?'rgba(255,255,255,0.02)':'transparent', borderTop: i === hourlyRows.length-1 ? '1px solid rgba(245,200,66,0.3)' : 'none'}}>
                    <td style={{padding:'10px 14px', fontWeight:700, color: i === hourlyRows.length-1 ? '#F5C842' : '#e8edf8'}}>{rate}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.65)'}}>{gross}</td>
                    <td style={{padding:'10px 14px', color: i === hourlyRows.length-1 ? '#F5C842' : '#4ade80', fontWeight:700}}>{net}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.8)'}}>{bw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="tips">
          <h2 style={{fontSize:'clamp(18px,4vw,22px)', fontWeight:800, color:'#e8edf8', marginBottom:8, marginTop:36}}>
            How Can You Maximize Take-Home Pay in Florida?
          </h2>
          <p style={{fontSize:15, color:'rgba(255,255,255,0.8)', marginBottom:12, fontWeight:700}}>
            {'Even without state tax, Florida workers can reduce federal tax with these pre-tax strategies:'}
          </p>
          <ul style={{margin:'0 0 16px 0', padding:'0 0 0 20px', fontSize:14, lineHeight:2, color:'rgba(255,255,255,0.8)'}}>
            <li>{'401(k): the 2026 employee elective deferral limit is $24,500; traditional deferrals generally remain subject to Social Security and Medicare taxes'}</li>
            <li>{'HSA: 2026 contribution limits are $4,400 for self-only coverage and $8,750 for family coverage, subject to eligibility'}</li>
            <li>{'Health FSA: the 2026 salary-reduction limit is $3,400; plan terms and eligibility apply'}</li>
            <li>{'Traditional IRA: the 2026 contribution limit is $7,500, plus a $1,100 catch-up limit for people age 50 or older; deductibility rules apply'}</li>
            <li>{'Qualified overtime compensation may be eligible for a federal deduction up to $12,500 ($25,000 for joint filers), subject to income limits; FICA still applies'}</li>
            <li>{'Qualified tips may be eligible for a federal deduction up to $25,000, subject to income limits; FICA still applies'}</li>
          </ul>

          <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <p style={{margin:0, fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)'}}>
              {'Example: A single filer earning $75,000 with the standard deduction has estimated federal income tax of $7,670 before a 401(k) deferral. A full $24,500 traditional 401(k) deferral lowers estimated federal income tax to $3,880, a $3,790 reduction. The deferral remains subject to Social Security and Medicare taxes.'}
            </p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:24}}>
            {[
              {city:'Miami', annual:62000},
              {city:'Orlando', annual:55000},
              {city:'Tampa', annual:58000},
              {city:'Jacksonville', annual:52000},
            ].map(c => (
              <div key={c.city} style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'14px 16px'}}>
                <div style={{fontWeight:800, color:'#e8edf8', marginBottom:4}}>{c.city}</div>
                <div style={{fontSize:13, color:'rgba(255,255,255,0.6)'}}>{'Illustrative salary: '}{money(c.annual)}</div>
                <div style={{fontSize:15, fontWeight:700, color:'#4ade80', margin:'6px 0'}}>{'Estimated take-home: '}{money(floridaEstimate(c.annual).net)}{'/yr'}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,22px)', fontWeight:800, color:'#e8edf8', marginBottom:16, marginTop:36}}>
            Florida Paycheck Calculator FAQ 2026
          </h2>
          {[
            ['Does Florida have state income tax in 2026?','No. Florida has no state individual income tax. This estimate includes federal income tax and FICA only.'],
            ['How much is a $75,000 salary take-home in Florida 2026?',`About ${fl75Net}/year (${fl75Monthly}/month) for a single filer using the standard deduction, before benefits or other payroll deductions.`],
            ['What taxes are deducted from a Florida paycheck?','Federal income tax under progressive 2026 brackets (10%-37%) and FICA (6.2% Social Security plus 1.45% Medicare, subject to applicable limits). Florida has no state individual income tax.'],
            ['How does Florida compare to California take-home pay?',`Under these calculator assumptions, take-home on $75,000 is ${fl75Net} in Florida and ${money(ca75.net)} in California, a difference of ${caDifference}/year.`],
            ['What is the Florida minimum wage in 2026?',`Florida's minimum wage became $15 per hour on September 30, 2026. At 2,080 hours per year, that is ${money(flMinWageAnnual)} gross; estimated take-home is ${money(flMinWageNet.net)} for a single filer before benefits or other payroll deductions.`],
          ].map(([q,a]) => (
            <div key={q as string} style={{borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'16px 0'}}>
              <div style={{fontWeight:700, color:'#e8edf8', marginBottom:6, fontSize:15}}>{q}</div>
              <div style={{color:'rgba(255,255,255,0.75)', fontSize:14, lineHeight:1.8}}>{a}</div>
            </div>
          ))}
        </section>

        <section aria-label="Sources and assumptions" style={{marginTop:32, color:'rgba(255,255,255,0.65)', fontSize:13, lineHeight:1.8}}>
          <h2 style={{fontSize:18, color:'#e8edf8'}}>Sources and assumptions</h2>
          <p>Annualized estimates for a single filer using the 2026 federal standard deduction and tax brackets, Social Security wage base, and Medicare rates. Florida has no state individual income tax. Cross-state comparisons are estimates and may exclude state-specific adjustments and local taxes. Estimates exclude benefits, tax credits, and individual withholding elections. Minimum-wage annualization assumes 2,080 hours.</p>
          <ul>
            <li><a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noreferrer" style={{color:'#F5C842'}}>IRS Revenue Procedure 2025-32 (2026 federal tax adjustments)</a></li>
            <li><a href="https://www.irs.gov/publications/p15" target="_blank" rel="noreferrer" style={{color:'#F5C842'}}>IRS Publication 15 (2026 payroll tax rates)</a></li>
            <li><a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noreferrer" style={{color:'#F5C842'}}>IRS 2026 retirement contribution limits</a></li>
            <li><a href="https://www.ftb.ca.gov/forms/2026/2026-540-tax-rate-schedules.pdf" target="_blank" rel="noreferrer" style={{color:'#F5C842'}}>California FTB 2026 tax rate schedules</a></li>
            <li><a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noreferrer" style={{color:'#F5C842'}}>U.S. Department of Labor state minimum-wage table</a></li>
          </ul>
        </section>

        <div style={{marginTop:32, paddingTop:24, borderTop:"1px solid rgba(255,255,255,0.08)"}}>
          <LinkCardGrid title="Related Calculators" minCardWidth={150} links={[["/texas-paycheck-calculator","Texas Paycheck Calculator"],["/california-paycheck-calculator","California Paycheck Calculator"],["/new-york-paycheck-calculator","New York Paycheck Calculator"],["/bonus-tax-calculator","Bonus Tax Calculator"],["/hourly-paycheck-calculator","Hourly Paycheck Calculator"],["/methodology","2026 Tax Methodology"]]} />
        </div>

        <AuthorBox />
      </article>
    </>
  )
}
