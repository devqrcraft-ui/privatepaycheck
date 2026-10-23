// Build gate for src/lib/stateTax.ts. Runs from "prebuild" and by hand: node scripts/verify-state-tax.mjs
// 1) reference values (regression lock + hand-checked points)  2) invariants for all 41 states
// 3) data freshness (STATE_TAX_VERIFIED_ON)  4) report on hard-coded federal constants (warning only)
// Emergency bypass of the staleness failure: ALLOW_STALE_TAX=1
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const root = process.cwd();
const WARN_DAYS = 120;
const FAIL_DAYS = 300;
const fails = [];
const warns = [];

// --- compile the two TS files to a temp dir (works on any Node version, no flags) ---
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'stx-'));
function compile(name) {
  const src = fs.readFileSync(path.join(root, 'src', 'lib', name + '.ts'), 'utf8');
  let out = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  out = out.replace(/from\s+['"]\.\/taxRates2026['"]/g, "from './taxRates2026.mjs'");
  fs.writeFileSync(path.join(tmp, name + '.mjs'), out);
}
compile('taxRates2026');
compile('stateTax');
const mod = await import(pathToFileURL(path.join(tmp, 'stateTax.mjs')).href);
const { stateIncomeTax, statePayrollTax, STATE_TAX_VERIFIED_ON } = mod;

// --- 1) reference values: [code, wages, filing, expected, tolerance] ---
const REF = [
  ['ga', 60000, 'single', 2245.5, 0.01],   // 4.99% on (60000 - 15000), HB 463
  ['ga', 60000, 'married', 1497.0, 0.01],  // 4.99% on (60000 - 30000)
  ['ut', 60000, 'single', 2247.231, 0.01], // 4.45% minus phased-out credit, SB 60
  ['wv', 60000, 'single', 1866.1, 0.01],   // tax.wv.gov 2026 table, taxable 58000
  ['ar', 60000, 'single', 1732.41, 0.01],  // SB 1 brackets, 3.7% top
  ['ar', 100000, 'single', 3489.71, 0.01], // high-income table + bracket adjustment
  ['ar', 130000, 'single', 4609.71, 0.01],
  ['ca', 42006, 'single', 662.93, 0.5],    // FTB tax table gives 663
  ['pa', 60000, 'single', 1842.0, 0.01],
  ['il', 60000, 'single', 2825.2125, 0.01],
  ['co', 60000, 'single', 1931.6, 0.01],
  ['in', 60000, 'single', 1740.5, 0.01],
  ['mi', 60000, 'single', 2299.25, 0.01],
  ['nc', 60000, 'single', 1885.275, 0.01],
  ['ky', 60000, 'single', 1982.4, 0.01],
  ['tx', 60000, 'single', 0, 0],
  ['fl', 60000, 'single', 0, 0],
  ['wa', 60000, 'single', 0, 0],
];
for (const [c, w, f, exp, tol] of REF) {
  const got = stateIncomeTax(c, w, f);
  if (!(Math.abs(got - exp) <= tol)) fails.push(`REF ${c} ${f} ${w}: got ${got}, expected ${exp}`);
}
const PAYROLL = [['ca', 100000, 1300], ['wa', 100000, 580], ['ma', 200000, 848.7], ['ny', 100000, 31.2], ['ny', 1000, 5], ['tx', 100000, 0]];
for (const [c, w, exp] of PAYROLL) {
  const got = statePayrollTax(c, w);
  if (!(Math.abs(got - exp) <= 0.01)) fails.push(`PAYROLL ${c} ${w}: got ${got}, expected ${exp}`);
}

// --- 2) invariants: finite, non-negative, non-decreasing on a 250-dollar grid ---
const CODES = 'al ar ca co ct dc de ga hi ia id il in ks ky la ma md me mi mn mo ms mt nc nd ne nj nm ny oh ok or pa ri sc ut va vt wi wv'.split(' ');
for (const c of CODES) {
  for (const f of ['single', 'married']) {
    let prev = stateIncomeTax(c, 0, f);
    for (let w = 250; w <= 1200000; w += 250) {
      const t = stateIncomeTax(c, w, f);
      if (!Number.isFinite(t) || t < 0) { fails.push(`INVARIANT ${c} ${f} ${w}: ${t}`); break; }
      if (t < prev - 0.01) { fails.push(`DECREASE ${c} ${f} ${w}: ${prev} -> ${t}`); break; }
      prev = t;
    }
  }
}

// --- 3) freshness ---
if (typeof STATE_TAX_VERIFIED_ON !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(STATE_TAX_VERIFIED_ON)) {
  fails.push('STATE_TAX_VERIFIED_ON missing or not YYYY-MM-DD');
} else {
  const age = Math.floor((Date.now() - Date.parse(STATE_TAX_VERIFIED_ON + 'T00:00:00Z')) / 86400000);
  if (age > FAIL_DAYS) {
    const msg = `State tax data last verified ${STATE_TAX_VERIFIED_ON} (${age} days ago, limit ${FAIL_DAYS}). Re-verify every state against official sources, then update STATE_TAX_VERIFIED_ON.`;
    if (process.env.ALLOW_STALE_TAX === '1') warns.push('BYPASSED: ' + msg); else fails.push(msg);
  } else if (age > WARN_DAYS) {
    warns.push(`State tax data verified ${age} days ago (${STATE_TAX_VERIFIED_ON}); re-verify soon (mid-year laws, January indexing).`);
  }
}

// --- 4) report: files with hard-coded federal constants (warning only) ---
function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (!e.name.includes('.bak')) out.push(p);
  }
  return out;
}
let literalFiles = 0;
try {
  for (const f of walk(path.join(root, 'src'), [])) {
    if (/16,?100|12,?400|184,?500/.test(fs.readFileSync(f, 'utf8'))) literalFiles++;
  }
  const basePath = path.join(root, 'scripts', 'literal-baseline.json');
  if (fs.existsSync(basePath)) {
    const base = JSON.parse(fs.readFileSync(basePath, 'utf8')).count;
    if (literalFiles > base) warns.push(`Hard-coded federal constants now in ${literalFiles} files (baseline ${base}). Use shared constants instead of new literals.`);
    else console.log(`literals: ${literalFiles} files (baseline ${base})`);
  } else {
    console.log(`literals: ${literalFiles} files (no baseline file; create scripts/literal-baseline.json)`);
  }
} catch (e) {
  warns.push('literal scan skipped: ' + e.message);
}

fs.rmSync(tmp, { recursive: true, force: true });
for (const w of warns) console.warn('WARN  ' + w);
if (fails.length) {
  for (const f of fails) console.error('FAIL  ' + f);
  console.error(`verify-state-tax: ${fails.length} failure(s)`);
  process.exit(1);
}
console.log(`verify-state-tax: OK (${REF.length} reference values, ${PAYROLL.length} payroll values, ${CODES.length} states x 2 filings, verified ${STATE_TAX_VERIFIED_ON})`);
