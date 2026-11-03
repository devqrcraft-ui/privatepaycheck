import type { Metadata } from 'next'
import UnemploymentIllustration from '@/components/UnemploymentIllustration'
import { estimateIllustrativeWeeklyAmount } from '@/lib/unemployment'

const faqItems = [
  {
    question: 'Does this calculator determine my Texas unemployment benefit?',
    answer: 'No. This page provides an arithmetic illustration that divides entered highest-quarter wages by 25. It does not apply a verified current TWC benefit schedule or determine eligibility; TWC makes the official claim determination.',
  },
  {
    question: 'How much unemployment can I receive in Texas?',
    answer: 'Your amount depends on your claim and current Texas Workforce Commission rules. This page does not publish a verified current minimum or maximum; check TWC guidance and your monetary determination.',
  },
  {
    question: 'How long do Texas unemployment benefits last?',
    answer: 'Payable duration depends on current program rules and your claim. This calculator does not estimate duration; check TWC guidance and your determination.',
  },
  {
    question: 'Is Texas unemployment taxable?',
    answer: 'Unemployment compensation is generally subject to federal income tax. Texas does not impose an individual state income tax. Voluntary federal withholding is separate from your final tax liability.',
  },
  {
    question: 'How do I apply for Texas unemployment?',
    answer: 'Apply through the Texas Workforce Commission and follow its current eligibility and filing instructions.',
  },
]

export const metadata: Metadata = {
  title: 'Texas Unemployment Calculator | Illustrative Benefit Estimate',
  description: 'Explore a simplified Texas unemployment calculation example. It does not apply a verified current TWC benefit schedule or determine eligibility, payable duration, or your official benefit.',
  keywords: 'texas unemployment calculator, texas unemployment benefits 2026, texas WBA calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/texas' },
  openGraph: {
    title: 'Texas Unemployment Calculator | Illustrative Benefit Estimate',
    description: 'Explore a simplified Texas unemployment calculation example. It does not apply a verified current TWC benefit schedule or determine eligibility, payable duration, or your official benefit.',
    url: 'https://www.privatepaycheck.com/unemployment-calculator/texas',
    siteName: 'PrivatePaycheck',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck Texas unemployment calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Unemployment Calculator | Illustrative Benefit Estimate',
    description: 'Explore a simplified Texas unemployment calculation example. It does not apply a verified current TWC benefit schedule or determine eligibility, payable duration, or your official benefit.',
    images: ['/og-image.svg'],
  },
}

export default function Page() {
  const rows = [400, 600, 800, 1000, 1200, 1500].map((weeklyWage) => {
    const modelAmount = estimateIllustrativeWeeklyAmount(weeklyWage * 13, 25);
    return [
      `$${weeklyWage.toLocaleString('en-US')}/wk`,
      `$${(weeklyWage * 52).toLocaleString('en-US')}/yr`,
      `$${modelAmount.toLocaleString('en-US')}`,
      `$${(modelAmount * 2).toLocaleString('en-US')}`,
    ];
  });
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', color:'#e2e8f0', background:'#0f1629', minHeight:'100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> ›{' '}
        <a href="/unemployment-calculator" style={{ color:'#b8c8dc' }}>Unemployment Calculator</a> ›{' '}
        Texas
      </nav>
      <h1 style={{ fontSize:'clamp(26px,4vw,36px)', fontWeight:900, marginBottom:8, color:'#f1f5f9' }}>
        Texas Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize:17, color:'#94a3b8', marginBottom:20, lineHeight:1.7 }}>
        This page shows a simplified arithmetic example based on wages entered for a highest-paid quarter. It is not a verified TWC benefit calculation; official amounts, eligibility, and duration depend on current rules and your claim determination.
      </p>

      <UnemploymentIllustration stateName="Texas" divisor={25} />

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:28, fontSize:14, color:'#fde68a' }}>
        This model does not encode verified current minimum/maximum benefits or payable weeks. Confirm current rules and your determination with TWC.
      </div>

      <p style={{ color:'#94a3b8', fontSize:13, lineHeight:1.7, marginBottom:28 }}>
        Check current information with the <a href="https://www.twc.texas.gov/jobseekers/eligibility-benefit-amounts" target="_blank" rel="noreferrer" style={{ color:'#F5C842' }}>Texas Workforce Commission — eligibility and benefit amounts</a>.
      </p>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Illustrative model outputs</h2>
      <p style={{ color:'#94a3b8', fontSize:13, lineHeight:1.7 }}>The table assumes the same weekly wage in each of 13 weeks and divides the resulting quarter wages by 25. These are arithmetic examples only, not verified benefit amounts.</p>
      <div style={{ overflowX:'auto', marginBottom:32 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:480 }}>
          <thead><tr style={{ background:'rgba(99,102,241,0.12)' }}>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Weekly Wage</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Annualized Wage Illustration</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Weekly Model Amount</th>
            <th style={{ padding:'10px 14px', textAlign:'left' }}>Two-week Arithmetic Equivalent</th>
          </tr></thead>
          <tbody>{rows.map(([ww,ae,wba,bw]: string[])=>(
            <tr key={ww} style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              <td style={{ padding:'10px 14px', fontWeight:600 }}>{ww}</td>
              <td style={{ padding:'10px 14px', color:'#94a3b8' }}>{ae}</td>
              <td style={{ padding:'10px 14px', fontWeight:700, color:'#F5C842' }}>{wba}</td>
              <td style={{ padding:'10px 14px' }}>{bw}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Frequently Asked Questions</h2>
      {faqItems.map(({ question, answer }) => (
        <div key={question}>
          <h3 style={{ fontSize:17, fontWeight:700, marginTop:20, color:'#f1f5f9' }}>{question}</h3>
          <p style={{ color:'#94a3b8', lineHeight:1.7 }}>{answer}</p>
        </div>
      ))}

      <div style={{ borderTop:'2px solid rgba(255,255,255,0.1)', marginTop:40, paddingTop:32 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Other State Unemployment Calculators</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:8, marginBottom:24 }}>
          {[["Illinois","illinois"],["Florida","florida"],["California","california"],["New York","new-york"],["Pennsylvania","pennsylvania"],["Ohio","ohio"],["Michigan","michigan"],["Georgia","georgia"]].map(([n,s]: string[])=>(
            <a key={s} href={'/unemployment-calculator/'+s} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Unemployment</a>
          ))}
        </div>
        <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
          <a href="/" style={{ color:'#F5C842', fontSize:14 }}>Free Paycheck Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color:'#F5C842', fontSize:14 }}>Texas Paycheck Calculator</a>
          <a href="/unemployment-calculator" style={{ color:'#F5C842', fontSize:14 }}>All States Unemployment</a>
        </div>
      </div>
    
      {/* AuthorBox */}
      <div style={{ display:'flex', alignItems:'center', gap:14, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px 18px', margin:'32px 0 16px' }}>
        <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(245,200,66,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0 }}>✍️</div>
        <div>
          <div style={{ fontSize:13, fontWeight:700, color:'#e8edf8' }}>the PrivatePaycheck Team</div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginTop:2 }}>Updated November 2026</div>
        </div>
      </div>
      </main>
  )
}
