import Link from 'next/link';
export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid rgba(255,255,255,0.1)',marginTop:'60px',padding:'40px 20px',background:'rgba(0,0,0,0.3)'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'32px'}}>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Paycheck Calculators</h3>
          {[['/texas-paycheck-calculator','Texas'],['/florida-paycheck-calculator','Florida'],['/california-paycheck-calculator','California'],['/new-york-paycheck-calculator','New York'],['/utah-paycheck-calculator','Utah'],['/north-dakota-paycheck-calculator','North Dakota']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Unemployment</h3>
          {[['/unemployment-calculator/texas','Texas'],['/unemployment-calculator/montana','Montana'],['/unemployment-calculator/maine','Maine'],['/unemployment-calculator/florida','Florida'],['/unemployment-calculator/california','California']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Bonus Calculator</h3>
          {[['/bonus-calculator/washington','Washington'],['/bonus-calculator/oklahoma','Oklahoma'],['/bonus-calculator/connecticut','Connecticut'],['/bonus-calculator','All States']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Resources</h3>
          {[['/blog','Blog'],['/faq','FAQ'],['/about','About'],['/privacy-policy','Privacy Policy'],['/terms','Terms']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
      </div>
      <div style={{maxWidth:'1200px',margin:'32px auto 0',paddingTop:'20px',borderTop:'1px solid rgba(255,255,255,0.08)',textAlign:'center',color:'rgba(255,255,255,0.35)',fontSize:'12px'}}>
        © {new Date().getFullYear()} PrivatePaycheck.com — Free Paycheck & Tax Calculators
      </div>
    </footer>
  );
}
