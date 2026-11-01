"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Network, 
  Wifi, 
  Cpu, 
  TerminalSquare, 
  Building2,
  ArrowRight
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />,
  Network: <Network className="w-5 h-5 text-[#00AEEF]" />,
  Wifi: <Wifi className="w-5 h-5 text-[#00AEEF]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#00AEEF]" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-[#00AEEF]" />,
  Building2: <Building2 className="w-5 h-5 text-[#00AEEF]" />,
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesFlyoutOpen, setServicesFlyoutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesFlyoutOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs transition-all duration-200">
      {/* Top Utility Bar (Navy Blue) */}
      <div className="bg-[#0B2D5B] text-white text-xs py-2 px-4 border-b border-[#0E376E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Thrissur, Kerala</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available Mon – Sat: 9:00 AM – 7:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-200 font-medium">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200",
          scrolled ? "py-3" : "py-4"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="horizontal" />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#00AEEF]",
                pathname === "/" ? "text-[#00AEEF]" : "text-[#1F2937]"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesFlyoutOpen(true)}
              onMouseLeave={() => setServicesFlyoutOpen(false)}
            >
              <Link
                href="/services"
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#00AEEF]",
                  pathname.startsWith("/services") ? "text-[#00AEEF]" : "text-[#1F2937]"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesFlyoutOpen && "rotate-180 text-[#00AEEF]"
                  )}
                />
              </Link>

              {/* Flyout Mega Menu */}
              {servicesFlyoutOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    {siteConfig.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F8FC] transition-colors group"
                      >
                        <div className="p-2 rounded-md bg-[#E6F0FA] shrink-0 group-hover:bg-[#00AEEF]/10">
                          {serviceIcons[service.icon] || <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B2D5B] group-hover:text-[#00AEEF] transition-colors">
                            {service.title}
                          </div>
                          <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <div className="col-span-2 mt-2 pt-2 border-t border-[#E2E8F0] flex justify-between items-center px-2">
                      <span className="text-xs text-[#64748B]">
                        Tailored for Residential & Commercial needs
                      </span>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-[#00AEEF] hover:underline flex items-center gap-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#00AEEF]",
                pathname.startsWith("/products") ? "text-[#00AEEF]" : "text-[#1F2937]"
              )}
            >
              Products
            </Link>

            <Link
              href="/solutions"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#00AEEF]",
                pathname === "/solutions" ? "text-[#00AEEF]" : "text-[#1F2937]"
              )}
            >
              Solutions
            </Link>

            <Link
              href="/about"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#00AEEF]",
                pathname === "/about" ? "text-[#00AEEF]" : "text-[#1F2937]"
              )}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#00AEEF]",
                pathname === "/contact" ? "text-[#00AEEF]" : "text-[#1F2937]"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Action Button: Get a Quote */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact?tab=quotation"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0095ce] transition-all shadow-xs hover:shadow-md transform active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/contact?tab=quotation"
              className="px-3.5 py-1.5 rounded-md text-xs font-bold text-white bg-[#00AEEF]"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B2D5B] hover:text-[#00AEEF] hover:bg-[#F5F8FC] rounded-lg transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-semibold",
                pathname === "/" ? "bg-[#E6F0FA] text-[#0B2D5B]" : "text-[#1F2937]"
              )}
            >
              Home
            </Link>

            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Services
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {siteConfig.services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#1F2937] hover:bg-[#F5F8FC] rounded-md"
                >
                  <span className="p-1 rounded-sm bg-[#E6F0FA]">
                    {serviceIcons[s.icon] || <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />}
                  </span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/products"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-semibold",
                pathname.startsWith("/products") ? "bg-[#E6F0FA] text-[#0B2D5B]" : "text-[#1F2937]"
              )}
            >
              Products Catalogue
            </Link>

            <Link
              href="/solutions"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-semibold",
                pathname === "/solutions" ? "bg-[#E6F0FA] text-[#0B2D5B]" : "text-[#1F2937]"
              )}
            >
              Solutions (Home & Business)
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-semibold",
                pathname === "/about" ? "bg-[#E6F0FA] text-[#0B2D5B]" : "text-[#1F2937]"
              )}
            >
              About JS Informatics
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-semibold",
                pathname === "/contact" ? "bg-[#E6F0FA] text-[#0B2D5B]" : "text-[#1F2937]"
              )}
            >
              Contact & Enquiries
            </Link>

            <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
              <Link
                href="/contact?tab=quotation"
                className="w-full text-center py-2.5 px-4 rounded-lg bg-[#00AEEF] text-white text-sm font-bold shadow-xs"
              >
                Request a Free Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full text-center py-2 px-4 rounded-lg border border-[#0B2D5B] text-[#0B2D5B] text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
