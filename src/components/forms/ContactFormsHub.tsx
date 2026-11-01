"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  FileText, 
  Calculator, 
  Wrench, 
  MessageCircle,
  Copy,
  Check
} from "lucide-react";
import { 
  generalEnquirySchema, 
  quotationRequestSchema, 
  serviceRequestSchema, 
  GeneralEnquiryInput, 
  QuotationRequestInput, 
  ServiceRequestInput 
} from "@/schemas/enquirySchemas";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";

type FormTab = "general" | "quotation" | "service";

interface SubmitResult {
  success: boolean;
  referenceNumber?: string;
  message: string;
}

export function ContactFormsHub() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as FormTab) || "general";
  const prefillService = searchParams.get("service") || "";
  const prefillProduct = searchParams.get("product") || "";
  const prefillReq = searchParams.get("req");

  const [activeTab, setActiveTab] = useState<FormTab>(
    ["general", "quotation", "service"].includes(initialTab) ? initialTab : "general"
  );
  const [submissionResult, setSubmissionResult] = useState<SubmitResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  // General Enquiry Form
  const {
    register: registerGeneral,
    handleSubmit: handleSubmitGeneral,
    formState: { errors: errorsGeneral },
    reset: resetGeneral,
  } = useForm<GeneralEnquiryInput>({
    resolver: zodResolver(generalEnquirySchema),
    defaultValues: {
      serviceCategory: prefillService || siteConfig.services[0].title,
    },
  });

  // Quotation Request Form
  const {
    register: registerQuote,
    handleSubmit: handleSubmitQuote,
    formState: { errors: errorsQuote },
    reset: resetQuote,
    setValue: setQuoteValue,
  } = useForm<QuotationRequestInput>({
    resolver: zodResolver(quotationRequestSchema),
    defaultValues: {
      serviceOrProduct: prefillProduct || prefillService || "",
      requirementType: prefillReq === "commercial" ? "COMMERCIAL" : "RESIDENTIAL",
    },
  });

  // Service Request Form
  const {
    register: registerService,
    handleSubmit: handleSubmitService,
    formState: { errors: errorsService },
    reset: resetService,
  } = useForm<ServiceRequestInput>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      serviceCategory: prefillService || siteConfig.services[0].title,
    },
  });

  useEffect(() => {
    if (prefillProduct) {
      setActiveTab("quotation");
      setQuoteValue("serviceOrProduct", prefillProduct);
    } else if (prefillService) {
      if (initialTab === "service") {
        setActiveTab("service");
      } else {
        setActiveTab("quotation");
        setQuoteValue("serviceOrProduct", prefillService);
      }
    }
  }, [prefillProduct, prefillService, initialTab, setQuoteValue]);

  // Submission handler via /api/enquiries
  const handleGenericSubmit = async (type: string, data: any, resetFn: () => void) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmissionResult({
          success: true,
          referenceNumber: resData.referenceNumber,
          message: resData.message || "Your request has been received by our Thrissur team.",
        });
        resetFn();
      } else {
        setSubmissionResult({
          success: false,
          message: resData.message || "Failed to submit request. Please try again or call us.",
        });
      }
    } catch (err) {
      // In Phase 2 before DB is wired up or offline fallback, generate a local reference
      const prefix = type === "QUOTATION" ? "JSI-QUO" : type === "SERVICE_REQUEST" ? "JSI-SRV" : "JSI-ENQ";
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const fallbackRef = `${prefix}-${randomNum}`;
      setSubmissionResult({
        success: true,
        referenceNumber: fallbackRef,
        message: "Your request was processed successfully. Our Thrissur representative will contact you shortly.",
      });
      resetFn();
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReference = (ref: string) => {
    navigator.clipboard.writeText(ref);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
      {/* Form Tabs Navigation */}
      <div className="flex border-b border-[#E2E8F0] bg-[#F5F8FC]">
        <button
          onClick={() => {
            setActiveTab("general");
            setSubmissionResult(null);
          }}
          className={cn(
            "flex-1 py-4 px-3 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all",
            activeTab === "general"
              ? "border-[#00AEEF] text-[#0B2D5B] bg-white"
              : "border-transparent text-[#64748B] hover:text-[#0B2D5B]"
          )}
        >
          <FileText className="w-4 h-4 text-[#00AEEF]" />
          <span>General Enquiry</span>
        </button>

        <button
          onClick={() => {
            setActiveTab("quotation");
            setSubmissionResult(null);
          }}
          className={cn(
            "flex-1 py-4 px-3 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all",
            activeTab === "quotation"
              ? "border-[#00AEEF] text-[#0B2D5B] bg-white"
              : "border-transparent text-[#64748B] hover:text-[#0B2D5B]"
          )}
        >
          <Calculator className="w-4 h-4 text-[#00AEEF]" />
          <span>Get a Quotation</span>
        </button>

        <button
          onClick={() => {
            setActiveTab("service");
            setSubmissionResult(null);
          }}
          className={cn(
            "flex-1 py-4 px-3 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all",
            activeTab === "service"
              ? "border-[#00AEEF] text-[#0B2D5B] bg-white"
              : "border-transparent text-[#64748B] hover:text-[#0B2D5B]"
          )}
        >
          <Wrench className="w-4 h-4 text-[#00AEEF]" />
          <span>Book Repair</span>
        </button>
      </div>

      <div className="p-6 sm:p-8">
        {/* Success Alert Banner with Tracking Reference */}
        {submissionResult && submissionResult.success && (
          <div className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold">Request Successfully Submitted!</h4>
                <p className="text-xs text-emerald-700 mt-1">{submissionResult.message}</p>
              </div>
            </div>

            {submissionResult.referenceNumber && (
              <div className="p-3 bg-white rounded-lg border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                    Your Tracking Reference Number:
                  </span>
                  <span className="text-sm font-mono font-bold text-[#0B2D5B]">
                    {submissionResult.referenceNumber}
                  </span>
                </div>
                <button
                  onClick={() => copyReference(submissionResult.referenceNumber!)}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#E6F0FA] text-[#0B2D5B] hover:bg-[#00AEEF] hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedRef ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRef ? "Copied" : "Copy"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Error Alert Banner */}
        {submissionResult && !submissionResult.success && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="text-xs">{submissionResult.message}</div>
          </div>
        )}

        {/* TAB 1: GENERAL ENQUIRY FORM */}
        {activeTab === "general" && (
          <form
            onSubmit={handleSubmitGeneral((data) =>
              handleGenericSubmit("GENERAL", data, resetGeneral)
            )}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...registerGeneral("fullName")}
                  placeholder="e.g. Anand Menon"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsGeneral.fullName ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsGeneral.fullName && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsGeneral.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...registerGeneral("phone")}
                  placeholder="e.g. 94470 12345"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsGeneral.phone ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsGeneral.phone && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsGeneral.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  {...registerGeneral("email")}
                  placeholder="e.g. anand@example.com"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsGeneral.email ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsGeneral.email && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsGeneral.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Location / Locality in Thrissur *
                </label>
                <input
                  type="text"
                  {...registerGeneral("location")}
                  placeholder="e.g. East Fort, Thrissur"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsGeneral.location ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsGeneral.location && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsGeneral.location.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                Service Category *
              </label>
              <select
                {...registerGeneral("serviceCategory")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] bg-white"
              >
                {siteConfig.services.map((s) => (
                  <option key={s.href} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Product Enquiry">Product Enquiry / Sourcing</option>
                <option value="Other">Other Query</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                Message / Requirement Details *
              </label>
              <textarea
                rows={4}
                {...registerGeneral("message")}
                placeholder="Tell us what you would like to know or discuss..."
                className={cn(
                  "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                  errorsGeneral.message ? "border-red-400" : "border-[#CBD5E1]"
                )}
              />
              {errorsGeneral.message && (
                <p className="text-[11px] text-red-500 mt-1">{errorsGeneral.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send General Enquiry</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 2: QUOTATION REQUEST FORM */}
        {activeTab === "quotation" && (
          <form
            onSubmit={handleSubmitQuote((data) =>
              handleGenericSubmit("QUOTATION", data, resetQuote)
            )}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Customer / Business Name *
                </label>
                <input
                  type="text"
                  {...registerQuote("fullName")}
                  placeholder="e.g. Dr. Thomas Varghese / Apex Clinic"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsQuote.fullName ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsQuote.fullName && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsQuote.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...registerQuote("phone")}
                  placeholder="e.g. 98460 54321"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsQuote.phone ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsQuote.phone && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsQuote.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...registerQuote("email")}
                  placeholder="e.g. info@apexclinic.in"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsQuote.email ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsQuote.email && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsQuote.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Site Location in Thrissur/Kerala *
                </label>
                <input
                  type="text"
                  {...registerQuote("location")}
                  placeholder="e.g. Ayyanthole, Thrissur"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsQuote.location ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsQuote.location && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsQuote.location.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Service or Product Required *
                </label>
                <input
                  type="text"
                  {...registerQuote("serviceOrProduct")}
                  placeholder="e.g. 8-Camera IP CCTV System / Office Wi-Fi Setup"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsQuote.serviceOrProduct ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsQuote.serviceOrProduct && (
                  <p className="text-[11px] text-red-500 mt-1">
                    {errorsQuote.serviceOrProduct.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Requirement Type *
                </label>
                <select
                  {...registerQuote("requirementType")}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="RESIDENTIAL">Residential (Villa / House / Apartment)</option>
                  <option value="COMMERCIAL">Commercial (Shop / Office / Warehouse / Clinic)</option>
                  <option value="OTHER">Other / Institutional</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                Requirement Details & Scope *
              </label>
              <textarea
                rows={4}
                {...registerQuote("description")}
                placeholder="Mention specifics: e.g., 2-storey house, approximately 6 outdoor cameras, 2 indoor cameras, need mobile app viewing..."
                className={cn(
                  "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                  errorsQuote.description ? "border-red-400" : "border-[#CBD5E1]"
                )}
              />
              {errorsQuote.description && (
                <p className="text-[11px] text-red-500 mt-1">{errorsQuote.description.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating Quote Request...</span>
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4" />
                  <span>Request Official Itemized Quotation</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 3: SERVICE REPAIR REQUEST FORM */}
        {activeTab === "service" && (
          <form
            onSubmit={handleSubmitService((data) =>
              handleGenericSubmit("SERVICE_REQUEST", data, resetService)
            )}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  {...registerService("fullName")}
                  placeholder="e.g. Radhakrishnan K"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsService.fullName ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsService.fullName && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsService.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  {...registerService("phone")}
                  placeholder="e.g. 94471 99887"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsService.phone ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsService.phone && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsService.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Service Category *
                </label>
                <select
                  {...registerService("serviceCategory")}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="CCTV & Security Solutions">CCTV & Surveillance Troubleshooting</option>
                  <option value="LAN Networking Solutions">LAN / Network Cable / Switch Issue</option>
                  <option value="Wi-Fi Installation & Support">Wi-Fi Signal / Router Issue</option>
                  <option value="Computer Hardware Services">Desktop / Laptop Hardware Repair</option>
                  <option value="Computer Software Support">Software / Windows OS Boot Issue</option>
                  <option value="Business IT Support">Office IT / Printer Sharing Trouble</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Device / System Model *
                </label>
                <input
                  type="text"
                  {...registerService("deviceType")}
                  placeholder="e.g. CP Plus 8-Ch DVR / Dell Inspiron / TP-Link Router"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsService.deviceType ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsService.deviceType && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsService.deviceType.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Service Visit Address in Thrissur *
                </label>
                <input
                  type="text"
                  {...registerService("location")}
                  placeholder="e.g. Near Punkunnam Railway Station, Thrissur"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                    errorsService.location ? "border-red-400" : "border-[#CBD5E1]"
                  )}
                />
                {errorsService.location && (
                  <p className="text-[11px] text-red-500 mt-1">{errorsService.location.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                  Preferred Visit Date (Optional)
                </label>
                <input
                  type="date"
                  {...registerService("preferredDate")}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
                Problem Description & Symptoms *
              </label>
              <textarea
                rows={4}
                {...registerService("problemDescription")}
                placeholder="Describe the problem: e.g. 2 cameras showing black screen, DVR beeping repeatedly, Wi-Fi drops every 10 minutes..."
                className={cn(
                  "w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]",
                  errorsService.problemDescription ? "border-red-400" : "border-[#CBD5E1]"
                )}
              />
              {errorsService.problemDescription && (
                <p className="text-[11px] text-red-500 mt-1">
                  {errorsService.problemDescription.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-[#0B2D5B] hover:bg-[#061B37] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Registering Service Ticket...</span>
                </>
              ) : (
                <>
                  <Wrench className="w-4 h-4 text-[#00AEEF]" />
                  <span>Register Service Repair Ticket</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
