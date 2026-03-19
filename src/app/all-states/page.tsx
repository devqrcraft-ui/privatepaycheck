
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: "Which state has the highest income tax in 2026?", acceptedAnswer: { '@type': 'Answer', text: "California has the highest state income tax at up to 13.3% for income over $1 million. Hawaii (11%), New Jersey (10.75%), Oregon (9.9%), and Minnesota (9.85%) round out the top five highest state tax rates." } },{ '@type': 'Question', name: "Which states have no income tax in 2026?", acceptedAnswer: { '@type': 'Answer', text: "Nine states have no individual income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Workers in these states only pay federal income tax and FICA." } },{ '@type': 'Question', name: "How do state income taxes affect my paycheck?", acceptedAnswer: { '@type': 'Answer', text: "State income taxes reduce your take-home pay on top of federal taxes. On a $75,000 salary, living in California vs Texas means roughly $6,000-$9,000 less take-home per year due to California state income tax." } }] };
﻿import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Paycheck Calculator — All 50 States 2026 | PrivatePaycheck',
  description: 'Free paycheck calculator for all 50 US states. Select your state for accurate federal + state tax calculations including FICA, 401k, and HSA.',
  alternates: { canonical: 'https://privatepaycheck.com/all-states' },
};

export default function AllStatesPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);
  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › All States
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.75, maxWidth: '680px', margin: '0 auto 32px', textAlign: 'center' }}>
          Use this free paycheck calculator for all 50 U.S. states plus D.C. Select your state to estimate take-home pay after federal, state, and FICA taxes. Updated for 2026 IRS tax brackets.
        </p>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Paycheck Calculator<br/>
            <span style={{ color: '#818cf8' }}>All 50 States</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.6, maxWidth: '500px', margin: '0 auto' }}>
            Select your state for accurate 2026 federal + state tax calculations.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <a href="/" style={{ display: 'inline-block', padding: '14px 36px', borderRadius: '10px', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: '16px', textDecoration: 'none', cursor: 'pointer' }}>
            ⚡ Calculate My Paycheck →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '10px' }}>
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
