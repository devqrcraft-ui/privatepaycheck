import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Tip Tax Calculator 2026 — No Tax on Tips Law, By State',
  description: 'New 2025 law: up to $25,000 in tips are now tax-free. Calculate your tip tax savings by state. Free & instant.',
  alternates: { canonical: 'https://www.privatepaycheck.com/tip-calculator' },
};


  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Tip & Tax Calculator 2026',
    'url': 'https://privatepaycheck.com/tip-calculator',
    'description': 'Free tip and tax calculator for tipped workers. All 50 US states.',
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
    name: 'Are tips tax-free in 2026?',
    acceptedAnswer: { '@type': 'Answer', text: 'The No Tax on Tips law (2025-2028) allows workers to deduct up to $25,000 in tip income from federal taxable income. Tips are still reported on your W-2, but the deduction reduces your tax bill. State taxes may still apply.' },
  },
  {
    '@type': 'Question',
    name: 'Who qualifies for the no tax on tips deduction?',
    acceptedAnswer: { '@type': 'Answer', text: 'Workers in traditionally tipped occupations qualify: servers, bartenders, hotel staff, rideshare and delivery drivers, salon workers. Tips must be voluntary customer payments — mandatory service charges do not qualify.' },
  },
  {
    '@type': 'Question',
    name: 'How much can I save with the no tax on tips deduction?',
    acceptedAnswer: { '@type': 'Answer', text: 'At the 22% federal bracket, a worker with $25,000 in tips saves up to $5,500/year. At 12%, savings are $3,000. The deduction phases out for higher incomes above $150,000.' },
  },
  {
    '@type': 'Question',
    name: 'Do I still owe state tax on tips?',
    acceptedAnswer: { '@type': 'Answer', text: 'The no tax on tips deduction is federal only. Most states still tax tip income as regular income. Nine states (TX, FL, NV, WA, WY, SD, TN, NH, AK) have no income tax, so tips are fully exempt from state tax there.' },
  }
  ],
};

export default function TipHub() {
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
          <div style={{ display:'inline-block', background:'rgba(244,114,182,0.1)', border:'1px solid rgba(244,114,182,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'16px', color:'#f472b6' }}>
            🔥 NEW 2025 LAW — Up to $25,000 in tips are now federal tax-free
          </div>
          <h1 style={{ fontSize:'clamp(28px,5vw,52px)', fontWeight:900, margin:'0 0 12px' }}>Tip Tax Calculator 2026</h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'600px', margin:'0 auto', lineHeight:1.7 }}>
            The "No Tax on Tips" law lets tipped workers deduct up to $25,000 in tips from federal income tax. See how much you save — choose your state below.
          </p>
        </div>

        {/* Law highlight */}
        <div style={{ background:'rgba(244,114,182,0.08)', border:'1px solid rgba(244,114,182,0.2)', borderRadius:'14px', padding:'20px', marginBottom:'32px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'16px' }}>
          {[
            { label:'Max Tip Deduction', value:'$25,000', icon:'💰' },
            { label:'Effective From', value:'Jan 1, 2025', icon:'📅' },
            { label:'Income Phase-Out', value:'$150,000', icon:'📊' },
            { label:'Workers Eligible', value:'70M+', icon:'👥' },
          ].map(s => (
            <div key={s.label} style={{ textAlign:'center' }}>
              <div style={{ fontSize:'22px', marginBottom:'4px' }}>{s.icon}</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginBottom:'2px' }}>{s.label}</div>
              <div style={{ fontWeight:800, fontSize:'18px', color:'#f472b6' }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'10px' }}>
          {states.map(s => (
            <Link key={s.slug} href={`/tip-calculator/${s.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{s.name}</div>
              {s.noTax
                ? <div style={{ fontSize:'11px', color:'#4ade80' }}>No state tax ✅</div>
                : <div style={{ fontSize:'11px', opacity:0.5 }}>Tip tax calculator →</div>
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
