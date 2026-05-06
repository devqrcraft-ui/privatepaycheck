const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: "Which states have no income tax in 2026?", acceptedAnswer: { '@type': 'Answer', text: "Nine states have no individual income tax in 2026: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Workers in these states only pay federal income tax and FICA (7.65%)." } },
  { '@type': 'Question', name: "Which state has the highest income tax in 2026?", acceptedAnswer: { '@type': 'Answer', text: "California has the highest state income tax at up to 13.3%. Hawaii (11%), New Jersey (10.75%), Oregon (9.9%), and Minnesota (9.85%) follow. Most middle-income earners in California pay an effective rate of 4-7%." } },
  { '@type': 'Question', name: "Which states have a flat income tax rate?", acceptedAnswer: { '@type': 'Answer', text: "Several states use a flat income tax rate in 2026: Illinois (4.95%), Massachusetts (5%), Michigan (4.25%), Pennsylvania (3.07%), Indiana (3.0%), Utah (4.55%), Arizona (2.5%), Kentucky (4.0%), and Colorado (4.4%)." } },
  { '@type': 'Question', name: "How do state income taxes affect my paycheck?", acceptedAnswer: { '@type': 'Answer', text: "On a $75,000 salary, California residents pay roughly $4,500-$6,000 more in state income tax per year than residents of Texas or Florida. Your state tax rate is one of the biggest factors in your take-home pay." } }
] };
import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Free Paycheck Calculator — All 50 States 2026 | Federal + State + FICA',
  description: 'Free paycheck calculator for all 50 U.S. states in 2026. See take-home pay after federal tax, state income tax, and FICA. No-tax states, high-tax states, flat-tax states — all covered. No signup, 100% private.',
  alternates: { canonical: 'https://www.privatepaycheck.com/all-states' },
};

