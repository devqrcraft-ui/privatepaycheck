import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Qualified Tips Deduction Calculator 2026 — By State',
  description: 'Estimate federal income-tax savings for qualified tips in 2026. Review the $25,000 annual deduction limit, income phase-out, and state-specific pages.',
  alternates: { canonical: 'https://www.privatepaycheck.com/tip-calculator' },
  robots: 'index, follow',
  openGraph: {
    title: 'Qualified Tips Deduction Calculator 2026 — By State',
    description: 'Estimate federal income-tax savings for qualified tips and review state information.',
    url: 'https://www.privatepaycheck.com/tip-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};


  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Qualified Tips Deduction Calculator 2026',
    'url': 'https://www.privatepaycheck.com/tip-calculator',
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
    name: 'Can eligible workers deduct tips in 2026?',
    acceptedAnswer: { '@type': 'Answer', text: 'For tax years 2025–2028, eligible workers may claim a federal deduction for qualified tips, up to $25,000 annually, subject to occupation and income rules. Tips remain reportable, and state tax treatment varies.' },
  },
  {
    '@type': 'Question',
    name: 'Who qualifies for the no tax on tips deduction?',
    acceptedAnswer: { '@type': 'Answer', text: 'Employees and self-employed individuals may qualify for qualified tips from occupations identified by the IRS. Tip type, modified adjusted gross income, and additional limits matter; a calculator cannot verify eligibility.' },
  },
  {
    '@type': 'Question',
    name: 'What is the maximum qualified tips deduction?',
    acceptedAnswer: { '@type': 'Answer', text: 'The maximum annual federal deduction is $25,000. It phases out above modified adjusted gross income of $150,000 ($300,000 for married filing jointly). The deduction does not itself eliminate Social Security or Medicare taxes.' },
  },
  {
    '@type': 'Question',
    name: 'Do I still owe state tax on tips?',
    acceptedAnswer: { '@type': 'Answer', text: 'The deduction is federal. State conformity and local tax treatment vary, and this calculator does not estimate state tax savings. Some states do not impose an individual income tax.' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com","logo":"https://www.privatepaycheck.com/og-image.svg","description":"Free paycheck calculators for all 50 US states. Federal + state taxes, FICA, 401k. 100% private."}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Tip Calculator","item":"https://www.privatepaycheck.com/tip-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Tip Calculator","datePublished":"2026-01-15","dateModified":"2026-06-11","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/tip-calculator"}}' }} />
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'40px 6px' }}>
        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          <div style={{ display:'inline-block', background:'rgba(244,114,182,0.1)', border:'1px solid rgba(244,114,182,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'16px', color:'#f472b6' }}>
             Qualified tips may be deductible from federal income
          </div>
          <h1 style={{ fontSize:'clamp(28px,5vw,52px)', fontWeight:900, margin:'0 0 12px' }}>Tip Tax Calculator 2026</h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'600px', margin:'0 auto', lineHeight:1.7 }}>
            Eligible workers may deduct up to $25,000 of qualified tips from federal income for tax years 2025–2028, subject to income and other rules. Choose a state page for local context; state tax treatment is not modeled.
          </p>
        </div>

        {/* Law highlight */}
        <div style={{ background:'rgba(244,114,182,0.08)', border:'1px solid rgba(244,114,182,0.2)', borderRadius:'14px', padding:'20px', marginBottom:'32px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'16px' }}>
          {[
            { label:'Max Tip Deduction', value:'$25,000', icon:'' },
            { label:'Effective From', value:'Jan 1, 2025', icon:'' },
            { label:'Income Phase-Out', value:'$150k / $300k joint', icon:'' },
            { label:'Other taxes', value:'FICA may still apply', icon:'' },
          ].map(s => (
            <div key={s.label} style={{ textAlign:'center' }}>
              <div style={{ fontSize:'22px', marginBottom:'4px' }}>{s.icon}</div>
              <div style={{ fontSize:'11px', opacity: 0.8, marginBottom:'2px' }}>{s.label}</div>
              <div style={{ fontWeight:800, fontSize:'18px', color:'#f472b6' }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'10px' }}>
          {states.map(s => (
            <Link key={s.slug} href={`/tip-calculator/${s.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'4px' }}>{s.name}</div>
              {s.noTax
                ? <div style={{ fontSize:'11px', color:'#4ade80' }}>No state tax </div>
                : <div style={{ fontSize:'11px', opacity: 0.8 }}>Tip tax calculator →</div>
              }
            </Link>
          ))}
        </div>
      </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity: 0.8, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
    </>
    );
}
