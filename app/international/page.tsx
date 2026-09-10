import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { BeyondBorders } from "@/components/locations/BeyondBorders";
import { StrategicPartnerships } from "@/components/investment/StrategicPartnerships";
import { Reveal } from "@/components/motion/Reveal";
import { SectionMeta } from "@/components/typography/SectionMeta";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export const metadata: Metadata = {
  title: "International",
  description:
    "JDB's international exposure across the UAE, China and the UK, and its openness to cross-border development partnerships.",
};

export default function InternationalPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="International Exposure"
          title="Rooted in Pakistan. Informed by Global Networks."
          intro="JDB Group's development assets are located in Pakistan. Its relationships, professional experience, and cross-border commercial exposure extend across the UAE, China, and the United Kingdom."
          badge="Global Corridors"
        />

        <section className="bg-[#FBFBF9] py-24 md:py-32">
          <div className="container-jdb">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <JDBMonogram className="h-4 w-4" color="#BFA175" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
                  Strategic CPEC &amp; Regional Axis
                </span>
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-display-3 font-normal tracking-tight text-[#0F172A]">
                Pakistan&apos;s pivotal role within the China–Pakistan Economic
                Corridor is reshaping the geography of capital — connecting
                the deep-sea port of Gwadar with the northern trading axis.
              </h2>
              <p className="mt-5 max-w-prose font-body text-base text-[#475569] leading-relaxed">
                JDB Group&apos;s development activity in Gwadar reflects an early
                conviction in this corridor. JDB participates through genuine commercial
                land positioning, executive knowledge exchange, and diaspora partnerships.
              </p>
            </Reveal>
          </div>
        </section>

        <BeyondBorders />
        <StrategicPartnerships />
      </main>
      <Footer />
    </>
  );
}
