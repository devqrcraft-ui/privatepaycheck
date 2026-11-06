'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import CalculatorResultActions from '@/components/CalculatorResultActions';
import { estimatePaycheck, type FilingStatus } from '@/lib/paycheck';

interface Props {
  stateName: string;
  stateAbbr: string;
  noStateTax: boolean;
  stateSlug: string;
  minWage: number;
}

const BG: React.CSSProperties = { minHeight: '100vh', background: '#091526', color: '#fff', fontFamily: 'system-ui,sans-serif' };
const CARD: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '20px' };
const LABEL: React.CSSProperties = { fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.82)', marginBottom: '8px', display: 'block' };
const INPUT_S: React.CSSProperties = { width: '100%', background: '#1e2a4a', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '12px 14px', color: '#fff', fontSize: '18px', boxSizing: 'border-box', colorScheme: 'dark' };
const ROW: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', fontSize: '16px' };
const FREQ: Record<string, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };

export default function HourlyStateClient({ stateName, stateAbbr, noStateTax, stateSlug, minWage }: Props) {
  const [hourly, setHourly] = useState('25');
  const [hours, setHours] = useState('40');
  const [freq, setFreq] = useState('biweekly');
  const [filing, setFiling] = useState('single');
  const [hasCalculated, setHasCalculated] = useState(false);
  const [error, setError] = useState('');
  const periodsPerYear = FREQ[freq];

  const model = useMemo(() => {
    const hourlyValue = Number(hourly);
    const hoursValue = Number(hours);
    if (!Number.isFinite(hourlyValue) || hourlyValue <= 0 ||
      !Number.isFinite(hoursValue) || hoursValue < 1 || hoursValue > 168 ||
      !periodsPerYear) return null;

    const filingStatus: FilingStatus = filing === 'married' ? 'married' : filing === 'hoh' ? 'head' : 'single';
    const annualGross = hourlyValue * hoursValue * 52;
    const estimate = estimatePaycheck({
      annual: annualGross,
      freq: periodsPerYear,
      stateRatePct: 0,
      stateCode: stateAbbr.toLowerCase(),
      filing: filingStatus,
      k401Pct: 0,
    });

    return {
      annualGross,
      estimate,
      annualNet: estimate.net * periodsPerYear,
    };
  }, [filing, hourly, hours, periodsPerYear, stateAbbr]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
  const update = (setter: (value: string) => void) => (value: string) => {
    setter(value);
    setHasCalculated(false);
    setError('');
  };

  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hourlyValue = Number(hourly);
    const hoursValue = Number(hours);
    if (!Number.isFinite(hourlyValue) || hourlyValue <= 0 || hourlyValue > 10000) {
      setError('Enter an hourly rate greater than $0 and no more than $10,000.');
      setHasCalculated(false);
      return;
    }
    if (!Number.isFinite(hoursValue) || hoursValue < 1 || hoursValue > 168) {
      setError('Enter between 1 and 168 hours per week.');
      setHasCalculated(false);
      return;
    }
    if (!periodsPerYear || !model) {
      setError('Choose a valid pay frequency and check your entries.');
      setHasCalculated(false);
      return;
    }
    setError('');
    setHasCalculated(true);
  }

  const result = hasCalculated ? model : null;

  return (
    <div style={BG}>
      <style>{`
        .hourly-state-input:focus-visible,
        .hourly-state-calculate:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
        .hourly-state-calculate:hover { filter: brightness(1.08); }
      `}</style>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 6px' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
          <Link href="/" style={{ color: '#e8b84b' }}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/hourly-paycheck-calculator" style={{ color: '#e8b84b' }}>Hourly Paycheck Calculator</Link>
          <span aria-hidden="true">/</span>
          <span>{stateName}</span>
        </nav>

        <header style={{ marginBottom: '28px' }}>
          <p style={{ color: '#e8b84b', fontSize: '14px', fontWeight: 700, margin: '0 0 10px' }}>2026 ESTIMATE · STATE-SPECIFIC TAX MODEL</p>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.12 }}>
            {stateName} Hourly Paycheck Calculator 2026
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)', maxWidth: '700px', lineHeight: 1.7, margin: 0 }}>
            Estimate take-home pay using modeled 2026 federal, state, and payroll taxes. Results are estimates, not an exact paycheck or tax determination. The {stateName} minimum wage is listed as ${minWage}/hour; local rules may differ.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '16px', marginBottom: '24px' }}>
          <form onSubmit={calculate} style={CARD}>
            <h2 style={{ fontSize: '20px', color: '#e8b84b', margin: '0 0 6px' }}>Estimate your paycheck</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, margin: '0 0 20px' }}>
              Results use annualized gross wages and the selected filing status. Enter gross hours; overtime premiums and pre-tax benefits are not modeled.
            </p>

            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="hourly-rate" style={LABEL}>Hourly rate ($)</label>
              <input className="hourly-state-input" id="hourly-rate" type="number" value={hourly} onChange={event => update(setHourly)(event.target.value)} style={INPUT_S} min="0.01" max="10000" step="0.01" required />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="hours-week" style={LABEL}>Hours per week</label>
              <input className="hourly-state-input" id="hours-week" type="number" value={hours} onChange={event => update(setHours)(event.target.value)} style={INPUT_S} min="1" max="168" step="0.25" required />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="pay-frequency" style={LABEL}>Pay frequency</label>
              <select className="hourly-state-input" id="pay-frequency" value={freq} onChange={event => update(setFreq)(event.target.value)} style={{ ...INPUT_S, cursor: 'pointer' }}>
                <option value="weekly">Weekly (52/year)</option>
                <option value="biweekly">Biweekly (26/year)</option>
                <option value="semimonthly">Semi-monthly (24/year)</option>
                <option value="monthly">Monthly (12/year)</option>
              </select>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="filing-status" style={LABEL}>Federal filing status</label>
              <select className="hourly-state-input" id="filing-status" value={filing} onChange={event => update(setFiling)(event.target.value)} style={{ ...INPUT_S, cursor: 'pointer' }}>
                <option value="single">Single</option>
                <option value="married">Married filing jointly</option>
                <option value="hoh">Head of household</option>
              </select>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>State</label>
              <div style={{ ...INPUT_S, background: 'rgba(232,184,75,0.08)', borderColor: 'rgba(232,184,75,0.45)', color: '#e8b84b', fontWeight: 700 }} aria-label={`Selected state: ${stateName}`}>
                {stateName} — {noStateTax ? 'no broad personal income tax' : 'state-specific tax schedule'}
              </div>
            </div>
            <button className="hourly-state-calculate" type="submit" style={{ width: '100%', padding: '14px 18px', background: '#e8b84b', border: '1px solid #e8b84b', borderRadius: '8px', color: '#07111f', fontSize: '17px', fontWeight: 800, cursor: 'pointer' }}>
              Calculate estimate
            </button>
            {error && <p role="alert" style={{ color: '#fecaca', fontSize: '15px', lineHeight: 1.5, margin: '14px 0 0' }}>{error}</p>}
          </form>

          <section aria-live="polite" aria-label="Paycheck estimate" style={CARD}>
            <h2 style={{ fontSize: '20px', color: '#e8b84b', margin: '0 0 18px' }}>Estimated pay breakdown</h2>
            {!result ? (
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, margin: 0 }}>Enter your details and select “Calculate estimate” to see a modeled result.</p>
            ) : (
              <>
                <div style={{ ...ROW, fontWeight: 700 }}><span>Gross pay per period</span><span>{fmt(result.estimate.gross)}</span></div>
                <div style={ROW}><span>Federal income tax</span><span style={{ color: '#fecaca' }}>-{fmt(result.estimate.fed)}</span></div>
                <div style={ROW}><span>State income and payroll taxes</span><span style={{ color: '#fecaca' }}>-{fmt(result.estimate.state)}</span></div>
                <div style={ROW}><span>Social Security</span><span style={{ color: '#fecaca' }}>-{fmt(result.estimate.ss)}</span></div>
                <div style={ROW}><span>Medicare (additional tax may apply)</span><span style={{ color: '#fecaca' }}>-{fmt(result.estimate.med)}</span></div>
                <div style={{ ...ROW, fontWeight: 700 }}><span>Estimated total taxes</span><span style={{ color: '#fecaca' }}>-{fmt(result.estimate.fed + result.estimate.state + result.estimate.ss + result.estimate.med)}</span></div>
                <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.32)', borderRadius: '10px', padding: '16px', marginTop: '18px' }}>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)' }}>Estimated take-home per period</div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#86efac', marginTop: '4px' }}>{fmt(result.estimate.net)}</div>
                  <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', marginTop: '8px' }}>
                    Effective modeled tax rate: {result.estimate.taxPct.toFixed(1)}%
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '14px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px' }}>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', marginBottom: '5px' }}>Annual gross</div>
                    <strong>{fmt(result.annualGross)}</strong>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px' }}>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', marginBottom: '5px' }}>Annual net estimate</div>
                    <strong>{fmt(result.annualNet)}</strong>
                  </div>
                </div>
                <CalculatorResultActions
                  summary={`${stateName} hourly paycheck estimate (${freq}, ${filing}): gross ${fmt(result.estimate.gross)}, estimated take-home ${fmt(result.estimate.net)} per pay period. Modeled federal, state, and payroll taxes; actual withholding, local taxes, overtime premiums, and pre-tax benefits are not modeled.`}
                  relatedLinks={[
                    { href: '/hourly-paycheck-calculator', label: 'Hourly paycheck calculator' },
                    { href: `/${stateSlug}-paycheck-calculator`, label: `${stateName} paycheck calculator` },
                    { href: `/minimum-wage/${stateSlug}`, label: `${stateName} minimum wage` },
                  ]}
                />
              </>
            )}
          </section>
        </div>

        <section style={{ ...CARD, marginBottom: '24px' }}>
          <h2 style={{ fontSize: '21px', margin: '0 0 12px' }}>How this estimate works</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, margin: '0 0 12px' }}>
            The estimate annualizes hourly wages using your hours and pay frequency, then applies the shared federal, state, Social Security, and Medicare model. {noStateTax
              ? `${stateName} has no broad personal income tax; state payroll programs or local charges may still apply.`
              : `The state estimate uses the modeled ${stateName} tax schedule rather than applying a single flat rate to all wages.`}
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, margin: 0 }}>
            This is not an exact paycheck calculation. Withholding elections, local taxes, deductions and credits, overtime premiums, benefits, and individual circumstances can change actual pay. Head-of-household status is used for the federal estimate; the state model uses its available single or married schedule.
          </p>
        </section>
      </div>
    </div>
  );
}
