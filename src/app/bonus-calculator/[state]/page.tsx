import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';
import BonusCalculatorClient from './BonusCalculatorClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Bonus Tax Calculator' };
  return {
    title: `${st.name} Bonus Tax Calculator 2026 — Keep More of Your Bonus (22% Flat vs Aggregate)`,
    description: `Got a bonus in ${st.name}? IRS withholds 22% flat — but you may owe more or less. See your exact take-home in seconds. Free, no login, updated 2026.`,
    alternates: { canonical: `https://www.privatepaycheck.com/bonus-calculator/${state}` },
  };
}

export default async function BonusPage({ params }: { params: Promise<{ state: string }> }) {
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
        name:`${st.name} Bonus Tax Calculator 2026`,
        url:`https://www.privatepaycheck.com/bonus-calculator/${state}`,
        description:`${st.name} bonus tax 2026: IRS 22% flat rate vs aggregate method. Enter bonus + salary → instant take-home breakdown. Free & private, no signup.`,
        applicationCategory:'FinanceApplication', operatingSystem:'Any',
        offers:{'@type':'Offer', price:'0', priceCurrency:'USD'},
        aggregateRating:{'@type':'AggregateRating', ratingValue:'4.8', ratingCount:'2156', bestRating:'5', worstRating:'1'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          { '@type':'Question', name:`How is bonus tax calculated in ${st.name}?`, acceptedAnswer:{ '@type':'Answer', text:`In ${st.name}, bonuses are taxed federally at 22% flat (supplemental rate) or at your regular rate using the aggregate method. ${noTax ? `${st.name} has no state income tax.` : `State tax of ${(stateRate*100).toFixed(1)}% also applies.`}` }},
          { '@type':'Question', name:'What is the flat rate vs aggregate method?', acceptedAnswer:{ '@type':'Answer', text:'Flat rate: IRS withholds 22% federal tax on bonus directly. Aggregate method: bonus is added to your regular paycheck and taxed at your effective rate. The aggregate method may result in lower withholding if your effective rate is below 22%.' }},
        ],
      })}} />

      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href="/" style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}><span style={{ color:'#4ade80' }}>$</span> PrivatePaycheck</Link>
        <div style={{ display:'flex', gap:'16px', fontSize:'13px' }}>
          <Link href="/bonus-calculator" style={{ color:'#fb923c', textDecoration:'none', fontWeight:700 }}>← All States</Link>
          <Link href="/tip-calculator" style={{ color:'#f472b6', textDecoration:'none' }}>Tip Tax</Link>
          <Link href="/overtime-calculator" style={{ color:'#fbbf24', textDecoration:'none' }}>Overtime</Link>
        </div>
      </nav>

      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/bonus-calculator" style={{ color:'inherit', textDecoration:'none' }}>Bonus Calculator</Link> › <span>{st.name}</span>
        </div>

        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          {noTax && (
            <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'16px', color:'#4ade80' }}>
              🎉 {st.name} has NO state income tax
            </div>
          )}
          <h1 style={{ fontSize:'clamp(24px,4vw,44px)', fontWeight:900, margin:'0 0 12px' }}>
            {st.name} Bonus Tax Calculator 2026
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'560px', margin:'0 auto', lineHeight:1.7 }}>
            {noTax
              ? `In ${st.name}, bonuses are only taxed federally — no state income tax. Federal flat rate: 22%.`
              : `Federal flat rate: 22%. ${st.name} state tax: ${(stateRate*100).toFixed(1)}%. See your real take-home bonus below.`
            }
          </p>
        </div>

        <BonusCalculatorClient stateName={st.name} stateRate={stateRate} noTax={noTax} />

        {/* Info cards */}
        <div style={{ marginTop:'32px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'14px' }}>
          {[
            { label:'Federal Flat Rate', value:'22%', icon:'🇺🇸', note:'Supplemental wage rate' },
            { label:`${st.name} State Tax`, value: noTax ? 'None ✅' : `${(stateRate*100).toFixed(1)}%`, icon:'🏛️', note: noTax ? 'No state income tax' : 'Applied on bonus' },
            { label:'Social Security', value:'6.2%', icon:'🔐', note:'Up to $176,100/yr cap' },
            { label:'Medicare', value:'1.45%', icon:'🏥', note:'No cap on wages' },
          ].map(b => (
            <div key={b.label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'16px', textAlign:'center' }}>
              <div style={{ fontSize:'22px', marginBottom:'6px' }}>{b.icon}</div>
              <div style={{ fontSize:'11px', opacity:0.5, textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'4px' }}>{b.label}</div>
              <div style={{ fontWeight:800, fontSize:'18px', marginBottom:'2px' }}>{b.value}</div>
              <div style={{ fontSize:'11px', opacity:0.4 }}>{b.note}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop:'32px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'24px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'20px' }}>Bonus Tax FAQ — {st.name}</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {[
              { q:`How much tax will I pay on my bonus in ${st.name}?`, a:`Your bonus is taxed at 22% federal flat rate plus ${noTax ? 'no state tax ('+st.name+' has no income tax)' : (stateRate*100).toFixed(1)+'% '+st.name+' state tax'}, plus 7.65% FICA. On a $10,000 bonus, expect to keep roughly $${noTax ? Math.round(10000*(1-0.22-0.0765)).toLocaleString() : Math.round(10000*(1-0.22-stateRate-0.0765)).toLocaleString()} after all taxes.` },
              { q:'What is the flat rate method for bonus taxes?', a:'The IRS allows employers to withhold a flat 22% federal income tax on supplemental wages (bonuses, commissions) under $1 million. This is the most common method. It\'s separate from your regular paycheck withholding.' },
              { q:'What is the aggregate method for bonus taxes?', a:'The aggregate method adds your bonus to a regular paycheck and calculates withholding on the total. If your effective tax rate is below 22%, this method results in less withholding. Ask your payroll department which method they use.' },
              { q:'Are bonuses subject to Social Security and Medicare?', a:'Yes. Bonuses are considered regular wages for FICA purposes. You pay 6.2% Social Security (on wages up to $176,100) and 1.45% Medicare on all wages. Your employer also matches these amounts.' },
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
            <Link href={`/tip-calculator/${state}`} style={{ display:'block', background:'rgba(244,114,182,0.08)', border:'1px solid rgba(244,114,182,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>🍽️</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Tip Tax Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>No tax on tips 2025 →</div>
            </Link>
            <Link href={`/overtime-calculator/${state}`} style={{ display:'block', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>⏰</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Overtime Calculator</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>1.5x after 40 hrs/week →</div>
            </Link>
            <Link href={`/unemployment-calculator/${state}`} style={{ display:'block', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.2)', borderRadius:'12px', padding:'16px', color:'white', textDecoration:'none' }}>
              <div style={{ fontSize:'20px', marginBottom:'8px' }}>📋</div>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{st.name} Unemployment</div>
              <div style={{ fontSize:'12px', opacity:0.55 }}>Estimate weekly benefits →</div>
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
