'use client';
import { useState } from 'react';
import Link from 'next/link';

function federalTax(income: number, filing: string): number {
  const brackets = filing === 'married'
    ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
    : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets as [number, number][]) {
    if (income <= prev) break;
    tax += (Math.min(income, limit as number) - prev) * rate;
    prev = limit as number;
  }
  return tax;
}

interface Props {
  stateName: string;
  stateAbbr: string;
  stateTax: number;
  noStateTax: boolean;
  stateSlug: string;
}

export default function BonusTaxCalculatorState({ stateName, stateTax, noStateTax }: Props) {
  const [bonus, setBonus] = useState('');
  const [salary, setSalary] = useState('');
  const [filing, setFiling] = useState('single');
  const [result, setResult] = useState<null | { federalTax: number; stateTaxAmt: number; fica: number; total: number; takeHome: number }>(null);

  function calculate() {
    const b = parseFloat(bonus.replace(/,/g, '')) || 0;
    const s = parseFloat(salary.replace(/,/g, '')) || 0;
    const fica = Math.min(b, Math.max(0, 168600 - s)) * 0.062 + b * 0.0145;
    const fedTax = federalTax(s + b, filing) - federalTax(s, filing);
    const stTax = b * (stateTax / 100);
    const total = fedTax + stTax + fica;
    setResult({ federalTax: fedTax, stateTaxAmt: stTax, fica, total, takeHome: b - total });
  }

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number, b: number) => b > 0 ? (n / b * 100).toFixed(1) + '%' : '0%';
  const bonusNum = parseFloat(bonus.replace(/,/g, '')) || 0;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/bonus-tax-calculator" className="hover:text-white">Bonus Tax Calculator</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{stateName}</span>
        </nav>
        <h1 className="text-3xl font-bold mb-2">{stateName} Bonus Tax Calculator 2026</h1>
        <p className="text-gray-400 mb-8">
          {noStateTax
            ? stateName + ' has no state income tax — only federal taxes and FICA apply to your bonus.'
            : stateName + ' state income tax rate: ' + stateTax + '%. See exactly how much of your bonus you keep.'}
        </p>
        <div className="bg-gray-900 rounded-2xl p-6 space-y-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Bonus Amount ($)</label>
            <input type="text" value={bonus} onChange={e => setBonus(e.target.value)} placeholder="e.g. 5000"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Annual Salary ($)</label>
            <input type="text" value={salary} onChange={e => setSalary(e.target.value)} placeholder="e.g. 60000"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Filing Status</label>
            <select value={filing} onChange={e => setFiling(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
            </select>
          </div>
          <button onClick={calculate}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-colors">
            Calculate My Bonus Tax
          </button>
        </div>
        {result && (
          <div className="bg-gray-900 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-semibold mb-4">Your {stateName} Bonus Breakdown</h2>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400">Bonus Amount</span><span className="font-medium">{fmt(bonusNum)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400">Federal Income Tax</span>
              <span className="text-red-400">-{fmt(result.federalTax)} ({pct(result.federalTax, bonusNum)})</span>
            </div>
            {!noStateTax && (
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">{stateName} State Tax ({stateTax}%)</span>
                <span className="text-red-400">-{fmt(result.stateTaxAmt)} ({pct(result.stateTaxAmt, bonusNum)})</span>
              </div>
            )}
            {noStateTax && (
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">{stateName} State Tax</span>
                <span className="text-green-400">$0 (no state tax!)</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400">FICA (SS + Medicare)</span>
              <span className="text-red-400">-{fmt(result.fica)} ({pct(result.fica, bonusNum)})</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400">Total Taxes</span>
              <span className="text-red-400">-{fmt(result.total)} ({pct(result.total, bonusNum)})</span>
            </div>
            <div className="flex justify-between py-3 text-lg font-bold">
              <span>Take-Home Bonus</span>
              <span className="text-green-400">{fmt(result.takeHome)}</span>
            </div>
          </div>
        )}
        <div className="mt-10 text-gray-400 text-sm">
          <h2 className="text-white text-xl font-semibold mt-8 mb-3">How Are Bonuses Taxed in {stateName}?</h2>
          <p>In {stateName}, bonuses are treated as supplemental wages.
          {noStateTax ? ' ' + stateName + ' has no state income tax.' : ' ' + stateName + ' withholds ' + stateTax + '% state income tax.'}</p>
          <p className="mt-4">
            <Link href="/bonus-tax-calculator" className="text-yellow-500 hover:text-yellow-400">
              Compare bonus taxes across all 50 states
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
