
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Housekeeper Payroll Guide 2026 2026 — PrivatePaycheck',
  description: 'How to pay your housekeeper correctly and save on taxes.',
  alternates: { canonical: 'https://www.privatepaycheck.com/housekeeper-tax-guide' }
};

export default function HubPage() {
  return (
    <div className="max-w-4xl mx-auto p-8" style={color: '#333', background: '#fff', minHeight: '100vh'}>
      <div style={background:'#f0fdf4', border:'1px solid #dcfce7', color:'#166534', padding:'4px 12px', borderRadius:'20px', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:700, marginBottom:'20px'}>
        <span>✓</span> 2026 Payroll Rules Updated
      </div>
      <h1 className="text-4xl font-bold mb-6 text-slate-900">Housekeeper Payroll Guide 2026</h1>
      <p className="text-xl mb-8 text-slate-600">How to pay your housekeeper correctly and save on taxes.</p>
      <div className="prose prose-slate max-w-none text-lg">
        <p>Housekeepers follow the same household employment rules as nannies. Proper tax filing saves you from IRS penalties.</p>
      </div>
      <div className="mt-12 p-8 rounded-2xl border border-blue-100 bg-blue-50 shadow-sm">
        <h3 className="text-2xl font-bold mb-3 text-slate-900">Calculate Your Housekeeper Paycheck</h3>
        <p className="mb-6 text-slate-600">Get an exact breakdown of federal, state, and FICA taxes.</p>
        <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md">
          Calculate Paycheck Now ➔
        </a>
      </div>
    </div>
  );
}
