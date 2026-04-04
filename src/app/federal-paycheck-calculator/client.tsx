'use client';
import Link from 'next/link';


const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What federal taxes are taken out of my paycheck?","acceptedAnswer":{"@type":"Answer","text":"Two federal taxes are withheld from every W-2 paycheck: federal income tax (based on your W-4 filing status and 2026 IRS brackets, rates 10%-37%) and FICA tax (Social Security 6.2% up to $184,500 + Medicare 1.45% on all wages). State taxes are separate."}},{"@type":"Question","name":"What is the 2026 federal standard deduction?","acceptedAnswer":{"@type":"Answer","text":"For 2026: $15,000 for Single filers, $30,000 for Married Filing Jointly, and $22,500 for Head of Household. This amount is subtracted from your annualized wages before applying income tax brackets."}},{"@type":"Question","name":"Does the federal paycheck calculator include the overtime tax exemption?","acceptedAnswer":{"@type":"Answer","text":"Yes. Enter your per-period overtime pay and the calculator applies the 2026 One Big Beautiful Bill deduction of up to $12,500 annually, reducing your federal taxable income. FICA is not affected by this deduction."}},{"@type":"Question","name":"What is the Social Security wage base for 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 Social Security wage base is $184,500. You pay 6.2% on wages up to this limit. Income above $184,500 is not subject to Social Security tax but remains subject to Medicare tax (1.45%) with no cap."}},{"@type":"Question","name":"How is federal income tax withheld per paycheck?","acceptedAnswer":{"@type":"Answer","text":"The IRS Publication 15-T annualization method is used: your per-period wages are multiplied by the number of pay periods to get annual wages, the standard deduction is subtracted, progressive brackets are applied, and the annual tax is divided back by pay periods to get per-paycheck withholding."}}]};
const browserScript = "\nfunction calcFederal(){\n  var gross = parseFloat(document.getElementById('fed-gross').value)||0;\n  var freq = document.getElementById('fed-freq').value;\n  var filing = document.getElementById('fed-filing').value;\n  var overtime = parseFloat(document.getElementById('fed-overtime').value)||0;\n  var tips = parseFloat(document.getElementById('fed-tips').value)||0;\n\n  var periods = {weekly:52,biweekly:26,semimonthly:24,monthly:12,annual:1};\n  var n = periods[freq]||26;\n  var annual = gross * n;\n  var annualOT = overtime * n;\n  var annualTips = tips * n;\n\n  // FICA\n  var ssWage = Math.min(annual, 184500);\n  var ssTax = ssWage * 0.062;\n  var medTax = annual * 0.0145;\n  if(annual > 200000) medTax += (annual - 200000) * 0.009;\n  var ficaAnnual = ssTax + medTax;\n\n  // 2026 OBBB deductions (above-the-line)\n  var otDeduct = Math.min(annualOT, 12500);\n  var tipDeduct = Math.min(annualTips, 25000);\n\n  // Standard deduction\n  var stdDed = filing==='mfj' ? 29200 : filing==='hoh' ? 21900 : 14600;\n\n  var taxable = Math.max(0, annual - otDeduct - tipDeduct - stdDed);\n\n  // 2026 federal brackets\n  var fedTax = 0;\n  if(filing==='mfj'){\n    var bm=[[23850,.10],[96950,.12],[206700,.22],[394600,.24],[501050,.32],[751600,.35],[999999999,.37]];\n    var prev=0; for(var i=0;i<bm.length;i++){fedTax+=Math.max(0,Math.min(taxable,bm[i][0])-prev)*bm[i][1];prev=bm[i][0];if(taxable<=bm[i][0])break;}\n  } else {\n    var bs=[[11925,.10],[48475,.12],[103350,.22],[197300,.24],[250525,.32],[626350,.35],[999999999,.37]];\n    var prev2=0; for(var j=0;j<bs.length;j++){fedTax+=Math.max(0,Math.min(taxable,bs[j][0])-prev2)*bs[j][1];prev2=bs[j][0];if(taxable<=bs[j][0])break;}\n  }\n\n  var totalAnnualTax = fedTax + ficaAnnual;\n  var takeHomeAnnual = annual - totalAnnualTax;\n  var takeHomePer = takeHomeAnnual / n;\n  var grossPer = gross;\n  var fedPer = fedTax / n;\n  var ficaPer = ficaAnnual / n;\n  var effectiveRate = annual>0 ? (totalAnnualTax/annual*100).toFixed(1) : '0.0';\n\n  function fmt(v){ return '$'+Math.round(v).toLocaleString(); }\n\n  document.getElementById('fr-gross').textContent = fmt(grossPer);\n  document.getElementById('fr-fica').textContent = '-'+fmt(ficaPer);\n  document.getElementById('fr-fed').textContent = '-'+fmt(fedPer);\n  document.getElementById('fr-total-tax').textContent = fmt((fedPer+ficaPer));\n  document.getElementById('fr-effective').textContent = effectiveRate+'%';\n  document.getElementById('fr-takehome').textContent = fmt(takeHomePer);\n  document.getElementById('fr-annual').textContent = fmt(takeHomeAnnual);\n\n  var savings = (otDeduct + tipDeduct) > 0;\n  var savEl = document.getElementById('fr-savings-row');\n  if(savings){\n    document.getElementById('fr-savings').textContent = fmt((otDeduct+tipDeduct)/n);\n    savEl.style.display='flex';\n  } else { savEl.style.display='none'; }\n\n  document.getElementById('fed-results').style.display='block';\n}\n";

