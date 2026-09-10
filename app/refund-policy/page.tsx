import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Refund & Allocation Policy",
  description: "Allocation & Financial Terms for Jannat Developers & Builders (JDB Group).",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Financial Standards"
          title="Refund &amp; Allocation Policy."
          intro="Institutional standards governing booking advances, property allocations, and contractual financial terms."
          badge="Financial Terms"
        />

        <section className="bg-[#FBFBF9] py-16 md:py-24">
          <div className="container-jdb max-w-4xl space-y-10 font-body text-sm sm:text-base leading-relaxed text-slate-700">
            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">1. Private Land Allocation Deposits</h2>
              <p>
                Booking deposits and land allocation advances made for JDB Group developments (including Lahore DHA infill assets, Gwadar holdings, or Islamabad Airport Corridor allocations) are governed strictly by the stamped purchase contract executed between JDB Group and the purchaser.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">2. Cancellation &amp; Refund Windows</h2>
              <p>
                In the event of a contractual cancellation initiated prior to title deed execution, refund terms, administrative deductions, and processing timelines are determined per the specific terms agreed in your signed Customer Allotment Certificate.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-border bg-white p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl text-navy-950">3. Inquiries &amp; Account Relations</h2>
              <p>
                For all financial allocation accounts and deed documentation inquiries:
              </p>
              <div className="mt-4 font-mono text-xs text-navy-950 space-y-1">
                <p>Email: <a href="mailto:jdbsays@gmail.com" className="text-[#BFA175] underline">jdbsays@gmail.com</a></p>
                <p>Phone: <a href="tel:+923211116000" className="text-[#BFA175] underline">+92 321 1116000</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
