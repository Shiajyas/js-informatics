import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { ProductsManager } from "@/components/admin/ProductsManager";

export default async function AdminProductsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.productCategory.findMany({
      orderBy: { sortOrder: "asc" },
    }),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2D5B]">
          Product Catalogue Management
        </h1>
        <p className="text-xs text-[#64748B] mt-0.5">
          Add, edit, or remove hardware products, manage specifications, pricing labels, and featured statuses.
        </p>
      </div>

      <ProductsManager
        initialProducts={products as any}
        categories={categories as any}
      />
    </div>
  );
}
