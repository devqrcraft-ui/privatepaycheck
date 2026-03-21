'use client';

import Link from 'next/link';
import { useState } from 'react';

// ─── TRS/STRS Pension rates by state (employee contribution %) ──────────────
// Source: each state's official TRS/STRS/PSERS website, 2025-2026
const PENSION_RATE: Record<string, { rate: number; system: string; ss: boolean }> = {
  AL: { rate: 0.075,  system: 'TRS Alabama',       ss: true  },
  AK: { rate: 0.08,   system: 'TRS Alaska',         ss: false },
  AZ: { rate: 0.12,   system: 'ASRS Arizona',       ss: true  },
  AR: { rate: 0.07,   system: 'TRS Arkansas',       ss: true  },
  CA: { rate: 0.1025, system: 'CalSTRS',            ss: false },
  CO: { rate: 0.10,   system: 'PERA Colorado',      ss: false },
  CT: { rate: 0.06,   system: 'TRS Connecticut',    ss: true  },
  DE: { rate: 0.05,   system: 'PHRST Delaware',     ss: true  },
  FL: { rate: 0.03,   system: 'FRS Florida',        ss: true  },
  GA: { rate: 0.06,   system: 'TRS Georgia',        ss: true  },
  HI: { rate: 0.08,   system: 'ERS Hawaii',         ss: true  },
  ID: { rate: 0.0772, system: 'PERSI Idaho',        ss: true  },
  IL: { rate: 0.09,   system: 'TRS Illinois',       ss: false },
  IN: { rate: 0.03,   system: 'TRF Indiana',        ss: true  },
  IA: { rate: 0.0995, system: 'IPERS Iowa',         ss: true  },
  KS: { rate: 0.06,   system: 'KPERS Kansas',       ss: true  },
  KY: { rate: 0.12,   system: 'TRS Kentucky',       ss: false },
  LA: { rate: 0.08,   system: 'TRSL Louisiana',     ss: false },
  ME: { rate: 0.075,  system: 'MainePERS',          ss: false },
  MD: { rate: 0.07,   system: 'MSRPS Maryland',     ss: true  },
  MA: { rate: 0.11,   system: 'MTRS Massachusetts', ss: false },
  MI: { rate: 0.07,   system: 'MPSERS Michigan',    ss: true  },
  MN: { rate: 0.075,  system: 'TRA Minnesota',      ss: true  },
  MS: { rate: 0.09,   system: 'PERS Mississippi',   ss: false },
  MO: { rate: 0.14,   system: 'PSRS Missouri',      ss: false },
  MT: { rate: 0.0795, system: 'TRS Montana',        ss: false },
  NE: { rate: 0.0979, system: 'NPERS Nebraska',     ss: true  },
  NV: { rate: 0.1475, system: 'PERS Nevada',        ss: false },
  NH: { rate: 0.07,   system: 'NHRS New Hampshire', ss: true  },
  NJ: { rate: 0.075,  system: 'TPAF New Jersey',    ss: true  },
  NM: { rate: 0.1075, system: 'NMERB New Mexico',   ss: false },
  NY: { rate: 0.035,  system: 'NYSTRS New York',    ss: true  },
  NC: { rate: 0.06,   system: 'TSERS N. Carolina',  ss: true  },
  ND: { rate: 0.0825, system: 'TFFR N. Dakota',     ss: true  },
  OH: { rate: 0.14,   system: 'STRS Ohio',          ss: false },
  OK: { rate: 0.07,   system: 'TRS Oklahoma',       ss: true  },
  OR: { rate: 0.0895, system: 'PERS Oregon',        ss: false },
  PA: { rate: 0.0825, system: 'PSERS Pennsylvania', ss: true  },
  RI: { rate: 0.099,  system: 'ERSRI Rhode Island', ss: true  },
  SC: { rate: 0.09,   system: 'PEBA S. Carolina',   ss: true  },
  SD: { rate: 0.069,  system: 'SDRS S. Dakota',     ss: true  },
  TN: { rate: 0.05,   system: 'TCRS Tennessee',     ss: true  },
  TX: { rate: 0.08,   system: 'TRS Texas',          ss: false },
  UT: { rate: 0.1,    system: 'URS Utah',           ss: true  },
  VT: { rate: 0.0575, system: 'VSTRS Vermont',      ss: true  },
  VA: { rate: 0.05,   system: 'VRS Virginia',       ss: true  },
  WA: { rate: 0.0728, system: 'DRS Washington',     ss: true  },
  WV: { rate: 0.06,   system: 'CPRB W. Virginia',   ss: true  },
  WI: { rate: 0.067,  system: 'ETF Wisconsin',      ss: true  },
  WY: { rate: 0.145,  system: 'WRS Wyoming',        ss: true  },
  DC: { rate: 0.08,   system: 'DCRB Washington DC', ss: true  },
};

