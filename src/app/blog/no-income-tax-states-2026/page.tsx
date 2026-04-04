import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '9 States With No Income Tax in 2026 — How Much Do You Actually Save?',
  description: 'Texas, Florida, Nevada and 6 more states have zero state income tax. We ran the numbers for $50k, $75k, and $100k salaries to show real savings.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/no-income-tax-states-2026' },
};

const NO_TAX_STATES = [
  { name:'Alaska',        slug:'alaska',         note:'No income tax. Also pays residents an annual Permanent Fund Dividend (~$1,300–$2,000/yr).' },
  { name:'Florida',       slug:'florida',        note:'No income tax. Popular retirement destination. High sales tax (6% + local).' },
  { name:'Nevada',        slug:'nevada',         note:'No income tax. High-tax states like CA border NV — many residents cross-commute.' },
  { name:'New Hampshire', slug:'new-hampshire',  note:'No wage income tax. Historically taxed interest & dividends, but that was phased out.' },
  { name:'South Dakota',  slug:'south-dakota',   note:'No income tax. Business-friendly — many corporations domicile here.' },
  { name:'Tennessee',     slug:'tennessee',       note:'No income tax on wages. The Hall Tax (interest/dividends) was repealed in 2021.' },
  { name:'Texas',         slug:'texas',           note:'No income tax. Offset by higher property taxes (~1.6–2.2% of home value/year).' },
  { name:'Washington',    slug:'washington',      note:'No income tax. Has a capital gains tax (7%) on gains over $250k since 2022.' },
  { name:'Wyoming',       slug:'wyoming',         note:'No income tax. Low cost of living and low property taxes.' },
];

const SAVINGS = [
  { income:50000,  ca:2850,  ny:2550,  il:2475,  or:4950 },
  { income:75000,  ca:5175,  ny:4200,  il:3713,  or:7425 },
  { income:100000, ca:7775,  ny:6185,  il:4950,  or:9900 },
];

