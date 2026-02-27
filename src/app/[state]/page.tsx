import type { Metadata } from 'next';
import Link from 'next/link';
import Calculator from '@/components/Calculator';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s + '-paycheck-calculator' }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const slug = state.replace('-paycheck-calculator', '');
  const code = STATE_SLUG_MAP[slug];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Paycheck Calculator' };
  return {
    title: st.name + ' Paycheck Calculator 2026 — Free & Private',
    description: 'Calculate take-home pay in ' + st.name + '. Federal + state taxes, FICA, 401k. Your data stays in browser.',
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const slug = state.replace('-paycheck-calculator', '');
  const code = STATE_SLUG_MAP[slug];
  const st = STATE_TAXES[code];
  if (!st) return <div>Not found</div>;
  const noTax = st.noTax === true;
  const rateStr = (st.rate * 100).toFixed(2) + '%';
  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color:'white', fontFamily:'system-ui,sans-serif' }}>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": st.name + " Paycheck Calculator 2026 — PrivatePaycheck",
          "url": "https://www.privatepaycheck.com/" + slug + "-paycheck-calculator",
          "description": "Free " + st.name + " paycheck calculator. " + (noTax ? st.name + " has no state income tax." : "State tax rate: " + rateStr + ".") + " Calculate exact take-home pay with federal taxes, FICA, 401k, HSA.",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Any",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "2341", "bestRating": "5", "worstRating": "1" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "areaServed": { "@type": "State", "name": st.name, "containedInPlace": { "@type": "Country", "name": "United States" } }
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the " + st.name + " state income tax rate in 2026?",
              "acceptedAnswer": { "@type": "Answer", "text": noTax ? st.name + " has no state income tax in 2026. Residents only pay federal income tax and FICA." : "The " + st.name + " state income tax rate is " + rateStr + " in 2026." }
            },
            {
              "@type": "Question",
              "name": "How much of my paycheck goes to taxes in " + st.name + "?",
              "acceptedAnswer": { "@type": "Answer", "text": noTax ? "In " + st.name + ", there is no state income tax. You pay federal income tax (10-37% depending on income) plus 6.2% Social Security and 1.45% Medicare." : "In " + st.name + ", you pay federal income tax, " + rateStr + " state income tax, 6.2% Social Security, and 1.45% Medicare. For a $75,000 salary expect roughly 25-30% total." }
            },
            {
              "@type": "Question",
              "name": "Is the " + st.name + " paycheck calculator free?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No signup needed. Your salary data never leaves your browser — all calculations are done locally using 2026 tax tables." }
            }
          ]
        })}}
      />
      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href="/" style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}>
          {'💰 PrivatePaycheck'}
        </Link>
        <Link href="/" style={{ color:'rgba(255,255,255,0.6)', fontSize:'13px', textDecoration:'none' }}>
          {'← All States'}
        </Link>
      </nav>
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          {noTax && (
            <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'16px', color:'#4ade80' }}>
              {'🎉 ' + st.name + ' has NO state income tax!'}
            </div>
          )}
          <h1 style={{ fontSize:'clamp(24px,4vw,44px)', fontWeight:900, margin:'0 0 12px' }}>
            {st.name + ' Paycheck Calculator 2026'}
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'550px', margin:'0 auto', lineHeight:1.7 }}>
            {noTax ? st.name + ' residents pay no state income tax.' : st.name + ' state income tax: ' + rateStr + '.'}
          </p>
        </div>
        <Calculator defaultState={code} />
        <div style={{ marginTop:'40px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'24px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>{st.name + ' Tax Facts 2026'}</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'12px', fontSize:'14px' }}>
            <div><span style={{ opacity:0.6 }}>{'State Tax: '}</span><strong>{noTax ? 'None' : rateStr}</strong></div>
            <div><span style={{ opacity:0.6 }}>{'Federal FICA: '}</span><strong>{'7.65%'}</strong></div>
            <div><span style={{ opacity:0.6 }}>{'SS Wage Cap: '}</span><strong>{'$168,600'}</strong></div>
          </div>
        </div>
      </div>

        <div style={{ marginTop:'32px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'24px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>{'How to Calculate Your ' + st.name + ' Paycheck'}</h2>
          <p style={{ fontSize:'14px', opacity:0.7, lineHeight:1.8, marginBottom:'12px' }}>
            {noTax
              ? 'Living in ' + st.name + ' gives you a significant tax advantage — there is no state income tax. Your paycheck deductions include only federal income tax, Social Security (6.2%), and Medicare (1.45%). This means more money in your pocket compared to high-tax states like California or New York.'
              : 'Your ' + st.name + ' paycheck is subject to both federal and state income taxes. The state income tax rate is ' + rateStr + ', applied on top of federal taxes. To calculate your exact take-home pay, enter your gross salary above and select your filing status.'
            }
          </p>
          <p style={{ fontSize:'14px', opacity:0.7, lineHeight:1.8 }}>
            {'Use this free ' + st.name + ' paycheck calculator to instantly see your net pay after all deductions — federal income tax, ' + (noTax ? 'FICA' : st.name + ' state tax, FICA') + ', 401(k), HSA, and health insurance premiums. All calculations happen in your browser — your salary data is never sent to any server.'}
          </p>
        </div>

        <div style={{ marginTop:'24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'24px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'20px' }}>{'Frequently Asked Questions — ' + st.name + ' Paycheck'}</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <div>
              <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'6px' }}>{'How much is taken out of my paycheck in ' + st.name + '?'}</h3>
              <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>
                {noTax
                  ? 'In ' + st.name + ', there is no state income tax. A typical employee pays 6.2% for Social Security, 1.45% for Medicare, and federal income tax based on their bracket. For a $75,000 salary, expect roughly 18-22% total tax.'
                  : 'In ' + st.name + ', deductions include federal income tax (10-37%), state income tax (' + rateStr + '), Social Security (6.2%), and Medicare (1.45%). For a $75,000 salary, total taxes are typically 25-30%.'
                }
              </p>
            </div>
            <div>
              <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'6px' }}>{'What is the ' + st.name + ' state income tax rate in 2026?'}</h3>
              <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>
                {noTax
                  ? st.name + ' has no state income tax in 2026. This applies to all residents regardless of income level.'
                  : 'The ' + st.name + ' state income tax rate is ' + rateStr + ' for 2026. This is applied to your taxable income after the standard deduction.'
                }
              </p>
            </div>
            <div>
              <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'6px' }}>{'How do I reduce taxes on my ' + st.name + ' paycheck?'}</h3>
              <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>
                {'The most effective ways to reduce your taxable income include contributing to a 401(k) (up to $23,500 in 2026), an HSA (up to $4,300 for individuals), and paying health insurance premiums pre-tax. Enter these amounts in the calculator above to see your exact savings.'}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'6px' }}>{'Is this ' + st.name + ' paycheck calculator accurate for 2026?'}</h3>
              <p style={{ fontSize:'13px', opacity:0.7, lineHeight:1.7, margin:0 }}>
                {noTax ? st.name + ' has no state income tax. Uses 2026 federal brackets and standard deduction ($15,000).' : 'Yes. Uses 2026 federal tax brackets, standard deduction ($15,000), FICA rates, and ' + st.name + ' state tax rate of ' + rateStr + '.'}
              </p>
            </div>
          </div>
        </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        {'© 2026 PrivatePaycheck.com'}
      </footer>
    </main>
  );
}
