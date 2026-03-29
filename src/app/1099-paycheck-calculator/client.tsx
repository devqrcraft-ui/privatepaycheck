'use client';
import Link from 'next/link';


const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is self-employment tax for 1099 workers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Self-employment tax is 15.3% of net self-employment income: 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare (no limit). As a 1099 worker you pay both the employee and employer portions."}},{"@type":"Question","name":"Can 1099 contractors deduct self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can deduct 50% of your self-employment tax from gross income before calculating federal income tax. This deduction is automatic and does not require itemizing."}},{"@type":"Question","name":"What is the QBI deduction for self-employed workers?","acceptedAnswer":{"@type":"Answer","text":"The Qualified Business Income deduction allows most self-employed workers to deduct up to 20% of qualified business income from federal taxable income. Income limits apply above $197,300 (single) for certain service businesses in 2026."}},{"@type":"Question","name":"How much should I set aside for taxes as a 1099 contractor?","acceptedAnswer":{"@type":"Answer","text":"A common rule of thumb is 25-30% of net income. This covers self-employment tax (15.3%) plus federal income tax (typically 10-22% for most contractors). Use the calculator for a precise figure based on your actual income and state."}},{"@type":"Question","name":"Do 1099 workers qualify for the overtime tax exemption in 2026?","acceptedAnswer":{"@type":"Answer","text":"No. The 2026 overtime deduction from the One Big Beautiful Bill applies only to W-2 employees earning overtime as defined by the Fair Labor Standards Act. Independent contractors are not eligible."}}]};

const browserScript = "\nfunction calc1099(){\n  var gross = parseFloat(document.getElementById('g1099').value)||0;\n  var expenses = parseFloat(document.getElementById('exp1099').value)||0;\n  var qbi = document.getElementById('qbi1099').checked;\n  var state = document.getElementById('st1099').value;\n  var filing = document.getElementById('fil1099').value;\n\n  var net = Math.max(0, gross - expenses);\n  var seBase = net * 0.9235;\n  var ssTax = Math.min(seBase, 184500) * 0.124;\n  var medTax = seBase * 0.029;\n  var seTax = ssTax + medTax;\n  var seDeduct = seTax * 0.5;\n\n  var taxable = net - seDeduct;\n  if(qbi) taxable = taxable * 0.80;\n\n  var stdDed = filing==='mfj' ? 29200 : filing==='hoh' ? 21900 : 14600;\n  taxable = Math.max(0, taxable - stdDed);\n\n  var fedTax = 0;\n  if(filing==='mfj'){\n    var bm=[[23850,.10],[96950,.12],[206700,.22],[394600,.24],[501050,.32],[751600,.35],[999999999,.37]];\n    var prev=0; for(var i=0;i<bm.length;i++){var top=bm[i][0],rate=bm[i][1];fedTax+=Math.max(0,Math.min(taxable,top)-prev)*rate;prev=top;if(taxable<=top)break;}\n  } else {\n    var bs=[[11925,.10],[48475,.12],[103350,.22],[197300,.24],[250525,.32],[626350,.35],[999999999,.37]];\n    var prev2=0; for(var j=0;j<bs.length;j++){var top2=bs[j][0],rate2=bs[j][1];fedTax+=Math.max(0,Math.min(taxable,top2)-prev2)*rate2;prev2=top2;if(taxable<=top2)break;}\n  }\n\n  var stateRates={AL:.05,AZ:.025,AR:.044,CA:.093,CO:.044,CT:.05,DE:.066,GA:.055,HI:.11,ID:.058,IL:.0495,IN:.0305,IA:.057,KS:.057,KY:.04,LA:.03,ME:.075,MD:.0575,MA:.05,MI:.0425,MN:.0985,MS:.05,MO:.054,MT:.069,NE:.0664,NJ:.1075,NM:.059,NY:.109,NC:.0475,ND:.025,OH:.035,OK:.05,OR:.099,PA:.0307,RI:.0599,SC:.065,UT:.0465,VT:.0875,VA:.0575,WV:.065,WI:.0765};\n  var stateTax = (stateRates[state]||0) * net;\n\n  var totalTax = fedTax + seTax + stateTax;\n  var takeHome = gross - expenses - totalTax;\n  var quarterly = totalTax / 4;\n  var effectiveRate = gross>0 ? (totalTax/gross*100).toFixed(1) : '0.0';\n\n  function fmt(n){ return '$'+Math.round(n).toLocaleString(); }\n\n  document.getElementById('r-gross').textContent = fmt(gross);\n  document.getElementById('r-expenses').textContent = '-'+fmt(expenses);\n  document.getElementById('r-net').textContent = fmt(net);\n  document.getElementById('r-se').textContent = '-'+fmt(seTax);\n  document.getElementById('r-fed').textContent = '-'+fmt(fedTax);\n  document.getElementById('r-state').textContent = '-'+fmt(stateTax);\n  document.getElementById('r-effective').textContent = effectiveRate+'%';\n  document.getElementById('r-total-tax').textContent = fmt(totalTax);\n  document.getElementById('r-takehome').textContent = fmt(takeHome);\n  document.getElementById('r-quarterly').textContent = fmt(quarterly);\n  document.getElementById('results1099').style.display='block';\n}\n";

