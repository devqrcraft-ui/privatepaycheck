import type { Metadata } from 'next';
import Link from 'next/link';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Paycheck Calculator 2026 — Free, Private | PrivatePaycheck',
  description: 'Calculate your exact take-home pay for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private — your salary never leaves your browser.',
  alternates: { canonical: 'https://privatepaycheck.com' },
};

const TOP_STATES = [
  { slug: 'california',     name: 'California',      searches: '180K/mo' },
  { slug: 'texas',          name: 'Texas',            searches: '150K/mo' },
  { slug: 'new-york',       name: 'New York',         searches: '120K/mo' },
  { slug: 'florida',        name: 'Florida',          searches: '110K/mo' },
  { slug: 'illinois',       name: 'Illinois',         searches: '70K/mo' },
  { slug: 'pennsylvania',   name: 'Pennsylvania',     searches: '60K/mo' },
  { slug: 'ohio',           name: 'Ohio',             searches: '55K/mo' },
  { slug: 'georgia',        name: 'Georgia',          searches: '50K/mo' },
  { slug: 'north-carolina', name: 'North Carolina',   searches: '45K/mo' },
  { slug: 'michigan',       name: 'Michigan',         searches: '40K/mo' },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '20px', fontSize: '13px' }}>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Blog</Link>
          <Link href="/hourly-paycheck-calculator" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Hourly</Link>
        </div>
      </nav><div style={{overflow:'hidden',background:'linear-gradient(90deg,#4f46e5,#7c3aed)',padding:'10px 0'}}><style>{('@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}')}</style><div style={{display:'inline-block',whiteSpace:'nowrap',animation:'marquee 28s linear infinite',fontSize:'13px',color:'white',opacity:0.95}}>🔒 Your salary data NEVER leaves your browser &nbsp;·&nbsp; ⚡ Instant calculations &nbsp;·&nbsp; 🗺️ All 50 US States &nbsp;·&nbsp; 🆓 100% Free — no signup &nbsp;·&nbsp; 💼 Federal + State + FICA + 401k + HSA &nbsp;·&nbsp; 📱 Works on any device &nbsp;·&nbsp; 🔒 Your salary data NEVER leaves your browser &nbsp;·&nbsp; ⚡ Instant results</div></div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#4ade80' }}>
            🔒 Your salary data NEVER leaves your browser
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15 }}>
            Paycheck Calculator 2026<br/>
            <span style={{ color: '#818cf8' }}>Free & 100% Private</span>
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Calculate your exact take-home pay for all 50 US states. Federal taxes, state taxes, FICA, 401(k), HSA — calculated instantly in your browser. No data sent anywhere.
          </p>
        </div>

        <Calculator />

        <div style={{ marginTop: '56px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>Paycheck Calculator by State</h2>
          <p style={{ textAlign: 'center', opacity: 0.55, fontSize: '14px', marginBottom: '24px' }}>Select your state for accurate local tax calculations</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
            {TOP_STATES.map(s => (
              <Link key={s.slug} href={`/${s.slug}-paycheck-calculator`} style={{
                display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{s.name}</div>
                <div style={{ fontSize: '12px', opacity: 0.45, marginTop: '4px' }}>{s.searches} searches</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/all-states" style={{ color: '#818cf8', fontSize: '14px', textDecoration: 'none' }}>
              View all 50 states →
            </Link>
          </div>
        </div>

        <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { icon: '🔒', title: '100% Private', desc: 'All calculations happen in your browser. Your salary is never sent to any server.' },
            { icon: '📊', title: 'All 50 States', desc: 'Accurate state tax rates for every US state including DC. Updated for 2026.' },
            { icon: '⚡', title: 'Instant Results', desc: 'No loading, no waiting. See your take-home pay update as you type.' },
            { icon: '🎯', title: '2026 Tax Tables', desc: 'Updated federal brackets, FICA caps, and state rates for tax year 2026.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: '8px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}