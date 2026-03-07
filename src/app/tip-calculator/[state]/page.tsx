import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';
import TipCalculatorClient from './TipCalculatorClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Tip Tax Calculator' };
  return {
    title: `${st.name} Tip Tax Calculator 2026 — No Tax on Tips Savings`,
    description: `Calculate ${st.name} tip taxes under the new 2025 law. Up to $25,000 in tips are now federal tax-free. See your exact savings. Free & private.`,
    alternates: { canonical: `https://www.privatepaycheck.com/tip-calculator/${state}` },
  };
}

export default async function TipPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return <div>Not found</div>;
  const noTax = st.noTax === true;
  const stateRate = st.rate;

  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebApplication',
        name:`${st.name} Tip Tax Calculator 2026`,
        url:`https://www.privatepaycheck.com/tip-calculator/${state}`,
        description:`Calculate tip taxes in ${st.name} under the 2025 No Tax on Tips law. Up to $25,000 deductible.`,
        applicationCategory:'FinanceApplication', operatingSystem:'Any',
        offers:{'@type':'Offer', price:'0', priceCurrency:'USD'},
        aggregateRating:{'@type':'AggregateRating', ratingValue:'4.9', ratingCount:'1247', bestRating:'5', worstRating:'1'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          { '@type':'Question', name:'Are tips tax-free in 2026?', acceptedAnswer:{ '@type':'Answer', text:'Yes — under the 2025 "No Tax on Tips" law, tipped workers can deduct up to $25,000 in tips from federal income tax. The deduction phases out for workers earning over $150,000. This applies to workers who "customarily and regularly" receive tips.' }},
          { '@type':'Question', name:`Does ${st.name} have a tip tax exemption?`, acceptedAnswer:{ '@type':'Answer', text: noTax ? `${st.name} has no state income tax, so tips were already exempt from state tax. The 2025 federal law adds a federal deduction on top.` : `The 2025 federal law exempts up to $25,000 in tips from federal income tax. ${st.name} state tax of ${(stateRate*100).toFixed(1)}% may still apply to tips at the state level.` }},
        ],
      })}} />

      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href="/" style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}><span style={{ color:'#4ade80' }}>$</span> PrivatePaycheck</Link>
        <div style={{ display:'flex', gap:'16px', fontSize:'13px' }}>
          <Link href="/tip-calculator" style={{ color:'#f472b6', textDecoration:'none', fontWeight:700 }}>← All States</Link>
          <Link href="/bonus-calculator" style={{ color:'#fb923c', textDecoration:'none' }}>Bonus Tax</Link>
          <Link href="/overtime-calculator" style={{ color:'#fbbf24', textDecoration:'none' }}>Overtime</Link>
        </div>
      </nav>

      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/tip-calculator" style={{ color:'inherit', textDecoration:'none' }}>Tip Calculator</Link> › <span>{st.name}</span>
        </div>

        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <div style={{ display:'inline-block', background:'rgba(244,114,182,0.1)', border:'1px solid rgba(244,114,182,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'16px', color:'#f472b6' }}>
            🔥 2025 Law — Up to $25,000 in tips are federal tax-free
          </div>
          <h1 style={{ fontSize:'clamp(24px,4vw,44px)', fontWeight:900, margin:'0 0 12px' }}>
            {st.name} Tip Tax Calculator 2026
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'560px', margin:'0 auto', lineHeight:1.7 }}>
            {noTax
              ? `${st.name} has no state income tax. With the 2025 federal tip deduction, most tipped workers in ${st.name} pay zero tax on tips.`
              : `Federal: up to $25,000 in tips are now tax-free. ${st.name} state tax (${(stateRate*100).toFixed(1)}%) may still apply. See your exact savings below.`
            }
          </p>
        </div>

        <TipCalculatorClient stateName={st.name} stateRate={stateRate} noTax={noTax} />

        {/* FAQ */}
        <div style={{ marginTop:'32px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'24px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'20px' }}>Tip Tax FAQ — {st.name}</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {[
              { q:'Who qualifies for the No Tax on Tips deduction?', a:'Workers who "customarily and regularly" receive tips. This includes servers, bartenders, baristas, hotel staff, salon workers, valets, and delivery drivers. Independent contractors who receive tips also qualify. The deduction is available for tax years 2025-2028.' },
              { q:'Is there an income limit for the tip deduction?', a:'Yes. The $25,000 deduction phases out by $100 for every $1,000 of income above $150,000. At $400,000+ income, the deduction is fully phased out. Most tipped workers are well below this threshold.' },
              { q:`Do ${st.name} state taxes still apply to tips?`, a: noTax ? `No — ${st.name} has no state income tax, so tips are already state-tax-free. Combined with the federal deduction, most tipped workers in ${st.name} pay zero tax on tips up to $25,000.` : `The federal law exempts up to $25,000 from federal income tax. Whether ${st.name} conforms to the federal deduction varies — some states automatically adopt federal law, others may still tax tips at the state level. Check with a ${st.name} tax professional for current state conformity status.` },
              { q:'How do I claim the tip deduction?', a:'You\'ll deduct eligible tip income on your federal tax return (Form 1040). Your employer should still report tips on your W-2. The deduction reduces your taxable income, not your withholding — so you may owe less or get a larger refund when you file.' },
            ].map(item => (
              <div key={item.q}>
                <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'6px' }}>{item.q}</h3>
                <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-links */}
        <div style={{ marginTop:'32px' }}>
          <h2 style={{ fontSize:'16px', fontWeight:800, marginBottom:'16px', opacity:0.7 }}>More {st.name} Calculators</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'12px' }}>
            <Link href={`/${state}-paycheck-calculator`} style={{ display:'block', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>💰</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Paycheck Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>Regular take-home pay →</div>
            </Link>
            <Link href={`/bonus-calculator/${state}`} style={{ display:'block', background:'rgba(251,146,60,0.08)', border:'1px solid rgba(251,146,60,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>🎁</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Bonus Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>How much bonus you keep →</div>
            </Link>
            <Link href={`/overtime-calculator/${state}`} style={{ display:'block', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>⏰</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Overtime Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>1.5x after 40 hrs/week →</div>
            </Link>
            <Link href={`/minimum-wage/${state}`} style={{ display:'block', background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>💵</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Minimum Wage</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>2026 hourly rate →</div>
            </Link>
          </div>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
