'use client';
import React from 'react';
import Link from 'next/link';

export default function NurseSalaryPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/">Home</Link> <span> / </span> <Link href="/blog">Blog</Link>
      </nav>
      <h1>Nurse Salary After Taxes 2026: State-by-State Guide</h1>
      <p>Detailed analysis of nursing salaries and tax implications across the US.</p>
    </div>
  );
}
