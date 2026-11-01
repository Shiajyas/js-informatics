"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={cn(
              "border rounded-xl transition-all duration-200 overflow-hidden bg-white",
              isOpen
                ? "border-[#00AEEF] shadow-sm"
                : "border-[#E2E8F0] hover:border-slate-300"
            )}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-sm sm:text-base text-[#0B2D5B]">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-[#00AEEF] shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F5F8FC]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
