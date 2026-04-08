import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paycheck & Tax Blog 2026 — Guides, Calculators & Tips | PrivatePaycheck',
  description: 'Free paycheck and tax guides for 2026. How much is your salary after taxes? State-by-state take-home pay tables, hourly wage calculators, and tax tips.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog' },
}

const salaryPosts = [
  { slug: '250k-a-year-after-taxes', title: '$250,000 a Year After Taxes 2026', desc: 'Take-home for top earners — all states' },
  { slug: '200k-a-year-after-taxes', title: '$200,000 a Year After Taxes 2026', desc: '$200k salary net pay by state' },
  { slug: '150k-a-year-after-taxes', title: '$150,000 a Year After Taxes 2026', desc: 'Take-home for high earners — all states' },
  { slug: '120k-a-year-after-taxes', title: '$120,000 a Year After Taxes 2026', desc: 'Monthly take-home for $120k salary' },
  { slug: '80k-a-year-after-taxes', title: '$80,000 a Year After Taxes 2026', desc: 'Exact net pay for $80k by state' },
  { slug: '60k-a-year-after-taxes', title: '$60,000 a Year After Taxes 2026', desc: 'Monthly & hourly breakdown for $60k' },
  { slug: '70k-a-year-after-taxes', title: '$70,000 a Year After Taxes 2026', desc: 'Take-home for $70k by state' },
  { slug: '80k-a-year-after-taxes', title: '$80,000 a Year After Taxes 2026', desc: 'Exact net pay for $80k by state' },
  { slug: '90k-a-year-after-taxes', title: '$90,000 a Year After Taxes 2026', desc: 'Monthly & hourly breakdown for $90k' },
  { slug: '17-dollars-an-hour-after-taxes', title: '$17 an Hour After Taxes 2026', desc: '$35,360/year — net pay by state' },
  { slug: '12-dollars-an-hour-after-taxes', title: '$12 an Hour After Taxes 2026', desc: '$24,960/year — take-home by state' },
  { slug: '10-dollars-an-hour-after-taxes', title: '$10 an Hour After Taxes 2026', desc: '$20,800/year — take-home by state' },
  { slug: '100k-a-year-after-taxes', title: '$100,000 a Year After Taxes 2026', desc: 'Monthly & hourly take-home for all 50 states' },
  { slug: '45-dollars-an-hour-after-taxes', title: '$45 an Hour After Taxes 2026', desc: '$93,600/year gross — see net pay by state' },
  { slug: '18-dollars-an-hour-after-taxes', title: '$18 an Hour After Taxes 2026', desc: '$37,440/year gross — state comparisons' },
  { slug: '15-dollars-an-hour-after-taxes', title: '$15 an Hour After Taxes 2026', desc: 'Minimum wage take-home — every state' },
  { slug: '75k-a-year-after-taxes', title: '$75,000 a Year After Taxes 2026', desc: 'Exact take-home pay by state for $75k salary' },
  { slug: '50k-a-year-after-taxes', title: '$50,000 a Year After Taxes 2026', desc: 'Monthly, biweekly, and hourly breakdown' },
  { slug: '40-dollars-an-hour-after-taxes', title: '$40 an Hour After Taxes 2026', desc: '$83,200/year gross — see net pay by state' },
  { slug: '35-dollars-an-hour-after-taxes', title: '$35 an Hour After Taxes 2026', desc: '$72,800/year gross — state-by-state tables' },
  { slug: '30-dollars-an-hour-after-taxes', title: '$30 an Hour After Taxes 2026', desc: '$62,400/year gross — take-home by state' },
  { slug: '25-dollars-an-hour-after-taxes', title: '$25 an Hour After Taxes 2026', desc: '$52,000/year gross — exact net pay' },
  { slug: '20-dollars-an-hour-after-taxes', title: '$20 an Hour After Taxes 2026', desc: '$41,600/year gross — state comparisons' },
  { slug: 'biweekly-paycheck-after-taxes', title: 'Biweekly Paycheck After Taxes 2026', desc: 'Take-home tables for $30k–$100k salaries' },
]

