'use client';

import { useState } from 'react';
import StatHighlightCards from '../../../components/StatHighlightCards';
import CalculatorResultActions from '../../../components/CalculatorResultActions';

interface Props {
  stateName: string;
  stateSlug: string;
  maxWeekly: number;
  maxWeeks: number;
  rate: number;
}

export default function UnemploymentCalculatorState({
  stateName,
  stateSlug,
  maxWeekly,
  maxWeeks,
  rate,
}: Props) {
  const [weeklyWage, setWeeklyWage] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<null | {
    weeklyBenefit: number;
  }>(null);

  const calculate = () => {
    const wage = Number(weeklyWage);
    if (!Number.isFinite(wage) || wage <= 0) {
      setError('Enter a valid weekly wage greater than zero.');
      setResult(null);
      return;
    }
    const raw = wage * (rate / 100);
    const weekly = Math.min(raw, maxWeekly);
    setError('');
    setResult({ weeklyBenefit: Math.round(weekly) });
  };

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 24px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: '#e8edf8', marginBottom: 8 }}>
        {stateName} Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize: 15, color: '#a0aec0', marginBottom: 28, lineHeight: 1.7 }}>
        This planning illustration applies a site-configured percentage of{' '}
        <strong style={{ color: '#e8edf8' }}>{rate}%</strong> to your entered average weekly wage and caps the result at{' '}
        <strong style={{ color: '#e8edf8' }}>{'$' + maxWeekly}</strong>. These are model assumptions, not a verified current state schedule. Check the state agency for current limits, duration, eligibility, and your official determination.
      </p>

      <StatHighlightCards
        stats={[
          { label: 'Site-model cap', value: '$' + maxWeekly, sublabel: 'not an official state limit' },
          { label: 'Site-model duration', value: String(maxWeeks), sublabel: 'weeks; not an entitlement' },
          { label: 'Illustration rate', value: rate + '%', sublabel: 'not the state formula' },
        ]}
      />
      <div style={{ background: '#1a2550', border: '1px solid #2a3a6a', borderRadius: 12, padding: '24px 28px', marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#7dd3fc' }}>
          Calculate Your Benefit
        </h2>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6, color: '#e8edf8' }}>
          Average weekly wage for this rough estimate
        </label>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <input
            type="number"
            value={weeklyWage}
            onChange={(e) => setWeeklyWage(e.target.value)} min={0}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'ui-wage-error' : 'ui-wage-note'}
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
        {error
          ? <p id="ui-wage-error" role="alert" style={{ color: '#fca5a5', fontSize: 12, margin: '8px 0 0' }}>{error}</p>
          : <p id="ui-wage-note" style={{ color: '#94a3b8', fontSize: 12, margin: '8px 0 0' }}>The state’s official calculation may use quarterly wages, credit weeks, minimums, or other rules not modeled here.</p>}

        {result && (
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 16 }}>
            {[
              { label: 'Rough gross weekly benefit estimate', value: '$' + result.weeklyBenefit.toLocaleString(), color: '#38bdf8' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#0f1a3a', borderRadius: 10, padding: '16px 12px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: 12, color: '#a0aec0', marginTop: 4 }}>{item.label}</div>
              </div>
            ))}
            <CalculatorResultActions
              summary={`${stateName} unemployment planning illustration\nSite-model weekly estimate: $${result.weeklyBenefit.toLocaleString()}\nThe result uses a site-configured percentage and cap, not a verified current state formula. It is not an eligibility decision or official agency determination.`}
              relatedLinks={[
                { href: '/unemployment-calculator', label: 'More unemployment estimates →' },
                { href: '/1099-paycheck-calculator', label: '1099 tax calculator →' },
              ]}
            />
          </div>
        )}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e8edf8', marginBottom: 14 }}>
        {stateName} planning estimate at a glance
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 32 }}>
        <tbody>
          {[
            ['Site-model cap', '$' + maxWeekly + ' (not an official state limit)'],
            ['Site-model duration', maxWeeks + ' weeks (not an entitlement)'],
            ['Illustration rate', rate + '% of entered weekly wage'],
            ['Benefit tax treatment', 'Verify current federal and state rules'],
          ].map(([label, value]) => (
            <tr key={label} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '10px 0', color: '#b0b8d1', fontWeight: 500 }}>{label}</td>
              <td style={{ padding: '10px 0', fontWeight: 700, color: '#e8edf8' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e8edf8', marginBottom: 12 }}>
        How this planning estimate works
      </h2>
      <p style={{ fontSize: 15, color: '#b0b8d1', lineHeight: 1.8, marginBottom: 24 }}>
        The estimate shown here multiplies your entered weekly wage by the site-configured {rate}% illustration rate and applies a {'$' + maxWeekly} model cap. Neither value is presented as {stateName}&apos;s official formula or current benefit limit. The calculator does not estimate taxes or withholding. Check the agency’s current rules for benefit calculations and tax treatment.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e8edf8', marginBottom: 12 }}>
        Before you apply
      </h2>
      <ul style={{ paddingLeft: 20, color: '#b0b8d1', fontSize: 15, lineHeight: 2 }}>
        <li>Check your state agency’s rules for covered work, separation, wage, and availability requirements.</li>
        <li>Use the agency’s wage record and official benefit determination for your claim.</li>
        <li>Follow current certification and work-search instructions, if they apply to your program.</li>
      </ul>

      <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 40, paddingTop: 16, borderTop: '1px solid #2a3a6a' }}>
        Disclaimer: This simplified estimate is not an agency determination. Benefit schedules, eligibility, payable weeks, and tax treatment depend on current state rules and your claim. Verify figures with the {stateName} unemployment agency.
      </p>
      {stateSlug === 'pennsylvania' && (
        <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.7 }}>
          Official information: <a href="https://www.pa.gov/agencies/dli/programs-services/unemployment.html" target="_blank" rel="noreferrer" style={{ color: '#7dd3fc' }}>Pennsylvania Department of Labor &amp; Industry — Unemployment Compensation</a>.
        </p>
      )}
    </div>
  );
}