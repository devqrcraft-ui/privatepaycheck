import type { Metadata } from 'next';
import HourlyStateClient from './HourlyStateClient';

const SLUGS = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut',
  'delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa',
  'kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan',
  'minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire',
  'new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio',
  'oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington','west-virginia',
  'wisconsin','wyoming',
];

const STATE_NAMES: Record<string,string> = {
  alabama:'Alabama', alaska:'Alaska', arizona:'Arizona', arkansas:'Arkansas',
  california:'California', colorado:'Colorado', connecticut:'Connecticut',
  delaware:'Delaware', florida:'Florida', georgia:'Georgia', hawaii:'Hawaii',
  idaho:'Idaho', illinois:'Illinois', indiana:'Indiana', iowa:'Iowa',
  kansas:'Kansas', kentucky:'Kentucky', louisiana:'Louisiana', maine:'Maine',
  maryland:'Maryland', massachusetts:'Massachusetts', michigan:'Michigan',
  minnesota:'Minnesota', mississippi:'Mississippi', missouri:'Missouri',
  montana:'Montana', nebraska:'Nebraska', nevada:'Nevada',
  'new-hampshire':'New Hampshire', 'new-jersey':'New Jersey', 'new-mexico':'New Mexico',
  'new-york':'New York', 'north-carolina':'North Carolina', 'north-dakota':'North Dakota',
  ohio:'Ohio', oklahoma:'Oklahoma', oregon:'Oregon', pennsylvania:'Pennsylvania',
  'rhode-island':'Rhode Island', 'south-carolina':'South Carolina', 'south-dakota':'South Dakota',
  tennessee:'Tennessee', texas:'Texas', utah:'Utah', vermont:'Vermont',
  virginia:'Virginia', washington:'Washington', 'west-virginia':'West Virginia',
  wisconsin:'Wisconsin', wyoming:'Wyoming',
};

const NO_TAX = new Set(['alaska','florida','nevada','new-hampshire','south-dakota','tennessee','texas','washington','wyoming']);

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const name = STATE_NAMES[state] || state;
  const noTax = NO_TAX.has(state);
  return {
    title: `${name} Hourly Paycheck Calculator 2026 — Free`,
    description: `Calculate take-home pay from your hourly wage in ${name}. ${noTax ? name+' has no state income tax.' : 'Includes '+name+' state tax.'} Federal taxes, FICA, 401k. Free & private.`,
    alternates: { canonical: `https://www.privatepaycheck.com/hourly-paycheck-calculator/${state}` },
  };
}

export default async function HourlyStatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  return <HourlyStateClient stateSlug={state} />;
}