export default function AllStatesPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);
  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'clamp(24px,4vw,48px) 16px' }}>

        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '20px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › All States
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <h1 style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
          Free Paycheck Calculator<br/>
          <span style={{ color: '#818cf8' }}>All 50 States — 2026</span>
        </h1>
        <p style={{ fontSize: 'clamp(15px,2.5vw,17px)', lineHeight: 1.8, color: '#b0c4de', maxWidth: '680px', margin: '0 0 28px' }}>
          Calculate your exact take-home pay after federal income tax, state income tax, and FICA for any of the 50 U.S. states plus D.C. Updated for 2026 IRS brackets and all state withholding rates. All calculations run in your browser — no data stored, no signup required.
        </p>

        <div style={{ marginBottom: '32px' }}>
          <a href="/" style={{ display: 'inline-block', padding: '14px 36px', borderRadius: '10px', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', fontWeight: 800, fontSize: 'clamp(15px,2.5vw,17px)', textDecoration: 'none' }}>
            Calculate My Paycheck →
          </a>
        </div>

        {/* THREE GROUPS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, marginBottom: 48 }}>

          {/* NO TAX */}
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 12, padding: 'clamp(16px,3vw,24px)' }}>
            <div style={{ fontSize: 'clamp(12px,2vw,13px)', fontWeight: 800, color: '#34d399', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 6 }}>No State Income Tax</div>
            <div style={{ fontSize: 'clamp(13px,2vw,14px)', color: '#b0c4de', lineHeight: 1.7, marginBottom: 14 }}>
              9 states with zero state income tax — only federal tax and FICA apply. On a $75k salary you save $3,000–$7,000/year vs high-tax states.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[['Alaska','alaska'],['Florida','florida'],['Nevada','nevada'],['New Hampshire','new-hampshire'],['South Dakota','south-dakota'],['Tennessee','tennessee'],['Texas','texas'],['Washington','washington'],['Wyoming','wyoming']].map(([name,slug]) => (
                <Link key={slug} href={'/' + slug + '-paycheck-calculator'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'clamp(14px,2.5vw,15px)', color: '#e2e8f0', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>{name}</span><span style={{ color: '#34d399', fontWeight: 700, fontSize: 13 }}>0% →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FLAT TAX */}
          <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(16px,3vw,24px)' }}>
            <div style={{ fontSize: 'clamp(12px,2vw,13px)', fontWeight: 800, color: '#818cf8', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 6 }}>Flat-Rate State Tax</div>
            <div style={{ fontSize: 'clamp(13px,2vw,14px)', color: '#b0c4de', lineHeight: 1.7, marginBottom: 14 }}>
              These states tax all income at one fixed rate — simple to calculate, predictable take-home pay regardless of your salary level.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[['Illinois','illinois','4.95%'],['Massachusetts','massachusetts','5.0%'],['Michigan','michigan','4.25%'],['Pennsylvania','pennsylvania','3.07%'],['Indiana','indiana','3.0%'],['Utah','utah','4.55%'],['Arizona','arizona','2.5%'],['Kentucky','kentucky','4.0%'],['Colorado','colorado','4.4%']].map(([name,slug,rate]) => (
                <Link key={slug} href={'/' + slug + '-paycheck-calculator'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'clamp(14px,2.5vw,15px)', color: '#e2e8f0', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>{name}</span><span style={{ color: '#818cf8', fontWeight: 700, fontSize: 13 }}>{rate} →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* HIGH TAX */}
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: 'clamp(16px,3vw,24px)' }}>
            <div style={{ fontSize: 'clamp(12px,2vw,13px)', fontWeight: 800, color: '#f87171', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 6 }}>High-Tax States</div>
            <div style={{ fontSize: 'clamp(13px,2vw,14px)', color: '#b0c4de', lineHeight: 1.7, marginBottom: 14 }}>
              Progressive tax rates that rise with income. At $100k salary, California takes ~$9,300 in state tax — vs $0 in Texas or Florida.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[['California','california','up to 13.3%'],['Hawaii','hawaii','up to 11%'],['New Jersey','new-jersey','up to 10.75%'],['New York','new-york','up to 10.9%'],['Oregon','oregon','up to 9.9%'],['Minnesota','minnesota','up to 9.85%'],['Vermont','vermont','up to 8.75%'],['Wisconsin','wisconsin','up to 7.65%'],['Maryland','maryland','up to 5.75%']].map(([name,slug,rate]) => (
                <Link key={slug} href={'/' + slug + '-paycheck-calculator'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'clamp(14px,2.5vw,15px)', color: '#e2e8f0', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>{name}</span><span style={{ color: '#f87171', fontWeight: 700, fontSize: 13 }}>{rate} →</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <h2 style={{ fontSize: 'clamp(18px,3vw,22px)', fontWeight: 800, marginBottom: 16, color: '#f8fafc' }}>All 50 States + D.C.</h2>
        <p style={{ fontSize: 'clamp(14px,2.5vw,15px)', color: '#b0c4de', lineHeight: 1.7, marginBottom: 24 }}>
          Select any state below to see your exact 2026 take-home pay after federal income tax, state income tax, and FICA withholding.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '10px', marginBottom: 40 }}>
          {slugs.map(slug => {
            const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return (
              <Link key={slug} href={'/' + slug + '-paycheck-calculator'} style={{
                display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: 'clamp(14px,2.5vw,15px)' }}>{name}</div>
                <div style={{ fontSize: '13px', color: '#6b7fa3', marginTop: '4px' }}>Paycheck Calculator →</div>
              </Link>
            );
          })}
        </div>

        <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 10, padding: 'clamp(16px,3vw,24px)', marginBottom: 32 }}>
          <h2 style={{ fontSize: 'clamp(17px,3vw,20px)', fontWeight: 800, marginBottom: 12, color: '#f8fafc' }}>Frequently Asked Questions</h2>
          <h3 style={{ fontSize: 'clamp(15px,2.5vw,16px)', fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>Which states have no income tax in 2026?</h3>
          <p style={{ fontSize: 'clamp(14px,2.5vw,15px)', color: '#b0c4de', lineHeight: 1.8, marginBottom: 16 }}>Nine states have no state income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Workers in these states only pay federal income tax and FICA.</p>
          <h3 style={{ fontSize: 'clamp(15px,2.5vw,16px)', fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>Which state has the highest income tax?</h3>
          <p style={{ fontSize: 'clamp(14px,2.5vw,15px)', color: '#b0c4de', lineHeight: 1.8, marginBottom: 16 }}>California tops the list at up to 13.3%, followed by Hawaii (11%), New Jersey (10.75%), New York (10.9%), and Oregon (9.9%). For most middle-income earners in California, the effective rate is 4-7%.</p>
          <h3 style={{ fontSize: 'clamp(15px,2.5vw,16px)', fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>How much does state tax reduce my paycheck?</h3>
          <p style={{ fontSize: 'clamp(14px,2.5vw,15px)', color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>On a $75,000 salary, moving from Texas (0%) to California (effective ~6%) costs roughly $4,500/year in extra state tax. On $100,000, the difference grows to $6,000-$9,000/year depending on filing status.</p>
        </div>

      </div>
      <footer style={{ textAlign: 'center' as const, padding: '24px', fontSize: '12px', opacity: 0.8 borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}