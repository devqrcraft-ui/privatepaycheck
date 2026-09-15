import fs from 'fs';

const path = 'src/app/layout.tsx';
let c = fs.readFileSync(path, 'utf8');

const old = "const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'], display: 'swap', variable: '--font-playfair' })";
const matches = c.split(old).length - 1;
if (matches !== 1) {
  console.error('MATCH FAILED, found:', matches);
  process.exit(1);
}
const updated = "const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'], display: 'optional', variable: '--font-playfair' })";
c = c.replace(old, updated);

fs.writeFileSync(path, c, 'utf8');
console.log('OK: font-display changed to optional for Playfair (H1 headline font)');
