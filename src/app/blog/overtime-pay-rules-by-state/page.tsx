import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?',
  description: 'Compare federal overtime basics with selected state daily-overtime rules. Exemptions and state requirements vary; check current agency guidance.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/overtime-pay-rules-by-state' },
};

const OT_STATES = [
  { state:'California', slug:'california', rule:'OT after 8 hrs/day OR 40 hrs/week. Double time after 12 hrs/day or 8 hrs on 7th consecutive day.', special:true },
  { state:'Alaska',     slug:'alaska',     rule:'OT after 8 hrs/day OR 40 hrs/week.', special:true },
  { state:'Nevada',     slug:'nevada',     rule:'OT after 8 hrs/day for employees earning less than 1.5x minimum wage, otherwise 40 hrs/week.', special:true },
  { state:'Colorado',   slug:'colorado',   rule:'Overtime may be due after 12 hours in a workday, 12 consecutive hours, or 40 hours in a workweek, whichever results in greater pay.', special:true },
  { state:'All Others', slug:'',           rule:'The FLSA generally requires overtime for covered, nonexempt employees after 40 hours in a workweek. State and occupation-specific rules may add protections.', special:false },
];

export default function Post() {
  return (
    <>
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BlogPosting',
        headline:'Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?',
        url:'https://www.privatepaycheck.com/blog/overtime-pay-rules-by-state',
        datePublished:'2026-02-14', dateModified:'2026-11-06', author: { '@type': 'Organization', name: 'the PrivatePaycheck Team', url: 'https://www.privatepaycheck.com' },'reviewedBy':{'@type':'Organization','name':'the PrivatePaycheck Team','url':'https://www.privatepaycheck.com'},'publisher':{'@type':'Organization','name':'PrivatePaycheck','url':'https://www.privatepaycheck.com'},
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?","item":"https://www.privatepaycheck.com/blog/overtime-pay-rules-by-state"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
      {
        '@type': 'Question',
        name: 'When does overtime pay start?',
        acceptedAnswer: { '@type': 'Answer', text: 'The FLSA generally requires 1.5x overtime for covered, nonexempt employees after 40 hours in a workweek. Some states, including California, Alaska, and Nevada, also have daily overtime rules. Coverage and exemptions matter.' },
      },
      {
        '@type': 'Question',
        name: 'Is overtime pay mandatory in all states?',
        acceptedAnswer: { '@type': 'Answer', text: 'The federal FLSA sets a baseline for covered, nonexempt employees. State law may provide additional protections, and exemptions and coverage rules vary by worker and industry.' },
      },
      {
        '@type': 'Question',
        name: 'How does the 2026 overtime tax deduction work?',
        acceptedAnswer: { '@type': 'Answer', text: 'The temporary federal deduction (generally for tax years 2025–2028) applies to qualified overtime compensation, subject to annual caps and income phase-outs. It does not make all overtime wages tax-free, and Social Security and Medicare taxes still apply.' },
      }
        ],
      })}} />
      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ fontSize:'13px', opacity: 0.8, marginBottom:'24px' }}>
          <Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link> › <Link href="/blog" style={{ color:'inherit', textDecoration:'none' }}>Blog</Link> › Overtime Rules by State
        </div>
        <div style={{ display:'inline-block', background:'rgba(251,191,36,0.1)', color:'#fbbf24', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:700, marginBottom:'16px' }}>OVERTIME</div>
        <h1 style={{ fontSize:'clamp(22px,4vw,38px)', fontWeight:900, margin:'0 0 16px', lineHeight:1.25 }}>Overtime Pay Rules by State 2026 — Which States Pay More Than Federal Law?</h1>
      <div className="answer-first" style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, color: '#e8edf8' }}>
          <strong style={{ color: '#F5C842' }}>Quick answer:</strong> The FLSA generally requires overtime for covered, nonexempt employees after 40 hours in a workweek. Some states also require daily overtime. A separate federal deduction may apply to qualified overtime compensation, subject to limits; it does not make all overtime pay tax-free.
        </p>
      </div>
      <div style={{ background: '#0f1a3a', border: '1px solid #2a3a6a', borderRadius: 10, padding: '18px 22px', marginBottom: 32 }}>
        <p style={{ fontSize: 14, fontWeight: 800, color: '#F5C842', marginBottom: 12, marginTop: 0 }}>Key Takeaways</p>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#c8d0e7', fontSize: 14, lineHeight: 1.85 }}>
          <li>Overtime eligibility depends on coverage, exemption status, hours, and applicable state law.</li>
          <li>Federal overtime generally uses a workweek, not a biweekly pay period.</li>
          <li>Some states add daily overtime rules and may have special thresholds.</li>
          <li>Tax deductions for qualified overtime do not remove payroll taxes or determine wage-law entitlement.</li>
          <li>Use state agency guidance for a specific employment situation; calculator outputs are estimates.</li>
        </ul>
      </div>
        <p style={{ opacity: 0.8, fontSize:'13px', marginBottom:'32px' }}>Updated November 6, 2026 · 5 min read</p>

        <div style={{ fontSize:'15px', lineHeight:1.9, opacity:0.85 }}>
          <p>The FLSA generally requires overtime pay at 1.5 times the regular rate for covered, nonexempt employees after 40 hours in a workweek. Some states add daily overtime or double-time rules. Whether a rule applies depends on coverage, exemptions, occupation, and the facts of the work arrangement.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Federal Overtime Basics (FLSA)</h2>
          <ul style={{ paddingLeft:'20px' }}>
            <li style={{ marginBottom:'8px' }}>Overtime kicks in after <strong>40 hours in a single workweek</strong> (not 8 hours/day, not biweekly)</li>
            <li style={{ marginBottom:'8px' }}>Rate: <strong>1.5× your regular hourly rate</strong></li>
            <li style={{ marginBottom:'8px' }}>Applies to covered, nonexempt employees; job title or pay method alone does not determine exemption.</li>
            <li style={{ marginBottom:'8px' }}>Salary-level requirements can change and may differ by state; check current federal and state guidance.</li>
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
          <p>Overtime wages are generally subject to the same federal marginal tax rates as other wages. Additional income may push only the dollars above a bracket threshold into the next marginal bracket. A separate deduction may apply to qualified overtime compensation, subject to eligibility limits.</p>

          <h2 style={{ fontSize:'22px', fontWeight:800, margin:'32px 0 12px', color:'white' }}>Exempt vs. Non-Exempt Employees</h2>
          <p>Some employees may be exempt when they meet the applicable salary-basis, salary-level, and duties tests. Thresholds and exemptions can vary by federal rule, state law, and occupation; do not rely on an outdated salary figure or job title alone.</p>
          <p>Being paid a salary does not automatically make you exempt — the duties test must also be met. Misclassification is common, and employees who should have received overtime can sue for back pay plus penalties.</p>
        </div>

        <div style={{ marginTop:'32px', background:'rgba(251,191,36,0.06)', border:'1px solid rgba(251,191,36,0.15)', borderRadius:'12px', padding:'20px', textAlign:'center' }}>
          <h3 style={{ fontWeight:800, marginBottom:'8px', color:'#fbbf24' }}>Calculate Your OT Pay by State</h3>
          <p style={{ opacity:0.82, fontSize:'15px', marginBottom:'16px' }}>Explore an overtime estimate. Actual eligibility and amounts depend on the law and facts of your work.</p>
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
                <div style={{ fontSize:'11px', opacity: 0.8, marginBottom:'6px' }}>{p.tag}</div>
                <div style={{ fontSize:'13px', fontWeight:700, lineHeight:1.4 }}>{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity: 0.8, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
      <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
        {'The Internal Revenue Service requires self-employed individuals and freelancers to pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
        <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.65)',fontStyle:'normal'}}>
          {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>IRS.gov — Self-Employed Tax Center</a>
        </cite>
      </blockquote>
    </main>
      <AuthorBox />
    </>
  );
}