const taxPosts = [
  { slug: 'how-to-read-your-pay-stub', title: 'How to Read Your Pay Stub', desc: 'Every line item explained simply' },
  { slug: 'no-income-tax-states-2026', title: 'No Income Tax States 2026', desc: '9 states with zero state income tax' },
  { slug: '2026-federal-tax-brackets', title: '2026 Federal Tax Brackets', desc: 'IRS income tax brackets and rates' },
  { slug: 'what-is-fica-tax', title: 'What Is FICA Tax?', desc: 'Social Security + Medicare explained' },
  { slug: '401k-contribution-limits-2026', title: '401(k) Contribution Limits 2026', desc: 'Max contributions and catch-up limits' },
  { slug: 'hsa-contribution-limits-2026', title: 'HSA Contribution Limits 2026', desc: 'Health savings account limits for 2026' },
  { slug: 'how-to-increase-take-home-pay', title: 'How to Increase Take-Home Pay', desc: '7 legal ways to keep more of your paycheck' },
  { slug: 'how-much-of-my-raise-do-i-keep', title: 'How Much of My Raise Do I Keep?', desc: 'Marginal vs effective tax rate explained' },
  { slug: 'two-jobs-tax-withholding', title: 'Two Jobs Tax Withholding Guide', desc: 'Avoid underpaying when you have two jobs' },
  { slug: 'overtime-pay-rules-by-state', title: 'Overtime Pay Rules by State 2026', desc: 'State-by-state overtime requirements' },
  { slug: 'no-tax-on-tips-explained', title: 'No Tax on Tips — Explained', desc: 'What the tip tax exemption means for you' },
  { slug: 'one-big-beautiful-bill-tax-calculator-2026', title: 'One Big Beautiful Bill Tax Calculator 2026', desc: 'How the proposed tax changes affect your paycheck' },
  { slug: 'texas-vs-california-salary', title: 'Texas vs California Salary Comparison', desc: 'Side-by-side take-home pay comparison' },
  { slug: 'washington-vs-california-salary', title: 'Washington vs California Salary 2026', desc: 'WA no-tax advantage vs CA' },
  { slug: 'nevada-vs-california-salary', title: 'Nevada vs California Salary 2026', desc: 'Las Vegas vs LA take-home comparison' },
  { slug: 'florida-vs-new-york-salary', title: 'Florida vs New York Salary 2026', desc: 'How much more FL residents keep vs NYC' },
  { slug: 'how-to-calculate-paycheck-taxes', title: 'How to Calculate Paycheck Taxes', desc: 'Step-by-step federal + state withholding guide' },
]

const professionPosts = [
  { slug: 'software-engineer-take-home-pay', title: 'Software Engineer Take-Home Pay 2026', desc: '$100k–$200k SWE salaries after taxes by state' },
  { slug: 'truck-driver-salary-after-taxes', title: 'Truck Driver Salary After Taxes 2026', desc: 'OTR net pay with per diem deductions' },
  { slug: 'electrician-salary-after-taxes', title: 'Electrician Salary After Taxes 2026', desc: 'Journeyman & self-employed net pay' },
  { slug: 'police-officer-salary-after-taxes', title: 'Police Officer Salary After Taxes 2026', desc: 'Net pay with pension deductions' },
  { slug: 'married-filing-jointly-paycheck-2026', title: 'Married Filing Jointly Paycheck 2026', desc: 'How MFJ changes your withholding and take-home' },
  { slug: 'nurse-paycheck-calculator', title: 'Nurse Paycheck Calculator 2026', desc: 'RN take-home pay — all 50 states' },
  { slug: 'teacher-salary-after-taxes', title: 'Teacher Salary After Taxes 2026', desc: 'Net teacher pay with pension deductions' },
]

const statePosts = [
  { slug: 'california-paycheck-calculator-guide', title: 'California Paycheck Calculator Guide', desc: 'CA state tax, SDI, and take-home explained' },
  { slug: 'texas-paycheck-calculator-guide', title: 'Texas Paycheck Calculator Guide', desc: 'No state tax — what TX workers actually keep' },
  { slug: 'florida-unemployment-benefits-2026', title: 'Florida Unemployment Benefits 2026', desc: 'FL unemployment eligibility and amounts' },
  { slug: 'california-minimum-wage-2026', title: 'California Minimum Wage 2026', desc: 'CA minimum wage rates by industry' },
]

