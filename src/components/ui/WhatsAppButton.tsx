"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip / Prompt bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-[#1F2937] p-3 rounded-xl shadow-xl border border-[#E2E8F0] text-xs animate-in fade-in slide-in-from-bottom-2 duration-150 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-[#0B2D5B] mb-0.5">Need quick technical help?</div>
          <p className="text-slate-600">
            Chat directly with our CCTV & networking specialists on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl("Hello JS Informatics, I have an enquiry regarding CCTV and IT services in Thrissur.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JS Informatics on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Chat With Us
        </span>
      </a>
    </div>
  );
}
