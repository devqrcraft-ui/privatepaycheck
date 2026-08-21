
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare State Taxes 2026 — Salary Impact Calculator',
  description: 'Compare your take-home pay between two states. See how moving to Texas, Florida, or Washington affects your paycheck with 2026 tax rules.',
  alternates: { canonical: 'https://www.privatepaycheck.com/compare-states-taxes' }
};

export default function ComparePage( ) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px', color: '#333' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>State Tax Comparison Calculator 2026</h1>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 30 }}>Planning a move? See the real impact on your paycheck after state income tax, local taxes, and the new 2026 federal brackets.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
        <div style={{ background: '#eff6ff', padding: 20, borderRadius: 12, border: '1px solid #bfdbfe' }}>
          <h3 style={{ marginTop: 0 }}>Current State</h3>
          <p>e.g. California (High Tax)</p>
        </div>
        <div style={{ background: '#f0fdf4', padding: 20, borderRadius: 12, border: '1px solid #bbf7d0' }}>
          <h3 style={{ marginTop: 0 }}>Target State</h3>
          <p>e.g. Texas (No Income Tax)</p>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href="/" style={{ background: '#1e40af', color: '#fff', padding: '16px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Start Comparison →
        </a>
      </div>
    </div>
  );
}
