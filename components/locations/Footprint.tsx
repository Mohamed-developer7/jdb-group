"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

interface NetworkNode {
  id: string;
  name: string;
  region: "Pakistan" | "International";
  category: string;
  coordinates: string;
  status: string;
  description: string;
  highlights: string[];
  x: number; // percentage in visualization
  y: number;
}

const strategicNodes: NetworkNode[] = [
  {
    id: "lahore",
    name: "LAHORE",
    region: "Pakistan",
    category: "Core Track Record & Inception",
    coordinates: "31.5204° N, 74.3587° E",
    status: "15-Year Delivery Track Record",
    description:
      "Fifteen years of foundational development, land acquisition, and delivery across DHA Lahore (Phases 5, 6, 7, and 9) and the sold-out Jannat Farms on Bedian Road.",
    highlights: [
      "Jannat Farms Bedian Road (Successfully Sold Out)",
      "DHA Phase 5, 6, 7 & 9 Prism Delivery",
      "Foundational Head Office & Execution Base",
    ],
    x: 62,
    y: 52,
  },
  {
    id: "islamabad",
    name: "ISLAMABAD",
    region: "Pakistan",
    category: "The Next Chapter",
    coordinates: "33.6844° N, 73.0479° E",
    status: "Capital Development Expansion",
    description:
      "A prime new development opportunity near Islamabad International Airport, positioned around a strategically located site with current demand and long-term growth potential.",
    highlights: [
      "Near Islamabad International Airport",
      "Masterplanned Mixed-Use & Residential",
      "Private Investor Allocations",
    ],
    x: 58,
    y: 32,
  },
  {
    id: "gwadar",
    name: "GWADAR",
    region: "Pakistan",
    category: "Strategic Maritime Axis",
    coordinates: "25.1216° N, 62.3254° E",
    status: "Coastal Commercial Holdings",
    description:
      "Strategic coastal positioning in the Arabian Sea deep-sea port corridor, directly aligned with long-term international trade and infrastructure development.",
    highlights: [
      "Arabian Sea Coastal Logistics Proximity",
      "Regional CPEC Trade Alignment",
      "Long-Horizon Prime Land Reserves",
    ],
    x: 22,
    y: 78,
  },
  {
    id: "dubai",
    name: "UAE / DUBAI",
    region: "International",
    category: "Strategic International Relationship",
    coordinates: "25.2048° N, 55.2708° E",
    status: "Cross-Border Collaboration",
    description:
      "Strategic relationship and collaboration with Misbah Properties and GCC-based family offices exploring premium real estate opportunities across Pakistan.",
    highlights: [
      "Collaboration with Misbah Properties",
      "GCC Capital & Diaspora Channel",
      "International Real Estate Standards",
    ],
    x: 35,
    y: 60,
  },
  {
    id: "beijing",
    name: "CHINA / BEIJING",
    region: "International",
    category: "CPEC & Infrastructure Engagement",
    coordinates: "39.9042° N, 116.4074° E",
    status: "Strategic Market Exposure",
    description:
      "Executive engagement with Chinese enterprises and economic corridor stakeholders following high-level participation in the NDU International CPEC Workshop.",
    highlights: [
      "International CPEC Engagement",
      "Bilateral Enterprise Dialogues",
      "Trade Corridor Infrastructure Insight",
    ],
    x: 88,
    y: 28,
  },
  {
    id: "london",
    name: "UK / LONDON",
    region: "International",
    category: "International Diaspora Network",
    coordinates: "51.5074° N, 0.1278° W",
    status: "Private Investor Network",
    description:
      "Longstanding relationships with UK-based overseas Pakistani investors and international family offices seeking trusted, asset-backed land allocation.",
    highlights: [
      "Overseas Client Stewardship",
      "Bespoke Portfolio Structuring",
      "Repatriated Capital Governance",
    ],
    x: 12,
    y: 20,
  },
];

