'use client';
import { useState, useEffect, useRef } from 'react';
import { estimatePaycheck } from '@/lib/paycheck';
import CalculatorResultActions from '@/components/CalculatorResultActions';

interface Props {
  stateName: string;
  stateCode: string;
  noStateTax?: boolean;
}

export default function StateCalcEmbed({ stateName, stateCode, noStateTax = false }: Props) {
  const [salary, setSalary] = useState('');
  const [period, setPeriod] = useState('annual');
  const [filing, setFiling] = useState('single');
  const [error, setError] = useState('');
  const didInit = useRef(false);
  const [result, setResult] = useState<{
    annual:number; takeHome:number; biweekly:number; monthly:number;
    fed:number; ss:number; medicare:number; stateTax:number; eff:string;
  }|null>(null);

  function calculateWithValues(sal: string, per: string, fil: string) {
    let annual = Number(sal.replace(/,/g,''));
    if (!Number.isFinite(annual) || annual <= 0) {
      setError('Enter a valid wage greater than zero.');
      setResult(null);
      return;
    }
    if (per === 'hourly') annual = annual * 40 * 52;
    else if (per === 'monthly') annual = annual * 12;
    else if (per === 'biweekly') annual = annual * 26;

    if (!Number.isFinite(annual)) {
      setError('The annualized wage is outside the supported range.');
      setResult(null);
      return;
    }
    const estimate = estimatePaycheck({
      annual,
      freq: 1,
      stateRatePct: 0,
      stateCode: noStateTax ? undefined : stateCode,
      filing: fil === 'married' ? 'married' : 'single',
      k401Pct: 0,
    });
    const fed = estimate.fed;
    const ss = estimate.ss;
    const medicare = estimate.med;
    const stateTax = estimate.state;
    const total = fed + ss + medicare + stateTax;
    const takeHome = annual - total;
    setError('');
    setResult({ annual, takeHome, biweekly: takeHome/26, monthly: takeHome/12, fed, ss, medicare, stateTax, eff: (total/annual*100).toFixed(1) });
  }

  function calculate() {
    calculateWithValues(salary, period, filing);
  }

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    const params = new URLSearchParams(window.location.search);
    const salaryFromLink = params.get('salary');
    const periodFromLink = params.get('period');
    const filingFromLink = params.get('filing');
    const hadSensitiveParams = ['salary', 'period', 'filing'].some((key) => params.has(key));
    if (hadSensitiveParams) {
      params.delete('salary');
      params.delete('period');
      params.delete('filing');
      const query = params.toString();
      window.history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`);
    }
    if (salaryFromLink && parseFloat(salaryFromLink) > 0) {
      const resolvedPeriod = periodFromLink || 'annual';
      const resolvedFiling = filingFromLink || 'single';
      setSalary(salaryFromLink);
      if (periodFromLink) setPeriod(periodFromLink);
      if (filingFromLink) setFiling(filingFromLink);
      calculateWithValues(salaryFromLink, resolvedPeriod, resolvedFiling);
    }
  }, []);

  const fmt = (n: number) => Math.round(n||0).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});

  return (
    <div style={{ background:'#1a1040', border:'1px solid #F5C84233', borderRadius:12, padding:24, margin:'24px 0', maxWidth:520 }}>
      <h3 style={{ color:'#F5C842', margin:'0 0 4px', fontSize:18, fontWeight:800 }}>{stateName} Paycheck Calculator 2026</h3>
      <p style={{ color:'#8892b0', fontSize:13, margin:'0 0 20px' }}>Free take-home pay estimator — no signup, 100% private</p>

      <div style={{ display:'grid', gap:12 }}>
        <div>
          <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Salary or hourly wage</label>
          <input type="number" placeholder="e.g. 75000" value={salary} onChange={e=>setSalary(e.target.value)} min={0}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'state-calc-error' : undefined}
            style={{ width:'100%', padding:'12px 14px', borderRadius:8, border:'1px solid #F5C84244',
              background:'#0f0c29', color:'#e8edf8', fontSize:15, boxSizing:'border-box' }} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:10 }}>
          <div>
            <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Pay period</label>
            <select value={period} onChange={e=>setPeriod(e.target.value)}
              style={{ width:'100%', padding:'11px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:14 }}>
              <option value="annual">Annual</option>
              <option value="monthly">Monthly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="hourly">Hourly</option>
            </select>
          </div>
          <div>
            <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Filing status</label>
            <select value={filing} onChange={e=>setFiling(e.target.value)}
              style={{ width:'100%', padding:'11px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:14 }}>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
        </div>
        <button onClick={calculate}
          style={{ padding:14, background:'#F5C842', color:'#0f0c29', fontWeight:800, fontSize:16, border:'none', borderRadius:8, cursor:'pointer' }}>
          Calculate Take-Home Pay
        </button>
        {error && <p id="state-calc-error" role="alert" style={{ color:'#fca5a5', fontSize:12, margin:0 }}>{error}</p>}
      </div>

      {result && (
        <div style={{ marginTop:20, borderTop:'1px solid #F5C84233', paddingTop:20 }}>
          <div style={{ background:'#0f0c29', borderRadius:10, padding:16, marginBottom:14, textAlign:'center' }}>
            <div style={{ color:'#8892b0', fontSize:12 }}>BI-WEEKLY TAKE-HOME</div>
            <div style={{ color:'#F5C842', fontSize:34, fontWeight:900 }}>{fmt(result.biweekly)}</div>
            <div style={{ color:'#8892b0', fontSize:12 }}>Annual: {fmt(result.takeHome)} · Effective rate: {result.eff}%</div>
          </div>
          <div style={{ display:'grid', gap:8 }}>
            {[
              ['Federal income tax', result.fed],
              ['Social Security (6.2%)', result.ss],
              ['Medicare (including Additional Medicare Tax if applicable)', result.medicare],
              ...(!noStateTax ? [[stateName + ' state income/payroll taxes', result.stateTax]] : [['State tax', 0]]),
            ].map(([label, val]) => (
              <div key={String(label)} style={{ display:'flex', justifyContent:'space-between', padding:'5px 0', borderBottom:'1px solid #ffffff0a' }}>
                <span style={{ color:'#8892b0', fontSize:13 }}>{label}</span>
                <span style={{ color:'#e8edf8', fontSize:13, fontWeight:700 }}>{fmt(val as number)}</span>
              </div>
            ))}
          </div>
          <p style={{ color:'#8892b0', fontSize:11, margin:'14px 0 8px' }}>Annualized estimate. Local taxes, credits, deductions, and payroll withholding rules are not fully modeled.</p>
          <CalculatorResultActions
            summary={`2026 ${stateName} paycheck estimate (${filing}, income entered as ${period})\nAnnualized take-home: ${fmt(result.takeHome)}\nBi-weekly take-home: ${fmt(result.biweekly)}\nMonthly take-home: ${fmt(result.monthly)}\nFederal tax: ${fmt(result.fed)}\nSocial Security: ${fmt(result.ss)}\nMedicare: ${fmt(result.medicare)}\n${noStateTax ? 'State income tax was not modeled.' : `${stateName} state tax: ${fmt(result.stateTax)}`}\nEffective tax rate: ${result.eff}%\nLocal taxes, credits, and payroll withholding rules are not fully modeled.`}
            relatedLinks={[
              { href: '/1099-paycheck-calculator', label: '1099 tax calculator →' },
              { href: '/w4-withholding-calculator', label: 'Adjust W-4 →' },
            ]}
          />

          <div style={{ marginTop:16, padding:'14px 16px', background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10 }}>
            <div style={{ fontSize:12, color:'#8892b0', marginBottom:6 }}>Self-employed or gig worker?</div>
            <div style={{ fontSize:14, fontWeight:700, color:'#e8edf8', marginBottom:10 }}>Estimate your 1099 self-employment tax free</div>
            <a href="https://gigwisetax.com" target="_blank" rel="noopener noreferrer" style={{ display:'inline-block', background:'#F5C842', color:'#0f0c29', fontWeight:800, fontSize:13, padding:'8px 16px', borderRadius:7, textDecoration:'none' }}>Try GigWiseTax →</a>
          </div>
        </div>
      )}
    </div>
  );
}
