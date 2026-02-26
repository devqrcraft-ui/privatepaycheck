export const FEDERAL_BRACKETS_SINGLE = [
  { min: 0,      max: 11600,  rate: 0.10 },
  { min: 11600,  max: 47150,  rate: 0.12 },
  { min: 47150,  max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

export const FEDERAL_BRACKETS_MARRIED = [
  { min: 0,      max: 23200,  rate: 0.10 },
  { min: 23200,  max: 94300,  rate: 0.12 },
  { min: 94300,  max: 201050, rate: 0.22 },
  { min: 201050, max: 383900, rate: 0.24 },
  { min: 383900, max: 487450, rate: 0.32 },
  { min: 487450, max: 731200, rate: 0.35 },
  { min: 731200, max: Infinity, rate: 0.37 },
];

export const FEDERAL_BRACKETS_HOH = [
  { min: 0,      max: 16550,  rate: 0.10 },
  { min: 16550,  max: 63100,  rate: 0.12 },
  { min: 63100,  max: 100500, rate: 0.22 },
  { min: 100500, max: 191950, rate: 0.24 },
  { min: 191950, max: 243700, rate: 0.32 },
  { min: 243700, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

export const STANDARD_DEDUCTION = {
  single: 14600,
  married: 29200,
  hoh: 21900,
};

export const FICA = {
  socialSecurity: { rate: 0.062, cap: 168600 },
  medicare: { rate: 0.0145 },
  additionalMedicare: { rate: 0.009, threshold: 200000 },
};

export const STATE_TAXES: Record<string, { rate: number; name: string; noTax?: boolean }> = {
  al: { rate: 0.050, name: 'Alabama' },
  ak: { rate: 0,     name: 'Alaska',        noTax: true },
  az: { rate: 0.025, name: 'Arizona' },
  ar: { rate: 0.047, name: 'Arkansas' },
  ca: { rate: 0.093, name: 'California' },
  co: { rate: 0.044, name: 'Colorado' },
  ct: { rate: 0.065, name: 'Connecticut' },
  de: { rate: 0.066, name: 'Delaware' },
  fl: { rate: 0,     name: 'Florida',        noTax: true },
  ga: { rate: 0.055, name: 'Georgia' },
  hi: { rate: 0.110, name: 'Hawaii' },
  id: { rate: 0.058, name: 'Idaho' },
  il: { rate: 0.0495,name: 'Illinois' },
  in: { rate: 0.0305,name: 'Indiana' },
  ia: { rate: 0.060, name: 'Iowa' },
  ks: { rate: 0.057, name: 'Kansas' },
  ky: { rate: 0.045, name: 'Kentucky' },
  la: { rate: 0.0425,name: 'Louisiana' },
  me: { rate: 0.075, name: 'Maine' },
  md: { rate: 0.0575,name: 'Maryland' },
  ma: { rate: 0.050, name: 'Massachusetts' },
  mi: { rate: 0.0425,name: 'Michigan' },
  mn: { rate: 0.0985,name: 'Minnesota' },
  ms: { rate: 0.050, name: 'Mississippi' },
  mo: { rate: 0.054, name: 'Missouri' },
  mt: { rate: 0.069, name: 'Montana' },
  ne: { rate: 0.068, name: 'Nebraska' },
  nv: { rate: 0,     name: 'Nevada',         noTax: true },
  nh: { rate: 0,     name: 'New Hampshire',  noTax: true },
  nj: { rate: 0.1075,name: 'New Jersey' },
  nm: { rate: 0.059, name: 'New Mexico' },
  ny: { rate: 0.109, name: 'New York' },
  nc: { rate: 0.045, name: 'North Carolina' },
  nd: { rate: 0.025, name: 'North Dakota' },
  oh: { rate: 0.040, name: 'Ohio' },
  ok: { rate: 0.050, name: 'Oklahoma' },
  or: { rate: 0.099, name: 'Oregon' },
  pa: { rate: 0.0307,name: 'Pennsylvania' },
  ri: { rate: 0.0599,name: 'Rhode Island' },
  sc: { rate: 0.070, name: 'South Carolina' },
  sd: { rate: 0,     name: 'South Dakota',   noTax: true },
  tn: { rate: 0,     name: 'Tennessee',      noTax: true },
  tx: { rate: 0,     name: 'Texas',          noTax: true },
  ut: { rate: 0.0465,name: 'Utah' },
  vt: { rate: 0.0875,name: 'Vermont' },
  va: { rate: 0.0575,name: 'Virginia' },
  wa: { rate: 0,     name: 'Washington',     noTax: true },
  wv: { rate: 0.065, name: 'West Virginia' },
  wi: { rate: 0.0765,name: 'Wisconsin' },
  wy: { rate: 0,     name: 'Wyoming',        noTax: true },
  dc: { rate: 0.1075,name: 'Washington DC' },
};

export const STATES_LIST = Object.entries(STATE_TAXES)
  .map(([slug, data]) => ({ slug, ...data }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const STATE_SLUG_MAP: Record<string, string> = {
  'alabama': 'al', 'alaska': 'ak', 'arizona': 'az', 'arkansas': 'ar',
  'california': 'ca', 'colorado': 'co', 'connecticut': 'ct', 'delaware': 'de',
  'florida': 'fl', 'georgia': 'ga', 'hawaii': 'hi', 'idaho': 'id',
  'illinois': 'il', 'indiana': 'in', 'iowa': 'ia', 'kansas': 'ks',
  'kentucky': 'ky', 'louisiana': 'la', 'maine': 'me', 'maryland': 'md',
  'massachusetts': 'ma', 'michigan': 'mi', 'minnesota': 'mn', 'mississippi': 'ms',
  'missouri': 'mo', 'montana': 'mt', 'nebraska': 'ne', 'nevada': 'nv',
  'new-hampshire': 'nh', 'new-jersey': 'nj', 'new-mexico': 'nm', 'new-york': 'ny',
  'north-carolina': 'nc', 'north-dakota': 'nd', 'ohio': 'oh', 'oklahoma': 'ok',
  'oregon': 'or', 'pennsylvania': 'pa', 'rhode-island': 'ri', 'south-carolina': 'sc',
  'south-dakota': 'sd', 'tennessee': 'tn', 'texas': 'tx', 'utah': 'ut',
  'vermont': 'vt', 'virginia': 'va', 'washington': 'wa', 'west-virginia': 'wv',
  'wisconsin': 'wi', 'wyoming': 'wy', 'washington-dc': 'dc',
};
