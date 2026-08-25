'use client'

import { useState } from 'react'

export default function HouseholdCalculator({ roleLabel }: { roleLabel: string }) {
  const [wages, setWages] = useState('')
  const [overtimePremium, setOvertimePremium] = useState('')
  const [quarterlyOver1000, setQuarterlyOver1000] = useState(true)
  const [result, setResult] = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

  const calculate = () => {
    const gross = parseFloat(wages) || 0
    if (!gross) return
    const overtime = Math.min(parseFloat(overtimePremium) || 0, 12500)

    const ficaThreshold = 3000
    const owesFICA = gross >= ficaThreshold
    const employeeFICA = owesFICA ? gross * 0.0765 : 0
    const employerFICA = owesFICA ? gross * 0.0765 : 0

    const futaWageBase = Math.min(gross, 7000)
    const owesFUTA = quarterlyOver1000
    const futaTax = owesFUTA ? futaWageBase * 0.006 : 0

    const employeeNet = gross - employeeFICA
    const totalEmployerCost = gross + employerFICA + futaTax

    setResult({ gross, overtime, owesFICA, employeeFICA, employerFICA, owesFUTA, futaTax, employeeNet, totalEmployerCost })
  }

  const card = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, marginBottom: 20, boxShadow: '0 2px 12px rgba(0,0,0,.06)', overflow: 'hidden' as const }
  const cardHd = { background: '#f8fafc', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #e2e8f0' }
  const lbl = { display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', textTransform: 'uppercase' as const, letterSpacing: '0.6px', marginBottom: 6 }
  const inp = { width: '100%', border: '1px solid #cbd5e1', borderRadius: 6, padding: '10px 12px', fontSize: 14, color: '#1e293b', background: '#fff', boxSizing: 'border-box' as const }
  const btn = { background: '#0056b3', color: '#fff', padding: '13px 0', borderRadius: 6, fontSize: 15, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%' }

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={card}>
        <div style={cardHd}>
          <span style={{ color: '#0f172a', fontWeight: 700, fontSize: 16 }}>{roleLabel} Tax Calculator 2026</span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="hh-form-grid">
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={lbl}>Annual Cash Wages Paid to Your {roleLabel} (USD)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontWeight: 700 }}>$</span>
                <input style={{ ...inp, paddingLeft: 24 }} type="number" min="0" value={wages} onChange={e => setWages(e.target.value)} placeholder="e.g. 20,000" />
              </div>
            </div>
            <div>
              <label style={lbl}>Qualified Overtime Premium Paid (optional)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontWeight: 700 }}>$</span>
                <input style={{ ...inp, paddingLeft: 24 }} type="number" min="0" value={overtimePremium} onChange={e => setOvertimePremium(e.target.value)} placeholder="e.g. 1,500" />
              </div>
            </div>
            <div>
              <label style={lbl}>Paid $1,000+ in any single quarter?</label>
              <select style={inp} value={quarterlyOver1000 ? 'yes' : 'no'} onChange={e => setQuarterlyOver1000(e.target.value === 'yes')}>
                <option value="yes">Yes (triggers FUTA)</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div style={btn} onClick={calculate}>Calculate {roleLabel} Tax Estimate</div>
        </div>
      </div>

      {result && (
        <div style={card}>
          <div style={cardHd}>
            <span style={{ color: '#0f172a', fontWeight: 700, fontSize: 16 }}>Your 2026 Household Employer Tax Estimate</span>
          </div>
          <div style={{ padding: 20 }}>
            {!result.owesFICA && (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', borderRadius: 6, padding: 14, marginBottom: 16, fontSize: 14 }}>
                Good news — annual wages under <strong>$3,000</strong> (the 2026 FICA threshold) mean you don't owe Social Security or Medicare tax on this employee. No W-2 is required for FICA purposes.
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginBottom: 16 }} className="hh-results-grid">
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 6, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', textTransform: 'uppercase' as const, marginBottom: 6 }}>Employee FICA Withheld (7.65%)</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#0f172a' }}>{fmt(result.employeeFICA)}</div>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 6, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', textTransform: 'uppercase' as const, marginBottom: 6 }}>Employer FICA Match (7.65%)</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#0f172a' }}>{fmt(result.employerFICA)}</div>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 6, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', textTransform: 'uppercase' as const, marginBottom: 6 }}>Federal Unemployment Tax (FUTA)</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#0f172a' }}>{fmt(result.futaTax)}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 4 }}>0.6% on first $7,000 (assumes full state credit)</div>
              </div>
              <div style={{ border: '2px solid #0056b3', background: '#eff6ff', borderRadius: 6, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0056b3', textTransform: 'uppercase' as const, marginBottom: 6 }}>Your Total Cost (Wages + Taxes)</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#0056b3' }}>{fmt(result.totalEmployerCost)}</div>
              </div>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6, padding: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 4 }}>Employee's Estimated Net Pay (after FICA)</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a' }}>{fmt(result.employeeNet)}</div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>Assumes you withhold the employee's 7.65% FICA share. Federal/state income tax withholding is optional for household employers — your employee may owe this directly when filing.</div>
            </div>
            {result.overtime > 0 && (
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: 14, marginBottom: 16, fontSize: 13, color: '#92400e' }}>
                <strong>OBBBA Overtime Exemption:</strong> Up to $12,500 of qualified overtime premium pay is exempt from federal income tax (not FICA) in 2026. You entered {fmt(result.overtime)} in overtime premium.
              </div>
            )}
            <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.6 }}>
              <strong>Disclaimer:</strong> Estimates for planning only, based on IRS Publication 926 and 2026 SSA thresholds. State unemployment tax (SUTA) and state income tax withholding vary by state and are not included above — check your state's household employer rules. File Schedule H with your Form 1040. Consult a licensed tax professional for your specific situation.
            </div>
          </div>
        </div>
      )}
      <style>{`
        @media(max-width:640px){
          .hh-form-grid{grid-template-columns:1fr!important}
          .hh-results-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  )
}