const CSS = `
  body{background:#0a1628;}
  .fw{max-width:900px;margin:0 auto;padding:60px 24px 80px;color:#c8d8e8;font-family:'Inter',sans-serif;}
  .f-badge{display:inline-block;background:rgba(99,102,241,.15);border:1px solid rgba(99,102,241,.35);color:#a5b4fc;font-size:13px;font-weight:600;letter-spacing:.08em;padding:4px 14px;border-radius:20px;margin-bottom:18px;}
  .f-h1{font-size:clamp(28px,5vw,42px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:14px;}
  .f-h1 em{color:#818cf8;font-style:normal;}
  .f-lead{font-size:16px;color:#9dbdd8;line-height:1.7;margin-bottom:36px;max-width:680px;}
  .tax-pills{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px;}
  .tax-pill{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:14px 18px;min-width:160px;}
  .pill-label{font-size:12px;color:#9dbdd8;margin-bottom:4px;}
  .pill-val{font-size:18px;font-weight:700;color:#fff;}
  .pill-sub{font-size:11px;color:#4a6080;margin-top:2px;}
  .calc-box{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;margin-bottom:24px;}
  .calc-box h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:24px;}
  .f-row{margin-bottom:18px;}
  .f-lbl{font-size:13px;color:#8aa4be;margin-bottom:6px;display:block;}
  .f-inp{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 14px;color:#fff;font-size:15px;box-sizing:border-box;}
  .f-inp:focus{outline:none;border-color:#818cf8;}
  .f-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;}
  .f-sel{width:100%;background:#0f1e35;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 14px;color:#fff;font-size:14px;}
  .f-advanced{margin-top:8px;}
  .f-adv-toggle{background:none;border:none;color:#a5b4fc;font-size:13px;cursor:pointer;padding:0;margin-bottom:14px;text-decoration:underline;}
  .f-adv-fields{display:none;}
  .calc-btn{width:100%;background:#818cf8;color:#fff;font-weight:700;font-size:16px;padding:14px;border:none;border-radius:10px;cursor:pointer;margin-top:8px;}
  .calc-btn:hover{background:#6366f1;}
  .results{display:none;margin-top:28px;border-top:1px solid rgba(255,255,255,.08);padding-top:24px;}
  .r-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:14px;}
  .r-label{color:#8aa4be;}
  .r-val{color:#c8d8e8;font-weight:500;}
  .r-val.neg{color:#f87171;}
  .r-val.sav{color:#4ade80;}
  .r-total{display:flex;justify-content:space-between;padding:14px 0 4px;font-size:20px;font-weight:700;}
  .r-total .r-label{color:#fff;}
  .r-total .r-val{color:#818cf8;}
  .r-annual{text-align:center;font-size:13px;color:#9dbdd8;margin-top:10px;}
  .r-annual span{color:#a5b4fc;font-weight:600;}
  .note-box{background:rgba(99,102,241,.08);border-left:3px solid #818cf8;padding:14px 18px;border-radius:0 8px 8px 0;font-size:13px;color:#a5b4fc;margin:24px 0;}
  .related{margin-top:48px;}
  .related h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:16px;}
  .rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
  .rel-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px;text-decoration:none;transition:border-color .2s;}
  .rel-card:hover{border-color:rgba(129,140,248,.4);}
  .rel-title{font-size:14px;font-weight:600;color:#fff;margin-bottom:4px;}
  .rel-desc{font-size:12px;color:#9dbdd8;}
  .faq{margin-top:48px;}
  .faq h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:20px;}
  .faq-q{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:14px;font-weight:600;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:13px;color:#8aa4be;line-height:1.7;}
  @media(max-width:640px){.f-grid{grid-template-columns:1fr;}.rel-grid{grid-template-columns:1fr;}.tax-pills{flex-direction:column;}}
`;

