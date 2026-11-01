import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { EnquiriesManager } from "@/components/admin/EnquiriesManager";

export default async function AdminEnquiriesPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      notes: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2D5B]">
          Enquiry & Quotation Management
        </h1>
        <p className="text-xs text-[#64748B] mt-0.5">
          Review, filter, update workflow statuses, and record technical notes for incoming requests.
        </p>
      </div>

      <EnquiriesManager initialEnquiries={enquiries as any} />
    </div>
  );
}