const card: React.CSSProperties = {
  background: '#0d1b3e',
  border: '1px solid #d1d5db',
  borderRadius: 10,
  padding: '16px 20px',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  transition: 'border-color 0.15s',
}

export default function BlogIndex() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Blog
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Paycheck & Tax Blog 2026</h1>
      <p style={{ fontSize: 17, color:'#c8d4e8', marginBottom: 40 }}>Free guides on take-home pay, tax brackets, and paycheck calculators for every state.</p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}> Salary & Hourly Take-Home Pay</h2>
        <p style={{ color:'#b8c8dc', fontSize: 14, marginBottom: 20 }}>Exact after-tax income for common wages — every state included.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
          {salaryPosts.map(p => (
            <a key={p.slug} href={"/blog/" + p.slug} style={card}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: '#e8edf8' }}>{p.title}</div>
              <div style={{ fontSize: 13, color:'#b8c8dc' }}>{p.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}> Tax Guides & Tips</h2>
        <p style={{ color:'#b8c8dc', fontSize: 14, marginBottom: 20 }}>Understand your withholding, deductions, and how to keep more.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
          {taxPosts.map(p => (
            <a key={p.slug} href={"/blog/" + p.slug} style={card}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: '#e8edf8' }}>{p.title}</div>
              <div style={{ fontSize: 13, color:'#b8c8dc' }}>{p.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>‍ Profession Guides</h2>
        <p style={{ color:'#b8c8dc', fontSize: 14, marginBottom: 20 }}>Take-home pay breakdowns for specific careers.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
          {professionPosts.map(p => (
            <a key={p.slug} href={"/blog/" + p.slug} style={card}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: '#e8edf8' }}>{p.title}</div>
              <div style={{ fontSize: 13, color:'#b8c8dc' }}>{p.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}> State Tax Guides</h2>
        <p style={{ color:'#b8c8dc', fontSize: 14, marginBottom: 20 }}>State-specific paycheck and tax guides.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
          {statePosts.map(p => (
            <a key={p.slug} href={"/blog/" + p.slug} style={card}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: '#e8edf8' }}>{p.title}</div>
              <div style={{ fontSize: 13, color:'#b8c8dc' }}>{p.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}> State Paycheck Calculators</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 8 }}>
          {[
            ['Alabama','alabama'],['Alaska','alaska'],['Arizona','arizona'],['Arkansas','arkansas'],
            ['California','california'],['Colorado','colorado'],['Connecticut','connecticut'],
            ['Delaware','delaware'],['Florida','florida'],['Georgia','georgia'],['Hawaii','hawaii'],
            ['Idaho','idaho'],['Illinois','illinois'],['Indiana','indiana'],['Iowa','iowa'],
            ['Kansas','kansas'],['Kentucky','kentucky'],['Louisiana','louisiana'],['Maine','maine'],
            ['Maryland','maryland'],['Massachusetts','massachusetts'],['Michigan','michigan'],
            ['Minnesota','minnesota'],['Mississippi','mississippi'],['Missouri','missouri'],
            ['Montana','montana'],['Nebraska','nebraska'],['Nevada','nevada'],
            ['New Hampshire','new-hampshire'],['New Jersey','new-jersey'],['New Mexico','new-mexico'],
            ['New York','new-york'],['North Carolina','north-carolina'],['North Dakota','north-dakota'],
            ['Ohio','ohio'],['Oklahoma','oklahoma'],['Oregon','oregon'],['Pennsylvania','pennsylvania'],
            ['Rhode Island','rhode-island'],['South Carolina','south-carolina'],
            ['South Dakota','south-dakota'],['Tennessee','tennessee'],['Texas','texas'],
            ['Utah','utah'],['Vermont','vermont'],['Virginia','virginia'],['Washington','washington'],
            ['West Virginia','west-virginia'],['Wisconsin','wisconsin'],['Wyoming','wyoming'],
            ['Washington DC','washington-dc'],
          ].map(([name, slug]) => (
            <a key={slug} href={"/" + slug + "-paycheck-calculator"}
              style={{ display:'block', padding:'10px 14px', background:'#1a2d5a', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, fontSize:14, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>
              {name}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
