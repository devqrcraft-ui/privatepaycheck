'use client';
import { useState } from 'react';
import Link from 'next/link';

function federalTax(income: number, filing: string): number {
  const brackets = filing === 'married'
    ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
    : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets as [number, number][]) {
    if (income <= prev) break;
    tax += (Math.min(income, limit as number) - prev) * rate;
    prev = limit as number;
  }
  return tax;
}

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

export default function BonusTaxCalculatorState({ stateName, stateTax, noStateTax, stateSlug }: Props) {
  const [bonus, setBonus] = useState(10000);
  const [salary, setSalary] = useState(75000);
  const [filing, setFiling] = useState('single');

  const fica = Math.min(bonus, Math.max(0, 168600 - salary)) * 0.062 + bonus * 0.0145;
  const fedTax = federalTax(salary + bonus, filing) - federalTax(salary, filing);
  const stTax = bonus * (stateTax / 100);
  const total = fedTax + stTax + fica;
  const takeHome = bonus - total;
  const effectiveRate = bonus > 0 ? (total / bonus * 100).toFixed(1) : '0.0';

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number) => bonus > 0 ? (n / bonus * 100).toFixed(1) + '%' : '0%';

  return (
    <main style={BG}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        'name': stateName + ' Bonus Tax Calculator 2026',
        'url': 'https://privatepaycheck.com/bonus-tax-calculator/' + stateSlug,
        'description': 'Calculate how much of your bonus you keep in ' + stateName + ' after federal, state, and FICA taxes. Free, private, no signup.',
        'applicationCategory': 'FinanceApplication', 'operatingSystem': 'Any',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
      }) }} />

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
            <span>UPDATED JANUARY 2026 · IRS COMPLIANT</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4.5vw,48px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>
            {stateName} Bonus Tax
            <br /><span style={{ color: '#F5C842' }}>Calculator 2026</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.75, margin: '0 0 20px' }}>
            {noStateTax
              ? stateName + ' has no state income tax — only federal taxes and FICA apply to your bonus. Free, private, no signup.'
              : 'Calculate exactly how much of your bonus you keep in ' + stateName + ' after federal taxes, ' + stateTax + '% state tax, and FICA. No data stored.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['✓ Federal + State Taxes', '✓ All 50 States', '✓ No Registration', '✓ 2026 Tax Rules', '✓ 100% Private'].map(tag => (
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
              <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}
                style={INPUT_S} min={0} placeholder="e.g. 10000" />
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>Annual Salary ($)</label>
              <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))}
                style={INPUT_S} min={0} placeholder="e.g. 75000" />
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>Filing Status</label>
              <select value={filing} onChange={e => setFiling(e.target.value)}
                style={{ ...INPUT_S, cursor: 'pointer' }}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={LABEL}>State</label>
              <div style={{ ...INPUT_S, background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontWeight: 700 }}>
                {stateName}{noStateTax ? ' — No State Tax' : ' — ' + stateTax + '% State Tax'}
              </div>
            </div>

            <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Take-Home Bonus</div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: '#4ade80', marginTop: '4px' }}>{fmt(takeHome)}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tax Rate</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: '#F5C842', marginTop: '4px' }}>{effectiveRate}%</div>
              </div>
            </div>
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
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>Aggregate method</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(fedTax)} <span style={{ fontSize: '12px', opacity: 0.7 }}>({pct(fedTax)})</span></span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{stateName} State Tax</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{noStateTax ? 'No state income tax' : stateTax + '% flat rate'}</div>
              </div>
              <span style={noStateTax ? { color: '#4ade80', fontWeight: 600 } : { color: '#f87171', fontWeight: 600 }}>
                {noStateTax ? '$0' : '−' + fmt(stTax) + ' '}
                {!noStateTax && <span style={{ fontSize: '12px', opacity: 0.7 }}>({pct(stTax)})</span>}
              </span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Social Security</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>6.2% up to $168,600</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(Math.min(bonus, Math.max(0, 168600 - salary)) * 0.062)} <span style={{ fontSize: '12px', opacity: 0.7 }}></span></span>
            </div>
            <div style={ROW}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Medicare</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>1.45% all wages</div>
              </div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>−{fmt(bonus * 0.0145)}</span>
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
            { icon: '🔒', title: '100% Private', desc: 'All calculations happen in your browser. We never see your income or results.' },
            { icon: '🏛️', title: 'IRS Compliant 2026', desc: 'Updated with official 2026 federal tax brackets, FICA rates, and state income tax rates.' },
            { icon: '⚡', title: 'Instant Results', desc: 'No waiting. See your exact take-home broken down by federal, state, Social Security, and Medicare.' },
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
            In {stateName}, bonuses are classified as supplemental wages by the IRS. Federal taxes are calculated using the <strong style={{ color: 'white' }}>aggregate method</strong> — your bonus is added to your annual salary to determine your marginal tax bracket, which is more accurate than the flat 22% withholding method.
          </p>
          {!noStateTax && (
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
              {stateName} withholds approximately <strong style={{ color: 'white' }}>{stateTax}%</strong> state income tax on supplemental wages including bonuses. This is in addition to federal income tax and FICA.
            </p>
          )}
          {noStateTax && (
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
              <strong style={{ color: '#4ade80' }}>{stateName} has no state income tax</strong> — one of only 9 states with this benefit. Your bonus is only subject to federal income tax and FICA (Social Security + Medicare).
            </p>
          )}
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '28px 0 14px' }}>2026 Federal Bonus Tax Rates</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '24px' }}>
            The IRS optional flat supplemental withholding rate for 2026 is <strong style={{ color: 'white' }}>22%</strong> for bonuses under $1 million. However, using the aggregate method (as this calculator does), your effective federal rate depends on your total income and filing status — it may be higher or lower than 22%.
          </p>
          <Link href="/bonus-tax-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '8px', padding: '10px 18px', color: '#F5C842', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
            Compare bonus taxes across all 50 states →
          </Link>
        </div>
      </div>
    </main>
  );
}
