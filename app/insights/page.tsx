import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Company news, development updates and market perspective from Jannat Developers & Builders.",
};

export default function InsightsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Editorial &amp; Intelligence"
          title="Market Perspectives &amp; Development Dispatches."
          intro="Strategic commentary, corridor analysis, and institutional perspectives published by JDB Group leadership across Pakistan's evolving real estate markets."
          badge="JDB Intelligence"
        />

        <section className="bg-[#FBFBF9] py-24 md:py-36">
          <div className="container-jdb">
            <div className="space-y-6">
              {insights.map((entry) => (
                <Reveal
                  key={entry.title}
                  className="group rounded-3xl border border-[#E2E0D8] bg-white p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFA175]/60 hover:shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F2F1EC] pb-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[#BFA175]/10 border border-[#BFA175]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#BFA175]">
                        {entry.category}
                      </span>
                      <span className="text-xs font-mono text-[#64748B]">{entry.readTime}</span>
                    </div>
                    <span className="font-mono text-xs text-[#64748B]">{entry.date}</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl md:text-3xl font-normal text-[#0F172A] group-hover:text-[#BFA175] transition-colors leading-snug">
                    {entry.title}
                  </h3>

                  <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-[#475569] md:text-base">
                    {entry.summary}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#BFA175] group-hover:text-[#0F172A] transition-colors">
                    <span>Read Analysis</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
