import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram, JannatHeritageBadge } from "@/components/brand/JDBLogo";

const heritageMilestones = [
  {
    year: "2013",
    period: "Foundation & Origin",
    title: "Jannat Developers & Builders Established",
    description:
      "Commenced high-standard construction, land acquisition, and bespoke private developments in Lahore.",
    hasBadge: true,
  },
  {
    year: "2016",
    period: "Lahore Core Scale",
    title: "DHA Lahore Portfolio Delivery",
    description:
      "Executed residential builds, commercial plots, and strategic land infill across DHA Lahore Phases 5, 6, 7, and 9 Prism.",
    hasBadge: false,
  },
  {
    year: "2019",
    period: "International Exposure",
    title: "China Real Estate & Bedian Road Delivery",
    description:
      "Expanded strategic international outreach across China real estate corridors while successfully delivering and 100% selling out Jannat Farms on Bedian Road.",
    hasBadge: false,
  },
  {
    year: "2021",
    period: "Cross-Border Linkages",
    title: "CPEC International Exposure (China & Pakistan)",
    description:
      "Capitalized on CPEC infrastructure corridors and forged cross-border relationships connecting Pakistan and China international investment networks.",
    hasBadge: false,
  },
  {
    year: "2023",
    period: "Gulf Expansion",
    title: "UAE Real Estate Sector Expansion",
    description:
      "Established strategic advisory and portfolio management presence across the UAE real estate sector.",
    hasBadge: false,
  },
  {
    year: "2024+",
    period: "The Next Era",
    title: "Islamabad Expansion & JDB Group Flagship",
    description:
      "Consolidating 15 years of ground execution into JDB Group — launching prime development opportunities near Islamabad International Airport.",
    hasBadge: false,
  },
];

export function Timeline() {
  return (
    <section className="bg-navy-950 py-16 text-white md:py-36 border-t border-white/10">
      <div className="container-jdb">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Header Column */}
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#BFA175" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                08 // Compounding Journey
              </span>
            </div>

            <h2 className="mt-4 font-display text-display-2 font-normal tracking-tight text-white">
              Fifteen Years of Proven Ground
            </h2>

            <p className="mt-3 sm:mt-4 font-body text-xs sm:text-sm leading-relaxed text-slate-300">
              From our origins as Jannat Developers &amp; Builders to the modern
              digital flagship of JDB Group — every milestone has been built upon
              tangible land, disciplined execution, and lasting relationships.
            </p>

            {/* Heritage Origin Seal Callout */}
            <div className="mt-6 sm:mt-8 flex items-center gap-3.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/10 bg-navy-900/70 p-4 sm:p-5 shadow-luxury-dark backdrop-blur-md">
              <JannatHeritageBadge className="h-12 w-12 sm:h-14 sm:w-14 shrink-0" />
              <div className="text-xs">
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white block">
                  Heritage Foundation
                </span>
                <p className="mt-0.5 sm:mt-1 text-slate-400 font-body text-[11px] sm:text-xs">
                  Jannat Developers &amp; Builders · Est. 2013
                </p>
              </div>
            </div>
          </Reveal>

          {/* Chronological Steps */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative space-y-6 sm:space-y-8 border-l border-white/15 pl-6 sm:pl-12 md:space-y-12">
              {heritageMilestones.map((item) => (
                <Reveal key={item.year} className="relative">
                  {/* Timeline Bullet Node */}
                  <span className="absolute -left-[31px] sm:-left-[49px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-champagne bg-navy-950" />

                  <div className="flex items-baseline gap-2.5 sm:gap-3 font-mono text-xs">
                    <span className="font-display text-xl sm:text-3xl font-normal text-champagne">
                      {item.year}
                    </span>
                    <span className="uppercase tracking-widest text-slate-400 text-[10px] sm:text-xs">
                      // {item.period}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 font-body text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


