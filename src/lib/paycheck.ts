import {
  FEDERAL_BRACKETS_SINGLE, FEDERAL_BRACKETS_MARRIED, FEDERAL_BRACKETS_HOH,
  STANDARD_DEDUCTION, FICA,
} from './taxRates2026';

// 2026 employee 401(k) elective deferral limit (IRS Notice 2025-67)
export const K401_LIMIT_2026 = 24500;

export type FilingStatus = 'single' | 'married' | 'head';

export interface PaycheckInput {
  annual: number;
  freq: number;
  stateRatePct: number;
  filing: FilingStatus;
  k401Pct: number; // 0..1
}

type Bracket = { min: number; max: number; rate: number };

function bracketTax(taxable: number, brackets: Bracket[]): number {
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    tax += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  return tax;
}

// Annualized estimate. State tax is a flat-rate approximation on wages after 401(k).
export function estimatePaycheck(i: PaycheckInput) {
  const { annual, freq, stateRatePct, filing, k401Pct } = i;
  const brackets: Bracket[] =
    filing === 'married' ? FEDERAL_BRACKETS_MARRIED : filing === 'head' ? FEDERAL_BRACKETS_HOH : FEDERAL_BRACKETS_SINGLE;
  const stdDed =
    filing === 'married' ? STANDARD_DEDUCTION.married : filing === 'head' ? STANDARD_DEDUCTION.hoh : STANDARD_DEDUCTION.single;
  const k401Annual = Math.min(annual * k401Pct, K401_LIMIT_2026);
  const federalTaxable = Math.max(0, annual - k401Annual - stdDed);
  const fedAnnual = bracketTax(federalTaxable, brackets);
  const ssAnnual = Math.min(annual, FICA.socialSecurity.cap) * FICA.socialSecurity.rate;
  const medAnnual =
    annual * FICA.medicare.rate +
    Math.max(0, annual - FICA.additionalMedicare.threshold) * FICA.additionalMedicare.rate;
  const stateAnnual = Math.max(0, annual - k401Annual) * (stateRatePct / 100);
  const totalTaxAnnual = fedAnnual + ssAnnual + medAnnual + stateAnnual;
  const netAnnual = annual - totalTaxAnnual - k401Annual;
  const per = (n: number) => n / freq;
  return {
    gross: per(annual), fed: per(fedAnnual), ss: per(ssAnnual), med: per(medAnnual),
    state: per(stateAnnual), k401: per(k401Annual), net: per(netAnnual),
    taxPct: (totalTaxAnnual / annual) * 100,
  };
}
