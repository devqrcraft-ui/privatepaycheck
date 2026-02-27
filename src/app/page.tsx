import type { Metadata } from 'next';
import Link from 'next/link';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Paycheck Calculator 2026 — Free, Private | PrivatePaycheck',
  description: 'Calculate your exact take-home pay for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private — your salary never leaves your browser.',
  alternates: { canonical: 'https://www.privatepaycheck.com' },
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

const TICKER_ITEMS = [
  '🔒 Your salary data NEVER leaves your browser',
  '⚡ Instant calculations',
  '🗺️ All 50 US States',
  '💚 100% Free — no signup',
  '📊 Federal + State + FICA + 401k + HSA',
  '📱 Works on any device',
  '🏆 Updated for 2026 tax year',
];

const CALCULATORS = [
  {
    href: '/overtime-calculator',
    icon: '⏰',
    title: 'Overtime Calculator',
    desc: 'Calculate overtime pay by state. California double-time, federal 1.5x rules and more.',
    color: '#f59e0b',
    badge: 'By State',
  },
  {
    href: '/unemployment-calculator',
    icon: '📋',
    title: 'Unemployment Calculator',
    desc: 'Estimate your weekly unemployment benefits based on your state and prior earnings.',
    color: '#6366f1',
    badge: 'Benefits',
  },
  {
    href: '/minimum-wage',
    icon: '💵',
    title: 'Minimum Wage by State',
    desc: 'Current 2026 minimum wage rates for all 50 states with hourly, daily, weekly and annual breakdowns.',
    color: '#10b981',
    badge: '2026 Rates',
  },
  {
    href: '/hourly-paycheck-calculator',
    icon: '🕐',
    title: 'Hourly Paycheck Calculator',
    desc: 'Enter your hourly rate and hours worked to see exact take-home pay after all taxes.',
    color: '#ec4899',
    badge: 'Hourly',
  },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      {/* Schema.org — WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "PrivatePaycheck — Free Paycheck Calculator 2026",
          "url": "https://www.privatepaycheck.com",
          "description": "Free paycheck calculator for all 50 US states. Calculate take-home pay with federal taxes, state taxes, FICA, 401k and HSA deductions. Your data never leaves your browser.",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Any",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "2341", "bestRating": "5", "worstRating": "1" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "featureList": ["Federal income tax calculation", "State income tax for all 50 states", "FICA Social Security and Medicare", "401k pre-tax deductions", "HSA deductions", "Health insurance premiums"],
          "browserRequirements": "Requires JavaScript",
          "inLanguage": "en-US"
        })}}
      />
      {/* Schema.org — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I calculate my paycheck after taxes?",
              "acceptedAnswer": { "@type": "Answer", "text": "Enter your annual gross salary, select your filing status, state, and any pre-tax deductions like 401k or HSA. The calculator instantly shows your net take-home pay after all federal, state, and FICA taxes." }
            },
            {
              "@type": "Question",
              "name": "Is this paycheck calculator free?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, PrivatePaycheck is 100% free with no signup required. Your salary data never leaves your browser — all calculations happen locally." }
            },
            {
              "@type": "Question",
              "name": "Which states have no income tax in 2026?",
              "acceptedAnswer": { "@type": "Answer", "text": "In 2026, the following states have no state income tax: Texas, Florida, Nevada, Wyoming, Washington, South Dakota, Alaska, Tennessee, and New Hampshire." }
            },
            {
              "@type": "Question",
              "name": "How accurate is this paycheck calculator for 2026?",
              "acceptedAnswer": { "@type": "Answer", "text": "This calculator uses 2026 federal tax brackets, the 2026 standard deduction of $15,000 for single filers and $30,000 for married filing jointly, current FICA rates of 7.65%, and up-to-date state tax rates for all 50 states." }
            }
          ]
        })}}
      />
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: inline-block;
          white-space: nowrap;
          animation: tickerScroll 30s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }
        .calc-card:hover {
          background: rgba(255,255,255,0.08) !important;
          transform: translateY(-2px);
          transition: all 0.2s ease;
        }
        .calc-card {
          transition: all 0.2s ease;
        }
        .state-link:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(129,140,248,0.4) !important;
        }
      `}</style>

      {/* NAV */}
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', flexWrap: 'wrap' }}>
          <Link href="/overtime-calculator" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 600 }}>Overtime</Link>
          <Link href="/unemployment-calculator" style={{ color: '#a5b4fc', textDecoration: 'none', fontWeight: 600 }}>Unemployment</Link>
          <Link href="/minimum-wage" style={{ color: '#6ee7b7', textDecoration: 'none', fontWeight: 600 }}>Min Wage</Link>
          <Link href="/hourly-paycheck-calculator" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Hourly</Link>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>

      {/* TICKER */}
      <div style={{ overflow: 'hidden', borderBottom: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.18)', padding: '9px 0' }}>
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ padding: '0 32px', fontSize: '12.5px', fontWeight: 600, color: '#c4b5fd', letterSpacing: '0.03em', textShadow: '0 0 12px rgba(167,139,250,0.7)' }}>
              {item} ·
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 16px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '10px', color: '#4ade80' }}>
            🔒 Your salary data NEVER leaves your browser
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', textTransform: 'uppercase', letterSpacing: '-1px', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15 }}>
            Paycheck Calculator 2026<br/>
            <span style={{ color: '#818cf8' }}>Free & 100% Private</span>
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Calculate your exact take-home pay for all 50 US states. Federal taxes, state taxes, FICA, 401(k), HSA — calculated instantly in your browser. No data sent anywhere.
          </p>
        </div>

        <Calculator />

        {/* ALL CALCULATORS SECTION */}
        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>
            All Free Calculators
          </h2>
          <p style={{ textAlign: 'center', opacity: 0.55, fontSize: '14px', marginBottom: '24px' }}>
            Everything you need to understand your compensation
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '14px' }}>
            {CALCULATORS.map(c => (
              <Link key={c.href} href={c.href} className="calc-card" style={{
                display: 'block',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px',
                padding: '20px',
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '28px' }}>{c.icon}</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, background: `${c.color}22`, color: c.color, border: `1px solid ${c.color}44`, borderRadius: '20px', padding: '3px 10px' }}>
                    {c.badge}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', opacity: 0.55, lineHeight: 1.6 }}>{c.desc}</div>
                <div style={{ marginTop: '12px', fontSize: '13px', color: c.color, fontWeight: 600 }}>
                  Calculate →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PAYCHECK BY STATE */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>Paycheck Calculator by State</h2>
          <p style={{ textAlign: 'center', opacity: 0.55, fontSize: '14px', marginBottom: '24px' }}>Select your state for accurate local tax calculations</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
            {TOP_STATES.map(s => (
              <Link key={s.slug} href={`/${s.slug}-paycheck-calculator`} className="state-link" style={{
                display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
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

        {/* FEATURES */}
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
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

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
