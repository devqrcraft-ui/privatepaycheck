'use client';
import { useState } from 'react';
import { estimateIllustrativeWeeklyAmount } from '@/lib/unemployment';

interface Props {
  stateName: string;
  divisor: number;
}

export default function UnemploymentIllustration({ stateName, divisor }: Props) {
  const [wage, setWage] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const highestQuarterWages = Number(wage);
    if (!Number.isFinite(highestQuarterWages) || highestQuarterWages <= 0) {
      setError('Enter valid wages greater than zero for your highest-earning base-period quarter.');
      setResult(null);
      return;
    }

    const estimate = estimateIllustrativeWeeklyAmount(highestQuarterWages, divisor);
    setError('');
    setResult(estimate);
  }

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div style={{ background:'#1a1040', border:'1px solid #F5C84233', borderRadius:12, padding:24, margin:'24px 0', maxWidth:480 }}>
      <h3 style={{ color:'#F5C842', margin:'0 0 4px', fontSize:17, fontWeight:800 }}>{stateName} Unemployment Benefit Estimator</h3>
      <p style={{ color:'#8892b0', fontSize:13, margin:'0 0 18px' }}>
        This site's illustration divides your entered highest-quarter wages by {divisor}. It does not apply a verified current agency benefit schedule or determine eligibility; confirm current rules with your state agency.
      </p>
      <div style={{ marginBottom:12 }}>
        <label htmlFor="tx-highest-quarter-wages" style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>
          Wages in your highest-earning base-period quarter
        </label>
        <input
          id="tx-highest-quarter-wages"
          type="number"
          inputMode="decimal"
          placeholder="e.g. 13,000"
          value={wage}
          onChange={e => setWage(e.target.value)}
          min={0}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'tx-wba-error' : 'tx-wba-note'}
          style={{ width:'100%', padding:'11px 14px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:15, boxSizing:'border-box' }} />
        {error
          ? <p id="tx-wba-error" role="alert" style={{ color:'#fca5a5', fontSize:12, margin:'6px 0 0' }}>{error}</p>
          : <p id="tx-wba-note" style={{ color:'#8892b0', fontSize:11, margin:'6px 0 0' }}>Use wages from the highest quarter in your claim's base period, not your annual salary.</p>}
      </div>
      <button onClick={calculate} style={{ width:'100%', padding:13, background:'#F5C842', color:'#0f0c29', fontWeight:800, fontSize:15, border:'none', borderRadius:8, cursor:'pointer' }}>
        Estimate My Benefits
      </button>
      {result && (
        <div style={{ marginTop:18, borderTop:'1px solid #F5C84222', paddingTop:18 }}>
          <div style={{ background:'#0f0c29', borderRadius:10, padding:14, textAlign:'center', marginBottom:12 }}>
            <div style={{ color:'#8892b0', fontSize:12 }}>ILLUSTRATIVE WEEKLY MODEL AMOUNT</div>
            <div style={{ color:'#F5C842', fontSize:34, fontWeight:900 }}>{fmt(result)}</div>
          </div>
          <p style={{ color:'#8892b0', fontSize:11, margin:0 }}>This arithmetic example is not an official benefit estimate. TWC determines your benefit, eligibility, payable weeks, and withholding options.</p>
        </div>
      )}
    </div>
  );
}
