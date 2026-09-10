import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-ivory py-16 text-navy-950 md:py-36">
      <div className="container-jdb">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <Reveal className="col-span-12 flex flex-col justify-start md:col-span-3">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#0A0E17" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-dark">
                01 // Perspective
              </span>
            </div>
            <span className="mt-3 font-mono text-xs text-stone-text">
              EST. 2013 · PAKISTAN
            </span>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-2 font-normal leading-[1.04] tracking-tight text-navy-950">
              Real estate is not only about what stands upon the ground.{" "}
              <span className="text-slate-500">
                It is about what the land becomes across generations.
              </span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-stone-border pt-8 sm:grid-cols-2">
              <p className="font-body text-sm leading-relaxed text-slate-600 sm:text-base">
                For over fifteen years, JDB Group has navigated the nuances of
                Pakistan&apos;s property landscape — securing prime land, stewarding
                high-conviction developments, and creating enduring value for
                discerning clients and institutional partners.
              </p>
              <p className="font-body text-sm leading-relaxed text-slate-600 sm:text-base">
                From our delivered track record in Lahore (including the sold-out
                Jannat Farms on Bedian Road) to Gwadar&apos;s strategic maritime
                axis and the new chapter near Islamabad International Airport,
                our discipline remains constant: title security, sovereign vision,
                and execution.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


