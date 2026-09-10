import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and Data Protection Standards for Jannat Developers & Builders (JDB Group).",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Governance & Governance"
          title="Privacy Policy."
          intro="Jannat Developers & Builders (JDB Group) is committed to safeguarding the personal and financial data of our clients, institutional partners, and site visitors."
          badge="Legal Compliance"
        />

        <section className="bg-[#FBFBF9] py-16 md:py-24">
          <div className="container-jdb max-w-4xl space-y-10 font-body text-sm sm:text-base leading-relaxed text-slate-700">
            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">1. Data Minimization &amp; Information We Collect</h2>
              <p>
                We adhere to strict data minimization principles. We only collect personal information that you voluntarily submit through our allocation forms, inquiry portals, or direct correspondence (such as name, email address, phone number, organization name, and investment scope).
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">2. How We Use Your Data</h2>
              <p>
                Submitted information is strictly utilized to process property inquiries, coordinate private allocations, execute contractual obligations, and provide non-disruptive corporate dispatches. We do not sell, rent, or lease client data to third-party brokers or external marketers.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">3. Confidentiality &amp; Institutional Governance</h2>
              <p>
                All private investor communications, joint venture proposals, and land allocation details are managed under strict executive non-disclosure standards across our Lahore and Islamabad headquarters.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">4. Your Rights &amp; Data Rectification</h2>
              <p>
                You retain full rights to request access to, correction of, or complete deletion of your personal records from our databases. To exercise your rights, contact our Data Governance Officer:
              </p>
              <div className="mt-4 font-mono text-xs text-navy-950 space-y-1">
                <p>Email: <a href="mailto:jdbsays@gmail.com" className="text-[#BFA175] underline">jdbsays@gmail.com</a></p>
                <p>Direct Line: <a href="tel:+923211116000" className="text-[#BFA175] underline">+92 321 1116000</a></p>
                <p>Location: Lahore &amp; Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
