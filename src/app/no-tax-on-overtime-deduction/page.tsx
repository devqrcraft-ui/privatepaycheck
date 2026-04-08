'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
export default function NoTaxOnOvertimePage() {
  const [regular, setRegular] = useState('25');
  const [otHours, setOtHours] = useState('10');
  const [weeks, setWeeks] = useState('52');
  const [filing, setFiling] = useState('single');

  const r = useMemo(() => {
    const reg = parseFloat(regular) || 0;
    const ot = parseFloat(otHours) || 0;
    const wk = parseFloat(weeks) || 52;
    const otRate = reg * 1.5;
    const annualOT = otRate * ot * wk;
    const annualRegular = reg * 40 * wk;
    const annualTotal = annualRegular + annualOT;
    const std = filing === 'married' ? 32200 : 16100;

    function fedTax(income: number, f: string) {
      const b: [number, number][] = f === 'married'
        ? [[23850,.10],[96950,.12],[206700,.22],[394600,.24],[501050,.32],[751600,.35],[Infinity,.37]]
        : [[11925,.10],[48475,.12],[103350,.22],[197300,.24],[250525,.32],[626350,.35],[Infinity,.37]];
      let tax = 0, prev = 0;
      for (const [lim, rate] of b) { if (income <= prev) break; tax += (Math.min(income, lim) - prev) * rate; prev = lim; }
      return tax;
    }

    const taxableOld = Math.max(0, annualTotal - std);
    const taxableNew = Math.max(0, annualRegular - std);
    const fedOld = fedTax(taxableOld, filing);
    const fedNew = fedTax(taxableNew, filing);
    const savings = fedOld - fedNew;
    const ficaSavings = Math.min(annualOT, Math.max(0, 176100 - annualRegular)) * 0.0765;

    return { annualOT, annualRegular, annualTotal, fedOld, fedNew, savings, ficaSavings, totalSavings: savings + ficaSavings, otRate };
  }, [regular, otHours, weeks, filing]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const inp: React.CSSProperties = { width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' };
  const lbl: React.CSSProperties = { fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', display: 'block' };

  return (
    <div suppressHydrationWarning style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#fbbf24' }}>Signed Law 2025–2028 — No Tax on Overtime</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>No Tax on Overtime Calculator 2026</h1>
          <p style={{ fontSize: '15px', opacity: 0.65, maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>See how much extra you would keep if overtime pay (the 0.5× premium portion) becomes federal income tax-free.</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '16px', marginBottom: '16px' }}>
            <div><label style={lbl}>Regular Hourly Rate ($)</label><input type="number" value={regular} onChange={e => setRegular(Math.max(0,+e.target.value).toString())} min={0} style={inp} placeholder="25" /></div>
            <div><label style={lbl}>OT Hours/Week</label><input type="number" value={otHours} onChange={e => setOtHours(Math.max(0,+e.target.value).toString())} min={0} style={inp} placeholder="10" /></div>
            <div><label style={lbl}>Weeks/Year</label><input type="number" value={weeks} onChange={e => setWeeks(Math.max(1,+e.target.value).toString())} min={1} style={inp} placeholder="52" /></div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...inp, colorScheme:'dark', color:'#fff', background:'#1e293b'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg,rgba(251,191,36,0.12),rgba(99,102,241,0.12))', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>Annual Tax Savings on Overtime</div>
              <div style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fbbf24', lineHeight: 1 }}>{fmt(r.totalSavings)}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '10px' }}>
              {[
                { l: 'OT Rate', v: '$' + r.otRate.toFixed(2) + '/hr' },
                { l: 'Annual OT Pay', v: fmt(r.annualOT) },
                { l: 'Fed Tax Saved', v: fmt(r.savings), c: '#fbbf24' },
                { l: 'FICA Saved', v: fmt(r.ficaSavings), c: '#fbbf24' },
              ].map(b => (
                <div key={b.l} style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', opacity: 0.5, marginBottom: '3px' }}>{b.l}</div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: b.c || 'white' }}>{b.v}</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.3, margin: '10px 0 0' }}> All calculations in your browser "" data never sent anywhere</p>
        </div>

        <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '12px', padding: '18px', marginBottom: '24px' }}>
          <h3 style={{ color: '#fbbf24', fontWeight: 800, margin: '0 0 8px', fontSize: '15px' }}>  Legislative Status</h3>
          <p style={{ fontSize: '13px', opacity: 0.8, lineHeight: 1.7, margin: 0 }}>The One Big Beautiful Bill was signed into law in 2025. It allows eligible W-2 employees to deduct up to $12,500 of overtime pay annually from federal taxable income for tax years 2025–2028. The deduction applies to the overtime premium (the extra 0.5× above regular pay). Self-employed and 1099 workers do not qualify.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '12px' }}>
          <Link href="/no-tax-on-tips-calculator" style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>No Tax on Tips</div>
            <div style={{ fontSize: '13px', opacity: 0.6, marginTop: '4px' }}>Calculate tip savings в†'</div>
          </Link>
          <Link href="/overtime-calculator" style={{ display: 'block', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>Overtime Calculator</div>
            <div style={{ fontSize: '13px', opacity: 0.6, marginTop: '4px' }}>Current OT pay в†'</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '13px', opacity: 0.6, marginTop: '4px' }}>Full tax breakdown в†'</div>
          </Link>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </div>
  );
}
