import fs from 'fs';

const path = 'src/app/unemployment-calculator/[state]/UnemploymentCalculatorState.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const importIdx = lines.findIndex(l => l.trim() === "import { useState } from 'react';");
if (importIdx === -1) {
  console.error('IMPORT LINE NOT FOUND');
  process.exit(1);
}
lines.splice(importIdx + 1, 0, "import StatHighlightCards from '../../../components/StatHighlightCards';");

const anchorIdx = lines.findIndex(l => l.includes("background: '#1a2550'") && l.includes("border: '1px solid #2a3a6a'"));
if (anchorIdx === -1) {
  console.error('ANCHOR LINE NOT FOUND');
  process.exit(1);
}

const cardBlock = [
  '',
  '      <StatHighlightCards',
  '        stats={[',
  "          { label: 'Max weekly benefit', value: '$' + maxWeekly, sublabel: 'per week' },",
  "          { label: 'Max duration', value: String(maxWeeks), sublabel: 'weeks' },",
  "          { label: 'Benefit rate', value: rate + '%', sublabel: 'of avg wage' },",
  "          { label: 'State tax on UI', value: stateIncomeTax > 0 ? stateIncomeTax + '%' : 'None' },",
  '        ]}',
  '      />',
];

lines.splice(anchorIdx, 0, ...cardBlock);

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('OK: patched successfully, inserted at line', anchorIdx);
