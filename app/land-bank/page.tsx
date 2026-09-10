import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export const metadata: Metadata = {
  title: "Strategic Land Bank",
  description:
    "JDB Group's prime land holdings and high-conviction development reserves across Pakistan's primary growth corridors.",
};

const landHoldings = [
  {
    market: "LAHORE // DHA CORRIDORS",
    status: "Core Mature Holdings",
    type: "Residential & Commercial Parcels",
    provenance: "DHA Phases 5, 6, 7, and 9 Prism",
    strategy:
      "Strategic urban infill and expansion parcels positioned directly within Lahore's most liquid, high-demand residential sectors.",
  },
  {
    market: "ISLAMABAD // CAPITAL GATEWAY CORRIDOR",
    status: "Active Masterplan Assembly",
    type: "Mixed-Use & Strategic Acreage",
    provenance: "Islamabad International Airport Corridor",
    strategy:
      "Secured ahead of major capital infrastructure inflection points, structured for flagship institutional mixed-use and commercial developments.",
  },
  {
    market: "GWADAR // COASTAL MARITIME CORRIDOR",
    status: "Long-Horizon Strategic Reserve",
    type: "Commercial & Port-Adjacent Land",
    provenance: "Arabian Sea Economic Axis",
    strategy:
      "High-conviction positions aligned with long-term regional trade routes, deep-sea port logistics, and corridor infrastructure.",
  },
  {
    market: "GILGIT-BALTISTAN // NORTHERN REGION",
    status: "Regional Exposure Reserve",
    type: "Hospitality & Eco-Transit Sites",
    provenance: "Northern Karakoram Corridor",
    strategy:
      "Selective land holdings exploring luxury hospitality, sustainable tourism, and cross-border transit connectivity.",
  },
];

export default function LandBankPage() {
  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Asset Portfolio"
          title="Land as Intergenerational Potential, Not Merely Inventory."
          intro="JDB Group evaluates land holdings through the lens of long-term urban utility, infrastructure alignment, and sovereign market timing — preserving capital and multiplying intrinsic value."
          badge="Asset-Backed"
        />

        {/* Land Holdings Grid */}
        <section className="bg-navy-900 py-24 md:py-36 border-b border-white/10">
          <div className="container-jdb">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <JDBMonogram className="h-4 w-4" color="#C5A880" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                  Land Portfolio Matrix
                </span>
              </div>
              <h2 className="mt-4 font-display text-display-3 font-normal tracking-tight text-white">
                Active Strategic Reserves
              </h2>
            </Reveal>

            <div className="mt-14 space-y-6">
              {landHoldings.map((h, i) => (
                <Reveal
                  key={h.market}
                  className="group rounded-lg border border-white/10 bg-navy-950/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-champagne/40 hover:bg-navy-950"
                >
                  <div className="grid grid-cols-12 items-start gap-6">
                    <div className="col-span-12 lg:col-span-5">
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-champagne">
                        <span>0{i + 1}</span>
                        <span className="text-white/30">/</span>
                        <span className="rounded bg-champagne/10 border border-champagne/30 px-2 py-0.5 text-[10px] text-champagne">
                          {h.status}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg sm:text-xl text-white lg:text-2xl break-words">
                        {h.market}
                      </h3>
                      <p className="mt-2 font-mono text-xs text-slate-400">
                        {h.provenance}
                      </p>
                    </div>

                    <div className="col-span-12 lg:col-span-7">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                        Strategy &amp; Deployment Scope
                      </span>
                      <p className="font-body text-sm leading-relaxed text-slate-300">
                        {h.strategy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Partnership Callout */}
            <Reveal className="mt-16 rounded-lg border border-champagne/30 bg-navy-950/90 p-8 sm:p-12">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-8">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                    Joint Development Opportunities
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
                    Co-Developing Prime Land Reserves
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                    JDB Group selectively considers development syndications, joint
                    ventures, and equity participation on premier holdings where
                    institutional capital or international expertise enhances
                    project execution.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:text-right">
                  <Link
                    href="/strategic-partnerships/enquiry"
                    className="group inline-flex items-center gap-2 bg-champagne px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950 transition-all hover:bg-white"
                  >
                    <span>Land Partnership Inquiry</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

