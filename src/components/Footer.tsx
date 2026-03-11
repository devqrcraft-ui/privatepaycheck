import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background:"#060E28",borderTop:"3px solid #C9A84C",padding:"52px 24px 28px",fontFamily:"'Source Serif 4',serif"}}>
      <style>{`
        .foot-grid { display:grid; grid-template-columns:2fr 1fr 1fr; gap:40px; margin-bottom:36px; }
        .foot-link { font-size:13px; color:#A8C4E0; text-decoration:none; display:block; margin-bottom:9px; transition:color .2s; }
        .foot-link:hover { color:#F5DC80; }
        @media(max-width:640px) {
          .foot-grid { grid-template-columns:1fr 1fr; gap:28px; }
          .foot-brand-col { grid-column:1/-1; }
        }
      `}</style>
      <div style={{maxWidth:1160,margin:"0 auto"}}>
        <div className="foot-grid">
          <div className="foot-brand-col">
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:"#FFD700",fontWeight:700,marginBottom:10}}>PrivatePaycheck.com</div>
            <p style={{fontSize:13,color:"#A8C4E0",lineHeight:1.7,maxWidth:360}}>Free, private paycheck calculator for US workers. All calculations happen in your browser. No data stored. No accounts required. Updated for 2026.</p>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"#C9A84C",marginBottom:14}}>Calculators</div>
            <Link href="/" className="foot-link">Salary Calculator</Link>
            <Link href="/hourly-paycheck-calculator" className="foot-link">Hourly Calculator</Link>
            <Link href="/bonus-calculator" className="foot-link">Bonus Calculator</Link>
            <Link href="/overtime-calculator" className="foot-link">Overtime Calculator</Link>
            <Link href="/w4-withholding-calculator" className="foot-link">W-4 Calculator</Link>
            <Link href="/tip-calculator" className="foot-link">Tip Calculator</Link>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"#C9A84C",marginBottom:14}}>Info</div>
            <Link href="/blog" className="foot-link">Blog</Link>
            <Link href="/all-states" className="foot-link">All States</Link>
            <Link href="/minimum-wage" className="foot-link">Minimum Wage</Link>
            <Link href="/privacy-policy" className="foot-link">Privacy Policy</Link>
            <Link href="/terms" className="foot-link">Terms of Use</Link>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(201,168,76,.18)",paddingTop:18,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,fontSize:12,color:"#8AAAC8"}}>
          <span>© 2026 PrivatePaycheck.com · Not affiliated with the IRS or any government agency</span>
          <span>Free · Private · No Data Stored</span>
        </div>
      </div>
    </footer>
  );
}