export function Footprint() {
  const [activeTab, setActiveTab] = useState<"All" | "Pakistan" | "International">("All");
  const [activeId, setActiveId] = useState(strategicNodes[0].id);

  const filteredNodes =
    activeTab === "All"
      ? strategicNodes
      : strategicNodes.filter((n) => n.region === activeTab);

  const active = strategicNodes.find((l) => l.id === activeId) ?? strategicNodes[0];

  return (
    <section className="bg-navy-950 py-16 text-white md:py-36 border-t border-white/10">
      <div className="container-jdb">
        {/* Section Header */}
        <Reveal className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#BFA175" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                05 // Strategic Network &amp; Footprint
              </span>
            </div>
            <h2 className="mt-4 font-display text-display-2 font-normal tracking-tight text-white">
              National Footprint &amp; Global Corridors
            </h2>
            <p className="mt-2.5 sm:mt-3 max-w-xl font-body text-xs sm:text-base text-slate-300">
              From our operational foundation in Lahore and Islamabad to active
              strategic relationships in the UAE, China, and the United Kingdom.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-navy-900/80 p-1 backdrop-blur-md self-start md:self-auto">
            {(["All", "Pakistan", "International"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  const firstInTab = strategicNodes.find(
                    (n) => tab === "All" || n.region === tab
                  );
                  if (firstInTab) setActiveId(firstInTab.id);
                }}
                className={`rounded-full px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-champagne text-navy-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Visualization & Details Layout */}
        <div className="mt-8 sm:mt-12 grid grid-cols-12 gap-6 lg:gap-14 items-start">
          {/* Strategic Network Visual Map */}
          <div className="relative col-span-12 aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-navy-900/60 p-4 sm:p-6 lg:col-span-7 shadow-luxury-dark">
            {/* Architectural Grid Background */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full opacity-25"
              aria-hidden="true"
            >
              <defs>
                <pattern id="netgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.4"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#netgrid)" />

              {/* Strategic Connection Arcs */}
              <path
                d="M 12 20 Q 35 40 58 32 T 62 52 T 22 78"
                fill="none"
                stroke="#BFA175"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                opacity="0.5"
              />
              <path
                d="M 35 60 Q 48 56 62 52 T 88 28"
                fill="none"
                stroke="#BFA175"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                opacity="0.4"
              />
            </svg>

            {/* Interactive Network Nodes */}
            {filteredNodes.map((loc) => {
              const isSelected = activeId === loc.id;
              const isIntl = loc.region === "International";
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setActiveId(loc.id)}
                  onMouseEnter={() => setActiveId(loc.id)}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20"
                  aria-pressed={isSelected}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Radar Pulse Ring */}
                    {isSelected && (
                      <span className="absolute h-8 w-8 rounded-full border border-champagne bg-champagne/20 animate-ping" />
                    )}

                    {/* Node Dot */}
                    <span
                      className={`relative block rounded-full transition-all duration-300 ${
                        isSelected
                          ? "h-4 w-4 bg-champagne ring-4 ring-champagne/30"
                          : isIntl
                          ? "h-3 w-3 bg-champagne/80 group-hover:scale-125"
                          : "h-3 w-3 bg-white/80 group-hover:bg-champagne group-hover:scale-125"
                      }`}
                    />

                    {/* Tooltip Label */}
                    <span
                      className={`absolute ${
                        loc.x > 68 ? "right-4 sm:right-5 left-auto" : "left-4 sm:left-5"
                      } top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-1.5 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[8px] sm:text-[10px] uppercase tracking-wider backdrop-blur-md transition-all duration-300 border pointer-events-none ${
                        isSelected
                          ? "border-champagne bg-navy-950 text-champagne opacity-100 shadow-md"
                          : "border-white/10 bg-navy-950/80 text-slate-300 opacity-75 group-hover:opacity-100"
                      }`}
                    >
                      {loc.name.split(" ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Live Data Badge */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2 rounded-full bg-navy-950/80 border border-white/10 px-2.5 sm:px-3 py-1 font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE // {active.coordinates}</span>
            </div>
          </div>

          {/* Detailed Node Information Panel */}
          <div className="col-span-12 flex flex-col justify-between rounded-3xl border border-white/10 bg-navy-900/50 p-6 sm:p-8 lg:col-span-5 backdrop-blur-sm">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">
                  {active.category}
                </span>
                <span className="font-mono text-[10px] text-slate-400 shrink-0">{active.coordinates}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-normal text-white sm:text-3xl">
                {active.name}
              </h3>

              <div className="mt-3 inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300">
                {active.status}
              </div>

              <p className="mt-5 font-body text-sm leading-relaxed text-slate-300">
                {active.description}
              </p>

              {/* Corridor Highlights */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Corridor Focus
                </span>
                <ul className="mt-4 space-y-2.5">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-xs text-slate-300 font-body">
                      <span className="h-1 w-1 rounded-full bg-champagne" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/locations"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-champagne transition-colors hover:text-white"
              >
                <span>Explore Full Location Dossier</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

