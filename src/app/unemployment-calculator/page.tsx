import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Unemployment Benefits Calculator by State 2026 — Free',
  description: 'Estimate your weekly unemployment benefits for all 50 US states. See max weekly benefit, duration, and total benefits. Free calculator updated for 2026.',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator' },
};

const MAX_BENEFITS: Record<string, { max: number; weeks: number }> = {
  massachusetts: { max: 1033, weeks: 30 },
  washington: { max: 1019, weeks: 26 },
  minnesota: { max: 857, weeks: 26 },
  'new-jersey': { max: 854, weeks: 26 },
  connecticut: { max: 815, weeks: 26 },
  california: { max: 450, weeks: 26 },
  texas: { max: 563, weeks: 26 },
  'new-york': { max: 504, weeks: 26 },
  florida: { max: 275, weeks: 12 },
};

export default function UnemploymentHubPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Unemployment Benefits Calculator by State 2026",
        "url": "https://www.privatepaycheck.com/unemployment-calculator",
        "description": "Free unemployment benefits calculator for all 50 US states.",
      })}} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <span>Unemployment Calculator</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#a5b4fc' }}>
            📋 All 50 States — 2026 Data
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Unemployment Benefits<br/>
            <span style={{ color: '#F5C842' }}>Calculator by State</span>
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Estimate your weekly unemployment benefit based on your state and prior earnings. Benefits and duration vary significantly by state — select yours below.
          </p>
        </div>

        {/* Top states by benefit */}
        <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px' }}>
          <div style={{ fontWeight: 700, marginBottom: '16px', color: '#a5b4fc' }}>🏆 Highest Max Weekly Benefits</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '10px' }}>
            {Object.entries(MAX_BENEFITS)
              .sort((a, b) => b[1].max - a[1].max)
              .slice(0, 6)
              .map(([slug, data]) => {
                const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                return (
                  <Link key={slug} href={`/unemployment-calculator/${slug}`} style={{
                    background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '8px', padding: '12px 14px', color: 'white', textDecoration: 'none',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>{name}</div>
                    <div style={{ color: '#a5b4fc', fontWeight: 800, fontSize: '16px', margin: '4px 0' }}>${data.max}/wk</div>
                    <div style={{ fontSize: '11px', opacity: 0.55 }}>{data.weeks} weeks max</div>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* All States */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>All 50 States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
          {slugs.map(slug => {
            const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            const data = MAX_BENEFITS[slug];
            return (
              <Link key={slug} href={`/unemployment-calculator/${slug}`} style={{
                display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{name}</div>
                <div style={{ fontSize: '12px', opacity: 0.5, marginTop: '4px' }}>
                  {data ? `Up to $${data.max}/week` : 'Check benefits →'}
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
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate overtime pay →</div>
          </Link>
          <Link href="/minimum-wage" style={{ display: 'block', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>💵</div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Minimum Wage by State</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>2026 minimum wage rates →</div>
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
