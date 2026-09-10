import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function SelectedDevelopments() {
  return (
    <section className="bg-ivory py-16 text-navy-950 md:py-36 border-t border-stone-border">
      <div className="container-jdb">
        {/* Section Header */}
        <Reveal className="flex flex-col justify-between gap-6 border-b border-stone-border pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#0A0E17" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-dark">
                04 // Portfolio &amp; Corridors
              </span>
            </div>
            <h2 className="mt-4 font-display text-display-2 font-normal tracking-tight text-navy-950">
              Selected Developments
            </h2>
            <p className="mt-2.5 sm:mt-3 max-w-xl font-body text-xs sm:text-base text-slate-600">
              A corridor-by-corridor overview of where JDB Group builds, secures
              land assets, and structures long-term development value.
            </p>
          </div>

          <Link
            href="/developments"
            className="group inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.16em] text-champagne-dark transition-colors hover:text-navy-950"
          >
            <span>View All Developments</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        {/* Development Showcase Spreads */}
        <div className="mt-10 sm:mt-16 space-y-12 sm:space-y-20 md:space-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.slug} className="group">
              <div className="grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-16">
                {/* Visual Showcase Card */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`col-span-12 overflow-hidden md:col-span-7 ${
                    i % 2 === 1 ? "md:order-2 md:col-start-6" : "md:col-start-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-border bg-stone-surface shadow-luxury">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60" />
                    
                    {/* Status Pip */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-navy-950/85 px-3.5 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] uppercase tracking-widest text-slate-200">
                      <span className="font-mono text-[10px]">{project.image.location}</span>
                      <span className="font-mono text-champagne">{project.index}</span>
                    </div>
                  </div>
                </Link>

                {/* Narrative Detail */}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-8"
                  }`}
                >
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-champagne-dark">
                    <span>{project.index}</span>
                    <span className="text-slate-300">/</span>
                    <span>{project.market}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-normal text-navy-950 sm:text-3xl lg:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 sm:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950"
                    >
                      <span className="border-b border-champagne pb-1 transition-colors group-hover/link:border-navy-950">
                        Project Overview
                      </span>
                      <span className="text-champagne transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/invest/enquiry"
                      className="text-xs uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-champagne-dark"
                    >
                      Private Allocation Dialogue
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


