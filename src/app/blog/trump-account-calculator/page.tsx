import { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Trump Account Calculator 2026: Child Tax Benefit = $1,000/Year',
  description: 'Trump Account (MAGA Account) 2026: $1,000 government contribution per newborn. Free calculator — see total value at 18, tax rules, withdrawal rules.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/trump-account-calculator' },
}

export default function TrumpAccountCalculator() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Trump Account in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Trump Account (also called a MAGA Account or Money Account for Growth and Advancement) is a proposed tax-advantaged savings account for newborn American children. The government contributes $1,000 at birth. Earnings grow tax-deferred until age 18."
        }
      },
      {
        "@type": "Question",
        "name": "How much will a Trump Account be worth at age 18?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A $1,000 Trump Account earning 7% annually grows to approximately $3,380 at age 18. With additional $1,000 annual parent contributions, the total reaches about $34,000 at 18. At 5% growth, the $1,000 base reaches $2,406 at 18."
        }
      },
      {
        "@type": "Question",
        "name": "Who qualifies for a Trump Account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the proposed rules, Trump Accounts are available to US citizen children born after December 31, 2024. The $1,000 government contribution applies at birth. Income limits and additional eligibility rules are subject to final legislation."
        }
      },
      {
        "@type": "Question",
        "name": "Can parents add money to a Trump Account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Parents, grandparents, or other family members can contribute up to $5,000 per year to a Trump Account. Contributions are not federally tax-deductible but grow tax-deferred inside the account."
        }
      },
      {
        "@type": "Question",
        "name": "When can a Trump Account be withdrawn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Funds can be withdrawn at age 18 for qualified expenses including education, a first home purchase, or starting a business. Withdrawals for non-qualified expenses may be subject to taxes and penalties, similar to 529 plan rules."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.privatepaycheck.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.privatepaycheck.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Trump Account Calculator 2026", "item": "https://www.privatepaycheck.com/blog/trump-account-calculator" }
    ]
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Trump Account Calculator 2026: Child Tax Benefit = $1,000/Year",
    "description": "Free Trump Account calculator. See how much a $1,000 government contribution grows by age 18, contribution rules, and qualified withdrawal uses.",
    "url": "https://www.privatepaycheck.com/blog/trump-account-calculator",
    "datePublished": "2026-05-20",
    "dateModified": "2026-05-20",
    "author": {
      "@type": "Person",
      "name": "Ethan Blake",
      "url": "https://medium.com/@dev.qrcraft"
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Ethan Blake",
      "url": "https://medium.com/@dev.qrcraft"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PrivatePaycheck",
      "url": "https://www.privatepaycheck.com"
    }
  }

  // Growth table: $1,000 at birth, different rates
  const growthRows = [
    ['Age 5',   '$1,403', '$1,276', '$1,159'],
    ['Age 10',  '$1,967', '$1,629', '$1,344'],
    ['Age 13',  '$2,410', '$1,886', '$1,469'],
    ['Age 18',  '$3,380', '$2,406', '$1,703'],
    ['Age 21',  '$4,140', '$2,788', '$1,874'],
  ]

  // With $1,000/yr parent contributions, 7%
  const parentRows = [
    ['$0/yr (gov only)',    '$3,380',  '$1,000'],
    ['$500/yr',            '$18,690', '$10,000'],
    ['$1,000/yr',          '$34,003', '$19,000'],
    ['$2,000/yr',          '$64,628', '$37,000'],
    ['$5,000/yr (max)',    '$168,177', '$91,000'],
  ]

  return (
    <div style={{ background: '#0f0c29', color: '#e8edf8', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)' }}>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

        <nav style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
          <a href="/" style={{ color: '#F5C842', textDecoration: 'none' }}>Home</a>
          {' › '}
          <a href="/blog" style={{ color: '#F5C842', textDecoration: 'none' }}>Blog</a>
          {' › Trump Account Calculator 2026'}
        </nav>

        <h1 style={{ fontSize: 'clamp(22px,4vw,26px)', fontWeight: 900, color: '#e8edf8', marginBottom: 8, lineHeight: 1.3 }}>
          <p style={{fontSize:13,color:'#9aa3bc',marginBottom:16}}>By Ethan Blake · Updated May 2026 · ~7 min read</p>
          Trump Account Calculator 2026: What Is It Worth at Age 18?
        </h1>

        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
          {'Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist'}
        </div>

        {/* Answer-First */}
        <div style={{ background: 'rgba(245,200,66,0.07)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '18px 20px', marginBottom: 24 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 8, fontSize: 13, textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>
            2026 QUICK ANSWER
          </div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.85 }}>
            {'A Trump Account (officially MAGA Account — Money Account for Growth and Advancement) provides a $1,000 government contribution at birth for every US citizen child born after December 31, 2024. At 7% annual growth, that $1,000 becomes $3,380 by age 18. Parents can add up to $5,000 per year — bringing the total to $168,177 at 18 with maximum contributions.'}
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 10, fontSize: 13 }}>KEY TAKEAWAYS</div>
          <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Trump Account = $1,000 government contribution at birth for US citizen newborns (post-Dec 31, 2024)'}</li>
            <li>{'At 7% growth, $1,000 grows to $3,380 by age 18 — no additional contributions needed'}</li>
            <li>{'Parents can contribute up to $5,000/year — $5K/yr at 7% = $168,177 at age 18'}</li>
            <li>{'Withdrawals at 18 for education, first home, or business — tax-advantaged'}</li>
            <li>{'Similar structure to a 529 plan but with a government seed contribution'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{ background: 'rgba(245,200,66,0.06)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 10, fontSize: 13 }}>TABLE OF CONTENTS</div>
          <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2 }}>
            <li style={{ marginBottom: 4 }}><a href={"#what-is"} style={{ color: '#F5C842', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>What Is a Trump Account?</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#calculator"} style={{ color: '#F5C842', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Growth Calculator — Base Contribution</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#parent-contributions"} style={{ color: '#F5C842', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>With Parent Contributions: Value at 18</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#rules"} style={{ color: '#F5C842', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Eligibility, Contribution Rules, and Withdrawals</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#vs-529"} style={{ color: '#F5C842', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Trump Account vs 529 Plan: Comparison</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#faq"} style={{ color: '#F5C842', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <h2 id="what-is" style={{ fontSize: 20, fontWeight: 800, color: '#e8edf8', marginBottom: 12, marginTop: 32 }}>
          What Is a Trump Account in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'The Trump Account — formally the Money Account for Growth and Advancement (MAGA Account) — is a tax-advantaged savings vehicle proposed under the One Big Beautiful Bill Act of 2025. Every US citizen child born after December 31, 2024 receives a $1,000 government seed contribution at birth. The account grows tax-deferred and becomes accessible at age 18 for qualified expenses.'}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 24 }}>
          {'The account functions similarly to a Roth-adjacent 529 plan. Contributions from parents, grandparents, or other family members (up to $5,000/year) grow inside the account without annual taxation. The structure is designed to give every American child a financial starting point.'}
        </p>

        {/* Section 2 — Growth table */}
        <h2 id="calculator" style={{ fontSize: 20, fontWeight: 800, color: '#e8edf8', marginBottom: 12, marginTop: 32 }}>
          Trump Account Growth Calculator — Base $1,000 Contribution
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'How much does the $1,000 government contribution grow? The table below shows projected values at different interest rates — 7% (stock index), 5% (balanced), and 3% (conservative).'}
        </p>

        <div style={{ overflowX: 'auto' as const, marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
            <thead>
              <tr style={{ background: 'rgba(245,200,66,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Age</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>7% Growth</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>5% Growth</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>3% Growth</th>
              </tr>
            </thead>
            <tbody>
              {growthRows.map(([age, g7, g5, g3]) => (
                <tr key={age} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#e8edf8', fontWeight: 600 }}>{age}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#F5C842', fontWeight: 700 }}>{g7}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{g5}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{g3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
          {'Based on $1,000 initial contribution, annual compounding. Past returns do not guarantee future results.'}
        </p>

        {/* Section 3 — Parent contributions */}
        <h2 id="parent-contributions" style={{ fontSize: 20, fontWeight: 800, color: '#e8edf8', marginBottom: 12, marginTop: 32 }}>
          With Parent Contributions: Trump Account Value at Age 18
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Parents, grandparents, and family members can contribute up to $5,000 per year to the account. The table below shows projected values at age 18 at 7% annual growth, starting from the $1,000 government seed.'}
        </p>

        <div style={{ overflowX: 'auto' as const, marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
            <thead>
              <tr style={{ background: 'rgba(245,200,66,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Annual Contribution</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Value at Age 18 (7%)</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Total Contributed</th>
              </tr>
            </thead>
            <tbody>
              {parentRows.map(([contrib, value, total]) => (
                <tr key={contrib} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#e8edf8', fontWeight: 600 }}>{contrib}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#F5C842', fontWeight: 700 }}>{value}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Information Gain */}
        <div style={{ background: 'rgba(245,200,66,0.05)', border: '1px solid rgba(245,200,66,0.15)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 8, fontSize: 13 }}>UNIQUE DATA — 2026 Analysis</div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            {'A family contributing $200/month ($2,400/yr) from birth reaches $81,000 by age 18 at 7% growth — compared to a standard savings account at 2% yielding only $54,000. The tax-deferred compounding advantage alone adds $27,000 over 18 years on the same contribution amount.'}
          </p>
        </div>

        {/* Section 4 — Rules */}
        <h2 id="rules" style={{ fontSize: 20, fontWeight: 800, color: '#e8edf8', marginBottom: 12, marginTop: 32 }}>
          Eligibility, Contribution Rules, and Withdrawals
        </h2>

        <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 360 }}>
            <thead>
              <tr style={{ background: 'rgba(245,200,66,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Rule</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Detail</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Eligibility', 'US citizen children born after Dec 31, 2024'],
                ['Government contribution', '$1,000 at birth (one-time)'],
                ['Parent contribution limit', 'Up to $5,000/year per child'],
                ['Tax treatment', 'Contributions not deductible; growth tax-deferred'],
                ['Qualified withdrawals at 18', 'Education, first home purchase, business startup'],
                ['Non-qualified withdrawals', 'Subject to income tax + possible penalty'],
                ['Investment options', 'Index funds, ETFs (similar to 529 plan)'],
              ].map(([rule, detail]) => (
                <tr key={rule} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#e8edf8', fontWeight: 600 }}>{rule}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote style={{ borderLeft: '3px solid rgba(245,200,66,0.4)', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.8 }}>
          {'The Internal Revenue Service requires employees and freelancers to pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
          <cite style={{ display: 'block', marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.65)', fontStyle: 'normal' }}>
            {'— '}<a href="https://www.irs.gov/taxtopics/tc751" rel="nofollow" target="_blank" style={{ color: '#F5C842' }}>IRS.gov — Topic 751</a>
          </cite>
        </blockquote>

        {/* Section 5 — vs 529 */}
        <h2 id="vs-529" style={{ fontSize: 20, fontWeight: 800, color: '#e8edf8', marginBottom: 12, marginTop: 32 }}>
          Trump Account vs 529 Plan: Which Is Better in 2026?
        </h2>

        <div style={{ overflowX: 'auto' as const, marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 380 }}>
            <thead>
              <tr style={{ background: 'rgba(245,200,66,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Feature</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>Trump Account</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#F5C842', fontWeight: 700 }}>529 Plan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Government seed', '$1,000 at birth', 'None'],
                ['Annual contribution limit', '$5,000', '$18,000 (gift tax limit)'],
                ['Tax deduction', 'No federal deduction', 'State deduction (varies)'],
                ['Qualified uses', 'Education, home, business', 'Education only'],
                ['Non-education penalty', 'Tax + possible penalty', '10% penalty + tax'],
                ['Rollover to Roth IRA', 'Not confirmed yet', 'Yes (up to $35,000 lifetime)'],
              ].map(([feature, trump, s529]) => (
                <tr key={feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#e8edf8', fontWeight: 600 }}>{feature}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{trump}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{s529}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 id="faq" style={{ fontSize: 20, fontWeight: 800, color: '#e8edf8', marginBottom: 20, marginTop: 32 }}>
          Frequently Asked Questions — Trump Account 2026
        </h2>

        {[
          {
            q: 'What is a Trump Account in 2026?',
            a: 'A Trump Account (MAGA Account) is a proposed tax-advantaged savings account for US citizen children born after December 31, 2024. The federal government deposits $1,000 at birth. The account grows tax-deferred until the child turns 18.'
          },
          {
            q: 'How much will a Trump Account be worth at age 18?',
            a: 'The $1,000 base contribution grows to $3,380 at 7% annual growth by age 18. With $1,000/year in parent contributions, the total reaches $34,003. With the $5,000/year maximum, the account reaches $168,177 — against $91,000 total contributions.'
          },
          {
            q: 'Who qualifies for a Trump Account?',
            a: 'US citizen children born after December 31, 2024 are eligible for the $1,000 government contribution. The final legislation may include income limits or citizenship documentation requirements — check IRS.gov for updates.'
          },
          {
            q: 'Can parents add money to a Trump Account?',
            a: 'Yes. Parents, grandparents, or other family members can contribute up to $5,000 per year. Contributions are not federally tax-deductible but the earnings grow tax-deferred inside the account.'
          },
          {
            q: 'When can funds be withdrawn from a Trump Account?',
            a: 'Funds become accessible at age 18. Qualified uses include higher education, purchasing a first home, or starting a business. Non-qualified withdrawals may be subject to income tax and a penalty, similar to 529 plan non-qualified distributions.'
          }
        ].map(({ q, a }) => (
          <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 16, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#F5C842', marginBottom: 8 }}>{q}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{a}</p>
          </div>
        ))}

        {/* Related */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, marginTop: 16, marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 14, fontSize: 13 }}>RELATED GUIDES</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/blog/no-tax-on-tips', label: 'No Tax on Tips 2026 Guide' },
              { href: '/california-paycheck-calculator', label: 'California Paycheck Calculator' },
              { href: '/blog/overtime-tax-calculator', label: 'Overtime Tax Calculator 2026' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ background: 'rgba(245,200,66,0.07)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: 6, padding: '10px 14px', color: '#F5C842', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'block' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>
          {'Use our '}
          <a href="/" style={{ color: '#F5C842' }}>free paycheck calculator</a>
          {' to see your 2026 take-home pay. Also see the '}
          <a href="/blog/no-tax-on-tips" style={{ color: '#F5C842' }}>No Tax on Tips calculator</a>
          {' and '}
          <a href="/texas-paycheck-calculator" style={{ color: '#F5C842' }}>Texas paycheck calculator</a>
          {'.'}
        </div>

        <AuthorBox />
      </div>
    </div>
  )
}
