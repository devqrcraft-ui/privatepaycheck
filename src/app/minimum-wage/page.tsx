import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Minimum Wage by State 2026 — All 50 States | PrivatePaycheck',
  description: 'Current minimum wage rates for all 50 US states in 2026. See hourly, daily, weekly, monthly and annual earnings at minimum wage. Updated for 2026.',
  alternates: { canonical: 'https://www.privatepaycheck.com/minimum-wage' },
};

const MIN_WAGES: Record<string, number> = {
  california: 16.50, washington: 16.28, 'new-york': 16.00, colorado: 14.81,
  'new-jersey': 15.49, connecticut: 16.35, massachusetts: 15.00, arizona: 14.70,
  illinois: 14.00, maine: 14.65, minnesota: 10.85, maryland: 15.00,
  nevada: 12.00, michigan: 10.56, 'new-mexico': 12.00, delaware: 13.25,
  rhode_island: 14.00, vermont: 13.67, 'west-virginia': 8.75,
  florida: 13.00, missouri: 13.75, ohio: 10.45, montana: 10.30,
  nebraska: 12.00, 'south-dakota': 11.20, arkansas: 11.00, virginia: 12.41,
  hawaii: 14.00, oregon: 14.70, alaska: 11.91,
};

const FEDERAL_MIN = 7.25;

export default function MinWageHubPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);

  const getWage = (slug: string) => MIN_WAGES[slug] || FEDERAL_MIN;

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Minimum Wage by State 2026",
        "url": "https://www.privatepaycheck.com/minimum-wage",
        "description": "Current 2026 minimum wage rates for all 50 US states.",
      })}} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <span>Minimum Wage by State</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#6ee7b7' }}>
            💵 2026 Rates — All 50 States
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Minimum Wage<br/>
            <span style={{ color: '#10b981' }}>by State 2026</span>
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            The federal minimum wage is ${FEDERAL_MIN}/hour but 30+ states have higher rates. Find your state below to see the exact 2026 minimum wage with hourly, weekly, and annual breakdowns.
          </p>
        </div>

        {/* Federal callout */}
        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>FEDERAL MINIMUM WAGE 2026</div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#10b981' }}>${FEDERAL_MIN}/hr</div>
          </div>
          <div style={{ opacity: 0.6, fontSize: '14px', maxWidth: '400px' }}>
            States can set higher minimums. If your state has a higher rate, that rate applies to most workers. Always check your state page for the most accurate local rate.
          </div>
        </div>

        {/* All States */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>All 50 States — 2026 Minimum Wage</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
          {slugs.map(slug => {
            const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            const wage = getWage(slug);
            const aboveFederal = wage > FEDERAL_MIN;
            return (
              <Link key={slug} href={`/minimum-wage/${slug}`} style={{
                display: 'block',
                background: aboveFederal ? 'rgba(16,185,129,0.07)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${aboveFederal ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{name}</div>
                <div style={{ fontSize: '16px', fontWeight: 800, marginTop: '6px', color: aboveFederal ? '#10b981' : 'rgba(255,255,255,0.5)' }}>
                  ${wage.toFixed(2)}/hr
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cross-links */}
        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          <Link href="/overtime-calculator" style={{ display: 'block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>⏰</div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Overtime Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate overtime pay by state →</div>
          </Link>
          <Link href="/unemployment-calculator" style={{ display: 'block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>📋</div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Unemployment Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Estimate unemployment benefits →</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>💰</div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate take-home pay →</div>
          </Link>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
