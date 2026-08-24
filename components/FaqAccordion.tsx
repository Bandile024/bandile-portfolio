"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";

// Client component: it needs local state (which item is open) that
// lives entirely in the browser, so it can't be a server component.
export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-surface">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display font-semibold text-ink">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-accent transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-muted">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
