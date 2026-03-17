import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florida Unemployment Benefits 2026 — How Much Will You Get?',
  description: 'Florida unemployment pays up to $275/week for 12 weeks. Learn eligibility, how to apply, and how to calculate your weekly benefit amount in 2026.',
  alternates: { canonical: 'https://privatepaycheck.com/blog/florida-unemployment-benefits-2026' },
};

export default function Post() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'Florida Unemployment Benefits 2026 — How Much Will You Get?',
        url:'https://privatepaycheck.com/blog/florida-unemployment-benefits-2026',
        datePublished:'2026-02-21', author:{'@type':'Organization', name:'PrivatePaycheck'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          { '@type':'Question', name:'What is the maximum unemployment benefit in Florida?', acceptedAnswer:{ '@type':'Answer', text:'The maximum weekly unemployment benefit in Florida is $275/week for up to 12 weeks, giving a maximum total of $3,300.' }},
          { '@type':'Question', name:'How do I apply for unemployment in Florida?', acceptedAnswer:{ '@type':'Answer', text:'Apply online at connect.myflorida.com. You need your Social Security number, employment history for the past 18 months, and reason for separation.' }},
        ],
      })}} />

      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › Florida Unemployment 2026
        </div>
        <div style={{ display:'inline-block', background:'rgba(99,102,241,0.1)', color:'#a5b4fc', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>UNEMPLOYMENT</div>
        <h1 style={{ fontSize:'clamp(22px,4vw,38px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>Florida Unemployment Benefits 2026 — How Much Will You Get?</h1>
        <p style={{ opacity:0.5, fontSize:'13px', marginBottom:'32px' }}>February 21, 2026 · 5 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>Florida has one of the most restrictive unemployment systems in the US — the maximum benefit is $275/week for just 12 weeks. If you've recently lost your job in Florida, here's exactly what you can expect and how to calculate your benefit.</p>

          {/* Key stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:'12px', margin:'24px 0' }}>
            {[
              { label:'Max Weekly Benefit', value:'$275', color:'#4ade80' },
              { label:'Max Duration', value:'12 weeks', color:'#818cf8' },
              { label:'Min Weekly Benefit', value:'$32', color:'#fbbf24' },
              { label:'Max Total Benefit', value:'$3,300', color:'#f87171' },
            ].map(s => (
              <div key={s.label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', textAlign:'center' }}>
                <div style={{ fontSize:'11px', opacity:0.5, marginBottom:'4px' }}>{s.label}</div>
                <div style={{ fontWeight:800, fontSize:'18px', color:s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>How Florida Calculates Your Weekly Benefit</h2>
          <p>Florida uses your <strong>high quarter wages</strong> — the highest-earning quarter in your base period (the first 4 of the last 5 completed calendar quarters). Your weekly benefit is:</p>
          <div style={{ background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:'10px', padding:'16px 20px', margin:'16px 0', fontFamily:'monospace', fontSize:'14px' }}>
            Weekly Benefit = High Quarter Wages ÷ 26<br/>
            <span style={{ opacity:0.6 }}>Maximum: $275/week | Minimum: $32/week</span>
          </div>
          <p><strong>Example:</strong> If your highest quarter wages were $13,000, your weekly benefit = $13,000 ÷ 26 = <strong>$500</strong> — but Florida caps this at <strong>$275/week</strong>.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Florida Eligibility Requirements</h2>
          <ul style={{ paddingLeft:'20px', margin:'12px 0' }}>
            <li style={{ marginBottom:'8px' }}>Earned at least <strong>$3,400 in your base period</strong></li>
            <li style={{ marginBottom:'8px' }}>Worked in Florida during the past 12-18 months</li>
            <li style={{ marginBottom:'8px' }}>Lost job through <strong>no fault of your own</strong> (layoff, company closure)</li>
            <li style={{ marginBottom:'8px' }}>Actively <strong>looking for work</strong> each week you claim benefits</li>
            <li style={{ marginBottom:'8px' }}>Available and able to work</li>
          </ul>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>How Long Does Florida Unemployment Last?</h2>
          <p>Florida has a sliding scale based on the state unemployment rate:</p>
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', overflow:'hidden', margin:'16px 0' }}>
            {[
              { rate:'Under 5%', weeks:'12 weeks' },
              { rate:'5% – 6.9%', weeks:'14–19 weeks' },
              { rate:'7% or above', weeks:'Up to 23 weeks' },
            ].map((r, i) => (
              <div key={r.rate} style={{ display:'flex', justifyContent:'space-between', padding:'12px 16px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', fontSize:'14px' }}>
                <span style={{ opacity:0.7 }}>Unemployment rate: {r.rate}</span>
                <strong style={{ color:'#a5b4fc' }}>{r.weeks}</strong>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>How to Apply for Florida Unemployment</h2>
          <ol style={{ paddingLeft:'20px', margin:'12px 0' }}>
            <li style={{ marginBottom:'8px' }}>Go to <strong>connect.myflorida.com</strong> (Florida's DEO portal)</li>
            <li style={{ marginBottom:'8px' }}>Create an account with your Social Security number</li>
            <li style={{ marginBottom:'8px' }}>Enter your employment history for the last 18 months</li>
            <li style={{ marginBottom:'8px' }}>Submit your initial claim — process takes 20-30 minutes</li>
            <li style={{ marginBottom:'8px' }}>Certify weekly by confirming your job search activities</li>
          </ol>
          <p>Benefits are typically deposited within <strong>3 weeks</strong> of approval via direct deposit or the Way2Go debit card.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Is Florida Unemployment Taxable?</h2>
          <p>Yes. Florida unemployment benefits are taxable at the federal level. You can choose to have <strong>10% federal tax withheld</strong> from each payment by filing Form W-4V. Florida has no state income tax, so no state withholding is needed.</p>
        </div>

        {/* CTA */}
        <div style={{ margin:'40px 0', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:'14px', padding:'24px', textAlign:'center' }}>
          <div style={{ fontSize:'24px', marginBottom:'8px' }}>📋</div>
          <div style={{ fontWeight:800, fontSize:'18px', marginBottom:'8px' }}>Estimate Your Florida Unemployment Benefit</div>
          <p style={{ opacity:0.65, fontSize:'14px', marginBottom:'16px' }}>Enter your weekly earnings to see your estimated benefit amount.</p>
          <Link href="/unemployment-calculator/florida" style={{ display:'inline-block', background:'#818cf8', color:'white', fontWeight:800, padding:'12px 28px', borderRadius:'10px', textDecoration:'none', fontSize:'15px' }}>
            Florida Unemployment Calculator →
          </Link>
        </div>

        <div style={{ marginTop:'40px' }}>
          <h3 style={{ fontSize:'16px', fontWeight:800, marginBottom:'16px', opacity:0.7 }}>Related Calculators</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'10px' }}>
            <Link href="/florida-paycheck-calculator" style={{ display:'block', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'13px' }}>Florida Paycheck Calculator</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginTop:'4px' }}>No state income tax →</div>
            </Link>
            <Link href="/overtime-calculator/florida" style={{ display:'block', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'13px' }}>Florida Overtime Calculator</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginTop:'4px' }}>Federal 1.5x rules →</div>
            </Link>
            <Link href="/minimum-wage/florida" style={{ display:'block', background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:'13px' }}>Florida Minimum Wage</div>
              <div style={{ fontSize:'11px', opacity:0.5, marginTop:'4px' }}>$13.00/hour in 2026 →</div>
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
