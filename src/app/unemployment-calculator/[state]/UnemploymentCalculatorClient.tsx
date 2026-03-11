'use client';
import { useState, useEffect } from 'react';

interface Props {
  stateName: string;
  maxWeekly: number;
  minWeekly: number;
  maxWeeks: number;
  baseRate: number;
  note?: string;
}

export default function UnemploymentCalculatorClient({ stateName, maxWeekly, minWeekly, maxWeeks, baseRate, note }: Props) {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [result, setResult] = useState<{
    weekly: number; total: number; months: number; biweekly: number;
  } | null>(null);

  useEffect(() => {
    const w1 = parseFloat(q1) || 0;
    const w2 = parseFloat(q2) || 0;
    if (w1 <= 0 && w2 <= 0) { setResult(null); return; }
    const totalBase = w1 + w2;
    const avgWeekly = totalBase > 0 ? totalBase / 26 : Math.max(w1, w2) / 13;
    let weekly = Math.round(avgWeekly * baseRate);
    weekly = Math.max(minWeekly, Math.min(maxWeekly, weekly));
    const total = weekly * maxWeeks;
    const months = Math.round((maxWeeks / 4.33) * 10) / 10;
    const biweekly = weekly * 2;
    setResult({ weekly, total, months, biweekly });
  }, [q1, q2, baseRate, minWeekly, maxWeekly, maxWeeks]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '16px', padding: '28px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>
        Calculate Your {stateName} Unemployment Benefit
      </h2>
      <p style={{ fontSize: '13px', opacity: 0.55, textAlign: 'center', marginBottom: '24px', lineHeight: 1.6 }}>
        {note || `Enter your earnings from your two highest-earning quarters in the last 18 months.`}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px', marginBottom: '20px' }}>
        {[
          { label: 'Highest Quarter Earnings ($)', value: q1, set: setQ1, placeholder: '15000', hint: 'Your best 3-month earnings' },
          { label: '2nd Highest Quarter ($)', value: q2, set: setQ2, placeholder: '13000', hint: 'Second best 3-month earnings' },
        ].map(f => (
          <div key={f.label}>
            <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', display: 'block' }}>{f.label}</label>
            <input type="number" value={f.value} onChange={e => f.set(e.target.value)} placeholder={f.placeholder}
              style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '11px 14px', color: 'white', fontSize: '15px', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }} />
            <div style={{ fontSize: '11px', opacity: 0.4, marginTop: '4px' }}>{f.hint}</div>
          </div>
        ))}
      </div>
      {result ? (
        <div style={{ background: 'linear-gradient(135deg,rgba(74,222,128,0.15),rgba(99,102,241,0.1))', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>Estimated Weekly Benefit · {stateName}</div>
            <div style={{ fontSize: '44px', fontWeight: 900, color: '#4ade80', lineHeight: 1 }}>{fmt(result.weekly)}</div>
            <div style={{ fontSize: '14px', opacity: 0.6, marginTop: '6px' }}>per week</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '12px', marginBottom: '16px' }}>
            {[
              { label: 'Every 2 Weeks', value: fmt(result.biweekly), color: '#818cf8', icon: '📅' },
              { label: 'Max Duration', value: `${maxWeeks} weeks`, color: '#fbbf24', icon: '⏱️' },
              { label: `~${result.months} Months`, value: 'of benefits', color: '#f472b6', icon: '📆' },
              { label: 'Max Total', value: fmt(result.total), color: '#4ade80', icon: '💰' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', marginBottom: '4px' }}>{s.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '16px', color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '11px', opacity: 0.5, marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '10px', padding: '12px 16px' }}>
            <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '6px' }}>📊 {stateName} Benefit Range</div>
            {[
              { label: 'Minimum weekly', value: fmt(minWeekly), color: '#fbbf24' },
              { label: 'Maximum weekly', value: fmt(maxWeekly), color: '#4ade80' },
              { label: 'Your estimate', value: fmt(result.weekly) + '/week', color: '#a5b4fc' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginTop: i > 0 ? '4px' : 0 }}>
                <span style={{ opacity: 0.7 }}>{r.label}</span>
                <strong style={{ color: r.color }}>{r.value}</strong>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '11px', opacity: 0.35, textAlign: 'center', marginTop: '12px', lineHeight: 1.6 }}>
            Estimate based on {Math.round(baseRate * 100)}% of average weekly wage. Actual benefit set by {stateName} DOL.
          </p>
        </div>
      ) : (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📋</div>
          Enter your quarterly earnings above to estimate your weekly benefit
          <div style={{ fontSize: '12px', opacity: 0.5, marginTop: '8px' }}>{stateName} pays up to {fmt(maxWeekly)}/week for {maxWeeks} weeks</div>
        </div>
      )}
      <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.3, marginTop: '12px' }}>🔒 All calculations happen in your browser · No data stored</p>
    </div>
  );
}
