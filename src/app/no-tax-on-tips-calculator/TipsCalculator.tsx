'use client'
import { useState } from 'react'
import Link from 'next/link'

const BRACKETS_SINGLE = [
  { min: 0,       max: 11925,    rate: 0.10 },
  { min: 11925,   max: 48475,    rate: 0.12 },
  { min: 48475,   max: 103350,   rate: 0.22 },
  { min: 103350,  max: 197300,   rate: 0.24 },
  { min: 197300,  max: 250525,   rate: 0.32 },
  { min: 250525,  max: 626350,   rate: 0.35 },
  { min: 626350,  max: Infinity, rate: 0.37 },
]
const BRACKETS_JOINT = [
  { min: 0,       max: 23850,    rate: 0.10 },
  { min: 23850,   max: 96950,    rate: 0.12 },
  { min: 96950,   max: 206700,   rate: 0.22 },
  { min: 206700,  max: 394600,   rate: 0.24 },
  { min: 394600,  max: 501050,   rate: 0.32 },
  { min: 501050,  max: 751600,   rate: 0.35 },
  { min: 751600,  max: Infinity, rate: 0.37 },
]
function calcTax(inc: number, br: typeof BRACKETS_SINGLE) {
  let t = 0
  for (const { min, max, rate } of br) {
    if (inc <= min) break
    t += (Math.min(inc, max) - min) * rate
  }
  return t
}
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

const JOBS = [
  'Server / Waiter / Waitress', 'Bartender', 'Barista / Barback',
  'Food Delivery Driver (DoorDash, UberEats, GrubHub)', 'Rideshare Driver (Uber, Lyft)',
  'Hair Stylist / Barber', 'Nail Technician', 'Massage Therapist',
  'Hotel Bellhop / Concierge / Housekeeping', 'Valet Parking Attendant',
  'Casino Dealer / Gaming Worker', 'Tour Guide / Tour Bus Driver',
  'Tattoo Artist', 'Esthetician / Spa Worker', 'Golf Caddy',
  'Musician / Performer / Entertainer', 'Other qualifying occupation',
]

