import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Police Officer Salary After Taxes 2026: $65K = $54,408 Take-Home',
  description: 'Police officer on $65K takes home $54,408 in Texas (single, no pension). Covers pension, overtime, state taxes. State-by-state breakdown + free paycheck calculator.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes' },
  openGraph: {
    title: 'Police Officer Salary After Taxes 2026: $65K = $54,408 Take-Home',
    description: 'See your real police officer take-home pay after federal, state, FICA, and pension deductions.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a police officer take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A police officer earning $65,000 takes home approximately $54,408 in Texas, $51,335 in Illinois, and $51,673 in California after federal tax, FICA, and state tax — before pension contributions."}},{"@type":"Question","name":"What is the average police officer salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"Police pay varies widely by department, state, and overtime. This guide uses a $65,000 example salary; check your own department pay scale for exact figures."}},{"@type":"Question","name":"How much do police officers pay into pensions?","acceptedAnswer":{"@type":"Answer","text":"Most police pension plans require 8-12% employee contributions. On a $65,000 salary, that is $5,200-$7,800 withheld per year. These contributions are pre-tax in most states, reducing taxable income."}},{"@type":"Question","name":"Does police overtime get taxed at a higher rate?","acceptedAnswer":{"@type":"Answer","text":"Overtime is taxed as regular income — there is no special overtime tax rate. However, overtime pushes total income into higher brackets. On $20,000 of overtime added to a $65,000 base, the first $1,500 or so is taxed at 12% federal and the rest at 22%, so federal tax rises by about $4,250."}},{"@type":"Question","name":"Which state pays police officers the most after taxes?","acceptedAnswer":{"@type":"Answer","text":"Among the states in our table, Texas and Florida leave the most because they have no state income tax: a single officer earning $65,000 takes home about $54,408/year. Washington is close at about $54,031."}},{"@type":"Question","name":"Do police officers pay Social Security?","acceptedAnswer":{"@type":"Answer","text":"Most police officers do pay Social Security — FICA is 7.65% of gross salary. However, some departments (mainly in Ohio, Illinois, Massachusetts, and California) are exempt from Social Security and use pension-only systems."}},{"@type":"Question","name":"How do I calculate my police paycheck after taxes?","acceptedAnswer":{"@type":"Answer","text":"Start with gross salary plus overtime. Subtract federal income tax (10-22% bracket), FICA (7.65%), state income tax (0-9.3%), and pension contribution (8-12%). Use our free paycheck calculator for your exact result."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Police Officer Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Police Officer Salary After Taxes 2026: Take-Home Pay by State","datePublished":"2026-01-01","dateModified":"2026-05-21","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"reviewedBy":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes"}}'

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
            <a href="/blog" style={{color:'rgba(255,255,255,0.65)', textDecoration:'none'}}>Blog</a>
            {' › '}
            <span style={{color:'rgba(255,255,255,0.65)'}}>Police Officer Salary After Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Police Officer Salary After Taxes 2026: Take-Home Pay by State
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By the PrivatePaycheck Team</span>
            <span>·</span>
            <span>{'~8 min read · 2,000 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'A police officer earning $65,000 in 2026 takes home approximately $54,408 after federal tax, FICA, and state tax in Texas — about $4,534/month. In California the same salary yields $51,673 after state taxes (estimate). Pension contributions of 8-12% reduce net pay by roughly $380-$570/month.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Example salary $65,000 (single filer) — take-home about $51,335-$54,408 by state'}</li>
            <li>{'FICA is 7.65% — $4,973/year on $65,000 (some departments exempt from SS)'}</li>
            <li>{'Pension contributions (8-12%) are pre-tax — reduce taxable income but cut paycheck'}</li>
            <li>{'TX/FL officers keep about $2,735/year more than CA on a $65,000 salary due to zero state income tax'}</li>
            <li>{'Overtime is taxed as regular income at your marginal rate: 22% on taxable income above $50,400 and 24% above $105,700 (single, 2026)'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'Police Take-Home Pay by State', id:'by-state'},
              {label:'Full Tax Breakdown on $65K Salary', id:'breakdown'},
              {label:'How Overtime Affects Police Taxes', id:'overtime'},
              {label:'Pension Contributions by Department', id:'pension'},
              {label:'How to Increase Police Take-Home Pay', id:'maximize'},
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
            How Much Do Police Officers Take Home After Taxes by State?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'State income tax is the biggest variable in officer take-home pay. The table below uses $65,000 gross salary, single filer, standard federal deduction $16,100, and no pension. FICA (7.65%) applies in all rows.'}
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
                  {state:'Texas', tax:'$0', annual:'$54,408', monthly:'$4,534'},
                  {state:'Florida', tax:'$0', annual:'$54,408', monthly:'$4,534'},
                  {state:'Washington', tax:'$377', annual:'$54,031', monthly:'$4,503'},
                  {state:'Pennsylvania', tax:'$1,996', annual:'$52,412', monthly:'$4,368'},
                  {state:'Illinois', tax:'$3,073', annual:'$51,335', monthly:'$4,278'},
                  {state:'New York', tax:'$2,944', annual:'$51,463', monthly:'$4,289'},
                  {state:'New Jersey', tax:'$2,045', annual:'$52,363', monthly:'$4,364'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>$2,735</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$51,673'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$4,306'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Get your exact paycheck with the free '}
            <a href="/" style={{color:'#F5C842'}}>police paycheck calculator</a>
            {' — enter salary, state, overtime, and pension for a precise result.'}
          </p>
        </section>

        {/* SECTION 2 — BREAKDOWN */}
        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Full Tax Breakdown on a $65,000 Police Officer Salary in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The breakdown below assumes $65,000 gross, single filer, Texas (no state tax), no pension. Federal income tax applies after the $16,100 standard deduction, leaving $48,900 taxable income.'}
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
                  {item:'Gross Salary', rate:'—', amt:'$65,000'},
                  {item:'Federal Income Tax', rate:'10-12%', amt:'−$5,620'},
                  {item:'Social Security (FICA)', rate:'6.20%', amt:'−$4,030'},
                  {item:'Medicare (FICA)', rate:'1.45%', amt:'−$943'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'~16.3%'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$54,408 / $4,534/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'For 2026, the standard deduction is $16,100 for single filers. W-2 employees including police officers apply this automatically — no itemizing required.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.65)', fontStyle:'normal'}}>
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
            How Does Overtime Affect Police Officer Taxes in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Overtime pay is taxed as ordinary income — there is no separate overtime tax rate. However, overtime pushes total compensation into higher tax brackets. A base salary of $65,000 leaves $48,900 of taxable income, which sits in the 12% bracket; the 22% bracket starts at $50,400 of taxable income, so only the first $1,500 or so of overtime is taxed at 12%. Adding $15,000 in overtime brings total gross to $80,000, and the overtime above that point is taxed at 22%; the 24% bracket starts at $105,700 of taxable income (about $121,800 gross).'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Base $65,000 + $10,000 OT = $75,000 gross — federal tax increases by ~$2,050'}</li>
            <li>{'Base $65,000 + $20,000 OT = $85,000 gross — federal tax increases by ~$4,250'}</li>
            <li>{'Overtime deduction 2026: up to $12,500 single / $25,000 joint, only on the premium part (the half in time-and-a-half) of FLSA-required overtime, phasing out above $150,000 income — may apply'}</li>
            <li>{'FICA on overtime: same 7.65% rate applies — no exemption for overtime hours'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(245,200,66,0.05)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13}}>Worked example (estimate)</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'The 2026 qualified-overtime deduction (up to $12,500 single) covers only the premium part of overtime that the Fair Labor Standards Act requires, and it phases out above $150,000 of income. Whether overtime for police officers qualifies depends on how it is paid, so consult a tax professional. Example: $15,000 of overtime paid at time-and-a-half includes about $5,000 of premium; if all of it qualified, a single filer in the 22% bracket would save roughly $1,100 in federal tax.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 — PENSION */}
        <section id="pension">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Police Pension Contributions by Department in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Police pension contributions vary by department and state. Most plans require 8-12% employee contributions, withheld before federal and state tax. This reduces take-home pay but also reduces your current tax bill.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'NYPD (NYC): 4.85% mandatory contribution — lower rate, higher base salary'}</li>
            <li>{'LAPD (CA): 9% employee contribution — exempt from Social Security'}</li>
            <li>{'Chicago PD (IL): 9% to Policemen Annuity and Benefit Fund'}</li>
            <li>{'Houston PD (TX): 8.5% — no Social Security (TRS-style exemption)'}</li>
            <li>{'Miami-Dade PD (FL): 8% to Florida Retirement System'}</li>
          </ul>

          <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:12}}>
            Step-by-Step: Calculate Your Police Paycheck After Pension
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Find gross salary.'}</strong>
              {' Include base pay plus any longevity, shift differential, or overtime.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Subtract pension contribution.'}</strong>
              {' Example: $65,000 × 9% = $5,850 withheld pre-tax. Adjusted gross = $59,150.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Apply standard deduction.'}</strong>
              {' $59,150 − $16,100 = $43,050 taxable income.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Calculate federal tax.'}</strong>
              {' 10% on first $12,400 + 12% on next $30,650 = $1,240 + $3,678 = $4,918.'}
            </li>
            <li>
              <strong style={{color:'#e8edf8'}}>{'Subtract FICA.'}</strong>
              {' $65,000 × 7.65% = $4,973 (or less if exempt from SS). Net take-home = $49,259 (Texas, no state tax).'}
            </li>
          </ol>
        </section>

        {/* SECTION 5 — MAXIMIZE */}
        <section id="maximize">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Can Police Officers Increase Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'As W-2 employees, police officers have fewer deductions than self-employed workers. But several legitimate strategies reduce withholding and increase monthly net pay.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'457(b) deferred compensation: contribute up to $24,500 pre-tax in 2026 — reduces federal tax by $2,940-$5,390 depending on bracket (12%-22%)'}</li>
            <li>{'FSA: up to $3,400 pre-tax for medical expenses — saves $408 in federal tax (12% bracket) plus $260 in FICA'}</li>
            <li>{'Update W-4: if married or have dependents, adjust withholding to avoid over-paying'}</li>
            <li>{'Uniform deduction: unreimbursed uniform costs may be deductible if you itemize above $16,100'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'See full breakdown for your state with the '}
            <a href="/" style={{color:'#F5C842'}}>free police paycheck calculator</a>
            {' — includes 457(b), FSA, and pension inputs.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'How much does a police officer take home after taxes in 2026?',
              a:'A police officer earning $65,000 takes home $54,408 in Texas, $51,335 in Illinois, and $51,673 in California — before pension contributions of 8-12% which reduce net pay further.'
            },
            {
              q:'What is the average police officer salary in 2026?',
              a:'Police pay varies widely by department, state, and overtime. This guide uses a $65,000 example salary; check your own department pay scale for exact figures.'
            },
            {
              q:'How much do police officers pay into pensions?',
              a:'Most departments require 8-12% employee contributions. On a $65,000 salary, that is $5,200-$7,800/year withheld. These are pre-tax in most states — they lower your taxable income but reduce your paycheck.'
            },
            {
              q:'Does police overtime get taxed at a higher rate?',
              a:'No — there is no separate overtime tax rate. Overtime is taxed as regular income. However, it pushes total earnings into higher brackets. The 2026 overtime deduction (up to $12,500 single, on the premium part of FLSA-required overtime only) may apply for eligible officers.'
            },
            {
              q:'Which state pays police officers the most after taxes?',
              a:'Among the states in our table, Texas and Florida leave the most because they have no state income tax: a single officer earning $65,000 takes home about $54,408/year. Washington is close at about $54,031.'
            },
            {
              q:'Do police officers pay Social Security in 2026?',
              a:'Most do — FICA is 7.65% of gross salary. However, departments in California, Illinois, Ohio, and Massachusetts often exempt officers from Social Security. Check your department HR for the exact withholding.'
            },
            {
              q:'How do I calculate my police paycheck after taxes?',
              a:'Subtract pension contribution first (pre-tax). Then apply federal tax (10-22%), FICA (7.65%), and state income tax (0-9.3%). Use our free paycheck calculator for your exact state and department result.'
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
              {title:'Teacher Salary After Taxes 2026', href:'/blog/teacher-salary-after-taxes'},
              {title:'Nurse Salary After Taxes 2026', href:'/blog/nurse-paycheck-calculator'},
              {title:'Trump Account Calculator 2026', href:'/blog/trump-account-calculator'},
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
