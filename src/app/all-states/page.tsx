
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
          Use this free paycheck calculator for all 50 U.S. states plus D.C. — the most complete paycheck calculator for all 50 U.S. states in one place.
          Estimate take-home pay after federal income tax, state income tax, and FICA (Social Security 6.2% + Medicare 1.45%). All calculations run in your browser — no data stored, no signup required.
          Updated for 2026 IRS tax brackets, standard deductions, and state withholding rates. Enter your salary or hourly wage and get your net pay in seconds.
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
        {/* NO TAX STATES */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, padding: '20px' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#34d399', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>✅ No State Income Tax</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
              {['Alaska','Florida','Nevada','New Hampshire','South Dakota','Tennessee','Texas','Washington','Wyoming'].map(s=>(
                <div key={s} style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{s}</span><span style={{ color: '#34d399', fontWeight: 700 }}>0%</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Workers in these states keep more of every paycheck — only federal income tax and FICA apply. On a $75k salary, you save $3,000–$7,000/year vs high-tax states.
            </p>
          </div>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '20px' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#f87171', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>⚠️ High-Tax States</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
              {[['California','up to 13.3%'],['Hawaii','up to 11%'],['New Jersey','up to 10.75%'],['Oregon','up to 9.9%'],['Minnesota','up to 9.85%'],['New York','up to 10.9%'],['Vermont','up to 8.75%'],['Illinois','4.95% flat']].map(([s,r])=>(
                <div key={s} style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{s}</span><span style={{ color: '#f87171', fontWeight: 700 }}>{r}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              High state taxes significantly reduce net pay. A California resident earning $100k pays ~$9,300 in state tax alone — vs $0 in Texas or Florida.
            </p>
          </div>
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
