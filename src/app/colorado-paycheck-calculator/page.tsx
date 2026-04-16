import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Colorado Paycheck Calculator 2026 — See Your Exact Take-Home Pay',
  description: 'See your exact Colorado take-home pay after 4.4% flat state tax, federal tax & FICA. Free, instant results. No signup, no data stored.',
  keywords: 'colorado paycheck calculator 2026, colorado take home pay, colorado salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/colorado-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,048","$1,890"],["$40,000","$3,333","$2,650","$2,446"],["$50,000","$4,167","$3,202","$2,956"],["$60,000","$5,000","$3,718","$3,432"],["$75,000","$6,250","$4,430","$4,089"],["$100,000","$8,333","$5,645","$5,211"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Colorado state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"Colorado has a flat 4.4% income tax rate in 2026."}},{"@type":"Question","name":"How much is $60,000 take-home in Colorado?","acceptedAnswer":{"@type":"Answer","text":"Approximately $44,616/year ($3,718/month) after federal, FICA, and 4.4% CO state tax for a single filer."}},{"@type":"Question","name":"Does Colorado have local income taxes?","acceptedAnswer":{"@type":"Answer","text":"Some Colorado cities (Denver, Aurora) levy a small flat occupational privilege tax of $5.75/month, but no major local income tax."}}]}) }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Colorado Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Colorado Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color:'#c8d4e8', marginBottom: 12 }}>Colorado state income tax: <strong>4.4% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>Colorado state income tax: 4.4% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Colorado Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.2)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color:'#c8d4e8' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: 'rgba(99,102,241,0.2)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact Colorado paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Colorado state income tax rate in 2026?</h3><p style={{ color:'#c8d4e8', lineHeight: 1.7 }}>Colorado has a flat 4.4% income tax rate in 2026.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in Colorado?</h3><p style={{ color:'#c8d4e8', lineHeight: 1.7 }}>Approximately $44,616/year ($3,718/month) after federal, FICA, and 4.4% CO state tax for a single filer.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Colorado have local income taxes?</h3><p style={{ color:'#c8d4e8', lineHeight: 1.7 }}>Some Colorado cities (Denver, Aurora) levy a small flat occupational privilege tax of $5.75/month, but no major local income tax.</p>
    
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 10, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'12px 16px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:8, fontSize:15, fontWeight:700, color:'#818cf8', textDecoration:'none', textAlign:'center' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color:'#F5C842', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color:'#F5C842', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>

      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: 'clamp(20px,4vw,28px) clamp(16px,4vw,28px)', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)' as unknown as number, fontWeight: 800, color: '#f8fafc', marginBottom: 20, letterSpacing: '-0.3px', lineHeight: 1.3 }}>How Colorado Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Flat rate: 4.4% flat rate on all taxable income — simple and predictable</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Denver and some cities have local tax ~1.5–2%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>FICA: Social Security 6.2% (up to $184,500 wage base) + Medicare 1.45% — applies in all states</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#e2e8f0', lineHeight: 1.7 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator uses 2026 IRS Publication 15-T tables and Colorado 2026 withholding rates</span></li>
        </ul>
        <h3 style={{ fontSize: 'clamp(16px,3vw,18px)' as unknown as number, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>How much income tax will I pay in Colorado?</h3>
        <p style={{ fontSize: 'clamp(15px,2.5vw,16px)' as unknown as number, color: '#b0c4de', lineHeight: 1.8, margin: 0 }}>Colorado uses a flat 4.4% flat rate on all taxable income. Combined with federal tax (10%–37%) and FICA (7.65%), a $60,000 salary typically results in about 24%–28% total withholding for a single filer.</p>
      </div>
    </main>
  )
}
