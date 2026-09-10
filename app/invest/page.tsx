import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { SectionMeta } from "@/components/typography/SectionMeta";
import { InvestmentJourney } from "@/components/investment/InvestmentJourney";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Investment philosophy and opportunities with Jannat Developers & Builders — land acquisition, development participation and strategic partnership.",
};

const opportunities = [
  {
    title: "Land acquisition",
    description: "Participating in land positioned ahead of confirmed development activity.",
  },
  {
    title: "Development participation",
    description: "Involvement in active development across JDB's current markets.",
  },
  {
    title: "Strategic partnership",
    description: "Longer-term relationships with institutional and private partners.",
  },
  {
    title: "Islamabad — early interest",
    description: "Registering interest ahead of JDB's confirmed capital-region expansion.",
  },
];

export default function InvestPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Capital Deployment"
          title="Real Estate as a High-Conviction Allocation."
          intro="JDB works with a selective cohort of private families, diaspora leaders, and institutional partners. We structure disciplined, asset-backed land and development allocations."
          badge="Private Capital"
        />

        <section className="bg-[#FBFBF9] py-24 md:py-36">
          <div className="container-jdb">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <JDBMonogram className="h-4 w-4" color="#BFA175" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
                  Investment Philosophy
                </span>
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-display-3 font-normal tracking-tight text-[#0F172A]">
                We evaluate land the way an institutional developer does — for what it can
                become, not merely for speculative turnover.
              </h2>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {opportunities.map((o, idx) => (
                <Reveal
                  key={o.title}
                  className="rounded-2xl border border-[#E2E0D8] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFA175]/60 hover:shadow-xl"
                >
                  <span className="font-mono text-xs font-semibold text-[#BFA175]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-[#0F172A]">{o.title}</h3>
                  <p className="mt-2.5 font-body text-sm leading-relaxed text-[#64748B]">{o.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <InvestmentJourney />

        <section className="bg-[#090E17] py-24 text-white md:py-32">
          <div className="container-jdb">
            <Reveal className="grid grid-cols-12 items-end gap-8">
              <div className="col-span-12 md:col-span-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
                  Private Investment Enquiry
                </span>
                <p className="mt-4 max-w-prose font-body text-base text-slate-300">
                  Enquiries are handled discreetly and directly by executive leadership.
                  Tell us about your portfolio parameters and a representative will initiate dialogue.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <Link
                  href="/invest/enquiry"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#BFA175] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#090E17] transition-all duration-300 hover:bg-white"
                >
                  <span>Start a Private Enquiry</span>
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
