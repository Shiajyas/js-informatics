"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Inbox, 
  Package, 
  Wrench, 
  Settings, 
  LogOut, 
  Globe, 
  UserCircle 
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  user: {
    username: string;
    email: string;
    name: string;
    role: string;
  };
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const navItems = [
    { title: "Dashboard Overview", href: "/admin", icon: LayoutDashboard },
    { title: "Enquiries & Quotes", href: "/admin/enquiries", icon: Inbox },
    { title: "Products Manager", href: "/admin/products", icon: Package },
    { title: "Services Manager", href: "/admin/services", icon: Wrench },
    { title: "Website Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0B2D5B] text-white flex flex-col justify-between shrink-0 min-h-screen border-r border-[#16407B]">
      <div>
        {/* Logo Branding */}
        <div className="p-6 border-b border-[#133F77]">
          <Logo variant="white" withTagline={false} />
          <div className="mt-2 text-[10px] uppercase font-bold tracking-widest text-[#00AEEF]">
            Admin Control Center
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors",
                  isActive
                    ? "bg-[#00AEEF] text-white shadow-sm"
                    : "text-slate-300 hover:bg-[#0E376E] hover:text-white"
                )}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Actions */}
      <div className="p-4 border-t border-[#133F77] space-y-3">
        {/* User Pill */}
        <div className="p-2.5 rounded-xl bg-[#0E376E] flex items-center gap-2.5">
          <UserCircle className="w-7 h-7 text-[#00AEEF] shrink-0" />
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate text-white">{user.name || user.username}</p>
            <p className="text-[10px] text-slate-300 truncate">{user.email}</p>
          </div>
        </div>

        {/* Quick Links: View Site & Logout */}
        <div className="flex items-center justify-between gap-2 pt-1 text-xs">
          <Link
            href="/"
            target="_blank"
            className="flex-1 py-1.5 px-2 rounded-lg bg-[#061B37] hover:bg-[#082245] text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors text-[11px]"
          >
            <Globe className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Live Site</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex-1 py-1.5 px-2 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors text-[11px]"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
