import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";
import { images } from "@/lib/images";

const lahoreTrack = [
  {
    phase: "DHA Phase 6",
    type: "Bespoke Architectural Residences",
    delivered: "Delivered & Transferred",
    desc: "High-spec architectural residential builds catering to discerning private clientele in Lahore's premier sector.",
  },
  {
    phase: "DHA Phase 5",
    type: "Prime Residential & Commercial Assets",
    delivered: "Delivered & Transferred",
    desc: "Foundational turnkey developments establishing JDB's hallmark in prime DHA residential real estate.",
  },
  {
    phase: "DHA Phase 7 & 9 Prism",
    type: "Strategic Growth Infill & Land Holdings",
    delivered: "Fully Subscribed & Developed",
    desc: "Early strategic land acquisition and development structuring delivering compounded long-term capital growth.",
  },
];

export function TrackRecord() {
  return (
    <section className="bg-bone py-16 text-navy-950 md:py-36 border-t border-stone-border">
      <div className="container-jdb">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-2.5">
            <JDBMonogram className="h-4 w-4" color="#0A0E17" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-dark">
              02 // Proven Delivery
            </span>
          </div>
          <h2 className="mt-4 font-display text-display-2 font-normal tracking-tight text-navy-950">
            Lahore Groundwork &amp; Sold-Out Track Record
          </h2>
          <p className="mt-3 sm:mt-4 font-body text-xs sm:text-base leading-relaxed text-slate-600">
            A fifteen-year delivery foundation across Lahore&apos;s most sought-after
            growth sectors — presented as verified proof of on-the-ground execution,
            title security, and client stewardship.
          </p>
        </Reveal>

        {/* Flagship Sold-Out Hero Feature: Jannat Farms Bedian Road */}
        <Reveal className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-border bg-white shadow-luxury">
          <div className="grid grid-cols-12 items-center">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full col-span-12 lg:col-span-6 overflow-hidden">
              <Image
                src={images.jannatFarms}
                alt="Jannat Farms — Completed and Successfully Sold Out Development on Bedian Road, Lahore"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-navy-950/80 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md">
                <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-champagne">
                  Completed &amp; Sold Out
                </span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 p-5 sm:p-10 lg:p-14">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-champagne-dark">
                <span>Signature Development</span>
                <span>•</span>
                <span>Bedian Road, Lahore</span>
              </div>

              <h3 className="mt-2 sm:mt-3 font-display text-xl sm:text-3xl lg:text-4xl font-normal text-navy-950">
                Jannat Farms — Lahore
              </h3>

              <div className="mt-2.5 sm:mt-3 inline-block rounded-full bg-emerald-50 border border-emerald-200 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Successfully Sold Out
              </div>

              <p className="mt-3 sm:mt-5 font-body text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                Positioned on Bedian Road, directly adjacent to the DHA Phase 10
                growth corridor. A completed masterplanned estate community
                exemplifying JDB&apos;s early positioning in high-appreciation
                arteries and disciplined project execution.
              </p>

              <div className="mt-5 sm:mt-8 border-t border-stone-border pt-3.5 sm:pt-5 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 font-mono text-[10px] sm:text-xs text-slate-500">
                <span>Location: Bedian Road / DHA Corridor</span>
                <span className="text-navy-950 font-semibold">100% Allocated</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* DHA Lahore Delivery Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {lahoreTrack.map((item, idx) => (
            <Reveal
              key={item.phase}
              className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-stone-border bg-white p-5 sm:p-7 shadow-card transition-all duration-300 hover:border-champagne/60 hover:shadow-luxury"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-champagne-dark">
                    0{idx + 1} // DHA
                  </span>
                  <span className="rounded-full bg-stone-surface px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-700">
                    {item.delivered}
                  </span>
                </div>

                <h4 className="mt-4 font-display text-xl text-navy-950">
                  {item.phase}
                </h4>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {item.type}
                </p>

                <p className="mt-3 font-body text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-stone-border pt-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                Status: Completed Track Record
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


