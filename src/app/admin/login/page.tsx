"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, ArrowRight, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("An unexpected connection error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <Logo variant="horizontal" withTagline={false} />
          </div>
          <h1 className="text-xl font-heading font-extrabold text-[#0B2D5B]">
            Admin Control Center
          </h1>
          <p className="text-xs text-[#64748B]">
            Sign in with authorized administrator credentials.
          </p>
        </div>

        {/* Demo Credentials Tip */}
        <div className="p-3 bg-[#E6F0FA] rounded-xl border border-[#BFDBFE] text-xs text-[#0B2D5B] space-y-1">
          <p className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
            Default Administrator Access:
          </p>
          <p className="text-[11px] text-slate-700">
            Username: <strong className="font-mono">admin</strong> &nbsp;|&nbsp; Password: <strong className="font-mono">AdminPassword123!</strong>
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
              Username or Email
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="admin or admin@jsinformatics.in"
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B2D5B] mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-[#F1F5F9]">
          <a href="/" className="text-xs text-[#00AEEF] hover:underline">
            ← Return to JS Informatics Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
