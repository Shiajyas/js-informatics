import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { 
  Inbox, 
  Clock, 
  CheckCircle2, 
  Package, 
  Wrench, 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  FileQuestion,
  AlertCircle
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export default async function AdminOverviewPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  // Fetch real database counts
  const [
    totalEnquiries,
    newEnquiries,
    pendingQuotations,
    completedRequests,
    totalProducts,
    totalServices,
    recentEnquiries,
  ] = await Promise.all([
    prisma.enquiry.count(),
    prisma.enquiry.count({ where: { status: "NEW" } }),
    prisma.enquiry.count({
      where: {
        type: "QUOTATION",
        status: { in: ["NEW", "CONTACTED"] },
      },
    }),
    prisma.enquiry.count({ where: { status: "COMPLETED" } }),
    prisma.product.count(),
    prisma.service.count(),
    prisma.enquiry.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const statCards = [
    {
      title: "Total Inquiries",
      value: totalEnquiries,
      subtext: "All customer tickets",
      icon: Inbox,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "New / Unread",
      value: newEnquiries,
      subtext: "Requires technician contact",
      icon: AlertCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "Pending Quotations",
      value: pendingQuotations,
      subtext: "Awaiting quote dispatch",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Completed Jobs",
      value: completedRequests,
      subtext: "Resolved & closed",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Live Products",
      value: totalProducts,
      subtext: "In equipment catalogue",
      icon: Package,
      color: "text-[#00AEEF]",
      bgColor: "bg-[#E6F0FA]",
    },
    {
      title: "Active Services",
      value: totalServices,
      subtext: "Published service offerings",
      icon: Wrench,
      color: "text-[#0B2D5B]",
      bgColor: "bg-slate-100",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2D5B]">
            Welcome, {session.name || session.username}
          </h1>
          <p className="text-xs text-[#64748B] mt-0.5">
            Operational overview of enquiries, quotation requests, and services in Thrissur.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/enquiries"
            className="px-4 py-2 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>View All Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid (Real Database Data) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#64748B]">{card.title}</span>
                <div className={`p-2 rounded-lg ${card.bgColor} ${card.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
                  {card.value}
                </span>
                <p className="text-[10px] text-slate-400 mt-1">{card.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Enquiries & Quick Access */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="p-6 border-b border-[#F1F5F9] flex items-center justify-between">
          <div>
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">
              Recent Customer Inquiries & Requests
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5">
              Live updates recorded from website forms and direct customer requests.
            </p>
          </div>
          <Link
            href="/admin/enquiries"
            className="text-xs font-bold text-[#00AEEF] hover:underline flex items-center gap-1"
          >
            <span>Manage All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentEnquiries.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">
            No customer enquiries recorded yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F5F8FC] text-[#64748B] uppercase text-[10px] font-bold tracking-wider border-b border-[#E2E8F0]">
                <tr>
                  <th className="py-3 px-6">Reference</th>
                  <th className="py-3 px-6">Type</th>
                  <th className="py-3 px-6">Customer Name</th>
                  <th className="py-3 px-6">Phone / Locality</th>
                  <th className="py-3 px-6">Category / Requirement</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-[#1F2937]">
                {recentEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-[#F5F8FC]/60 transition-colors">
                    <td className="py-3.5 px-6 font-mono font-bold text-[#0B2D5B]">
                      {enq.referenceNumber}
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#E6F0FA] text-[#0B2D5B]">
                        {enq.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-medium">{enq.customerName}</td>
                    <td className="py-3.5 px-6 text-slate-500">
                      <div>{enq.phone}</div>
                      <div className="text-[10px]">{enq.location}</div>
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 max-w-xs truncate">
                      {enq.serviceCategory || enq.message}
                    </td>
                    <td className="py-3.5 px-6">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          enq.status === "NEW"
                            ? "bg-amber-100 text-amber-800"
                            : enq.status === "COMPLETED"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <Link
                        href={`/admin/enquiries?id=${enq.id}`}
                        className="text-xs font-bold text-[#00AEEF] hover:underline"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
