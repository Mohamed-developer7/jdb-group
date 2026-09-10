import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website Terms of Use and Legal Disclaimer for Jannat Developers & Builders (JDB Group).",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Legal Standard"
          title="Terms &amp; Conditions."
          intro="Please read these terms carefully before accessing the digital platform of Jannat Developers & Builders (JDB Group)."
          badge="Terms of Use"
        />

        <section className="bg-[#FBFBF9] py-16 md:py-24">
          <div className="container-jdb max-w-4xl space-y-10 font-body text-sm sm:text-base leading-relaxed text-slate-700">
            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">1. Intellectual Property &amp; Brand Marks</h2>
              <p>
                All content, trademarks, monogram designs, renderings, masterplans, and text displayed on this website are the exclusive intellectual property of JDB Group (Jannat Developers &amp; Builders). Unauthorized copying or reproduction is strictly prohibited.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">2. Development &amp; Forward-Looking Information</h2>
              <p>
                Project renderings, spatial dimensions, timeline projections, and corridor metrics represent architectural intent and historical track records. Official title allocations, plot transfers, and binding terms are finalized exclusively through stamped contractual documentation.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">3. Governing Law &amp; Jurisdiction</h2>
              <p>
                These terms and all digital interactions are governed by the applicable laws of the Islamic Republic of Pakistan. Legal jurisdiction resides with the competent courts of Lahore and Islamabad.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