const CSS = `
  body{background:#0a1628;}
  .c-wrap{max-width:920px;margin:0 auto;padding:60px 24px 80px;color:#c8d8e8;font-family:'Inter',sans-serif;}
  .c-badge{display:inline-block;background:rgba(245,200,66,.1);border:1px solid rgba(245,200,66,.3);color:#F5C842;font-size:12px;font-weight:600;letter-spacing:.08em;padding:4px 14px;border-radius:20px;margin-bottom:18px;}
  .c-h1{font-size:clamp(28px,5vw,42px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:14px;}
  .c-h1 em{color:#F5C842;font-style:normal;}
  .c-lead{font-size:16px;color:#7a9fbf;line-height:1.7;margin-bottom:36px;max-width:680px;}
  .c-diff{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:48px;}
  .c-diff-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:20px;}
  .c-diff-card.w2{border-color:rgba(99,102,241,.3);}
  .c-diff-card.k99{border-color:rgba(245,200,66,.3);}
  .c-diff-title{font-size:13px;font-weight:700;letter-spacing:.06em;margin-bottom:14px;text-transform:uppercase;}
  .c-diff-card.w2 .c-diff-title{color:#a5b4fc;}
  .c-diff-card.k99 .c-diff-title{color:#F5C842;}
  .c-diff-row{display:flex;justify-content:space-between;font-size:13px;color:#8aa4be;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05);}
  .c-diff-row:last-child{border-bottom:none;}
  .c-diff-row span:last-child{color:#c8d8e8;font-weight:500;}
  .calc-box{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;}
  .calc-box h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:24px;}
  .f-row{margin-bottom:18px;}
  .f-label{font-size:13px;color:#8aa4be;margin-bottom:6px;display:block;}
  .f-input{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 14px;color:#fff;font-size:15px;box-sizing:border-box;}
  .f-input:focus{outline:none;border-color:#F5C842;}
  .f-row-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;}
  .f-select{width:100%;background:#0f1e35;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 14px;color:#fff;font-size:14px;}
  .calc-btn{width:100%;background:#F5C842;color:#0a1628;font-weight:700;font-size:16px;padding:14px;border:none;border-radius:10px;cursor:pointer;margin-top:8px;letter-spacing:.02em;}
  .calc-btn:hover{background:#FFD700;}
  .results{display:none;margin-top:28px;border-top:1px solid rgba(255,255,255,.08);padding-top:24px;}
  .r-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:14px;}
  .r-row:last-child{border-bottom:none;}
  .r-label{color:#8aa4be;}
  .r-val{color:#c8d8e8;font-weight:500;}
  .r-val.neg{color:#f87171;}
  .r-total{display:flex;justify-content:space-between;padding:14px 0 4px;font-size:18px;font-weight:700;}
  .r-total .r-label{color:#fff;}
  .r-total .r-val{color:#F5C842;}
  .r-quarterly{background:rgba(245,200,66,.08);border:1px solid rgba(245,200,66,.2);border-radius:10px;padding:14px 18px;margin-top:16px;font-size:14px;color:#F5C842;}
  .r-quarterly strong{display:block;font-size:16px;margin-bottom:4px;}
  .note-box{background:rgba(99,102,241,.08);border-left:3px solid #818cf8;padding:14px 18px;border-radius:0 8px 8px 0;font-size:13px;color:#a5b4fc;margin:24px 0;}
  .related{margin-top:52px;}
  .related h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:16px;}
  .rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
  .rel-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px;text-decoration:none;color:#c8d8e8;transition:border-color .2s;}
  .rel-card:hover{border-color:rgba(245,200,66,.4);}
  .rel-card-title{font-size:14px;font-weight:600;color:#fff;margin-bottom:4px;}
  .rel-card-desc{font-size:12px;color:#7a9fbf;}
  .faq{margin-top:52px;}
  .faq h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:20px;}
  .faq-q{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:14px;font-weight:600;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:13px;color:#8aa4be;line-height:1.7;}
  @media(max-width:640px){.c-diff{grid-template-columns:1fr;}.f-row-2{grid-template-columns:1fr;}.rel-grid{grid-template-columns:1fr;}}
`;

