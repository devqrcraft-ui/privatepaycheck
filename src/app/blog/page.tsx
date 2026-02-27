import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paycheck & Tax Blog 2026 — PrivatePaycheck',
  description: 'Free guides on paycheck calculations, tax saving tips, overtime rules, and salary negotiation for US workers in 2026.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog' },
};

const POSTS = [
  {
    slug: 'how-to-read-your-pay-stub',
    title: 'How to Read Your Pay Stub: Every Line Explained',
    desc: 'Federal tax, FICA, state tax, YTD — decode every deduction on your paycheck with real examples.',
    date: '2026-01-15',
    readTime: '6 min',
    tag: 'Basics',
    tagColor: '#4ade80',
  },
  {
    slug: 'no-income-tax-states-2026',
    title: '9 States With No Income Tax in 2026 — How Much Do You Actually Save?',
    desc: 'Texas, Florida, Nevada and 6 more states have zero state income tax. We ran the numbers for $50k, $75k, and $100k salaries.',
    date: '2026-01-22',
    readTime: '5 min',
    tag: 'State Taxes',
    tagColor: '#818cf8',
  },
  {
    slug: '401k-contribution-limits-2026',
    title: '401(k) Contribution Limits 2026 — Max Out & Save Thousands in Taxes',
    desc: 'The 2026 401(k) limit is $23,500 ($31,000 if 50+). Here is exactly how much you save in taxes at every income level.',
    date: '2026-02-01',
    readTime: '4 min',
    tag: '401(k)',
    tagColor: '#fbbf24',
  },
  {
    slug: 'california-paycheck-calculator-guide',
    title: 'California Paycheck 2026: Why Your Take-Home Is Lower Than Expected',
    desc: 'CA has federal tax, state income tax up to 13.3%, SDI, and more. Full breakdown with real examples at $60k, $80k, $120k.',
    date: '2026-02-08',
    readTime: '7 min',
    tag: 'California',
    tagColor: '#f97316',
  },
  {
    slug: 'overtime-pay-rules-by-state',
    title: 'Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?',
    desc: 'California, Alaska, Nevada, and Colorado have stricter OT rules than the federal 40-hour standard. Know your rights.',
    date: '2026-02-14',
    readTime: '5 min',
    tag: 'Overtime',
    tagColor: '#fb7185',
  },
  {
    slug: 'hsa-contribution-limits-2026',
    title: 'HSA Contribution Limits 2026 — The Most Underrated Tax Shelter',
    desc: 'HSA contributions are triple tax-advantaged: pre-tax, tax-free growth, and tax-free withdrawals for medical. 2026 limits explained.',
    date: '2026-02-20',
    readTime: '4 min',
    tag: 'HSA',
    tagColor: '#34d399',
  },
];

export default function BlogPage() {
  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color:'white', fontFamily:'system-ui,sans-serif' }}>
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

      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href="/" style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}>
          <span style={{ color:'#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display:'flex', gap:'16px', fontSize:'13px' }}>
          <Link href="/overtime-calculator"     style={{ color:'#fbbf24', textDecoration:'none' }}>Overtime</Link>
          <Link href="/unemployment-calculator" style={{ color:'#a5b4fc', textDecoration:'none' }}>Unemployment</Link>
          <Link href="/minimum-wage"            style={{ color:'#6ee7b7', textDecoration:'none' }}>Min Wage</Link>
          <Link href="/"                        style={{ color:'rgba(255,255,255,0.6)', textDecoration:'none' }}>Calculator</Link>
        </div>
      </nav>

      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'40px 16px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › Blog
        </div>

        {/* HERO */}
        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <h1 style={{ fontSize:'clamp(26px,4vw,44px)', fontWeight:900, margin:'0 0 12px', textTransform:'uppercase', letterSpacing:'-1px' }}>
            Paycheck & Tax<br/><span style={{ color:'#818cf8' }}>Blog 2026</span>
          </h1>
          <p style={{ fontSize:'16px', opacity:0.6, maxWidth:'520px', margin:'0 auto', lineHeight:1.7 }}>
            Free guides on paycheck calculations, tax saving strategies, overtime rules, and everything about your take-home pay.
          </p>
        </div>

        {/* FEATURED POST */}
        <Link href={`/blog/${POSTS[0].slug}`} style={{ display:'block', background:'rgba(74,222,128,0.06)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'16px', padding:'28px', color:'white', textDecoration:'none', marginBottom:'24px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
            <span style={{ background:'rgba(74,222,128,0.15)', color:'#4ade80', padding:'4px 10px', borderRadius:'20px', fontSize:'11px', fontWeight:700 }}>
              ⭐ FEATURED
            </span>
            <span style={{ background:'rgba(74,222,128,0.1)', color:POSTS[0].tagColor, padding:'4px 10px', borderRadius:'20px', fontSize:'11px', fontWeight:700 }}>
              {POSTS[0].tag}
            </span>
          </div>
          <h2 style={{ fontSize:'clamp(18px,3vw,26px)', fontWeight:800, margin:'0 0 10px', lineHeight:1.3 }}>{POSTS[0].title}</h2>
          <p style={{ fontSize:'14px', opacity:0.65, lineHeight:1.7, margin:'0 0 16px' }}>{POSTS[0].desc}</p>
          <div style={{ fontSize:'12px', opacity:0.45 }}>{POSTS[0].date} · {POSTS[0].readTime} read</div>
        </Link>

        {/* POST GRID */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'16px' }}>
          {POSTS.slice(1).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display:'block', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'20px', color:'white', textDecoration:'none' }}>
              <div style={{ display:'inline-block', background:'rgba(255,255,255,0.06)', color: post.tagColor, padding:'3px 9px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'10px' }}>
                {post.tag}
              </div>
              <h2 style={{ fontSize:'15px', fontWeight:700, margin:'0 0 8px', lineHeight:1.4 }}>{post.title}</h2>
              <p style={{ fontSize:'13px', opacity:0.6, lineHeight:1.6, margin:'0 0 12px' }}>{post.desc}</p>
              <div style={{ fontSize:'11px', opacity:0.4 }}>{post.date} · {post.readTime} read</div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop:'48px', background:'rgba(129,140,248,0.08)', border:'1px solid rgba(129,140,248,0.2)', borderRadius:'16px', padding:'28px', textAlign:'center' }}>
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
