import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Trump Account Calculator 2026 — DOGE Dividend & Savings Estimator | Free',
  description: 'Calculate your estimated Trump Account (DOGE dividend) payment for 2026. See how much you or your child may receive based on the proposed savings account program. Free, instant.',
  keywords: 'trump account calculator, trump account 2026, doge dividend calculator, trump savings account kids, trump account for children 2026',
  alternates: { canonical: 'https://www.privatepaycheck.com/trump-account-calculator' },
}
export default function Page() {
  const rows = [
    ['Single, no children', '$0', '$0', 'Adults not eligible'],
    ['1 child (newborn 2026)', '$1,000', '$1,000', 'One-time deposit'],
    ['1 child + growth (5yr)', '$1,000', '$1,276', '5% annual estimate'],
    ['1 child + growth (10yr)', '$1,000', '$1,629', '10% annual estimate'],
    ['1 child + growth (18yr)', '$1,000', '$2,407', '18yr compound estimate'],
    ['2 children', '$2,000', '$2,000', 'One-time per child'],
    ['3 children', '$3,000', '$3,000', 'One-time per child'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f1629', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"What is the Trump Account 2026?","acceptedAnswer":{"@type":"Answer","text":"The Trump Account (also called MAGA Account or DOGE Dividend account) is a proposed government savings program that would deposit $1,000 into a tax-advantaged account for every American child born in 2026 or after. The funds would be invested and accessible when the child reaches adulthood."}},
          {"@type":"Question","name":"How much is the Trump Account worth at age 18?","acceptedAnswer":{"@type":"Answer","text":"A $1,000 initial deposit growing at an estimated 5% annual return would be worth approximately $2,407 after 18 years. At 7% growth it would reach $3,380. Actual returns depend on investment performance and final program rules."}},
          {"@type":"Question","name":"Who qualifies for a Trump Account?","acceptedAnswer":{"@type":"Answer","text":"Under the proposed program, every American child born from 2025 onward would receive a $1,000 government deposit into a tax-advantaged savings account. Eligibility details and income limits are subject to final legislation."}},
          {"@type":"Question","name":"Is the Trump Account the same as a DOGE dividend?","acceptedAnswer":{"@type":"Answer","text":"They are related proposals. The Trump Account focuses on child savings deposits. The DOGE dividend refers to proposals to return government savings from the Department of Government Efficiency to taxpayers as direct payments. Both are proposals as of 2026 and not yet finalized law."}},
          {"@type":"Question","name":"When will Trump Accounts be available?","acceptedAnswer":{"@type":"Answer","text":"As of March 2026, Trump Accounts are a legislative proposal. The program has not been signed into law. Check IRS.gov and Congress.gov for official updates on eligibility and enrollment dates."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#64748b', marginBottom: 24 }}>
        <a href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Trump Account Calculator</span>
      </nav>

      <div style={{ borderLeft: '4px solid #B22234', paddingLeft: 16, marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>
          Trump Account Calculator 2026
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 15, margin: 0 }}>
          Estimate your child&apos;s Trump Account (DOGE savings) value — at deposit, at age 18, and beyond.
        </p>
      </div>

      {/* STATUS BADGE */}
      <div style={{ background: '#1e2d3d', border: '1px solid #B22234', borderRadius: 8, padding: '14px 18px', marginBottom: 28, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 20 }}>⚠️</span>
        <div>
          <div style={{ fontWeight: 700, color: '#f87171', fontSize: 14, marginBottom: 4 }}>Legislative Proposal — Not Yet Law</div>
          <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
            As of March 2026, Trump Accounts are a proposed program. The $1,000 child savings deposit has not been signed into final law.
            Estimates below are for planning purposes. Sources: <a href="https://congress.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>Congress.gov</a>, <a href="https://irs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>IRS.gov</a>.
          </div>
        </div>
      </div>

      {/* WHAT IS IT */}
      <div style={{ background: '#1a2235', borderRadius: 8, padding: '20px 24px', marginBottom: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 12 }}>What Is a Trump Account?</h2>
        <p style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.8, marginBottom: 12 }}>
          A <strong style={{ color: '#fff' }}>Trump Account</strong> (also called a MAGA Account or DOGE Dividend Account) is a proposed
          tax-advantaged savings program that would deposit <strong style={{ color: '#f5c842' }}>$1,000</strong> into an investment account
          for every American child born in 2025 or later. The funds would grow tax-free and be accessible when the child reaches adulthood.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: 'Initial Deposit', value: '$1,000', sub: 'Per eligible child', color: '#f5c842' },
            { label: 'Tax Treatment', value: 'Tax-Free', sub: 'Proposed Roth-style growth', color: '#34d399' },
            { label: 'Eligibility', value: 'Born 2025+', sub: 'American citizens', color: '#60a5fa' },
            { label: 'Status', value: 'Proposed', sub: 'Not yet signed into law', color: '#f87171' },
          ].map(item => (
            <div key={item.label} style={{ background: '#0f1629', borderRadius: 6, padding: '14px 16px', borderLeft: `4px solid ${item.color}` }}>
              <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: item.color }}>{item.value}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GROWTH TABLE */}
      <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
        Trump Account Growth Estimates
      </h2>
      <div style={{ overflowX: 'auto', marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#1e293b' }}>
              {['Scenario', 'Deposit', 'Est. Value', 'Notes'].map(h => (
                <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#94a3b8', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', borderBottom: '1px solid #334155' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([scenario, deposit, value, note], i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1e293b', background: i % 2 === 0 ? '#0f1629' : '#111827' }}>
                <td style={{ padding: '12px 14px', fontWeight: 600, color: '#e2e8f0' }}>{scenario}</td>
                <td style={{ padding: '12px 14px', color: '#f5c842', fontWeight: 700 }}>{deposit}</td>
                <td style={{ padding: '12px 14px', color: '#34d399', fontWeight: 800, fontSize: 15 }}>{value}</td>
                <td style={{ padding: '12px 14px', color: '#64748b', fontSize: 13 }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 16 }}>Frequently Asked Questions</h2>
      {[
        { q: 'What is the Trump Account 2026?', a: 'The Trump Account is a proposed government savings program that would deposit $1,000 into a tax-advantaged account for every American child born in 2025 or later. Funds would grow invested and be accessible at adulthood.' },
        { q: 'How much will a Trump Account be worth at age 18?', a: 'A $1,000 deposit growing at 5% annually would reach approximately $2,407 after 18 years. At 7% growth it reaches $3,380. Actual returns depend on investment performance and final program rules.' },
        { q: 'Who qualifies for a Trump Account?', a: 'Under the proposal, every American child born from 2025 onward would receive a $1,000 government deposit. Income limits and exact eligibility rules are subject to final legislation.' },
        { q: 'Is the Trump Account the same as a DOGE dividend?', a: 'They are related but separate proposals. The Trump Account is a child savings deposit. The DOGE dividend refers to returning government efficiency savings to taxpayers as direct payments. Both are proposals as of 2026.' },
        { q: 'When will Trump Accounts be available?', a: 'As of March 2026, Trump Accounts remain a legislative proposal and have not been signed into law. Monitor IRS.gov and Congress.gov for official enrollment dates and eligibility rules.' },
      ].map((item, i) => (
        <div key={i} style={{ borderBottom: '1px solid #1e293b', paddingBottom: 16, marginBottom: 16 }}>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
          <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7 }}>{item.a}</div>
        </div>
      ))}

      {/* CROSS-LINKS */}
      <div style={{ background: '#1a2235', borderRadius: 8, padding: '18px 20px', marginTop: 32 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>Related Calculators</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { href: '/bonus-tax-calculator', label: 'Bonus Tax Calculator' },
            { href: '/federal-paycheck-calculator', label: 'Federal Paycheck Calculator' },
            { href: '/texas-paycheck-calculator', label: 'Texas Paycheck Calculator' },
            { href: '/2026-tax-changes', label: '2026 Tax Law Changes' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{ background: '#0f1629', border: '1px solid #334155', borderRadius: 6, padding: '10px 14px', textDecoration: 'none', color: '#60a5fa', fontSize: 13, fontWeight: 600 }}>
              → {link.label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 32, padding: '14px 18px', background: '#0f1629', border: '1px solid #1e293b', borderRadius: 6, fontSize: 12, color: '#475569', lineHeight: 1.7 }}>
        <strong style={{ color: '#64748b' }}>Disclaimer:</strong> This calculator provides estimates based on the proposed Trump Account program as of March 2026.
        The program has not been signed into law. Figures are for educational purposes only.
        Consult a financial advisor or visit <a href="https://irs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>IRS.gov</a> for official information.
        PrivatePaycheck.com is not affiliated with the U.S. government, IRS, or any political entity.
      </div>
    </main>
  )
}
