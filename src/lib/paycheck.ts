import {
  FEDERAL_BRACKETS_SINGLE, FEDERAL_BRACKETS_MARRIED, FEDERAL_BRACKETS_HOH,
  STANDARD_DEDUCTION, FICA,
} from './taxRates2026';
import { stateIncomeTax, statePayrollTax } from './stateTax';

// 2026 employee 401(k) elective deferral limit (IRS Notice 2025-67)
export const K401_LIMIT_2026 = 24500;

export type FilingStatus = 'single' | 'married' | 'head';

export interface PaycheckInput {
  annual: number;
  freq: number;
  stateRatePct: number;
  stateCode?: string;
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

export function estimateFederalIncomeTax(annual: number, filing: FilingStatus): number {
  const brackets: Bracket[] =
    filing === 'married' ? FEDERAL_BRACKETS_MARRIED : filing === 'head' ? FEDERAL_BRACKETS_HOH : FEDERAL_BRACKETS_SINGLE;
  const stdDed =
    filing === 'married' ? STANDARD_DEDUCTION.married : filing === 'head' ? STANDARD_DEDUCTION.hoh : STANDARD_DEDUCTION.single;
  return bracketTax(Math.max(0, annual - stdDed), brackets);
}

// Annualized estimate; state calculations use the shared bracket model when a state code is provided.
export function estimatePaycheck(i: PaycheckInput) {
  const { annual, freq, stateRatePct, filing, k401Pct } = i;
  if (!Number.isFinite(annual) || annual <= 0) throw new RangeError('Annual income must be a positive finite number.');
  if (!Number.isFinite(freq) || freq <= 0) throw new RangeError('Pay frequency must be a positive finite number.');
  if (!Number.isFinite(stateRatePct) || stateRatePct < 0) throw new RangeError('State tax rate must be a non-negative finite number.');
  if (!Number.isFinite(k401Pct) || k401Pct < 0 || k401Pct > 1) throw new RangeError('401(k) contribution rate must be between 0 and 1.');

  const k401Annual = Math.min(annual * k401Pct, K401_LIMIT_2026);
  const fedAnnual = estimateFederalIncomeTax(annual - k401Annual, filing);
  const ssAnnual = Math.min(annual, FICA.socialSecurity.cap) * FICA.socialSecurity.rate;
  const additionalMedicareThreshold = filing === 'married' ? 250000 : FICA.additionalMedicare.threshold;
  const medAnnual =
    annual * FICA.medicare.rate +
    Math.max(0, annual - additionalMedicareThreshold) * FICA.additionalMedicare.rate;
  const stateCode = i.stateCode?.toLowerCase();
  const stateAllows401kWageReduction = stateCode !== 'pa' && stateCode !== 'nj';
  const stateTaxableWages = Math.max(0, annual - (stateAllows401kWageReduction ? k401Annual : 0));
  const stateAnnual = i.stateCode
    ? stateIncomeTax(i.stateCode, stateTaxableWages, filing === 'married' ? 'married' : 'single') +
      statePayrollTax(i.stateCode, annual)
    : stateTaxableWages * (stateRatePct / 100);
  const totalTaxAnnual = fedAnnual + ssAnnual + medAnnual + stateAnnual;
  const netAnnual = annual - totalTaxAnnual - k401Annual;
  const per = (n: number) => n / freq;
  return {
    gross: per(annual), fed: per(fedAnnual), ss: per(ssAnnual), med: per(medAnnual),
    state: per(stateAnnual), k401: per(k401Annual), net: per(netAnnual),
    taxPct: (totalTaxAnnual / annual) * 100,
  };
}
