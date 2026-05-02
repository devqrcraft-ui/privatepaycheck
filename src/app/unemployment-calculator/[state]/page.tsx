function getUnemploymentFaqSchema(stateName: string, maxWeekly: number, maxWeeks: number, rate: number) {
  const maxTotal = maxWeekly * maxWeeks;
  const howMuchText = 'In ' + stateName + ', the maximum unemployment benefit is $' + maxWeekly + ' per week for up to ' + maxWeeks + ' weeks, totaling up to $' + maxTotal.toLocaleString() + '. Your actual benefit depends on prior wages.';
  const howCalcText = stateName + ' calculates benefits based on your highest-earning base period quarter. The weekly benefit is approximately ' + rate + '% of your average weekly wage, up to $' + maxWeekly + '.';
  const howLongText = 'Standard unemployment in ' + stateName + ' lasts up to ' + maxWeeks + ' weeks. Extended benefits may be available during high unemployment periods.';
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How much unemployment can I get in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: howMuchText } },
    { '@type': 'Question', name: 'How is unemployment calculated in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: howCalcText } },
    { '@type': 'Question', name: 'How long can I collect unemployment in ' + stateName + '?', acceptedAnswer: { '@type': 'Answer', text: howLongText } }
  ]};
}
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import UnemploymentCalculatorState from './UnemploymentCalculatorState';

