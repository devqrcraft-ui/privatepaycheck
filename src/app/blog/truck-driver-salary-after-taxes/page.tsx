import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Truck Driver Salary After Taxes 2026 — Take-Home Pay | PrivatePaycheck',
  description: 'How much do truck drivers take home after taxes in 2026? OTR average $70,000. See net pay by state, per diem deductions, and owner-operator taxes.',
  keywords: 'truck driver salary after taxes 2026, trucker take home pay, cdl driver paycheck, owner operator taxes 2026',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/truck-driver-salary-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$53,424','$25.68'],
    ['Florida','None','$53,424','$25.68'],
    ['California','9.30%','$47,736','$22.95'],
    ['Illinois','4.95%','$51,264','$24.65'],
    ['Pennsylvania','3.07%','$52,356','$25.17'],
    ['Tennessee','None','$53,424','$25.68'],
    ['Ohio','3.99%','$51,864','$24.93'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do truck drivers take home after taxes?","acceptedAnswer":{"@type":"Answer","text":"An OTR truck driver earning $70,000/year takes home approximately $53,424 in Texas, $51,264 in Illinois, and $47,736 in California after all taxes."}},{"@type":"Question","name":"Can truck drivers deduct per diem?","acceptedAnswer":{"@type":"Answer","text":"Company drivers can deduct unreimbursed per diem at $69/day (2026 rate) for overnight trips away from home. Owner-operators deduct business expenses on Schedule C including per diem, fuel, repairs, and depreciation."}},{"@type":"Question","name":"Do owner-operator truck drivers pay more taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Owner-operators pay self-employment tax (15.3%) on net profit plus income tax. However, they can deduct truck depreciation, fuel, maintenance, insurance, and per diem — often reducing taxable income significantly."}},{"@type":"Question","name":"What is the average truck driver salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"OTR (over-the-road) drivers average $70,000–$85,000 in 2026. Local drivers earn $55,000–$65,000. Owner-operators gross $150,000–$200,000 but have high expenses."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › Truck Driver Salary After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Truck Driver Salary After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}>OTR truck drivers average <strong>$70,000/year</strong> in 2026. After taxes, take-home is <strong>$47,736–$53,424</strong> depending on state — before per diem deductions which can add $8,000–$15,000 back.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Truck Driver Take-Home by State ($70k salary)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Take-Home</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Hourly</th>
        </tr></thead>
        <tbody>{rows.map(([s,t,a,h]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{h}/hr</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Per Diem Tax Deduction for Truck Drivers 2026</h2>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '14px 18px', marginBottom: 24 }}>
        <strong>2026 per diem rate: $69/day</strong> for CONUS travel. A driver away 250 days/year can deduct $17,250 from taxable income — saving $2,500–$4,000 in taxes.
      </div>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact trucker take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$60k After Taxes','/blog/60k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
