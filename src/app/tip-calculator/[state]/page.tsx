import type { Metadata } from 'next';
import { STATE_MIN_WAGE, STATE_SLUG_MAP } from '@/lib/taxRates2026';
import { notFound } from 'next/navigation';
import TipCalculatorState from './TipCalculatorState';

const STATE_DATA: Record<string, { abbr: string; name: string; stateTax: number; noStateTax: boolean; noTipCredit?: boolean }> = {
  "alabama": {
    "abbr": "AL",
    "name": "Alabama",
    "stateTax": 5,
    "noStateTax": false
  },
  "alaska": {
    "abbr": "AK",
    "name": "Alaska",
    "stateTax": 0,
    "noStateTax": true
  },
  "arizona": {
    "abbr": "AZ",
    "name": "Arizona",
    "stateTax": 2.5,
    "noStateTax": false
  },
  "arkansas": {
    "abbr": "AR",
    "name": "Arkansas",
    "stateTax": 4.7,
    "noStateTax": false
  },
  "california": {
    "abbr": "CA",
    "name": "California",
    "stateTax": 9.3,
    "noStateTax": false,
    "noTipCredit": true
  },
  "colorado": {
    "abbr": "CO",
    "name": "Colorado",
    "stateTax": 4.4,
    "noStateTax": false
  },
  "connecticut": {
    "abbr": "CT",
    "name": "Connecticut",
    "stateTax": 6.5,
    "noStateTax": false
  },
  "delaware": {
    "abbr": "DE",
    "name": "Delaware",
    "stateTax": 6.6,
    "noStateTax": false
  },
  "florida": {
    "abbr": "FL",
    "name": "Florida",
    "stateTax": 0,
    "noStateTax": true,
    "noTipCredit": false
  },
  "georgia": {
    "abbr": "GA",
    "name": "Georgia",
    "stateTax": 5.5,
    "noStateTax": false
  },
  "hawaii": {
    "abbr": "HI",
    "name": "Hawaii",
    "stateTax": 8,
    "noStateTax": false
  },
  "idaho": {
    "abbr": "ID",
    "name": "Idaho",
    "stateTax": 5.8,
    "noStateTax": false
  },
  "illinois": {
    "abbr": "IL",
    "name": "Illinois",
    "stateTax": 4.95,
    "noStateTax": false
  },
  "indiana": {
    "abbr": "IN",
    "name": "Indiana",
    "stateTax": 3.05,
    "noStateTax": false
  },
  "iowa": {
    "abbr": "IA",
    "name": "Iowa",
    "stateTax": 6,
    "noStateTax": false
  },
  "kansas": {
    "abbr": "KS",
    "name": "Kansas",
    "stateTax": 5.7,
    "noStateTax": false
  },
  "kentucky": {
    "abbr": "KY",
    "name": "Kentucky",
    "stateTax": 4.5,
    "noStateTax": false
  },
  "louisiana": {
    "abbr": "LA",
    "name": "Louisiana",
    "stateTax": 4.25,
    "noStateTax": false
  },
  "maine": {
    "abbr": "ME",
    "name": "Maine",
    "stateTax": 7.5,
    "noStateTax": false
  },
  "maryland": {
    "abbr": "MD",
    "name": "Maryland",
    "stateTax": 5.75,
    "noStateTax": false
  },
  "massachusetts": {
    "abbr": "MA",
    "name": "Massachusetts",
    "stateTax": 5,
    "noStateTax": false
  },
  "michigan": {
    "abbr": "MI",
    "name": "Michigan",
    "stateTax": 4.25,
    "noStateTax": false
  },
  "minnesota": {
    "abbr": "MN",
    "name": "Minnesota",
    "stateTax": 9.85,
    "noStateTax": false
  },
  "mississippi": {
    "abbr": "MS",
    "name": "Mississippi",
    "stateTax": 5,
    "noStateTax": false
  },
  "missouri": {
    "abbr": "MO",
    "name": "Missouri",
    "stateTax": 5.4,
    "noStateTax": false
  },
  "montana": {
    "abbr": "MT",
    "name": "Montana",
    "stateTax": 6.9,
    "noStateTax": false
  },
  "nebraska": {
    "abbr": "NE",
    "name": "Nebraska",
    "stateTax": 6.84,
    "noStateTax": false
  },
  "nevada": {
    "abbr": "NV",
    "name": "Nevada",
    "stateTax": 0,
    "noStateTax": true
  },
  "new-hampshire": {
    "abbr": "NH",
    "name": "New Hampshire",
    "stateTax": 0,
    "noStateTax": true
  },
  "new-jersey": {
    "abbr": "NJ",
    "name": "New Jersey",
    "stateTax": 6.37,
    "noStateTax": false
  },
  "new-mexico": {
    "abbr": "NM",
    "name": "New Mexico",
    "stateTax": 5.9,
    "noStateTax": false
  },
  "new-york": {
    "abbr": "NY",
    "name": "New York",
    "stateTax": 6.85,
    "noStateTax": false
  },
  "north-carolina": {
    "abbr": "NC",
    "name": "North Carolina",
    "stateTax": 4.99,
    "noStateTax": false
  },
  "north-dakota": {
    "abbr": "ND",
    "name": "North Dakota",
    "stateTax": 2.9,
    "noStateTax": false
  },
  "ohio": {
    "abbr": "OH",
    "name": "Ohio",
    "stateTax": 4,
    "noStateTax": false
  },
  "oklahoma": {
    "abbr": "OK",
    "name": "Oklahoma",
    "stateTax": 4.75,
    "noStateTax": false
  },
  "oregon": {
    "abbr": "OR",
    "name": "Oregon",
    "stateTax": 9.9,
    "noStateTax": false
  },
  "pennsylvania": {
    "abbr": "PA",
    "name": "Pennsylvania",
    "stateTax": 3.07,
    "noStateTax": false
  },
  "rhode-island": {
    "abbr": "RI",
    "name": "Rhode Island",
    "stateTax": 5.99,
    "noStateTax": false
  },
  "south-carolina": {
    "abbr": "SC",
    "name": "South Carolina",
    "stateTax": 7,
    "noStateTax": false
  },
  "south-dakota": {
    "abbr": "SD",
    "name": "South Dakota",
    "stateTax": 0,
    "noStateTax": true
  },
  "tennessee": {
    "abbr": "TN",
    "name": "Tennessee",
    "stateTax": 0,
    "noStateTax": true
  },
  "texas": {
    "abbr": "TX",
    "name": "Texas",
    "stateTax": 0,
    "noStateTax": true,
    "noTipCredit": false
  },
  "utah": {
    "abbr": "UT",
    "name": "Utah",
    "stateTax": 4.65,
    "noStateTax": false
  },
  "vermont": {
    "abbr": "VT",
    "name": "Vermont",
    "stateTax": 8.75,
    "noStateTax": false
  },
  "virginia": {
    "abbr": "VA",
    "name": "Virginia",
    "stateTax": 5.75,
    "noStateTax": false
  },
  "washington": {
    "abbr": "WA",
    "name": "Washington",
    "stateTax": 0,
    "noStateTax": true
  },
  "west-virginia": {
    "abbr": "WV",
    "name": "West Virginia",
    "stateTax": 6.5,
    "noStateTax": false
  },
  "wisconsin": {
    "abbr": "WI",
    "name": "Wisconsin",
    "stateTax": 7.65,
    "noStateTax": false
  },
  "wyoming": {
    "abbr": "WY",
    "name": "Wyoming",
    "stateTax": 0,
    "noStateTax": true
  },
  "washington-dc": {
    "abbr": "DC",
    "name": "Washington DC",
    "stateTax": 8.5,
    "noStateTax": false
  }
};

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) return { title: 'Not Found' };
  return {
    title: `${data.name} Qualified Tips Deduction Calculator 2026`,
    description: `Estimate federal income-tax savings for qualified tips in ${data.name}. State tax treatment is not modeled and may vary.`,
    openGraph: {
      title: `${data.name} Qualified Tips Deduction Calculator 2026`,
      description: `Estimate federal income-tax savings for qualified tips in ${data.name}; state tax treatment is not modeled.`,
      url: `https://www.privatepaycheck.com/tip-calculator/${state}`,
      siteName: 'PrivatePaycheck',
      type: 'website',
    },
    alternates: { canonical: 'https://www.privatepaycheck.com/tip-calculator/' + state },
    authors: [{ name: 'the PrivatePaycheck Team' }],
  };
}

