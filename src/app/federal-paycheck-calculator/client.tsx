'use client';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import CalculatorResultActions from '@/components/CalculatorResultActions';
import { estimateFederalIncomeTax } from '@/lib/paycheck';
import { FICA, STANDARD_DEDUCTION } from '@/lib/taxRates2026';

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What federal taxes are taken out of my paycheck?","acceptedAnswer":{"@type":"Answer","text":"Two federal taxes are withheld from every W-2 paycheck: federal income tax (based on your W-4 filing status and 2026 IRS brackets, rates 10%-37%) and FICA tax (Social Security 6.2% up to $184,500 + Medicare 1.45% on all wages). State taxes are separate."}},{"@type":"Question","name":"What is the 2026 federal standard deduction?","acceptedAnswer":{"@type":"Answer","text":"For 2026: $15,000 for Single filers, $30,000 for Married Filing Jointly, and $22,500 for Head of Household. This amount is subtracted from your annualized wages before applying income tax brackets."}},{"@type":"Question","name":"Does the federal paycheck calculator include the overtime tax exemption?","acceptedAnswer":{"@type":"Answer","text":"Yes. Enter your per-period overtime pay and the calculator applies the 2026 One Big Beautiful Bill deduction of up to $12,500 annually, reducing your federal taxable income. FICA is not affected by this deduction."}},{"@type":"Question","name":"What is the Social Security wage base for 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 Social Security wage base is $184,500. You pay 6.2% on wages up to this limit. Income above $184,500 is not subject to Social Security tax but remains subject to Medicare tax (1.45%) with no cap."}},{"@type":"Question","name":"How is federal income tax withheld per paycheck?","acceptedAnswer":{"@type":"Answer","text":"The IRS Publication 15-T annualization method is used: your per-period wages are multiplied by the number of pay periods to get annual wages, the standard deduction is subtracted, progressive brackets are applied, and the annual tax is divided back by pay periods to get per-paycheck withholding."}}]};
const browserScript = "\nfunction calcFederal(){\n  var gross = parseFloat(document.getElementById('fed-gross').value)||0;\n  var freq = document.getElementById('fed-freq').value;\n  var filing = document.getElementById('fed-filing').value;\n  var overtime = parseFloat(document.getElementById('fed-overtime').value)||0;\n  var tips = parseFloat(document.getElementById('fed-tips').value)||0;\n\n  var periods = {weekly:52,biweekly:26,semimonthly:24,monthly:12,annual:1};\n  var n = periods[freq]||26;\n  var annual = gross * n;\n  var annualOT = overtime * n;\n  var annualTips = tips * n;\n\n  // FICA\n  var ssWage = Math.min(annual, 184500);\n  var ssTax = ssWage * 0.062;\n  var medTax = annual * 0.0145;\n  if(annual > 200000) medTax += (annual - 200000) * 0.009;\n  var ficaAnnual = ssTax + medTax;\n\n  // 2026 OBBB deductions (above-the-line)\n  var otDeduct = Math.min(annualOT, 12500);\n  var tipDeduct = Math.min(annualTips, 25000);\n\n  // Standard deduction\n  var stdDed = filing==='mfj' ? 32200 : filing==='hoh' ? 24150 : 16100;\n\n  var taxable = Math.max(0, annual - otDeduct - tipDeduct - stdDed);\n\n  // 2026 federal brackets\n  var fedTax = 0;\n  if(filing==='mfj'){\n    var bm=[[24800,.10],[100800,.12],[211400,.22],[403550,.24],[512450,.32],[768700,.35],[999999999,.37]];\n    var prev=0; for(var i=0;i<bm.length;i++){fedTax+=Math.max(0,Math.min(taxable,bm[i][0])-prev)*bm[i][1];prev=bm[i][0];if(taxable<=bm[i][0])break;}\n  } else {\n    var bs=[[12400,.10],[50400,.12],[105700,.22],[201775,.24],[256225,.32],[640600,.35],[999999999,.37]];\n    var prev2=0; for(var j=0;j<bs.length;j++){fedTax+=Math.max(0,Math.min(taxable,bs[j][0])-prev2)*bs[j][1];prev2=bs[j][0];if(taxable<=bs[j][0])break;}\n  }\n\n  var totalAnnualTax = fedTax + ficaAnnual;\n  var takeHomeAnnual = annual - totalAnnualTax;\n  var takeHomePer = takeHomeAnnual / n;\n  var grossPer = gross;\n  var fedPer = fedTax / n;\n  var ficaPer = ficaAnnual / n;\n  var effectiveRate = annual>0 ? (totalAnnualTax/annual*100).toFixed(1) : '0.0';\n\n  function fmt(v){ return '$'+Math.round(v).toLocaleString(); }\n\n  document.getElementById('fr-gross').textContent = fmt(grossPer);\n  document.getElementById('fr-fica').textContent = '-'+fmt(ficaPer);\n  document.getElementById('fr-fed').textContent = '-'+fmt(fedPer);\n  document.getElementById('fr-total-tax').textContent = fmt((fedPer+ficaPer));\n  document.getElementById('fr-effective').textContent = effectiveRate+'%';\n  document.getElementById('fr-takehome').textContent = fmt(takeHomePer);\n  document.getElementById('fr-annual').textContent = fmt(takeHomeAnnual);\n\n  var savings = (otDeduct + tipDeduct) > 0;\n  var savEl = document.getElementById('fr-savings-row');\n  if(savings){\n    document.getElementById('fr-savings').textContent = fmt((otDeduct+tipDeduct)/n);\n    savEl.style.display='flex';\n  } else { savEl.style.display='none'; }\n\n  document.getElementById('fed-results').style.display='block';\n}\n";

