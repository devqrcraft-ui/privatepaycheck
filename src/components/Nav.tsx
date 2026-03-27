'use client';
import Link from 'next/link';
import { useState } from 'react';

const TICKER_ITEMS = [
  '2026 IRS Tax Tables — Updated',
  'Federal + State + FICA — All Calculated',
  '100% Private — No Data Stored',
  'All 50 States Covered',
  'Free Forever — No Signup Required',
  'Salary & Hourly Calculator',
  'Bonus & Overtime Calculator',
  'IRS Publication 15-T Compliant',
  'Standard Deduction $15,000 Single / $30,000 Married',
  'FICA Wage Base $176,100 for 2026',
  'No Accounts. No Cookies. No Tracking.',
  'Results in Under 1 Second',
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .ticker-outer{background:#8B1A1A;border-bottom:2px solid #F5C842;height:40px;overflow:hidden;display:flex;align-items:center;width:100%;max-width:100vw;position:relative;}
        .ticker-track{display:flex;white-space:nowrap;animation:tick 105s linear infinite;will-change:transform;}
        @keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .ticker-set{display:inline-flex;align-items:center;flex-shrink:0;}
        .t-item{color:#fff;font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:0 40px;white-space:nowrap;}
        .t-sep{color:#FFD700;font-size:14px;padding:0 2px;flex-shrink:0;}
        .navbar{background:#0F2040;border-bottom:3px solid #F5C842;position:sticky;top:0;z-index:1000;box-shadow:0 4px 20px rgba(0,0,0,.5);width:100%;max-width:100vw;overflow:hidden;}
        .nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;}
        .brand{display:flex;align-items:center;gap:12px;flex-shrink:0;text-decoration:none;}
        .bname{font-family:'Playfair Display',serif;font-size:18px;font-weight:900;color:#F5C842;line-height:1.1;}
        .bsub{font-size:11px;color:#7A9FBF;letter-spacing:.06em;text-transform:uppercase;}
        .nav-menu{display:flex;align-items:center;gap:4px;margin-left:auto;}
        .nav-link{color:#E0ECFF;font-size:14px;font-weight:600;padding:8px 14px;border-radius:6px;text-decoration:none;transition:color .15s,background .15s;}
        .nav-link:hover{color:#F5C842;background:rgba(245,200,66,.08);}
        .nav-cta{background:linear-gradient(135deg,#F5C842,#FFD700);color:#091526!important;font-size:13px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:9px 18px;border-radius:7px;text-decoration:none;transition:box-shadow .2s,transform .2s;}
        .nav-cta:hover{box-shadow:0 4px 16px rgba(255,215,0,.4);transform:translateY(-1px);}
        .hamburger{display:none;background:none;border:1px solid rgba(245,200,66,.3);border-radius:6px;padding:8px;cursor:pointer;color:#F5C842;flex-direction:column;gap:4px;}
        .hamburger span{display:block;width:20px;height:2px;background:#F5C842;border-radius:2px;}
        .mobile-menu{display:none;position:absolute;top:100%;left:0;right:0;background:#0F2040;border-bottom:3px solid #F5C842;padding:16px 24px;flex-direction:column;gap:4px;z-index:999;}
        .mobile-menu.open{display:flex;}
        .mobile-link{color:#E0ECFF;font-size:15px;font-weight:600;padding:12px 16px;border-radius:8px;text-decoration:none;}
        .mobile-link:hover{color:#F5C842;background:rgba(245,200,66,.08);}
        .mobile-cta{margin-top:8px;background:linear-gradient(135deg,#F5C842,#FFD700);color:#091526;font-weight:800;font-size:14px;text-align:center;padding:13px;border-radius:8px;text-decoration:none;}
        @media(max-width:768px){.nav-menu{display:none;}.hamburger{display:flex;}}
      `}</style>

      {/* TICKER */}
      <div className="ticker-outer" aria-hidden="true">
        <div className="ticker-track">
          {[0,1].map(i=>(
            <div className="ticker-set" key={i}>
              {TICKER_ITEMS.map((item,j)=>(
                <span key={j}><span className="t-item">{item}</span><span className="t-sep">★</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar" style={{position:'sticky',top:0}}>
        <div className="nav-inner">
          <Link href="/" className="brand">
            <div>
              <div className="bname">PrivatePaycheck.com</div>
              <div className="bsub">Free · Private · United States</div>
            </div>
          </Link>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/#calculator" className="nav-link">Calculator</Link>
            <Link href="/all-states" className="nav-link">All States</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/#calculator" className="nav-cta">Calculate My Pay →</Link>
          </div>
          <button className="hamburger" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
        <div className={`mobile-menu${open?' open':''}`}>
          <Link href="/" className="mobile-link" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/#calculator" className="mobile-link" onClick={()=>setOpen(false)}>Calculator</Link>
          <Link href="/all-states" className="mobile-link" onClick={()=>setOpen(false)}>All States</Link>
          <Link href="/blog" className="mobile-link" onClick={()=>setOpen(false)}>Blog</Link>
          <Link href="/#calculator" className="mobile-cta" onClick={()=>setOpen(false)}>Calculate My Pay →</Link>
        </div>
      </nav>
    </>
  );
}