export default async function Page({ params }: Props) {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `${data.name} qualified-tips deduction estimate`,
        description: 'Estimate a federal income-tax scenario for qualified tips. This is not a state-tax or take-home-pay calculator.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter tips', text: 'Enter annual tips; the estimate assumes all entered tips qualify.' },
          { '@type': 'HowToStep', position: 2, name: 'Enter employee wages', text: 'Enter annual employee wages excluding tips; the estimate approximates modified adjusted gross income using only wages and tips.' },
          { '@type': 'HowToStep', position: 3, name: 'Choose filing status', text: 'Select a filing status to apply the modeled federal income-tax brackets and phase-out.' },
          { '@type': 'HowToStep', position: 4, name: 'Review the estimate', text: 'Review the estimated federal deduction and tax savings. State taxes, self-employment income and tax, other income, credits, and eligibility are not determined.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are tips taxable income in 2026?',
            acceptedAnswer: { '@type': 'Answer', text: 'Tips remain reportable. Eligible workers may qualify for a federal deduction for qualified tips for tax years 2025–2028, subject to occupation, income, and other limits. The deduction does not eliminate employee Social Security or Medicare taxes.' },
          },
          {
            '@type': 'Question',
            name: 'What does this tips calculator estimate?',
            acceptedAnswer: { '@type': 'Answer', text: 'It estimates a federal income-tax deduction and possible federal income-tax savings, assuming the entered tips qualify and modified adjusted gross income is wages plus tips. It does not calculate state tax or exact take-home pay, validate eligibility, or model self-employment income and tax.' },
          },
          {
            '@type': 'Question',
            name: 'Does the federal tips deduction reduce state income tax?',
            acceptedAnswer: { '@type': 'Answer', text: 'State conformity varies, and this calculator does not estimate state income-tax savings. A state with no broad individual income tax may still have payroll taxes or other state-level deductions.' },
          },
        ],
      }) }} />
      <TipCalculatorState stateName={data.name} noStateTax={data.noStateTax} noTipCredit={data.noTipCredit ?? null} minWage={STATE_MIN_WAGE[STATE_SLUG_MAP[state]]?.hourly ?? 7.25} />
    </>
  );
}
