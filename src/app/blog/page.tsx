import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paycheck & Tax Blog 2026 | PrivatePaycheck',
  description: 'Free guides on paycheck calculations, tax saving tips, overtime rules, and salary insights for US workers in 2026.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog' },
};

const POSTS = [
  { slug:'how-to-calculate-paycheck-taxes',      title:'How to Calculate Paycheck Taxes 2026 — Step by Step Guide',      desc:'Federal brackets, FICA, state tax — exactly how every deduction is calculated with real examples.', date:'2026-02-24', readTime:'8 min', tag:'Taxes',       tagColor:'#fbbf24' },
  { slug:'what-is-fica-tax',                     title:'What is FICA Tax? Social Security & Medicare Explained 2026',     desc:'FICA = 6.2% SS + 1.45% Medicare. 2026 wage base $176,100. Who pays, how to reduce it.',         date:'2026-02-22', readTime:'5 min', tag:'Basics',      tagColor:'#4ade80' },
  { slug:'california-minimum-wage-2026',          title:'California Minimum Wage 2026 — History, Changes & Guide',         desc:'$16.50/hr in 2026. Fast food workers: $20/hr. Full history from 2016, local rates, tipped rules.', date:'2026-02-23', readTime:'6 min', tag:'Min Wage',    tagColor:'#6ee7b7' },
  { slug:'texas-paycheck-calculator-guide',       title:'Texas Paycheck Calculator Guide 2026 — No State Income Tax',      desc:'Texas residents keep more — no state income tax. Exact take-home at $50k, $75k, $100k.',          date:'2026-02-20', readTime:'6 min', tag:'Texas',       tagColor:'#4ade80' },
  { slug:'florida-unemployment-benefits-2026',    title:'Florida Unemployment Benefits 2026 — How Much Will You Get?',     desc:'Max $275/week for 12 weeks. How to calculate, apply, and what to expect.',                       date:'2026-02-21', readTime:'5 min', tag:'Unemployment',tagColor:'#a5b4fc' },
  { slug:'how-to-increase-take-home-pay',        title:'7 Ways to Increase Your Take-Home Pay in 2026 (Without a Raise)', desc:'401k, HSA, FSA, W-4 adjustments and more. Real dollar savings at $60k, $80k, $100k.',           date:'2026-02-25', readTime:'5 min', tag:'Strategy',    tagColor:'#34d399' },
  { slug:'overtime-pay-rules-by-state',          title:'Overtime Pay Rules by State 2026 — Know Your Rights',             desc:'CA, AK, NV, CO have daily OT rules stricter than federal 40-hour standard.',                   date:'2026-02-14', readTime:'5 min', tag:'Overtime',    tagColor:'#fb7185' },
  { slug:'texas-vs-california-salary',           title:'Texas vs California Salary: How Much More Do You Keep?',          desc:'On a $100k salary you keep $7,775 more per year in Texas. Full 2026 numbers.',                date:'2026-02-22', readTime:'5 min', tag:'Comparison',  tagColor:'#fbbf24' },
  { slug:'no-income-tax-states-2026',            title:'9 States With No Income Tax — How Much Do You Save?',             desc:'Texas, Florida, Nevada + 6 more. We ran the numbers at $50k, $75k, $100k.',                   date:'2026-01-22', readTime:'5 min', tag:'State Taxes', tagColor:'#818cf8' },
  { slug:'hsa-contribution-limits-2026',         title:'HSA Contribution Limits 2026 — The Most Underrated Tax Shelter',  desc:'Triple tax advantage: pre-tax in, tax-free growth, tax-free withdrawals.',                     date:'2026-02-20', readTime:'4 min', tag:'HSA',         tagColor:'#34d399' },
  { slug:'401k-contribution-limits-2026',        title:'401(k) Limits 2026 — Max Out & Save Thousands in Taxes',          desc:'$23,500 limit ($31,000 if 50+). See tax savings at every income level.',                       date:'2026-02-01', readTime:'4 min', tag:'401(k)',      tagColor:'#fbbf24' },
  { slug:'california-paycheck-calculator-guide', title:'California Paycheck 2026: Why Your Take-Home Is Lower',           desc:'CA state tax up to 13.3% + SDI. Real examples at $60k, $80k, $120k.',                         date:'2026-02-08', readTime:'7 min', tag:'California',  tagColor:'#f97316' },
  { slug:'how-much-is-50k-a-year-hourly',        title:'$50,000 a Year is How Much an Hour? (After-Tax Breakdown)',       desc:'$50k = $24.04/hr gross. After taxes: $38k–$42k depending on state. Full breakdown.',           date:'2026-02-20', readTime:'4 min', tag:'Salary Math', tagColor:'#818cf8' },
  { slug:'2026-federal-tax-brackets',            title:'2026 Federal Income Tax Brackets — Complete Guide',               desc:'All brackets for single, married, HOH. Standard deduction $15k. FICA rates.',                 date:'2026-01-10', readTime:'5 min', tag:'Tax Basics',  tagColor:'#4ade80' },
  { slug:'how-to-read-your-pay-stub',            title:'How to Read Your Pay Stub: Every Line Explained',                 desc:'Federal tax, FICA, state tax, YTD — decode every deduction with real examples.',             date:'2026-01-15', readTime:'6 min', tag:'Basics',      tagColor:'#4ade80' },
];

