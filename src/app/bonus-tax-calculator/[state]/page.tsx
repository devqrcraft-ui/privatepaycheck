function getStateFaqSchema(stateName: string, stateTax: number, noStateTax: boolean) {
  const stateText = noStateTax
    ? stateName + ' has no state individual income tax.'
    : 'This estimate uses a configured ' + stateTax + '% state-rate approximation; it is not a state withholding calculation.';
  const estimateText = stateText + ' The calculator estimates incremental federal income-tax liability, a state-tax approximation, and payroll taxes. It does not predict paycheck withholding or guarantee a final tax amount.';
  const rateText = 'There is no single bonus tax rate. Federal income tax depends on annual taxable income; employer withholding is a prepayment and may differ from final tax liability.';
  const reduceText = 'Eligible retirement or health-plan contributions may affect taxable wages, subject to plan rules and annual limits. Changing withholding affects the paycheck amount, not the final tax liability.';
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How much of my bonus will I keep after taxes in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: estimateText } },
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


type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) return { title: 'Not Found' };
  const title = data.name + ' Bonus Tax Calculator 2026';
  const description = data.noStateTax
    ? `Estimate the federal income-tax impact and FICA on a bonus in ${data.name}. This is a tax-liability estimate, not a paycheck-withholding calculation.`
    : `Estimate the federal income-tax impact, FICA, and a simplified state-rate approximation for a bonus in ${data.name}. Actual tax and withholding vary.`;
  const canonicalUrl = 'https://www.privatepaycheck.com/bonus-tax-calculator/' + state;
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'PrivatePaycheck',
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck bonus tax calculator' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
    },
    authors: [{ name: 'the PrivatePaycheck Team' }],
  };
}

export default async function Page({ params }: Props) {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) notFound();

  const ssrContent = (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 32px', fontFamily: 'system-ui,sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#e8edf8' }}>
        How this {data.name} bonus estimate works
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: '#e2e8f0' }}>
        The calculator compares estimated federal income tax on salary plus bonus with tax on salary alone, adds modeled payroll taxes, and—where applicable—uses a simplified state-rate assumption. It does not calculate employer withholding, state tax brackets, local taxes, credits, or your final return. Check current state and IRS guidance for your circumstances.
      </p>
    </div>
  );
  const faqSchema = getStateFaqSchema(data.name, data.stateTax, data.noStateTax);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><BonusTaxCalculatorState stateName={data.name} stateAbbr={data.abbr} stateTax={data.stateTax} noStateTax={data.noStateTax} stateSlug={state} />{ssrContent}</>;
}