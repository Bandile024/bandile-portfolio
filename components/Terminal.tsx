"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "whoami", output: "bandile_ngwenya" },
  { prompt: "role --current", output: "Data Analytics & AI Engineer Intern" },
  { prompt: "stack --primary", output: "Python · SQL · Next.js · TypeScript" },
  { prompt: "status", output: "open_to: internships, freelance, collabs" },
];

// The site's signature element: a small "terminal" that types itself
// out on load. It stands in for the hero image — appropriate for a data
// + AI + dev profile, where the command line is genuinely part of the
// day-to-day toolkit rather than a decorative flourish.
export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState<boolean[]>([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;

    const current = LINES[lineIndex].prompt;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    }

    const revealTimeout = setTimeout(() => {
      setShowOutput((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
      const nextLineTimeout = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 350);
      return () => clearTimeout(nextLineTimeout);
    }, 200);

    return () => clearTimeout(revealTimeout);
  }, [charIndex, lineIndex]);

  return (
    <div className="card w-full max-w-md overflow-hidden !p-0 font-mono text-sm shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-muted">bandile@portfolio: ~</span>
      </div>
      <div className="min-h-[220px] space-y-3 p-5">
        {LINES.map((line, i) => {
          if (i > lineIndex) return null;
          const isTyping = i === lineIndex;
          const text = isTyping ? line.prompt.slice(0, charIndex) : line.prompt;
          return (
            <div key={line.prompt}>
              <p className="text-accent">
                <span className="text-muted">$ </span>
                {text}
                {isTyping && charIndex < line.prompt.length && (
                  <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-accent align-middle" />
                )}
              </p>
              {showOutput[i] && (
                <p className="pl-3 text-ink/90">{line.output}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
