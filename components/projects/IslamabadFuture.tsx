import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function IslamabadFuture() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-28 md:py-32">
      <div className="container-jdb">
        <Reveal className="relative overflow-hidden rounded-3xl md:rounded-4xl border border-stone-border bg-navy-950 p-6 sm:p-12 lg:p-20 text-white shadow-luxury-dark">
          {/* Background Architectural Panorama */}
          <div className="absolute inset-0 z-0">
            <Image
              src={images.islamabadAirport}
              alt="Islamabad Capital Region & Airport Corridor"
              fill
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="object-cover object-center brightness-40 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4 shrink-0" color="#BFA175" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-champagne">
                03 // Capital Expansion
              </span>
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-display-2 font-normal tracking-tight text-white">
              Islamabad — The Next Chapter
            </h2>

            <p className="mt-4 sm:mt-5 font-body text-xs sm:text-base md:text-lg leading-relaxed text-slate-200">
              A prime new development opportunity near Islamabad International Airport,
              positioned around a strategically located site with active market demand
              and compelling long-term urban growth potential.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-champagne/15 border border-champagne/40 px-3.5 sm:px-4 py-1.5 sm:py-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-champagne backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse shrink-0" />
                Near Islamabad International Airport
              </span>

              <Link
                href="/invest/enquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 sm:px-7 py-3 sm:py-3.5 font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-navy-950 transition-all duration-300 hover:bg-white shrink-0"
              >
                <span>Register Interest in Islamabad</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