export default function TipsCalculator() {
  const [income, setIncome] = useState('')
  const [tips,   setTips]   = useState('')
  const [status, setStatus] = useState<'single' | 'joint'>('single')
  const [job,    setJob]    = useState('')
  const [result, setResult] = useState<null | {
    deduction: number; taxSaved: number; fica: number; phaseOut: number
  }>(null)

  const calc = () => {
    const inc     = parseFloat(income) || 0
    const tip     = parseFloat(tips)   || 0
    const thresh  = status === 'single' ? 150000 : 300000
    const phaseOut   = Math.max(0, Math.floor((inc - thresh) / 1000) * 100)
    const deduction  = Math.max(0, Math.min(tip, 25000) - phaseOut)
    const br         = status === 'single' ? BRACKETS_SINGLE : BRACKETS_JOINT
    const taxSaved   = calcTax(inc, br) - calcTax(inc - deduction, br)
    const fica       = tip * 0.0765
    setResult({ deduction, taxSaved, fica, phaseOut })
  }

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        'name': 'No Tax on Tips Calculator 2025',
        'url': 'https://privatepaycheck.com/no-tax-on-tips-calculator',
        'description': 'Calculate federal tax savings on tips under the One Big Beautiful Bill Act 2025.',
        'applicationCategory': 'FinanceApplication', 'operatingSystem': 'Any',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
          { '@type': 'Question', 'name': 'Who qualifies for the No Tax on Tips deduction?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Workers in customary tipping occupations earning under $150,000/year (single) or $300,000 (joint). Covers servers, bartenders, hair stylists, rideshare drivers, hotel staff, casino dealers, and 60+ other occupations.' } },
          { '@type': 'Question', 'name': 'How much can I deduct for tips?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Up to $25,000 of qualified tips per year. Phases out above $150,000 income (single) or $300,000 (joint).' } },
          { '@type': 'Question', 'name': 'Do I still pay Social Security and Medicare on tips?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Only federal income tax is removed. FICA (6.2% SS + 1.45% Medicare) still applies to all tip income.' } },
        ],
      })}} />

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#4ade80', marginBottom: '20px' }}>
          🆕 One Big Beautiful Bill — Signed July 4, 2025
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 16px', letterSpacing: '-1px' }}>
          No Tax on Tips<br /><span style={{ color: '#4ade80' }}>Calculator 2025</span>
        </h1>
        <p style={{ fontSize: '17px', opacity: 0.65, lineHeight: 1.7, marginBottom: '36px' }}>
          Under the new law, up to <strong style={{ color: '#4ade80' }}>$25,000 of tips</strong> are exempt from federal income tax.
          Find out exactly how much you&apos;ll save — 100% private, nothing stored.
        </p>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Filing Status</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {(['single', 'joint'] as const).map(s => (
                <button key={s} onClick={() => setStatus(s)} style={{ padding: '12px', borderRadius: '10px', border: `1px solid ${status === s ? '#4ade80' : 'rgba(255,255,255,0.1)'}`, background: status === s ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.04)', color: status === s ? '#4ade80' : 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '14px', fontWeight: status === s ? 700 : 400, transition: 'all 0.2s' }}>
                  {s === 'single' ? 'Single / Head of Household' : 'Married Filing Jointly'}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Your Occupation</label>
            <select value={job} onChange={e => setJob(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '14px 16px', color: job ? 'white' : 'rgba(255,255,255,0.4)', fontSize: '15px', outline: 'none', cursor: 'pointer', colorScheme: 'dark' }}>
              <option value="" style={{ background: '#1a1040' }}>Select your occupation...</option>
              {JOBS.map(j => <option key={j} value={j} style={{ background: '#1a1040' }}>{j}</option>)}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
            {[
              { label: 'Annual Base Income (before tips)', val: income, set: setIncome, ph: '48,000' },
              { label: 'Annual Tips Received',             val: tips,   set: setTips,   ph: '22,000' },
            ].map(({ label, val, set, ph }) => (
              <div key={label}>
                <label style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{label}</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }}>$</span>
                  <input type="number" value={val} onChange={e => set(e.target.value)} placeholder={ph}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '14px 16px 14px 28px', color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
            ))}
          </div>

          <button onClick={calc} style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg,#4ade80,#22c55e)', border: 'none', borderRadius: '14px', color: 'white', fontSize: '17px', fontWeight: 800, cursor: 'pointer' }}>
            Calculate My Tip Tax Savings →
          </button>

          {result && (
            <div style={{ marginTop: '28px', padding: '28px', background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                {[
                  { label: 'Federal Tax Saved',       value: fmt(result.taxSaved),  big: true,  color: '#4ade80' },
                  { label: 'Tip Deduction',           value: fmt(result.deduction), big: false, color: 'white'   },
                  { label: 'FICA Still Owed on Tips', value: fmt(result.fica),      big: false, color: '#fbbf24' },
                  { label: 'Phase-Out Reduction',     value: fmt(result.phaseOut),  big: false, color: result.phaseOut > 0 ? '#f87171' : 'rgba(255,255,255,0.3)' },
                ].map(({ label, value, big, color }) => (
                  <div key={label} style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: `1px solid ${big ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.07)'}` }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{label}</div>
                    <div style={{ fontSize: big ? '30px' : '22px', fontWeight: 800, color }}>{value}</div>
                  </div>
                ))}
              </div>
              {result.phaseOut > 0 && (
                <div style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '10px', padding: '12px 16px', fontSize: '13px', color: '#fbbf24', marginBottom: '12px' }}>
                  ⚠️ Income exceeds threshold — deduction reduced by {fmt(result.phaseOut)}.
                </div>
              )}
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.6 }}>
                ✓ Federal income tax only. SS (6.2%) + Medicare (1.45%) still apply. Valid 2025–2028.
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Related Calculators</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { href: '/no-tax-on-overtime-deduction', label: 'No Tax on Overtime', color: '#c084fc' },
              { href: '/raise-calculator',             label: 'Raise Calculator',   color: '#4ade80' },
              { href: '/signing-bonus-tax-calculator', label: 'Signing Bonus Tax',  color: '#60a5fa' },
              { href: '/two-jobs-tax-calculator',      label: 'Two Jobs Tax',       color: '#f59e0b' },
            ].map(({ href, label, color }) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', color, textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>Frequently Asked Questions</h2>
        {[
          { q: 'Who qualifies for the No Tax on Tips deduction?', a: 'Workers in customary tipping occupations earning under $150,000/year (single) or $300,000 (joint). Covers servers, bartenders, hair stylists, barbers, rideshare & delivery drivers, hotel staff, casino dealers, massage therapists, and 60+ more. Tips must be reported to your employer.' },
          { q: 'Does "No Tax on Tips" mean tips are completely tax-free?', a: 'Federal income tax only. You still pay Social Security (6.2%) and Medicare (1.45%) on tips, and your state may tax them too. But the federal savings alone can be $1,500–$5,500/year for a typical tipped worker.' },
          { q: 'When does this law take effect?', a: 'Tips earned January 1, 2025 through December 31, 2028. You claim it on your 2025 tax return filed in early 2026. Tips earned in 2024 are still fully taxable.' },
          { q: 'Can I take this AND the standard deduction?', a: 'Yes! Above-the-line deduction — subtracted before your AGI is calculated. Works whether you itemize or take the standard deduction.' },
          { q: 'What if my income exceeds $150,000?', a: 'Phases out at $100 per $1,000 above $150,000 (single) or $300,000 (joint). Above $400,000 (single) the deduction is fully eliminated.' },
          { q: 'Do I need to keep records of my tips?', a: 'Yes. Report tips to your employer and keep your own records. Cash tips, credit card tips, and tip-pools all qualify if documented.' },
        ].map(({ q, a }) => (
          <div key={q} style={{ marginBottom: '16px', padding: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px' }}>
            <div style={{ fontWeight: 700, marginBottom: '10px', fontSize: '16px' }}>{q}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '15px' }}>{a}</div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  )
}
