'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import AuthorBox from '@/app/components/AuthorBox';

export default function TipsTaxCalculator2026() {
  const [annualTips, setAnnualTips]   = useState('25000');
  const [annualWages, setAnnualWages] = useState('32000');
  const [filing, setFiling]           = useState('single');

  const r = useMemo(() => {
    const tips  = Math.max(0, parseFloat(annualTips)  || 0);
    const wages = Math.max(0, parseFloat(annualWages) || 0);
    const cap   = 25000;
    const exemptTips  = Math.min(tips, cap);
    const taxableTips = Math.max(0, tips - cap);

    const STD: Record<string,number> = { single: 16100, married: 32200, hoh: 24150 };
    const std = STD[filing] ?? 16100;

    // brackets 2026
    const BRACKETS: Record<string,[number,number][]> = {
      single:  [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]],
      married: [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]],
      hoh:     [[16550,.10],[63100,.12],[100500,.22],[191950,.24],[243700,.32],[609350,.35],[Infinity,.37]],
    };

    function fedTax(income: number): number {
      const b = BRACKETS[filing] ?? BRACKETS.single;
      let tax = 0, prev = 0;
      for (const [lim, rate] of b) {
        if (income <= prev) break;
        tax += (Math.min(income, lim) - prev) * rate;
        prev = lim;
      }
      return tax;
    }

    const totalIncome  = tips + wages;
    const taxableOld   = Math.max(0, totalIncome - std);
    const taxableNew   = Math.max(0, wages + taxableTips - std);
    const fedOld       = fedTax(taxableOld);
    const fedNew       = fedTax(taxableNew);
    const fedSavings   = fedOld - fedNew;
    const ficaOnExempt = exemptTips * 0.0765; // still owed — informational
    const effectiveOld = totalIncome > 0 ? (fedOld / totalIncome) * 100 : 0;
    const effectiveNew = totalIncome > 0 ? (fedNew / totalIncome) * 100 : 0;

    return { tips, wages, totalIncome, exemptTips, taxableTips, fedOld, fedNew, fedSavings, ficaOnExempt, effectiveOld, effectiveNew, std };
  }, [annualTips, annualWages, filing]);

  const fmt  = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
  const pct  = (n: number) => n.toFixed(1) + '%';

  const inp: React.CSSProperties = {
    width: '100%', padding: '10px 14px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '8px', color: 'white', fontSize: '15px',
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
  };
  const lbl: React.CSSProperties = {
    fontSize: '11px', color: 'rgba(255,255,255,0.65)', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.06em',
    marginBottom: '6px', display: 'block',
  };

  const faqItems = [
    { q: 'How much tip income is tax-free in 2026?', a: 'Up to $25,000 in annual tip income is exempt from federal income tax under the No Tax on Tips law signed in 2025. Tips above $25,000 are taxed normally.' },
    { q: 'Does No Tax on Tips also remove FICA?', a: 'No. Social Security (6.2%) and Medicare (1.45%) still apply to all tip income, including exempt tips. Only federal income tax is waived on the first $25,000.' },
    { q: 'Who qualifies for the tips tax exemption?', a: 'Workers in traditionally tipped jobs qualify: servers, bartenders, hotel staff, hair stylists, valets, and similar roles. Your total wages must be $160,000 or less.' },
    { q: 'Do I still report tips on my tax return?', a: 'Yes. All tips must still be reported to your employer and on your federal return. The exemption means the first $25,000 is not subject to income tax — but it is still reported income.' },
    { q: 'Does the $25,000 cap reset each year?', a: 'Yes. The $25,000 exemption applies per tax year. If you earn $30,000 in tips in 2026, $25,000 is exempt and $5,000 is taxable.' },
    { q: 'What states also exempt tip income from state tax?', a: 'Most states still tax tip income at the state level. A few states with no income tax — like Florida, Texas, and Nevada — effectively exempt tips. Check your state rules separately.' },
  ];

  const schema = '{"@context":"https://schema.org","@graph":[{"@type":"FAQPage","mainEntity":[' +
    faqItems.map(f =>
      '{"@type":"Question","name":' + JSON.stringify(f.q) +
      ',"acceptedAnswer":{"@type":"Answer","text":' + JSON.stringify(f.a) + '}}'
    ).join(',') +
  ']},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Tips Tax Calculator 2026","item":"https://www.privatepaycheck.com/tips-tax-calculator-2026"}]},{"@type":"BlogPosting","headline":"Tips Tax Calculator 2026 — No Tax on Tips Savings","datePublished":"2026-05-15","dateModified":"2026-05-15","author":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"PrivatePaycheck"},"mainEntityOfPage":"https://www.privatepaycheck.com/tips-tax-calculator-2026"}]}';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <div style={{ minHeight: '100vh', background: '#0f0c29', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#F5C842' }}>2026 — No Tax on Tips Law</div>
            <h1 style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 900, margin: '0 0 8px', lineHeight: 1.2 }}>Tips Tax Calculator 2026</h1>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginBottom: '12px' }}>
              Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist
            </div>
            <p style={{ fontSize: '15px', opacity: 0.65, maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Calculate your federal tax savings on tip income. The 2026 exemption covers up to $25,000 in tips per year.
            </p>
          </div>

          {/* Answer-First */}
          <div style={{ background: 'rgba(245,200,66,0.07)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '12px', padding: '18px 20px', marginBottom: '24px', marginTop: '20px' }}>
            <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: '8px', fontSize: '13px' }}>QUICK ANSWER</div>
            <p style={{ fontSize: '14px', lineHeight: 1.8, margin: 0, color: 'rgba(255,255,255,0.85)' }}>
              Under the No Tax on Tips law (2025), workers in tipped occupations can exclude up to <strong>$25,000</strong> of tip income from federal income tax in 2026.
              A server earning $25,000 in tips saves roughly <strong>$2,500–$5,500</strong> in federal taxes depending on filing status.
              FICA taxes (7.65%) still apply to all tip income.
            </p>
          </div>

          {/* Key Takeaways */}
          <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
            <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 10, fontSize: 13 }}>✅ KEY TAKEAWAYS</div>
            <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
              <li>Up to <strong>$25,000</strong> in annual tip income is exempt from federal income tax in 2026</li>
              <li>The exemption applies to workers earning <strong>$160,000 or less</strong> in wages</li>
              <li>FICA taxes (Social Security + Medicare = 7.65%) still apply to all tips</li>
              <li>Tips must still be <strong>reported</strong> — the exemption removes income tax, not reporting</li>
              <li>Most states still tax tip income — check your state rules separately</li>
            </ul>
          </div>

          {/* Calculator */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 20px' }}>Calculate Your Tip Tax Savings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={lbl}>Annual Tip Income ($)</label>
                <input type="number" value={annualTips} min={0}
                  onChange={e => setAnnualTips(e.target.value)}
                  style={inp} placeholder="25000" />
              </div>
              <div>
                <label style={lbl}>Annual Wages ($)</label>
                <input type="number" value={annualWages} min={0}
                  onChange={e => setAnnualWages(e.target.value)}
                  style={inp} placeholder="32000" />
              </div>
              <div>
                <label style={lbl}>Filing Status</label>
                <select value={filing} onChange={e => setFiling(e.target.value)}
                  style={{ ...inp, colorScheme: 'dark', background: '#1e1b4b' }}>
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                  <option value="hoh">Head of Household</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div style={{ background: 'linear-gradient(135deg,rgba(245,200,66,0.10),rgba(99,102,241,0.10))', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>Federal Tax Savings</div>
                <div style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#F5C842', lineHeight: 1 }}>{fmt(r.fedSavings)}</div>
                <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '6px' }}>from the $25,000 tips exemption</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '10px', marginBottom: '16px' }}>
                {[
                  { l: 'Tips Exempt',    v: fmt(r.exemptTips),   c: '#F5C842' },
                  { l: 'Tips Taxable',   v: fmt(r.taxableTips),  c: r.taxableTips > 0 ? '#f87171' : 'white' },
                  { l: 'Tax Without',    v: fmt(r.fedOld),       c: '#f87171' },
                  { l: 'Tax With',       v: fmt(r.fedNew),       c: '#4ade80' },
                  { l: 'Eff. Rate Old',  v: pct(r.effectiveOld), c: '#f87171' },
                  { l: 'Eff. Rate New',  v: pct(r.effectiveNew), c: '#4ade80' },
                ].map(b => (
                  <div key={b.l} style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '3px' }}>{b.l}</div>
                    <div style={{ fontWeight: 800, fontSize: '15px', color: b.c }}>{b.v}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', fontSize: '12px', opacity: 0.65, lineHeight: 1.7 }}>
                Standard deduction applied: {fmt(r.std)} · FICA (7.65%) still applies to tips · Federal tax only
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.5, margin: '10px 0 0' }}>Calculations run in your browser — no data sent anywhere</p>
          </div>

          {/* Warning */}
          <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '12px', padding: '16px 18px', marginBottom: '24px' }}>
            <h3 style={{ color: '#fbbf24', fontWeight: 800, margin: '0 0 6px', fontSize: '14px' }}>Note: State Taxes Not Included</h3>
            <p style={{ fontSize: '13px', opacity: 0.8, lineHeight: 1.7, margin: 0 }}>
              This calculator covers <strong>federal income tax only</strong>. Most states still tax tip income at the state level.
              Workers in Texas, Florida, Nevada, and other no-income-tax states save even more overall.
              See <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#F5C842' }}>IRS.gov</a> for official guidance.
            </p>
          </div>

          {/* FAQ */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Tips Tax 2026 — FAQ</h2>
            {faqItems.map((item, i) => (
              <div key={i} style={{ marginBottom: '14px', paddingBottom: '14px', borderBottom: i < faqItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '5px', color: '#F5C842' }}>{item.q}</h3>
                <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related Articles */}
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '12px' }}>
            <Link href="/no-tax-on-tips-calculator" style={{ display: 'block', background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '13px' }}>Weekly Tips Calculator</div>
              <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '3px' }}>Per-week tip savings &rarr;</div>
            </Link>
            <Link href="/no-tax-on-overtime-deduction" style={{ display: 'block', background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '13px' }}>No Tax on Overtime</div>
              <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '3px' }}>Calculate OT savings &rarr;</div>
            </Link>
            <Link href="/bonus-tax-calculator" style={{ display: 'block', background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '13px' }}>Bonus Tax Calculator</div>
              <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '3px' }}>See your bonus take-home &rarr;</div>
            </Link>
          </div>

        </div>
        <AuthorBox />
      </div>
    </>
  );
}
