'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import CalculatorResultActions from '@/components/CalculatorResultActions';

interface Props {
  stateName: string;
  stateSlug: string;
  hasDoubleTime: boolean;
  hasDailyOT: boolean;
  dailyOTHours?: number;
}

interface Estimate {
  regularPay: number;
  overtimeHours: number;
  overtimeRate: number;
  overtimePay: number;
  totalPay: number;
}

export default function OvertimeCalculatorWidget({
  stateName,
  stateSlug,
  hasDoubleTime,
  hasDailyOT,
  dailyOTHours,
}: Props) {
  const [hourlyRate, setHourlyRate] = useState('25');
  const [regularHours, setRegularHours] = useState('40');
  const [totalHours, setTotalHours] = useState('48');
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [error, setError] = useState('');

  const money = (value: number) =>
    value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const rate = Number(hourlyRate);
    const regular = Number(regularHours);
    const total = Number(totalHours);

    if (!Number.isFinite(rate) || rate <= 0 || !Number.isFinite(regular) || regular <= 0 || regular > 168 ||
        !Number.isFinite(total) || total < 0 || total > 168) {
      setEstimate(null);
      setError('Enter an hourly rate greater than zero and weekly hours from 0 to 168.');
      return;
    }

    const overtimeHours = Math.max(0, total - regular);
    const regularPay = Math.min(total, regular) * rate;
    const overtimeRate = rate * 1.5;
    const overtimePay = overtimeHours * overtimeRate;
    setEstimate({ regularPay, overtimeHours, overtimeRate, overtimePay, totalPay: regularPay + overtimePay });
    setError('');
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    minHeight: 46,
    background: '#1e2a4a',
    border: '1px solid rgba(245,200,66,0.3)',
    borderRadius: 8,
    padding: '10px 12px',
    color: 'white',
    fontSize: 16,
    boxSizing: 'border-box',
    colorScheme: 'dark',
  };

  return (
    <section aria-label={`${stateName} weekly overtime calculator`} style={{
      width: '100%',
      maxWidth: 900,
      margin: '0 auto',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(245,200,66,0.32)',
      borderRadius: 14,
      padding: 'clamp(12px, 3vw, 24px)',
    }}>
      <p style={{ textAlign: 'center', color: '#c4d2e3', fontSize: 16, lineHeight: 1.6, margin: '0 0 18px' }}>
        Estimate weekly pay using your regular weekly hours and a 1.5× overtime rate.
      </p>
      <form onSubmit={calculate}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: 14 }}>
          <div>
            <label htmlFor={`ot-rate-${stateSlug}`} style={{ display: 'block', color: '#c4d2e3', fontSize: 16, marginBottom: 6 }}>Regular hourly rate ($)</label>
            <input id={`ot-rate-${stateSlug}`} type="number" min="0.01" step="0.01" required value={hourlyRate}
              onChange={event => { setHourlyRate(event.target.value); setEstimate(null); }} style={inputStyle} />
          </div>
          <div>
            <label htmlFor={`ot-regular-${stateSlug}`} style={{ display: 'block', color: '#c4d2e3', fontSize: 16, marginBottom: 6 }}>Regular hours per week</label>
            <input id={`ot-regular-${stateSlug}`} type="number" min="0.01" max="168" step="0.01" required value={regularHours}
              onChange={event => { setRegularHours(event.target.value); setEstimate(null); }} style={inputStyle} />
          </div>
          <div>
            <label htmlFor={`ot-total-${stateSlug}`} style={{ display: 'block', color: '#c4d2e3', fontSize: 16, marginBottom: 6 }}>Total hours worked per week</label>
            <input id={`ot-total-${stateSlug}`} type="number" min="0" max="168" step="0.01" required value={totalHours}
              onChange={event => { setTotalHours(event.target.value); setEstimate(null); }} style={inputStyle} />
          </div>
        </div>
        <button type="submit" style={{
          width: '100%',
          minHeight: 48,
          marginTop: 16,
          padding: '12px 16px',
          border: 0,
          borderRadius: 8,
          background: '#F5C842',
          color: '#091526',
          fontSize: 16,
          fontWeight: 800,
          cursor: 'pointer',
        }}>
          Calculate weekly overtime pay
        </button>
      </form>

      {error && <p role="alert" style={{ color: '#fca5a5', fontSize: 14, margin: '12px 0 0' }}>{error}</p>}

      {estimate && (
        <div style={{ marginTop: 18, border: '1px solid rgba(245,200,66,0.3)', borderRadius: 10, padding: 16, background: 'rgba(245,200,66,0.06)' }}>
          <h2 style={{ color: '#F5C842', fontSize: 18, margin: '0 0 12px' }}>{stateName} estimated weekly pay</h2>
          {[
            ['Regular pay', money(estimate.regularPay)],
            ['Overtime hours', `${estimate.overtimeHours.toFixed(2)} hours`],
            ['Overtime rate (1.5×)', money(estimate.overtimeRate)],
            ['Overtime pay', money(estimate.overtimePay)],
            ['Estimated gross pay', money(estimate.totalPay)],
          ].map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 16 }}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <p style={{ color: '#c4d2e3', fontSize: 16, lineHeight: 1.6, margin: '12px 0 0' }}>
            Weekly estimate only. {hasDailyOT || hasDoubleTime
              ? `State daily overtime${hasDoubleTime ? ' and double-time' : ''} rules are not modeled; ${hasDailyOT && dailyOTHours ? `daily overtime may begin after ${dailyOTHours} hours.` : 'check applicable state rules.'}`
              : 'This does not model state-specific daily overtime rules, taxes, or payroll deductions.'}
          </p>
          <CalculatorResultActions
            summary={`2026 ${stateName} weekly overtime estimate\nRegular hourly rate: ${money(Number(hourlyRate))}\nRegular hours entered: ${Number(regularHours)}\nTotal hours worked: ${Number(totalHours)}\nOvertime hours: ${estimate.overtimeHours.toFixed(2)}\nOvertime rate: ${money(estimate.overtimeRate)}\nEstimated weekly gross pay: ${money(estimate.totalPay)}\nWeekly estimate using 1.5× overtime only; state daily overtime and double-time rules, taxes, and payroll deductions are not modeled.`}
            relatedLinks={[
              { href: `/hourly-paycheck-calculator/${stateSlug}`, label: `${stateName} hourly paycheck →` },
              { href: '/no-tax-on-overtime-deduction', label: 'Overtime tax deduction →' },
              { href: '/federal-paycheck-calculator', label: 'Federal paycheck calculator →' },
            ]}
          />
        </div>
      )}
      <p style={{ textAlign: 'center', color: '#b8c8d8', fontSize: 16, lineHeight: 1.6, margin: '14px 0 0' }}>
        Your inputs stay in this browser. Overtime thresholds depend on your job and state; verify eligibility with the appropriate labor agency.
      </p>
    </section>
  );
}
