'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface CalculatorRelatedLink {
  href: string;
  label: string;
}

interface Props {
  summary: string | (() => string | null);
  relatedLinks: CalculatorRelatedLink[];
}

async function copyText(text: string): Promise<void> {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    try {
      textarea.select();
      if (!document.execCommand('copy')) throw new Error('Clipboard copy was rejected');
    } finally {
      textarea.remove();
    }
  }
}

export default function CalculatorResultActions({ summary, relatedLinks }: Props) {
  const [status, setStatus] = useState('');

  function getSummary(): string | null {
    const text = typeof summary === 'function' ? summary() : summary;
    return text?.trim() || null;
  }

  async function copyResult() {
    const text = getSummary();
    if (!text) {
      setStatus('Calculate an estimate before copying the result.');
      return;
    }

    try {
      await copyText(text);
      setStatus('Result copied.');
    } catch {
      setStatus('Could not copy the result. Check clipboard permissions and try again.');
    }
  }

  async function shareResult() {
    const text = getSummary();
    if (!text) {
      setStatus('Calculate an estimate before sharing the result.');
      return;
    }

    const url = `${window.location.origin}${window.location.pathname}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, text, url });
        setStatus('Share opened.');
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          setStatus('Sharing canceled.');
          return;
        }
      }
    }

    try {
      await copyText(`${text}\n${url}`);
      setStatus('Sharing is unavailable; result and clean page link copied.');
    } catch {
      setStatus('Could not share or copy the result. Check browser permissions and try again.');
    }
  }

  const buttonStyle: React.CSSProperties = {
    minHeight: 42,
    padding: '9px 14px',
    borderRadius: 8,
    border: '1px solid rgba(245,200,66,0.42)',
    background: 'rgba(245,200,66,0.1)',
    color: '#F5C842',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
  };

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button type="button" onClick={copyResult} style={buttonStyle}>Copy result</button>
        <button type="button" onClick={shareResult} style={buttonStyle}>Share result</button>
        {relatedLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              ...buttonStyle,
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              borderColor: 'rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.06)',
              color: '#e8edf8',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p aria-live="polite" style={{ minHeight: 18, margin: '7px 0 0', color: '#94a3b8', fontSize: 12 }}>
        {status}
      </p>
    </div>
  );
}
