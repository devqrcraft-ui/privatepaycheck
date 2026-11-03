import Link from 'next/link';
import { Metadata } from 'next';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';
import BonusCalculatorClient from './BonusCalculatorClient';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 | Estimate Your Take-Home',
  description:
    'Estimate take-home pay from a work bonus using 2026 federal tax, FICA, and a state-tax approximation. Compare withholding with estimated annual tax.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-tax-calculator' },
  openGraph: {
    title: 'Bonus Tax Calculator 2026 | Estimate Your Take-Home',
    description:
      'Estimate take-home pay from a work bonus using 2026 federal tax, FICA, and state-tax assumptions.',
    url: 'https://www.privatepaycheck.com/bonus-tax-calculator',
    type: 'website',
  },
};

export default function BonusPage() {
  const states = Object.entries(STATE_SLUG_MAP).map(([slug, code]) => ({
    slug, code, name: STATE_TAXES[code]?.name || code,
    noTax: STATE_TAXES[code]?.noTax === true,
  })).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <BonusCalculatorClient />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 40px', color: '#333' }}>
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, marginBottom: 30 }}>
        <h2 style={{ color: '#1e40af', marginTop: 0 }}>How bonus withholding differs from your final tax</h2>
        <p>Bonuses are generally supplemental wages. Employers may use an optional 22% federal withholding rate for separately identified supplemental wages under $1 million (37% on the excess). Withholding is only a prepayment. This calculator estimates incremental annual federal tax and a state-tax approximation; actual withholding and final tax depend on your full return.</p>
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
        <Link href="/" style={{ background: '#2563eb', color: '#fff', padding: '16px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Estimate my regular paycheck →
        </Link>
      </div>
      <section aria-label="Bonus calculator sources" style={{ marginTop: 32, color: '#475569', fontSize: 13, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 18 }}>Sources and assumptions</h2>
        <p>Federal income-tax estimates use 2026 brackets and standard deductions. FICA calculations use the 2026 Social Security wage base and Medicare rates. State tax is an approximation based on the configured state rate. This tool does not determine actual payroll withholding, tax credits, local taxes, or final tax liability.</p>
        <ul>
          <li><a href="https://www.irs.gov/publications/p15" target="_blank" rel="noreferrer">IRS Publication 15 (supplemental-wage withholding and payroll taxes)</a></li>
          <li><a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noreferrer">IRS Revenue Procedure 2025-32 (2026 federal tax adjustments)</a></li>
        </ul>
      </section>
      </div>
    </div>
  );
}
