'use client';
'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function NoTaxOnTipsCalculator() {
  const [tips, setTips] = useState('800');
  const [wages, setWages] = useState('600');
  const [filing, setFiling] = useState('single');
  const [weeks, setWeeks] = useState('52');

  const r = useMemo(() => {
    const t = parseFloat(tips) || 0;
    const w = parseFloat(wages) || 0;
    const wk = parseFloat(weeks) || 52;
    const annualTips = t * wk;
    const annualWages = w * wk;
    const annualTotal = annualTips + annualWages;
    const cap = 25000;
    const exemptTips = Math.min(annualTips, cap);
    const taxableTips = Math.max(0, annualTips - cap);
    const std = filing === 'married' ? 32200 : 16100;
    // Without exemption
    const taxableOld = Math.max(0, annualTotal - std);
    // With exemption
    const taxableNew = Math.max(0, annualWages + taxableTips - std);

    function fedTax(income: number, f: string) {
      const b: [number, number][] = f === 'married'
        ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
        : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
      let tax = 0, prev = 0;
      for (const [lim, rate] of b) { if (income <= prev) break; tax += (Math.min(income, lim) - prev) * rate; prev = lim; }
      return tax;
    }

    const fedOld = fedTax(taxableOld, filing);
    const fedNew = fedTax(taxableNew, filing);
    const savings = fedOld - fedNew;
    const ficaSavings = exemptTips * 0.0765;

    return { annualTips, annualWages, annualTotal, exemptTips, taxableTips, fedOld, fedNew, savings, ficaSavings, totalSavings: savings + ficaSavings, cap };
  }, [tips, wages, filing, weeks]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const inp: React.CSSProperties = { width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' };
  const lbl: React.CSSProperties = { fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', display: 'block' };

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'No Tax on Tips Calculator 2026', url: 'https://privatepaycheck.com/no-tax-on-tips-calculator', description: 'Calculate your federal tax savings under the No Tax on Tips exemption. Up to $25,000 in tips tax-free.', applicationCategory: 'FinanceApplication', operatingSystem: 'Any' }) }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#4ade80' }}>NEW 2026 "” No Tax on Tips Law</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>No Tax on Tips Calculator 2026</h1>
          <p style={{ fontSize: '15px', opacity: 0.65, maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>See how much you save under the proposed No Tax on Tips exemption "” up to $25,000 in tip income tax-free per year.</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '16px', marginBottom: '16px' }}>
            <div><label style={lbl}>Weekly Tips ($)</label><input type="number" value={tips} onChange={e => setTips(e.target.value)} style={inp} placeholder="800" /></div>
            <div><label style={lbl}>Weekly Wages ($)</label><input type="number" value={wages} onChange={e => setWages(e.target.value)} style={inp} placeholder="600" /></div>
            <div><label style={lbl}>Weeks Worked/Year</label><input type="number" value={weeks} onChange={e => setWeeks(e.target.value)} style={inp} placeholder="52" /></div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...inp, colorScheme:'dark', color:'#fff', background:'#1e293b'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg,rgba(74,222,128,0.12),rgba(99,102,241,0.12))', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>Your Annual Tax Savings</div>
              <div style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#4ade80', lineHeight: 1 }}>{fmt(r.totalSavings)}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, marginTop: '6px' }}>Federal income tax + FICA savings</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '10px', marginBottom: '16px' }}>
              {[
                { l: 'Annual Tips', v: fmt(r.annualTips) },
                { l: 'Tips Exempt', v: fmt(r.exemptTips), c: '#4ade80' },
                { l: 'Fed Tax Saved', v: fmt(r.savings), c: '#4ade80' },
                { l: 'FICA Saved', v: fmt(r.ficaSavings), c: '#4ade80' },
              ].map(b => (
                <div key={b.l} style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', opacity: 0.5, marginBottom: '3px' }}>{b.l}</div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: b.c || 'white' }}>{b.v}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px' }}>
              <div style={{ opacity: 0.7 }}>Tax WITHOUT exemption: <strong style={{ color: '#f87171' }}>{fmt(r.fedOld)}</strong></div>
              <div style={{ opacity: 0.7 }}>Tax WITH exemption: <strong style={{ color: '#4ade80' }}>{fmt(r.fedNew)}</strong></div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.3, margin: '10px 0 0' }}> All calculations in your browser "” data never sent anywhere</p>
        </div>

        <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '12px', padding: '18px', marginBottom: '24px' }}>
          <h3 style={{ color: '#fbbf24', fontWeight: 800, margin: '0 0 8px', fontSize: '15px' }}>  Important: Current Status of No Tax on Tips</h3>
          <p style={{ fontSize: '13px', opacity: 0.8, lineHeight: 1.7, margin: 0 }}>The No Tax on Tips exemption was proposed during the 2024 campaign and has been discussed in Congress. As of early 2026, it has not been signed into law. This calculator shows your potential savings if the exemption is enacted with a $25,000 annual cap. Check IRS.gov for current status before making tax decisions.</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>No Tax on Tips "” FAQ</h2>
          {[
            { q: 'Who qualifies for No Tax on Tips?', a: 'Under the proposed legislation, workers in traditionally tipped occupations qualify "” servers, bartenders, hotel staff, hair stylists, valets, and similar roles. Salaried workers and those who receive tips incidentally would not qualify.' },
            { q: 'Is there a cap on tax-free tip income?', a: 'The most commonly discussed version caps the exemption at $25,000 per year in tip income. Tips above $25,000 would still be taxed normally. Workers earning under $160,000 in wages would qualify.' },
            { q: 'Does it eliminate FICA on tips too?', a: 'Some versions of the proposal include FICA (Social Security and Medicare) exemption on tips, which would be an additional 7.65% savings. This calculator includes FICA savings in the total.' },
            { q: 'Do I still need to report tips?', a: 'Yes "” all tips must still be reported to your employer and on your tax return. The exemption means they would not be taxed, but they still count as income for certain purposes like Social Security credits.' },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '5px' }}>{item.q}</h3>
              <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '12px' }}>
          <Link href="/no-tax-on-overtime-deduction" style={{ display: 'block', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '13px' }}>No Tax on Overtime</div>
            <div style={{ fontSize: '11px', opacity: 0.5, marginTop: '3px' }}>Calculate OT savings в†’</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '13px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '11px', opacity: 0.5, marginTop: '3px' }}>Full breakdown в†’</div>
          </Link>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
