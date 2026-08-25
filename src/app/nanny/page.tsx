import React from 'react';
import { Metadata } from 'next';
import HouseholdCalculator from '@/components/HouseholdCalculator';

export const metadata: Metadata = {
  title: 'Nanny Tax Calculator 2026 — Free Household Payroll Tool',
  description: 'Calculate nanny taxes (FICA, FUTA) with the 2026 $3,000 threshold and new Overtime Tax Exemption. 100% free, no signup required.',
  alternates: { canonical: 'https://www.privatepaycheck.com/nanny' }
};

export default function NannyPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Nanny Tax Calculator 2026',
    url: 'https://www.privatepaycheck.com/nanny',
    description: 'Free nanny tax calculator for household employers. FICA, FUTA, and 2026 overtime exemption.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <div className="max-w-4xl mx-auto p-6" style={{ color: '#333' }}>
        <h1 className="text-3xl font-bold mb-6">Nanny Tax Calculator 2026</h1>
        <p className="mb-4 text-lg">Calculate your household employee taxes with the new <strong>2026 No Tax on Overtime</strong> rules and the updated $3,000 FICA threshold.</p>
        <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', border: '1px solid #cce3fd', marginBottom: '30px' }}>
          <h3 style={{ color: '#0056b3', marginTop: 0 }}>New for 2026: Overtime Tax Exemption</h3>
          <p>The first $12,500 of qualified overtime premium pay is exempt from federal income tax. Our calculator accounts for this automatically.</p>
        </div>
        <HouseholdCalculator roleLabel="Nanny" />
        <p>Estimates are based on IRS Publication 926 and 2026 SSA thresholds. Consult a professional for your specific situation.</p>
      </div>
    </>
  );
}
