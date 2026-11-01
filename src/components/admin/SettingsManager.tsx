"use client";

import React, { useState } from "react";
import { Save, CheckCircle2, ShieldCheck, Lock, AlertCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

interface SettingItem {
  id: string;
  key: string;
  value: string;
  group: string;
}

export function SettingsManager({ initialSettings }: { initialSettings: SettingItem[] }) {
  const [settings, setSettings] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    initialSettings.forEach((item) => {
      map[item.key] = item.value;
    });
    return map;
  });

  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSuccessMsg("");
    setErrorMsg("");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMsg("");
    setErrorMsg("");

    const payload = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
    }));

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: payload }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg("Website settings successfully saved and applied!");
      } else {
        setErrorMsg(data.error || "Failed to save settings.");
      }
    } catch (err) {
      setErrorMsg("An unexpected connection error occurred.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
      {/* Strict Privacy Compliance Notice */}
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
        <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-xs text-emerald-900 leading-relaxed">
          <p className="font-bold">Security & Privacy Architecture Guarantee:</p>
          <p className="text-[11px] text-emerald-800 mt-0.5">
            JS Informatics operates under strict zero-credential retention standards. This system never stores or requests customer CCTV administrative passwords, Wi-Fi keys, router root logins, or remote-access credentials.
          </p>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* General Company Information */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
        <h3 className="text-base font-heading font-bold text-[#0B2D5B] border-b border-[#F1F5F9] pb-3">
          Company Identity & Branding
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1">Company Name</label>
            <input
              type="text"
              value={settings["company_name"] || "JS Informatics"}
              onChange={(e) => handleChange("company_name", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1">Official Tagline</label>
            <input
              type="text"
              value={settings["company_tagline"] || "Connecting Technology. Protecting What Matters."}
              onChange={(e) => handleChange("company_tagline", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Contact & Location Configuration */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
        <h3 className="text-base font-heading font-bold text-[#0B2D5B] border-b border-[#F1F5F9] pb-3">
          Contact Channels & Thrissur Address
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Direct Phone (Tel Link)</span>
            </label>
            <input
              type="text"
              value={settings["company_phone"] || "+919447000000"}
              onChange={(e) => handleChange("company_phone", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1">Display Phone Number</label>
            <input
              type="text"
              value={settings["company_phone_display"] || "+91 94470 00000"}
              onChange={(e) => handleChange("company_phone_display", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1">
              WhatsApp Number (Country code without +)
            </label>
            <input
              type="text"
              value={settings["company_whatsapp"] || "919447000000"}
              onChange={(e) => handleChange("company_whatsapp", e.target.value)}
              placeholder="e.g. 919447000000"
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              value={settings["company_email"] || "contact@jsinformatics.in"}
              onChange={(e) => handleChange("company_email", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="text-xs space-y-4 pt-2">
          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Physical Business Address</span>
            </label>
            <input
              type="text"
              value={settings["company_address"] || "Main Road, Near Round, Thrissur, Kerala, India - 680001"}
              onChange={(e) => handleChange("company_address", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Business Operating Hours</span>
            </label>
            <input
              type="text"
              value={settings["business_hours"] || "Monday – Saturday: 9:00 AM – 7:00 PM IST"}
              onChange={(e) => handleChange("business_hours", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0B2D5B] mb-1">
              Service Areas (Comma separated)
            </label>
            <textarea
              rows={2}
              value={settings["service_areas"] || "Thrissur Round, East Fort, West Fort, Punkunnam, Ayyanthole, Ollur, Kuriachira, Mannuthy, Amala Nagar, Chalakudy, Guruvayur, Central Kerala"}
              onChange={(e) => handleChange("service_areas", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isSaving}
          className="px-6 py-3 rounded-xl bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-60"
        >
          <Save className="w-4 h-4" />
          <span>{isSaving ? "Saving Settings..." : "Save Website Settings"}</span>
        </button>
      </div>
    </form>
  );
}
