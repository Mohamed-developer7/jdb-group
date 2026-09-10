import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy and Tracking Standards for Jannat Developers & Builders (JDB Group).",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Data Protection"
          title="Cookie Policy."
          intro="This Cookie Policy explains how JDB Group uses cookies and similar technology to deliver a seamless digital experience."
          badge="Cookie Policy"
        />

        <section className="bg-[#FBFBF9] py-16 md:py-24">
          <div className="container-jdb max-w-4xl space-y-10 font-body text-sm sm:text-base leading-relaxed text-slate-700">
            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">1. Essential Technical Cookies</h2>
              <p>
                Essential cookies are strictly required to ensure core functionality, security, and smooth session state management. They cannot be disabled.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">2. Performance &amp; Analytics</h2>
              <p>
                Optional performance cookies assist our technical team in evaluating site speed and user interaction patterns. We do not store personal financial credentials in cookie data.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
