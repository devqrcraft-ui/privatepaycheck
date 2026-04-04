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

export default function OvertimeDeductionCalculator() {
  const [rate,    setRate]    = useState('')
  const [otHours, setOtHours] = useState('')
  const [weeks,   setWeeks]   = useState('50')
  const [income,  setIncome]  = useState('')
  const [status,  setStatus]  = useState<'single' | 'joint'>('single')
  const [result,  setResult]  = useState<null | {
    premium: number; deduction: number; taxSaved: number; phaseOut: number
  }>(null)

  const calc = () => {
    const r       = parseFloat(rate)    || 0
    const h       = parseFloat(otHours) || 0
    const w       = parseFloat(weeks)   || 50
    const inc     = parseFloat(income)  || 0
    const premium   = r * 0.5 * h * w
    const maxDed    = status === 'single' ? 12500 : 25000
    const thresh    = status === 'single' ? 150000 : 300000
    const phaseOut  = Math.max(0, Math.floor((inc - thresh) / 1000) * 100)
    const deduction = Math.max(0, Math.min(premium, maxDed) - phaseOut)
    const br        = status === 'single' ? BRACKETS_SINGLE : BRACKETS_JOINT
    const taxSaved  = calcTax(inc, br) - calcTax(inc - deduction, br)
    setResult({ premium, deduction, taxSaved, phaseOut })
  }

  return (
    <>
      
      <div suppressHydrationWarning style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#c084fc', marginBottom: '20px' }}>
           OBBBA — Effective January 1, 2025
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 16px', letterSpacing: '-1px' }}>
          No Tax on Overtime<br /><span style={{ color: '#c084fc' }}>Deduction Calculator</span>
        </h1>
        <p style={{ fontSize: '17px', opacity: 0.65, lineHeight: 1.7, marginBottom: '36px' }}>
          Hourly workers can deduct up to <strong style={{ color: '#c084fc' }}>$12,500</strong> (single) or{' '}
          <strong style={{ color: '#c084fc' }}>$25,000</strong> (joint) of overtime premium from federal income tax.
          100% private — nothing stored.
        </p>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px' }}>
          <div style={{ background: 'rgba(192,132,252,0.08)', border: '1px solid rgba(192,132,252,0.2)', borderRadius: '12px', padding: '14px 16px', marginBottom: '24px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
             <strong style={{ color: '#c084fc' }}>Only the premium counts.</strong> At $20/hr regular, overtime = $30/hr. Deductible premium = $10/hr (the extra 0.5×). The base $20 does not qualify.
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Filing Status</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {(['single', 'joint'] as const).map(s => (
                <button key={s} onClick={() => setStatus(s)} style={{ padding: '12px', borderRadius: '10px', border: `1px solid ${status === s ? '#c084fc' : 'rgba(255,255,255,0.1)'}`, background: status === s ? 'rgba(192,132,252,0.12)' : 'rgba(255,255,255,0.04)', color: status === s ? '#c084fc' : 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '14px', fontWeight: status === s ? 700 : 400, transition: 'all 0.2s' }}>
                  {s === 'single' ? 'Single / Head of Household' : 'Married Filing Jointly'}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
            {[
              { label: 'Regular Hourly Rate',    val: rate,    set: setRate,    ph: '22.50', pre: '$' },
              { label: 'Overtime Hours / Week',  val: otHours, set: setOtHours, ph: '8',     pre: ''  },
              { label: 'Weeks With OT Per Year', val: weeks,   set: setWeeks,   ph: '50',    pre: ''  },
              { label: 'Total Annual Income',    val: income,  set: setIncome,  ph: '72,000',pre: '$' },
            ].map(({ label, val, set, ph, pre }) => (
              <div key={label}>
                <label style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{label}</label>
                <div style={{ position: 'relative' }}>
                  {pre && <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }}>{pre}</span>}
                  <input type="number" value={val} onChange={e => set(e.target.value)} placeholder={ph}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: `14px 16px 14px ${pre ? '28px' : '16px'}`, color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
            ))}
          </div>

          <button onClick={calc} style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg,#c084fc,#7c3aed)', border: 'none', borderRadius: '14px', color: 'white', fontSize: '17px', fontWeight: 800, cursor: 'pointer' }}>
            Calculate My Overtime Tax Savings →
          </button>

          {result && (
            <div style={{ marginTop: '28px', padding: '28px', background: 'rgba(192,132,252,0.07)', border: '1px solid rgba(192,132,252,0.2)', borderRadius: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                {[
                  { label: 'Federal Tax Saved',     value: fmt(result.taxSaved),  big: true,  color: '#c084fc' },
                  { label: 'OT Deduction Applied',  value: fmt(result.deduction), big: false, color: 'white'   },
                  { label: 'Annual OT Premium Pay', value: fmt(result.premium),   big: false, color: 'white'   },
                  { label: 'Phase-Out Reduction',   value: fmt(result.phaseOut),  big: false, color: result.phaseOut > 0 ? '#f87171' : 'rgba(255,255,255,0.3)' },
                ].map(({ label, value, big, color }) => (
                  <div key={label} style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: `1px solid ${big ? 'rgba(192,132,252,0.3)' : 'rgba(255,255,255,0.07)'}` }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{label}</div>
                    <div style={{ fontSize: big ? '30px' : '22px', fontWeight: 800, color }}>{value}</div>
                  </div>
                ))}
              </div>
              {result.phaseOut > 0 && (
                <div style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '10px', padding: '12px 16px', fontSize: '13px', color: '#fbbf24', marginBottom: '12px' }}>
                   Income exceeds threshold — deduction reduced by {fmt(result.phaseOut)}.
                </div>
              )}
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.6 }}>
                 FLSA hourly workers only. Deduction valid 2025–2028. State income taxes may still apply.
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop: '16px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Related Calculators</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
            {[
              { href: '/no-tax-on-tips-calculator',    label: 'No Tax on Tips',   color: '#4ade80' },
              { href: '/overtime-calculator',           label: 'Overtime Pay',     color: '#fbbf24' },
              { href: '/two-jobs-tax-calculator',       label: 'Two Jobs Tax',     color: '#67e8f9' },
              { href: '/raise-calculator',              label: 'Raise Calculator', color: '#F5C842' },
            ].map(({ href, label, color }) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', color, textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>Frequently Asked Questions</h2>
        {[
          { q: 'What exactly is the "overtime premium"?', a: 'When you work overtime, your employer pays 1.5× your regular rate. The "premium" is just the extra 0.5×. If you earn $24/hr, overtime is $36/hr — the deductible premium is $12/hr. Only this portion qualifies, not the full overtime pay.' },
          { q: 'Do salaried employees qualify?', a: 'Generally no. Only workers eligible for FLSA overtime qualify — typically hourly workers. Most salaried employees classified as "exempt" do not receive FLSA overtime and cannot claim this deduction.' },
          { q: 'When does this deduction expire?', a: 'December 31, 2028. It covers tax years 2025, 2026, 2027, and 2028. Plan accordingly — this is not yet a permanent change to the tax code.' },
          { q: 'Does my state also exempt overtime from taxes?', a: 'This is a federal deduction only. Texas and Florida have no state income tax. California, New York, and most other states still fully tax overtime pay at the state level.' },
          { q: 'Can I claim both No Tax on Tips AND No Tax on Overtime?', a: 'Yes! If you are a tipped worker who also works overtime — common in restaurants and hospitality — you may qualify for both deductions. Each has its own cap and phase-out, calculated separately.' },
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
    </div>
    </>
  )
}
