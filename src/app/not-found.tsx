import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F8FC] flex flex-col justify-center items-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-[#E2E8F0] shadow-xl space-y-6">
        <div className="flex justify-center">
          <Logo variant="horizontal" withTagline={false} />
        </div>

        <div className="space-y-2">
          <span className="text-5xl sm:text-6xl font-heading font-extrabold text-[#00AEEF] block">
            404
          </span>
          <h1 className="text-xl font-heading font-bold text-[#0B2D5B]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full py-2.5 px-4 rounded-xl bg-[#E6F0FA] hover:bg-[#0B2D5B] text-[#0B2D5B] hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Browse Services Catalogue</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B]">
          <span>Need immediate assistance? Call </span>
          <a href={`tel:${siteConfig.phone}`} className="font-bold text-[#0B2D5B] hover:text-[#00AEEF]">
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
