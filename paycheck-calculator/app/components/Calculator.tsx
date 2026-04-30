"use client";
// src/components/Calculator.tsx

import { useState, useCallback } from "react";
import { calculatePaycheck, type CalculatorInput, type TaxBreakdown } from "../lib/calculator";
import { STATE_TAX_RATES, PAY_FREQUENCIES, FILING_STATUS } from "../lib/taxRates";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);

const pct = (n: number) => n.toFixed(2) + "%";

const stateList = Object.entries(STATE_TAX_RATES).sort((a, b) =>
  a[1].name.localeCompare(b[1].name)
);

export default function Calculator() {
  const [form, setForm] = useState<CalculatorInput>({
    grossIncome: 75000,
    filingStatus: "single",
    payFrequency: "biweekly",
    stateCode: "CA",
    preTax401k: 0,
    preTaxHSA: 0,
    preTaxHealthInsurance: 0,
  });

  const [result, setResult] = useState<TaxBreakdown | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: ["grossIncome", "preTax401k", "preTaxHSA", "preTaxHealthInsurance"].includes(name)
          ? parseFloat(value) || 0
          : value,
      }));
    },
    []
  );

  const handleCalculate = () => {
    const res = calculatePaycheck(form);
    setResult(res);
  };

  const stateName = STATE_TAX_RATES[form.stateCode]?.name || "";
  const isNoTaxState = STATE_TAX_RATES[form.stateCode]?.noTax;
  const periodLabel = PAY_FREQUENCIES[form.payFrequency].label;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          💰 Paycheck Calculator 2026
        </h1>
        <p className="text-gray-500 text-sm">
          Federal + State taxes · FICA · Pre-tax deductions · All 50 states
        </p>
        <div className="inline-flex items-center gap-2 mt-3 bg-green-50 border border-green-200 rounded-full px-4 py-1 text-xs text-green-700 font-medium">
          🔒 Your data never leaves your browser
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Annual Gross Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Annual Gross Income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                name="grossIncome"
                value={form.grossIncome}
                onChange={handleChange}
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="75000"
                min="0"
              />
            </div>
          </div>

          {/* Pay Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pay Frequency
            </label>
            <select
              name="payFrequency"
              value={form.payFrequency}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            >
              {Object.entries(PAY_FREQUENCIES).map(([key, val]) => (
                <option key={key} value={key}>{val.label}</option>
              ))}
            </select>
          </div>

          {/* Filing Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filing Status
            </label>
            <select
              name="filingStatus"
              value={form.filingStatus}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            >
              {Object.entries(FILING_STATUS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <select
              name="stateCode"
              value={form.stateCode}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            >
              {stateList.map(([code, state]) => (
                <option key={code} value={code}>
                  {state.name} {state.noTax ? "🟢" : ""}
                </option>
              ))}
            </select>
            {isNoTaxState && (
              <p className="text-xs text-green-600 mt-1">✅ {stateName} has no state income tax</p>
            )}
          </div>

          {/* Pre-tax deductions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              401(k) Contribution (Annual)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                name="preTax401k"
                value={form.preTax401k}
                onChange={handleChange}
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="0"
                min="0"
                max="23500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">2026 limit: $23,500</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HSA Contribution (Annual)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                name="preTaxHSA"
                value={form.preTaxHSA}
                onChange={handleChange}
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Health Insurance Premium (Annual)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                name="preTaxHealthInsurance"
                value={form.preTaxHealthInsurance}
                onChange={handleChange}
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="0"
                min="0"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-base"
        >
          Calculate My Paycheck →
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-5">
          {/* Top summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-600 text-white rounded-2xl p-5 text-center">
              <div className="text-xs font-medium opacity-80 mb-1">{periodLabel} Take-Home</div>
              <div className="text-2xl font-bold">{fmt(result.netPerPaycheck)}</div>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Annual Net Pay</div>
              <div className="text-2xl font-bold text-gray-900">{fmt(result.netAnnual)}</div>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Total Tax Rate</div>
              <div className="text-2xl font-bold text-red-500">{pct(result.effectiveTotalRate)}</div>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Federal Rate</div>
              <div className="text-2xl font-bold text-orange-500">{pct(result.effectiveFederalRate)}</div>
            </div>
          </div>

          {/* Breakdown table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">
              {periodLabel} Paycheck Breakdown
            </h2>
            <div className="space-y-3">
              <Row label="Gross Pay" value={fmt(result.grossPerPaycheck)} color="text-gray-900" />
              {result.preTaxDeductionsPerPaycheck > 0 && (
                <Row label="Pre-Tax Deductions" value={`-${fmt(result.preTaxDeductionsPerPaycheck)}`} color="text-purple-600" />
              )}
              <div className="border-t border-dashed border-gray-200 pt-3">
                <Row label="Federal Income Tax" value={`-${fmt(result.federalTaxPerPaycheck)}`} color="text-red-500" sub={pct(result.effectiveFederalRate)} />
                {!isNoTaxState && (
                  <Row label={`${stateName} State Tax`} value={`-${fmt(result.stateTaxPerPaycheck)}`} color="text-orange-500" sub={pct(result.effectiveStateRate)} />
                )}
                {isNoTaxState && (
                  <Row label={`${stateName} State Tax`} value="$0.00" color="text-green-500" sub="No state tax 🟢" />
                )}
                <Row label="Social Security (6.2%)" value={`-${fmt(result.socialSecurityPerPaycheck)}`} color="text-yellow-600" />
                <Row label="Medicare (1.45%)" value={`-${fmt(result.medicarePerPaycheck)}`} color="text-yellow-600" />
              </div>
              <div className="border-t-2 border-gray-200 pt-3 mt-3">
                <Row label="Net Take-Home Pay" value={fmt(result.netPerPaycheck)} color="text-blue-600 font-bold text-lg" />
              </div>
            </div>
          </div>

          {/* Annual summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">Annual Summary</h2>
            <div className="space-y-3">
              <Row label="Annual Gross Income" value={fmt(result.grossAnnual)} color="text-gray-900" />
              {result.preTaxDeductions > 0 && (
                <Row label="Total Pre-Tax Deductions" value={`-${fmt(result.preTaxDeductions)}`} color="text-purple-600" />
              )}
              <Row label="Federal Taxable Income" value={fmt(result.federalTaxableIncome)} color="text-gray-600" />
              <div className="border-t border-dashed border-gray-200 pt-3">
                <Row label="Annual Federal Tax" value={`-${fmt(result.federalTax)}`} color="text-red-500" />
                {!isNoTaxState && <Row label={`Annual ${stateName} Tax`} value={`-${fmt(result.stateTax)}`} color="text-orange-500" />}
                <Row label="Annual Social Security" value={`-${fmt(result.socialSecurity)}`} color="text-yellow-600" />
                <Row label="Annual Medicare" value={`-${fmt(result.medicare)}`} color="text-yellow-600" />
                <Row label="Total Annual Taxes" value={`-${fmt(result.totalTax)}`} color="text-red-600 font-semibold" />
              </div>
              <div className="border-t-2 border-gray-200 pt-3">
                <Row label="Annual Net Income" value={fmt(result.netAnnual)} color="text-blue-600 font-bold text-lg" />
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center pb-4">
            * Estimates based on 2026 federal and state tax tables. Standard deduction applied. Actual taxes may vary.
            Your data never leaves your browser.
          </p>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, color, sub }: { label: string; value: string; color?: string; sub?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm text-gray-600">{label}</span>
        {sub && <span className="ml-2 text-xs text-gray-400">({sub})</span>}
      </div>
      <span className={`text-sm font-medium ${color || "text-gray-900"}`}>{value}</span>
    </div>
  );
}
