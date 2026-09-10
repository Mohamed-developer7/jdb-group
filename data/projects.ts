import { Project } from "./types";
import { images } from "@/lib/images";

export const projects: Project[] = [
  {
    slug: "lahore",
    index: "01",
    market: "LAHORE",
    name: "JANNAT FARMS — LAHORE",
    category: "COMPLETED / SOLD OUT",
    status: "SUCCESSFULLY SOLD OUT",
    summary:
      "Jannat Farms on Bedian Road, adjacent to the DHA Phase 10 growth corridor — a signature completed development in JDB's 15-year Lahore track record alongside projects in DHA Phases 5, 6, 7, and 9.",
    isPlaceholder: false,
    image: {
      src: images.jannatFarms,
      alt: "Jannat Farms — Completed and Successfully Sold Out Development on Bedian Road, Lahore",
      location: "Bedian Road · Adjacent DHA Phase 10 Corridor, Lahore",
    },
  },
  {
    slug: "islamabad",
    index: "02",
    market: "ISLAMABAD",
    name: "ISLAMABAD — THE NEXT CHAPTER",
    category: "CAPITAL EXPANSION",
    status: "COMING SOON",
    summary:
      "A prime new development opportunity near Islamabad International Airport, positioned around a strategically located site with current demand and long-term growth potential.",
    isPlaceholder: false,
    image: {
      src: images.islamabadAirport,
      alt: "Islamabad — The Next Chapter: Prime Development near Islamabad International Airport",
      location: "Near Islamabad International Airport, Islamabad Capital Territory",
    },
  },
  {
    slug: "gwadar",
    index: "03",
    market: "GWADAR",
    name: "GWADAR COASTAL CORRIDOR",
    category: "MARITIME & LOGISTICS",
    status: "STRATEGIC HOLDINGS",
    summary:
      "Strategic land development and commercial positioning within Gwadar's Arabian Sea maritime trade axis, aligned with long-term CPEC economic growth.",
    isPlaceholder: false,
    image: {
      src: images.gwadar,
      alt: "Gwadar Coastal Development & Maritime Logistics Corridor",
      location: "Arabian Sea Deep-Sea Port Corridor, Gwadar",
    },
  },
  {
    slug: "gilgit-baltistan",
    index: "04",
    market: "GILGIT-BALTISTAN",
    name: "NORTHERN REGIONAL EXPOSURE",
    category: "REGIONAL ASSETS",
    status: "SELECTIVE POSITIONING",
    summary:
      "High-value regional land positions in Pakistan's northern corridor, exploring luxury hospitality and sustainable trade connectivity.",
    isPlaceholder: false,
    image: {
      src: images.gilgitBaltistan,
      alt: "Gilgit-Baltistan Regional Hospitality and Northern Corridor Reserves",
      location: "Karakoram Axis, Gilgit-Baltistan",
    },
  },
];

