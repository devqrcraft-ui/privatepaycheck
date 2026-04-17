import type { Metadata } from 'next'
import CompareClient from './CompareClient'

export const metadata: Metadata = {
  title: 'Compare Paycheck by State 2026 — Take-Home Pay in Any 3 States',
  description: 'Compare take-home pay side by side in any 3 states. Free 2026 calculator: see how much more you keep in Texas vs California vs New York. Instant, no signup.',
  alternates: { canonical: 'https://www.privatepaycheck.com/compare-states-paycheck' },
}

const staticRows = [
  { salary: '$50,000',  ca: '$37,046', tx: '$42,346', fl: '$42,346', diff: '+$5,300 vs CA' },
  { salary: '$75,000',  ca: '$53,441', tx: '$61,391', fl: '$61,391', diff: '+$7,950 vs CA' },
  { salary: '$100,000', ca: '$68,378', tx: '$78,978', fl: '$78,978', diff: '+$10,600 vs CA' },
  { salary: '$150,000', ca: '$97,642', tx: '$113,542', fl: '$113,542', diff: '+$15,900 vs CA' },
];

const STATE_LINKS = [
  { name: 'California', slug: 'california' },
  { name: 'Texas',      slug: 'texas' },
  { name: 'Florida',    slug: 'florida' },
  { name: 'New York',   slug: 'new-york' },
  { name: 'Washington', slug: 'washington' },
  { name: 'Illinois',   slug: 'illinois' },
  { name: 'Georgia',    slug: 'georgia' },
  { name: 'Colorado',   slug: 'colorado' },
];

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0', background: '#0f0c29', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Which US state has the highest take-home pay in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "States with no income tax — Texas, Florida, Nevada, Washington, Tennessee — have the highest take-home pay. At a $100,000 salary, a single filer in Texas keeps approximately $78,978 vs $68,378 in California — a $10,600 annual difference." } },
          { "@type": "Question", "name": "How much more do you keep in Texas vs California at $100k?", "acceptedAnswer": { "@type": "Answer", "text": "At a $100,000 salary (single filer, 2026), Texas take-home pay is approximately $78,978 versus $68,378 in California — a difference of $10,600 per year, or $883 per month. California has a state income tax up to 13.3% plus SDI at 1.3%." } },
          { "@type": "Question", "name": "Do Washington and Florida have similar take-home pay to Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Florida has identical take-home pay to Texas since both have zero state income tax. Washington also has no state income tax, but Washington workers pay a WA Cares Fund (LTC) premium of 0.58% on all wages, making take-home very slightly lower than Texas or Florida." } },
        ]
      }) }} />

      <nav style={{ fontSize: 13, color: '#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#b8c8dc' }}>Home</a> &rsaquo; Compare States Paycheck
      </nav>

      <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, marginBottom: 8, color: '#f1f5f9' }}>Compare Paycheck by State — 2026</h1>
      <p style={{ fontSize: 17, color: '#94a3b8', marginBottom: 28, maxWidth: 680 }}>Pick any 3 states and see your exact take-home pay side by side. Federal tax, state tax, FICA, and SDI — all calculated using 2026 brackets. No signup, no data stored.</p>

      <div style={{ background: 'rgba(245,200,66,0.07)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 12, padding: '20px 20px 24px', marginBottom: 40 }}>
        <CompareClient />
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>California vs Texas vs Florida — Take-Home Pay 2026</h2>
      <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>Single filer, standard deduction. Federal + state tax + FICA included.</p>
      <div style={{ overflowX: 'auto', marginBottom: 40 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480, fontSize: 14 }}>
          <thead>
            <tr style={{ background: 'rgba(245,200,66,0.08)' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#F5C842' }}>Salary</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#F5C842' }}>California</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#4ade80' }}>Texas</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#4ade80' }}>Florida</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#94a3b8' }}>TX/FL Advantage</th>
            </tr>
          </thead>
          <tbody>
            {staticRows.map((row, i) => (
              <tr key={row.salary} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <td style={{ padding: '10px 14px', fontWeight: 700 }}>{row.salary}</td>
                <td style={{ padding: '10px 14px', color: '#fca5a5' }}>{row.ca}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80' }}>{row.tx}</td>
                <td style={{ padding: '10px 14px', color: '#4ade80' }}>{row.fl}</td>
                <td style={{ padding: '10px 14px', color: '#fde68a', fontSize: 13 }}>{row.diff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Moving states? Calculate your exact paycheck</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
        {STATE_LINKS.map(s => (
          <a key={s.slug} href={'/' + s.slug + '-paycheck-calculator'} style={{ padding: '8px 16px', borderRadius: 8, background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', color: '#F5C842', fontSize: 14, textDecoration: 'none', fontWeight: 600 }}>
            {s.name} Calculator
          </a>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>Which states have the highest take-home pay in 2026?</h3>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>Texas, Florida, Nevada, Tennessee, and Washington have no state income tax, so workers keep the most of their paycheck. Wyoming, South Dakota, and Alaska are also no-tax states. Washington workers pay a small LTC premium (0.58%), so Texas and Florida are technically the best for take-home pay.</p>
          </div>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>How much does moving from California to Texas save?</h3>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>At $100,000/year (single filer), moving from California to Texas saves approximately $10,600 per year in taxes. At $150,000, the savings grow to nearly $15,900 annually. California has a state income tax up to 13.3% plus a 1.3% SDI — both absent in Texas.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
