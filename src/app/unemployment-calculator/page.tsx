import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Unemployment Calculator 2026 — Estimate Weekly Benefits by State',
  description: 'Estimate unemployment benefits with state-specific planning calculators. Benefit formulas, eligibility, limits, and duration vary; confirm your claim with the state agency.',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator' },
  robots: 'index, follow',
};

const featuredStates = [
  ['Texas', 'texas'],
  ['Illinois', 'illinois'],
  ['Maine', 'maine'],
  ['Pennsylvania', 'pennsylvania'],
  ['New York', 'new-york'],
  ['California', 'california'],
] as const;

const faqItems = [
  {
    question: 'How is an unemployment benefit determined?',
    answer: 'Each state sets its own benefit formula, wage period, eligibility rules, and limits. The state agency makes the official determination using your claim and wage record.',
  },
  {
    question: 'How long can unemployment benefits last?',
    answer: 'The number of payable weeks varies by state, program, claim, and current conditions. Confirm your duration with the state agency; a website estimate is not an entitlement decision.',
  },
  {
    question: 'Are unemployment benefits taxable?',
    answer: 'Unemployment compensation is generally taxable for federal income-tax purposes. State tax treatment and withholding options vary. Check current IRS and state-agency instructions.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

export default function UnemploymentHubPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com","logo":"https://www.privatepaycheck.com/og-image.svg","description":"Free paycheck calculators for all 50 US states. Federal + state taxes, FICA, 401k. 100% private."}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Unemployment Calculator","item":"https://www.privatepaycheck.com/unemployment-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Unemployment Calculator","datePublished":"2026-01-15","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/unemployment-calculator"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Unemployment Benefits Calculator by State 2026",
        "url": "https://www.privatepaycheck.com/unemployment-calculator",
        "description": "Free unemployment benefits calculator for all 50 US states.",
      })}} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <span>Unemployment Calculator</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#a5b4fc' }}>
             2026 Planning Estimates — All 50 States
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Unemployment Benefits<br/>
            <span style={{ color: '#F5C842' }}>Calculator by State</span>
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Review an illustrative estimate for your state. Benefit formulas, eligibility, maximums, and duration vary; use the state agency’s current rules for an official determination.
          </p>
        </div>

        {/* Frequently used state calculators */}
        <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px' }}>
          <div style={{ fontWeight: 700, marginBottom: '16px', color: '#a5b4fc' }}>Popular state calculators</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '10px' }}>
            {featuredStates.map(([name, slug]) => (
              <Link key={slug} href={`/unemployment-calculator/${slug}`} style={{
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '8px', padding: '12px 14px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '13px' }}>{name}</div>
                <div style={{ fontSize: '11px', opacity: 0.65, marginTop: '4px' }}>View estimate →</div>
              </Link>
            ))}
          </div>
        </div>

        {/* All States */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>All 50 States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
          {slugs.map(slug => {
            const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return (
              <Link key={slug} href={`/unemployment-calculator/${slug}`} style={{
                display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{name}</div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '4px' }}>
                  View state estimate →
                </div>
              </Link>
            );
          })}
        </div>

        <section aria-labelledby="unemployment-faq" style={{ marginTop: 40, lineHeight: 1.7 }}>
          <h2 id="unemployment-faq" style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Unemployment benefit questions</h2>
          {faqItems.map(({ question, answer }) => (
            <div key={question} style={{ marginBottom: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{question}</h3>
              <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>{answer}</p>
            </div>
          ))}
        </section>

        {/* Cross-links */}
        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          <Link href="/overtime-calculator" style={{ display: 'block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Overtime Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate overtime pay →</div>
          </Link>
          <Link href="/minimum-wage" style={{ display: 'block', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Minimum Wage by State</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>2026 minimum wage rates →</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate take-home pay →</div>
          </Link>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    
      {/* DISCLAIMER */}
      <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 8, padding: '14px 18px', marginTop: 24, fontSize: 13, color: '#fde68a', lineHeight: 1.7 }}>
        <strong>Important:</strong> Actual benefit amounts are determined by your state unemployment agency based on your specific wage history and eligibility. This calculator provides estimates only and is not affiliated with any government agency. Always verify with your state agency.
      </div>
    </main>
  );
}
