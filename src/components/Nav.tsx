'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SEAL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhMSEhMWFhUXGBkaGBYWGBkdGhkhHhUWHxYaGRYbHSghGBolHRUZIjEiJSk3Li4uGB8zODMtNygvMisBCgoKDg0OGxAQGjchICU1NS8tLi8tLy0rLSstLTcuLS0vLS8tLS0tLy0tLS0tLy0tKy0tKy0tNS8vLTAtLy0tLf/AABEIAB8AIAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAFBgQD/8QAIRAAAQQCAgMBAAAAAAAAAAAAAQACAxEEEiExBUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A52REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREB/9k=";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const btn = document.getElementById('hamburger');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu && !btn.contains(e.target as Node) && !menu.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --navy:#091526; --navy2:#0F2040; --navy3:#0C1A35;
          --gold:#F5C842; --gold2:#FFD700; --gold3:#FFF0A0;
          --red:#8B1A1A; --white:#FFFFFF; --light:#E0ECFF;
          --muted:#7A9FBF; --border:rgba(245,200,66,0.30);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--navy); color: var(--white); font-family: 'Inter', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        a { text-decoration: none; color: inherit; }

        .ticker-outer { background: var(--red); border-bottom: 2px solid var(--gold); height: 40px; overflow: hidden; display: flex; align-items: center; }
        .ticker-track { display: flex; white-space: nowrap; animation: tick 70s linear infinite; will-change: transform; }
        @keyframes tick { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ticker-set { display: inline-flex; align-items: center; flex-shrink: 0; }
        .t-item { color:#fff; font-size:12px; font-weight:700; letter-spacing:.07em; text-transform:uppercase; padding:0 40px; white-space:nowrap; }
        .t-sep { color:var(--gold2); font-size:14px; padding:0 2px; flex-shrink:0; }

        .navbar { background:var(--navy2); border-bottom:3px solid var(--gold); position:sticky; top:0; z-index:1000; box-shadow:0 4px 20px rgba(0,0,0,.5); }
        .nav-inner { max-width:1200px; margin:0 auto; padding:0 24px; height:68px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
        .brand { display:flex; align-items:center; gap:12px; flex-shrink:0; }
        .brand-seal { width:44px; height:44px; border-radius:50%; border:2px solid var(--gold); object-fit:cover; flex-shrink:0; }
        .bname { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:var(--gold2); line-height:1.2; }
        .bsub { font-size:9px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); }
        .nav-menu { display:flex; align-items:center; gap:4px; }
        .nav-link { color:#CCE0FF; font-size:13px; font-weight:600; letter-spacing:.05em; text-transform:uppercase; padding:9px 14px; border-radius:6px; border:1px solid transparent; transition:color .2s,background .2s,border-color .2s; white-space:nowrap; }
        .nav-link:hover { color:var(--gold2); background:rgba(245,200,66,.10); border-color:rgba(245,200,66,.30); }
        .nav-cta { margin-left:8px; background:var(--gold); color:var(--navy); font-size:13px; font-weight:800; letter-spacing:.06em; text-transform:uppercase; padding:11px 20px; border-radius:7px; border:none; cursor:pointer; white-space:nowrap; box-shadow:0 2px 14px rgba(245,200,66,.40); transition:transform .2s,box-shadow .2s,background .2s; display:inline-block; }
        .nav-cta:hover { background:var(--gold2); transform:translateY(-2px); box-shadow:0 6px 24px rgba(255,215,0,.55); color:var(--navy); }
        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:8px; border-radius:6px; border:1px solid var(--border); background:rgba(255,255,255,.05); flex-shrink:0; }
        .hamburger span { display:block; width:22px; height:2px; background:var(--gold); border-radius:2px; }
        .mobile-menu { display:none; flex-direction:column; background:var(--navy2); border-bottom:2px solid var(--border); padding:16px 24px 20px; gap:4px; }
        .mobile-menu.open { display:flex; }
        .mobile-link { color:#CCE0FF; font-size:15px; font-weight:600; text-transform:uppercase; letter-spacing:.06em; padding:13px 16px; border-radius:8px; border:1px solid transparent; transition:all .2s; }
        .mobile-link:hover { color:var(--gold2); background:rgba(245,200,66,.10); border-color:var(--border); }
        .mobile-cta { margin-top:8px; background:var(--gold); color:var(--navy); font-size:15px; font-weight:800; text-transform:uppercase; letter-spacing:.06em; padding:14px 16px; border-radius:8px; text-align:center; box-shadow:0 2px 14px rgba(245,200,66,.4); }
        @media(max-width:900px) { .nav-menu{display:none} .hamburger{display:flex} }
        @media(max-width:540px) { .bsub{display:none} .brand-seal{width:38px;height:38px} .nav-inner{height:60px;padding:0 16px} .t-item{font-size:11px;padding:0 24px} }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* TICKER */}
      <div className="ticker-outer" aria-hidden="true">
        <div className="ticker-track">
          {[0,1].map(i => (
            <div key={i} className="ticker-set" aria-hidden={i===1 ? "true" : undefined}>
              <span className="t-item">✓ 100% PRIVATE — Calculated in your browser, never stored</span><span className="t-sep">◆</span>
              <span className="t-item">✓ ALL 50 STATES — Every state tax rate updated 2026</span><span className="t-sep">◆</span>
              <span className="t-item">✓ FREE FOREVER — No signup, no fees, no hidden costs</span><span className="t-sep">◆</span>
              <span className="t-item">✓ IRS COMPLIANT — Official 2026 withholding tables</span><span className="t-sep">◆</span>
              <span className="t-item">✓ INSTANT RESULTS — Real-time calculation in seconds</span><span className="t-sep">◆</span>
              <span className="t-item">✓ BONUS CALCULATOR — Exact take-home on bonuses &amp; overtime</span><span className="t-sep">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SEAL} alt="Official Seal" className="brand-seal" width={44} height={44} />
            <div>
              <div className="bname">PrivatePaycheck.com</div>
              <div className="bsub">Free · Private · United States</div>
            </div>
          </Link>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/calculator" className="nav-link">Calculator</Link>
            <Link href="/all-states" className="nav-link">All States</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/calculator" className="nav-cta">Calculate My Pay →</Link>
          </div>
          <button className="hamburger" id="hamburger" aria-label="Open menu" onClick={() => setOpen(o => !o)}>
            <span/><span/><span/>
          </button>
        </div>
        <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
          <Link href="/" className="mobile-link" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/calculator" className="mobile-link" onClick={() => setOpen(false)}>Calculator</Link>
          <Link href="/all-states" className="mobile-link" onClick={() => setOpen(false)}>All States</Link>
          <Link href="/blog" className="mobile-link" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/calculator" className="mobile-cta" onClick={() => setOpen(false)}>Calculate My Pay →</Link>
        </div>
      </nav>
    </>
  );
}
