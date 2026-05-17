export default function NotFound() {
  return (
    <div style={{minHeight:'100vh',background:'#0f0c29',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:560,width:'100%',textAlign:'center'}}>
        <div style={{fontSize:80,fontWeight:900,color:'#F5C842',lineHeight:1,marginBottom:8}}>404</div>
        <div style={{fontSize:13,color:'rgba(255,255,255,0.4)',marginBottom:24,letterSpacing:2,textTransform:'uppercase'}}>Page Not Found</div>
        <h1 style={{fontSize:22,fontWeight:700,color:'#e8edf8',marginBottom:12,lineHeight:1.4}}>This page doesn't exist</h1>
        <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',lineHeight:1.8,marginBottom:32}}>The page you're looking for may have moved or been removed. Try one of our popular calculators below.</p>
        <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:32}}>
          <a href='/california-paycheck-calculator' style={{display:'block',background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#e8edf8',fontSize:14,fontWeight:600}}>🌴 California Paycheck Calculator 2026</a>
          <a href='/federal-paycheck-calculator' style={{display:'block',background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#e8edf8',fontSize:14,fontWeight:600}}>🇺🇸 Federal Paycheck Calculator 2026</a>
          <a href='/bonus-tax-calculator' style={{display:'block',background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#e8edf8',fontSize:14,fontWeight:600}}>💰 Bonus Tax Calculator 2026</a>
          <a href='/blog' style={{display:'block',background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#e8edf8',fontSize:14,fontWeight:600}}>📝 Paycheck and Tax Blog</a>
        </div>
        <a href='/' style={{display:'inline-block',background:'#F5C842',color:'#0f0c29',fontWeight:700,fontSize:14,padding:'12px 32px',borderRadius:8,textDecoration:'none'}}>← Back to Home</a>
      </div>
    </div>
  );
}
