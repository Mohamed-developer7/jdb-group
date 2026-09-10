import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { StrategicPartnerships } from "@/components/investment/StrategicPartnerships";
import { Reveal } from "@/components/motion/Reveal";
import { SectionMeta } from "@/components/typography/SectionMeta";

export const metadata: Metadata = {
  title: "Strategic Partnerships",
  description:
    "JDB is open to development partnerships, land and asset partnerships, and conversations with international investors and partners.",
};

export default function StrategicPartnershipsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Institutional Alliances"
          title="A Credible Counterparty in Pakistan's Growth Corridors."
          intro="Pakistan's emerging infrastructure and urban corridors are creating high-value development opportunities. JDB structures joint ventures and strategic partnerships with institutional developers and family offices."
          badge="Strategic Alliances"
        />

        <StrategicPartnerships />

        <section className="bg-[#090E17] py-24 text-white md:py-32">
          <div className="container-jdb">
            <Reveal className="grid grid-cols-12 items-end gap-8">
              <div className="col-span-12 md:col-span-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
                  Start a Conversation
                </span>
                <p className="mt-4 max-w-prose font-body text-base text-slate-300">
                  Whether you represent an international development firm, an
                  institutional fund, or a GCC family office exploring asset-backed
                  exposure in Pakistan — we invite you to start a direct, confidential dialogue.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <Link
                  href="/strategic-partnerships/enquiry"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#BFA175] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#090E17] transition-all duration-300 hover:bg-white"
                >
                  <span>Partnership Enquiry</span>
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
