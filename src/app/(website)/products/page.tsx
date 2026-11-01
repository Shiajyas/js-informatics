import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { productsData } from "@/data/productsData";
import { siteConfig } from "@/config/site";
import { ProductsFilterView } from "@/components/products/ProductsFilterView";

export const metadata: Metadata = {
  title: "Product Catalogue | CCTV Cameras, Networking, Switches & Hardware",
  description:
    "Browse verified surveillance cameras, 4K NVRs, Gigabit PoE switches, Wi-Fi 6 routers, enterprise access points, and computer hardware supplied and installed by JS Informatics in Thrissur, Kerala.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F8FC] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#0B2D5B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#00AEEF]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
            <span>Hardware & Equipment Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Security & Networking Products
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            All equipment is sourced through verified distribution channels, tested for performance in Kerala climate conditions, and professionally installed by our trained technicians in Thrissur.
          </p>
        </div>
      </section>

      {/* Main Filterable Catalogue Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProductsFilterView
            initialProducts={productsData}
            categories={siteConfig.productCategories}
          />
        </div>
      </section>

      {/* Pricing Notice & Custom Hardware Sourcing */}
      <section className="py-12 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F8FC] border border-[#CBD5E1] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-heading font-bold text-[#0B2D5B]">
                Looking for a specific model or bulk requirement?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
                Because technology equipment pricing and availability fluctuate with project volumes, we provide transparent, itemized quotation estimates based on your exact premises layout.
              </p>
            </div>
            <Link
              href="/contact?tab=quotation"
              className="px-6 py-3 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0"
            >
              Request Custom Hardware Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
