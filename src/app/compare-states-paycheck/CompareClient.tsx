'use client';
import { useState } from 'react';
import type { CSSProperties } from 'react';

interface StateData { name: string; rate: number; sdiRate: number; noStateTax: boolean; }

const STATES: Record<string, StateData> = {
  'california':     { name: 'California',     rate: 9.3,   sdiRate: 1.3,  noStateTax: false },
  'texas':          { name: 'Texas',           rate: 0,     sdiRate: 0,    noStateTax: true  },
  'florida':        { name: 'Florida',         rate: 0,     sdiRate: 0,    noStateTax: true  },
  'new-york':       { name: 'New York',        rate: 6.33,  sdiRate: 0.5,  noStateTax: false },
  'washington':     { name: 'Washington',      rate: 0,     sdiRate: 0.58, noStateTax: true  },
  'illinois':       { name: 'Illinois',        rate: 4.95,  sdiRate: 0,    noStateTax: false },
  'colorado':       { name: 'Colorado',        rate: 4.4,   sdiRate: 0,    noStateTax: false },
  'oregon':         { name: 'Oregon',          rate: 8.75,  sdiRate: 0,    noStateTax: false },
  'georgia':        { name: 'Georgia',         rate: 5.49,  sdiRate: 0,    noStateTax: false },
  'massachusetts':  { name: 'Massachusetts',   rate: 5.0,   sdiRate: 0,    noStateTax: false },
  'new-jersey':     { name: 'New Jersey',      rate: 5.525, sdiRate: 0.47, noStateTax: false },
  'ohio':           { name: 'Ohio',            rate: 3.5,   sdiRate: 0,    noStateTax: false },
  'pennsylvania':   { name: 'Pennsylvania',    rate: 3.07,  sdiRate: 0.07, noStateTax: false },
  'nevada':         { name: 'Nevada',          rate: 0,     sdiRate: 0,    noStateTax: true  },
  'arizona':        { name: 'Arizona',         rate: 2.5,   sdiRate: 0,    noStateTax: false },
  'north-carolina': { name: 'North Carolina',  rate: 4.5,   sdiRate: 0,    noStateTax: false },
  'virginia':       { name: 'Virginia',        rate: 5.75,  sdiRate: 0,    noStateTax: false },
  'michigan':       { name: 'Michigan',        rate: 4.25,  sdiRate: 0,    noStateTax: false },
  'tennessee':      { name: 'Tennessee',       rate: 0,     sdiRate: 0,    noStateTax: true  },
  'minnesota':      { name: 'Minnesota',       rate: 7.05,  sdiRate: 0,    noStateTax: false },
};

