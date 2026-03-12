import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — How Much of Your Bonus Will You Keep?',
  description: 'IRS withholds 22% on bonuses — but your real tax may be higher or lower. Free 2026 bonus tax calculator for all 50 states. See your exact take-home instantly.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-calculator' },
};


  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Bonus Tax Calculator 2026',
    'url': 'https://www.privatepaycheck.com/bonus-calculator',
    'description': 'Free bonus tax calculator for all 50 US states. IRS 22% withholding rate.',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  }


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    '@type': 'Question',
    name: 'How much tax do I pay on a bonus in 2026?',
    acceptedAnswer: { '@type': 'Answer', text: 'The IRS withholds 22% federal tax on bonuses under $1 million using the flat rate method. State taxes also apply. On a $5,000 bonus in Texas (no state tax), you keep about $3,820. In California, roughly $3,100.' },
  },
  {
    '@type': 'Question',
    name: 'What is the difference between flat rate and aggregate bonus tax?',
    acceptedAnswer: { '@type': 'Answer', text: 'The flat rate method withholds a fixed 22% federal tax. The aggregate method combines your bonus with your regular paycheck and withholds based on your total bracket — often resulting in higher withholding.' },
  },
  {
    '@type': 'Question',
    name: 'Do bonuses affect my tax bracket?',
    acceptedAnswer: { '@type': 'Answer', text: 'Your bonus is added to your annual income when calculating your effective tax rate. However, employer withholding uses the 22% flat rate. If your effective rate is lower, you may receive a refund at tax time.' },
  },
  {
    '@type': 'Question',
    name: 'Which states have the highest bonus taxes?',
    acceptedAnswer: { '@type': 'Answer', text: 'California (up to 13.3%), New York (up to 10.9%), and New Jersey (up to 10.75%) have the highest combined bonus tax rates. Nine states have no income tax: TX, FL, NV, WA, WY, SD, TN, NH, AK.' },
  }
  ],
};

export default function BonusHub() {
  const states = Object.entries(STATE_SLUG_MAP).map(([slug, code]) => ({
    slug, code, name: STATE_TAXES[code]?.name || code,
    noTax: STATE_TAXES[code]?.noTax === true,
  })).sort((a, b) => a.name.localeCompare(b.name));
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
    </>
    );
}
