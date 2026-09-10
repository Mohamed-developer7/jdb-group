import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showText?: boolean;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Pick the correct transparent monogram PNG based on variant.
 * - "light" → white mark on transparent bg (for dark backgrounds)
 * - "dark"  → dark navy mark on transparent bg (for light backgrounds)
 * - "gold"  → white mark on transparent bg (tinted via CSS)
 */
function monogramSrc(variant: "light" | "dark" | "gold") {
  if (variant === "dark") return "/images/brand/jdb-monogram-transparent.png";
  return "/images/brand/jdb-monogram-white.png";
}

/**
 * JDB Group brand logo — composed in HTML/CSS from the monogram mark + typography.
 * Guarantees 100% faithful, un-cropped rendering on any background.
 */
export function JDBLogo({
  className = "",
  variant = "light",
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark";
  const isGold = variant === "gold";
  const primary = isDark ? "#070B14" : isGold ? "#BFA175" : "#FFFFFF";
  const subtitleColor = isDark
    ? "rgba(7,11,20,0.75)"
    : isGold
    ? "rgba(191,161,117,0.75)"
    : "rgba(255,255,255,0.72)";

  const sizes = {
    sm: { markH: 26, wordmarkSize: "0.72rem", wordmarkTracking: "0.22em", subtitleSize: "0.42rem", gap: 4 },
    md: { markH: 38, wordmarkSize: "1.0rem", wordmarkTracking: "0.2em", subtitleSize: "0.52rem", gap: 5 },
    lg: { markH: 56, wordmarkSize: "1.4rem", wordmarkTracking: "0.18em", subtitleSize: "0.65rem", gap: 7 },
    xl: { markH: 76, wordmarkSize: "1.9rem", wordmarkTracking: "0.16em", subtitleSize: "0.8rem", gap: 9 },
  };

  const s = sizes[size];

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
      style={{ gap: s.gap }}
    >
      {/* Monogram mark — transparent PNG, no CSS filter needed */}
      <div className="relative shrink-0" style={{ height: s.markH, width: s.markH }}>
        <Image
          src={monogramSrc(variant)}
          alt=""
          fill
          priority
          sizes="80px"
          className="object-contain pointer-events-none"
        />
      </div>

      {/* Wordmark + subtitle */}
      <div className="flex flex-col items-center" style={{ gap: s.gap * 0.4 }}>
        <span
          className="font-display font-semibold leading-none tracking-widest whitespace-nowrap"
          style={{ fontSize: s.wordmarkSize, letterSpacing: s.wordmarkTracking, color: primary }}
        >
          JDB GROUP
        </span>

        <div
          className="w-full"
          style={{ height: "0.5px", backgroundColor: primary, opacity: 0.35 }}
        />

        <div className="flex flex-col items-center" style={{ gap: 1 }}>
          <span
            className="font-body font-medium uppercase whitespace-nowrap tracking-widest"
            style={{ fontSize: s.subtitleSize, color: subtitleColor, letterSpacing: "0.18em" }}
          >
            International Real Estate
          </span>
          <span
            className="font-body font-medium uppercase whitespace-nowrap tracking-widest"
            style={{ fontSize: s.subtitleSize, color: subtitleColor, letterSpacing: "0.18em" }}
          >
            &amp; Development Group
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Inline horizontal nav logo lockup — monogram + wordmark side-by-side.
 */
export function JDBLogoNav({
  className = "",
  variant = "light",
  size = "sm",
}: LogoProps) {
  const isDark = variant === "dark";
  const isGold = variant === "gold";
  const primary = isDark ? "#070B14" : isGold ? "#BFA175" : "#FFFFFF";
  const subtitleColor = isDark
    ? "rgba(7,11,20,0.65)"
    : isGold
    ? "rgba(191,161,117,0.65)"
    : "rgba(255,255,255,0.60)";

  const heights = { sm: 30, md: 38, lg: 44, xl: 56 };
  const markH = heights[size];

  const wordSizes = { sm: "0.82rem", md: "1.05rem", lg: "1.3rem", xl: "1.6rem" };
  const subSizes = { sm: "0.44rem", md: "0.52rem", lg: "0.62rem", xl: "0.75rem" };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative shrink-0" style={{ height: markH, width: markH }}>
        <Image
          src={monogramSrc(variant)}
          alt="JDB Group"
          fill
          priority
          sizes="60px"
          className="object-contain pointer-events-none"
        />
      </div>
      <div className="flex flex-col justify-center" style={{ gap: 2 }}>
        <span
          className="font-display font-semibold leading-none whitespace-nowrap"
          style={{ fontSize: wordSizes[size], letterSpacing: "0.2em", color: primary }}
        >
          JDB GROUP
        </span>
        <div style={{ lineHeight: 1.35 }}>
          <span
            className="font-body font-medium uppercase block"
            style={{ fontSize: subSizes[size], letterSpacing: "0.15em", color: subtitleColor }}
          >
            International Real Estate
          </span>
          <span
            className="font-body font-medium uppercase block"
            style={{ fontSize: subSizes[size], letterSpacing: "0.15em", color: subtitleColor }}
          >
            &amp; Development Group
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Monogram mark for subtle badges & micro-marks.
 * Uses proper transparent PNGs — no CSS invert filter.
 */
export function JDBMonogram({
  className = "w-7 h-7",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  const isDark = color === "#070B14" || color === "#0A0E17" || color === "dark";
  const src = isDark
    ? "/images/brand/jdb-monogram-transparent.png"
    : "/images/brand/jdb-monogram-white.png";

  return (
    <div className={`relative aspect-square shrink-0 ${className}`}>
      <Image
        src={src}
        alt="JDB Mark"
        fill
        className="object-contain pointer-events-none"
        sizes="64px"
      />
    </div>
  );
}

/**
 * Jannat Developers & Builders Heritage Circular Seal
 */
export function JannatHeritageBadge({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-[#BFA175]/30 bg-white shadow-md ${className}`}>
      <Image
        src="/images/brand/jannat-developers-logo.jpg"
        alt="Jannat Developers & Builders Heritage Logo"
        fill
        className="object-contain p-1 pointer-events-none"
        sizes="80px"
      />
    </div>
  );
}
