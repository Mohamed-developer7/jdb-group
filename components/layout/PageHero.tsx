import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  badge?: string;
}

export function PageHero({ eyebrow, title, intro, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-36 text-white md:pb-24 md:pt-48 border-b border-white/10">
      {/* Subtle depth lighting */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-champagne/5 blur-3xl pointer-events-none" />

      <div className="container-jdb relative z-10">
        <Reveal className="max-w-4xl">
          <div className="flex items-center gap-3">
            <JDBMonogram className="h-4 w-4" color="#C5A880" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
              {eyebrow}
            </span>
            {badge && (
              <span className="ml-2 rounded-full border border-champagne/30 bg-champagne/10 px-2.5 py-0.5 font-mono text-[10px] uppercase text-champagne">
                {badge}
              </span>
            )}
          </div>

          <h1 className="mt-6 font-display text-display-2 font-normal tracking-tight text-white md:text-display-1">
            {title}
          </h1>

          {intro && (
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 sm:text-lg">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

