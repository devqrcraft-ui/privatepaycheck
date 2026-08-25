
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nanny Tax Guide 2026 — PrivatePaycheck',
  description: 'Complete payroll guide for household employers. Federal and state rules.',
  alternates: { canonical: 'https://www.privatepaycheck.com/nanny-tax-guide' }
};

export default function HubPage() {
  return (
    <div className="max-w-4xl mx-auto p-8" style={{color: '#333', background: '#fff', minHeight: '100vh'}}>
      <div style={{background:'#f0fdf4', border:'1px solid #dcfce7', color:'#166534', padding:'4px 12px', borderRadius:'20px', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:700, marginBottom:'20px'}}>
        <span>✓</span> 2026 Payroll Rules Updated
      </div>
      <h1 className="text-4xl font-bold mb-6 text-slate-900">Nanny Tax Guide 2026</h1>
      <p className="text-xl mb-8 text-slate-600">Complete payroll guide for household employers. Federal and state rules.</p>
      <div className="prose prose-slate max-w-none text-lg">
        <p>Hiring a nanny means you are a household employer. You must pay FICA taxes if you pay $3,000 or more per year to that employee (the 2026 threshold, up from $2,800 in 2025), and FUTA taxes if you pay $1,000 or more in any calendar quarter.</p><ul><li><b>FICA:</b> 7.65% for employer and 7.65% for employee (15.3% total), applies once wages reach $3,000/year.</li><li><b>FUTA:</b> 6% federal unemployment tax on the first $7,000 in wages (usually 0.6% net after state credit), triggered by $1,000+ paid in any single quarter.</li><li><b>Overtime:</b> The first $12,500 of qualified overtime premium pay is exempt from federal income tax in 2026 (does not reduce FICA).</li></ul>
      </div>
      <div className="mt-12 p-8 rounded-2xl border border-blue-100 bg-blue-50 shadow-sm">
        <h3 className="text-2xl font-bold mb-3 text-slate-900">Calculate Your Nanny Paycheck</h3>
        <p className="mb-6 text-slate-600">Get an exact breakdown of FICA, FUTA, and total employer cost.</p>
        <a href="/nanny" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md">
          Calculate Nanny Taxes Now ➔
        </a>
      </div>
    </div>
  );
}