const STATE_TAX: Record<string, number> = {
  AL:0.05, AK:0, AZ:0.025, AR:0.047, CA:0.093, CO:0.044, CT:0.065,
  DE:0.066, FL:0, GA:0.055, HI:0.08, ID:0.058, IL:0.0495, IN:0.0305,
  IA:0.06, KS:0.057, KY:0.045, LA:0.0425, ME:0.075, MD:0.0575,
  MA:0.05, MI:0.0425, MN:0.0985, MS:0.05, MO:0.054, MT:0.069,
  NE:0.0684, NV:0, NH:0, NJ:0.0637, NM:0.059, NY:0.0685, NC:0.0499,
  ND:0.029, OH:0.04, OK:0.0475, OR:0.099, PA:0.0307, RI:0.0599,
  SC:0.07, SD:0, TN:0, TX:0, UT:0.0465, VT:0.0875, VA:0.0575,
  WA:0, WV:0.065, WI:0.0765, WY:0, DC:0.085,
};

const STATE_NAMES: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
  CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',
  IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',
  ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',
  MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',
  WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'Washington DC',
};

// ─── Federal tax brackets 2026 ───────────────────────────────────────────────
function federalTax(income: number, filing: string): number {
  const brackets =
    filing === 'married'
      ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
      : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets as [number, number][]) {
    if (income <= prev) break;
    tax += (Math.min(income, limit) - prev) * rate;
    prev = limit;
  }
  return tax;
}

// ─── SS Fairness Act: new SS benefit estimate ────────────────────────────────
// For states where teachers were NOT covered by SS (ss: false),
// WEP/GPO is fully repealed as of Jan 2025. If user has SS-eligible work history,
// they now receive full SS benefit without WEP reduction.
function estimateSSBenefit(salary: number, ssYears: number): number {
  if (ssYears === 0) return 0;
  // Simplified AIME estimate: avg SS-covered earnings * years / 35
  const aime = (salary * 0.5 * ssYears) / 35 / 12;
  // 2026 bend points: 90% of first $1,226 + 32% of next $6,172
  const pia = aime <= 1226
    ? aime * 0.9
    : 1226 * 0.9 + Math.min(aime - 1226, 6172) * 0.32;
  return Math.round(pia * 12); // annual
}

// ─── Main calculation ────────────────────────────────────────────────────────
function calcTeacher(
  salary: number,
  state: string,
  filing: string,
  ssYears: number,
  age: number,
) {
  const pensionInfo = PENSION_RATE[state] ?? { rate: 0.07, system: 'State TRS', ss: true };
  const pensionDeduction = salary * pensionInfo.rate;

  // Taxable income = salary minus pension (pre-tax) minus standard deduction
  const stdDeduction = filing === 'married' ? 30000 : 15000; // 2026 OBBB increased amounts
  const federalTaxableIncome = Math.max(0, salary - pensionDeduction - stdDeduction);
  const fedTax = federalTax(federalTaxableIncome, filing);

  // FICA: only if SS-covered state, else only Medicare
  const ficaSS = pensionInfo.ss ? Math.min(salary, 176100) * 0.062 : 0;
  const ficaMedicare = salary * 0.0145;
  const fica = ficaSS + ficaMedicare;

  // State tax on (salary - pension)
  const stateTaxableIncome = Math.max(0, salary - pensionDeduction);
  const stateTax = stateTaxableIncome * (STATE_TAX[state] ?? 0);

  // OBBB Senior deduction ($6,000 if age 65+)
  const seniorDeduction = age >= 65 ? Math.min(6000, Math.max(0, 6000 - Math.max(0, salary - 75000) * 0.06)) : 0;
  const seniorTaxSaving = seniorDeduction * (fedTax / Math.max(federalTaxableIncome, 1));

  const totalDeductions = fedTax + stateTax + fica + pensionDeduction - seniorTaxSaving;
  const takeHome = salary - totalDeductions;
  const monthlyTakeHome = takeHome / 12;

  // SS Fairness Act bonus (for non-SS states with prior SS work)
  const ssBenefit = !pensionInfo.ss ? estimateSSBenefit(salary, ssYears) : 0;

  return {
    gross: salary,
    pensionDeduction,
    pensionRate: pensionInfo.rate,
    pensionSystem: pensionInfo.system,
    isSScovered: pensionInfo.ss,
    fedTax,
    stateTax,
    fica,
    seniorDeduction,
    seniorTaxSaving,
    totalDeductions,
    takeHome,
    monthlyTakeHome,
    ssBenefit,
    effectiveRate: totalDeductions / salary,
  };
}

