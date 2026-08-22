'use client';
import React from 'react';
import Link from 'next/link';

export default function HourlyStateClient({ stateName }: any) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <nav style={{ marginBottom: '20px', fontSize: '14px' }}>
        <Link href="/">Home</Link> <span> / </span>
        <span>{stateName} Hourly Paycheck</span>
      </nav>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>{stateName} Hourly Paycheck Calculator</h1>
      <div style={{ background: '#111827', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
        <p style={{ color: '#9CA3AF' }}>Estimate your take-home pay in {stateName} based on hourly rates.</p>
      </div>
    </div>
  );
}
