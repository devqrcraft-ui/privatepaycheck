const urls = [
  'https://www.privatepaycheck.com/arizona-paycheck-calculator',
  'https://www.privatepaycheck.com/colorado-paycheck-calculator',
  'https://www.privatepaycheck.com/texas-paycheck-calculator',
  'https://www.privatepaycheck.com/california-paycheck-calculator',
  'https://www.privatepaycheck.com/methodology',
  'https://www.privatepaycheck.com/1099-paycheck-calculator',
  'https://www.privatepaycheck.com/federal-paycheck-calculator',
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
console.log('Кількість URL:', urls.length);
