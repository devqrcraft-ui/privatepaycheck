import fs from 'fs';

let content = fs.readFileSync('src/app/sitemap.ts', 'utf8');

const anchor1re = /\];\r?\n\r?\nconst BLOG_SLUGS/;
const newArray = `];

const UNEMPLOYMENT_SLUGS = [
  'alabama','california','florida','illinois','louisiana','maine','massachusetts',
  'montana','new-hampshire','new-jersey','new-mexico','ohio','pennsylvania',
  'texas','washington','west-virginia',
];

const BLOG_SLUGS`;

const m1 = content.match(new RegExp(anchor1re, 'g'));
if (!m1 || m1.length !== 1) { throw new Error(`anchor1 знайдено ${m1 ? m1.length : 0} разів`); }
content = content.replace(anchor1re, newArray);

const anchor2re = /( {4})\.\.\.BLOG_SLUGS\.map\(slug => \(\{\r?\n\s*url: `\$\{BASE_URL\}\/blog\/\$\{slug\}`,/;
const newBlock = `$1{ url: \`\${BASE_URL}/unemployment-calculator\`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },

$1...UNEMPLOYMENT_SLUGS.map(slug => ({
      url: \`\${BASE_URL}/unemployment-calculator/\${slug}\`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

$1...BLOG_SLUGS.map(slug => ({
      url: \`\${BASE_URL}/blog/\${slug}\`,`;

const m2 = content.match(new RegExp(anchor2re, 'g'));
if (!m2 || m2.length !== 1) { throw new Error(`anchor2 знайдено ${m2 ? m2.length : 0} разів`); }
content = content.replace(anchor2re, newBlock);

fs.writeFileSync('src/app/sitemap.ts', content);
console.log('Готово, обидва патчі застосовано');
