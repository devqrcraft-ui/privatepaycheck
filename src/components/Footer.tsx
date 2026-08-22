'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1e', padding: '60px 20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '20px' }}>PrivatePaycheck</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Secure payroll calculations for household employers.</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '20px' }}>Tools</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li><a href="/nanny" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Nanny Tax Calculator</a></li>
            <li><a href="/housekeeper" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Housekeeper Tax</a></li>
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
        © {new Date().getFullYear()} PrivatePaycheck.com — 100% Private & Secure
      </div>
    </footer>
  );
}