export default function BlogPage() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Blog',
        name:'PrivatePaycheck Blog',
        url:'https://www.privatepaycheck.com/blog',
        description:'Paycheck calculation guides, tax tips, and salary insights for US workers.',
        blogPost: POSTS.map(p => ({
          '@type':'BlogPosting',
          headline: p.title,
          description: p.desc,
          url: `https://www.privatepaycheck.com/blog/${p.slug}`,
          datePublished: p.date,
        })),
      })}} />

      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › Blog
        </div>

        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <h1 style={{ fontSize:'clamp(26px,4vw,44px)', fontWeight:900, margin:'0 0 12px', textTransform:'uppercase', letterSpacing:'-1px' }}>
            Paycheck & Tax<br/><span style={{ color:'#818cf8' }}>Blog 2026</span>
          </h1>
          <p style={{ fontSize:'16px', opacity:0.6, maxWidth:'520px', margin:'0 auto', lineHeight:1.7 }}>
            Free guides on paycheck calculations, tax saving strategies, overtime rules, and everything about your take-home pay.
          </p>
        </div>

        {/* Featured */}
        <Link href={`/blog/${POSTS[0].slug}`} style={{ display:'block', background:'rgba(251,191,36,0.06)', border:'1px solid rgba(251,191,36,0.2)', borderRadius:'16px', padding:'28px', color:'white', textDecoration:'none', marginBottom:'24px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
            <span style={{ background:'rgba(251,191,36,0.15)', color:'#fbbf24', padding:'4px 10px', borderRadius:'20px', fontSize:'11px', fontWeight:700 }}>⭐ FEATURED</span>
            <span style={{ background:'rgba(255,255,255,0.08)', color:POSTS[0].tagColor, padding:'4px 10px', borderRadius:'20px', fontSize:'11px', fontWeight:700 }}>{POSTS[0].tag}</span>
          </div>
          <h2 style={{ fontSize:'clamp(18px,3vw,26px)', fontWeight:800, margin:'0 0 10px', lineHeight:1.3 }}>{POSTS[0].title}</h2>
          <p style={{ fontSize:'14px', opacity:0.65, lineHeight:1.7, margin:'0 0 16px' }}>{POSTS[0].desc}</p>
          <div style={{ fontSize:'12px', opacity:0.45 }}>{POSTS[0].date} · {POSTS[0].readTime} read</div>
        </Link>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'16px' }}>
          {POSTS.slice(1).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'20px', color:'white', textDecoration:'none' }}>
              <div style={{ display:'inline-block', background:'rgba(255,255,255,0.06)', color:post.tagColor, padding:'3px 9px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'10px' }}>
                {post.tag}
              </div>
              <h2 style={{ fontSize:'15px', fontWeight:700, margin:'0 0 8px', lineHeight:1.4 }}>{post.title}</h2>
              <p style={{ fontSize:'13px', opacity:0.6, lineHeight:1.6, margin:'0 0 12px' }}>{post.desc}</p>
              <div style={{ fontSize:'11px', opacity:0.4 }}>{post.date} · {post.readTime} read</div>
            </Link>
          ))}
        </div>

        {/* Calculator hub */}
        <div style={{ marginTop:'40px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'10px' }}>
          {[
            { href:'/overtime-calculator',     label:'⏰ Overtime', color:'#fbbf24' },
            { href:'/bonus-calculator',        label:'🎁 Bonus Tax', color:'#fb923c' },
            { href:'/tip-calculator',          label:'🍽️ Tip Tax', color:'#f472b6' },
            { href:'/unemployment-calculator', label:'📋 Unemployment', color:'#a5b4fc' },
            { href:'/minimum-wage',            label:'💵 Min Wage', color:'#6ee7b7' },
          ].map(c => (
            <Link key={c.href} href={c.href} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:`1px solid ${c.color}33`, borderRadius:'10px', padding:'14px', color:c.color, textDecoration:'none', textAlign:'center', fontWeight:700, fontSize:'13px' }}>
              {c.label} →
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop:'32px', background:'rgba(129,140,248,0.08)', border:'1px solid rgba(129,140,248,0.2)', borderRadius:'16px', padding:'28px', textAlign:'center' }}>
          <h2 style={{ fontSize:'20px', fontWeight:800, margin:'0 0 8px' }}>Calculate Your Exact Take-Home Pay</h2>
          <p style={{ fontSize:'14px', opacity:0.65, margin:'0 0 16px' }}>Free, private, instant. All 50 states. No signup required.</p>
          <Link href="/" style={{ display:'inline-block', background:'linear-gradient(135deg,#4ade80,#22c55e)', color:'#052e16', fontWeight:800, padding:'12px 28px', borderRadius:'10px', textDecoration:'none', fontSize:'15px' }}>
            Open Paycheck Calculator →
          </Link>
        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
