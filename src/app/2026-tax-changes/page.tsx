import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026 Tax Changes — Complete Guide to New Deductions | PrivatePaycheck',
  description: 'Full guide to 2026 tax law changes: no tax on overtime ($12,500), no tax on tips ($25,000), senior $6,000 deduction, Trump Account. Calculate your exact savings.',
  alternates: { canonical: 'https://www.privatepaycheck.com/2026-tax-changes' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the new tax changes for 2026?","acceptedAnswer":{"@type":"Answer","text":"The One Big Beautiful Bill signed in 2025 introduced four major changes effective 2025–2028: (1) no federal income tax on up to $12,500 of overtime pay for W-2 employees, (2) no federal income tax on up to $25,000 of tip income for tipped workers, (3) a $6,000 additional standard deduction for taxpayers age 65+ (phasing out above $75,000), and (4) Trump Accounts — government-seeded savings accounts for children under 8."}},{"@type":"Question","name":"Does the no-tax-on-overtime apply to 1099 workers?","acceptedAnswer":{"@type":"Answer","text":"No. The overtime deduction applies only to W-2 employees earning overtime as defined by the Fair Labor Standards Act. Self-employed workers, independent contractors, and 1099 workers do not qualify."}},{"@type":"Question","name":"How much can I save with the no-tax-on-overtime deduction?","acceptedAnswer":{"@type":"Answer","text":"The maximum federal tax savings depends on your bracket. At the 22% bracket: $12,500 deduction × 22% = $2,750 saved. At 24%: $3,000 saved. At 12%: $1,500 saved. FICA taxes are not reduced by this deduction."}},{"@type":"Question","name":"Who qualifies for the new $6,000 senior deduction?","acceptedAnswer":{"@type":"Answer","text":"Taxpayers age 65 or older with adjusted gross income below $75,000 (single) or $150,000 (married filing jointly) qualify for the full $6,000 additional deduction. The deduction phases out above these thresholds."}},{"@type":"Question","name":"Are these 2026 tax changes permanent?","acceptedAnswer":{"@type":"Answer","text":"No. The overtime deduction, tip deduction, and senior deduction are currently authorized for tax years 2025 through 2028. Congress would need to extend them beyond 2028. The Trump Account program has a longer authorization period."}}]};

const CSS = `
  body{background:#091526;}
  .hub{max-width:940px;margin:0 auto;padding:60px 24px 80px;color:#c8d8e8;font-family:system-ui,sans-serif;}
  .hub-badge{display:inline-block;background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.35);color:#F5C842;font-size:12px;font-weight:700;letter-spacing:.08em;padding:5px 16px;border-radius:20px;margin-bottom:20px;}
  .hub-h1{font-size:clamp(28px,5vw,44px);font-weight:900;color:#fff;line-height:1.15;margin-bottom:14px;}
  .hub-h1 em{color:#F5C842;font-style:normal;}
  .hub-lead{font-size:16px;color:#7a9fbf;line-height:1.75;margin-bottom:48px;max-width:680px;}
  .law-banner{background:rgba(245,200,66,.08);border:1px solid rgba(245,200,66,.25);border-radius:14px;padding:20px 24px;margin-bottom:48px;display:flex;gap:16px;align-items:flex-start;}
  .law-icon{font-size:28px;flex-shrink:0;}
  .law-title{font-size:15px;font-weight:700;color:#F5C842;margin-bottom:4px;}
  .law-desc{font-size:14px;color:#9a8040;line-height:1.6;}
  .changes-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:56px;}
  .change-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;}
  .change-card-head{padding:20px 22px 16px;border-bottom:1px solid rgba(255,255,255,.06);}
  .change-icon{font-size:28px;margin-bottom:10px;}
  .change-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:4px;}
  .change-save{font-size:13px;font-weight:700;color:#4ade80;margin-bottom:8px;}
  .change-desc{font-size:13px;color:#7a9fbf;line-height:1.6;}
  .change-card-body{padding:16px 22px;}
  .change-row{display:flex;justify-content:space-between;font-size:13px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);}
  .change-row:last-child{border-bottom:none;}
  .change-row-label{color:#6b7280;}
  .change-row-val{color:#c8d8e8;font-weight:500;}
  .change-cta{display:block;margin-top:14px;background:#F5C842;color:#091526;font-weight:700;font-size:13px;padding:10px;border-radius:8px;text-decoration:none;text-align:center;}
  .change-cta:hover{background:#FFD700;}
  .savings-section{margin-bottom:56px;}
  .savings-section h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:24px;}
  .scenario-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
  .scenario{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:18px;}
  .scenario-job{font-size:12px;font-weight:700;color:#F5C842;letter-spacing:.06em;text-transform:uppercase;margin-bottom:10px;}
  .scenario-row{display:flex;justify-content:space-between;font-size:13px;padding:4px 0;}
  .scenario-row-l{color:#6b7280;}
  .scenario-row-v{color:#c8d8e8;font-weight:500;}
  .scenario-row-v.sav{color:#4ade80;}
  .compare-section{margin-bottom:56px;}
  .compare-section h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:20px;}
  .compare-table{width:100%;border-collapse:collapse;font-size:14px;}
  .compare-table th{text-align:left;padding:10px 14px;background:rgba(245,200,66,.1);color:#F5C842;font-weight:700;font-size:12px;letter-spacing:.06em;text-transform:uppercase;}
  .compare-table td{padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.05);color:#c8d8e8;}
  .compare-table tr:last-child td{border-bottom:none;}
  .td-yes{color:#4ade80;font-weight:700;}
  .td-no{color:#f87171;}
  .faq-section{margin-bottom:56px;}
  .faq-section h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:20px;}
  .faq-q{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:13px;color:#7a9fbf;line-height:1.7;}
  .tools-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px;}
  .tool-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px;text-decoration:none;text-align:center;transition:border-color .2s;}
  .tool-card:hover{border-color:rgba(245,200,66,.4);}
  .tool-emoji{font-size:24px;margin-bottom:8px;}
  .tool-name{font-size:13px;font-weight:700;color:#fff;margin-bottom:3px;}
  .tool-desc{font-size:11px;color:#6b7280;}
  @media(max-width:680px){.changes-grid{grid-template-columns:1fr;}.scenario-grid{grid-template-columns:1fr;}.tools-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function TaxChanges2026Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

      <div className="hub">
        <div className="hub-badge">One Big Beautiful Bill — Signed 2025 · Active 2025–2028</div>
        <h1 className="hub-h1">2026 Tax Changes — <em>Every New Deduction</em> Explained</h1>
        <p className="hub-lead">
          The One Big Beautiful Bill introduced four major federal tax changes effective 2025–2028.
          Here is exactly what changed, who qualifies, how much you save, and how to calculate your paycheck with the new rules.
        </p>

        <div className="law-banner">
          <div className="law-icon">📜</div>
          <div>
            <div className="law-title">One Big Beautiful Bill — Signed into Law 2025</div>
            <div className="law-desc">
              Effective for tax years 2025–2028. Four above-the-line federal income tax deductions added.
              These reduce your federal taxable income — they do not affect FICA (Social Security + Medicare) or most state income taxes.
              Source: <a href="https://www.irs.gov" target="_blank" rel="noopener" style={{color:'#F5C842'}}>IRS.gov</a>
            </div>
          </div>
        </div>

        {/* 4 CHANGE CARDS */}
        <div className="changes-grid">

          <div className="change-card">
            <div className="change-card-head">
              <div className="change-icon">⏱️</div>
              <div className="change-title">No Tax on Overtime</div>
              <div className="change-save">Save up to $2,750–$4,625/year</div>
              <div className="change-desc">W-2 employees can deduct up to $12,500 of overtime pay annually from federal taxable income.</div>
            </div>
            <div className="change-card-body">
              <div className="change-row"><span className="change-row-label">Max deduction</span><span className="change-row-val">$12,500/year</span></div>
              <div className="change-row"><span className="change-row-label">Who qualifies</span><span className="change-row-val">W-2 FLSA employees</span></div>
              <div className="change-row"><span className="change-row-label">1099 workers</span><span className="change-row-val" style={{color:'#f87171'}}>Not eligible</span></div>
              <div className="change-row"><span className="change-row-label">Affects FICA?</span><span className="change-row-val" style={{color:'#f87171'}}>No</span></div>
              <div className="change-row"><span className="change-row-label">Valid through</span><span className="change-row-val">Tax year 2028</span></div>
              <Link href="/no-tax-on-overtime-deduction" className="change-cta">Calculate Overtime Savings →</Link>
            </div>
          </div>

          <div className="change-card">
            <div className="change-card-head">
              <div className="change-icon">💵</div>
              <div className="change-title">No Tax on Tips</div>
              <div className="change-save">Save up to $5,500/year</div>
              <div className="change-desc">Tipped workers in qualifying occupations can deduct up to $25,000 of tip income from federal taxable income.</div>
            </div>
            <div className="change-card-body">
              <div className="change-row"><span className="change-row-label">Max deduction</span><span className="change-row-val">$25,000/year</span></div>
              <div className="change-row"><span className="change-row-label">Who qualifies</span><span className="change-row-val">Tipped occupations</span></div>
              <div className="change-row"><span className="change-row-label">Income limit</span><span className="change-row-val">Under $160,000</span></div>
              <div className="change-row"><span className="change-row-label">Affects FICA?</span><span className="change-row-val" style={{color:'#f87171'}}>No</span></div>
              <div className="change-row"><span className="change-row-label">Valid through</span><span className="change-row-val">Tax year 2028</span></div>
              <Link href="/no-tax-on-tips-calculator" className="change-cta">Calculate Tip Savings →</Link>
            </div>
          </div>

          <div className="change-card">
            <div className="change-card-head">
              <div className="change-icon">👴</div>
              <div className="change-title">Senior $6,000 Deduction</div>
              <div className="change-save">Save up to $1,320/year</div>
              <div className="change-desc">Taxpayers age 65+ receive an additional $6,000 above-the-line deduction on top of the standard deduction.</div>
            </div>
            <div className="change-card-body">
              <div className="change-row"><span className="change-row-label">Extra deduction</span><span className="change-row-val">$6,000/year</span></div>
              <div className="change-row"><span className="change-row-label">Age requirement</span><span className="change-row-val">65 or older</span></div>
              <div className="change-row"><span className="change-row-label">Income phaseout</span><span className="change-row-val">Above $75,000</span></div>
              <div className="change-row"><span className="change-row-label">On top of</span><span className="change-row-val">Standard deduction</span></div>
              <div className="change-row"><span className="change-row-label">Valid through</span><span className="change-row-val">Tax year 2028</span></div>
              <Link href="/senior-deduction-calculator" className="change-cta">Calculate Senior Savings →</Link>
            </div>
          </div>

          <div className="change-card">
            <div className="change-card-head">
              <div className="change-icon">👶</div>
              <div className="change-title">Trump Account</div>
              <div className="change-save">$38,000+ projected at age 18</div>
              <div className="change-desc">Government-seeded savings account for children under 8. $1,000 federal seed plus up to $2,500/year employer contributions.</div>
            </div>
            <div className="change-card-body">
              <div className="change-row"><span className="change-row-label">Gov seed</span><span className="change-row-val">$1,000 one-time</span></div>
              <div className="change-row"><span className="change-row-label">Max employer/yr</span><span className="change-row-val">$2,500/year</span></div>
              <div className="change-row"><span className="change-row-label">Child age limit</span><span className="change-row-val">Under 8 at opening</span></div>
              <div className="change-row"><span className="change-row-label">Tax treatment</span><span className="change-row-val">Tax-advantaged</span></div>
              <div className="change-row"><span className="change-row-label">Access</span><span className="change-row-val">At age 18</span></div>
              <Link href="/trump-account-calculator" className="change-cta">Calculate Trump Account →</Link>
            </div>
          </div>

        </div>

        {/* REAL SCENARIOS */}
        <div className="savings-section">
          <h2>Real Savings Scenarios by Job</h2>
          <div className="scenario-grid">
            <div className="scenario">
              <div className="scenario-job">🏭 Factory Worker</div>
              <div className="scenario-row"><span className="scenario-row-l">Regular salary</span><span className="scenario-row-v">$52,000</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Annual overtime</span><span className="scenario-row-v">$9,800</span></div>
              <div className="scenario-row"><span className="scenario-row-l">OT deduction</span><span className="scenario-row-v">$9,800</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Federal bracket</span><span className="scenario-row-v">22%</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Annual savings</span><span className="scenario-row-v sav">$2,156</span></div>
            </div>
            <div className="scenario">
              <div className="scenario-job">🍽️ Restaurant Server</div>
              <div className="scenario-row"><span className="scenario-row-l">Base wages</span><span className="scenario-row-v">$28,000</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Annual tips</span><span className="scenario-row-v">$22,000</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Tip deduction</span><span className="scenario-row-v">$22,000</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Federal bracket</span><span className="scenario-row-v">12%</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Annual savings</span><span className="scenario-row-v sav">$2,640</span></div>
            </div>
            <div className="scenario">
              <div className="scenario-job">👴 Retired Worker 65+</div>
              <div className="scenario-row"><span className="scenario-row-l">Income</span><span className="scenario-row-v">$58,000</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Age</span><span className="scenario-row-v">67</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Extra deduction</span><span className="scenario-row-v">$6,000</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Federal bracket</span><span className="scenario-row-v">22%</span></div>
              <div className="scenario-row"><span className="scenario-row-l">Annual savings</span><span className="scenario-row-v sav">$1,320</span></div>
            </div>
          </div>
        </div>

        {/* WHO QUALIFIES TABLE */}
        <div className="compare-section">
          <h2>Who Qualifies — Quick Reference</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Deduction</th>
                <th>W-2 Employee</th>
                <th>1099 Contractor</th>
                <th>Max Amount</th>
                <th>Affects FICA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No Tax on Overtime</td>
                <td className="td-yes">✓ Yes</td>
                <td className="td-no">✗ No</td>
                <td>$12,500/yr</td>
                <td className="td-no">No</td>
              </tr>
              <tr>
                <td>No Tax on Tips</td>
                <td className="td-yes">✓ Yes (tipped)</td>
                <td className="td-yes">✓ Yes (tipped)</td>
                <td>$25,000/yr</td>
                <td className="td-no">No</td>
              </tr>
              <tr>
                <td>Senior Deduction</td>
                <td className="td-yes">✓ Yes (65+)</td>
                <td className="td-yes">✓ Yes (65+)</td>
                <td>$6,000/yr</td>
                <td className="td-no">No</td>
              </tr>
              <tr>
                <td>Trump Account</td>
                <td className="td-yes">✓ Yes</td>
                <td className="td-yes">✓ Yes</td>
                <td>$2,500/yr + seed</td>
                <td className="td-no">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>2026 Tax Changes — FAQs</h2>
          <div className="faq-q"><div className="faq-qt">What are the new tax changes for 2026?</div><div className="faq-qa">Four changes from the One Big Beautiful Bill: no tax on overtime (up to $12,500), no tax on tips (up to $25,000), $6,000 senior deduction (age 65+), and Trump Accounts for children. All reduce federal taxable income for tax years 2025–2028.</div></div>
          <div className="faq-q"><div className="faq-qt">Does the no-tax-on-overtime apply to 1099 workers?</div><div className="faq-qa">No. Only W-2 employees earning FLSA overtime qualify. Self-employed workers and 1099 contractors are not eligible for the overtime deduction.</div></div>
          <div className="faq-q"><div className="faq-qt">How much can I save with the overtime deduction?</div><div className="faq-qa">At 22% bracket: $12,500 max deduction × 22% = $2,750 saved. At 24%: $3,000. At 12%: $1,500. FICA taxes are not reduced.</div></div>
          <div className="faq-q"><div className="faq-qt">Who qualifies for the $6,000 senior deduction?</div><div className="faq-qa">Taxpayers age 65+ with AGI below $75,000 (single) or $150,000 (MFJ) get the full $6,000. It phases out above these thresholds.</div></div>
          <div className="faq-q"><div className="faq-qt">Are these changes permanent?</div><div className="faq-qa">No — currently authorized through tax year 2028. Congress must extend them. The Trump Account program has a longer authorization window.</div></div>
        </div>

        {/* ALL TOOLS */}
        <h2 style={{fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'16px'}}>Calculate Your 2026 Savings</h2>
        <div className="tools-grid">
          <Link href="/no-tax-on-overtime-deduction" className="tool-card">
            <div className="tool-emoji">⏱️</div>
            <div className="tool-name">Overtime Calculator</div>
            <div className="tool-desc">Save up to $2,750+/yr</div>
          </Link>
          <Link href="/no-tax-on-tips-calculator" className="tool-card">
            <div className="tool-emoji">💵</div>
            <div className="tool-name">Tips Calculator</div>
            <div className="tool-desc">Save up to $5,500+/yr</div>
          </Link>
          <Link href="/senior-deduction-calculator" className="tool-card">
            <div className="tool-emoji">👴</div>
            <div className="tool-name">Senior Deduction</div>
            <div className="tool-desc">Extra $6,000 at 65+</div>
          </Link>
          <Link href="/trump-account-calculator" className="tool-card">
            <div className="tool-emoji">👶</div>
            <div className="tool-name">Trump Account</div>
            <div className="tool-desc">$38,000+ at age 18</div>
          </Link>
          <Link href="/" className="tool-card">
            <div className="tool-emoji">💰</div>
            <div className="tool-name">Full Paycheck</div>
            <div className="tool-desc">All deductions included</div>
          </Link>
          <Link href="/federal-paycheck-calculator" className="tool-card">
            <div className="tool-emoji">🏛️</div>
            <div className="tool-name">Federal Calculator</div>
            <div className="tool-desc">Federal only breakdown</div>
          </Link>
          <Link href="/1099-paycheck-calculator" className="tool-card">
            <div className="tool-emoji">📋</div>
            <div className="tool-name">1099 Calculator</div>
            <div className="tool-desc">SE tax + QBI</div>
          </Link>
          <Link href="/how-we-calculate" className="tool-card">
            <div className="tool-emoji">📖</div>
            <div className="tool-name">How We Calculate</div>
            <div className="tool-desc">Full methodology</div>
          </Link>
        </div>

      </div>
    </>
  );
}
