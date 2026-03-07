import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — By State, Free & Private',
  description: 'Calculate how much of your bonus you keep after federal and state taxes. All 50 states. Flat rate vs aggregate method. Free & instant.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-calculator' },
};

export default function BonusHub() {
  const states = Object.entries(STATE_SLUG_MAP).map(([slug, code]) => ({
    slug, code, name: STATE_TAXES[code]?.name || code,
    noTax: STATE_TAXES[code]?.noTax === true,
  })).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          <h1 style={{ fontSize:'clamp(28px,5vw,52px)', fontWeight:900, margin:'0 0 12px' }}>Bonus Tax Calculator 2026</h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'560px', margin:'0 auto', lineHeight:1.7 }}>
            See exactly how much of your bonus you keep after federal and state taxes. Choose your state below.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'10px' }}>
          {states.map(s => (
            <Link key={s.slug} href={`/bonus-calculator/${s.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none', transition:'all 0.2s' }}>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{s.name}</div>
              {s.noTax
                ? <div style={{ fontSize:'11px', color:'#4ade80' }}>No state tax ✅</div>
                : <div style={{ fontSize:'11px', opacity:0.5 }}>Bonus tax calculator →</div>
              }
            </Link>
          ))}
        </div>
      </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
