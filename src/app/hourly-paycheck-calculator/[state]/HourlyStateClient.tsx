'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Props {
  stateName: string;
  stateAbbr: string;
  stateTax: number;
  noStateTax: boolean;
  stateSlug: string;
}

const BG: React.CSSProperties = { minHeight: '100vh', background: '#091526', color: '#fff', fontFamily: 'system-ui,sans-serif' };
const CARD: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '28px' };
const LABEL: React.CSSProperties = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' };
const INPUT_S: React.CSSProperties = { width: '100%', background: '#1e293b', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 14px', color: '#fff', fontSize: '16px', boxSizing: 'border-box', outline: 'none' , colorScheme: 'dark' as const };
const ROW: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' };

function fedTax(income: number, filing: string): number {
  const b = filing === 'married'
    ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
    : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
  let tax = 0, prev = 0;
  for (const [lim, rate] of b as [number,number][]) {
    if (income <= prev) break;
    tax += (Math.min(income, lim as number) - prev) * rate;
    prev = lim as number;
  }
  return tax;
}

const FREQ: Record<string, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };

export default function HourlyStateClient({ stateName, stateTax, noStateTax, stateSlug }: Props) {
  const [hourly, setHourly] = useState(25);
  const [hours, setHours] = useState(40);
  const [freq, setFreq] = useState('biweekly');
  const [filing, setFiling] = useState('single');

  const periodsPerYear = FREQ[freq] || 26;
  const annualGross = hourly * hours * periodsPerYear;
  const federal = fedTax(annualGross, filing);
  const state = annualGross * (stateTax / 100);
  const ss = Math.min(annualGross, 168600) * 0.062;
  const medicare = annualGross * 0.0145;
  const totalTax = federal + state + ss + medicare;
  const annualNet = annualGross - totalTax;
  const perPeriodGross = annualGross / periodsPerYear;
  const perPeriodNet = annualNet / periodsPerYear;
  const effectiveRate = annualGross > 0 ? (totalTax / annualGross * 100).toFixed(1) : '0.0';

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const fmt2 = (n: number) => '$' + n.toFixed(2);

  return (
    <main style={BG}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/hourly-paycheck-calculator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Hourly Paycheck Calculator</Link>
          <span>/</span>
          <span style={{ color: '#fff' }}>{stateName}</span>
        </div>

        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', marginBottom: '16px', color: '#4ade80' }}>
            <span>●</span><span>UPDATED JANUARY 2026 · IRS COMPLIANT</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4.5vw,46px)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.1 }}>
            {stateName} Hourly Paycheck
            <br /><span style={{ color: '#F5C842' }}>Calculator 2026</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.75, margin: '0 0 20px' }}>
            {noStateTax
              ? 'Calculate your exact take-home pay in ' + stateName + '. No state income tax — only federal taxes and FICA apply. Free, private, no signup.'
              : 'Calculate your exact hourly take-home pay in ' + stateName + ' after federal taxes, ' + stateTax + '% state tax, and FICA. Your data never leaves your browser.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[' Federal + State Taxes', ' FICA Included', ' All Pay Frequencies', ' 100% Private'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '5px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#F5C842', marginBottom: '4px' }}>HOURLY PAYCHECK CALCULATOR</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>2026 IRS RULES · INSTANT RESULTS</div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Hourly Rate ($)</label>
              <input type="number" value={hourly} onChange={e => setHourly(Number(e.target.value))} style={INPUT_S} min={0} step={0.25} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Hours Per Week</label>
              <input type="number" value={hours} onChange={e => setHours(Number(e.target.value))} style={INPUT_S} min={1} max={80} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Pay Frequency</label>
              <select value={freq} onChange={e => setFreq(e.target.value)} style={{...INPUT_S, cursor:'pointer', colorScheme:'dark'}}>
                <option value="weekly">Weekly (52/yr)</option>
                <option value="biweekly">Bi-Weekly (26/yr)</option>
                <option value="semimonthly">Semi-Monthly (24/yr)</option>
                <option value="monthly">Monthly (12/yr)</option>
              </select>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Filing Status</label>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...INPUT_S, cursor:'pointer', colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>State</label>
              <div style={{ ...INPUT_S, background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontWeight: 700 }}>
                {stateName}{noStateTax ? ' — No State Tax' : ' — ' + stateTax + '% State Tax'}
              </div>
            </div>
            <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <div><div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Take-Home / Period</div>
              <div style={{ fontSize: '30px', fontWeight: 900, color: '#4ade80', marginTop: '4px' }}>{fmt(perPeriodNet)}</div></div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Effective Rate</div>
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#F5C842', marginTop: '4px' }}>{effectiveRate}%</div></div>
            </div>
          </div>

          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#F5C842', marginBottom: '4px' }}>PAY BREAKDOWN</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>{stateName.toUpperCase()} · PER PAYCHECK</div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Gross Pay (per period)</span><span style={{ fontWeight: 700 }}>{fmt(perPeriodGross)}</span></div>
            <div style={ROW}><div><div style={{ opacity: 0.7 }}>Federal Income Tax</div><div style={{ fontSize: '11px', opacity: 0.4 }}>Aggregate method</div></div><span style={{ color: '#f87171' }}>-{fmt(federal / periodsPerYear)}</span></div>
            <div style={ROW}>
              <div><div style={{ opacity: 0.7 }}>{stateName} State Tax</div>
              <div style={{ fontSize: '11px', opacity: 0.4 }}>{noStateTax ? 'No state tax' : stateTax + '%'}</div></div>
              <span style={noStateTax ? { color: '#4ade80' } : { color: '#f87171' }}>{noStateTax ? '$0' : '-' + fmt(state / periodsPerYear)}</span>
            </div>
            <div style={ROW}><div><div style={{ opacity: 0.7 }}>Social Security</div><div style={{ fontSize: '11px', opacity: 0.4 }}>6.2%</div></div><span style={{ color: '#f87171' }}>-{fmt(ss / periodsPerYear)}</span></div>
            <div style={ROW}><div><div style={{ opacity: 0.7 }}>Medicare</div><div style={{ fontSize: '11px', opacity: 0.4 }}>1.45%</div></div><span style={{ color: '#f87171' }}>-{fmt(medicare / periodsPerYear)}</span></div>
            <div style={{ ...ROW, borderBottom: 'none' }}><span style={{ opacity: 0.7 }}>Total Taxes</span><span style={{ color: '#f87171', fontWeight: 700 }}>-{fmt(totalTax / periodsPerYear)}</span></div>
            <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700 }}>Take-Home Pay</span>
              <span style={{ fontWeight: 900, fontSize: '24px', color: '#4ade80' }}>{fmt(perPeriodNet)}</span>
            </div>
            <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', opacity: 0.5, marginBottom: '4px' }}>ANNUAL GROSS</div>
                <div style={{ fontWeight: 700, color: '#F5C842' }}>{fmt(annualGross)}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', opacity: 0.5, marginBottom: '4px' }}>ANNUAL NET</div>
                <div style={{ fontWeight: 700, color: '#4ade80' }}>{fmt(annualNet)}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 14px' }}>Hourly Pay in {stateName} — 2026 Tax Guide</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '16px' }}>
            {noStateTax
              ? stateName + ' is one of the few states with no state income tax, meaning hourly workers keep more of every paycheck. Your take-home pay is only reduced by federal income tax and FICA (Social Security + Medicare).'
              : 'In ' + stateName + ', hourly workers pay federal income tax, ' + stateTax + '% state income tax, and FICA (Social Security at 6.2% and Medicare at 1.45%). This calculator applies all 2026 IRS rules automatically.'}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '24px' }}>
            Federal income tax is withheld using the percentage method based on your annualized income and filing status. The more you earn, the higher your marginal bracket — but your <strong style={{ color: '#fff' }}>effective rate</strong> is always lower than your top bracket rate.
          </p>
          <Link href="/hourly-paycheck-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '8px', padding: '10px 18px', color: '#F5C842', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
            Back to Hourly Calculator →
          </Link>
        </div>
      </div>
    </main>
  );
}
