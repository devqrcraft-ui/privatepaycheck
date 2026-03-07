"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const SEAL = "data:image/jpeg;base64,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";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @keyframes ticker { from{transform:translateX(100vw)} to{transform:translateX(-100%)} }
        .ticker-text { animation: ticker 90s linear infinite; display:inline-flex; white-space:nowrap; }
        .nav-link { color:#C8DCF4; font-size:12px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; transition:color .2s; }
        .nav-link:hover { color:#FFD700; }
        .btn-gold { display:inline-block; background:linear-gradient(135deg,#B8922A,#FFD700); color:#091640; padding:10px 20px; border-radius:3px; font-weight:800; font-size:12px; letter-spacing:.1em; text-transform:uppercase; text-decoration:none; border:none; cursor:pointer; box-shadow:0 2px 14px rgba(201,168,76,.45); transition:transform .18s,box-shadow .18s,filter .18s; }
        .btn-gold:hover { transform:translateY(-2px); box-shadow:0 6px 28px rgba(255,215,0,.55); filter:brightness(1.08); color:#091640; }
        .btn-gold:active { transform:translateY(0); }
        .mob-menu { display:none; flex-direction:column; gap:12px; padding:20px 24px; background:#091640; border-top:1px solid rgba(201,168,76,.3); }
        .mob-menu.open { display:flex; }
        .mob-menu .nav-link { font-size:14px; padding:8px 0; border-bottom:1px solid rgba(201,168,76,.15); }
        @media(max-width:768px) {
          .nav-desktop-links { display:none !important; }
          .hamburger { display:flex !important; }
        }
      `}</style>

      {/* TICKER */}
      <div style={{background:"#7A0000",borderBottom:"2px solid #C9A84C",overflow:"hidden",padding:"9px 0"}}>
        <div className="ticker-text">
          {["100% Private — Calculated in your browser, never stored","All 50 States — Every state tax rate updated for 2026","Free Forever — No signup, no fees, no hidden costs","IRS Compliant — Official 2026 federal withholding tables","Instant Results — Real-time paycheck calculation","Bonus Calculator — Exact take-home on bonuses & overtime"].map((t,i)=>(
            <span key={i} style={{color:"#FFE566",fontSize:"12px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",padding:"0 48px"}}>✦ {t}</span>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{background:scrolled?"rgba(9,22,64,.97)":"#091640",borderBottom:"3px solid #C9A84C",padding:"0 24px",position:"sticky",top:0,zIndex:999,backdropFilter:"blur(8px)",transition:"background .3s"}}>
        <div style={{maxWidth:1160,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
          <Link href="/" style={{display:"flex",alignItems:"center",gap:12,textDecoration:"none"}}>
            <img src={SEAL} alt="Seal" style={{width:42,height:42,borderRadius:"50%",border:"2px solid #C9A84C",objectFit:"cover"}} />
            <div>
              <div style={{color:"#FFD700",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:17}}>PrivatePaycheck.com</div>
              <div style={{color:"#8BA4D4",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",marginTop:1}}>Free · Private · United States</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop-links" style={{display:"flex",alignItems:"center",gap:28}}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/all-states" className="nav-link">All States</Link>
            <Link href="/hourly-paycheck-calculator" className="nav-link">Hourly</Link>
            <Link href="/bonus-calculator" className="nav-link">Bonus</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/" className="btn-gold">Calculate My Pay →</Link>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={()=>setOpen(!open)} style={{display:"none",flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:8}}>
            <span style={{display:"block",width:24,height:2,background:open?"#FFD700":"#C8DCF4",transition:"all .25s",transform:open?"rotate(45deg) translate(5px,5px)":"none"}}/>
            <span style={{display:"block",width:24,height:2,background:"#C8DCF4",opacity:open?0:1,transition:"opacity .2s"}}/>
            <span style={{display:"block",width:24,height:2,background:open?"#FFD700":"#C8DCF4",transition:"all .25s",transform:open?"rotate(-45deg) translate(5px,-5px)":"none"}}/>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mob-menu${open?" open":""}`}>
          <Link href="/" className="nav-link" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/all-states" className="nav-link" onClick={()=>setOpen(false)}>All States</Link>
          <Link href="/hourly-paycheck-calculator" className="nav-link" onClick={()=>setOpen(false)}>Hourly Calculator</Link>
          <Link href="/bonus-calculator" className="nav-link" onClick={()=>setOpen(false)}>Bonus Calculator</Link>
          <Link href="/blog" className="nav-link" onClick={()=>setOpen(false)}>Blog</Link>
          <Link href="/" className="btn-gold" style={{textAlign:"center",marginTop:4}} onClick={()=>setOpen(false)}>Calculate My Pay →</Link>
        </div>
      </nav>
    </>
  );
}
