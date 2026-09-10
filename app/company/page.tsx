import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/timeline/Timeline";
import { TrackRecord } from "@/components/projects/TrackRecord";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export const metadata: Metadata = {
  title: "Company & Heritage",
  description:
    "JDB Group — 15+ years of real-estate development, strategic land banking, and institutional investment experience across Pakistan.",
};

export default function CompanyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Company &amp; Heritage"
          title="Built through Groundwork. Entering a Flagship Era."
          intro="Fifteen years of real estate execution, navigating market cycles, and compounding asset-backed value across Pakistan's primary corridors."
          badge="Est. 2013"
        />

        {/* Story Section */}
        <section className="bg-navy-900 py-24 md:py-36 border-b border-white/10">
          <div className="container-jdb grid grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-2.5">
                <JDBMonogram className="h-4 w-4" color="#C5A880" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                  Our Genesis &amp; Philosophy
                </span>
              </div>

              <h2 className="mt-6 font-display text-2xl font-normal leading-snug text-white sm:text-3xl lg:text-4xl">
                JDB Group was constructed on the fundamentals of durable
                development: prime land provenance, rigorous legal discipline,
                and direct principal execution.
              </h2>

              <div className="mt-8 space-y-5 font-body text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  Founded initially as Jannat Developers &amp; Builders in 2013,
                  the group established its cornerstone in Lahore, specializing
                  in high-end residential and commercial builds across DHA Lahore&apos;s
                  premier phases (5, 6, 7, and 9 Prism).
                </p>
                <p>
                  As Pakistan&apos;s macroeconomic landscape evolved, JDB expanded
                  strategically into Gwadar&apos;s emerging deep-sea port corridor
                  and forged key cross-border relationships across the UAE,
                  China, and the United Kingdom.
                </p>
                <p>
                  Today, consolidated under the JDB Group flagship, we are
                  executing our next milestone: prime masterplanned development
                  near Islamabad International Airport, bringing fifteen years
                  of proven delivery into the nation&apos;s capital.
                </p>
              </div>
            </Reveal>

            {/* Corporate Fact Sheet */}
            <Reveal className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-lg border border-white/10 bg-navy-950/80 p-8 backdrop-blur-sm divide-y divide-white/10">
                <div className="pb-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Founded &amp; Origin
                  </span>
                  <p className="mt-1 font-display text-xl text-white">2013 · Lahore, Pakistan</p>
                </div>
                <div className="py-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Track Record
                  </span>
                  <p className="mt-1 font-display text-xl text-white">15+ Years Compounded Delivery</p>
                </div>
                <div className="py-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Operational Footprint
                  </span>
                  <p className="mt-1 font-display text-base text-white">
                    Lahore · Gwadar · Islamabad · Gilgit-Baltistan
                  </p>
                </div>
                <div className="pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    International Corridors
                  </span>
                  <p className="mt-1 font-display text-base text-white">
                    United Arab Emirates · China · United Kingdom
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <TrackRecord />
        <Timeline />

        {/* Next Chapter CTA */}
        <section className="bg-navy-950 py-24 md:py-32 border-t border-white/10">
          <div className="container-jdb">
            <Reveal className="grid grid-cols-12 items-end gap-8">
              <div className="col-span-12 md:col-span-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                  The Next Milestone
                </span>
                <h3 className="mt-4 font-display text-display-3 font-normal tracking-tight text-white">
                  Discover Our Active &amp; Upcoming Developments
                </h3>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <Link
                  href="/developments"
                  className="group inline-flex items-center gap-2 bg-champagne px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950 transition-all hover:bg-white"
                >
                  <span>Explore Developments</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

