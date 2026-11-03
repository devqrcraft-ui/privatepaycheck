'use client';

import { useState } from 'react';

const IRS_2026_DUE_DATES = [
  { date: '2026-04-15', quarter: 'Q1' },
  { date: '2026-06-15', quarter: 'Q2' },
  { date: '2026-09-15', quarter: 'Q3' },
  { date: '2027-01-15', quarter: 'Q4' },
];

function toIcsDate(date: string): string {
  return date.replaceAll('-', '');
}

function escapeIcsText(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll(',', '\\,').replaceAll(';', '\\;').replaceAll('\n', '\\n');
}

export default function EstimatedTaxCalendar() {
  const [status, setStatus] = useState('');

  function downloadUpcomingDates() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcoming = IRS_2026_DUE_DATES.filter(({ date }) => {
      const dueDate = new Date(`${date}T00:00:00`);
      return dueDate >= today;
    });

    if (upcoming.length === 0) {
      setStatus('No future 2026 estimated-tax deadlines remain. Check the IRS for current deadlines.');
      return;
    }

    const events = upcoming.map(({ date, quarter }) => {
      const dueDate = new Date(`${date}T00:00:00`);
      dueDate.setDate(dueDate.getDate() + 1);
      const nextDate = `${dueDate.getFullYear()}-${String(dueDate.getMonth() + 1).padStart(2, '0')}-${String(dueDate.getDate()).padStart(2, '0')}`;
      const title = `2026 estimated tax payment due (${quarter})`;
      const description = 'Standard federal estimated-tax deadline. No payment amount is included. Check IRS Form 1040-ES for exceptions and payment options.';
      return [
        'BEGIN:VEVENT',
        `UID:privatepaycheck-2026-${quarter.toLowerCase()}@privatepaycheck.com`,
        `DTSTAMP:${new Date().toISOString().replaceAll(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
        `DTSTART;VALUE=DATE:${toIcsDate(date)}`,
        `DTEND;VALUE=DATE:${toIcsDate(nextDate)}`,
        `SUMMARY:${escapeIcsText(title)}`,
        `DESCRIPTION:${escapeIcsText(description)}`,
        'URL:https://www.irs.gov/pub/irs-prior/f1040es--2026.pdf',
        'END:VEVENT',
      ].join('\r\n');
    });
    const content = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PrivatePaycheck//Estimated Tax Dates//EN', ...events, 'END:VCALENDAR'].join('\r\n');
    const file = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'privatepaycheck-2026-estimated-tax-dates.ics';
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Calendar downloaded with upcoming 2026 federal dates only; no estimate amount or income is included.');
  }

  return (
    <div style={{ marginTop: 16, padding: '14px 16px', background: 'rgba(245,200,66,0.06)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: 10 }}>
      <button
        type="button"
        onClick={downloadUpcomingDates}
        style={{ minHeight: 42, padding: '10px 14px', borderRadius: 8, border: 'none', background: '#F5C842', color: '#0a1628', fontWeight: 800, cursor: 'pointer' }}
      >
        Add upcoming tax dates to calendar
      </button>
      <p aria-live="polite" style={{ margin: '8px 0', color: '#a5b4fc', fontSize: 12 }}>{status}</p>
      <p style={{ margin: 0, color: '#8aa4be', fontSize: 12 }}>
        Standard federal dates; state deadlines and exceptions can differ.{' '}
        <a href="https://www.irs.gov/pub/irs-prior/f1040es--2026.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#F5C842' }}>
          Verify with IRS Form 1040-ES
        </a>.
      </p>
    </div>
  );
}
