'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

// 2026 federal brackets
function fedTax(taxable: number, filing: string): number {
  const b: [number, number][] = filing === 'married'
    ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
    : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
  let tax = 0, prev = 0;
  for (const [lim, rate] of b) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, lim) - prev) * rate;
    prev = lim;
  }
  return tax;
}

// SS taxable % based on combined income (MAGI + 50% SS)
function ssTaxable(magi: number, ssAnnual: number, filing: string): number {
  const combined = magi + ssAnnual * 0.5;
  const t1 = filing === 'married' ? 32000 : 25000;
  const t2 = filing === 'married' ? 44000 : 34000;
  if (combined <= t1) return 0;
  if (combined <= t2) return Math.min(ssAnnual * 0.5, (combined - t1) * 0.5);
  return Math.min(ssAnnual * 0.85, ssAnnual * 0.5 * 0.5 + (combined - t2) * 0.85);
}

// IRMAA 2027 brackets (based on 2025 MAGI)
function irmaaMonthly(magi: number, filing: string): { partB: number; tier: string } {
  const married = filing === 'married';
  if (magi <= (married ? 212000 : 106000)) return { partB: 185.00, tier: 'Standard' };
  if (magi <= (married ? 266000 : 133000)) return { partB: 259.00, tier: 'Tier 1' };
  if (magi <= (married ? 334000 : 167000)) return { partB: 370.00, tier: 'Tier 2' };
  if (magi <= (married ? 400000 : 200000)) return { partB: 480.90, tier: 'Tier 3' };
  if (magi <= (married ? 750000 : 500000)) return { partB: 591.90, tier: 'Tier 4' };
  return { partB: 628.90, tier: 'Tier 5' };
}