const CSS = `
  body{background:#0a1628;}
  .fw{max-width:900px;margin:0 auto;padding:60px 24px 80px;color:#c8d8e8;font-family:'Inter',sans-serif;}
  .f-badge{display:inline-block;background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.35);color:#F5C842;font-size:13px;font-weight:600;letter-spacing:.08em;padding:4px 14px;border-radius:20px;margin-bottom:18px;}
  .f-h1{font-size:clamp(28px,5vw,42px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:14px;}
  .f-h1 em{color:#F5C842;font-style:normal;}
  .f-lead{font-size:16px;color:#9dbdd8;line-height:1.7;margin-bottom:36px;max-width:680px;}
  .tax-pills{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px;}
  .tax-pill{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:14px 18px;min-width:160px;}
  .pill-label{font-size:15px;color:#b8c8d8;margin-bottom:4px;}
  .pill-val{font-size:18px;font-weight:700;color:#fff;}
  .pill-sub{font-size:13px;color:#b8c8d8;margin-top:2px;}
  .calc-box{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;margin-bottom:24px;}
  .calc-box h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:24px;}
  .f-row{margin-bottom:18px;}
  .f-lbl{font-size:15px;color:#b8c8d8;margin-bottom:6px;display:block;}
  .f-inp{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 14px;color:#fff;font-size:15px;box-sizing:border-box;}
  .f-inp:focus{outline:2px solid #F5C842;outline-offset:1px;}
  .f-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;}
  .f-sel{width:100%;background:#0f1e35;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 14px;color:#fff;font-size:14px;}
  .f-advanced{margin-top:8px;}
  .f-adv-toggle{background:none;border:none;color:#F5C842;font-size:14px;cursor:pointer;padding:0;margin-bottom:14px;text-decoration:underline;}
  .f-adv-fields{display:none;}
  .calc-btn{width:100%;background:#F5C842;color:#091526;font-weight:700;font-size:16px;padding:14px;border:none;border-radius:10px;cursor:pointer;margin-top:8px;}
  .calc-btn:hover{background:#FFD700;}
  .calc-btn:focus-visible,.f-adv-toggle:focus-visible,.note-box a:focus-visible,.rel-card:focus-visible{outline:3px solid #fff;outline-offset:3px;}
  .results{display:none;margin-top:28px;border-top:1px solid rgba(255,255,255,.08);padding-top:24px;}
  .r-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:15px;}
  .r-label{color:#8aa4be;}
  .r-val{color:#c8d8e8;font-weight:500;}
  .r-val.neg{color:#f87171;}
  .r-val.sav{color:#4ade80;}
  .r-total{display:flex;justify-content:space-between;padding:14px 0 4px;font-size:20px;font-weight:700;}
  .r-total .r-label{color:#fff;}
  .r-total .r-val{color:#F5C842;}
  .r-annual{text-align:center;font-size:14px;color:#b8c8d8;margin-top:10px;}
  .r-annual span{color:#F5C842;font-weight:600;}
  .note-box{background:rgba(245,200,66,.08);border-left:3px solid #F5C842;padding:14px 18px;border-radius:0 8px 8px 0;font-size:15px;color:#b8c8d8;margin:24px 0;}
  .related{margin-top:48px;}
  .related h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:16px;}
  .rel-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;}
  .rel-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px;text-decoration:none;transition:border-color .2s;}
  .rel-card:hover{border-color:rgba(245,200,66,.6);}
  .rel-title{font-size:15px;font-weight:600;color:#fff;margin-bottom:4px;text-decoration:underline;text-underline-offset:3px;}
  .rel-desc{font-size:14px;color:#b8c8d8;}
  .faq{margin-top:48px;}
  .faq h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:20px;}
  .faq-q{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:16px;font-weight:600;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:16px;color:#b8c8d8;line-height:1.7;}
  @media(max-width:640px){.fw{padding:24px 6px 40px;}.calc-box{padding:16px 12px;}.f-grid{grid-template-columns:1fr;gap:8px;}.rel-grid{grid-template-columns:1fr;}.tax-pills{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}.tax-pill{min-width:0;padding:12px;}.r-row{gap:12px;}.r-total{gap:12px;font-size:18px;}}
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
  const [hasCalculated, setHasCalculated] = useState(false);
  const [calculationError, setCalculationError] = useState('');

  function invalidateResult() {
    setCalculationError('');
    setHasCalculated(false);
    const results = document.getElementById('fed-results');
    if (results) results.style.display = 'none';
  }

  function calculate() {
    const grossInput = document.getElementById('fed-gross') as HTMLInputElement | null;
    const overtimeInput = document.getElementById('fed-overtime') as HTMLInputElement | null;
    const tipsInput = document.getElementById('fed-tips') as HTMLInputElement | null;
    const gross = Number(grossInput?.value);
    const overtime = Number(overtimeInput?.value);
    const tips = Number(tipsInput?.value);
    if (!Number.isFinite(gross) || gross <= 0 || !Number.isFinite(overtime) || overtime < 0 || !Number.isFinite(tips) || tips < 0) {
      setCalculationError('Enter gross pay greater than zero and non-negative overtime and tips.');
      invalidateResult();
      return;
    }
    if (!window.calcFederal || !overtimeInput || !tipsInput) {
      setCalculationError('The calculator did not load. Refresh the page and try again.');
      invalidateResult();
      return;
    }
    window.calcFederal();

    const payPeriods: Record<string, number> = {
      weekly: 52,
      biweekly: 26,
      semimonthly: 24,
      monthly: 12,
      annual: 1,
    };
    const frequency = (document.getElementById('fed-freq') as HTMLSelectElement | null)?.value ?? 'biweekly';
    const periods = payPeriods[frequency] ?? 26;
    const filing = (document.getElementById('fed-filing') as HTMLSelectElement | null)?.value;
    const filingStatus = filing === 'mfj' ? 'married' : filing === 'hoh' ? 'head' : 'single';
    const annualGross = gross * periods;
    const annualOTDeduction = Math.min(overtime * periods, 12500);
    const annualTipDeduction = Math.min(tips * periods, 25000);
    const federalTaxAnnual = estimateFederalIncomeTax(
      annualGross - annualOTDeduction - annualTipDeduction,
      filingStatus,
    );
    const baselineFederalTaxAnnual = estimateFederalIncomeTax(annualGross, filingStatus);
    const socialSecurityAnnual = Math.min(annualGross, FICA.socialSecurity.cap) * FICA.socialSecurity.rate;
    const additionalMedicareThreshold = filingStatus === 'married'
      ? 250000
      : filing === 'mfs' ? 125000 : FICA.additionalMedicare.threshold;
    const medicareAnnual = annualGross * FICA.medicare.rate
      + Math.max(0, annualGross - additionalMedicareThreshold) * FICA.additionalMedicare.rate;
    const ficaAnnual = socialSecurityAnnual + medicareAnnual;
    const estimatedSavingsPerPeriod = Math.max(0, baselineFederalTaxAnnual - federalTaxAnnual) / periods;
    const takeHomePerPeriod = (annualGross - federalTaxAnnual - ficaAnnual) / periods;
    const fmt = (value: number) => `$${Math.round(value).toLocaleString('en-US')}`;
    const write = (id: string, value: string) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    };

    write('fr-savings', '');
    const savingsRow = document.getElementById('fr-savings-row');
    if (savingsRow) savingsRow.style.display = 'none';
    write('fr-gross', fmt(gross));
    write('fr-fed', `-${fmt(federalTaxAnnual / periods)}`);
    write('fr-fica', `-${fmt(ficaAnnual / periods)}`);
    write('fr-total-tax', fmt((federalTaxAnnual + ficaAnnual) / periods));
    write('fr-effective', `${((federalTaxAnnual + ficaAnnual) / annualGross * 100).toFixed(1)}%`);
    write('fr-takehome', fmt(takeHomePerPeriod));
    write('fr-annual', fmt(annualGross - federalTaxAnnual - ficaAnnual));
    if (annualOTDeduction > 0 || annualTipDeduction > 0) {
      write('fr-savings', fmt(estimatedSavingsPerPeriod));
      if (savingsRow) savingsRow.style.display = 'flex';
    }

    setCalculationError('');
    setHasCalculated(true);
  }

  return (
    <>
      <style>{CSS}</style>
      <Script id="federal-calculator-functions" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: browserScript + advToggle }} />
      <div className="fw">
        <div className="f-badge">Federal Only — All 50 States</div>
        <h1 className="f-h1">Federal Paycheck Calculator <em>2026</em></h1>
        <p className="f-lead">
          Estimate federal income tax and FICA for any pay period.
          Based on 2026 IRS federal tax brackets. Includes overtime and tip deductions from the new law.
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
            <div className="pill-val">{`$${STANDARD_DEDUCTION.single.toLocaleString('en-US')}`}</div>
            <div className="pill-sub">{`Single · $${STANDARD_DEDUCTION.married.toLocaleString('en-US')} MFJ · $${STANDARD_DEDUCTION.hoh.toLocaleString('en-US')} HOH`}</div>
          </div>
        </div>

        <div className="calc-box">
          <h2>Calculate Federal Withholding</h2>

          <div className="f-grid">
            <div>
              <label className="f-lbl" htmlFor="fed-gross">Gross pay per period</label>
              <input className="f-inp" id="fed-gross" type="number" placeholder="2885" defaultValue="2885" min={0} onChange={invalidateResult} />
            </div>
            <div>
              <label className="f-lbl" htmlFor="fed-freq">Pay frequency</label>
              <select className="f-sel" id="fed-freq" defaultValue="biweekly" onChange={invalidateResult}>
                <option value="weekly">Weekly (52×/year)</option>
                <option value="biweekly">Bi-weekly (26×/year)</option>
                <option value="semimonthly">Semi-monthly (24×/year)</option>
                <option value="monthly">Monthly (12×/year)</option>
                <option value="annual">Annual lump sum</option>
              </select>
            </div>
          </div>

          <div className="f-row">
            <label className="f-lbl" htmlFor="fed-filing">Filing status (W-4)</label>
            <select className="f-sel" id="fed-filing" onChange={invalidateResult}>
              <option value="single">Single</option>
              <option value="mfs">Married Filing Separately</option>
              <option value="mfj">Married Filing Jointly</option>
              <option value="hoh">Head of Household</option>
            </select>
          </div>

          <div className="f-advanced">
            <button type="button" className="f-adv-toggle" id="adv-btn" onClick={() => window.toggleAdv?.()}>
              ▼ Show advanced options (overtime, tips)
            </button>
            <div className="f-adv-fields" id="adv-fields">
              <div className="f-grid">
                <div>
                  <label className="f-lbl" htmlFor="fed-overtime">Overtime pay this period</label>
                  <input className="f-inp" id="fed-overtime" type="number" placeholder="0" defaultValue="0" min={0} onChange={invalidateResult} />
                </div>
                <div>
                  <label className="f-lbl" htmlFor="fed-tips">Tips this period</label>
                  <input className="f-inp" id="fed-tips" type="number" placeholder="0" defaultValue="0" min={0} onChange={invalidateResult} />
                </div>
              </div>
              <p style={{fontSize:'14px',color:'#b8c8d8',lineHeight:1.6,marginTop:'-8px',marginBottom:'16px'}}>
                2026 law: overtime deduction up to $12,500/yr · tip deduction up to $25,000/yr (federal taxable income only)
              </p>
            </div>
          </div>

          <button type="button" className="calc-btn" onClick={calculate}>
            Calculate Federal Withholding
          </button>
          {calculationError && <p role="alert" style={{ color: '#fca5a5', fontSize: 14 }}>{calculationError}</p>}

          <div className="results" id="fed-results">
            <div className="r-row"><span className="r-label">Gross pay this period</span><span className="r-val" id="fr-gross"></span></div>
            <div className="r-row"><span className="r-label">Federal income tax</span><span className="r-val neg" id="fr-fed"></span></div>
            <div className="r-row"><span className="r-label">Social Security + Medicare (FICA)</span><span className="r-val neg" id="fr-fica"></span></div>
            <div className="r-row" id="fr-savings-row" style={{display:'none'}}>
              <span className="r-label">Estimated federal tax savings from deductions</span>
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
          {hasCalculated && (
            <CalculatorResultActions
              summary={() => {
                const read = (id: string) => document.getElementById(id)?.textContent?.trim() ?? '';
                const takeHome = read('fr-takehome');
                if (!takeHome) return null;
                return `2026 federal paycheck estimate (${(document.getElementById('fed-filing') as HTMLSelectElement | null)?.selectedOptions[0]?.textContent ?? ''})\nGross pay this period: ${read('fr-gross')}\nFederal income tax: ${read('fr-fed')}\nSocial Security and Medicare: ${read('fr-fica')}\n${read('fr-savings') ? `Estimated federal tax savings from modeled deductions: ${read('fr-savings')}\n` : ''}Take-home this period: ${takeHome}\nAnnual federal-only take-home estimate: ${read('fr-annual')}\nState and local taxes, deduction eligibility details, credits, and employer benefits are not modeled; actual W-4 withholding may differ.`;
              }}
              relatedLinks={[
                { href: '/', label: 'Full paycheck calculator →' },
                { href: '/1099-paycheck-calculator', label: '1099 tax calculator →' },
                { href: '/w4-withholding-calculator', label: 'W-4 withholding guide →' },
              ]}
            />
          )}
        </div>

        <div className="note-box">
          This calculator covers federal taxes only (income tax + FICA). To include your state income tax,
          use the <a href="/" style={{color:'#F5C842',textDecoration:'underline'}}>full paycheck calculator</a> with state selector.
          Source: <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{color:'#F5C842',textDecoration:'underline'}}>IRS Publication 15-T</a>
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
            <div className="faq-qa">$16,100 for Single · $32,200 for Married Filing Jointly · $24,150 for Head of Household. Subtracted from annualized wages before applying brackets.</div>
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
            <div className="faq-qa">This estimate annualizes pay-period wages, subtracts a modeled standard deduction, applies progressive federal brackets, and divides the annual estimate by pay periods. Your employer&apos;s W-4 withholding may differ.</div>
          </div>
        </div>

      </div>
      {/* AuthorBox */}
      <div style={{ display:'flex', alignItems:'center', gap:14, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px 18px', margin:'32px 0 16px' }}>
        <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(245,200,66,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0 }}>✍️</div>
        <div>
          <div style={{ fontSize:13, fontWeight:700, color:'#e8edf8' }}>the PrivatePaycheck Team</div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginTop:2 }}>Updated June 2026</div>
        </div>
      </div>
    </>
  );
}
