import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "horizontal" | "icon" | "white" | "white-horizontal";
  className?: string;
  href?: string;
  withTagline?: boolean;
}

export function Logo({
  variant = "horizontal",
  className,
  href = "/",
  withTagline = true,
}: LogoProps) {
  const isWhite = variant === "white" || variant === "white-horizontal";
  const isIconOnly = variant === "icon";

  const content = (
    <div className={cn("inline-flex items-center gap-3 group select-none", className)}>
      {/* Geometric SVG Monogram Mark */}
      <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            <linearGradient id={`blueGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id={`navyGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isWhite ? "#FFFFFF" : "#0B2D5B"} />
              <stop offset="100%" stopColor={isWhite ? "#E2E8F0" : "#061B37"} />
            </linearGradient>
          </defs>

          {/* Hexagonal Shield Contour */}
          <polygon
            points="50,6 88,27 88,73 50,94 12,73 12,27"
            fill={isWhite ? "#0B2D5B" : "#F5F8FC"}
            stroke={isWhite ? "#1E40AF" : "#E2E8F0"}
            strokeWidth="2.5"
          />

          {/* Network traces & nodes */}
          <line
            x1="28"
            y1="20"
            x2="50"
            y2="20"
            stroke="#00AEEF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
            opacity={isWhite ? "0.9" : "0.7"}
          />
          <circle cx="28" cy="20" r="3.5" fill="#00AEEF" />
          <circle cx="50" cy="20" r="3.5" fill={isWhite ? "#FFFFFF" : "#0B2D5B"} />
          <line
            x1="72"
            y1="80"
            x2="50"
            y2="80"
            stroke="#00AEEF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity={isWhite ? "0.9" : "0.7"}
          />
          <circle cx="72" cy="80" r="3.5" fill="#00AEEF" />

          {/* Monogram J */}
          <path
            d="M 42 32 L 42 62 C 42 69 37 72 31 72 C 26 72 23 68 23 64"
            stroke={`url(#navyGrad-${variant})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="42" cy="32" r="4.5" fill="#00AEEF" />

          {/* Monogram S */}
          <path
            d="M 68 37 C 68 33 63 31 57 31 C 49 31 46 36 48 43 C 50 50 67 49 68 59 C 69 68 60 73 51 73 C 45 73 39 70 38 65"
            stroke={`url(#blueGrad-${variant})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="68" cy="37" r="4.5" fill={isWhite ? "#FFFFFF" : "#0B2D5B"} />

          {/* Center Connection Dot */}
          <circle cx="50" cy="51" r="3.5" fill="#00AEEF" />
        </svg>
      </div>

      {/* Brand Typography */}
      {!isIconOnly && (
        <div className="flex flex-col">
          <div className="font-heading font-extrabold text-xl leading-none tracking-tight flex items-center">
            <span className={cn(isWhite ? "text-white" : "text-[#0B2D5B]")}>JS</span>
            <span className="text-[#00AEEF] ml-1.5 font-bold">INFORMATICS</span>
          </div>
          {withTagline && (
            <span
              className={cn(
                "text-[10px] leading-tight font-medium tracking-normal mt-0.5",
                isWhite ? "text-slate-300" : "text-slate-500"
              )}
            >
              Connecting Technology. Protecting What Matters.
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-hidden rounded-md focus-visible:ring-2 focus-visible:ring-[#00AEEF]">
        {content}
      </Link>
    );
  }

  return content;
}
