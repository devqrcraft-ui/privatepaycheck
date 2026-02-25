import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Calculator from '@/components/Calculator';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export async function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(state => ({ state: state + '-paycheck-calculator' }));
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const slug = params.state.replace('-paycheck-calculator', '');
  const code = STATE_SLUG_MAP[slug];
  if (!code) return {};
  const stateData = STATE_TAXES[code];
  const stateName = stateData.name;
  return {
    title: `${stateName} Paycheck Calculator 2026 — Free & Private`,
    description: `Calculate your take-home pay in ${stateName}. Accurate ${stateData.noTax ? 'no state income tax' : (stateData.rate * 100).toFixed(1) + '% state tax'} + federal taxes, FICA, 401k. Your data stays in your browser.`,
    alternates: { canonical: `https://privatepaycheck.com/${params.state}` },
  };
}

export default function StatePage({ params }: { params: { state: string } }) {
  const slug = params.state.replace('-paycheck-calculator', '');
  const code = STATE_SLUG_MAP[slug];
  if (!code) notFound();
  const stateData = STATE_TAXES[code];

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>← All States</Link>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {stateData.noTax && (
            <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#4ade80' }}>
              🎉 {stateData.name} has NO state income tax!
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>
            {stateData.name} Paycheck Calculator 2026
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            {stateData.noTax
              ? `${stateData.name} residents pay no state income tax. Calculate your exact federal take-home pay.`
              : `${stateData.name} state income tax: ${(stateData.rate * 100).toFixed(2)}%. Calculate your exact take-home pay including all federal and state taxes.`
            }
          </p>
        </div>

        <Calculator defaultState={code} />

        <div style={{ marginTop: '40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>{stateData.name} Tax Facts 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '12px', fontSize: '14px' }}>
            <div><span style={{ opacity: 0.6 }}>State Income Tax: </span><strong>{stateData.noTax ? 'None' : (stateData.rate * 100).toFixed(2) + '%'}</strong></div>
            <div><span style={{ opacity: 0.6 }}>Federal FICA: </span><strong>7.65%</strong></div>
            <div><span style={{ opacity: 0.6 }}>SS Wage Cap: </span><strong>$168,600</strong></div>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
      </footer>
    </main>
  );
}