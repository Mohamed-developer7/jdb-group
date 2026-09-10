import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function Leadership() {
  return (
    <section className="bg-navy-950 py-16 text-white md:py-36 border-t border-white/10">
      <div className="container-jdb">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-16">
          {/* Executive Visual Frame */}
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-navy-900 shadow-luxury-dark">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={images.leadershipPortrait}
                  alt="Ali Malik Asghar, CEO of JDB Group, receiving award at the National Defence University (NDU) International CPEC Workshop"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-60" />
              </div>

              {/* Verified Executive Event Badge */}
              <div className="border-t border-white/10 bg-navy-950/95 p-3.5 sm:p-5 font-mono text-[10px] sm:text-[11px] text-slate-300">
                <div className="flex items-center gap-2 text-champagne">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-champagne" />
                  <span className="font-semibold uppercase tracking-wider">
                    National Defence University (NDU)
                  </span>
                </div>
                <p className="mt-1 text-slate-400 font-sans text-[11px] sm:text-xs leading-relaxed">
                  CEO Ali Malik Asghar receiving the commemorative award at the International CPEC Workshop in the presence of senior leadership.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Narrative & Executive Perspective */}
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#BFA175" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                07 // Executive Leadership
              </span>
            </div>

            <h2 className="mt-4 font-display text-display-2 font-normal tracking-tight text-white">
              Ali Malik Asghar
            </h2>

            <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Founder &amp; Chief Executive Officer
            </p>

            <blockquote className="mt-6 border-l-2 border-champagne pl-5 font-display text-xl italic text-slate-200 sm:text-2xl">
              &ldquo;True development capability isn&apos;t measured in marketing claims,
              but in fifteen years of asset ownership, regulatory discipline, and
              unshakable client trust.&rdquo;
            </blockquote>

            <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                Leading JDB Group through multiple macroeconomic cycles, Ali
                Malik Asghar has driven landmark residential and commercial
                undertakings across Lahore&apos;s premier DHA corridors (including
                the sold-out Jannat Farms on Bedian Road), strategic Gwadar
                maritime holdings, and the new development chapter near Islamabad
                International Airport.
              </p>
              <p>
                His strategic focus combines on-the-ground execution with
                cross-border institutional relationships across the UAE (collaborating
                with Misbah Properties), China (CPEC economic corridor engagement),
                and the United Kingdom.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/company/leadership"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-champagne transition-colors hover:text-white"
              >
                <span className="border-b border-champagne pb-1 group-hover:border-white">
                  Read Leadership Profile
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/strategic-partnerships/enquiry"
                className="text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-champagne"
              >
                Executive Partnership Inquiries
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


