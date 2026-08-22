'use client';
import React from 'react';
import Link from 'next/link';

export default function BonusTaxCalculatorState({ stateName, stateTax, noStateTax }: any) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <nav style={{ marginBottom: '20px', fontSize: '14px' }}>
        <Link href="/">Home</Link> <span> / </span>
        <Link href="/bonus-tax-calculator">Bonus Tax</Link> <span> / </span>
        <span>{stateName}</span>
      </nav>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>{stateName} Bonus Tax Calculator 2026</h1>
      <div style={{ background: '#111827', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
        <p style={{ color: '#9CA3AF' }}>Calculate your net bonus after federal and {stateName} state taxes.</p>
      </div>
    </div>
  );
}
