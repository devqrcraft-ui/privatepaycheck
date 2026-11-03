'use client';
import { useState } from 'react';
import CalculatorResultActions from '@/components/CalculatorResultActions';

const formatMoney = (value: number) => '$' + Math.round(value).toLocaleString('en-US');

export default function IlUnemployCalcEmbed() {
  const [firstQuarter, setFirstQuarter] = useState('');
  const [secondQuarter, setSecondQuarter] = useState('');
  const [result, setResult] = useState<null | {
    weekly: number;
  }>(null);
  const [error, setError] = useState('');

  function calculate() {
    const first = Number(firstQuarter);
    const second = Number(secondQuarter);
    if (
      !Number.isFinite(first) ||
      !Number.isFinite(second) ||
      first < 0 ||
      second < 0 ||
      first + second <= 0
    ) {
      setError('Enter valid quarterly wages greater than zero in total.');
      setResult(null);
      return;
    }

    setError('');
    const baseBenefit = ((first + second) / 26) * 0.47;
    setResult({ weekly: Math.min(628, Math.max(51, baseBenefit)) });
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid rgba(245,200,66,0.35)',
    background: 'rgba(15,12,41,0.8)',
    color: '#e8edf8',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: 4,
    display: 'block',
  };

  return (
    <div
      style={{
        background: 'rgba(245,200,66,0.06)',
        border: '1.5px solid rgba(245,200,66,0.3)',
        borderRadius: 14,
        padding: '24px 20px',
        marginBottom: 24,
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 800, color: '#F5C842', margin: '0 0 6px' }}>
        Illinois weekly-benefit estimate
      </h2>
      <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, margin: '0 0 16px' }}>
        Enter wages from the two highest base-period quarters. This estimates
        the 2026 base weekly amount only; it is not an eligibility decision or
        a substitute for your IDES monetary determination.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
        <div>
          <label style={labelStyle} htmlFor="il-first-quarter">
            Higher-wage quarter 1 ($)
          </label>
          <input
            id="il-first-quarter"
            style={inputStyle}
            type="number"
            min={0}
            value={firstQuarter}
            onChange={(event) => setFirstQuarter(event.target.value)}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="il-second-quarter">
            Higher-wage quarter 2 ($)
          </label>
          <input
            id="il-second-quarter"
            style={inputStyle}
            type="number"
            min={0}
            value={secondQuarter}
            onChange={(event) => setSecondQuarter(event.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={calculate}
        style={{
          width: '100%',
          padding: '13px 0',
          borderRadius: 10,
          border: 'none',
          background: 'linear-gradient(135deg,#F5C842,#e0a800)',
          color: '#0f0c29',
          fontWeight: 900,
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        Estimate weekly amount
      </button>
      {error && (
        <p role="alert" style={{ color: '#fca5a5', fontSize: 13 }}>
          {error}
        </p>
      )}
      {result && (
        <div
          aria-live="polite"
          style={{
            marginTop: 16,
            background: 'rgba(15,12,41,0.9)',
            borderRadius: 10,
            padding: '16px 18px',
            border: '1px solid rgba(245,200,66,0.2)',
          }}
        >
          <div style={{ fontSize: 13, color: '#94a3b8' }}>Estimated base weekly benefit</div>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#F5C842' }}>
            {formatMoney(result.weekly)}
          </div>
          <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.6, marginBottom: 0 }}>
            The model applies 47% to the combined wages divided by 26, then
            applies the 2026 base-benefit range of $51–$628. It does not calculate
            dependent allowances or determine eligibility; IDES sets the official amount.
          </p>
          <CalculatorResultActions
            summary={`Illinois unemployment planning estimate\nHigher-wage quarter 1: ${formatMoney(Number(firstQuarter))}\nHigher-wage quarter 2: ${formatMoney(Number(secondQuarter))}\nEstimated base weekly benefit: ${formatMoney(result.weekly)}\nThe model does not calculate dependent allowances or determine eligibility; IDES sets the official amount.`}
            relatedLinks={[
              { href: '/unemployment-calculator', label: 'More unemployment estimates →' },
              { href: '/1099-paycheck-calculator', label: '1099 tax calculator →' },
            ]}
          />
        </div>
      )}
    </div>
  );
}
