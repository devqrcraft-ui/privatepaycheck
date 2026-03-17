
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: "How much of my bonus will I keep after taxes?", acceptedAnswer: { '@type': 'Answer', text: "The IRS withholds 22% federal tax on bonuses. State taxes also apply. On a $10,000 bonus in Texas (no state tax), you keep about $7,820. In California, you keep roughly $6,200 after federal and state taxes." } },{ '@type': 'Question', name: "Why is my bonus taxed so high?", acceptedAnswer: { '@type': 'Answer', text: "Bonuses are taxed as supplemental wages at a flat 22% federal rate, which may be higher than your regular withholding rate if you are in the 10% or 12% bracket. At tax time you may get a refund if your actual effective rate is lower." } },{ '@type': 'Question', name: "Can I reduce taxes on my bonus?", acceptedAnswer: { '@type': 'Answer', text: "Yes — contribute your bonus to a 401(k) or HSA before year-end to reduce taxable income. You can also ask your employer to spread the bonus over two pay periods or use the aggregate withholding method if it results in lower withholding." } }] };
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BonusTaxCalculatorState from './BonusTaxCalculatorState';

const STATE_DATA: Record<string, { abbr: string; name: string; stateTax: number; noStateTax: boolean }> = {
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
    "noStateTax": false
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
    "noStateTax": true
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
    "noStateTax": true
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
  const taxNote = data.noStateTax ? 'no state income tax' : data.stateTax + '% state income tax';
  return {
    title: data.name + ' Bonus Tax Calculator 2026 — Exact Take-Home After IRS 22% + State Tax',
    description: 'Got a bonus in ' + data.name + '? See exactly how much you keep after IRS 22% flat rate + state tax + FICA. Free 2026 calculator — results in seconds, no login.',
    alternates: { canonical: 'https://privatepaycheck.com/bonus-tax-calculator/' + state },
  };
}

export default async function Page({ params }: Props) {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) notFound();
  return <BonusTaxCalculatorState stateName={data.name} stateAbbr={data.abbr} stateTax={data.stateTax} noStateTax={data.noStateTax} stateSlug={state} />;
}
