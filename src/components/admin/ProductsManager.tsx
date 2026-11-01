"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Edit2, Trash2, CheckCircle2, Star, Tag, X, Save, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

interface ProductItem {
  id: string;
  name: string;
  slug: string;
  brand: string;
  categoryId: string;
  category?: ProductCategory;
  shortDescription: string;
  description: string;
  specifications: string;
  availability: string;
  priceDisplay: string;
  isFeatured: boolean;
  image: string;
}

export function ProductsManager({
  initialProducts,
  categories,
}: {
  initialProducts: ProductItem[];
  categories: ProductCategory[];
}) {
  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleOpenCreate = () => {
    setEditingProduct({
      id: "",
      name: "",
      slug: "",
      brand: "",
      categoryId: categories[0]?.id || "",
      shortDescription: "",
      description: "",
      specifications: '{\n  "Resolution": "1080p",\n  "Connectivity": "Ethernet"\n}',
      availability: "IN_STOCK",
      priceDisplay: "Contact us for pricing",
      isFeatured: false,
      image: "/images/cctv-installation.jpg",
    });
    setError("");
    setIsModalOpen(true);
  };

  const handleOpenEdit = (prod: ProductItem) => {
    setEditingProduct(prod);
    setError("");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/products?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      alert("Failed to delete product.");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    setIsSaving(true);
    setError("");

    try {
      const isNew = !editingProduct.id;
      const method = isNew ? "POST" : "PUT";

      // Validate JSON specs
      try {
        JSON.parse(editingProduct.specifications);
      } catch (err) {
        setError("Specifications must be a valid JSON string (e.g. key-value pairs).");
        setIsSaving(false);
        return;
      }

      const res = await fetch("/api/admin/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProduct),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        if (isNew) {
          const cat = categories.find((c) => c.id === data.product.categoryId);
          setProducts((prev) => [{ ...data.product, category: cat }, ...prev]);
        } else {
          const cat = categories.find((c) => c.id === data.product.categoryId);
          setProducts((prev) =>
            prev.map((p) => (p.id === data.product.id ? { ...data.product, category: cat } : p))
          );
        }
        setIsModalOpen(false);
      } else {
        setError(data.error || "Save operation failed.");
      }
    } catch (err) {
      setError("An unexpected error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs text-[#64748B]">Total: {products.length} Products</span>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F5F8FC] text-[#64748B] uppercase text-[10px] font-bold tracking-wider border-b border-[#E2E8F0]">
              <tr>
                <th className="py-3 px-5">Image</th>
                <th className="py-3 px-5">Product Name</th>
                <th className="py-3 px-5">Brand</th>
                <th className="py-3 px-5">Category</th>
                <th className="py-3 px-5">Availability</th>
                <th className="py-3 px-5">Price</th>
                <th className="py-3 px-5">Featured</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9] text-[#1F2937]">
              {products.map((prod) => (
                <tr key={prod.id} className="hover:bg-[#F5F8FC]/50 transition-colors">
                  <td className="py-3 px-5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative bg-slate-100 border border-slate-200">
                      <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="py-3 px-5 font-bold text-[#0B2D5B] max-w-xs">
                    <div>{prod.name}</div>
                    <span className="text-[10px] text-slate-400 font-mono">{prod.slug}</span>
                  </td>
                  <td className="py-3 px-5 text-slate-600">{prod.brand}</td>
                  <td className="py-3 px-5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#E6F0FA] text-[#0B2D5B]">
                      {prod.category?.name || "Category"}
                    </span>
                  </td>
                  <td className="py-3 px-5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {prod.availability}
                    </span>
                  </td>
                  <td className="py-3 px-5 font-semibold text-slate-700">{prod.priceDisplay}</td>
                  <td className="py-3 px-5">
                    {prod.isFeatured ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 flex items-center gap-1 w-max">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        Featured
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[10px]">Standard</span>
                    )}
                  </td>
                  <td className="py-3 px-5 text-right space-x-2">
                    <button
                      onClick={() => handleOpenEdit(prod)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(prod.id, prod.name)}
                      className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Create Product Modal */}
      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
              <h3 className="text-lg font-heading font-bold text-[#0B2D5B]">
                {editingProduct.id ? "Edit Product" : "Create New Product"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                        slug: editingProduct.id
                          ? editingProduct.slug
                          : e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Slug (URL) *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.slug}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, slug: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Category *</label>
                  <select
                    value={editingProduct.categoryId}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, categoryId: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Brand *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.brand}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, brand: e.target.value })
                    }
                    placeholder="e.g. Hikvision, CP Plus, TP-Link"
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Price Label</label>
                  <input
                    type="text"
                    value={editingProduct.priceDisplay}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, priceDisplay: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Availability</label>
                  <select
                    value={editingProduct.availability}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, availability: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden bg-white"
                  >
                    <option value="IN_STOCK">IN_STOCK</option>
                    <option value="CALL_FOR_PRICE">CALL_FOR_PRICE</option>
                    <option value="OUT_OF_STOCK">OUT_OF_STOCK</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D5B] mb-1">Image Path</label>
                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, image: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#0B2D5B] mb-1">Short Description</label>
                <input
                  type="text"
                  required
                  value={editingProduct.shortDescription}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, shortDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#0B2D5B] mb-1">Full Description</label>
                <textarea
                  rows={3}
                  required
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#0B2D5B] mb-1">
                  Specifications (JSON format)
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingProduct.specifications}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, specifications: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-xs font-mono focus:ring-2 focus:ring-[#00AEEF] focus:outline-hidden"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={editingProduct.isFeatured}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, isFeatured: e.target.checked })
                  }
                  className="rounded text-[#00AEEF] focus:ring-[#00AEEF]"
                />
                <label htmlFor="featuredToggle" className="font-semibold text-[#0B2D5B] cursor-pointer">
                  Feature this product on the Homepage
                </label>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white font-bold flex items-center gap-1.5 disabled:opacity-60"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isSaving ? "Saving..." : "Save Product"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