export default function Post() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'9 States With No Income Tax in 2026 — How Much Do You Actually Save?',
        url:'https://www.privatepaycheck.com/blog/no-income-tax-states-2026',
        datePublished:'2026-01-22', dateModified:'2026-01-22',
        author:{'@type':'Organization', name:'PrivatePaycheck'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
      {
        '@type': 'Question',
        name: 'Which states have no income tax in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nine states have no individual income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. New Hampshire taxes only interest and dividends, not wages.' },
      },
      {
        '@type': 'Question',
        name: 'How much do you save living in a no-tax state?',
        acceptedAnswer: { '@type': 'Answer', text: 'Moving from California to Texas on a })}} />00,000 salary saves roughly $6,000-$9,000/year in state income taxes. The exact amount depends on your income, filing status, and deductions.' },
      },
      {
        '@type': 'Question',
        name: 'Do no-income-tax states have higher other taxes?',
        acceptedAnswer: { '@type': 'Answer', text: 'Some offset income tax with higher property or sales taxes. Texas has high property taxes (1.7% average). Washington has a 6.5% sales tax. Tennessee has a 7% sales tax — the highest in the US.' },
      }
        ],
      })}} />
      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › No Income Tax States 2026
        </div>
        <div style={{ display:'inline-block', background:'rgba(129,140,248,0.1)', color:'#818cf8', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>STATE TAXES</div>
        <h1 style={{ fontSize:'clamp(22px,4vw,38px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>9 States With No Income Tax in 2026 — How Much Do You Actually Save?</h1>
        <p style={{ opacity:0.5, fontSize:'13px', marginBottom:'32px' }}>January 22, 2026 · 5 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>Moving to a no-income-tax state sounds like a financial win — and it often is. But the savings depend heavily on your income, and some states make up the difference with higher property taxes, sales taxes, or cost of living. Here is what the numbers actually look like.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>The 9 States With No Income Tax</h2>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'10px', margin:'16px 0 32px' }}>
          {NO_TAX_STATES.map(s => (
            <div key={s.slug} style={{ background:'rgba(74,222,128,0.06)', border:'1px solid rgba(74,222,128,0.15)', borderRadius:'10px', padding:'14px 16px', display:'flex', gap:'12px', alignItems:'flex-start' }}>
              <span style={{ color:'#4ade80', fontWeight:800, fontSize:'16px', minWidth:'20px' }}></span>
              <div>
                <Link href={`/${s.slug}-paycheck-calculator`} style={{ color:'#4ade80', fontWeight:700, textDecoration:'none', fontSize:'15px' }}>{s.name}</Link>
                <p style={{ fontSize:'13px', opacity:0.65, margin:'4px 0 0', lineHeight:1.6 }}>{s.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>How Much Do You Save vs. High-Tax States?</h2>
          <p>Here is the annual state income tax savings when choosing Texas (no tax) over four high-tax states, at three income levels:</p>
        </div>

        <div style={{ overflowX:'auto', margin:'16px 0 32px' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'14px' }}>
            <thead>
              <tr style={{ borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                {['Income','vs. California','vs. New York','vs. Illinois','vs. Oregon'].map(h => (
                  <th key={h} style={{ textAlign:'left', padding:'10px 12px', opacity:0.6, fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.04em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SAVINGS.map(row => (
                <tr key={row.income} style={{ borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding:'10px 12px', fontWeight:700 }}>${(row.income/1000).toFixed(0)}k</td>
                  <td style={{ padding:'10px 12px', color:'#4ade80', fontWeight:600 }}>+${row.ca.toLocaleString()}</td>
                  <td style={{ padding:'10px 12px', color:'#4ade80', fontWeight:600 }}>+${row.ny.toLocaleString()}</td>
                  <td style={{ padding:'10px 12px', color:'#4ade80', fontWeight:600 }}>+${row.il.toLocaleString()}</td>
                  <td style={{ padding:'10px 12px', color:'#4ade80', fontWeight:600 }}>+${row.or.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>The Hidden Costs — What No-Tax States Do Instead</h2>
          <p>States still need revenue. Here is how the most popular no-tax states make up the difference:</p>
          <ul style={{ paddingLeft:'20px' }}>
            <li style={{ marginBottom:'10px' }}><strong>Texas:</strong> Property taxes average 1.7–2.2% of home value per year — one of the highest in the US. On a $400k home that is $6,800–$8,800/year.</li>
            <li style={{ marginBottom:'10px' }}><strong>Florida:</strong> 6% state sales tax (+ local). No property tax break on non-homesteaded properties.</li>
            <li style={{ marginBottom:'10px' }}><strong>Nevada:</strong> 6.85% sales tax + high gaming/tourism taxes fund the state.</li>
            <li style={{ marginBottom:'10px' }}><strong>Washington:</strong> 6.5% sales tax, plus a 7% capital gains tax on gains over $250,000.</li>
            <li style={{ marginBottom:'10px' }}><strong>Tennessee:</strong> 7% state sales tax — the highest base rate in the US.</li>
          </ul>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Who Benefits Most From Moving?</h2>
          <p>The higher your income, the more you save. A $50k earner moving from California to Texas saves about $2,850/year in state taxes. A $200k earner saves over $17,000/year. High earners in California face up to 13.3% state income tax — moving to Nevada or Texas is a common strategy.</p>
          <p>However, if you work remotely and your employer is in California, you may still owe California taxes on that income. State tax residency rules are complex — always consult a CPA before relocating for tax purposes.</p>
        </div>

        <div style={{ marginTop:'40px', background:'rgba(74,222,128,0.08)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'14px', padding:'24px', textAlign:'center' }}>
          <h3 style={{ fontWeight:800, marginBottom:'8px' }}>See Your Exact Take-Home by State</h3>
          <p style={{ opacity:0.65, fontSize:'14px', marginBottom:'16px' }}>Compare take-home pay in any state instantly — free, private, no signup.</p>
          <Link href="/all-states" style={{ display:'inline-block', background:'linear-gradient(135deg,#4ade80,#22c55e)', color:'#052e16', fontWeight:800, padding:'11px 24px', borderRadius:'9px', textDecoration:'none', fontSize:'14px' }}>Compare All 50 States →</Link>
        </div>

        <div style={{ marginTop:'40px' }}>
          <h3 style={{ fontSize:'16px', fontWeight:800, marginBottom:'16px', opacity:0.7 }}>More Articles</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'12px' }}>
            {[
              { slug:'how-to-read-your-pay-stub', title:'How to Read Your Pay Stub: Every Line Explained', tag:'Basics' },
              { slug:'401k-contribution-limits-2026', title:'401(k) Limits 2026 — Max Out & Save Thousands', tag:'401(k)' },
              { slug:'california-paycheck-calculator-guide', title:'Why Your California Paycheck Is Lower Than Expected', tag:'California' },
            ].map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'14px', color:'white', textDecoration:'none' }}>
                <div style={{ fontSize:'11px', opacity:0.5, marginBottom:'6px' }}>{p.tag}</div>
                <div style={{ fontSize:'13px', fontWeight:700, lineHeight:1.4 }}>{p.title}</div>
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
