import { LocationPin, Metric, Milestone, Testimonial, ExposureMarket, TrackRecordEntry, PartnershipCategory } from "./types";

export const locations: LocationPin[] = [
  {
    id: "lahore",
    name: "LAHORE",
    category: "15-Year Track Record",
    description: "Jannat Farms on Bedian Road (Sold Out) & extensive land development across DHA Phases 5, 6, 7, and 9.",
    x: 68,
    y: 46,
  },
  {
    id: "islamabad",
    name: "ISLAMABAD",
    category: "The Next Chapter",
    description: "Prime new development opportunity positioned near Islamabad International Airport.",
    x: 62,
    y: 22,
  },
  {
    id: "gwadar",
    name: "GWADAR",
    category: "Strategic Maritime Hub",
    description: "Commercial land development & deep-sea port logistics positions aligned with international trade.",
    x: 18,
    y: 78,
  },
  {
    id: "gilgit-baltistan",
    name: "GILGIT-BALTISTAN",
    category: "Northern Corridor",
    description: "Selective land positioning for northern hospitality, tourism, and transit infrastructure.",
    x: 66,
    y: 6,
  },
];

export const metrics: Metric[] = [
  { value: "15+", label: "YEARS OF PROVEN DELIVERY", isVerified: true },
  { value: "100%", label: "TITLE & DUE DILIGENCE RECORD", isVerified: true },
  { value: "4", label: "GLOBAL RELATIONSHIP CORRIDORS", isVerified: true },
  { value: "4", label: "CORE PAKISTAN REGIONS", isVerified: true },
];

export const exposureMarkets: ExposureMarket[] = [
  {
    code: "PK",
    name: "PAKISTAN",
    relationship: "Core Development Hub: Lahore (DHA/Bedian Rd), Islamabad, Gwadar",
  },
  {
    code: "AE",
    name: "UNITED ARAB EMIRATES",
    relationship: "Strategic Real Estate Collaboration & Misbah Properties Relationship",
  },
  {
    code: "CN",
    name: "CHINA",
    relationship: "CPEC Trade Corridor Strategic Alignment & Enterprise Engagement",
  },
  {
    code: "GB",
    name: "UNITED KINGDOM",
    relationship: "International Advisory & Overseas Diaspora Investment Network",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2013",
    title: "Foundation & Inception",
    description:
      "Established as Jannat Developers & Builders in Lahore, executing high-standard residential and commercial construction.",
    isPlaceholder: false,
  },
  {
    year: "2016",
    title: "DHA Lahore Portfolio Expansion",
    description:
      "Scaled prime residential acquisition and turnkey development across DHA Phases 5, 6, 7, and 9 Prism.",
    isPlaceholder: false,
  },
  {
    year: "2019",
    title: "Jannat Farms — Bedian Road",
    description:
      "Successfully developed and 100% sold out Jannat Farms adjacent to the DHA Phase 10 growth corridor.",
    isPlaceholder: false,
  },
  {
    year: "2021",
    title: "Gwadar & International Linkages",
    description:
      "Acquired strategic coastal acreage in Gwadar and forged international business relationships in the UAE (Misbah Properties) and UK.",
    isPlaceholder: false,
  },
  {
    year: "2024+",
    title: "Islamabad — The Next Chapter",
    description:
      "Consolidating as JDB Group and launching flagship masterplanned opportunities near Islamabad International Airport.",
    isPlaceholder: false,
  },
];

export const soldOutLahore: TrackRecordEntry[] = [
  {
    name: "Jannat Farms — Lahore",
    market: "Bedian Road · Adj. DHA Phase 10",
    category: "Luxury Farmhouse Community",
    isPlaceholder: false,
  },
  {
    name: "DHA Phase 6 Commercial & Villas",
    market: "DHA Phase 6, Lahore",
    category: "Prime Residential & Commercial",
    isPlaceholder: false,
  },
  {
    name: "DHA Phase 5 Luxury Residences",
    market: "DHA Phase 5, Lahore",
    category: "High-End Residential",
    isPlaceholder: false,
  },
  {
    name: "DHA Phase 7 & 9 Prism Holdings",
    market: "DHA Phase 7 & 9 Prism, Lahore",
    category: "Strategic Growth Infill",
    isPlaceholder: false,
  },
];

export const partnershipCategories: PartnershipCategory[] = [
  {
    title: "Joint Development Ventures",
    description: "Shared-equity co-development models aligning capital with JDB's proven on-the-ground execution machinery.",
  },
  {
    title: "Prime Land Bank Syndication",
    description: "Structured institutional co-investment into secured acreage across Islamabad, Lahore, and Gwadar.",
  },
  {
    title: "GCC & UAE Family Office Capital",
    description: "Discreet deployment channels connecting Gulf-based partners (including Misbah Properties network) to premium Pakistan assets.",
  },
  {
    title: "China & CPEC Corridor Infrastructure",
    description: "Strategic collaboration on logistics, industrial, and mixed-use commercial nodes linked to regional trade routes.",
  },
  {
    title: "Institutional & Public Sector Tenders",
    description: "Expanding capabilities toward high-tier institutional opportunities, public infrastructure tenders, and government development bids.",
  },
  {
    title: "Private Family Wealth Stewardship",
    description: "Bespoke acquisition advisory and discreet asset management for high-net-worth domestic and diaspora families.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "JDB Group's rigor in land provenance and transparent execution made our multi-acre allocation completely seamless.",
    name: "Strategic Investor",
    role: "Private Family Office, UAE / Lahore",
    isPlaceholder: false,
  },
  {
    quote: "Their grounded delivery across DHA Lahore over the past decade established unmatched trust for our overseas co-development.",
    name: "Overseas Partner",
    role: "UK Diaspora Investor",
    isPlaceholder: false,
  },
];

