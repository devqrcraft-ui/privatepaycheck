import os

def add_bonus_calc():
    # Створюємо нову сторінку для бонусу
    os.makedirs('src/app/bonus-tax-calculator', exist_ok=True)
    path = 'src/app/bonus-tax-calculator/page.tsx'
    
    content = """
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — Federal & State Supplemental Tax',
  description: 'Calculate your net take-home pay after bonus taxes. Supports 22% federal supplemental rate and all 50 states. New 2026 rules included.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-tax-calculator' }
};

export default function BonusPage( ) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px', color: '#333' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>Bonus Tax Calculator 2026</h1>
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, marginBottom: 30 }}>
        <h2 style={{ color: '#1e40af', marginTop: 0 }}>Why is my bonus taxed so high?</h2>
        <p>The IRS considers bonuses "supplemental wages." In 2026, the federal flat rate is **22%**. This is often higher than your normal tax bracket, but you may get some back as a refund.</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/" style={{ background: '#2563eb', color: '#fff', padding: '16px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Calculate My Bonus Net Pay →
        </a>
      </div>
    </div>
  );
}
"""
    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print("Created Bonus Tax Calculator page.")

def optimize_ctr_metadata():
    # Оновлюємо головну сторінку для вищого CTR
    path = 'src/app/page.tsx'
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # Додаємо "Save $1,000+" та "2026 Rules" у тайтл
    content = content.replace("title: 'Paycheck Calculator 2026", "title: 'Paycheck Calculator 2026 — Save $1,000+ with New Rules")
    
    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print("Optimized home page metadata for higher CTR.")

add_bonus_calc()
optimize_ctr_metadata()
