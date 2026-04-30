"use client";
// app/components/TopBar.tsx

import { useState } from "react";

const messages = [
  { icon: "🔒", text: "Your data never leaves your browser — 100% Private" },
  { icon: "⚡", text: "Updated for 2026 — Latest federal & state tax brackets" },
  { icon: "🗺️", text: "All 50 States — Including CA, TX, NY, FL and more" },
  { icon: "✅", text: "Free forever — No account, no signup, no ads tracking you" },
];

export default function TopBar() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  if (!visible) return null;

  return (
    <div className="bg-blue-600 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Left arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + messages.length) % messages.length)}
          className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-500 transition-colors flex-shrink-0"
        >
          ‹
        </button>

        {/* Messages - desktop: show all, mobile: show one */}
        <div className="hidden md:flex items-center justify-center gap-6 flex-1 flex-wrap">
          {messages.map((m, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap">
              <span>{m.icon}</span>
              <span>{m.text}</span>
            </span>
          ))}
        </div>

        {/* Mobile: single rotating message */}
        <div className="flex md:hidden items-center justify-center flex-1 text-center">
          <span className="flex items-center gap-1.5 text-xs font-medium">
            <span>{messages[current].icon}</span>
            <span>{messages[current].text}</span>
          </span>
        </div>

        {/* Right arrows */}
        <button
          onClick={() => setCurrent((c) => (c + 1) % messages.length)}
          className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-500 transition-colors flex-shrink-0"
        >
          ›
        </button>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-500 transition-colors flex-shrink-0 text-blue-200 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
