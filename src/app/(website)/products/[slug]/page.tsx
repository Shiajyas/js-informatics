import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  Tag, 
  CheckCircle2, 
  Layers, 
  Share2,
  FileQuestion
} from "lucide-react";
import { productsData, ProductItem } from "@/data/productsData";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ProductJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.seoTitle || `${product.name} | JS Informatics Thrissur`,
    description: product.seoDescription || product.shortDescription,
    keywords: [
      product.name,
      product.brand,
      product.categoryName,
      `${product.categoryName} Thrissur`,
      "JS Informatics hardware",
    ],
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `https://jsinformatics.in/products/${product.slug}`,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappMsg = `Hello JS Informatics, I am interested in "${product.name}" (Model/Ref: ${product.slug}). Please provide pricing, stock availability, and installation details for Thrissur.`;

  return (
    <div className="flex flex-col w-full bg-[#F5F8FC] min-h-screen">
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Products", url: `${siteConfig.url}/products` },
          { name: product.name, url: `${siteConfig.url}/products/${product.slug}` },
        ]}
      />
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E8F0] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[#00AEEF] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-[#00AEEF] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-[#0B2D5B] truncate">{product.name}</span>
        </div>
      </nav>

      {/* Product Hero & Info */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F8FAFC] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#E2E8F0] relative">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-[#CBD5E1] bg-white shadow-xs">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F0FA] text-xs font-semibold text-[#0B2D5B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Verified Original Equipment</span>
                </span>
              </div>
            </div>

            {/* Right Information & CTAs */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#0E376E] text-white text-[11px] font-bold">
                    {product.categoryName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[#64748B] text-[11px] font-medium flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#00AEEF]" />
                    <span>{product.brand}</span>
                  </span>
                  {product.availability === "IN_STOCK" && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      Available for Thrissur Deployment
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold block">
                      Price / Estimate
                    </span>
                    <span className="text-base sm:text-lg font-heading font-extrabold text-[#0B2D5B]">
                      {product.priceDisplay}
                    </span>
                  </div>
                  <span className="text-xs text-[#64748B] text-right">
                    Includes installation option <br /> & on-site configuration
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-[#F1F5F9]">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/contact?tab=quotation&product=${encodeURIComponent(product.name)}`}
                    className="flex-1 min-w-[200px] text-center px-6 py-3.5 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request a Quote with Installation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] text-center px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct Enquiry</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs text-[#64748B] pt-2">
                  <span>Questions? Call our Thrissur office:</span>
                  <a href={`tel:${siteConfig.phone}`} className="font-bold text-[#0B2D5B] hover:text-[#00AEEF]">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="mt-10 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-heading font-bold text-[#0B2D5B] mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#00AEEF]" />
              <span>Technical Specifications</span>
            </h2>

            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {Object.entries(product.specifications).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="py-3.5 px-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm hover:bg-[#F5F8FC] transition-colors"
                >
                  <span className="font-semibold text-[#0B2D5B]">{key}</span>
                  <span className="sm:col-span-2 text-[#64748B]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
