// src/lib/taxRates.ts
// Federal & State Tax Rates 2026

export const FEDERAL_BRACKETS_2026 = {
  single: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
  married: [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23850, max: 96950, rate: 0.12 },
    { min: 96950, max: 206700, rate: 0.22 },
    { min: 206700, max: 394600, rate: 0.24 },
    { min: 394600, max: 501050, rate: 0.32 },
    { min: 501050, max: 751600, rate: 0.35 },
    { min: 751600, max: Infinity, rate: 0.37 },
  ],
  head: [
    { min: 0, max: 17000, rate: 0.10 },
    { min: 17000, max: 64850, rate: 0.12 },
    { min: 64850, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250500, rate: 0.32 },
    { min: 250500, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
};

export const STANDARD_DEDUCTION_2026 = {
  single: 15000,
  married: 30000,
  head: 22500,
};

export const FICA_2026 = {
  socialSecurityRate: 0.062,
  socialSecurityWageCap: 184500,
  medicareRate: 0.0145,
  additionalMedicareRate: 0.009,
  additionalMedicareThreshold: {
    single: 200000,
    married: 250000,
    head: 200000,
  },
};

// State income tax rates 2026
// null = no state income tax
export const STATE_TAX_RATES: Record<string, {
  name: string;
  rate: number | null;
  brackets?: { min: number; max: number; rate: number }[];
  flatRate?: number;
  noTax?: boolean;
}> = {
  AL: { name: "Alabama", rate: 0.05, flatRate: 0.05 },
  AK: { name: "Alaska", rate: null, noTax: true },
  AZ: { name: "Arizona", rate: 0.025, flatRate: 0.025 },
  AR: { name: "Arkansas", rate: 0.044, flatRate: 0.044 },
  CA: {
    name: "California", rate: 0.093,
    brackets: [
      { min: 0, max: 10412, rate: 0.01 },
      { min: 10412, max: 24684, rate: 0.02 },
      { min: 24684, max: 38959, rate: 0.04 },
      { min: 38959, max: 54081, rate: 0.06 },
      { min: 54081, max: 68350, rate: 0.08 },
      { min: 68350, max: 349137, rate: 0.093 },
      { min: 349137, max: 418961, rate: 0.103 },
      { min: 418961, max: 698274, rate: 0.113 },
      { min: 698274, max: Infinity, rate: 0.123 },
    ]
  },
  CO: { name: "Colorado", rate: 0.044, flatRate: 0.044 },
  CT: { name: "Connecticut", rate: 0.05, flatRate: 0.05 },
  DE: { name: "Delaware", rate: 0.066, flatRate: 0.066 },
  FL: { name: "Florida", rate: null, noTax: true },
  GA: { name: "Georgia", rate: 0.055, flatRate: 0.055 },
  HI: { name: "Hawaii", rate: 0.11, flatRate: 0.11 },
  ID: { name: "Idaho", rate: 0.058, flatRate: 0.058 },
  IL: { name: "Illinois", rate: 0.0495, flatRate: 0.0495 },
  IN: { name: "Indiana", rate: 0.0305, flatRate: 0.0305 },
  IA: { name: "Iowa", rate: 0.06, flatRate: 0.06 },
  KS: { name: "Kansas", rate: 0.057, flatRate: 0.057 },
  KY: { name: "Kentucky", rate: 0.04, flatRate: 0.04 },
  LA: { name: "Louisiana", rate: 0.03, flatRate: 0.03 },
  ME: { name: "Maine", rate: 0.075, flatRate: 0.075 },
  MD: { name: "Maryland", rate: 0.0575, flatRate: 0.0575 },
  MA: { name: "Massachusetts", rate: 0.05, flatRate: 0.05 },
  MI: { name: "Michigan", rate: 0.0425, flatRate: 0.0425 },
  MN: { name: "Minnesota", rate: 0.0985, flatRate: 0.0985 },
  MS: { name: "Mississippi", rate: 0.05, flatRate: 0.05 },
  MO: { name: "Missouri", rate: 0.048, flatRate: 0.048 },
  MT: { name: "Montana", rate: 0.069, flatRate: 0.069 },
  NE: { name: "Nebraska", rate: 0.0664, flatRate: 0.0664 },
  NV: { name: "Nevada", rate: null, noTax: true },
  NH: { name: "New Hampshire", rate: null, noTax: true },
  NJ: { name: "New Jersey", rate: 0.0637, flatRate: 0.0637 },
  NM: { name: "New Mexico", rate: 0.059, flatRate: 0.059 },
  NY: {
    name: "New York", rate: 0.0685,
    brackets: [
      { min: 0, max: 17150, rate: 0.04 },
      { min: 17150, max: 23600, rate: 0.045 },
      { min: 23600, max: 27900, rate: 0.0525 },
      { min: 27900, max: 161550, rate: 0.0585 },
      { min: 161550, max: 323200, rate: 0.0625 },
      { min: 323200, max: 2155350, rate: 0.0685 },
      { min: 2155350, max: Infinity, rate: 0.0882 },
    ]
  },
  NC: { name: "North Carolina", rate: 0.045, flatRate: 0.045 },
  ND: { name: "North Dakota", rate: 0.025, flatRate: 0.025 },
  OH: { name: "Ohio", rate: 0.035, flatRate: 0.035 },
  OK: { name: "Oklahoma", rate: 0.0475, flatRate: 0.0475 },
  OR: { name: "Oregon", rate: 0.099, flatRate: 0.099 },
  PA: { name: "Pennsylvania", rate: 0.0307, flatRate: 0.0307 },
  RI: { name: "Rhode Island", rate: 0.0599, flatRate: 0.0599 },
  SC: { name: "South Carolina", rate: 0.065, flatRate: 0.065 },
  SD: { name: "South Dakota", rate: null, noTax: true },
  TN: { name: "Tennessee", rate: null, noTax: true },
  TX: { name: "Texas", rate: null, noTax: true },
  UT: { name: "Utah", rate: 0.0465, flatRate: 0.0465 },
  VT: { name: "Vermont", rate: 0.0875, flatRate: 0.0875 },
  VA: { name: "Virginia", rate: 0.0575, flatRate: 0.0575 },
  WA: { name: "Washington", rate: null, noTax: true },
  WV: { name: "West Virginia", rate: 0.065, flatRate: 0.065 },
  WI: { name: "Wisconsin", rate: 0.0765, flatRate: 0.0765 },
  WY: { name: "Wyoming", rate: null, noTax: true },
  DC: { name: "Washington D.C.", rate: 0.085, flatRate: 0.085 },
};

export const PAY_FREQUENCIES = {
  weekly: { label: "Weekly", periodsPerYear: 52 },
  biweekly: { label: "Bi-Weekly", periodsPerYear: 26 },
  semimonthly: { label: "Semi-Monthly", periodsPerYear: 24 },
  monthly: { label: "Monthly", periodsPerYear: 12 },
  annual: { label: "Annual", periodsPerYear: 1 },
};

export const FILING_STATUS = {
  single: "Single",
  married: "Married Filing Jointly",
  head: "Head of Household",
};
