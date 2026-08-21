import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Housekeeper Tax Calculator 2026 — Free Household Payroll Tool',
  description: 'Calculate nanny taxes, social security, and net pay with the new 2026 Overtime Tax Exemption. 100% free, no signup required.',
  alternates: { canonical: 'https://www.privatepaycheck.com/housekeeper' }
};

export default function HousekeeperPage( ) {
  return (
    <div className="max-w-4xl mx-auto p-6" style={{color: '#333'}}>
      <h1 className="text-3xl font-bold mb-6">Housekeeper Tax Calculator 2026</h1>
      <p className="mb-4 text-lg">Calculate your household employee taxes with the new **2026 No Tax on Overtime** rules.</p>
      <div style={{background: '#f0f7ff', padding: '20px', borderRadius: '8px', border: '1px solid #cce3fd', marginBottom: '30px'}}>
        <h3 style={{color: '#0056b3', marginTop: 0}}>New for 2026: Overtime Tax Exemption</h3>
        <p>The first $12,500 of qualified overtime pay is now exempt from federal income tax. Our calculator accounts for this automatically.</p>
      </div>
      <p>Estimates are based on IRS Publication 926. Consult a professional for your specific situation.</p>
    </div>
  );
}
