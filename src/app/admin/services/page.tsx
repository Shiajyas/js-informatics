import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { ServicesManager } from "@/components/admin/ServicesManager";

export default async function AdminServicesPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const services = await prisma.service.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2D5B]">
          Services Catalogue Management
        </h1>
        <p className="text-xs text-[#64748B] mt-0.5">
          Publish or unpublish services and update tagline descriptions across the website.
        </p>
      </div>

      <ServicesManager initialServices={services as any} />
    </div>
  );
}
