import fs from 'fs';

const path = 'src/app/bonus-tax-calculator/[state]/BonusTaxCalculatorState.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const anchorIdx = lines.findIndex(l => l.includes('Compare bonus taxes across all 50 states'));
if (anchorIdx === -1) {
  console.error('ANCHOR NOT FOUND');
  process.exit(1);
}
// go back one line to find the opening <Link ...> tag line to insert BEFORE it
const linkOpenIdx = anchorIdx - 1;
if (!lines[linkOpenIdx].includes('<Link href="/bonus-tax-calculator"')) {
  console.error('LINK OPEN LINE NOT FOUND AS EXPECTED, got:', lines[linkOpenIdx]);
  process.exit(1);
}

const tableBlock = [
  '          <h2 style={{ fontSize: \'20px\', fontWeight: 800, margin: \'28px 0 14px\' }}>' + '{stateName} Bonus Tax by Amount (2026)</h2>',
  '          <div style={{ overflowX: \'auto\', marginBottom: \'24px\' }}>',
  '          <table style={{ width: \'100%\', borderCollapse: \'collapse\', minWidth: 480, fontSize: 14 }}>',
  '            <thead><tr style={{ background: \'rgba(245,200,66,0.08)\' }}>',
  '              <th style={{ padding: \'10px 12px\', textAlign: \'left\', color: \'rgba(255,255,255,0.7)\' }}>Bonus</th>',
  '              <th style={{ padding: \'10px 12px\', textAlign: \'left\', color: \'rgba(255,255,255,0.7)\' }}>Federal (aggregate)</th>',
  '              <th style={{ padding: \'10px 12px\', textAlign: \'left\', color: \'rgba(255,255,255,0.7)\' }}>{stateName} State Tax</th>',
  '              <th style={{ padding: \'10px 12px\', textAlign: \'left\', color: \'rgba(255,255,255,0.7)\' }}>FICA</th>',
  '              <th style={{ padding: \'10px 12px\', textAlign: \'left\', color: \'#F5C842\', fontWeight: 700 }}>Take-Home</th>',
  '            </tr></thead>',
  '            <tbody>',
  '              {[5000, 10000, 25000, 50000, 100000].map((amt) => {',
  '                const exSalary = 75000;',
  '                const exFed = federalTax(exSalary + amt, \'single\') - federalTax(exSalary, \'single\');',
  '                const exState = amt * (stateTax / 100);',
  '                const exFica = Math.min(amt, Math.max(0, 184500 - exSalary)) * 0.062 + amt * 0.0145;',
  '                const exTakeHome = amt - exFed - exState - exFica;',
  '                return (',
  '                  <tr key={amt} style={{ borderBottom: \'1px solid rgba(255,255,255,0.07)\' }}>',
  '                    <td style={{ padding: \'10px 12px\', fontWeight: 600 }}>${amt.toLocaleString()}</td>',
  '                    <td style={{ padding: \'10px 12px\', color: \'rgba(255,255,255,0.65)\' }}>${Math.round(exFed).toLocaleString()}</td>',
  '                    <td style={{ padding: \'10px 12px\', color: \'rgba(255,255,255,0.65)\' }}>{noStateTax ? \'$0\' : \'$\' + Math.round(exState).toLocaleString()}</td>',
  '                    <td style={{ padding: \'10px 12px\', color: \'rgba(255,255,255,0.65)\' }}>${Math.round(exFica).toLocaleString()}</td>',
  '                    <td style={{ padding: \'10px 12px\', fontWeight: 700, color: \'#F5C842\' }}>${Math.round(exTakeHome).toLocaleString()}</td>',
  '                  </tr>',
  '                );',
  '              })}',
  '            </tbody>',
  '          </table>',
  '          </div>',
  '          <p style={{ fontSize: 12, color: \'rgba(255,255,255,0.4)\', marginBottom: 24 }}>Example assumes a $75,000 base salary, single filer. Your actual withholding depends on your specific salary and filing status — use the calculator above for an exact figure.</p>',
];

lines.splice(linkOpenIdx, 0, ...tableBlock);

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('OK: table inserted at line', linkOpenIdx);
