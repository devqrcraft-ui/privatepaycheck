// src/lib/calculator.ts
// Core paycheck calculation logic

import {
  FEDERAL_BRACKETS_2026,
  STANDARD_DEDUCTION_2026,
  FICA_2026,
  STATE_TAX_RATES,
  PAY_FREQUENCIES,
} from "./taxRates";

export type FilingStatus = "single" | "married" | "head";
export type PayFrequency = "weekly" | "biweekly" | "semimonthly" | "monthly" | "annual";

export interface CalculatorInput {
  grossIncome: number;           // annual gross income
  filingStatus: FilingStatus;
  payFrequency: PayFrequency;
  stateCode: string;
  preTax401k: number;            // annual 401k contribution
  preTaxHSA: number;             // annual HSA contribution
  preTaxHealthInsurance: number; // annual health insurance (per paycheck * periods)
}

export interface TaxBreakdown {
  grossAnnual: number;
  preTaxDeductions: number;
  federalTaxableIncome: number;
  federalTax: number;
  stateTax: number;
  socialSecurity: number;
  medicare: number;
  totalTax: number;
  netAnnual: number;
  // Per paycheck
  grossPerPaycheck: number;
  federalTaxPerPaycheck: number;
  stateTaxPerPaycheck: number;
  socialSecurityPerPaycheck: number;
  medicarePerPaycheck: number;
  preTaxDeductionsPerPaycheck: number;
  netPerPaycheck: number;
  effectiveFederalRate: number;
  effectiveStateRate: number;
  effectiveTotalRate: number;
}

function calcFederalTax(taxableIncome: number, filingStatus: FilingStatus): number {
  const brackets = FEDERAL_BRACKETS_2026[filingStatus];
  let tax = 0;
  for (const bracket of brackets) {
    if (taxableIncome <= bracket.min) break;
    const taxable = Math.min(taxableIncome, bracket.max) - bracket.min;
    tax += taxable * bracket.rate;
  }
  return Math.max(0, tax);
}

function calcStateTax(taxableIncome: number, stateCode: string): number {
  const state = STATE_TAX_RATES[stateCode];
  if (!state || state.noTax || state.rate === null) return 0;

  if (state.brackets) {
    let tax = 0;
    for (const bracket of state.brackets) {
      if (taxableIncome <= bracket.min) break;
      const taxable = Math.min(taxableIncome, bracket.max) - bracket.min;
      tax += taxable * bracket.rate;
    }
    return Math.max(0, tax);
  }

  if (state.flatRate) {
    return taxableIncome * state.flatRate;
  }

  return 0;
}

export function calculatePaycheck(input: CalculatorInput): TaxBreakdown {
  const {
    grossIncome,
    filingStatus,
    payFrequency,
    stateCode,
    preTax401k,
    preTaxHSA,
    preTaxHealthInsurance,
  } = input;

  const periods = PAY_FREQUENCIES[payFrequency].periodsPerYear;

  // Pre-tax deductions reduce federal/state taxable income
  const preTaxDeductions = preTax401k + preTaxHSA + preTaxHealthInsurance;

  // Federal taxable income
  const standardDeduction = STANDARD_DEDUCTION_2026[filingStatus];
  const federalTaxableIncome = Math.max(0, grossIncome - preTaxDeductions - standardDeduction);

  // Federal tax
  const federalTax = calcFederalTax(federalTaxableIncome, filingStatus);

  // State tax (usually on gross - preTax deductions, no standard deduction for simplicity)
  const stateTaxableIncome = Math.max(0, grossIncome - preTaxDeductions);
  const stateTax = calcStateTax(stateTaxableIncome, stateCode);

  // FICA
  const ficaWages = Math.min(grossIncome, FICA_2026.socialSecurityWageCap);
  const socialSecurity = ficaWages * FICA_2026.socialSecurityRate;

  const medicareBase = grossIncome * FICA_2026.medicareRate;
  const additionalMedicareThreshold = FICA_2026.additionalMedicareThreshold[filingStatus];
  const additionalMedicare = Math.max(0, grossIncome - additionalMedicareThreshold) * FICA_2026.additionalMedicareRate;
  const medicare = medicareBase + additionalMedicare;

  const totalTax = federalTax + stateTax + socialSecurity + medicare;
  const netAnnual = grossIncome - totalTax - preTaxDeductions;

  return {
    grossAnnual: grossIncome,
    preTaxDeductions,
    federalTaxableIncome,
    federalTax,
    stateTax,
    socialSecurity,
    medicare,
    totalTax,
    netAnnual,
    // Per paycheck
    grossPerPaycheck: grossIncome / periods,
    federalTaxPerPaycheck: federalTax / periods,
    stateTaxPerPaycheck: stateTax / periods,
    socialSecurityPerPaycheck: socialSecurity / periods,
    medicarePerPaycheck: medicare / periods,
    preTaxDeductionsPerPaycheck: preTaxDeductions / periods,
    netPerPaycheck: netAnnual / periods,
    effectiveFederalRate: grossIncome > 0 ? (federalTax / grossIncome) * 100 : 0,
    effectiveStateRate: grossIncome > 0 ? (stateTax / grossIncome) * 100 : 0,
    effectiveTotalRate: grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0,
  };
}
