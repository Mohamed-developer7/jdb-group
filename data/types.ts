export type ProjectStatus =
  | "SUCCESSFULLY SOLD OUT"
  | "COMPLETED"
  | "ONGOING"
  | "COMING SOON"
  | "STRATEGIC HOLDINGS"
  | "SELECTIVE POSITIONING"
  | "FUTURE DEVELOPMENT";

export interface JdbImage {
  src: string;
  alt: string;
  credit?: string;
  location?: string;
}

export interface Project {
  slug: string;
  index: string; // "01", "02"...
  market: string; // "LAHORE", "GWADAR"...
  name: string; // real name or "[PROJECT NAME]" placeholder
  category: string; // "DHA EXPERIENCE", "DEVELOPMENT / INVESTMENT"...
  status: ProjectStatus;
  summary: string;
  isPlaceholder: boolean;
  image: JdbImage;
}

export interface LocationPin {
  id: string;
  name: string;
  category: string;
  description: string;
  x: number; // position on the stylised Pakistan map, 0-100
  y: number;
}

export interface Metric {
  value: string;
  label: string;
  isVerified: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isPlaceholder: boolean;
}

export interface ExposureMarket {
  code: string;
  name: string;
  relationship: string; // "development market" | "professional experience" | "investment exposure"
}

export interface TrackRecordEntry {
  name: string;
  market: string;
  category: string;
  isPlaceholder: boolean;
}

export interface PartnershipCategory {
  title: string;
  description: string;
}
