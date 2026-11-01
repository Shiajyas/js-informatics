import React from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard | JS Informatics",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // If not logged in, render child page (e.g. login) without the admin sidebar
  if (!session) {
    return <div className="min-h-screen bg-[#F5F8FC]">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#F5F8FC] text-[#1F2937]">
      <AdminSidebar user={session} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-[#E2E8F0] px-6 py-3.5 flex items-center justify-between shadow-xs">
          <div>
            <h2 className="text-sm font-bold text-[#0B2D5B]">
              JS Informatics Management Portal
            </h2>
            <p className="text-[11px] text-[#64748B]">
              Thrissur Branch • Security & IT Operations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Database Online
            </span>
          </div>
        </header>

        <main className="p-6 lg:p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
