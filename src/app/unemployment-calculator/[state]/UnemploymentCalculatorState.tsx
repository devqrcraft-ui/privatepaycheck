'use client';

import { useState } from 'react';

interface Props {
  stateName: string;
  stateSlug: string;
  maxWeekly: number;
  maxWeeks: number;
  rate: number;
  waitWeek: boolean;
  stateIncomeTax: number;
}

export default function UnemploymentCalculatorState({
  stateName,
  stateSlug,
  maxWeekly,
  maxWeeks,
  rate,
  waitWeek,
  stateIncomeTax,
}: Props) {
  const [weeklyWage, setWeeklyWage] = useState('');
  const [result, setResult] = useState<null | {
    weeklyBenefit: number;
    maxTotal: number;
    afterTax: number;
    weeks: number;
  }>(null);

  const calculate = () => {
    const wage = parseFloat(weeklyWage);
    if (isNaN(wage) || wage <= 0) return;
    const raw = wage * (rate / 100);
    const weekly = Math.min(raw, maxWeekly);
    const effectiveWeeks = waitWeek ? maxWeeks - 1 : maxWeeks;
    const maxTotal = weekly * effectiveWeeks;
    const federalTax = weekly * 0.1;
    const stateTax = weekly * (stateIncomeTax / 100);
    const afterTax = weekly - federalTax - stateTax;
    setResult({
      weeklyBenefit: Math.round(weekly),
      maxTotal: Math.round(maxTotal),
      afterTax: Math.round(afterTax),
      weeks: effectiveWeeks,
    });
  };

  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '40px 24px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: '#e8edf8', marginBottom: 8 }}>
        {stateName} Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize: 15, color: '#a0aec0', marginBottom: 28, lineHeight: 1.7 }}>
        Estimate your weekly unemployment benefit in {stateName}. The 2026 maximum is{' '}
        <strong style={{ color: '#e8edf8' }}>{'$' + maxWeekly + '/week'}</strong> for up to{' '}
        <strong style={{ color: '#e8edf8' }}>{maxWeeks + ' weeks'}</strong>.
        {waitWeek && (
          <span style={{ color: '#dc2626' }}> Note: {stateName} has a 1-week unpaid waiting period.</span>
        )}
      </p>

      <div style={{ background: '#1a2550', border: '1px solid #2a3a6a', borderRadius: 12, padding: '24px 28px', marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#7dd3fc' }}>
          Calculate Your Benefit
        </h2>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6, color: '#e8edf8' }}>
          Your Average Weekly Wage (before layoff)
        </label>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <input
            type="number"
            value={weeklyWage}
            onChange={(e) => setWeeklyWage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && calculate()}
            placeholder="e.g. 1000"
            style={{ border: '1px solid #cbd5e1', borderRadius: 8, padding: '10px 14px', fontSize: 16, width: 160 }}
          />
          <button
            onClick={calculate}
            style={{ background: '#0284c7', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
          >
            Calculate
          </button>
        </div>

        {result && (
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { label: 'Weekly Benefit', value: '$' + result.weeklyBenefit, color: '#38bdf8' },
              { label: 'Max Total (' + result.weeks + ' wks)', value: '$' + result.maxTotal.toLocaleString(), color: '#4ade80' },
              { label: 'Est. After-Tax/Week', value: '$' + result.afterTax, color: '#a78bfa' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#0f1a3a', borderRadius: 10, padding: '16px 12px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: 12, color: '#a0aec0', marginTop: 4 }}>{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e8edf8', marginBottom: 14 }}>
        {stateName} UI Benefits at a Glance
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 32 }}>
        <tbody>
          {[
            ['Maximum Weekly Benefit', '$' + maxWeekly],
            ['Maximum Duration', maxWeeks + ' weeks'],
            ['Benefit Rate', rate + '% of prior weekly wage'],
            ['Waiting Week', waitWeek ? 'Yes — 1 week unpaid' : 'No waiting period'],
            ['State Tax on Benefits', stateIncomeTax > 0 ? stateIncomeTax + '%' : 'None (no state income tax)'],
          ].map(([label, value]) => (
            <tr key={label} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '10px 0', color: '#b0b8d1', fontWeight: 500 }}>{label}</td>
              <td style={{ padding: '10px 0', fontWeight: 700, color: '#e8edf8' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e8edf8', marginBottom: 12 }}>
        How {stateName} Calculates Your Benefit
      </h2>
      <p style={{ fontSize: 15, color: '#b0b8d1', lineHeight: 1.8, marginBottom: 24 }}>
        {stateName} calculates your weekly benefit amount (WBA) as approximately {rate}% of your
        average weekly wage during the base period. Your WBA cannot exceed {'$' + maxWeekly}.
        UI benefits are federally taxable; you may elect 10% voluntary federal withholding.
        {stateIncomeTax > 0
          ? ' ' + stateName + ' also taxes UI benefits at ' + stateIncomeTax + '%.'
          : ' ' + stateName + ' has no state income tax, so only federal taxes apply.'}
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e8edf8', marginBottom: 12 }}>
        Eligibility Requirements
      </h2>
      <ul style={{ paddingLeft: 20, color: '#b0b8d1', fontSize: 15, lineHeight: 2 }}>
        <li>Separated from your job through no fault of your own (layoff, not resignation or misconduct)</li>
        <li>Earned sufficient wages during the base period</li>
        <li>Able, available, and actively seeking full-time work each week</li>
        <li>File weekly certifications to continue receiving benefits</li>
      </ul>

      <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 40, paddingTop: 16, borderTop: '1px solid #2a3a6a' }}>
        Disclaimer: Estimates only. Actual amounts depend on your wage history and {stateName} DOL determination.
        Data reflects 2026 benefit schedules. Consult the {stateName} Department of Labor for official figures.
      </p>
    </main>
  );
}