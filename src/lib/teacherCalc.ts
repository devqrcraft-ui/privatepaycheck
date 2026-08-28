// src/lib/teacherCalc.ts
// Единый источник правды для расчётов teacher paycheck — импортируется
// и TeacherPaycheckClient.tsx (главный калькулятор), и /teacher-paycheck-calculator/[state]/page.tsx
// Источники: IRS Rev. Proc. 2025-32 (https://www.irs.gov/pub/irs-drop/rp-25-32.pdf) — verified 2026-08-26
// Pension rates: официальные сайты TRS/STRS/PSERS каждого штата, 2025-2026

export type Filing = 'single' | 'married' | 'hoh';

export const PENSION_RATE: Record<string, { rate: number; system: string; ss: boolean }> = {
  AL: { rate: 0.075,  system: 'TRS Alabama',       ss: true  },
  AK: { rate: 0.08,   system: 'TRS Alaska',         ss: false },
  AZ: { rate: 0.12,   system: 'ASRS Arizona',       ss: true  },
  AR: { rate: 0.07,   system: 'TRS Arkansas',       ss: true  },
  CA: { rate: 0.1025, system: 'CalSTRS',            ss: false },
  CO: { rate: 0.10,   system: 'PERA Colorado',      ss: false },
  CT: { rate: 0.06,   system: 'TRS Connecticut',    ss: true  },
  DE: { rate: 0.05,   system: 'PHRST Delaware',     ss: true  },
  FL: { rate: 0.03,   system: 'FRS Florida',        ss: true  },
  GA: { rate: 0.06,   system: 'TRS Georgia',        ss: true  },
  HI: { rate: 0.08,   system: 'ERS Hawaii',         ss: true  },
  ID: { rate: 0.0772, system: 'PERSI Idaho',        ss: true  },
  IL: { rate: 0.09,   system: 'TRS Illinois',       ss: false },
  IN: { rate: 0.03,   system: 'TRF Indiana',        ss: true  },
  IA: { rate: 0.0995, system: 'IPERS Iowa',         ss: true  },
  KS: { rate: 0.06,   system: 'KPERS Kansas',       ss: true  },
  KY: { rate: 0.12,   system: 'TRS Kentucky',       ss: false },
  LA: { rate: 0.08,   system: 'TRSL Louisiana',     ss: false },
  ME: { rate: 0.075,  system: 'MainePERS',          ss: false },
  MD: { rate: 0.07,   system: 'MSRPS Maryland',     ss: true  },
  MA: { rate: 0.11,   system: 'MTRS Massachusetts', ss: false },
  MI: { rate: 0.07,   system: 'MPSERS Michigan',    ss: true  },
  MN: { rate: 0.075,  system: 'TRA Minnesota',      ss: true  },
  MS: { rate: 0.09,   system: 'PERS Mississippi',   ss: false },
  MO: { rate: 0.14,   system: 'PSRS Missouri',      ss: false },
  MT: { rate: 0.0795, system: 'TRS Montana',        ss: false },
  NE: { rate: 0.0979, system: 'NPERS Nebraska',     ss: true  },
  NV: { rate: 0.1475, system: 'PERS Nevada',        ss: false },
  NH: { rate: 0.07,   system: 'NHRS New Hampshire', ss: true  },
  NJ: { rate: 0.075,  system: 'TPAF New Jersey',    ss: true  },
  NM: { rate: 0.1075, system: 'NMERB New Mexico',   ss: false },
  NY: { rate: 0.035,  system: 'NYSTRS New York',    ss: true  },
  NC: { rate: 0.06,   system: 'TSERS N. Carolina',  ss: true  },
  ND: { rate: 0.0825, system: 'TFFR N. Dakota',     ss: true  },
  OH: { rate: 0.14,   system: 'STRS Ohio',          ss: false },
  OK: { rate: 0.07,   system: 'TRS Oklahoma',       ss: true  },
  OR: { rate: 0.0895, system: 'PERS Oregon',        ss: false },
  PA: { rate: 0.0825, system: 'PSERS Pennsylvania', ss: true  },
  RI: { rate: 0.099,  system: 'ERSRI Rhode Island', ss: true  },
  SC: { rate: 0.09,   system: 'PEBA S. Carolina',   ss: true  },
  SD: { rate: 0.069,  system: 'SDRS S. Dakota',     ss: true  },
  TN: { rate: 0.05,   system: 'TCRS Tennessee',     ss: true  },
  TX: { rate: 0.08,   system: 'TRS Texas',          ss: false },
  UT: { rate: 0.1,    system: 'URS Utah',           ss: true  },
  VT: { rate: 0.0575, system: 'VSTRS Vermont',      ss: true  },
  VA: { rate: 0.05,   system: 'VRS Virginia',       ss: true  },
  WA: { rate: 0.0728, system: 'DRS Washington',     ss: true  },
  WV: { rate: 0.06,   system: 'CPRB W. Virginia',   ss: true  },
  WI: { rate: 0.067,  system: 'ETF Wisconsin',      ss: true  },
  WY: { rate: 0.145,  system: 'WRS Wyoming',        ss: true  },
  DC: { rate: 0.08,   system: 'DCRB Washington DC', ss: true  },
};

