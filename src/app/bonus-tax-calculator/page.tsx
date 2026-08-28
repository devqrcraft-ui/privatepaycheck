import Link from 'next/link';
import { Metadata } from 'next';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — Federal & State Supplemental Tax',
  description: 'Calculate your net take-home pay after bonus taxes. Supports 22% federal supplemental rate and all 50 states. New 2026 rules included.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-tax-calculator' }
};

export default function BonusPage() {
  const states = Object.entries(STATE_SLUG_MAP).map(([slug, code]) => ({
    slug, code, name: STATE_TAXES[code]?.name || code,
    noTax: STATE_TAXES[code]?.noTax === true,
  })).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px', color: '#333' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>Bonus Tax Calculator 2026</h1>
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, marginBottom: 30 }}>
        <h2 style={{ color: '#1e40af', marginTop: 0 }}>Why is my bonus taxed so high?</h2>
        <p>The IRS considers bonuses supplemental wages. In 2026, the federal flat rate is 22%. This is often higher than your normal tax bracket, but you may get some back as a refund.</p>
      </div>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Bonus Tax Calculator by State</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 10, marginBottom: 32 }}>
        {states.map(s => (
          <Link key={s.slug} href={`/bonus-tax-calculator/${s.slug}`} style={{ display: 'block', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', color: '#1e40af', textDecoration: 'none', fontSize: 14, textAlign: 'center' }}>
            {s.name}{s.noTax ? ' (no tax)' : ''}
          </Link>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/" style={{ background: '#2563eb', color: '#fff', padding: '16px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Calculate My Bonus Net Pay →
        </a>
      </div>
    </div>
  );
}
