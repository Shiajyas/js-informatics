"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  X, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Note {
  id: string;
  author: string;
  note: string;
  createdAt: string | Date;
}

interface EnquiryItem {
  id: string;
  referenceNumber: string;
  type: string;
  customerName: string;
  phone: string;
  email?: string | null;
  location: string;
  serviceCategory?: string | null;
  requirementType?: string | null;
  deviceType?: string | null;
  problemDetails?: string | null;
  preferredDate?: string | null;
  message: string;
  status: string;
  createdAt: string | Date;
  notes?: Note[];
}

const statusOptions = [
  "ALL",
  "NEW",
  "CONTACTED",
  "QUOTATION_SENT",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
];

const statusBadgeColors: Record<string, string> = {
  NEW: "bg-amber-100 text-amber-800 border-amber-300",
  CONTACTED: "bg-blue-100 text-blue-800 border-blue-300",
  QUOTATION_SENT: "bg-purple-100 text-purple-800 border-purple-300",
  IN_PROGRESS: "bg-indigo-100 text-indigo-800 border-indigo-300",
  COMPLETED: "bg-emerald-100 text-emerald-800 border-emerald-300",
  CANCELLED: "bg-slate-100 text-slate-700 border-slate-300",
};

export function EnquiriesManager({ initialEnquiries }: { initialEnquiries: EnquiryItem[] }) {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(initialEnquiries);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);
  const [newNote, setNewNote] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Filtered list
  const filtered = enquiries.filter((item) => {
    const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
    const matchesType = typeFilter === "ALL" || item.type === typeFilter;
    const matchesSearch =
      search === "" ||
      item.referenceNumber.toLowerCase().includes(search.toLowerCase()) ||
      item.customerName.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  // Status update & Add note
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setIsUpdating(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error("Status update error:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAddNote = async (id: string) => {
    if (!newNote.trim()) return;
    setIsUpdating(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, note: newNote }),
      });
      const data = await res.json();
      if (res.ok && data.success && data.enquiry) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? data.enquiry : e))
        );
        setSelectedEnquiry(data.enquiry);
        setNewNote("");
      }
    } catch (err) {
      console.error("Add note error:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  // CSV Export
  const exportCSV = () => {
    const headers = ["Reference", "Type", "Status", "Customer", "Phone", "Email", "Location", "Category", "Date", "Details"];
    const rows = filtered.map((e) => [
      `"${e.referenceNumber}"`,
      `"${e.type}"`,
      `"${e.status}"`,
      `"${e.customerName.replace(/"/g, '""')}"`,
      `"${e.phone}"`,
      `"${e.email || ""}"`,
      `"${e.location.replace(/"/g, '""')}"`,
      `"${(e.serviceCategory || "").replace(/"/g, '""')}"`,
      `"${new Date(e.createdAt).toLocaleDateString()}"`,
      `"${e.message.replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `JS_Informatics_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer, phone, ref..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Status Select */}
          <div className="flex items-center gap-1 text-xs text-[#64748B]">
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="py-1.5 px-3 rounded-lg border border-[#CBD5E1] text-xs font-semibold bg-white text-[#0B2D5B]"
            >
              {statusOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          {/* Type Select */}
          <div className="flex items-center gap-1 text-xs text-[#64748B]">
            <span>Type:</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="py-1.5 px-3 rounded-lg border border-[#CBD5E1] text-xs font-semibold bg-white text-[#0B2D5B]"
            >
              <option value="ALL">All Types</option>
              <option value="GENERAL">General</option>
              <option value="QUOTATION">Quotation</option>
              <option value="SERVICE_REQUEST">Service Repair</option>
            </select>
          </div>

          <button
            onClick={exportCSV}
            className="py-2 px-3.5 rounded-lg border border-[#CBD5E1] hover:bg-[#F5F8FC] text-xs font-bold text-[#0B2D5B] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F5F8FC] text-[#64748B] uppercase text-[10px] font-bold tracking-wider border-b border-[#E2E8F0]">
              <tr>
                <th className="py-3 px-5">Ref Number</th>
                <th className="py-3 px-5">Type</th>
                <th className="py-3 px-5">Customer Name</th>
                <th className="py-3 px-5">Phone</th>
                <th className="py-3 px-5">Locality</th>
                <th className="py-3 px-5">Requirement / Category</th>
                <th className="py-3 px-5">Date</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9] text-[#1F2937]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-slate-400">
                    No enquiries found matching filters.
                  </td>
                </tr>
              ) : (
                filtered.map((enq) => (
                  <tr key={enq.id} className="hover:bg-[#F5F8FC]/60 transition-colors">
                    <td className="py-3.5 px-5 font-mono font-bold text-[#0B2D5B]">
                      {enq.referenceNumber}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E6F0FA] text-[#0B2D5B]">
                        {enq.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-[#0B2D5B]">
                      {enq.customerName}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600">{enq.phone}</td>
                    <td className="py-3.5 px-5 text-slate-600">{enq.location}</td>
                    <td className="py-3.5 px-5 text-slate-600 max-w-xs truncate">
                      {enq.serviceCategory || enq.message}
                    </td>
                    <td className="py-3.5 px-5 text-slate-400">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-5">
                      <select
                        value={enq.status}
                        onChange={(e) => handleUpdateStatus(enq.id, e.target.value)}
                        disabled={isUpdating}
                        className={cn(
                          "py-1 px-2 rounded-md text-[10px] font-bold border focus:outline-hidden cursor-pointer",
                          statusBadgeColors[enq.status] || "bg-slate-100 text-slate-700"
                        )}
                      >
                        {statusOptions
                          .filter((s) => s !== "ALL")
                          .map((st) => (
                            <option key={st} value={st}>
                              {st.replace("_", " ")}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() => setSelectedEnquiry(enq)}
                        className="py-1 px-2.5 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-[11px] font-bold transition-colors inline-flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail & Notes Slide-Over Drawer / Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-end animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-xl h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00AEEF]">
                    {selectedEnquiry.type} TICKET
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-[#0B2D5B]">
                    {selectedEnquiry.referenceNumber}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Selector */}
              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B2D5B]">Current Workflow Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleUpdateStatus(selectedEnquiry.id, e.target.value)}
                  className={cn(
                    "py-1.5 px-3 rounded-lg text-xs font-bold border focus:outline-hidden",
                    statusBadgeColors[selectedEnquiry.status]
                  )}
                >
                  {statusOptions
                    .filter((s) => s !== "ALL")
                    .map((st) => (
                      <option key={st} value={st}>
                        {st.replace("_", " ")}
                      </option>
                    ))}
                </select>
              </div>

              {/* Customer Info */}
              <div className="space-y-3 text-xs">
                <h4 className="font-bold text-[#0B2D5B] uppercase tracking-wider text-[11px]">
                  Customer Contact & Site Details
                </h4>
                <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Name:</span>
                    <strong className="text-slate-800">{selectedEnquiry.customerName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Phone:</span>
                    <a href={`tel:${selectedEnquiry.phone}`} className="text-[#00AEEF] font-bold">
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email:</span>
                    <span className="text-slate-800">{selectedEnquiry.email || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Location:</span>
                    <span className="text-slate-800">{selectedEnquiry.location}</span>
                  </div>
                  {selectedEnquiry.requirementType && (
                    <div>
                      <span className="text-slate-400 block text-[10px]">Requirement Type:</span>
                      <span className="text-slate-800 font-semibold">{selectedEnquiry.requirementType}</span>
                    </div>
                  )}
                  {selectedEnquiry.deviceType && (
                    <div>
                      <span className="text-slate-400 block text-[10px]">Device / System:</span>
                      <span className="text-slate-800 font-semibold">{selectedEnquiry.deviceType}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Message Scope */}
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-[#0B2D5B] uppercase tracking-wider text-[11px]">
                  Submitted Requirement / Symptoms
                </h4>
                <div className="p-4 rounded-xl bg-white border border-[#CBD5E1] text-[#1F2937] leading-relaxed whitespace-pre-wrap">
                  {selectedEnquiry.message}
                </div>
              </div>

              {/* Internal Notes Log */}
              <div className="space-y-3 text-xs pt-2">
                <h4 className="font-bold text-[#0B2D5B] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Internal Staff Notes & Action Log</span>
                </h4>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {(!selectedEnquiry.notes || selectedEnquiry.notes.length === 0) ? (
                    <p className="text-slate-400 italic text-[11px]">No internal notes recorded yet.</p>
                  ) : (
                    selectedEnquiry.notes.map((note) => (
                      <div key={note.id} className="p-3 bg-[#F5F8FC] rounded-lg border border-[#E2E8F0] space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span className="font-bold text-[#0B2D5B]">{note.author}</span>
                          <span>{new Date(note.createdAt).toLocaleString()}</span>
                        </div>
                        <p className="text-slate-700 text-xs">{note.note}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Add Note Form */}
                <div className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add an internal progress note..."
                    className="flex-1 px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]"
                  />
                  <button
                    onClick={() => handleAddNote(selectedEnquiry.id)}
                    disabled={isUpdating || !newNote.trim()}
                    className="px-3.5 py-2 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-colors disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] flex justify-end">
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
