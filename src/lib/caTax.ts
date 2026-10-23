import { estimatePaycheck } from './paycheck';

// California FTB 2025 Schedule X / Y (latest published; 2026 schedules are released in the fall)
export const CA_TAX_YEAR = 2025;
const SINGLE: [number, number][] = [
  [11079, 0.01], [26264, 0.02], [41452, 0.04], [57542, 0.06], [72724, 0.08],
  [371479, 0.093], [445771, 0.103], [742953, 0.113], [Infinity, 0.123],
];
// Married/RDP filing jointly thresholds are double the single thresholds
const MARRIED: [number, number][] = SINGLE.map(([l, r]) => [l === Infinity ? Infinity : l * 2, r] as [number, number]);
const CA_STD = { single: 5706, married: 11412 };
const CA_EXEMPTION_CREDIT = { single: 153, married: 306 };
export const CA_SDI_RATE = 0.013; // 2026 SDI rate, no wage cap

export type CaFiling = 'single' | 'married';

export function caStateTax(annual: number, filing: CaFiling): number {
  const taxable = Math.max(0, annual - CA_STD[filing]);
  const brackets = filing === 'married' ? MARRIED : SINGLE;
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
