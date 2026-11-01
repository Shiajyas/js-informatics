import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    const categories = await prisma.productCategory.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ success: true, products, categories });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const {
      name,
      slug,
      brand,
      categoryId,
      shortDescription,
      description,
      specifications,
      availability,
      priceDisplay,
      isFeatured,
      image,
    } = data;

    const newProduct = await prisma.product.create({
      data: {
        name,
        slug: slug.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        brand,
        categoryId,
        shortDescription,
        description,
        specifications: typeof specifications === "string" ? specifications : JSON.stringify(specifications),
        availability: availability || "IN_STOCK",
        priceDisplay: priceDisplay || "Contact us for pricing",
        isFeatured: Boolean(isFeatured),
        image: image || "/images/cctv-installation.jpg",
      },
    });

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const { id, ...updateFields } = data;

    if (!id) return NextResponse.json({ error: "Product ID required" }, { status: 400 });

    if (updateFields.specifications && typeof updateFields.specifications !== "string") {
      updateFields.specifications = JSON.stringify(updateFields.specifications);
    }

    const updated = await prisma.product.update({
      where: { id },
      data: updateFields,
    });

    return NextResponse.json({ success: true, product: updated });
  } catch (error) {
    console.error("Update product error:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Product deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
