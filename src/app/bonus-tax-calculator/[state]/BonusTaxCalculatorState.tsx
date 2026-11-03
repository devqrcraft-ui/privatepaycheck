'use client';
import { useState } from 'react';
import Link from 'next/link';
import { estimateFederalIncomeTax, type FilingStatus } from '@/lib/paycheck';
import { FICA } from '@/lib/taxRates2026';

interface Props {
  stateName: string;
  stateAbbr: string;
  stateTax: number;
  noStateTax: boolean;
  stateSlug: string;
}

const BG: React.CSSProperties = { minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' };
const CARD: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '28px' };
const LABEL: React.CSSProperties = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' };
const INPUT_S: React.CSSProperties = { width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 14px', color: 'white', fontSize: '16px', boxSizing: 'border-box', outline: 'none' , colorScheme: 'dark' as const };
const ROW: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' };

export default function BonusTaxCalculatorState({ stateName, stateTax, noStateTax }: Props) {
  const [bonus, setBonus] = useState(10000);
  const [salary, setSalary] = useState(75000);
  const [filing, setFiling] = useState<FilingStatus>('single');

  const socialSecurity = Math.min(bonus, Math.max(0, FICA.socialSecurity.cap - salary)) * FICA.socialSecurity.rate;
  const medicare = bonus * FICA.medicare.rate;
  const additionalMedicareThreshold = filing === 'married' ? 250000 : FICA.additionalMedicare.threshold;
  const additionalMedicare =
    Math.max(0, salary + bonus - additionalMedicareThreshold) -
    Math.max(0, salary - additionalMedicareThreshold);
  const additionalMedicareTax = additionalMedicare * FICA.additionalMedicare.rate;
  const fedTax =
    estimateFederalIncomeTax(salary + bonus, filing) -
    estimateFederalIncomeTax(salary, filing);
  const stTax = noStateTax ? 0 : bonus * (stateTax / 100);
  const total = fedTax + stTax + socialSecurity + medicare + additionalMedicareTax;
  const takeHome = bonus - total;
  const effectiveRate = bonus > 0 ? (total / bonus * 100).toFixed(1) : '0.0';

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number) => bonus > 0 ? (n / bonus * 100).toFixed(1) + '%' : '0%';

  return (
    <div style={BG}>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/bonus-tax-calculator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Bonus Tax Calculator</Link>
          <span>/</span>
          <span style={{ color: 'white' }}>{stateName}</span>
        </div>

        {/* Hero */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', marginBottom: '16px', color: '#4ade80' }}>
            <span>●</span>
            <span>UPDATED NOVEMBER 2026 · 2026 TAX ESTIMATE</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4.5vw,48px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>
            {stateName} Bonus Tax
            <br /><span style={{ color: '#F5C842' }}>Calculator 2026</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.75, margin: '0 0 20px' }}>
            {noStateTax
              ? stateName + ' has no state individual income tax — this estimate covers federal income tax and FICA. Free, private, no signup.'
              : 'Estimate federal income tax, an approximate state tax amount, and FICA on your bonus. Actual withholding and final tax depend on your full tax situation.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[' Federal + State Taxes', ' All 50 States', ' No Registration', ' 2026 Tax Rules', ' 100% Private'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '5px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px', marginBottom: '48px' }}>

          {/* Left: Inputs */}
          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#F5C842', marginBottom: '4px' }}>BONUS TAX CALCULATOR</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>2026 IRS RULES · INSTANT RESULTS</div>

            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>Bonus Amount ($)</label>
              <input type="number" value={bonus} onChange={e => setBonus(Math.max(0, Number(e.target.value) || 0))}
                style={INPUT_S} min={0} placeholder="e.g. 10000" />
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>Annual Salary ($)</label>
              <input type="number" value={salary} onChange={e => setSalary(Math.max(0, Number(e.target.value) || 0))}
                style={INPUT_S} min={0} placeholder="e.g. 75000" />
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>Filing Status</label>
              <select value={filing} onChange={e => {
                const value = e.target.value;
                if (value === 'married' || value === 'head') setFiling(value);
                else setFiling('single');
              }}
                style={{...INPUT_S, cursor:'pointer', colorScheme:'dark', color:'#fff', background:'#1e2a4a'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="head">Head of Household</option>
              </select>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>State</label>
              <div style={{ ...INPUT_S, background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontWeight: 700 }}>
                {stateName}{noStateTax ? ' — No State Individual Income Tax' : ` — Approx. ${stateTax}% State-Rate Assumption`}
              </div>
            </div>

            <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Estimated After-Tax Bonus</div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: '#4ade80', marginTop: '4px' }}>{fmt(takeHome)}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Estimated Tax Rate</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: '#F5C842', marginTop: '4px' }}>{effectiveRate}%</div>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: '10px 0 0' }}>
              This estimates annual tax liability, not paycheck withholding. Actual withholding and final tax can differ.
            </p>
          </div>

          {/* Right: Breakdown */}
          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#F5C842', marginBottom: '4px' }}>TAX BREAKDOWN</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>{stateName.toUpperCase()} · 2026 IRS</div>

            <div style={ROW}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Gross Bonus</span>
              <span style={{ fontWeight: 700, fontSize: '15px' }}>{fmt(bonus)}</span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Federal Income Tax</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>Estimated incremental federal income tax</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(fedTax)} <span style={{ fontSize: '12px', opacity: 0.7 }}>({pct(fedTax)})</span></span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{stateName} State-Rate Estimate</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{noStateTax ? 'No state individual income tax' : `Approximation at ${stateTax}% configured state rate`}</div>
              </div>
              <span style={noStateTax ? { color: '#4ade80', fontWeight: 600 } : { color: '#f87171', fontWeight: 600 }}>
                {noStateTax ? '$0' : '−' + fmt(stTax) + ' '}
                {!noStateTax && <span style={{ fontSize: '12px', opacity: 0.7 }}>({pct(stTax)})</span>}
              </span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Social Security</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{`${(FICA.socialSecurity.rate * 100).toFixed(1)}% up to $${FICA.socialSecurity.cap.toLocaleString()}`}</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(socialSecurity)}</span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Medicare</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{`${(FICA.medicare.rate * 100).toFixed(2)}% all wages`}</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(medicare)}</span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Additional Medicare</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{`${(FICA.additionalMedicare.rate * 100).toFixed(1)}% above the ${fmt(additionalMedicareThreshold)} filing-status threshold`}</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(additionalMedicareTax)}</span>
            </div>
            <div style={{ ...ROW, borderBottom: 'none' }}>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Total Taxes</span>
              <span style={{ color: '#f87171', fontWeight: 700, fontSize: '15px' }}>−{fmt(total)} <span style={{ fontSize: '12px', opacity: 0.7 }}>({pct(total)})</span></span>
            </div>

            <div style={{ margin: '20px 0 0', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, fontSize: '15px' }}>Take-Home Bonus</span>
              <span style={{ fontWeight: 900, fontSize: '24px', color: '#4ade80' }}>{fmt(takeHome)}</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px', marginBottom: '48px' }}>
          {[
            { icon: '', title: '100% Private', desc: 'All calculations happen in your browser. We never see your income or results.' },
            { icon: '', title: '2026 Tax Estimates', desc: 'Uses 2026 federal tax brackets and payroll-tax limits. State tax is an approximation based on the configured state rate.' },
            { icon: '', title: 'Instant Results', desc: 'See an estimate of incremental federal tax, state tax, Social Security, Medicare, and additional Medicare.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: '#F5C842', marginBottom: '8px', fontSize: '15px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* SEO Article */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '36px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>How Are Bonuses Taxed in {stateName}?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
            Bonuses are generally supplemental wages. This calculator estimates the change in annual federal income-tax liability by comparing 2026 tax on salary plus bonus with tax on salary alone. This is not a paycheck withholding calculation.
          </p>
          {!noStateTax && (
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
              The state portion is an approximation that applies the configured <strong style={{ color: 'white' }}>{stateTax}%</strong> state rate to the bonus. Actual state tax and withholding depend on state rules, your other income, and elections.
            </p>
          )}
          {noStateTax && (
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
              <strong style={{ color: '#4ade80' }}>{stateName} has no state individual income tax</strong>. Federal income tax and FICA (Social Security and Medicare) may still apply.
            </p>
          )}
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '28px 0 14px' }}>2026 Federal Bonus Tax Rates</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '24px' }}>
            For separately identified supplemental wages, employers may generally use the IRS optional flat withholding rate of <strong style={{ color: 'white' }}>22%</strong> (37% on supplemental wages over $1 million). This calculator does not calculate that withholding; it estimates the additional annual federal income-tax liability by applying 2026 brackets to salary plus bonus. Withholding is a prepayment, and actual tax is determined on the annual return.
          </p>
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '28px 0 14px' }}>{stateName} Bonus Tax by Amount (2026)</h2>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480, fontSize: 14 }}>
            <thead><tr style={{ background: 'rgba(245,200,66,0.08)' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,255,255,0.7)' }}>Bonus</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,255,255,0.7)' }}>Federal Income-Tax Estimate</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,255,255,0.7)' }}>{stateName} State Tax</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,255,255,0.7)' }}>Payroll-Tax Estimate</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', color: '#F5C842', fontWeight: 700 }}>Estimated Take-Home</th>
            </tr></thead>
            <tbody>
              {[5000, 10000, 25000, 50000, 100000].map((amt) => {
                const exSalary = 75000;
                const exFed = estimateFederalIncomeTax(exSalary + amt, 'single') - estimateFederalIncomeTax(exSalary, 'single');
                const exState = noStateTax ? 0 : amt * (stateTax / 100);
                const exSocialSecurity = Math.min(amt, Math.max(0, FICA.socialSecurity.cap - exSalary)) * FICA.socialSecurity.rate;
                const exMedicare = amt * FICA.medicare.rate;
                const exAdditionalMedicare = Math.max(0, exSalary + amt - FICA.additionalMedicare.threshold) * FICA.additionalMedicare.rate;
                const exFica = exSocialSecurity + exMedicare + exAdditionalMedicare;
                const exTakeHome = amt - exFed - exState - exFica;
                return (
                  <tr key={amt} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 600 }}>${amt.toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.65)' }}>${Math.round(exFed).toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.65)' }}>{noStateTax ? '$0' : '$' + Math.round(exState).toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.65)' }}>${Math.round(exFica).toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700, color: '#F5C842' }}>${Math.round(exTakeHome).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Examples assume a $75,000 base salary and single filing status. Federal tax is an annual liability estimate; the state amount applies the configured rate as an approximation. Actual withholding and tax liability vary with your circumstances.</p>
          <section aria-label="Sources and assumptions" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, lineHeight: 1.8, marginBottom: 24 }}>
            <h3 style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>Sources and assumptions</h3>
            <p>The estimate assumes the entered annual salary is the only other wage income and is counted before the bonus against the Social Security wage cap. Additional Medicare tax uses the selected filing-status threshold; a spouse's wages are not included. State tax uses the displayed configured rate as a simplified estimate, and local taxes, credits, and payroll elections are not modeled.</p>
            <ul>
              <li><a href="https://www.irs.gov/publications/p15" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>IRS Publication 15 (supplemental-wage withholding and payroll taxes)</a></li>
              <li><a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noreferrer" style={{ color: '#F5C842' }}>IRS Revenue Procedure 2025-32 (2026 federal tax adjustments)</a></li>
            </ul>
          </section>
          <Link href="/bonus-tax-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '8px', padding: '10px 18px', color: '#F5C842', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
            Compare bonus taxes across all 50 states →
          </Link>
        </div>
      </div>
    </div>
  );
}