// ─── Styles (identical to BonusCalculatorClient) ─────────────────────────────
const BG = { minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' };
const CARD = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' };
const LABEL = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' as const, marginBottom: '8px' };
const INPUT_S = { width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 14px', color: 'white', fontSize: '16px', boxSizing: 'border-box' as const, outline: 'none' , colorScheme: 'dark' as const };
const SELECT_S = { ...INPUT_S, cursor: 'pointer' , colorScheme: 'dark' as const };

// ─── Component ───────────────────────────────────────────────────────────────
export default function TeacherPaycheckCalculator() {
  const [salary, setSalary]   = useState(58000);
  const [state, setState]     = useState('TX');
  const [filing, setFiling]   = useState('single');
  const [age, setAge]         = useState(42);
  const [ssYears, setSsYears] = useState(0);
  const [showSS, setShowSS]   = useState(false);

  const res = calcTeacher(salary, state, filing, ssYears, age);
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number) => (n * 100).toFixed(1) + '%';
  const stateName = STATE_NAMES[state] ?? state;
  const pensionInfo = PENSION_RATE[state] ?? { rate: 0.07, system: 'State TRS', ss: true };

  return (
    <main style={BG}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        "name":"Teacher Paycheck Calculator 2026 — Take-Home Pay After Pension & Taxes",
        "url":"https://privatepaycheck.com/teacher-paycheck-calculator",
        "description":"Calculate your real teacher take-home pay after TRS/STRS/PSERS pension contributions, federal tax, state tax, and FICA. All 51 states. Updated for SS Fairness Act 2025.",
        "applicationCategory":"FinanceApplication","operatingSystem":"Any",
        "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
      })}} />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#4ade80' }}>
            🏫 Updated for SS Fairness Act 2025 · All 51 States
          </div>
          <h1 style={{ fontSize: 'clamp(24px,5vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15 }}>
            Teacher Paycheck Calculator 2026
            <br /><span style={{ color: '#F5C842' }}>Real Take-Home After Pension & Taxes</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
            See your actual take-home pay after TRS/STRS pension contributions, federal & state taxes. Includes SS Fairness Act impact for non-covered states.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          {/* INPUTS */}
          <div style={CARD}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 20px' }}>Enter Your Details</h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Annual Gross Salary</div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4ade80', fontWeight: 700 }}>$</span>
                <input type="number" value={salary} onChange={e => setSalary(+e.target.value)} style={{ ...INPUT_S, paddingLeft: '28px' }} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>State</div>
              <select value={state} onChange={e => setState(e.target.value)} style={{...SELECT_S, colorScheme:'dark'}}>
                {Object.entries(STATE_NAMES).sort((a,b) => a[1].localeCompare(b[1])).map(([k,v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
                {pensionInfo.system} · {pct(pensionInfo.rate)} employee contribution
                {!pensionInfo.ss && <span style={{ color: '#fbbf24', marginLeft: '6px' }}>⚡ Non-SS state</span>}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Filing Status</div>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...SELECT_S, colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Your Age</div>
              <input type="number" value={age} onChange={e => setAge(+e.target.value)} min={22} max={75} style={INPUT_S} />
              {age >= 65 && (
                <div style={{ fontSize: '11px', color: '#4ade80', marginTop: '4px' }}>
                  ✓ You qualify for the $6,000 OBBB Senior Deduction
                </div>
              )}
            </div>

            {/* SS Fairness Act section — only show for non-SS states */}
            {!pensionInfo.ss && (
              <div style={{ marginTop: '8px' }}>
                <button
                  onClick={() => setShowSS(!showSS)}
                  style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '10px', padding: '10px 14px', color: '#fbbf24', fontSize: '13px', fontWeight: 600, cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                  ⚡ {showSS ? '▼' : '▶'} SS Fairness Act 2025 — WEP/GPO repealed for {stateName} teachers
                </button>
                {showSS && (
                  <div style={{ marginTop: '10px', padding: '12px', background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '10px' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '10px', lineHeight: 1.5 }}>
                      WEP & GPO were fully eliminated Jan 2025. If you also worked in SS-covered jobs, enter your years of SS-covered work below to see your estimated new SS benefit.
                    </div>
                    <div style={LABEL}>Years of SS-covered work (outside teaching)</div>
                    <input type="number" value={ssYears} onChange={e => setSsYears(+e.target.value)} min={0} max={40} style={INPUT_S} placeholder="0" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RESULTS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* Take-home hero */}
            <div style={{ ...CARD, background: 'linear-gradient(135deg,rgba(74,222,128,0.15),rgba(201,168,76,0.15))', border: '1px solid rgba(74,222,128,0.3)', textAlign: 'center', padding: '28px' }}>
              <div style={{ fontSize: '13px', opacity: 0.65, marginBottom: '4px' }}>Monthly Take-Home</div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#4ade80' }}>{fmt(res.monthlyTakeHome)}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, marginTop: '4px' }}>
                {fmt(res.takeHome)}/year · {pct(1 - res.effectiveRate)} of gross
              </div>
              {res.seniorDeduction > 0 && (
                <div style={{ marginTop: '10px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '8px', padding: '6px 10px', fontSize: '12px', color: '#4ade80' }}>
                  ✓ Includes ${Math.round(res.seniorTaxSaving).toLocaleString()} saved via $6,000 Senior Deduction
                </div>
              )}
            </div>

            {/* Breakdown */}
            <div style={CARD}>
              <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '14px', opacity: 0.7 }}>Paycheck Breakdown</div>
              {[
                { label: 'Gross Salary',                              value: res.gross,            color: 'rgba(255,255,255,0.9)', plus: true },
                { label: `${res.pensionSystem} (${pct(res.pensionRate)})`, value: -res.pensionDeduction, color: '#f87171' },
                { label: 'Federal Income Tax',                        value: -res.fedTax,          color: '#fb923c' },
                { label: `State Tax (${stateName})`,                  value: -res.stateTax,        color: '#fbbf24' },
                { label: `FICA (${res.isSScovered ? 'SS + Medicare' : 'Medicare only'})`, value: -res.fica, color: '#e879f9' },
                ...(res.seniorDeduction > 0 ? [{ label: 'OBBB Senior Deduction Savings', value: res.seniorTaxSaving, color: '#4ade80' }] : []),
                { label: 'Annual Take-Home',                          value: res.takeHome,         color: '#4ade80', bold: true },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '13px', opacity: row.bold ? 1 : 0.7, fontWeight: row.bold ? 700 : 400 }}>{row.label}</span>
                  <span style={{ color: row.color, fontWeight: row.bold ? 700 : 600, fontSize: row.bold ? '15px' : '13px' }}>
                    {row.value < 0 ? '-' + fmt(Math.abs(row.value)) : fmt(row.value)}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <span style={{ fontSize: '13px', opacity: 0.5 }}>Effective Total Rate: </span>
                <span style={{ color: '#e879f9', fontWeight: 700 }}>{pct(res.effectiveRate)}</span>
              </div>
            </div>

            {/* SS Fairness Act result */}
            {res.ssBenefit > 0 && (
              <div style={{ ...CARD, background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.25)' }}>
                <div style={{ fontSize: '12px', color: '#fbbf24', fontWeight: 700, marginBottom: '6px' }}>⚡ SS Fairness Act 2025 Impact</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', opacity: 0.7 }}>Estimated new SS benefit</span>
                  <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '18px' }}>+{fmt(res.ssBenefit)}/yr</span>
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
                  WEP/GPO fully repealed. Apply at ssa.gov to claim retroactive payments from Jan 2024.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INFO CARDS */}
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
          {[
            { icon: '🏛️', title: 'Why Your Pension Rate Matters', body: `In Ohio, STRS takes 14% before taxes. In Florida, FRS takes only 3%. That single difference on a $60k salary means $6,600 less take-home before any taxes are calculated. Most salary comparison sites ignore this entirely.` },
            { icon: '⚡', title: 'SS Fairness Act 2025', body: 'WEP and GPO are fully repealed as of January 2025. Teachers in TX, CA, IL, OH, MA and 11 other states who also worked SS-covered jobs can now claim full SS benefits. File at ssa.gov — retroactive to Jan 2024.' },
            { icon: '💡', title: 'The $6,000 Senior Bonus', body: 'If you\'re 65+ in 2025-2028, you qualify for an additional $6,000 federal deduction under the One Big Beautiful Bill (Public Law 119-21). It phases out at MAGI over $75k (single) or $150k (married).' },
          ].map(f => (
            <div key={f.title} style={CARD}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{f.body}</div>
            </div>
          ))}
        </div>

        {/* STATE HIGHLIGHTS */}
        <div style={{ marginTop: '32px', ...CARD }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>
            Big 5 Non-SS States — Teacher Take-Home Comparison
          </h2>
          <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '16px', lineHeight: 1.6 }}>
            These 5 states have teacher pension systems NOT covered by Social Security. WEP/GPO repeal in 2025 most affects teachers here who also have SS-covered work history.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['State', 'Pension System', 'Rate', '$60k Take-Home/mo', 'SS Covered?'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 10px', opacity: 0.5, fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['TX','CA','IL','OH','MA'].map(s => {
                  const r = calcTeacher(60000, s, 'single', 0, 40);
                  const p = PENSION_RATE[s];
                  return (
                    <tr key={s} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px 10px', fontWeight: 700 }}>{STATE_NAMES[s]}</td>
                      <td style={{ padding: '10px 10px', opacity: 0.6 }}>{p.system}</td>
                      <td style={{ padding: '10px 10px', color: '#f87171' }}>{pct(p.rate)}</td>
                      <td style={{ padding: '10px 10px', color: '#4ade80', fontWeight: 700 }}>{fmt(r.monthlyTakeHome)}</td>
                      <td style={{ padding: '10px 10px' }}><span style={{ background: p.ss ? 'rgba(74,222,128,0.15)' : 'rgba(251,191,36,0.15)', color: p.ss ? '#4ade80' : '#fbbf24', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{p.ss ? 'Yes' : 'No — WEP repealed'}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '32px', ...CARD }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Frequently Asked Questions</h2>
          {[
            { q: 'Why is my teacher take-home pay so much lower than my contract salary?', a: 'Your contract salary is gross pay. Before you see a dollar, your state\'s TRS/STRS pension system takes 3%–14.75% (varies by state), then federal taxes, state income taxes, and Medicare are withheld. In states like Ohio (14% STRS) or Missouri (14% PSERS), pension alone reduces your paycheck significantly.' },
            { q: 'Do teachers pay Social Security?', a: 'It depends on your state. Teachers in 15 states — including Texas, California, Illinois, Ohio, and Massachusetts — are NOT covered by Social Security through their teaching job. Instead, they rely on their state TRS/STRS pension. Since January 2025, WEP and GPO are fully repealed, so teachers with additional SS-covered work now receive full SS benefits.' },
            { q: 'What is the SS Fairness Act 2025?', a: 'The Social Security Fairness Act (signed January 5, 2025) eliminated the Windfall Elimination Provision (WEP) and Government Pension Offset (GPO). These rules used to reduce SS benefits for government workers with pensions. The repeal is retroactive to January 2024 — if you haven\'t yet applied, file at ssa.gov.' },
            { q: 'What is the $6,000 Senior Deduction for teachers?', a: 'Under the One Big Beautiful Bill (Public Law 119-21, signed July 4, 2025), Americans aged 65 and older can deduct an additional $6,000 from federal taxable income for tax years 2025–2028. For married couples where both are 65+, the deduction is $12,000. It phases out at MAGI over $75,000 (single) or $150,000 (married).' },
            { q: 'Is pension contribution pre-tax or post-tax?', a: 'Most state TRS/STRS contributions are pre-tax — meaning they reduce your federal and state taxable income. However, this means your pension benefits in retirement will be taxed as ordinary income. A few states have moved to hybrid or Roth-style plans. This calculator uses the pre-tax default for all states.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{q}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', opacity: 0.5, marginBottom: '12px' }}>Related Calculators</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { href: '/bonus-tax-calculator', label: '🎁 Bonus Tax Calculator' },
              { href: '/hourly-paycheck-calculator', label: '⏰ Hourly Paycheck' },
              { href: '/', label: '💰 Salary Paycheck' },
              { href: '/blog/one-big-beautiful-bill-tax-calculator-2026', label: '📋 OBBB Tax Guide' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '20px', padding: '8px 16px', color: '#a5b4fc', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
        <br /><span style={{ fontSize: '11px', marginTop: '6px', display: 'block' }}>Pension rates sourced from official state TRS/STRS/PSERS websites. For informational purposes only — not tax advice.</span>
      </footer>
    </main>
  );
}
