import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

const verifiedScaleMetrics = [
  {
    value: "15+",
    unit: "Years",
    label: "Continuous Groundwork",
    description: "Compounding execution across cyclical market environments since 2013.",
  },
  {
    value: "4",
    unit: "Corridors",
    label: "Key Growth Regions",
    description: "Active positions in Lahore, Gwadar, Islamabad & Gilgit-Baltistan.",
  },
  {
    value: "4",
    unit: "Nations",
    label: "International Exposure",
    description: "Cross-border ties across Pakistan, UAE, China & the United Kingdom.",
  },
  {
    value: "100%",
    unit: "Record",
    label: "Title & Due Diligence",
    description: "Flawless legal provenance, asset backing, and registry execution.",
  },
];

export function Scale() {
  return (
    <section className="bg-ivory py-16 text-navy-950 md:py-36 border-t border-stone-border">
      <div className="container-jdb">
        <Reveal className="flex flex-col gap-2.5 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <JDBMonogram className="h-4 w-4" color="#0A0E17" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-dark">
              08 // Institutional Scale
            </span>
          </div>
          <h2 className="font-display text-display-2 font-normal tracking-tight text-navy-950">
            Grounded in Execution. Structured for Longevity.
          </h2>
          <p className="mt-2 font-body text-xs sm:text-base text-slate-600">
            A fifteen-year record built on tangible land assets, sovereign
            relationships, and disciplined capital allocation.
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {verifiedScaleMetrics.map((metric) => (
            <Reveal
              key={metric.label}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-border bg-white p-5 sm:p-8 shadow-card transition-all duration-300 hover:border-champagne/60 hover:shadow-luxury"
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-normal text-navy-950 sm:text-5xl lg:text-6xl">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-champagne-dark">
                    {metric.unit}
                  </span>
                </div>

                <h3 className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-navy-950">
                  {metric.label}
                </h3>

                <p className="mt-2.5 font-body text-xs leading-relaxed text-slate-600">
                  {metric.description}
                </p>
              </div>

              <div className="mt-8 h-[2px] w-8 bg-stone-border transition-all duration-300 group-hover:w-full group-hover:bg-champagne" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


