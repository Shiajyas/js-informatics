"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, Filter, ShieldCheck, Tag } from "lucide-react";
import { ProductItem } from "@/data/productsData";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ProductsFilterViewProps {
  initialProducts: ProductItem[];
  categories: { title: string; slug: string }[];
}

export function ProductsFilterView({
  initialProducts,
  categories,
}: ProductsFilterViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products or brands..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
          />
        </div>

        {/* Category Pills (Horizontal Scrolling on mobile) */}
        <div className="w-full md:w-auto overflow-x-auto pb-1 flex items-center gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors",
              selectedCategory === "all"
                ? "bg-[#0B2D5B] text-white shadow-xs"
                : "bg-[#F5F8FC] text-[#64748B] hover:bg-[#E2E8F0]"
            )}
          >
            All Categories ({initialProducts.length})
          </button>
          {categories.map((cat) => {
            const count = initialProducts.filter((p) => p.categorySlug === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors",
                  selectedCategory === cat.slug
                    ? "bg-[#00AEEF] text-white shadow-xs"
                    : "bg-[#F5F8FC] text-[#64748B] hover:bg-[#E2E8F0]"
                )}
              >
                {cat.title} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-[#64748B]">
        <span>
          Showing <strong className="text-[#0B2D5B]">{filteredProducts.length}</strong> items
          {selectedCategory !== "all" && ` in ${categories.find(c => c.slug === selectedCategory)?.title}`}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-[#00AEEF] hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0] space-y-3">
          <p className="text-base font-bold text-[#0B2D5B]">No matching products found</p>
          <p className="text-xs text-[#64748B] max-w-sm mx-auto">
            Try adjusting your search keywords or select another product category. We source and install all standard surveillance & networking hardware on request.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-lg bg-[#00AEEF] text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#00AEEF]"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-4/3 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/95 text-[10px] font-bold text-[#0B2D5B] shadow-xs">
                    {product.categoryName}
                  </div>
                  {product.availability === "IN_STOCK" && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold shadow-xs">
                      Available
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[11px] font-semibold text-[#00AEEF] flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>{product.brand}</span>
                  </div>

                  <h3 className="text-sm font-heading font-bold text-[#0B2D5B] mt-1 group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#64748B] mt-2 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              {/* Footer / CTA */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <div className="text-xs font-bold text-[#0B2D5B]">
                    {product.priceDisplay}
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00AEEF] group-hover:underline"
                  >
                    <span>View Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
