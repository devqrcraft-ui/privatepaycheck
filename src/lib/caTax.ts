import { estimatePaycheck } from './paycheck';

// California FTB 2026 Tax Rate Schedules: https://www.ftb.ca.gov/forms/2026/2026-540-tax-rate-schedules.pdf
export const CA_TAX_YEAR = 2026;
export const CA_TAX_BRACKETS_SINGLE: [number, number][] = [
  [11456, 0.01], [27157, 0.02], [42861, 0.04], [59498, 0.06], [75197, 0.08],
  [384109, 0.093], [460927, 0.103], [768213, 0.113], [Infinity, 0.123],
];
export const CA_TAX_BRACKETS_MARRIED: [number, number][] = [
  [22912, 0.01], [54314, 0.02], [85722, 0.04], [118996, 0.06], [150394, 0.08],
  [768218, 0.093], [921854, 0.103], [1536426, 0.113], [Infinity, 0.123],
];
const CA_STD = { single: 5706, married: 11412 };
const CA_EXEMPTION_CREDIT = { single: 153, married: 306 };
export const CA_SDI_RATE = 0.013; // 2026 SDI rate, no wage cap

export type CaFiling = 'single' | 'married';

export function caStateTax(annual: number, filing: CaFiling): number {
  const taxable = Math.max(0, annual - CA_STD[filing]);
  const brackets = filing === 'married' ? CA_TAX_BRACKETS_MARRIED : CA_TAX_BRACKETS_SINGLE;
  let tax = 0;
  let prev = 0;
  for (const [lim, rate] of brackets) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, lim) - prev) * rate;
    prev = lim;
  }
  tax += Math.max(0, taxable - 1000000) * 0.01; // Mental Health Services Tax
  return Math.max(0, tax - CA_EXEMPTION_CREDIT[filing]);
}

export function estimateCaPaycheck(i: { annual: number; freq: number; filing: CaFiling }) {
  const { annual, freq, filing } = i;
  const base = estimatePaycheck({ annual, freq: 1, stateRatePct: 0, filing, k401Pct: 0 });
  const caState = caStateTax(annual, filing);
  const caSDI = annual * CA_SDI_RATE;
  const netYear = base.net - caState - caSDI;
  const totalTax = base.fed + base.ss + base.med + caState + caSDI;
  const per = (n: number) => n / freq;
  return {
    gross: per(annual), fed: per(base.fed), ss: per(base.ss), med: per(base.med),
    caState: per(caState), caSDI: per(caSDI), net: per(netYear), netYear,
    pct: (totalTax / annual) * 100,
  };
}
