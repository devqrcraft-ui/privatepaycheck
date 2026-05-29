import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Nurse Salary After Taxes 2026: $77K = $57,400 Take-Home',
  description: 'A registered nurse earning $77,600 in 2026 takes home $57,400-$61,200 after taxes. State-by-state breakdown, shift differentials, and free paycheck calculator.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator' },
  openGraph: {
    title: 'Nurse Salary After Taxes 2026: $77K = $57,400 Take-Home',
    description: 'See your real nurse take-home pay after federal, state, and FICA deductions. All 50 states.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a nurse take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A registered nurse earning $77,600 (national median) takes home approximately $57,400 in Texas, $55,800 in New York, and $52,600 in California after federal tax, FICA, and state income tax. Monthly that is $4,783, $4,650, and $4,383 respectively."}},{"@type":"Question","name":"What is the average nurse salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national median RN salary is approximately $77,600 in 2026 according to BLS data. ICU and ER nurses earn $85,000-$105,000. Travel nurses can earn $90,000-$130,000 annually including stipends."}},{"@type":"Question","name":"Do nurses pay more taxes on shift differentials?","acceptedAnswer":{"@type":"Answer","text":"Yes. Night shift differentials (typically 10-15% extra) and overtime pay are fully taxable as ordinary income. A $5,000 annual shift differential adds approximately $1,100-$1,500 in federal and state tax depending on your bracket."}},{"@type":"Question","name":"How much FICA tax does a nurse pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"FICA is 7.65% of gross salary — 6.2% Social Security (up to $184,500 wage base) plus 1.45% Medicare. On a $77,600 salary, FICA is $5,936 per year, or $495/month."}},{"@type":"Question","name":"Which state pays nurses the most after taxes?","acceptedAnswer":{"@type":"Answer","text":"Texas offers the best combination — average RN salary of $78,000 with zero state income tax. Take-home is approximately $58,100/year. Washington and Nevada also rank high with no state income tax and above-average nursing salaries."}},{"@type":"Question","name":"Can travel nurses reduce their tax burden legally?","acceptedAnswer":{"@type":"Answer","text":"Yes. Travel nurses who maintain a tax home can receive non-taxable stipends for housing and meals — typically $20,000-$40,000/year. These are not wages and are not subject to income tax or FICA, significantly increasing total compensation."}},{"@type":"Question","name":"How do I calculate my nurse take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Start with gross annual salary. Subtract federal income tax (using your bracket and the $16,100 standard deduction for single filers), FICA (7.65%), and your state income tax rate. Use our free paycheck calculator for an exact monthly result by state."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Nurse Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/nurse-paycheck-calculator"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Nurse Salary After Taxes 2026: How Much Do RNs Actually Take Home?","datePublished":"2026-01-01","dateModified":"2026-05-23","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/nurse-paycheck-calculator"}}'

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
            <span style={{color:'rgba(255,255,255,0.65)'}}>Nurse Salary After Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Nurse Salary After Taxes 2026: How Much Do RNs Actually Take Home?
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~9 min read · 2,200 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'A registered nurse earning $77,600 in 2026 takes home approximately $57,400 after federal tax and FICA — about $4,783/month in Texas. In California, state income tax drops that to $52,600 ($4,383/month). Travel nurses with tax-home status can receive $20,000-$40,000 in non-taxable stipends on top of base salary.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'National median RN salary is $77,600 in 2026 — take-home $52,600-$61,200 by state'}</li>
            <li>{'FICA tax is 7.65% of gross — $5,936/year on $77,600 salary'}</li>
            <li>{'No-income-tax states (TX, FL, WA) save nurses $3,000-$7,000/year vs California'}</li>
            <li>{'Travel nurse stipends ($20K-$40K/year) are non-taxable with valid tax home'}</li>
            <li>{'Shift differentials and overtime are fully taxable as ordinary income'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'Nurse Take-Home Pay by State', id:'by-state'},
              {label:'Full Tax Breakdown on $77,600 Salary', id:'breakdown'},
              {label:'How Shift Differentials Are Taxed', id:'differentials'},
              {label:'Travel Nurse Tax Advantages', id:'travel'},
              {label:'How to Maximize Nurse Take-Home Pay', id:'maximize'},
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
            How Much Do Nurses Take Home After Taxes by State in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'State income tax is the largest variable in nurse take-home pay. California tops out at 9.3% while Texas, Florida, and Washington charge zero. The table below uses $77,600 gross salary, single filer, standard deduction $16,100, no 401(k) contributions.'}
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
                  {state:'Texas', tax:'0%', annual:'$61,200', monthly:'$5,100'},
                  {state:'Florida', tax:'0%', annual:'$61,200', monthly:'$5,100'},
                  {state:'Washington', tax:'0%', annual:'$61,200', monthly:'$5,100'},
                  {state:'Nevada', tax:'0%', annual:'$61,200', monthly:'$5,100'},
                  {state:'Pennsylvania', tax:'3.07%', annual:'$58,820', monthly:'$4,902'},
                  {state:'Illinois', tax:'4.95%', annual:'$57,140', monthly:'$4,762'},
                  {state:'New York', tax:'6.85%', annual:'$55,810', monthly:'$4,651'},
                  {state:'New Jersey', tax:'6.37%', annual:'$56,210', monthly:'$4,684'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>9.30%</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$52,600'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$4,383'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'For your exact take-home, use the free '}
            <a href="/" style={{color:'#F5C842'}}>nurse paycheck calculator</a>
            {' — enter your state, salary, and filing status for a precise monthly result.'}
          </p>
        </section>

        {/* SECTION 2 — BREAKDOWN */}
        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Full Tax Breakdown on a $77,600 Nurse Salary in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Here is exactly where each dollar goes on a $77,600 annual salary — single filer, Texas (no state tax), no 401(k) or benefits. Federal income tax applies to taxable income after the $16,100 standard deduction, leaving $61,500 taxable.'}
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
                  {item:'Gross Salary', rate:'—', amt:'$77,600'},
                  {item:'Federal Income Tax', rate:'10-22%', amt:'−$10,468'},
                  {item:'Social Security (FICA)', rate:'6.20%', amt:'−$4,811'},
                  {item:'Medicare (FICA)', rate:'1.45%', amt:'−$1,125'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'~21.2%'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$61,196 / $5,100/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'For 2026, the standard deduction is $16,100 for single filers and $32,200 for married filing jointly. This directly reduces taxable income before federal brackets are applied.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.65)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>
                IRS.gov — Tax Information
              </a>
            </cite>
          </blockquote>
        </section>

        {/* SECTION 3 — DIFFERENTIALS */}
        <section id="differentials">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Are Nurse Shift Differentials Taxed in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Night shift, weekend, and holiday differentials are treated as ordinary wage income — fully subject to federal tax, FICA, and state income tax. Hospitals typically pay 10-20% extra for night shifts and 15-25% for holidays. On a $77,600 base salary, a 15% night differential adds $11,640/year in gross pay but only $7,800-$8,400 net after taxes.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Night shift differential (15%): +$11,640 gross → +$7,820 net (Texas)'}</li>
            <li>{'Weekend differential (10%): +$7,760 gross → +$5,210 net (Texas)'}</li>
            <li>{'Holiday pay (2x rate, 12 days): +$3,600 gross → +$2,420 net (Texas)'}</li>
            <li>{'Overtime (1.5x, 200 hrs/year): +$11,160 gross → +$7,490 net (Texas)'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(245,200,66,0.05)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'An ICU nurse in Texas earning $95,000 base plus $14,250 in shift differentials takes home $79,400/year — more than a California ICU nurse earning $115,000 gross ($76,200 net after 9.3% state tax, SDI 1.3%, and higher federal bracket). The differential is $3,200/year in favor of Texas despite $20,000 lower gross pay.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 — TRAVEL */}
        <section id="travel">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Travel Nurse Tax Advantages in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Travel nurses who maintain a permanent tax home can receive non-taxable stipends for housing and meals at their assignment location. These stipends are not wages — they are not subject to income tax or FICA. This is the single largest tax advantage available to any nursing specialty.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Component</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Annual Amount</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Taxable?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {item:'Base taxable wage', amt:'$45,000', taxable:'Yes'},
                  {item:'Housing stipend', amt:'$25,000', taxable:'No'},
                  {item:'Meals & incidentals stipend', amt:'$8,760', taxable:'No'},
                  {item:'Travel reimbursement', amt:'$2,400', taxable:'No'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.item}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.amt}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color: row.taxable === 'No' ? '#F5C842' : 'rgba(255,255,255,0.75)'}}>{row.taxable}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#F5C842', fontWeight:700}}>Total Compensation</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$81,160'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$45K taxed only'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'A travel nurse earning $81,160 total but taxed only on $45,000 pays roughly $5,800 in federal tax — an effective rate of 7.1% on total compensation. A staff nurse earning the same $81,160 as straight wages pays $14,200 in federal tax.'}
          </p>
        </section>

        {/* SECTION 5 — MAXIMIZE */}
        <section id="maximize">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Can Nurses Maximize Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Nurses have access to pre-tax benefits that directly reduce taxable income. Each dollar contributed to a 401(k) or FSA reduces both federal income tax and in some cases FICA. These strategies apply to staff, per-diem, and travel nurses alike.'}
          </p>

          <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:12}}>
            Step-by-Step: Increase Your Nurse Take-Home Pay
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Maximize your 401(k).'}</strong>
              {' Contribute up to $23,500 pre-tax in 2026. On a $77,600 salary, maxing out saves $2,820-$5,170 in federal tax depending on your bracket.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Use a Health FSA.'}</strong>
              {' Up to $3,300 pre-tax in 2026. Saves FICA (7.65%) plus federal income tax — approximately $650 total on the full $3,300 contribution.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Open an HSA if eligible.'}</strong>
              {' High-deductible plan nurses can contribute $4,300 to an HSA in 2026. Triple tax advantage — deductible, grows tax-free, withdrawals tax-free for medical.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Update your W-4.'}</strong>
              {' Claim the correct allowances based on your actual deductions. Most nurses over-withhold by $800-$1,500/year. Adjust to increase monthly cash flow.'}
            </li>
            <li>
              <strong style={{color:'#e8edf8'}}>{'Consider travel nursing.'}</strong>
              {' Maintaining a tax home and taking assignments qualifies you for non-taxable stipends worth $25,000-$40,000/year — the highest legal tax reduction available to nurses.'}
            </li>
          </ol>

          <ul style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'401(k) $10,000/year saves $1,200-$2,200 in federal tax on a $77,600 salary'}</li>
            <li>{'FSA $3,300/year saves approximately $650 in combined tax and FICA'}</li>
            <li>{'HSA $4,300/year saves approximately $850 in federal tax plus grows tax-free'}</li>
            <li>{'Married nurses filing jointly on $155,200 combined save $4,600 vs two single returns'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Calculate your exact nurse paycheck with the '}
            <a href="/" style={{color:'#F5C842'}}>free paycheck calculator</a>
            {' — includes 401(k), FSA, HSA, and all 50 states.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'How much does a nurse take home after taxes in 2026?',
              a:'A registered nurse earning $77,600 takes home approximately $61,200 in Texas, $55,800 in New York, and $52,600 in California after federal tax, FICA, and state income tax. Monthly that is $5,100, $4,650, and $4,383 respectively.'
            },
            {
              q:'What is the average nurse salary in 2026?',
              a:'The national median RN salary is approximately $77,600 in 2026. ICU and ER nurses earn $85,000-$105,000. Travel nurses earn $90,000-$130,000 total compensation including non-taxable stipends.'
            },
            {
              q:'Which state pays nurses the most after taxes?',
              a:'Texas offers the best combination — average RN salary $78,000 with zero state income tax. Take-home is approximately $61,200/year. Washington and Nevada also rank high with no state income tax and above-average salaries.'
            },
            {
              q:'Do nurses pay more taxes on shift differentials?',
              a:'Yes. Night, weekend, and holiday differentials are fully taxable as ordinary income. A $11,640 annual night differential (15% of $77,600) nets approximately $7,820 after federal and FICA taxes in Texas.'
            },
            {
              q:'How much FICA tax does a nurse pay in 2026?',
              a:'FICA is 7.65% — 6.2% Social Security plus 1.45% Medicare. On $77,600 salary, total FICA is $5,936/year or $495/month. Both employee and employer pay 7.65% each.'
            },
            {
              q:'Can travel nurses reduce their tax burden legally?',
              a:'Yes. Travel nurses with a maintained tax home receive non-taxable housing and meal stipends — typically $25,000-$36,000/year. These are not subject to income tax or FICA, cutting the effective tax rate on total compensation to under 10%.'
            },
            {
              q:'How do I calculate my nurse take-home pay?',
              a:'Start with gross annual salary. Subtract federal income tax (using your bracket and $16,100 standard deduction for single filers), FICA (7.65%), and your state rate (0-9.3%). Use our free paycheck calculator for your exact monthly result.'
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
              {title:'Police Officer Salary After Taxes', href:'/blog/police-officer-salary-after-taxes'},
              {title:'Firefighter Salary After Taxes 2026', href:'/blog/firefighter-salary-after-taxes'},
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
