import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export const metadata: Metadata = {
  title: "Executive Leadership & Governance",
  description:
    "Ali Malik Asghar, Founder & CEO of JDB Group — Fifteen years of real-estate development, strategic land banking, and institutional governance.",
};

export default function LeadershipPage() {
  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Executive Leadership"
          title="Experience Creates Perspective. Perspective Creates Conviction."
          intro="Fifteen years of hands-on real estate development, land acquisition, and cross-border partnership structuring."
          badge="Principal Leadership"
        />

        {/* CEO Feature Profile */}
        <section className="bg-navy-900 py-24 md:py-36 border-b border-white/10">
          <div className="container-jdb grid grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="col-span-12 lg:col-span-5">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-navy-950 shadow-2xl">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src={images.leadershipPortrait}
                    alt="Ali Malik Asghar, CEO of JDB Group, at the National Defence University (NDU) International CPEC Workshop"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-40" />
                </div>

                {/* Institutional Event Accreditation */}
                <div className="border-t border-white/10 bg-navy-950/95 p-5 font-mono text-[11px] text-slate-300">
                  <div className="flex items-center gap-2 text-champagne">
                    <span className="h-2 w-2 rounded-full bg-champagne" />
                    <span className="font-semibold uppercase tracking-wider">
                      National Defence University (NDU)
                    </span>
                  </div>
                  <p className="mt-1 text-slate-400 font-sans text-xs">
                    Ali Malik Asghar (CEO, JDB Group) attending the International CPEC Strategic Workshop
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-2.5">
                <JDBMonogram className="h-4 w-4" color="#C5A880" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                  Founder &amp; Chief Executive Officer
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
                Ali Malik Asghar
              </h2>

              <blockquote className="mt-6 border-l-2 border-champagne pl-5 font-display text-xl italic text-slate-200">
                &ldquo;Real estate development in Pakistan requires unwavering
                discipline — mastering land title security, navigating long-term
                macro trends, and delivering tangible value on the ground.&rdquo;
              </blockquote>

              <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  With more than fifteen years of dedicated experience across
                  Pakistan&apos;s real estate development sector, Ali Malik Asghar has
                  stewarded land acquisition, infrastructure delivery, and private
                  syndication across DHA Lahore&apos;s established phases and
                  emerging coastal nodes in Gwadar.
                </p>
                <p>
                  His executive engagement extends into the China–Pakistan
                  Economic Corridor (CPEC) ecosystem, Gulf-based family offices
                  in the UAE, and cross-border commercial networks in the UK.
                </p>
                <p>
                  Under his leadership, JDB Group has transformed from a localized
                  development firm into a recognized digital flagship commanding
                  prime land banks and structuring institutional partnerships.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/strategic-partnerships/enquiry"
                  className="group inline-flex items-center gap-2 bg-champagne px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950 transition-all hover:bg-white"
                >
                  <span>Direct Executive Dialogue</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href="/company"
                  className="text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-champagne"
                >
                  Return to Company Overview
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Future Direction Section */}
        <section className="bg-navy-950 py-24 text-white md:py-32">
          <div className="container-jdb">
            <Reveal className="max-w-3xl">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                The Next Generation
              </span>
              <h3 className="mt-4 font-display text-display-3 font-normal tracking-tight text-white">
                Forward-Looking Governance &amp; Institutional Standards
              </h3>
              <p className="mt-5 font-body text-base leading-relaxed text-slate-300">
                As JDB Group enters its next chapter in Islamabad, its strategic
                direction is propelled by rigorous digital capability, advanced
                spatial planning, and deepening international investor
                relationships — ensuring our developments set benchmarks for the
                next decade.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