export default function Calculator1099Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script dangerouslySetInnerHTML={{__html: browserScript}} />

      <div className="c-wrap">
        <div className="c-badge">1099 / Self-Employed / Contractor</div>
        <h1 className="c-h1">1099 Paycheck Calculator <em>2026</em></h1>
        <p className="c-lead">
          Calculate your real take-home pay as a freelancer, contractor, or gig worker.
          Includes self-employment tax (15.3%), federal income tax, QBI deduction, and quarterly estimated payments.
          All math runs in your browser — nothing is stored.
        </p>

        <div className="c-diff">
          <div className="c-diff-card w2">
            <div className="c-diff-title">W-2 Employee</div>
            <div className="c-diff-row"><span>Social Security</span><span>6.2% (employer pays 6.2%)</span></div>
            <div className="c-diff-row"><span>Medicare</span><span>1.45% (employer pays 1.45%)</span></div>
            <div className="c-diff-row"><span>Total FICA burden</span><span>7.65%</span></div>
            <div className="c-diff-row"><span>Quarterly taxes</span><span>Withheld automatically</span></div>
            <div className="c-diff-row"><span>QBI deduction</span><span>Not available</span></div>
          </div>
          <div className="c-diff-card k99">
            <div className="c-diff-title">1099 Contractor</div>
            <div className="c-diff-row"><span>Social Security</span><span>12.4% (you pay both sides)</span></div>
            <div className="c-diff-row"><span>Medicare</span><span>2.9% (you pay both sides)</span></div>
            <div className="c-diff-row"><span>Total SE tax burden</span><span>15.3%</span></div>
            <div className="c-diff-row"><span>Quarterly taxes</span><span>You pay Apr/Jun/Sep/Jan</span></div>
            <div className="c-diff-row"><span>QBI deduction</span><span>Up to 20% of net income</span></div>
          </div>
        </div>

        <div className="calc-box">
          <h2>Calculate Your 1099 Take-Home Pay</h2>

          <div className="f-row">
            <label className="f-label" htmlFor="g1099">Annual gross income (1099 / contract income)</label>
            <input className="f-input" id="g1099" type="number" placeholder="75000" defaultValue="75000" />
          </div>

          <div className="f-row">
            <label className="f-label" htmlFor="exp1099">Business expenses (deductible)</label>
            <input className="f-input" id="exp1099" type="number" placeholder="0" defaultValue="0" />
          </div>

          <div className="f-row-2">
            <div>
              <label className="f-label" htmlFor="fil1099">Filing status</label>
              <select className="f-select" id="fil1099">
                <option value="single">Single</option>
                <option value="mfj">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div>
              <label className="f-label" htmlFor="st1099">State</label>
              <select className="f-select" id="st1099">
                <option value="">No state tax (TX, FL, NV...)</option>
                <option value="AL">Alabama</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
              </select>
            </div>
          </div>

          <div className="f-row" style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <input type="checkbox" id="qbi1099" defaultChecked style={{accentColor:'#F5C842',width:'16px',height:'16px'}} />
            <label htmlFor="qbi1099" style={{fontSize:'14px',color:'#8aa4be',cursor:'pointer'}}>
              Apply QBI deduction (20% of net income — most self-employed qualify)
            </label>
          </div>

          <button className="calc-btn" onClick={() => { if(typeof window !== 'undefined') window.calc1099 && window.calc1099(); }}>
            Calculate My 1099 Take-Home Pay
          </button>

          <div className="results" id="results1099">
            <div className="r-row"><span className="r-label">Gross income</span><span className="r-val" id="r-gross"></span></div>
            <div className="r-row"><span className="r-label">Business expenses</span><span className="r-val neg" id="r-expenses"></span></div>
            <div className="r-row"><span className="r-label">Net self-employment income</span><span className="r-val" id="r-net"></span></div>
            <div className="r-row"><span className="r-label">Self-employment tax (15.3%)</span><span className="r-val neg" id="r-se"></span></div>
            <div className="r-row"><span className="r-label">Federal income tax</span><span className="r-val neg" id="r-fed"></span></div>
            <div className="r-row"><span className="r-label">State income tax</span><span className="r-val neg" id="r-state"></span></div>
            <div className="r-row"><span className="r-label">Effective tax rate</span><span className="r-val" id="r-effective"></span></div>
            <div className="r-total">
              <span className="r-label">Annual take-home pay</span>
              <span className="r-val" id="r-takehome"></span>
            </div>
            <div className="r-quarterly">
              <strong>Quarterly estimated payment: <span id="r-quarterly"></span></strong>
              Due dates: April 15 · June 16 · September 15 · January 15
            </div>
          </div>
        </div>

        <div className="note-box">
          SE tax is calculated on 92.35% of net income (IRS method). You may deduct 50% of SE tax before federal income tax — both applied above.
          Source: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener" style={{color:'#F5C842'}}>IRS Self-Employment Tax</a>
        </div>

        <div className="related">
          <h2>Related Calculators</h2>
          <div className="rel-grid">
            <Link href="/" className="rel-card">
              <div className="rel-card-title">W-2 Paycheck Calculator</div>
              <div className="rel-card-desc">Federal + state + FICA for employees</div>
            </Link>
            <Link href="/no-tax-on-overtime-deduction" className="rel-card">
              <div className="rel-card-title">No Tax on Overtime</div>
              <div className="rel-card-desc">2026 deduction up to $12,500</div>
            </Link>
            <Link href="/w4-withholding-calculator" className="rel-card">
              <div className="rel-card-title">W-4 Withholding Calculator</div>
              <div className="rel-card-desc">Optimize your tax withholding</div>
            </Link>
          </div>
        </div>

        <div className="faq">
          <h2>1099 Tax FAQs</h2>
          <div className="faq-q">
            <div className="faq-qt">What is self-employment tax for 1099 workers in 2026?</div>
            <div className="faq-qa">Self-employment tax is 15.3% of net self-employment income: 12.4% Social Security (up to $184,500) + 2.9% Medicare. As a 1099 worker you pay both the employee and employer portions.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">Can 1099 contractors deduct self-employment tax?</div>
            <div className="faq-qa">Yes — you deduct 50% of SE tax from gross income before calculating federal income tax. This is automatic and does not require itemizing.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">What is the QBI deduction?</div>
            <div className="faq-qa">The Qualified Business Income deduction lets most self-employed workers deduct up to 20% of net business income from federal taxable income. Income limits apply above $197,300 (single) for certain service businesses.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">How much should I set aside for taxes as a 1099 contractor?</div>
            <div className="faq-qa">A common rule is 25–30% of net income — covering SE tax (15.3%) plus federal income tax (10–22% for most contractors). Use the calculator above for a precise number.</div>
          </div>
          <div className="faq-q">
            <div className="faq-qt">Do 1099 workers qualify for the 2026 overtime tax exemption?</div>
            <div className="faq-qa">No. The overtime deduction from the One Big Beautiful Bill applies only to W-2 employees earning FLSA overtime. Independent contractors are not eligible.</div>
          </div>
        </div>

      </div>
    </>
  );
}
