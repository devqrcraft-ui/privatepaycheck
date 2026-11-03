import { estimateFederalIncomeTax, type FilingStatus } from './paycheck';
import { FICA, STANDARD_DEDUCTION } from './taxRates2026';

const STATE_RATE_ESTIMATES: Record<string, number> = {
  AL: 0.05, AZ: 0.025, AR: 0.044, CA: 0.093, CO: 0.044, CT: 0.05,
  DE: 0.066, GA: 0.055, HI: 0.11, ID: 0.058, IL: 0.0495, IN: 0.0305,
  IA: 0.057, KS: 0.057, KY: 0.04, LA: 0.03, ME: 0.075, MD: 0.0575,
  MA: 0.05, MI: 0.0425, MN: 0.0985, MS: 0.05, MO: 0.054, MT: 0.069,
  NE: 0.0664, NJ: 0.1075, NM: 0.059, NY: 0.109, NC: 0.0475, ND: 0.025,
  OH: 0.035, OK: 0.05, OR: 0.099, PA: 0.0307, RI: 0.0599, SC: 0.065,
  UT: 0.0465, VT: 0.0875, VA: 0.0575, WV: 0.065, WI: 0.0765,
};

export interface ContractorTaxEstimateInput {
  grossIncome: number;
  businessExpenses: number;
  applySimplifiedQbi: boolean;
  stateCode: string;
  filingStatus: FilingStatus;
}

export interface ContractorTaxEstimate {
  grossIncome: number;
  businessExpenses: number;
  netIncome: number;
  selfEmploymentTax: number;
  federalIncomeTax: number;
  stateIncomeTax: number;
  totalTax: number;
  effectiveRate: number;
  takeHome: number;
  quarterlySetAside: number;
}

export function estimateContractorTax(input: ContractorTaxEstimateInput): ContractorTaxEstimate {
  const { grossIncome, businessExpenses, applySimplifiedQbi, stateCode, filingStatus } = input;
  if (!Number.isFinite(grossIncome) || grossIncome <= 0) {
    throw new RangeError('Enter gross income greater than zero.');
  }
  if (!Number.isFinite(businessExpenses) || businessExpenses < 0 || businessExpenses > grossIncome) {
    throw new RangeError('Enter expenses from zero through gross income; business losses are not modeled.');
  }

  const netIncome = grossIncome - businessExpenses;
  const selfEmploymentIncome = netIncome * 0.9235;
  const socialSecurityTax = Math.min(selfEmploymentIncome, FICA.socialSecurity.cap) *
    (FICA.socialSecurity.rate * 2);
  const medicareTax = selfEmploymentIncome * (FICA.medicare.rate * 2);
  const selfEmploymentTax = socialSecurityTax + medicareTax;
  const federalIncomeBase = Math.max(0, netIncome - selfEmploymentTax * 0.5);
  const standardDeduction = filingStatus === 'married'
    ? STANDARD_DEDUCTION.married
    : filingStatus === 'head'
      ? STANDARD_DEDUCTION.hoh
      : STANDARD_DEDUCTION.single;
  const qbiDeduction = applySimplifiedQbi
    ? Math.min(federalIncomeBase * 0.2, Math.max(0, federalIncomeBase - standardDeduction) * 0.2)
    : 0;
  const federalTaxableIncome = Math.max(0, federalIncomeBase - qbiDeduction);
  const federalIncomeTax = estimateFederalIncomeTax(federalTaxableIncome, filingStatus);
  const stateIncomeTax = (STATE_RATE_ESTIMATES[stateCode] ?? 0) * netIncome;
  const totalTax = selfEmploymentTax + federalIncomeTax + stateIncomeTax;

  return {
    grossIncome,
    businessExpenses,
    netIncome,
    selfEmploymentTax,
    federalIncomeTax,
    stateIncomeTax,
    totalTax,
    effectiveRate: totalTax / grossIncome,
    takeHome: netIncome - totalTax,
    quarterlySetAside: totalTax / 4,
  };
}
