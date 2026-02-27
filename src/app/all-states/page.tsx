import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Paycheck Calculator — All 50 States 2026 | PrivatePaycheck',
  description: 'Free paycheck calculator for all 50 US states. Select your state for accurate federal + state tax calculations including FICA, 401k, and HSA.',
  alternates: { canonical: 'https://www.privatepaycheck.com/all-states' },
};

export default function AllStatesPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/overtime-calculator" style={{ color: '#fbbf24', textDecoration: 'none' }}>Overtime</Link>
          <Link href="/unemployment-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Unemployment</Link>
          <Link href="/minimum-wage" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Min Wage</Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Paycheck</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › All States
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Paycheck Calculator<br/>
            <span style={{ color: '#818cf8' }}>All 50 States</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.6, maxWidth: '500px', margin: '0 auto' }}>
            Select your state for accurate 2026 federal + state tax calculations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
          {slugs.map(slug => {
            const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return (
              <Link key={slug} href={`/${slug}-paycheck-calculator`} style={{
                display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{name}</div>
                <div style={{ fontSize: '12px', opacity: 0.45, marginTop: '4px' }}>Paycheck Calculator →</div>
              </Link>
            );
          })}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