export default function WEPLumpSumCalculator() {
  const [pension, setPension]     = useState('42000');
  const [lumpSum, setLumpSum]     = useState('7700');
  const [newSS, setNewSS]         = useState('8400');
  const [filing, setFiling]       = useState('single');
  const [age, setAge]             = useState('68');
  const [showIRMAA, setShowIRMAA] = useState(false);

  const r = useMemo(() => {
    const pen    = parseFloat(pension)  || 0;
    const lump   = parseFloat(lumpSum)  || 0;
    const ss     = parseFloat(newSS)    || 0;
    const ag     = parseInt(age)        || 0;
    const stdDed = filing === 'married' ? 30000 : 15000;

    // OBBB senior deduction
    const phaseoutStart = filing === 'married' ? 150000 : 75000;
    const eligible65    = ag >= 65;

    // WITHOUT lump-sum (baseline: pension + new SS only)
    const magiBase      = pen + ss;
    const ssTaxBase     = ssTaxable(pen, ss, filing);
    const taxableBase   = Math.max(0, pen + ssTaxBase - stdDed - (eligible65 ? Math.max(0, 6000 - Math.max(0, magiBase - phaseoutStart)) : 0));
    const taxBase       = fedTax(taxableBase, filing);

    // WITH lump-sum (2025 actual)
    const magiWithLump  = pen + ss + lump;
    const ssTaxWith     = ssTaxable(pen + lump, ss, filing);
    const seniorDed     = eligible65 ? Math.max(0, 6000 - Math.max(0, magiWithLump - phaseoutStart)) : 0;
    const taxableWith   = Math.max(0, pen + lump + ssTaxWith - stdDed - seniorDed);
    const taxWith       = fedTax(taxableWith, filing);

    const extraTax      = Math.max(0, taxWith - taxBase);
    const netLumpSum    = lump - extraTax;

    // Lump-sum election: spread lump-sum over prior years (simplified)
    // IRS allows computing tax as if paid in prior years — roughly 10% flat for most retirees
    const electionTax   = lump * 0.12;
    const electionBetter = electionTax < extraTax;
    const electionSaving = Math.max(0, extraTax - electionTax);

    // IRMAA 2027 impact (based on 2025 MAGI with lump-sum)
    const irmaaNow      = irmaaMonthly(magiBase, filing);
    const irmaaWithLump = irmaaMonthly(magiWithLump, filing);
    const irmaaExtraMo  = irmaaWithLump.partB - irmaaNow.partB;
    const irmaaExtraYr  = irmaaExtraMo * 12;
    const irmaaTriggered = irmaaExtraMo > 0;

    return {
      magiBase, magiWithLump, taxBase, taxWith, extraTax, netLumpSum,
      ssTaxBase, ssTaxWith, seniorDed, electionBetter, electionSaving, electionTax,
      irmaaNow, irmaaWithLump, irmaaExtraMo, irmaaExtraYr, irmaaTriggered,
    };
  }, [pension, lumpSum, newSS, filing, age]);

  const fmt  = (n: number) => n.toLocaleString('en-US', { style:'currency', currency:'USD', maximumFractionDigits:0 });
  const fmt2 = (n: number) => n.toLocaleString('en-US', { style:'currency', currency:'USD', minimumFractionDigits:2, maximumFractionDigits:2 });

  const inp: React.CSSProperties = { width:'100%', padding:'10px 14px', borderRadius:8, border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.08)', color:'white', fontSize:16, boxSizing:'border-box' };
  const sel: React.CSSProperties = { ...inp, background:'#1e293b' };
  const lbl: React.CSSProperties = { display:'block', fontSize:13, color:'#94a3b8', marginBottom:6, marginTop:16 };

  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', color:'white', fontFamily:'Inter,sans-serif', padding:'40px 20px' }}>
      <div style={{ maxWidth:600, margin:'0 auto' }}>

        <Link href="/" style={{ color:'#94a3b8', textDecoration:'none', fontSize:14 }}>← Back to all calculators</Link>

        <div style={{ display:'inline-block', background:'rgba(251,191,36,0.1)', border:'1px solid rgba(251,191,36,0.3)', borderRadius:20, padding:'5px 14px', fontSize:12, color:'#fbbf24', marginTop:12, marginBottom:8 }}>
          ⚡ SS Fairness Act 2025 — WEP/GPO fully repealed
        </div>

        <h1 style={{ fontSize:28, fontWeight:800, margin:'8px 0', lineHeight:1.2 }}>
          WEP Lump-Sum Tax Impact Calculator 2026
        </h1>
        <p style={{ color:'#94a3b8', fontSize:15, marginBottom:28, lineHeight:1.6 }}>
          3.2 million teachers, firefighters and government workers received retroactive SS payments in 2025.
          Find out <strong style={{ color:'#fbbf24' }}>how much extra tax you owe</strong> — and if the lump-sum election saves you money.
        </p>

        {/* INPUTS */}
        <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:16, padding:24, marginBottom:20 }}>
          <div style={{ fontSize:14, fontWeight:700, color:'#cbd5e1', marginBottom:4 }}>Your 2025 Income</div>

          <label style={lbl}>Annual Pension / TRS Income</label>
          <div style={{ position:'relative' }}>
            <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#4ade80', fontWeight:700 }}>$</span>
            <input type="number" value={pension} onChange={e=>setPension(e.target.value)} style={{ ...inp, paddingLeft:28 }} />
          </div>

          <label style={lbl}>WEP Lump-Sum Payment Received in 2025</label>
          <div style={{ position:'relative' }}>
            <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#fbbf24', fontWeight:700 }}>$</span>
            <input type="number" value={lumpSum} onChange={e=>setLumpSum(e.target.value)} style={{ ...inp, paddingLeft:28 }} />
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,.35)', marginTop:4 }}>Average retroactive payment was $6,710. Check your SSA-1099.</div>

          <label style={lbl}>New Annual SS Benefit (after WEP repeal)</label>
          <div style={{ position:'relative' }}>
            <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#4ade80', fontWeight:700 }}>$</span>
            <input type="number" value={newSS} onChange={e=>setNewSS(e.target.value)} style={{ ...inp, paddingLeft:28 }} />
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,.35)', marginTop:4 }}>Find on your SSA award letter or ssa.gov account.</div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:16 }}>
            <div>
              <label style={{ ...lbl, marginTop:0 }}>Filing Status</label>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={{...sel, colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>
            <div>
              <label style={{ ...lbl, marginTop:0 }}>Your Age</label>
              <input type="number" value={age} onChange={e=>setAge(e.target.value)} min="50" max="90" style={inp} />
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:16, padding:24, marginBottom:16 }}>
          <div style={{ fontSize:14, fontWeight:700, color:'#cbd5e1', marginBottom:16 }}>2025 Tax Impact</div>

          {/* Main comparison */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
            <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:12, padding:'14px 16px' }}>
              <div style={{ fontSize:12, color:'#94a3b8', marginBottom:4 }}>Tax without lump-sum</div>
              <div style={{ fontSize:22, fontWeight:700 }}>{fmt(r.taxBase)}</div>
            </div>
            <div style={{ background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.25)', borderRadius:12, padding:'14px 16px' }}>
              <div style={{ fontSize:12, color:'#fca5a5', marginBottom:4 }}>Tax with lump-sum</div>
              <div style={{ fontSize:22, fontWeight:700, color:'#f87171' }}>{fmt(r.taxWith)}</div>
            </div>
          </div>

          {/* Extra tax */}
          <div style={{ background: r.extraTax > 0 ? 'rgba(239,68,68,0.12)' : 'rgba(34,197,94,0.1)', border:`1px solid ${r.extraTax > 0 ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.3)'}`, borderRadius:12, padding:'16px 20px', marginBottom:16, textAlign:'center' }}>
            <div style={{ fontSize:13, color: r.extraTax > 0 ? '#fca5a5' : '#86efac', marginBottom:4 }}>
              {r.extraTax > 0 ? 'Extra tax from lump-sum' : 'No extra tax — lump-sum had no impact'}
            </div>
            <div style={{ fontSize:40, fontWeight:900, color: r.extraTax > 0 ? '#f87171' : '#4ade80' }}>{fmt(r.extraTax)}</div>
            {r.extraTax > 0 && (
              <div style={{ fontSize:13, color:'#94a3b8', marginTop:6 }}>
                You keep <strong style={{ color:'#4ade80' }}>{fmt(r.netLumpSum)}</strong> net after tax out of {fmt(parseFloat(lumpSum)||0)} lump-sum
              </div>
            )}
          </div>

          {/* Breakdown */}
          <div style={{ fontSize:13, color:'#94a3b8' }}>
            {[
              ['Your MAGI without lump-sum', fmt(r.magiBase)],
              ['Your MAGI with lump-sum', fmt(r.magiWithLump)],
              ['SS amount taxable (with lump-sum)', fmt(r.ssTaxWith)],
              ...(r.seniorDed > 0 ? [['OBBB $6,000 senior deduction applied', fmt(r.seniorDed)]] : []),
            ].map(([label, value]) => (
              <div key={label} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
                <span>{label}</span><span style={{ color:'#cbd5e1', fontWeight:600 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lump-sum election */}
        {r.extraTax > 0 && (
          <div style={{ background: r.electionBetter ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', border:`1px solid ${r.electionBetter ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,.1)'}`, borderRadius:16, padding:20, marginBottom:16 }}>
            <div style={{ fontSize:14, fontWeight:700, color: r.electionBetter ? '#4ade80' : '#cbd5e1', marginBottom:8 }}>
              {r.electionBetter ? '✓ Lump-Sum Election could save you money' : 'Lump-Sum Election — check with your tax preparer'}
            </div>
            <p style={{ fontSize:13, color:'#94a3b8', margin:'0 0 10px', lineHeight:1.6 }}>
              IRS allows you to use the <strong style={{ color:'#cbd5e1' }}>lump-sum election</strong> on Form 1040 — treating the payment as if received in prior years.
              Estimated tax under election: <strong style={{ color:'#fbbf24' }}>{fmt(r.electionTax)}</strong> vs {fmt(r.extraTax)} normally.
            </p>
            {r.electionBetter && (
              <div style={{ background:'rgba(34,197,94,0.15)', borderRadius:8, padding:'10px 14px', fontSize:13, color:'#86efac' }}>
                Potential saving: <strong>{fmt(r.electionSaving)}</strong> — ask your tax preparer about Form 1040 lump-sum election.
              </div>
            )}
          </div>
        )}

        {/* IRMAA warning */}
        <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:16, padding:20, marginBottom:16 }}>
          <button onClick={()=>setShowIRMAA(!showIRMAA)}
            style={{ background:'none', border:'none', color:'#fbbf24', fontSize:14, fontWeight:700, cursor:'pointer', padding:0, display:'flex', alignItems:'center', gap:8 }}>
            <span>{showIRMAA ? '▼' : '▶'}</span>
            ⚠️ Hidden risk: Will this raise your 2027 Medicare premiums? (IRMAA)
          </button>
          {showIRMAA && (
            <div style={{ marginTop:14 }}>
              <p style={{ fontSize:13, color:'#94a3b8', margin:'0 0 12px', lineHeight:1.6 }}>
                Medicare uses a <strong style={{ color:'#cbd5e1' }}>2-year lookback</strong> — your 2027 premiums are based on your <strong style={{ color:'#fbbf24' }}>2025 MAGI</strong>.
                If the lump-sum pushed you into a higher IRMAA bracket, you'll pay more starting January 2027.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:10, padding:'12px 16px' }}>
                  <div style={{ fontSize:12, color:'#94a3b8', marginBottom:4 }}>Without lump-sum (2027)</div>
                  <div style={{ fontSize:18, fontWeight:700 }}>{fmt2(r.irmaaNow.partB)}/mo</div>
                  <div style={{ fontSize:11, color:'#64748b', marginTop:2 }}>{r.irmaaNow.tier}</div>
                </div>
                <div style={{ background: r.irmaaTriggered ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.05)', border: r.irmaaTriggered ? '1px solid rgba(239,68,68,0.3)' : 'none', borderRadius:10, padding:'12px 16px' }}>
                  <div style={{ fontSize:12, color: r.irmaaTriggered ? '#fca5a5' : '#94a3b8', marginBottom:4 }}>With lump-sum (2027)</div>
                  <div style={{ fontSize:18, fontWeight:700, color: r.irmaaTriggered ? '#f87171' : 'white' }}>{fmt2(r.irmaaWithLump.partB)}/mo</div>
                  <div style={{ fontSize:11, color:'#64748b', marginTop:2 }}>{r.irmaaWithLump.tier}</div>
                </div>
              </div>
              {r.irmaaTriggered && (
                <div style={{ marginTop:12, background:'rgba(239,68,68,0.1)', borderRadius:8, padding:'10px 14px', fontSize:13, color:'#fca5a5' }}>
                  Extra Medicare cost in 2027: <strong>{fmt2(r.irmaaExtraMo)}/mo = {fmt(r.irmaaExtraYr)}/year</strong>.
                  You can appeal with SSA Form SSA-44 if income was a one-time event.
                </div>
              )}
              {!r.irmaaTriggered && (
                <div style={{ marginTop:12, background:'rgba(34,197,94,0.1)', borderRadius:8, padding:'10px 14px', fontSize:13, color:'#86efac' }}>
                  ✓ Your lump-sum did not push you into a higher IRMAA bracket. Medicare premiums unaffected.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Info box */}
        <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:12, padding:20, fontSize:13, color:'#94a3b8', marginBottom:20 }}>
          <p style={{ margin:'0 0 8px', fontWeight:600, color:'#cbd5e1' }}>What happened:</p>
          <p style={{ margin:'0 0 6px' }}>The Social Security Fairness Act (signed Jan 5, 2025) fully eliminated WEP and GPO. The SSA paid $17B in retroactive benefits to 3.1M people by July 2025.</p>
          <p style={{ margin:'0 0 6px' }}>The lump-sum covers Jan 2024 – the month your award letter was issued. It is <strong style={{ color:'#cbd5e1' }}>fully taxable</strong> in the year received (2025 for most people).</p>
          <p style={{ margin:0 }}>File at <a href="https://www.ssa.gov" target="_blank" rel="noopener" style={{ color:'#818cf8' }}>ssa.gov</a> if you haven't applied yet — retroactive to January 2024.</p>
        </div>

        {/* Related */}
        <div style={{ textAlign:'center', fontSize:13, color:'#64748b' }}>
          <Link href="/senior-deduction-calculator" style={{ color:'#818cf8', marginRight:16 }}>$6,000 Senior Deduction</Link>
          <Link href="/teacher-paycheck-calculator" style={{ color:'#818cf8', marginRight:16 }}>Teacher Paycheck</Link>
          <Link href="/" style={{ color:'#818cf8' }}>Salary Calculator</Link>
        </div>

      </div>
    </main>
  );
}