function fmt(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function calcTakeHome(gross: number, rate: number, sdiRate: number, filing: string) {
  const stdDed = filing === 'married' ? 32200 : 16100;
  const taxable = Math.max(0, gross - stdDed);
  let fed = 0;
  if (filing === 'married') {
    if (taxable > 751600) fed += (taxable - 751600) * 0.37;
    if (taxable > 501050) fed += (Math.min(taxable, 751600) - 501050) * 0.35;
    if (taxable > 394600) fed += (Math.min(taxable, 501050) - 394600) * 0.32;
    if (taxable > 206700) fed += (Math.min(taxable, 394600) - 206700) * 0.24;
    if (taxable > 96950)  fed += (Math.min(taxable, 206700) - 96950)  * 0.22;
    if (taxable > 23850)  fed += (Math.min(taxable, 96950)  - 23850)  * 0.12;
    fed += Math.min(taxable, 23850) * 0.10;
  } else {
    if (taxable > 626350) fed += (taxable - 626350) * 0.37;
    if (taxable > 250525) fed += (Math.min(taxable, 626350) - 250525) * 0.35;
    if (taxable > 197300) fed += (Math.min(taxable, 250525) - 197300) * 0.32;
    if (taxable > 103350) fed += (Math.min(taxable, 197300) - 103350) * 0.24;
    if (taxable > 48475)  fed += (Math.min(taxable, 103350) - 48475)  * 0.22;
    if (taxable > 11925)  fed += (Math.min(taxable, 48475)  - 11925)  * 0.12;
    fed += Math.min(taxable, 11925) * 0.10;
  }
  const ss       = Math.min(gross, 184500) * 0.062;
  const medicare = gross * 0.0145;
  const stateTax = gross * (rate / 100);
  const sdi      = gross * (sdiRate / 100);
  const totalTax = fed + ss + medicare + stateTax + sdi;
  const takeHome = gross - totalTax;
  const effRate  = (totalTax / gross * 100).toFixed(1);
  return { fed, ss, medicare, stateTax, sdi, takeHome, effRate };
}

export default function CompareClient() {
  const [salary, setSalary] = useState(80000);
  const [filing, setFiling] = useState('single');
  const [picks, setPicks] = useState(['california', 'texas', 'florida']);

  const results = picks.map(k => {
    const s = STATES[k];
    if (!s) return null;
    const r = calcTakeHome(salary, s.rate, s.sdiRate, filing);
    return { ...s, ...r, key: k };
  });

  const maxTakeHome = Math.max(...results.map(r => r ? r.takeHome : 0));

  function setPickAt(idx: number, val: string) {
    const next = [...picks];
    next[idx] = val;
    setPicks(next);
  }

  const sel: CSSProperties = {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(245,200,66,0.3)',
    borderRadius: 8,
    color: '#e2e8f0',
    padding: '10px 12px',
    fontSize: 15,
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12, marginBottom: 20 }}>
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', display: 'block', marginBottom: 4 }}>ANNUAL SALARY</label>
          <input type="number" min={0} value={salary} onChange={e => setSalary(Math.max(0, Number(e.target.value)))} style={sel} />
        </div>
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', display: 'block', marginBottom: 4 }}>FILING STATUS</label>
          <select value={filing} onChange={e => setFiling(e.target.value)} style={sel}>
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12, marginBottom: 28 }}>
        {[0,1,2].map(idx => (
          <div key={idx}>
            <label style={{ fontSize: 12, color: '#94a3b8', display: 'block', marginBottom: 4 }}>{'STATE ' + (idx + 1)}</label>
            <select value={picks[idx]} onChange={e => setPickAt(idx, e.target.value)} style={sel}>
              {Object.entries(STATES).map(([k,v]) => (
                <option key={k} value={k}>{v.name}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        {results.map(r => {
          if (!r) return null;
          const isBest = r.takeHome === maxTakeHome;
          const breakdown: Array<[string, number]> = [
            ['Federal Tax', r.fed],
            ['Social Security', r.ss],
            ['Medicare', r.medicare],
            ['State Tax', r.stateTax],
            ['SDI / Other', r.sdi],
          ];
          return (
            <div key={r.key} style={{
              background: isBest ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.04)',
              border: '1px solid ' + (isBest ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)'),
              borderRadius: 12,
              padding: 16,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 800, fontSize: 16, color: '#f1f5f9' }}>{r.name}</span>
                {isBest && <span style={{ fontSize: 11, background: 'rgba(16,185,129,0.2)', color: '#4ade80', padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>BEST</span>}
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: isBest ? '#4ade80' : '#F5C842', marginBottom: 4 }}>{fmt(r.takeHome)}</div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 12 }}>take-home per year</div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {breakdown.map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: '#94a3b8' }}>{label}</span>
                    <span style={{ color: '#e2e8f0' }}>{fmt(val)}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 6, marginTop: 2 }}>
                  <span style={{ color: '#94a3b8' }}>Effective Rate</span>
                  <span style={{ color: '#F5C842', fontWeight: 700 }}>{r.effRate}%</span>
                </div>
              </div>
              <a href={'/' + r.key + '-paycheck-calculator'} style={{ display: 'block', marginTop: 14, textAlign: 'center', padding: '8px 0', borderRadius: 8, background: 'rgba(245,200,66,0.08)', color: '#F5C842', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>
                {'Full ' + r.name + ' Calculator \u2192'}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
