'use client';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/overtime-calculator',        label: 'Overtime',      color: '#fbbf24' },
  { href: '/unemployment-calculator',    label: 'Unemployment',  color: '#a5b4fc' },
  { href: '/minimum-wage',               label: 'Min Wage',      color: '#6ee7b7' },
  { href: '/hourly-paycheck-calculator', label: 'Hourly',        color: 'rgba(255,255,255,0.65)' },
  { href: '/blog',                       label: 'Blog',          color: 'rgba(255,255,255,0.65)' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', alignItems: 'center' }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{ color: l.color, textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}>{l.label}</Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(o => !o)} className="nav-burger" style={{ display: 'none', background: 'none', border: '1px solid rgba(255,255,255,0.25)', color: 'white', borderRadius: '6px', padding: '6px 11px', cursor: 'pointer', fontSize: '17px', lineHeight: 1 }}>
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ position: 'sticky', top: '53px', zIndex: 99, background: 'rgba(15,12,41,0.98)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '13px 24px', fontSize: '15px', color: l.color, textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 580px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
      `}</style>
    </>
  );
}
