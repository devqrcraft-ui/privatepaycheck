import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Overtime Pay Calculator by State 2026 — Free',
  description: 'Calculate overtime pay for all 50 US states. Federal 1.5x rules, California double-time, and more. Free overtime calculator updated for 2026.',
  alternates: { canonical: 'https://www.privatepaycheck.com/overtime-calculator' },
};

const STATE_NOTES: Record<string, string> = {
  california: 'Double-time after 12 hrs/day',
  alaska: '1.5x after 8 hrs/day',
  nevada: '1.5x after 8 hrs/day',
  colorado: '1.5x after 12 hrs/day',
};


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    '@type': 'Question',
    name: 'How is overtime calculated in 2026?',
    acceptedAnswer: { '@type': 'Answer', text: 'Federal law requires 1.5x your regular rate for hours over 40/week. Some states like California require daily overtime (over 8 hours/day) and double time (over 12 hours/day or 7th consecutive day).' },
  },
  {
    '@type': 'Question',
    name: 'Which states have daily overtime rules?',
    acceptedAnswer: { '@type': 'Answer', text: 'California requires overtime after 8 hours/day and double time after 12 hours/day. Alaska and Nevada also have daily overtime rules. All other states follow the federal 40-hour weekly threshold.' },
  },
  {
    '@type': 'Question',
    name: 'Is overtime taxed differently?',
    acceptedAnswer: { '@type': 'Answer', text: 'Overtime wages are taxed as regular income — there is no special overtime tax rate. However, the No Tax on Overtime deduction (2025-2028 law) allows you to deduct up to $12,500 in overtime wages from your federal taxable income.' },
  },
  {
    '@type': 'Question',
    name: 'How much overtime can I earn before hitting a higher tax bracket?',
    acceptedAnswer: { '@type': 'Answer', text: 'Only the dollars above a bracket threshold are taxed at the higher rate. Use the calculator to enter your base salary and overtime hours to see your exact take-home at any income level.' },
  }
  ],
};

export default function OvertimeHubPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);
  const stateNames = Object.fromEntries(
    Object.entries(STATE_SLUG_MAP).map(([slug, abbr]) => [slug, abbr])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Overtime Pay Calculator by State 2026",
        "url": "https://www.privatepaycheck.com/overtime-calculator",
        "description": "Free overtime pay calculator for all 50 US states. Covers federal FLSA rules and state-specific overtime laws.",
      })}} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <span>Overtime Calculator</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#fbbf24' }}>
             Updated for 2026
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Overtime Pay Calculator<br/>
            <span style={{ color: '#fbbf24' }}>by State 2026</span>
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Federal law requires 1.5x pay after 40 hours/week. Some states like California have stricter rules — double-time after 12 hours/day. Select your state below.
          </p>
        </div>

        {/* Special states callout */}
        <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px' }}>
          <div style={{ fontWeight: 700, marginBottom: '12px', color: '#fbbf24' }}> States with Extra Overtime Rules</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {Object.entries(STATE_NOTES).map(([slug, note]) => (
              <Link key={slug} href={`/overtime-calculator/${slug}`} style={{
                background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)',
                borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '13px'
              }}>
                <span style={{ fontWeight: 700, textTransform: 'capitalize' }}>{slug}</span>
                <span style={{ opacity: 0.65, marginLeft: '6px' }}>— {note}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* All States Grid */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>All 50 States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
          {slugs.map(slug => {
            const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            const hasNote = STATE_NOTES[slug];
            return (
              <Link key={slug} href={`/overtime-calculator/${slug}`} style={{
                display: 'block', background: hasNote ? 'rgba(251,191,36,0.07)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hasNote ? 'rgba(251,191,36,0.25)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{name}</div>
                <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>
                  {hasNote ? hasNote : 'Federal 1.5x rules'}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cross-links */}
        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          <Link href="/unemployment-calculator" style={{ display: 'block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Unemployment Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Estimate your unemployment benefits →</div>
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
    </main>
    </>
    );
}