const advToggle = `
function toggleAdv(){
  var el=document.getElementById('adv-fields');
  var btn=document.getElementById('adv-btn');
  if(el.style.display==='none'||!el.style.display){el.style.display='block';btn.textContent='▲ Hide advanced options';}
  else{el.style.display='none';btn.textContent='▼ Show advanced options (overtime, tips)';}
}
`;

export default function FederalPaycheckPage() {
  return (
    <>

      <div className="fw">
        <div className="f-badge">Federal Only — All 50 States</div>
        <h1 className="f-h1">Federal Paycheck Calculator <em>2026</em></h1>
        <p className="f-lead">
          Calculate your exact federal income tax and FICA withholding for any pay period.
          Based on 2026 IRS Publication 15-T tables. Includes overtime and tip deductions from the new law.
        </p>

        <div className="tax-pills">
          <div className="tax-pill">
            <div className="pill-label">Federal income tax</div>
            <div className="pill-val">10% – 37%</div>
            <div className="pill-sub">Progressive brackets</div>
          </div>
          <div className="tax-pill">
            <div className="pill-label">Social Security</div>
            <div className="pill-val">6.2%</div>
            <div className="pill-sub">Up to $184,500</div>
          </div>
          <div className="tax-pill">
            <div className="pill-label">Medicare</div>
            <div className="pill-val">1.45%</div>
            <div className="pill-sub">No wage limit</div>
          </div>
          <div className="tax-pill">
            <div className="pill-label">Standard deduction</div>
            <div className="pill-val">$15,000</div>
            <div className="pill-sub">Single · $30,000 MFJ</div>
          </div>
        </div>

        <div className="calc-box">
          <h2>Calculate Federal Withholding</h2>

          <div className="f-grid">
            <div>
              <label className="f-lbl" htmlFor="fed-gross">Gross pay per period</label>
              <input className="f-inp" id="fed-gross" type="number" placeholder="2885" defaultValue="2885" />
            </div>
            <div>
              <label className="f-lbl" htmlFor="fed-freq">Pay frequency</label>
              <select className="f-sel" id="fed-freq">
                <option value="weekly">Weekly (52×/year)</option>
                <option value="biweekly" selected>Bi-weekly (26×/year)</option>
                <option value="semimonthly">Semi-monthly (24×/year)</option>
                <option value="monthly">Monthly (12×/year)</option>
                <option value="annual">Annual lump sum</option>
              </select>
            </div>
          </div>

          <div className="f-row">
            <label className="f-lbl" htmlFor="fed-filing">Filing status (W-4)</label>
            <select className="f-sel" id="fed-filing">
              <option value="single">Single / Married Filing Separately</option>
              <option value="mfj">Married Filing Jointly</option>
              <option value="hoh">Head of Household</option>
            </select>
          </div>

          <div className="f-advanced">
            <button className="f-adv-toggle" id="adv-btn" onClick={() => typeof window !== 'undefined' && window.toggleAdv && window.toggleAdv()}>
              ▼ Show advanced options (overtime, tips)
            </button>
            <div className="f-adv-fields" id="adv-fields">
              <div className="f-grid">
                <div>
                  <label className="f-lbl" htmlFor="fed-overtime">Overtime pay this period</label>
                  <input className="f-inp" id="fed-overtime" type="number" placeholder="0" defaultValue="0" />
                </div>
                <div>
                  <label className="f-lbl" htmlFor="fed-tips">Tips this period</label>
                  <input className="f-inp" id="fed-tips" type="number" placeholder="0" defaultValue="0" />
                </div>
              </div>
              <p style={{fontSize:'12px',color:'#4a6080',marginTop:'-8px',marginBottom:'16px'}}>
                2026 law: overtime deduction up to $12,500/yr · tip deduction up to $25,000/yr (federal taxable income only)
              </p>
            </div>
          </div>

          <button className="calc-btn" onClick={() => typeof window !== 'undefined' && window.calcFederal && window.calcFederal()}>
            Calculate Federal Withholding
          </button>

          <div className="results" id="fed-results">
            <div className="r-row"><span className="r-label">Gross pay this period</span><span className="r-val" id="fr-gross"></span></div>
            <div className="r-row"><span className="r-label">Federal income tax</span><span className="r-val neg" id="fr-fed"></span></div>
            <div className="r-row"><span className="r-label">Social Security + Medicare (FICA)</span><span className="r-val neg" id="fr-fica"></span></div>
            <div className="r-row" id="fr-savings-row" style={{display:'none'}}>
              <span className="r-label">2026 overtime/tip deduction savings</span>
              <span className="r-val sav" id="fr-savings"></span>
            </div>
            <div className="r-row"><span className="r-label">Total federal tax this period</span><span className="r-val neg" id="fr-total-tax"></span></div>
            <div className="r-row"><span className="r-label">Effective federal rate</span><span className="r-val" id="fr-effective"></span></div>
            <div className="r-total">
              <span className="r-label">Take-home this period</span>
              <span className="r-val" id="fr-takehome"></span>
            </div>
            <div className="r-annual">Annual take-home (federal only): <span id="fr-annual"></span></div>
          </div>
        </div>

        <div className="note-box">
          This calculator covers federal taxes only (income tax + FICA). To include your state income tax,
          use the <a href="/" style={{color:'#818cf8'}}>full paycheck calculator</a> with state selector.
          Source: <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener" style={{color:'#818cf8'}}>IRS Publication 15-T (2026)</a>
        </div>

        <div className="related">
          <h2>Related Calculators</h2>
          <div className="rel-grid">
            <Link href="/" className="rel-card">
              <div className="rel-title">Full Paycheck Calculator</div>
              <div className="rel-desc">Federal + state + FICA for all 50 states</div>
            </Link>
            <Link href="/1099-paycheck-calculator" className="rel-card">
              <div className="rel-title">1099 Calculator</div>
              <div className="rel-desc">Self-employment tax + QBI deduction</div>
            </Link>
            <Link href="/no-tax-on-overtime-deduction" className="rel-card">
              <div className="rel-title">No Tax on Overtime</div>
              <div className="rel-desc">2026 deduction up to $12,500</div>
            </Link>
            <Link href="/bonus-tax-calculator" className="rel-card">
              <div className="rel-title">Bonus Tax Calculator</div>
              <div className="rel-desc">Flat 22% supplemental rate</div>
            </Link>
            <Link href="/w4-withholding-calculator" className="rel-card">
              <div className="rel-title">W-4 Withholding</div>
              <div className="rel-desc">Optimize your W-4 allowances</div>
            </Link>
            <Link href="/how-we-calculate" className="rel-card">
              <div className="rel-title">How We Calculate</div>
              <div className="rel-desc">Full methodology + IRS sources</div>
            </Link>
          </div>
        </div>

        <div className="faq">
          <h2>Federal Paycheck FAQs</h2>
          <div className="faq-q">
            <div className="faq-qt">What federal taxes are taken out of my paycheck?</div>
            <div className="faq-qa">Two federal taxes: federal income tax (10%–37% based on brackets and filing status) and FICA (Social Security 6.2% up to $184,500 + Medicare 1.45% on all wages). State taxes are separate.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">What is the 2026 standard deduction?</div>
            <div className="faq-qa">$15,000 for Single · $30,000 for Married Filing Jointly · $21,900 for Head of Household. Subtracted from annualized wages before applying brackets.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">Does this include the 2026 overtime tax exemption?</div>
            <div className="faq-qa">Yes — enter overtime pay in Advanced Options. The calculator applies up to $12,500 annual deduction from the One Big Beautiful Bill. FICA is not reduced by this deduction.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">What is the Social Security wage base for 2026?</div>
            <div className="faq-qa">$184,500. You pay 6.2% on wages up to this limit. Above $184,500 no Social Security tax applies, but Medicare (1.45%) continues with no cap.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">How is federal withholding calculated per paycheck?</div>
            <div className="faq-qa">IRS Pub 15-T annualization: per-period wages × pay periods = annual wages → subtract standard deduction → apply progressive brackets → divide by pay periods. This is the same method your payroll software uses.</div>
          </div>
        </div>

      </div>
    </>
  );
}
