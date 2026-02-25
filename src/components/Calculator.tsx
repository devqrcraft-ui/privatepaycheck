'use client';
import { useState } from 'react';
import {
  FEDERAL_BRACKETS_SINGLE, FEDERAL_BRACKETS_MARRIED, FEDERAL_BRACKETS_HOH,
  STANDARD_DEDUCTION, FICA, STATE_TAXES, STATES_LIST
} from '@/lib/taxRates2026';

function calcFederalTax(taxable: number, status: string) {
  const brackets =
    status === 'married' ? FEDERAL_BRACKETS_MARRIED :
    status === 'hoh'     ? FEDERAL_BRACKETS_HOH :
                           FEDERAL_BRACKETS_SINGLE;
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    tax += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  return tax;
}

function calcFICA(annual: number) {
  const ss    = Math.min(annual, FICA.socialSecurity.cap) * FICA.socialSecurity.rate;
  const med   = annual * FICA.medicare.rate;
  const addMed = annual > FICA.additionalMedicare.threshold
    ? (annual - FICA.additionalMedicare.threshold) * FICA.additionalMedicare.rate : 0;
  return { ss, med: med + addMed, total: ss + med + addMed };
}

const PERIODS = [
  { key: 'hourly',       label: 'Hourly',        mult: 2080 },
  { key: 'weekly',       label: 'Weekly',         mult: 52 },
  { key: 'biweekly',     label: 'Bi-Weekly',      mult: 26 },
  { key: 'semimonthly',  label: 'Semi-Monthly',   mult: 24 },
  { key: 'monthly',      label: 'Monthly',        mult: 12 },
  { key: 'annual',       label: 'Annual',         mult: 1 },
];

const fmt = (v: number) =>
  '$' + Math.round(v).toLocaleString('en-US');

const fmtD = (v: number) =>
  '$' + v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default function Calculator({ defaultState = 'ca' }: { defaultState?: string }) {
  const [salary,  setSalary]  = useState('75000');
  const [period,  setPeriod]  = useState('annual');
  const [status,  setStatus]  = useState('single');
  const [state,   setState]   = useState(defaultState);
  const [k401,    setK401]    = useState('0');
  const [hsa,     setHsa]     = useState('0');
  const [health,  setHealth]  = useState('0');

  const periodObj = PERIODS.find(p => p.key === period)!;
  const gross     = parseFloat(salary) || 0;
  const annual    = gross * periodObj.mult;

  const preTax    = (parseFloat(k401) || 0) + (parseFloat(hsa) || 0) + (parseFloat(health) || 0);
  const stdDed    = STANDARD_DEDUCTION[status as keyof typeof STANDARD_DEDUCTION] || 14600;
  const taxable   = Math.max(0, annual - preTax - stdDed);

  const federal   = calcFederalTax(taxable, status);
  const fica      = calcFICA(annual);
  const stateRate = STATE_TAXES[state]?.rate || 0;
  const stateTax  = taxable * stateRate;
  const totalTax  = federal + fica.total + stateTax;
  const netAnnual = annual - totalTax - preTax;

  const perP = (v: number) => v / periodObj.mult;
  const effRate = annual > 0 ? ((totalTax / annual) * 100).toFixed(1) : '0.0';

  const inp: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.08)', color: 'white',
    fontSize: '15px', fontWeight: 600, outline: 'none',
  };
  const sel: React.CSSProperties = { ...inp, cursor: 'pointer' };
  const label: React.CSSProperties = { fontSize: '12px', opacity: 0.6, marginBottom: '6px', display: 'block' };

  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', maxWidth: '900px', margin: '0 auto' }}>

      {/* Pay Period Selector */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {PERIODS.map(p => (
          <button key={p.key} onClick={() => setPeriod(p.key)} style={{
            padding: '8px 14px', borderRadius: '8px', border: '1px solid',
            borderColor: period === p.key ? '#818cf8' : 'rgba(255,255,255,0.15)',
            background: period === p.key ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
            color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
          }}>{p.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px', marginBottom: '20px' }}>
        <div>
          <label style={label}>{periodObj.label} Gross Pay</label>
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)} style={inp} placeholder="75000" />
        </div>
        <div>
          <label style={label}>Filing Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} style={sel}>
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="hoh">Head of Household</option>
          </select>
        </div>
        <div>
          <label style={label}>State</label>
          <select value={state} onChange={e => setState(e.target.value)} style={sel}>
            {STATES_LIST.map(s => (
              <option key={s.slug} value={s.slug}>
                {s.name}{s.noTax ? ' (No Tax)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={label}>Annual 401(k) Contribution</label>
          <input type="number" value={k401} onChange={e => setK401(e.target.value)} style={inp} placeholder="0" />
        </div>
        <div>
          <label style={label}>Annual HSA Contribution</label>
          <input type="number" value={hsa} onChange={e => setHsa(e.target.value)} style={inp} placeholder="0" />
        </div>
        <div>
          <label style={label}>Health Insurance (Annual)</label>
          <input type="number" value={health} onChange={e => setHealth(e.target.value)} style={inp} placeholder="0" />
        </div>
      </div>

      {/* Results */}
      <div style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(34,211,238,0.1))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '13px', opacity: 0.65 }}>Take-Home Pay ({periodObj.label})</div>
            <div style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, color: '#4ade80' }}>{fmtD(perP(netAnnual))}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', opacity: 0.65 }}>Annual Net</div>
            <div style={{ fontSize: '24px', fontWeight: 800 }}>{fmt(netAnnual)}</div>
            <div style={{ fontSize: '12px', opacity: 0.55, marginTop: '4px' }}>Effective tax rate: {effRate}%</div>
          </div>
        </div>
      </div>

      {/* Tax Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '12px' }}>
        {[
          { label: 'Federal Income Tax', value: federal, color: '#f87171' },
          { label: 'Social Security',    value: fica.ss, color: '#fb923c' },
          { label: 'Medicare',           value: fica.med, color: '#fbbf24' },
          { label: `State Tax (${STATE_TAXES[state]?.name || state})`, value: stateTax, color: '#a78bfa' },
          { label: 'Pre-Tax Deductions', value: preTax, color: '#34d399' },
        ].map(item => (
          <div key={item.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
            <div style={{ fontSize: '11px', opacity: 0.6, marginBottom: '6px' }}>{item.label}</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: item.color }}>{fmtD(perP(item.value))}</div>
            <div style={{ fontSize: '11px', opacity: 0.45, marginTop: '3px' }}>{fmt(item.value)}/yr</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '16px', fontSize: '12px', opacity: 0.4, textAlign: 'center' }}>
        Calculations use 2026 tax tables. Your salary data never leaves your browser.
      </div>
    </div>
  );
}