// STATE_TAX тепер береться з канонічного джерела taxRates2026.ts (STATE_TAXES),
// а не з окремої дубльованої таблиці (виправлено: NY/NJ/HI/DC розходились на 2-4 п.п.)
import { STATE_TAXES } from './taxRates2026';
export const STATE_TAX: Record<string, number> = Object.fromEntries(
  Object.entries(STATE_TAXES).map(([code, v]) => [code, v.rate])
);

export const STATE_NAMES: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
  CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',
  IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',
  ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',
  MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',
  WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'Washington DC',
};

// slug ("texas") -> code ("TX"), для generateStaticParams в [state]/page.tsx
export const STATE_SLUG_TO_CODE: Record<string, string> = Object.fromEntries(
  Object.entries(STATE_NAMES).map(([code, name]) => [
    name.toLowerCase().replace(/\s+/g, '-'),
    code,
  ])
);

// ─── Standard deduction 2026 — IRS Rev. Proc. 2025-32, Section 4.14 ──────────
export function stdDeduction(filing: Filing): number {
  if (filing === 'married') return 32200;
  if (filing === 'hoh') return 24150;
  return 16100; // single / married filing separately
}

// ─── Federal tax brackets 2026 — IRS Rev. Proc. 2025-32, Section 4.01 ───────
// Verified directly against irs.gov/pub/irs-drop/rp-25-32.pdf, 2026-08-26.
export function federalTax(income: number, filing: Filing): number {
  const brackets: [number, number][] =
    filing === 'married'
      ? [[24800,0.10],[100800,0.12],[211400,0.22],[403550,0.24],[512450,0.32],[768700,0.35],[Infinity,0.37]]
      : filing === 'hoh'
      ? [[17700,0.10],[67450,0.12],[105700,0.22],[201750,0.24],[256200,0.32],[640600,0.35],[Infinity,0.37]]
      : [[12400,0.10],[50400,0.12],[105700,0.22],[201775,0.24],[256225,0.32],[640600,0.35],[Infinity,0.37]];
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets) {
    if (income <= prev) break;
    tax += (Math.min(income, limit) - prev) * rate;
    prev = limit;
  }
  return tax;
}

// ─── SS Fairness Act: simplified new SS benefit estimate ────────────────────
// Comment preserved from original: simplified AIME estimate, not a precise SSA calc.
export function estimateSSBenefit(salary: number, ssYears: number): number {
  if (ssYears === 0) return 0;
  const aime = (salary * 0.5 * ssYears) / 35 / 12;
  const pia = aime <= 1226
    ? aime * 0.9
    : 1226 * 0.9 + Math.min(aime - 1226, 6172) * 0.32;
  return Math.round(pia * 12);
}

// ─── Main calculation ─────────────────────────────────────────────────────
export function calcTeacher(salary: number, state: string, filing: Filing, ssYears: number, age: number) {
  const pensionInfo = PENSION_RATE[state] ?? { rate: 0.07, system: 'State TRS', ss: true };
  const pensionDeduction = salary * pensionInfo.rate;

  const federalTaxableIncome = Math.max(0, salary - pensionDeduction - stdDeduction(filing));
  const fedTax = federalTax(federalTaxableIncome, filing);

  const ficaSS = pensionInfo.ss ? Math.min(salary, 184500) * 0.062 : 0;
  const ficaMedicare = salary * 0.0145;
  const fica = ficaSS + ficaMedicare;

  const stateTaxableIncome = Math.max(0, salary - pensionDeduction);
  const stateTax = stateTaxableIncome * (STATE_TAX[state] ?? 0);

  const seniorDeduction = age >= 65 ? Math.min(6000, Math.max(0, 6000 - Math.max(0, salary - 75000) * 0.06)) : 0;
  const seniorTaxSaving = seniorDeduction * (fedTax / Math.max(federalTaxableIncome, 1));

  const totalDeductions = fedTax + stateTax + fica + pensionDeduction - seniorTaxSaving;
  const takeHome = salary - totalDeductions;
  const monthlyTakeHome = takeHome / 12;
  const biweeklyTakeHome = takeHome / 26;

  const ssBenefit = !pensionInfo.ss ? estimateSSBenefit(salary, ssYears) : 0;

  return {
    gross: salary, pensionDeduction, pensionRate: pensionInfo.rate, pensionSystem: pensionInfo.system,
    isSScovered: pensionInfo.ss, fedTax, stateTax, fica, seniorDeduction, seniorTaxSaving,
    totalDeductions, takeHome, monthlyTakeHome, biweeklyTakeHome, ssBenefit,
    effectiveRate: totalDeductions / salary,
  };
}
