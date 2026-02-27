import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is FICA Tax? Social Security & Medicare Explained 2026',
  description: 'FICA tax is 7.65% of your paycheck — 6.2% Social Security + 1.45% Medicare. Learn what it is, who pays it, and how to calculate it in 2026.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/what-is-fica-tax' },
};

export default function Post() {
  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'What is FICA Tax? Social Security & Medicare Explained 2026',
        url:'https://www.privatepaycheck.com/blog/what-is-fica-tax',
        datePublished:'2026-02-22', author:{'@type':'Organization', name:'PrivatePaycheck'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          { '@type':'Question', name:'What is FICA tax?', acceptedAnswer:{ '@type':'Answer', text:'FICA stands for Federal Insurance Contributions Act. It consists of Social Security tax (6.2%) and Medicare tax (1.45%), totaling 7.65% of your gross wages.' }},
          { '@type':'Question', name:'How much is FICA tax in 2026?', acceptedAnswer:{ '@type':'Answer', text:'In 2026, employees pay 6.2% for Social Security on wages up to $176,100, plus 1.45% for Medicare on all wages. Total FICA is 7.65%.' }},
          { '@type':'Question', name:'Do self-employed pay FICA?', acceptedAnswer:{ '@type':'Answer', text:'Yes. Self-employed individuals pay the full 15.3% (both employee and employer portions), but can deduct the employer half on their tax return.' }},
        ],
      })}} />

      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href="/" style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}><span style={{ color:'#4ade80' }}>$</span> PrivatePaycheck</Link>
        <div style={{ display:'flex', gap:'16px', fontSize:'13px' }}>
          <Link href="/blog" style={{ color:'#818cf8', textDecoration:'none' }}>← Blog</Link>
          <Link href="/" style={{ color:'#4ade80', textDecoration:'none' }}>Calculator</Link>
        </div>
      </nav>

      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › What is FICA Tax
        </div>
        <div style={{ display:'inline-block', background:'rgba(251,191,36,0.1)', color:'#fbbf24', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>TAXES</div>
        <h1 style={{ fontSize:'clamp(22px,4vw,38px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>What is FICA Tax? Social Security & Medicare Explained 2026</h1>
        <p style={{ opacity:0.5, fontSize:'13px', marginBottom:'32px' }}>February 22, 2026 · 5 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>Look at any pay stub and you'll see "FICA" or "Social Security" and "Medicare" deducted automatically. Most people know these come out of their paycheck but don't know exactly why, how much, or when they stop. Here's everything you need to know for 2026.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>What Does FICA Stand For?</h2>
          <p>FICA stands for the <strong>Federal Insurance Contributions Act</strong>. It's the law that requires employees and employers to contribute to two programs:</p>
          <ul style={{ paddingLeft:'20px', margin:'12px 0' }}>
            <li style={{ marginBottom:'8px' }}><strong>Social Security</strong> — funds retirement, disability, and survivor benefits</li>
            <li style={{ marginBottom:'8px' }}><strong>Medicare</strong> — funds health insurance for people 65 and older</li>
          </ul>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>FICA Tax Rates 2026</h2>
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', overflow:'hidden', margin:'16px 0' }}>
            {[
              { tax:'Social Security', employee:'6.2%', employer:'6.2%', cap:'$176,100 wage cap' },
              { tax:'Medicare', employee:'1.45%', employer:'1.45%', cap:'No cap' },
              { tax:'Additional Medicare', employee:'0.9%', employer:'0%', cap:'On wages over $200,000' },
              { tax:'Total FICA', employee:'7.65%', employer:'7.65%', cap:'' },
            ].map((r, i) => (
              <div key={r.tax} style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 2fr', gap:'8px', padding:'12px 16px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', fontSize:'13px', alignItems:'center' }}>
                <strong>{r.tax}</strong>
                <span style={{ color:'#f87171', textAlign:'center' }}>{r.employee}</span>
                <span style={{ color:'#818cf8', textAlign:'center' }}>{r.employer}</span>
                <span style={{ opacity:0.5, fontSize:'12px' }}>{r.cap}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:'12px', opacity:0.5 }}>Red = employee portion | Blue = employer portion (not visible on your pay stub but paid on your behalf)</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>The Social Security Wage Cap</h2>
          <p>Social Security tax only applies to the first <strong>$176,100 of earnings in 2026</strong>. Once you hit that limit, Social Security deductions stop for the year. Medicare has no cap — you pay 1.45% on every dollar earned, plus 0.9% on anything over $200,000.</p>
          <p>This means high earners effectively pay a lower overall FICA rate as a percentage of total income.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>FICA Example Calculations</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'12px', margin:'16px 0' }}>
            {[
              { salary:'$50,000', ss:'$3,100', medicare:'$725', total:'$3,825' },
              { salary:'$75,000', ss:'$4,650', medicare:'$1,088', total:'$5,738' },
              { salary:'$100,000', ss:'$6,200', medicare:'$1,450', total:'$7,650' },
              { salary:'$200,000', ss:'$10,932', medicare:'$2,900 + $900*', total:'$14,732' },
            ].map(r => (
              <div key={r.salary} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'12px 16px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:'8px', fontSize:'13px' }}>
                <strong>{r.salary}</strong>
                <span style={{ opacity:0.7 }}>SS: {r.ss}</span>
                <span style={{ opacity:0.7 }}>Med: {r.medicare}</span>
                <strong style={{ color:'#f87171' }}>Total: {r.total}</strong>
              </div>
            ))}
          </div>
          <p style={{ fontSize:'12px', opacity:0.5 }}>* Additional 0.9% Medicare applies on wages over $200,000</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Can You Reduce FICA Taxes?</h2>
          <p>Unlike federal income tax, FICA applies to <strong>gross wages before most deductions</strong>. However, you can reduce FICA through:</p>
          <ul style={{ paddingLeft:'20px', margin:'12px 0' }}>
            <li style={{ marginBottom:'8px' }}><strong>HSA contributions</strong> — if contributed through payroll, they reduce FICA taxable wages</li>
            <li style={{ marginBottom:'8px' }}><strong>Dependent care FSA</strong> — up to $5,000 is excluded from FICA</li>
            <li style={{ marginBottom:'8px' }}><strong>Section 125 cafeteria plans</strong> — health insurance premiums paid pre-tax reduce FICA wages</li>
          </ul>
          <p>Note: Traditional 401(k) contributions do <strong>not</strong> reduce FICA — they only reduce federal income tax.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Self-Employed? You Pay Both Sides</h2>
          <p>Regular employees pay 7.65% and their employer matches it. Self-employed individuals pay the full <strong>15.3%</strong> as self-employment tax. However, you can deduct <strong>half of self-employment tax</strong> on your federal return, effectively reducing your income tax burden.</p>
        </div>

        {/* CTA */}
        <div style={{ margin:'40px 0', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.25)', borderRadius:'14px', padding:'24px', textAlign:'center' }}>
          <div style={{ fontSize:'24px', marginBottom:'8px' }}>💰</div>
          <div style={{ fontWeight:800, fontSize:'18px', marginBottom:'8px' }}>See Exactly What FICA Takes From Your Paycheck</div>
          <p style={{ opacity:0.65, fontSize:'14px', marginBottom:'16px' }}>Enter your salary to see a complete breakdown — federal tax, FICA, state tax, and more.</p>
          <Link href="/" style={{ display:'inline-block', background:'#4ade80', color:'#0f0c29', fontWeight:800, padding:'12px 28px', borderRadius:'10px', textDecoration:'none', fontSize:'15px' }}>
            Free Paycheck Calculator →
          </Link>
        </div>

        <div style={{ marginTop:'32px' }}>
          <h3 style={{ fontSize:'16px', fontWeight:800, marginBottom:'14px', opacity:0.7 }}>Related Articles</h3>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
            {[
              { href:'/blog/how-to-read-your-pay-stub', title:'How to Read Your Pay Stub — Every Line Explained' },
              { href:'/blog/401k-contribution-limits-2026', title:'401(k) Contribution Limits 2026' },
              { href:'/blog/hsa-contribution-limits-2026', title:'HSA Contribution Limits 2026' },
            ].map(a => (
              <Link key={a.href} href={a.href} style={{ color:'#818cf8', textDecoration:'none', fontSize:'14px', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                → {a.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
