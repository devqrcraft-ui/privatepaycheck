const STATE_SLUGS = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut',
  'delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa',
  'kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan',
  'minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire',
  'new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio',
  'oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington','west-virginia',
  'wisconsin','wyoming','washington-dc',
];

const UNEMPLOYMENT_SLUGS = [
  'alabama','california','florida','illinois','louisiana','maine','massachusetts',
  'montana','new-hampshire','new-jersey','new-mexico','ohio','pennsylvania',
  'texas','washington','west-virginia',
];

const urls = [
  'https://www.privatepaycheck.com/',
  'https://www.privatepaycheck.com/sitemap.xml',
  ...STATE_SLUGS.map(s => `https://www.privatepaycheck.com/${s}-paycheck-calculator`),
  ...STATE_SLUGS.map(s => `https://www.privatepaycheck.com/minimum-wage/${s}`),
  ...STATE_SLUGS.map(s => `https://www.privatepaycheck.com/overtime-calculator/${s}`),
  ...STATE_SLUGS.map(s => `https://www.privatepaycheck.com/bonus-tax-calculator/${s}`),
  ...STATE_SLUGS.map(s => `https://www.privatepaycheck.com/hourly-paycheck-calculator/${s}`),
  ...UNEMPLOYMENT_SLUGS.map(s => `https://www.privatepaycheck.com/unemployment-calculator/${s}`),
  'https://www.privatepaycheck.com/unemployment-calculator',
  'https://www.privatepaycheck.com/housekeeper-tax-guide',
  'https://www.privatepaycheck.com/nanny-tax-guide',
  'https://www.privatepaycheck.com/all-states',
  'https://www.privatepaycheck.com/bonus-tax-calculator',
];

const payload = {
  host: 'www.privatepaycheck.com',
  key: 'b2c3d4e5f6789012345678901234ab12',
  keyLocation: 'https://www.privatepaycheck.com/b2c3d4e5f6789012345678901234ab12.txt',
  urlList: urls,
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

console.log('HTTP статус:', res.status);
console.log('Відповідь:', await res.text());
console.log('Кількість URL:', urls.length);
