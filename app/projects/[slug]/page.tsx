import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.market} — ${project.category} | JDB Group`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        {/* Full-bleed Project Hero */}
        <section className="relative flex min-h-[75svh] flex-col justify-end overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
          </div>

          <div className="container-jdb relative z-10 pb-16 pt-40">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-champagne">
                <JDBMonogram className="h-4 w-4" color="#C5A880" />
                <span>{project.index} // {project.market}</span>
                <span className="rounded bg-champagne/10 border border-champagne/30 px-2 py-0.5 text-[10px] text-champagne">
                  {project.status}
                </span>
              </div>
              <h1 className="mt-4 font-display text-display-2 font-normal text-white sm:text-display-1">
                {project.category}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Project Details & Intelligence */}
        <section className="bg-navy-900 py-24 md:py-36 border-y border-white/10">
          <div className="container-jdb grid grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="col-span-12 lg:col-span-7">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                Development Intelligence
              </span>
              <h2 className="mt-4 font-display text-2xl font-normal text-white sm:text-3xl">
                Strategic Corridor Overview
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-slate-300">
                {project.summary}
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate-400">
                JDB Group maintains active land positioning and development
                structures within this corridor. Further technical dossiers,
                architectural renderings, and private allocation sheets are
                available upon confidential registration.
              </p>

              <div className="mt-10">
                <Link
                  href="/invest/enquiry"
                  className="group inline-flex items-center gap-3 bg-champagne px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition-all hover:bg-white"
                >
                  <span>Request Full Project Dossier</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>

            {/* Project Fact Matrix */}
            <Reveal className="col-span-12 lg:col-span-5">
              <div className="rounded-lg border border-white/10 bg-navy-950/80 p-8 backdrop-blur-sm divide-y divide-white/10">
                <div className="pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Geographic Focus
                  </span>
                  <p className="mt-1 font-display text-lg text-white">{project.image.location}</p>
                </div>
                <div className="py-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Development Status
                  </span>
                  <p className="mt-1 font-display text-lg text-white">{project.status}</p>
                </div>
                <div className="py-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Corridor Classification
                  </span>
                  <p className="mt-1 font-display text-lg text-white">{project.category}</p>
                </div>
                <div className="pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                    Portfolio Access
                  </span>
                  <p className="mt-1 text-xs text-slate-400 font-body">
                    Private Allocation &amp; Joint Development Available
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related Corridors */}
        <section className="bg-navy-950 py-20 text-white">
          <div className="container-jdb">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
              Other Corridors
            </span>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/projects/${o.slug}`}
                  className="group rounded border border-white/10 bg-navy-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-champagne/40 hover:bg-navy-900"
                >
                  <span className="font-mono text-xs font-semibold text-champagne">
                    {o.index} // {o.market}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-white group-hover:text-champagne transition-colors">
                    {o.category}
                  </h3>
                  <span className="mt-4 inline-block text-xs uppercase tracking-wider text-slate-400 group-hover:text-white">
                    Explore Corridor →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

