function getStateFaqSchema(stateName: string, stateTax: number, noStateTax: boolean) {
  const keep10k = noStateTax ? 7820 : Math.round(10000 * (1 - 0.22 - 0.0765 - stateTax / 100));
  const totalRate = noStateTax ? '29.65%' : (22 + stateTax + 7.65).toFixed(1) + '%';
  const noTaxText = stateName + ' has no state income tax. Only 22% federal + 7.65% FICA apply.';
  const hasTaxText = stateName + ' withholds ' + stateTax + '% state tax plus 22% federal + 7.65% FICA.';
  const stateText = noStateTax ? noTaxText : hasTaxText;
  const keepText = 'On a $10,000 bonus in ' + stateName + ', you keep approximately $' + keep10k.toLocaleString() + '.';
  const rateText = 'Total withholding in ' + stateName + ' is approximately ' + totalRate + '.';
  const reduceText = 'Yes. Contribute to a 401(k) or HSA before year-end. Ask your employer to use the aggregate method in ' + stateName + ' if your effective rate is below 22%.';
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How much of my bonus will I keep after taxes in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: stateText + ' ' + keepText } },
    { '@type': 'Question', name: 'What is the bonus tax rate in ' + stateName + ' 2026?', acceptedAnswer: { '@type': 'Answer', text: rateText } },
    { '@type': 'Question', name: 'Can I reduce bonus taxes in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: reduceText } }
  ]};
}
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


const STATE_NOTES: Record<string, string> = {
  "connecticut": "Connecticut taxes bonus income at 6.5% — one of the highest rates in the Northeast. Combined with federal 22% withholding and FICA, a Connecticut worker receiving a $10,000 bonus takes home approximately $6,890. Connecticut also imposes a 0.5% surcharge on incomes above $500,000.",
  "washington": "Washington State has no personal income tax — your bonus is only subject to federal withholding (22%) and FICA. On a $10,000 bonus, a Washington worker keeps approximately $7,820, saving over $600 compared to neighboring Oregon.",
  "illinois": "Illinois taxes all income including bonuses at a flat 4.95% rate. On a $10,000 bonus, Illinois workers pay roughly $495 in state tax plus federal withholding and FICA, keeping approximately $7,325.",
  "california": "California taxes bonus income up to 13.3% at the top marginal rate. The state supplemental withholding rate is 10.23%. On a $10,000 bonus, a California worker in the top bracket takes home roughly $6,200 — the lowest of any U.S. state.",
  "new-york": "New York State taxes bonus income up to 10.9%. NYC residents pay an additional 3.876% city tax. A New York City worker receiving a $10,000 bonus may take home as little as $5,900 after all taxes.",
  "texas": "Texas has no state income tax — your bonus is only subject to federal withholding (22%) and FICA. On a $10,000 bonus, a Texas worker keeps approximately $7,820.",
  "florida": "Florida has no state income tax — your bonus is only subject to federal withholding (22%) and FICA. On a $10,000 bonus, a Florida worker keeps approximately $7,820.",
  "pennsylvania": "Pennsylvania taxes bonus income at a flat 3.07% — one of the lowest flat rates in the U.S. On a $10,000 bonus, Pennsylvania workers pay $307 in state tax, keeping approximately $7,513 after all taxes.",
  "ohio": "Ohio taxes bonus income on a graduated scale up to 3.99%. On a $10,000 bonus for a median earner, Ohio workers keep approximately $7,421 after federal, state, and FICA taxes.",
  "massachusetts": "Massachusetts taxes bonus income at a flat 5%. On a $10,000 bonus, Massachusetts workers pay $500 in state tax, keeping approximately $7,270 after all taxes.",
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
    alternates: { canonical: 'https://www.privatepaycheck.com/bonus-tax-calculator/' + state },
  };
}

export default async function Page({ params }: Props) {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) notFound();

  const stateNote = STATE_NOTES[state];
  const ssrContent = stateNote ? (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 32px', fontFamily: 'system-ui,sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#1e293b' }}>
        Bonus Tax in {data.name}: What You Need to Know
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>{stateNote}</p>
    </div>
  ) : null;

  const faqSchema = getStateFaqSchema(data.name, data.stateTax, data.noStateTax);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><BonusTaxCalculatorState stateName={data.name} stateAbbr={data.abbr} stateTax={data.stateTax} noStateTax={data.noStateTax} stateSlug={state} />{ssrContent}</>;
}
 + keep10k.toLocaleString() + '.' } },
    { '@type': 'Question', name: 'What is the bonus tax rate in ' + stateName + ' 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Total withholding on a bonus in ' + stateName + ' is approximately ' + totalRate + ' (' + (noStateTax ? '22% federal + 7.65% FICA, no state tax' : '22% federal + ' + stateTax + '% state + 7.65% FICA') + ').' } },
    { '@type': 'Question', name: 'Can I reduce bonus taxes in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — contribute to a 401(k) or HSA before year-end to reduce taxable income. Ask your employer to use the aggregate method in ' + stateName + ' if your effective rate is below 22%.' } }
  ]};
}
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


const STATE_NOTES: Record<string, string> = {
  "connecticut": "Connecticut taxes bonus income at 6.5% — one of the highest rates in the Northeast. Combined with federal 22% withholding and FICA, a Connecticut worker receiving a $10,000 bonus takes home approximately $6,890. Connecticut also imposes a 0.5% surcharge on incomes above $500,000.",
  "washington": "Washington State has no personal income tax — your bonus is only subject to federal withholding (22%) and FICA. On a $10,000 bonus, a Washington worker keeps approximately $7,820, saving over $600 compared to neighboring Oregon.",
  "illinois": "Illinois taxes all income including bonuses at a flat 4.95% rate. On a $10,000 bonus, Illinois workers pay roughly $495 in state tax plus federal withholding and FICA, keeping approximately $7,325.",
  "california": "California taxes bonus income up to 13.3% at the top marginal rate. The state supplemental withholding rate is 10.23%. On a $10,000 bonus, a California worker in the top bracket takes home roughly $6,200 — the lowest of any U.S. state.",
  "new-york": "New York State taxes bonus income up to 10.9%. NYC residents pay an additional 3.876% city tax. A New York City worker receiving a $10,000 bonus may take home as little as $5,900 after all taxes.",
  "texas": "Texas has no state income tax — your bonus is only subject to federal withholding (22%) and FICA. On a $10,000 bonus, a Texas worker keeps approximately $7,820.",
  "florida": "Florida has no state income tax — your bonus is only subject to federal withholding (22%) and FICA. On a $10,000 bonus, a Florida worker keeps approximately $7,820.",
  "pennsylvania": "Pennsylvania taxes bonus income at a flat 3.07% — one of the lowest flat rates in the U.S. On a $10,000 bonus, Pennsylvania workers pay $307 in state tax, keeping approximately $7,513 after all taxes.",
  "ohio": "Ohio taxes bonus income on a graduated scale up to 3.99%. On a $10,000 bonus for a median earner, Ohio workers keep approximately $7,421 after federal, state, and FICA taxes.",
  "massachusetts": "Massachusetts taxes bonus income at a flat 5%. On a $10,000 bonus, Massachusetts workers pay $500 in state tax, keeping approximately $7,270 after all taxes.",
};

type Props = { params: Promise<{ state: string }> };
