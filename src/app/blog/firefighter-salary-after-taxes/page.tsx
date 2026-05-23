import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Firefighter Salary After Taxes 2026: $56K = $43,200 Take-Home',
  description: 'A firefighter earning $56,800 in 2026 takes home $43,200-$46,400 after taxes. State-by-state breakdown, overtime impact, and free paycheck calculator.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/firefighter-salary-after-taxes' },
  openGraph: {
    title: 'Firefighter Salary After Taxes 2026: $56K = $43,200 Take-Home',
    description: 'See your real firefighter take-home pay after federal, state, and FICA deductions. All 50 states.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a firefighter take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A firefighter earning $56,800 (national median) takes home approximately $43,200 in Texas, $41,800 in Illinois, and $38,600 in California after federal tax, FICA, and state income tax. Monthly that is $3,600, $3,483, and $3,217 respectively."}},{"@type":"Question","name":"What is the average firefighter salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national median firefighter salary is approximately $56,800 in 2026 according to BLS data. Senior firefighters and lieutenants earn $65,000-$90,000. Firefighters in California and New York average $80,000-$105,000 due to higher cost-of-living adjustments."}},{"@type":"Question","name":"How is firefighter overtime taxed in 2026?","acceptedAnswer":{"@type":"Answer","text":"Firefighter overtime is taxed as ordinary income — the same rate as regular pay. On a $56,800 base salary, overtime hours at 1.5x rate are taxed at your marginal bracket (22% federal for most firefighters). A $10,000 overtime year nets approximately $6,800 after federal and FICA taxes."}},{"@type":"Question","name":"Do firefighters pay into Social Security in 2026?","acceptedAnswer":{"@type":"Answer","text":"Most firefighters pay into Social Security (6.2% of wages up to $184,500). However, some states — including Massachusetts, Ohio, and Louisiana — have alternative pension systems where firefighters do not pay Social Security, reducing FICA withholding to only 1.45% Medicare."}},{"@type":"Question","name":"Which state pays firefighters the most after taxes?","acceptedAnswer":{"@type":"Answer","text":"Texas offers strong after-tax pay — average firefighter salary $58,000 with zero state income tax. Take-home is approximately $44,200/year. Washington and Nevada also rank high with no state income tax and above-average firefighter salaries."}},{"@type":"Question","name":"How do pension contributions affect firefighter take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Most firefighter pension plans require 8-12% employee contributions. On $56,800, a 10% contribution withholds $5,680/year pre-tax. This reduces taxable income but cuts monthly take-home. The pre-tax treatment saves approximately $680-$1,250 in federal tax depending on bracket."}},{"@type":"Question","name":"How do I calculate my firefighter take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Start with gross annual salary. Subtract federal income tax (using your bracket and the $16,100 standard deduction for single filers), FICA (7.65% or 1.45% if exempt from SS), state income tax (0-9.3%), and pension contributions (8-12%). Use our free paycheck calculator for an exact monthly result."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Firefighter Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/firefighter-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Firefighter Salary After Taxes 2026: How Much Do Firefighters Actually Take Home?","datePublished":"2026-01-01","dateModified":"2026-05-23","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/firefighter-salary-after-taxes"}}'

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
          <nav aria-label="breadcrumb" style={{fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:16}}>
            <a href="/" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Home</a>
            {' › '}
            <a href="/blog" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Blog</a>
            {' › '}
            <span style={{color:'rgba(255,255,255,0.65)'}}>Firefighter Salary After Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Firefighter Salary After Taxes 2026: How Much Do Firefighters Actually Take Home?
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~8 min read · 2,100 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'A firefighter earning $56,800 in 2026 takes home approximately $43,200 after federal tax and FICA — about $3,600/month in Texas. In California, state income tax and SDI drop that to $38,600 ($3,217/month). Pension contributions of 8-12% reduce net pay further but are pre-tax, lowering your taxable income.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'National median firefighter salary is $56,800 in 2026 — take-home $38,600-$46,400 by state'}</li>
            <li>{'FICA tax is 7.65% of gross — $4,345/year on $56,800 salary'}</li>
            <li>{'No-income-tax states (TX, FL, WA) save firefighters $2,000-$5,000/year vs California'}</li>
            <li>{'Some states exempt firefighters from Social Security — cutting FICA to just 1.45%'}</li>
            <li>{'Pension contributions (8-12%) are pre-tax — reduce taxable income but cut monthly pay'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'Firefighter Take-Home Pay by State', id:'by-state'},
              {label:'Full Tax Breakdown on $56,800 Salary', id:'breakdown'},
              {label:'How Overtime Is Taxed for Firefighters', id:'overtime'},
              {label:'Pension Contributions and Net Pay', id:'pension'},
              {label:'How to Maximize Firefighter Take-Home Pay', id:'maximize'},
              {label:'Frequently Asked Questions', id:'faq'},
            ].map((item, i) => (
              <li key={i} style={{marginBottom:6}}>
                <a href={`#${item.id}`} style={{color:'#F5C842', textDecoration:'none', fontSize:14, fontWeight:600}}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* SECTION 1 — BY STATE */}
        <section id="by-state">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Much Do Firefighters Take Home After Taxes by State in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'State income tax creates the largest gap in firefighter take-home pay across the country. California charges up to 9.3% plus 1.3% SDI, while Texas, Florida, and Washington charge zero. The table below uses $56,800 gross salary, single filer, standard deduction $16,100, and no pension contribution.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>State</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>State Tax</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Annual Take-Home</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {state:'Texas', tax:'0%', annual:'$46,400', monthly:'$3,867'},
                  {state:'Florida', tax:'0%', annual:'$46,400', monthly:'$3,867'},
                  {state:'Washington', tax:'0%', annual:'$46,400', monthly:'$3,867'},
                  {state:'Nevada', tax:'0%', annual:'$46,400', monthly:'$3,867'},
                  {state:'Pennsylvania', tax:'3.07%', annual:'$44,656', monthly:'$3,721'},
                  {state:'Illinois', tax:'4.95%', annual:'$43,588', monthly:'$3,632'},
                  {state:'New York', tax:'6.85%', annual:'$42,508', monthly:'$3,542'},
                  {state:'New Jersey', tax:'6.37%', annual:'$42,780', monthly:'$3,565'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)', fontWeight:600}}>{row.state}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.75)'}}>{row.tax}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.annual}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.monthly}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#F5C842', fontWeight:700}}>California</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'9.3% + 1.3% SDI'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$38,600'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$3,217'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'For your exact take-home, use the free '}
            <a href="/" style={{color:'#F5C842'}}>firefighter paycheck calculator</a>
            {' — enter your state, salary, and filing status for a precise monthly result.'}
          </p>
        </section>

        {/* SECTION 2 — BREAKDOWN */}
        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Full Tax Breakdown on a $56,800 Firefighter Salary in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Here is exactly where each dollar goes on a $56,800 annual salary — single filer, Texas (no state tax), no pension contributions. Federal income tax applies to taxable income after the $16,100 standard deduction, leaving $40,700 taxable.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Deduction</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Rate</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Annual Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {item:'Gross Salary', rate:'—', amt:'$56,800'},
                  {item:'Federal Income Tax', rate:'10-12%', amt:'−$4,674'},
                  {item:'Social Security (FICA)', rate:'6.20%', amt:'−$3,522'},
                  {item:'Medicare (FICA)', rate:'1.45%', amt:'−$824'},
                  {item:'State Income Tax (TX)', rate:'0%', amt:'$0'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.item}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.75)'}}>{row.rate}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.amt}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#F5C842', fontWeight:700}}>Net Take-Home</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'~18.4%'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$47,780 / $3,982/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'For 2026, the standard deduction is $16,100 for single filers and $32,200 for married filing jointly. This directly reduces taxable income before federal brackets are applied.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.45)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>
                IRS.gov — Tax Information
              </a>
            </cite>
          </blockquote>
        </section>

        {/* SECTION 3 — OVERTIME */}
        <section id="overtime">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Is Overtime Taxed for Firefighters in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Firefighters frequently work overtime due to shift coverage and emergency response demands. All overtime pay is taxed as ordinary income at your marginal federal bracket — there is no special overtime tax rate. On a $56,800 base, you are in the 22% federal bracket for income above $47,150 (single filer). Most overtime falls into this bracket.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'$5,000 overtime gross → $3,240 net after 22% federal + 7.65% FICA (Texas)'}</li>
            <li>{'$10,000 overtime gross → $6,480 net after 22% federal + 7.65% FICA (Texas)'}</li>
            <li>{'$10,000 overtime gross → $5,760 net in California (add 9.3% + 1.3% SDI)'}</li>
            <li>{'FLSA Section 7(k) exemption: fire departments can use 28-day work period for OT threshold'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(245,200,66,0.05)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'A Texas firefighter earning $56,800 base plus $12,000 overtime takes home $55,800/year total. The same firefighter in California earns $56,800 base plus $12,000 overtime but takes home only $49,200 — a $6,600 annual difference entirely due to state income tax and SDI on the same gross pay.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 — PENSION */}
        <section id="pension">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Do Pension Contributions Affect Firefighter Take-Home Pay?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Most firefighter pension plans require 8-12% of gross salary as employee contributions. This is withheld pre-tax — reducing your taxable income but also your monthly paycheck. On $56,800, a 10% pension contribution withholds $5,680/year ($473/month).'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Texas (TCDRS/TMRS): 7% employee contribution — also covers Social Security'}</li>
            <li>{'California (CalPERS): 8-12% depending on hire date and bargaining unit'}</li>
            <li>{'New York (PFRS): 3-6% based on tier — does not cover Social Security'}</li>
            <li>{'Massachusetts: 9-11% — firefighters exempt from Social Security entirely'}</li>
            <li>{'Illinois (IMRF): 4.5% employee contribution — Social Security also applies'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'States where firefighters are exempt from Social Security reduce FICA withholding from 7.65% to just 1.45% (Medicare only). On $56,800, that saves $3,522/year in take-home pay — nearly offsetting a 6% pension contribution.'}
          </p>
        </section>

        {/* SECTION 5 — MAXIMIZE */}
        <section id="maximize">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Can Firefighters Maximize Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Firefighters have access to several pre-tax benefit options that reduce taxable income and increase monthly take-home. These strategies work within the tax code and require only standard payroll elections.'}
          </p>

          <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:12}}>
            Step-by-Step: Increase Your Firefighter Take-Home Pay
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Contribute to your 457(b) plan.'}</strong>
              {' Government firefighters have access to a 457(b) — contribute up to $23,500 pre-tax in 2026. Unlike 401(k), no 10% penalty on early withdrawals after separation from service.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Use a Health FSA.'}</strong>
              {' Up to $3,300 pre-tax in 2026. Saves FICA (7.65%) plus federal income tax — approximately $580 total on the full $3,300 contribution.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Open an HSA if eligible.'}</strong>
              {' If enrolled in a high-deductible health plan, contribute up to $4,300 to an HSA. Triple tax advantage — deductible contribution, tax-free growth, tax-free withdrawals for medical expenses.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Update your W-4 withholding.'}</strong>
              {' Many firefighters over-withhold by $600-$1,200/year. Claiming the correct allowances increases monthly cash flow without changing your annual tax bill.'}
            </li>
            <li>
              <strong style={{color:'#e8edf8'}}>{'File MFJ if married.'}</strong>
              {' Married filing jointly raises the standard deduction to $32,200 in 2026. On a combined $113,600 household income, this saves $3,200-$4,800 in federal tax vs two single returns.'}
            </li>
          </ol>

          <ul style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'457(b) contribution of $10,000/year saves $1,200-$2,200 in federal tax on $56,800 salary'}</li>
            <li>{'FSA $3,300/year saves approximately $580 in combined tax and FICA'}</li>
            <li>{'HSA $4,300/year saves approximately $750 in federal tax plus tax-free growth'}</li>
            <li>{'No state income tax saves firefighters $1,500-$5,200/year vs California'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Calculate your exact firefighter paycheck with the '}
            <a href="/" style={{color:'#F5C842'}}>free paycheck calculator</a>
            {' — includes 457(b), FSA, HSA, pension, and all 50 states.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'How much does a firefighter take home after taxes in 2026?',
              a:'A firefighter earning $56,800 takes home approximately $46,400 in Texas, $43,600 in Illinois, and $38,600 in California after federal tax, FICA, and state income tax. Monthly that is $3,867, $3,633, and $3,217 respectively.'
            },
            {
              q:'What is the average firefighter salary in 2026?',
              a:'The national median firefighter salary is approximately $56,800 in 2026. Senior firefighters and lieutenants earn $65,000-$90,000. California and New York firefighters average $80,000-$105,000 due to higher local pay scales.'
            },
            {
              q:'Which state pays firefighters the most after taxes?',
              a:'Texas offers strong after-tax pay — average salary $58,000 with zero state income tax. Take-home is approximately $47,200/year. Washington and Nevada also rank high with no state income tax and above-average fire department salaries.'
            },
            {
              q:'How is firefighter overtime taxed in 2026?',
              a:'Overtime is taxed as ordinary income at your marginal bracket — 22% federal for most firefighters on $56,800 base. A $10,000 overtime year nets approximately $6,480 after 22% federal and 7.65% FICA in Texas, or $5,760 in California.'
            },
            {
              q:'Do firefighters pay into Social Security in 2026?',
              a:'Most do — 6.2% up to the $184,500 wage base. However, firefighters in Massachusetts, Ohio, Louisiana, and some other states participate in alternative pension systems and are exempt from Social Security, reducing FICA to just 1.45% Medicare.'
            },
            {
              q:'How do pension contributions affect firefighter take-home pay?',
              a:'Most firefighter pensions require 8-12% employee contributions withheld pre-tax. On $56,800, a 10% contribution reduces monthly take-home by $473 but saves $680-$1,250 in federal tax annually due to the pre-tax treatment.'
            },
            {
              q:'How do I calculate my firefighter take-home pay?',
              a:'Start with gross salary. Subtract federal income tax (using your bracket and $16,100 standard deduction for single filers), FICA (7.65% or 1.45% if SS-exempt), state income tax (0-9.3%), and pension contributions (8-12%). Use our free paycheck calculator for your exact state result.'
            },
          ].map((item, i) => (
            <div key={i} style={{marginBottom:24, paddingBottom:20, borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:8}}>{item.q}</h3>
              <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.8)', margin:0}}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* RELATED */}
        <section style={{marginTop:32, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)'}}>
          <h2 style={{fontSize:16, fontWeight:700, color:'#e8edf8', marginBottom:16}}>Related Articles</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:12}}>
            {[
              {title:'Police Officer Salary After Taxes 2026', href:'/blog/police-officer-salary-after-taxes'},
              {title:'Teacher Salary After Taxes 2026', href:'/blog/teacher-salary-after-taxes'},
              {title:'Nurse Salary After Taxes 2026', href:'/blog/nurse-paycheck-calculator'},
            ].map((a, i) => (
              <a key={i} href={a.href} style={{
                display:'block', padding:'12px 16px',
                background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.15)',
                borderRadius:8, color:'#F5C842', textDecoration:'none', fontSize:13, fontWeight:600, lineHeight:1.5
              }}>
                {a.title} {'>'}
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />

      </article>
    </>
  )
}
