"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, XCircle, Edit2, Save, Wrench, AlertCircle, X } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  isPublished: boolean;
}

export function ServicesManager({ initialServices }: { initialServices: ServiceItem[] }) {
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const togglePublish = async (service: ServiceItem) => {
    setIsUpdating(true);
    const newStatus = !service.isPublished;
    try {
      const res = await fetch("/api/admin/services", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: service.id, isPublished: newStatus }),
      });
      if (res.ok) {
        setServices((prev) =>
          prev.map((s) => (s.id === service.id ? { ...s, isPublished: newStatus } : s))
        );
      }
    } catch (err) {
      alert("Failed to toggle publish status.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    setIsUpdating(true);

    try {
      const res = await fetch("/api/admin/services", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingService.id,
          tagline: editingService.tagline,
          shortDescription: editingService.shortDescription,
        }),
      });
      if (res.ok) {
        setServices((prev) =>
          prev.map((s) => (s.id === editingService.id ? editingService : s))
        );
        setEditingService(null);
      }
    } catch (err) {
      alert("Failed to save changes.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F5F8FC] text-[#64748B] uppercase text-[10px] font-bold tracking-wider border-b border-[#E2E8F0]">
              <tr>
                <th className="py-3 px-5">Image</th>
                <th className="py-3 px-5">Service Title</th>
                <th className="py-3 px-5">Slug</th>
                <th className="py-3 px-5">Tagline</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9] text-[#1F2937]">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-[#F5F8FC]/50 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="w-12 h-9 rounded-lg overflow-hidden relative bg-slate-100 border border-slate-200">
                      <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-[#0B2D5B]">
                    {service.title}
                  </td>
                  <td className="py-3.5 px-5 font-mono text-slate-500">
                    /services/{service.slug}
                  </td>
                  <td className="py-3.5 px-5 text-slate-600 max-w-sm truncate italic">
                    &ldquo;{service.tagline}&rdquo;
                  </td>
                  <td className="py-3.5 px-5">
                    <button
                      onClick={() => togglePublish(service)}
                      disabled={isUpdating}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                        service.isPublished
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {service.isPublished ? "Published" : "Draft / Hidden"}
                    </button>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => setEditingService(service)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="Edit Service Details"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <h3 className="text-base font-heading font-bold text-[#0B2D5B]">
                Edit: {editingService.title}
              </h3>
              <button
                onClick={() => setEditingService(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#0B2D5B] mb-1">Tagline</label>
                <input
                  type="text"
                  required
                  value={editingService.tagline}
                  onChange={(e) =>
                    setEditingService({ ...editingService, tagline: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#0B2D5B] mb-1">Short Description</label>
                <textarea
                  rows={3}
                  required
                  value={editingService.shortDescription}
                  onChange={(e) =>
                    setEditingService({ ...editingService, shortDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                />
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-5 py-2 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white font-bold flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
