import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?',
  description: 'California, Alaska, Nevada, and Colorado have stricter overtime rules than federal 40-hour standard. Know your rights. Free 2026 guide.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/overtime-pay-rules-by-state' },
};

const OT_STATES = [
  { state:'California', slug:'california', rule:'OT after 8 hrs/day OR 40 hrs/week. Double time after 12 hrs/day or 8 hrs on 7th consecutive day.', special:true },
  { state:'Alaska',     slug:'alaska',     rule:'OT after 8 hrs/day OR 40 hrs/week.', special:true },
  { state:'Nevada',     slug:'nevada',     rule:'OT after 8 hrs/day for employees earning less than 1.5x minimum wage, otherwise 40 hrs/week.', special:true },
  { state:'Colorado',   slug:'colorado',   rule:'OT after 12 hrs/day OR 40 hrs/week, whichever is greater.', special:true },
  { state:'All Others', slug:'',           rule:'Federal FLSA standard: OT only after 40 hours in a workweek. No daily OT requirement.', special:false },
];

export default function Post() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?',
        url:'https://privatepaycheck.com/blog/overtime-pay-rules-by-state',
        datePublished:'2026-02-14', author:{'@type':'Organization', name:'PrivatePaycheck'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
      {
        '@type': 'Question',
        name: 'When does overtime pay start?',
        acceptedAnswer: { '@type': 'Answer', text: 'Federal law (FLSA) requires 1.5x overtime after 40 hours/week. California also requires daily overtime after 8 hours and double time after 12 hours. Alaska and Nevada have similar daily rules.' },
      },
      {
        '@type': 'Question',
        name: 'Is overtime pay mandatory in all states?',
        acceptedAnswer: { '@type': 'Answer', text: 'All states must follow the federal 40-hour weekly rule at minimum. Some states (CA, AK, NV) have stricter daily overtime rules. Some states also have higher overtime thresholds for certain industries.' },
      },
      {
        '@type': 'Question',
        name: 'How does the 2026 overtime tax deduction work?',
        acceptedAnswer: { '@type': 'Answer', text: 'The No Tax on Overtime deduction (2025-2028) lets workers deduct up to })}} />2,500 in overtime wages from federal taxable income. You still pay FICA on overtime. Claim the deduction when filing your federal tax return.' },
      }
        ],
      })}} />
      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity:0.5, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › Overtime Rules by State
        </div>
        <div style={{ display:'inline-block', background:'rgba(251,191,36,0.1)', color:'#fbbf24', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>OVERTIME</div>
        <h1 style={{ fontSize:'clamp(22px,4vw,38px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?</h1>
        <p style={{ opacity:0.5, fontSize:'13px', marginBottom:'32px' }}>February 14, 2026 · 5 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>Federal law (FLSA) requires overtime pay at 1.5x your regular rate for any hours over 40 in a single workweek. But four states go further — requiring daily overtime, double time, or both. If you work in one of these states, you may be owed more than you think.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Federal Overtime Basics (FLSA)</h2>
          <ul style={{ paddingLeft:'20px' }}>
            <li style={{ marginBottom:'8px' }}>Overtime kicks in after <strong>40 hours in a single workweek</strong> (not 8 hours/day, not biweekly)</li>
            <li style={{ marginBottom:'8px' }}>Rate: <strong>1.5× your regular hourly rate</strong></li>
            <li style={{ marginBottom:'8px' }}>Applies to non-exempt employees. Most hourly workers are non-exempt.</li>
            <li style={{ marginBottom:'8px' }}>Salaried workers earning under <strong>$684/week ($35,568/year)</strong> are also entitled to OT</li>
            <li style={{ marginBottom:'8px' }}>Employers cannot average hours across two weeks — each week is calculated separately</li>
          </ul>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>States With Stronger OT Protections</h2>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'10px', margin:'16px 0 32px' }}>
          {OT_STATES.map(s => (
            <div key={s.state} style={{ background: s.special ? 'rgba(251,191,36,0.06)' : 'rgba(255,255,255,0.03)', border: s.special ? '1px solid rgba(251,191,36,0.2)' : '1px solid rgba(255,255,255,0.07)', borderRadius:'10px', padding:'14px 16px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'6px' }}>
                {s.slug ? (
                  <Link href={`/overtime-calculator/${s.slug}`} style={{ color: s.special ? '#fbbf24' : 'white', fontWeight:700, textDecoration:'none', fontSize:'15px' }}>{s.state}</Link>
                ) : (
                  <span style={{ fontWeight:700, fontSize:'15px', opacity:0.7 }}>{s.state}</span>
                )}
                {s.special && <span style={{ background:'rgba(251,191,36,0.1)', color:'#fbbf24', padding:'2px 8px', borderRadius:'10px', fontSize:'10px', fontWeight:700 }}>STRONGER PROTECTION</span>}
              </div>
              <p style={{ fontSize:'13px', opacity:0.65, margin:0, lineHeight:1.6 }}>{s.rule}</p>
            </div>
          ))}
        </div>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>How Overtime Affects Your Taxes</h2>
          <p>Overtime income is taxed at your <strong>marginal tax rate</strong> — not a special OT rate. If your regular income puts you in the 22% bracket, your overtime earnings are also taxed at 22% (or higher if the extra income pushes you into a new bracket).</p>
          <p>For example: a worker earning $50,000 base salary is in the 22% bracket for income above $47,150. All overtime earnings would be taxed at 22% federally. If they earn enough OT to push above $100,525, the excess would be taxed at 24%.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Exempt vs. Non-Exempt Employees</h2>
          <p>Not all workers qualify for overtime. Employees may be exempt if they are paid on a salary basis (over $684/week) AND their primary duties are executive, administrative, or professional in nature. Common exempt roles: managers, lawyers, doctors, teachers, outside sales reps, and most computer professionals earning over $27.63/hr.</p>
          <p>Being paid a salary does not automatically make you exempt — the duties test must also be met. Misclassification is common, and employees who should have received overtime can sue for back pay plus penalties.</p>
        </div>

        <div style={{ marginTop:'32px', background:'rgba(251,191,36,0.06)', border:'1px solid rgba(251,191,36,0.15)', borderRadius:'12px', padding:'20px', textAlign:'center' }}>
          <h3 style={{ fontWeight:800, marginBottom:'8px', color:'#fbbf24' }}>Calculate Your OT Pay by State</h3>
          <p style={{ opacity:0.65, fontSize:'14px', marginBottom:'16px' }}>Free overtime calculator for all 50 states — see exactly what you are owed.</p>
          <Link href="/overtime-calculator" style={{ display:'inline-block', background:'linear-gradient(135deg,#fbbf24,#f59e0b)', color:'#1c1003', fontWeight:800, padding:'11px 24px', borderRadius:'9px', textDecoration:'none', fontSize:'14px' }}>Open Overtime Calculator →</Link>
        </div>

        <div style={{ marginTop:'40px' }}>
          <h3 style={{ fontSize:'16px', fontWeight:800, marginBottom:'16px', opacity:0.7 }}>More Articles</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'12px' }}>
            {[
              { slug:'how-to-read-your-pay-stub', title:'How to Read Your Pay Stub: Every Line Explained', tag:'Basics' },
              { slug:'california-paycheck-calculator-guide', title:'California Paycheck 2026 Full Breakdown', tag:'California' },
              { slug:'hsa-contribution-limits-2026', title:'HSA Limits 2026 — Triple Tax Advantage', tag:'HSA' },
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
