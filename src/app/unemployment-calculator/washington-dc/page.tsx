import type { Metadata } from 'next'
import UnemploymentIllustration from '@/components/UnemploymentIllustration'

export const metadata: Metadata = {
  title: 'Washington DC Unemployment Calculator | Illustrative Estimate',
  description: 'Explore a simplified Washington DC unemployment calculation example. It does not apply a verified current benefit schedule or determine eligibility, payable duration, or your official benefit.',
  keywords: 'washington dc unemployment calculator, dc unemployment benefits 2026, dc WBA calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/washington-dc' },
}

export default function Page() {
  const weeklyWages = [300, 500, 700, 900, 1200, 1500]
  const rows = weeklyWages.map((weeklyWage) => {
    const modelAmount = Math.floor((weeklyWage * 13) / 26)
    return [
      `$${weeklyWage.toLocaleString('en-US')}/wk`,
      `$${(weeklyWage * 52).toLocaleString('en-US')}/yr`,
      `$${modelAmount.toLocaleString('en-US')}`,
    ]
  })
  const faqItems = [
    {
      question: 'Does this calculator determine my DC unemployment benefit?',
      answer: 'No. It provides an arithmetic illustration that divides entered highest-quarter wages by 26. It does not apply a verified current DC benefit schedule or determine eligibility; the DC Department of Employment Services makes the official claim determination.',
    },
    {
      question: 'How much unemployment can I receive in Washington, DC?',
      answer: 'Your amount depends on your claim and current DC rules. This page does not publish a verified current minimum or maximum; check official DC guidance and your monetary determination.',
    },
    {
      question: 'How long do DC unemployment benefits last?',
      answer: 'Payable duration depends on current program rules and your claim. This calculator does not estimate duration; check official DC guidance and your determination.',
    },
    {
      question: 'Is DC unemployment taxable?',
      answer: 'Unemployment compensation is generally subject to federal income tax. Check current DC and IRS guidance for state tax treatment and withholding options.',
    },
    {
      question: 'How do I apply for DC unemployment?',
      answer: 'Use the DC Department of Employment Services and follow its current eligibility and filing instructions.',
    },
  ]
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', color:'#e2e8f0', background:'#0f1629', minHeight:'100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> ›{' '}
        <a href="/unemployment-calculator" style={{ color:'#b8c8dc' }}>Unemployment Calculator</a> ›{' '}
        Washington DC
      </nav>
      <h1 style={{ fontSize:'clamp(26px,4vw,36px)', fontWeight:900, marginBottom:8, color:'#f1f5f9' }}>
        Washington DC Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize:17, color:'#94a3b8', marginBottom:20, lineHeight:1.7 }}>
        This page shows a simplified arithmetic example based on wages entered
        for a highest-paid quarter. It is not a verified DC benefit calculation;
        official amounts, eligibility, and duration depend on current rules and your claim determination.
      </p>

      <UnemploymentIllustration stateName="Washington DC" divisor={26} />

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:28, fontSize:14, color:'#fde68a' }}>
        This model does not encode verified current minimum/maximum benefits or payable weeks. Confirm current rules and your determination with DC DOES.
      </div>

      <p style={{ color:'#94a3b8', fontSize:13, lineHeight:1.7, marginBottom:28 }}>
        Check current information with the <a href="https://does.dc.gov/" target="_blank" rel="noreferrer" style={{ color:'#F5C842' }}>DC Department of Employment Services</a>.
      </p>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Illustrative model outputs</h2>
      <p style={{ color:'#94a3b8', fontSize:13, lineHeight:1.7 }}>The table assumes the same weekly wage in each of 13 weeks and divides the resulting quarter wages by 26. These are arithmetic examples only, not verified benefit amounts.</p>
      <div style={{ overflowX:'auto', marginBottom:32 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:480 }}>
          <thead><tr style={{ background:'rgba(99,102,241,0.12)' }}>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#e2e8f0' }}>Weekly Wage</th>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#e2e8f0' }}>Annualized Wage Illustration</th>
            <th style={{ padding:'10px 14px', textAlign:'left', color:'#F5C842' }}>Weekly Model Amount</th>
          </tr></thead>
          <tbody>
            {rows.map(([w,a,b],i) => (
              <tr key={i} style={{ borderTop:'1px solid rgba(255,255,255,0.07)', background: i%2===0 ? 'transparent' : 'rgba(255,255,255,0.03)' }}>
                <td style={{ padding:'9px 14px', color:'#e2e8f0' }}>{w}</td>
                <td style={{ padding:'9px 14px', color:'#94a3b8' }}>{a}</td>
                <td style={{ padding:'9px 14px', color:'#F5C842', fontWeight:700 }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize:20, fontWeight:800, marginBottom:10 }}>About this calculation example</h2>
      <p style={{ fontSize:15, color:'#94a3b8', lineHeight:1.8, marginBottom:24 }}>
        The site model divides the entered highest-quarter wages by 26. It does
        not apply a verified current minimum or maximum, eligibility test, or
        payable-duration rule. Use the DC Department of Employment Services
        guidance and your official determination for current claim information.
      </p>

      <h2 style={{ fontSize:20, fontWeight:800, marginBottom:10 }}>Washington, DC unemployment FAQ</h2>
      {faqItems.map(({ question, answer }) => (
        <div key={question}>
          <h3 style={{ fontSize:16, fontWeight:700, marginTop:18, color:'#f1f5f9' }}>{question}</h3>
          <p style={{ fontSize:14, color:'#94a3b8', lineHeight:1.8 }}>{answer}</p>
        </div>
      ))}
    
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
