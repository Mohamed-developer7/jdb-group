export interface InsightEntry {
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  isPlaceholder?: boolean;
}

export const insights: InsightEntry[] = [
  {
    category: "Market Intelligence",
    title: "The Capital Growth Vector: Analyzing Prime Development Around Islamabad International Airport",
    date: "August 2026",
    readTime: "5 min read",
    summary:
      "A strategic assessment of infrastructure convergence, bypass arterials, and municipal masterplanning driving high-conviction mixed-use developments in the Federal Capital zone.",
  },
  {
    category: "Corridor Perspective",
    title: "Gwadar Maritime Corridor: Navigating Long-Horizon Asset Allocation Along the Arabian Sea",
    date: "July 2026",
    readTime: "7 min read",
    summary:
      "Deep-sea logistics, deep-water port operations, and industrial zoning frameworks shaping commercial land stewardship in Balochistan's primary coastal axis.",
  },
  {
    category: "Development Track Record",
    title: "Jannat Farms & The Bedian Corridor: Architectural Principles from a Sold-Out Lahore Development",
    date: "June 2026",
    readTime: "6 min read",
    summary:
      "Reflecting on 15 years of land assembly, DHA Phase 10 corridor positioning, and sustainable low-density masterplanning in Lahore's prime peri-urban belt.",
  },
  {
    category: "Global Alliances",
    title: "Structuring Institutional Capital: Connecting UAE Family Offices to Pakistan Growth Corridors",
    date: "May 2026",
    readTime: "8 min read",
    summary:
      "Principal-to-principal governance, asset-backed land titling, and co-development frameworks facilitating cross-border investment flows between Dubai and Pakistan.",
  },
];
