import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Hawaii Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Hawaii paycheck calculator 2026. See exact take-home pay after federal + Hawaii state tax (up to 11%) and FICA. All salary levels. 100% private.',
  keywords: 'hawaii paycheck calculator 2026, hawaii take home pay, hawaii salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/hawaii-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$1,905","$1,758"],["$40,000","$3,333","$2,450","$2,262"],["$50,000","$4,167","$2,960","$2,731"],["$60,000","$5,000","$3,430","$3,166"],["$75,000","$6,250","$4,060","$3,748"],["$100,000","$8,333","$5,110","$4,717"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Hawaii income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Hawaii top income tax rate is 11% in 2026 — the second highest in the US after California."}},{"@type":"Question","name":"How much is $60,000 take-home in Hawaii?","acceptedAnswer":{"@type":"Answer","text":"Approximately $41,160/year ($3,430/month) after federal, FICA, and HI state tax."}},{"@type":"Question","name":"Why is Hawaii income tax so high?","acceptedAnswer":{"@type":"Answer","text":"Hawaii uses income tax revenue to fund extensive public services and lacks other major revenue sources due to its island economy."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Hawaii Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Hawaii Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>Hawaii state income tax: <strong>up to 11%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>Hawaii state income tax: up to 11% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Hawaii Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Hawaii paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Hawaii income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Hawaii top income tax rate is 11% in 2026 — the second highest in the US after California.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in Hawaii?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $41,160/year ($3,430/month) after federal, FICA, and HI state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Why is Hawaii income tax so high?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Hawaii uses income tax revenue to fund extensive public services and lacks other major revenue sources due to its island economy.</p>
    </main>
  )
}
