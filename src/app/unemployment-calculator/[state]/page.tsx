import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import UnemploymentCalculatorState from './UnemploymentCalculatorState';

const STATE_DATA: Record<string, { name: string; maxWeekly: number; maxWeeks: number; rate: number; waitWeek: boolean; stateIncomeTax: number }> = {
  "alabama": { name: "Alabama", maxWeekly: 265, maxWeeks: 20, rate: 50, waitWeek: true, stateIncomeTax: 5.0 },
  "alaska": { name: "Alaska", maxWeekly: 370, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "arizona": { name: "Arizona", maxWeekly: 320, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 2.5 },
  "arkansas": { name: "Arkansas", maxWeekly: 451, maxWeeks: 16, rate: 43, waitWeek: false, stateIncomeTax: 4.4 },
  "california": { name: "California", maxWeekly: 450, maxWeeks: 26, rate: 60, waitWeek: true, stateIncomeTax: 9.3 },
  "colorado": { name: "Colorado", maxWeekly: 781, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 4.4 },
  "connecticut": { name: "Connecticut", maxWeekly: 787, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 5.0 },
  "delaware": { name: "Delaware", maxWeekly: 400, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 6.6 },
  "florida": { name: "Florida", maxWeekly: 275, maxWeeks: 12, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "georgia": { name: "Georgia", maxWeekly: 365, maxWeeks: 14, rate: 50, waitWeek: false, stateIncomeTax: 5.49 },
  "hawaii": { name: "Hawaii", maxWeekly: 695, maxWeeks: 26, rate: 70, waitWeek: false, stateIncomeTax: 11.0 },
  "idaho": { name: "Idaho", maxWeekly: 448, maxWeeks: 20, rate: 55, waitWeek: false, stateIncomeTax: 5.8 },
  "indiana": { name: "Indiana", maxWeekly: 390, maxWeeks: 26, rate: 47, waitWeek: false, stateIncomeTax: 3.0 },
  "iowa": { name: "Iowa", maxWeekly: 498, maxWeeks: 26, rate: 53, waitWeek: false, stateIncomeTax: 6.0 },
  "kansas": { name: "Kansas", maxWeekly: 474, maxWeeks: 16, rate: 55, waitWeek: false, stateIncomeTax: 5.7 },
  "kentucky": { name: "Kentucky", maxWeekly: 626, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 4.0 },
  "louisiana": { name: "Louisiana", maxWeekly: 247, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 4.25 },
  "maine": { name: "Maine", maxWeekly: 531, maxWeeks: 26, rate: 42, waitWeek: false, stateIncomeTax: 7.15 },
  "maryland": { name: "Maryland", maxWeekly: 430, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 5.75 },
  "massachusetts": { name: "Massachusetts", maxWeekly: 1033, maxWeeks: 30, rate: 50, waitWeek: false, stateIncomeTax: 5.0 },
  "michigan": { name: "Michigan", maxWeekly: 362, maxWeeks: 20, rate: 43, waitWeek: false, stateIncomeTax: 4.25 },
  "minnesota": { name: "Minnesota", maxWeekly: 857, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 9.85 },
  "mississippi": { name: "Mississippi", maxWeekly: 235, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 4.7 },
  "missouri": { name: "Missouri", maxWeekly: 320, maxWeeks: 20, rate: 50, waitWeek: false, stateIncomeTax: 4.7 },
  "montana": { name: "Montana", maxWeekly: 693, maxWeeks: 28, rate: 50, waitWeek: false, stateIncomeTax: 6.75 },
  "nebraska": { name: "Nebraska", maxWeekly: 440, maxWeeks: 20, rate: 50, waitWeek: false, stateIncomeTax: 5.84 },
  "nevada": { name: "Nevada", maxWeekly: 469, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "new-jersey": { name: "New Jersey", maxWeekly: 854, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 6.37 },
  "new-mexico": { name: "New Mexico", maxWeekly: 511, maxWeeks: 26, rate: 53.5, waitWeek: false, stateIncomeTax: 4.9 },
  "new-york": { name: "New York", maxWeekly: 869, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 6.85 },
  "north-carolina": { name: "North Carolina", maxWeekly: 350, maxWeeks: 12, rate: 50, waitWeek: false, stateIncomeTax: 4.5 },
  "north-dakota": { name: "North Dakota", maxWeekly: 618, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 2.5 },
  "ohio": { name: "Ohio", maxWeekly: 647, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 3.5 },
  "oklahoma": { name: "Oklahoma", maxWeekly: 539, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 4.75 },
  "oregon": { name: "Oregon", maxWeekly: 783, maxWeeks: 26, rate: 64, waitWeek: false, stateIncomeTax: 9.9 },
  "pennsylvania": { name: "Pennsylvania", maxWeekly: 605, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "rhode-island": { name: "Rhode Island", maxWeekly: 762, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 5.99 },
  "south-carolina": { name: "South Carolina", maxWeekly: 326, maxWeeks: 20, rate: 50, waitWeek: false, stateIncomeTax: 6.5 },
  "south-dakota": { name: "South Dakota", maxWeekly: 552, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "tennessee": { name: "Tennessee", maxWeekly: 275, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "utah": { name: "Utah", maxWeekly: 660, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 4.55 },
  "vermont": { name: "Vermont", maxWeekly: 583, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 8.75 },
  "virginia": { name: "Virginia", maxWeekly: 378, maxWeeks: 12, rate: 50, waitWeek: false, stateIncomeTax: 5.75 },
  "washington": { name: "Washington", maxWeekly: 1019, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 0 },
  "west-virginia": { name: "West Virginia", maxWeekly: 424, maxWeeks: 26, rate: 55, waitWeek: false, stateIncomeTax: 6.5 },
  "wisconsin": { name: "Wisconsin", maxWeekly: 370, maxWeeks: 26, rate: 40, waitWeek: false, stateIncomeTax: 5.3 },
  "wyoming": { name: "Wyoming", maxWeekly: 508, maxWeeks: 26, rate: 40, waitWeek: false, stateIncomeTax: 0 },
};

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) return { title: 'Not Found' };
  const title = data.name + ' Unemployment Calculator 2026 | Weekly Benefit Estimate';
  const description = `Estimate a simplified weekly unemployment benefit in ${data.name}. State agencies use claim-specific wage history and current rules to determine benefit amounts, eligibility, and duration.`;
  const canonicalUrl = 'https://www.privatepaycheck.com/unemployment-calculator/' + state;
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
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck unemployment calculator' }],
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

  return (
    <>
      <UnemploymentCalculatorState
        stateName={data.name}
        stateSlug={state}
        maxWeekly={data.maxWeekly}
        maxWeeks={data.maxWeeks}
        rate={data.rate}
      />
    </>
  );
}
