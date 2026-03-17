import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Read Your Pay Stub: Every Line Explained (2026)',
  description: 'Federal tax, FICA, state tax, YTD — decode every deduction on your paycheck with real examples. Free guide from PrivatePaycheck.',
  alternates: { canonical: 'https://privatepaycheck.com/blog/how-to-read-your-pay-stub' },
};

export default function Post() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'How to Read Your Pay Stub: Every Line Explained (2026)',
        description:'Federal tax, FICA, state tax, YTD — decode every deduction on your paycheck with real examples.',
        url:'https://privatepaycheck.com/blog/how-to-read-your-pay-stub',
        datePublished:'2026-01-15', dateModified:'2026-01-15',
        author:{'@type':'Organization', name:'PrivatePaycheck'},
        publisher:{'@type':'Organization', name:'PrivatePaycheck', url:'https://privatepaycheck.com'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
      {
        '@type': 'Question',
        name: 'What does YTD mean on a pay stub?',
        acceptedAnswer: { '@type': 'Answer', text: 'YTD stands for Year-to-Date — the total amount earned or deducted since January 1st of the current year. YTD gross shows total earnings; YTD tax shows total taxes withheld so far this year.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between gross and net pay?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gross pay is your total earnings before any deductions. Net pay (take-home) is what you receive after federal tax, state tax, FICA, 401(k), health insurance, and other deductions are subtracted.' },
      },
      {
        '@type': 'Question',
        name: 'Why does my federal withholding change each paycheck?',
        acceptedAnswer: { '@type': 'Answer', text: 'Withholding can vary if your hours/earnings vary, you updated your W-4, you hit the Social Security wage cap (})}} />76,100 in 2026), or your employer uses the aggregate method for withholding calculations.' },
      }
        ],
      })}} />
      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › How to Read Your Pay Stub
        </div>
        <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', color:'#4ade80', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>BASICS</div>
        <h1 style={{ fontSize:'clamp(24px,4vw,40px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>How to Read Your Pay Stub: Every Line Explained</h1>
        <p style={{ opacity:0.5, fontSize:'13px', marginBottom:'32px' }}>January 15, 2026 · 6 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>Getting your paycheck and seeing a number much smaller than your salary is confusing. Where did the money go? This guide walks through every single line on a typical US pay stub so you know exactly what you are paying and why.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Gross Pay vs. Net Pay</h2>
          <p><strong>Gross pay</strong> is your total earnings before any deductions — your salary or hourly rate × hours worked. <strong>Net pay</strong> (also called take-home pay) is what actually lands in your bank account after all deductions are taken out. The gap between these two numbers can be 25–35% of your gross pay for most workers.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Federal Income Tax Withholding</h2>
          <p>This is the largest deduction for most workers. Your employer withholds federal income tax based on the W-4 you filled out when you were hired. The amount depends on your filing status, allowances, and income level. Federal tax brackets for 2026 range from 10% to 37%.</p>
          <p>The 2026 standard deduction is $15,000 for single filers and $30,000 for married filing jointly. This means the first $15,000 of your annual income is tax-free. Everything above that is taxed at your marginal rate.</p>
          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'16px', margin:'16px 0', fontFamily:'monospace', fontSize:'13px' }}>
            Example: $75,000 salary, single filer<br/>
            Taxable income: $75,000 - $15,000 = $60,000<br/>
            First $11,600 @ 10% = $1,160<br/>
            Next $35,550 @ 12% = $4,266<br/>
            Remaining $12,850 @ 22% = $2,827<br/>
            <strong>Total federal tax: ~$8,253/year = $317/biweekly</strong>
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>FICA: Social Security & Medicare</h2>
          <p>FICA stands for Federal Insurance Contributions Act. It consists of two parts:</p>
          <ul style={{ paddingLeft:'20px', opacity:0.85 }}>
            <li style={{ marginBottom:'8px' }}><strong>Social Security: 6.2%</strong> of wages up to $176,100 (2026 wage base). Above this cap you pay no more SS tax.</li>
            <li style={{ marginBottom:'8px' }}><strong>Medicare: 1.45%</strong> of all wages with no cap. High earners (over $200k single / $250k married) pay an additional 0.9% surtax.</li>
          </ul>
          <p>Your employer matches your FICA contributions dollar for dollar — so the total FICA cost is actually 15.3%, split 50/50 between you and your employer. Self-employed workers pay the full 15.3%.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>State Income Tax</h2>
          <p>Nine states have no state income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. If you live in one of these, this line on your pay stub will be $0.</p>
          <p>Other states range from flat rates like Pennsylvania (3.07%) to progressive rates like California (up to 13.3%). Your employer withholds based on the state W-4 equivalent you filed.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Pre-Tax Deductions (The Good Ones)</h2>
          <p>These deductions reduce your taxable income — meaning you pay less in all taxes above:</p>
          <ul style={{ paddingLeft:'20px', opacity:0.85 }}>
            <li style={{ marginBottom:'8px' }}><strong>401(k) contributions:</strong> Up to $23,500 in 2026 ($31,000 if age 50+). Reduces federal and state taxable income.</li>
            <li style={{ marginBottom:'8px' }}><strong>HSA contributions:</strong> Up to $4,300 individual / $8,550 family in 2026. Triple tax-advantaged.</li>
            <li style={{ marginBottom:'8px' }}><strong>Health insurance premiums:</strong> Employer-sponsored plans are typically pre-tax.</li>
            <li style={{ marginBottom:'8px' }}><strong>FSA contributions:</strong> Flexible Spending Account, up to $3,300 for healthcare.</li>
            <li style={{ marginBottom:'8px' }}><strong>Dependent care FSA:</strong> Up to $5,000 per household.</li>
          </ul>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Post-Tax Deductions</h2>
          <p>These come out after taxes are calculated, so they do not reduce your taxable income:</p>
          <ul style={{ paddingLeft:'20px', opacity:0.85 }}>
            <li style={{ marginBottom:'8px' }}>Roth 401(k) contributions (you pay taxes now, tax-free in retirement)</li>
            <li style={{ marginBottom:'8px' }}>Life insurance premiums above $50,000 coverage</li>
            <li style={{ marginBottom:'8px' }}>Wage garnishments (child support, student loans, court orders)</li>
            <li style={{ marginBottom:'8px' }}>Union dues</li>
          </ul>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>YTD (Year-to-Date)</h2>
          <p>Most pay stubs show a YTD column next to current period amounts. YTD shows the running total of earnings and deductions since January 1. This is useful for tracking when you will hit the Social Security wage cap ($176,100), confirming your 401(k) contributions for the year, and tax preparation.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Complete Pay Stub Example</h2>
          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'20px', margin:'16px 0', fontSize:'14px' }}>
            {[['Gross Pay','$2,884.62'],['Federal Income Tax','-$317.48'],['Social Security (6.2%)','-$178.85'],['Medicare (1.45%)','-$41.83'],['Texas State Tax','-$0.00'],['401(k) Pre-Tax','-$180.00'],['Health Insurance','-$95.00'],['',''],['Net Pay','$2,071.46']].map(([label, val], i) => (
              <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom: i < 7 ? '1px solid rgba(255,255,255,0.06)' : 'none', fontWeight: i === 8 ? 800 : 400, color: i === 8 ? '#4ade80' : 'inherit', opacity: label === '' ? 0 : 1 }}>
                <span>{label}</span><span>{val}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:'13px', opacity:0.5 }}>Example: $75,000/year salary, Texas, single, biweekly pay period, $4,680/year 401(k)</p>
        </div>

        {/* CTA */}
        <div style={{ marginTop:'40px', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'14px', padding:'24px', textAlign:'center' }}>
          <h3 style={{ fontWeight:800, marginBottom:'8px' }}>Calculate Your Exact Take-Home Pay</h3>
          <p style={{ opacity:0.65, fontSize:'14px', marginBottom:'16px' }}>Use our free calculator — enter your salary and see every deduction broken down instantly.</p>
          <Link href="/" style={{ display:'inline-block', background:'linear-gradient(135deg,#4ade80,#22c55e)', color:'#052e16', fontWeight:800, padding:'11px 24px', borderRadius:'9px', textDecoration:'none', fontSize:'14px' }}>Open Paycheck Calculator →</Link>
        </div>

        {/* MORE POSTS */}
        <div style={{ marginTop:'40px' }}>
          <h3 style={{ fontSize:'16px', fontWeight:800, marginBottom:'16px', opacity:0.7 }}>More Articles</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'12px' }}>
            {[
              { slug:'no-income-tax-states-2026', title:'9 States With No Income Tax — How Much Do You Save?', tag:'State Taxes' },
              { slug:'401k-contribution-limits-2026', title:'401(k) Limits 2026 — Max Out & Save Thousands', tag:'401(k)' },
              { slug:'overtime-pay-rules-by-state', title:'Overtime Rules by State 2026', tag:'Overtime' },
            ].map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
                <div style={{ fontSize:'11px', opacity:0.5, marginBottom:'6px' }}>{p.tag}</div>
                <div style={{ fontSize:'13px', fontWeight:700, lineHeight:1.4 }}>{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