const STATE_DATA: Record<string, { name: string; maxWeekly: number; maxWeeks: number; rate: number; waitWeek: boolean; stateIncomeTax: number }> = {
  "alabama": { name: "Alabama", maxWeekly: 265, maxWeeks: 20, rate: 50, waitWeek: true, stateIncomeTax: 5.0 },
  "alaska": { name: "Alaska", maxWeekly: 370, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 0 },
  "arizona": { name: "Arizona", maxWeekly: 320, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 2.5 },
  "arkansas": { name: "Arkansas", maxWeekly: 451, maxWeeks: 16, rate: 43, waitWeek: false, stateIncomeTax: 4.4 },
  "california": { name: "California", maxWeekly: 450, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 9.3 },
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
  "new-york": { name: "New York", maxWeekly: 504, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 6.85 },
  "north-carolina": { name: "North Carolina", maxWeekly: 350, maxWeeks: 12, rate: 50, waitWeek: false, stateIncomeTax: 4.5 },
  "north-dakota": { name: "North Dakota", maxWeekly: 618, maxWeeks: 26, rate: 60, waitWeek: false, stateIncomeTax: 2.5 },
  "ohio": { name: "Ohio", maxWeekly: 647, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 3.5 },
  "oklahoma": { name: "Oklahoma", maxWeekly: 539, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 4.75 },
  "oregon": { name: "Oregon", maxWeekly: 783, maxWeeks: 26, rate: 64, waitWeek: false, stateIncomeTax: 9.9 },
  "pennsylvania": { name: "Pennsylvania", maxWeekly: 572, maxWeeks: 26, rate: 50, waitWeek: false, stateIncomeTax: 3.07 },
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

const STATE_NOTES: Record<string, string> = {
  "illinois": "Illinois unemployment benefits max out at $742/week for up to 26 weeks -- among the more generous in the Midwest. The state taxes UI benefits at a flat 4.95%. Note the 1-week waiting period: your first week of unemployment is unpaid. A laid-off worker earning $1,500/week would receive approximately $705/week (47% rate), with about $636 after state tax and optional 10% federal withholding.",
  "maine": "Maine pays up to $531/week for up to 26 weeks, calculated at 42% of your prior average weekly wage. Maine taxes UI benefits at 7.15% -- one of the higher state rates in New England. There is no waiting week in Maine, so benefits begin immediately. A worker earning $1,200/week would receive roughly $504/week, or about $431 after all taxes.",
  "new-hampshire": "New Hampshire offers up to $427/week for 26 weeks. With no state income tax, your full benefit amount is only subject to the optional 10% federal withholding. A worker earning $900/week would receive $427 (capped), keeping approximately $384/week after federal withholding -- better take-home than neighboring Maine or Vermont.",
  "texas": "Texas pays up to $563/week for up to 26 weeks at approximately 47% of prior wages. With no state income tax, Texas claimants keep more of their benefits than in most states. A worker earning $1,200/week would receive $563 (capped), keeping about $507 after optional 10% federal withholding.",
  "california": "California unemployment benefits are calculated at roughly 60-70% of your weekly wages up to $450/week. Benefits are taxable at the state marginal rate plus federal. California also offers State Disability Insurance (SDI) which may provide higher short-term payments than regular UI.",
  "pennsylvania": "Pennsylvania pays up to $572/week for 26 weeks. At just 3.07% state income tax, Pennsylvania claimants keep most of their benefit. A worker earning $1,150/week would receive $572 (capped), keeping about $495 after taxes -- one of the better net values in the Northeast.",
  "washington": "Washington State offers the highest UI maximum in the country at $1,019/week for up to 26 weeks. With no state income tax, claimants keep significantly more than in other states. A laid-off worker earning $2,000/week would receive $1,019, keeping approximately $917 after optional 10% federal withholding.",
  "new-jersey": "New Jersey pays up to $854/week for 26 weeks, calculated at 60% of prior wages. UI benefits are taxable at your marginal rate. Combined state and federal taxes can reach 16% or more for higher earners. New Jersey also has one of the most worker-friendly eligibility systems in the US.",
  "massachusetts": "Massachusetts has the longest duration in the Northeast at 30 weeks and a maximum of $1,033/week. Benefits are taxable at the flat 5% state rate. A worker earning $2,100/week would receive $1,033 (capped), keeping about $879 after all taxes -- excellent value given the duration.",
  "alabama": "Alabama has one of the lowest UI maximums in the South at $265/week for only 20 weeks. The 1-week waiting period further reduces total benefits. A worker earning $600/week would receive $265 (capped), keeping about $220 after the 5% state tax and federal withholding.",
  "west-virginia": "West Virginia pays up to $424/week for 26 weeks at 55% of prior wages. The 6.5% state tax on benefits is among the highest in the region. A worker earning $770/week would receive $424 (capped), keeping approximately $350 after all taxes.",
  "louisiana": "Louisiana has the lowest UI maximum in the South at $247/week for up to 26 weeks. Benefits are taxable at 4.25% state rate. A worker earning $600/week would receive $247 (capped) -- one of the smallest safety nets in the country.",
  "montana": "Montana is unusually generous with up to 28 weeks of benefits (longest in the Mountain West) and a $693/week maximum. The 6.75% state tax is the highest in the region. A worker earning $1,400/week would receive $693 (capped), keeping about $579 after taxes.",
  "florida": "Florida pays only up to $275/week for a maximum of 12 weeks -- one of the most restrictive programs in the US. With no state income tax, claimants keep the full after-federal amount, but the short duration and low cap make it a minimal safety net.",
  "ohio": "Ohio pays up to $647/week for 26 weeks. At 3.5% state income tax, Ohio claimants retain most of their benefit. A worker earning $1,300/week would receive $647 (capped), keeping approximately $552 after taxes.",
  "new-mexico": "New Mexico pays up to $511/week for 26 weeks at 53.5% of prior wages. The 4.9% state tax is moderate. A worker earning $960/week would receive $511 (capped), keeping about $434 after all taxes.",
};

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) return { title: 'Not Found' };
  const titleOverrides: Record<string, string> = {
    'pennsylvania': 'Pennsylvania Unemployment Weekly Benefit Amount 2026 -- Calculator',
    'illinois': 'Illinois Unemployment Calculator 2026 -- Weekly Benefit Amount & Estimator',
  };
  return {
    title: titleOverrides[state] || data.name + ' Unemployment Calculator 2026 -- Max $' + data.maxWeekly + '/week, ' + data.maxWeeks + ' Weeks',
    description: 'Calculate your ' + data.name + ' unemployment benefits in 2026. Maximum benefit: $' + data.maxWeekly + '/week for up to ' + data.maxWeeks + ' weeks. Instant estimate based on your prior wages -- no login required.',
    alternates: { canonical: 'https://www.privatepaycheck.com/unemployment-calculator/' + state },
  };
}

export default async function Page({ params }: Props) {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) notFound();

  const stateNote = STATE_NOTES[state];
  const ssrContent = stateNote ? (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 32px', fontFamily: 'system-ui,sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#e8edf8' }}>
        {data.name} Unemployment Benefits 2026: Key Facts
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>{stateNote}</p>
    </div>
  ) : null;

  const faqSchema = getUnemploymentFaqSchema(data.name, data.maxWeekly, data.maxWeeks, data.rate);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UnemploymentCalculatorState
        stateName={data.name}
        stateSlug={state}
        maxWeekly={data.maxWeekly}
        maxWeeks={data.maxWeeks}
        rate={data.rate}
        waitWeek={data.waitWeek}
        stateIncomeTax={data.stateIncomeTax}
      />
      {ssrContent}
    </>
  );
}
