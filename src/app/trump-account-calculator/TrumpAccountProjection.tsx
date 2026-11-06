'use client';

import { useState } from 'react';
import CalculatorResultActions from '@/components/CalculatorResultActions';

type Projection = {
  startingBalance: number;
  years: number;
  annualReturn: number;
  estimatedValue: number;
};

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function TrumpAccountProjection() {
  const [startingBalance, setStartingBalance] = useState('1000');
  const [age, setAge] = useState('0');
  const [annualReturn, setAnnualReturn] = useState('5');
  const [projection, setProjection] = useState<Projection | null>(null);
  const [error, setError] = useState('');

  function calculate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if ([startingBalance, age, annualReturn].some(value => value.trim() === '')) {
      setError('Complete all fields with valid numbers.');
      setProjection(null);
      return;
    }
    const balance = Number(startingBalance);
    const childAge = Number(age);
    const rate = Number(annualReturn);

    if (!Number.isFinite(balance) || balance < 0 || balance > 1000000) {
      setError('Enter a starting balance from $0 to $1,000,000.');
      setProjection(null);
      return;
    }
    if (!Number.isInteger(childAge) || childAge < 0 || childAge > 17) {
      setError('Enter a whole-number age from 0 to 17.');
      setProjection(null);
      return;
    }
    if (!Number.isFinite(rate) || rate < 0 || rate > 15) {
      setError('Enter an assumed annual return from 0% to 15%.');
      setProjection(null);
      return;
    }

    const years = 18 - childAge;
    setProjection({
      startingBalance: balance,
      years,
      annualReturn: rate,
      estimatedValue: balance * (1 + rate / 100) ** years,
    });
    setError('');
  }

  return (
    <section aria-label="Trump Account balance projection" style={{ background: '#101d30', border: '1px solid #34445a', padding: 'clamp(16px,4vw,28px)', marginBottom: 28 }}>
      <h2 style={{ margin: '0 0 8px', fontSize: 22, color: '#fff' }}>Estimate a balance at age 18</h2>
      <p style={{ margin: '0 0 20px', color: '#c4d2e3', fontSize: 16, lineHeight: 1.6 }}>
        Model a starting balance with an assumed annual return. This is a hypothetical projection, not a benefit or investment guarantee.
      </p>
      <form onSubmit={calculate} noValidate>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,190px),1fr))', gap: 16 }}>
          <label style={{ color: '#e2e8f0', fontSize: 16, fontWeight: 600 }}>
            Starting balance ($)
            <input
              aria-label="Starting balance in dollars"
              type="number"
              min="0"
              max="1000000"
              step="0.01"
              value={startingBalance}
              onChange={event => setStartingBalance(event.target.value)}
              style={{ display: 'block', width: '100%', boxSizing: 'border-box', marginTop: 8, padding: 12, background: '#07111f', color: '#fff', border: '1px solid #64748b', fontSize: 16 }}
            />
          </label>
          <label style={{ color: '#e2e8f0', fontSize: 16, fontWeight: 600 }}>
            Child&apos;s age (years)
            <input
              aria-label="Child's age in years"
              type="number"
              min="0"
              max="17"
              step="1"
              value={age}
              onChange={event => setAge(event.target.value)}
              style={{ display: 'block', width: '100%', boxSizing: 'border-box', marginTop: 8, padding: 12, background: '#07111f', color: '#fff', border: '1px solid #64748b', fontSize: 16 }}
            />
          </label>
          <label style={{ color: '#e2e8f0', fontSize: 16, fontWeight: 600 }}>
            Assumed annual return (%)
            <input
              aria-label="Assumed annual return percentage"
              type="number"
              min="0"
              max="15"
              step="0.1"
              value={annualReturn}
              onChange={event => setAnnualReturn(event.target.value)}
              style={{ display: 'block', width: '100%', boxSizing: 'border-box', marginTop: 8, padding: 12, background: '#07111f', color: '#fff', border: '1px solid #64748b', fontSize: 16 }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: 18, padding: '12px 20px', background: '#e8b84b', color: '#07111f', border: '1px solid #e8b84b', fontWeight: 800, fontSize: 16, cursor: 'pointer' }}>
          Calculate projection
        </button>
      </form>

      {error && <p role="alert" style={{ color: '#fecaca', fontSize: 16 }}>{error}</p>}
      {projection && (
        <div aria-live="polite" style={{ marginTop: 20, padding: 20, background: '#07111f', border: '1px solid #52647a' }}>
          <p style={{ margin: '0 0 6px', color: '#c4d2e3', fontSize: 16 }}>
            Estimated balance after {projection.years} years at {projection.annualReturn}% assumed annual return
          </p>
          <p style={{ margin: 0, color: '#e8b84b', fontSize: 'clamp(30px,6vw,42px)', fontWeight: 900 }}>
            {currency.format(projection.estimatedValue)}
          </p>
          <p style={{ margin: '8px 0 0', color: '#c4d2e3', fontSize: 16 }}>
            Starting balance: {currency.format(projection.startingBalance)}. Additional contributions, fees, taxes, and actual investment performance are not modeled.
          </p>
          <CalculatorResultActions
            summary={`Hypothetical Trump Account balance projection\nStarting balance: ${currency.format(projection.startingBalance)}\nProjection period: ${projection.years} years (age 18)\nAssumed annual return: ${projection.annualReturn}%\nEstimated balance: ${currency.format(projection.estimatedValue)}\nThis is not a guaranteed government contribution or investment return. Additional contributions, fees, taxes, eligibility, and account rules are not modeled.`}
            relatedLinks={[
              { href: '/2026-tax-changes', label: '2026 tax changes guide →' },
              { href: '/methodology', label: 'Calculation methodology →' },
            ]}
          />
        </div>
      )}
    </section>
  );
}
