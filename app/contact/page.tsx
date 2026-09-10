import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { EnquiryForm } from "@/components/investment/EnquiryForm";
import { SectionMeta } from "@/components/typography/SectionMeta";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Jannat Developers & Builders.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Executive Engagement"
          title="Direct Principal Inquiries."
          intro="Whatever brings you to JDB — an active development, an investment allocation, or an institutional partnership — this begins as a direct, confidential dialogue."
          badge="Direct Inquiries"
        />

        <section className="bg-[#FBFBF9] py-24 md:py-36">
          <div className="container-jdb grid grid-cols-12 gap-10 lg:gap-16">
            <div className="col-span-12 lg:col-span-7">
              <EnquiryForm
                theme="light"
                showOrganisation
                interestLabel="Enquiry Classification"
                interestOptions={[
                  "Private Property Allocation",
                  "Land Bank Capital Deployment",
                  "Institutional Joint Venture",
                  "Strategic Partnership",
                  "International Dialogue",
                ]}
              />
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
              <div className="rounded-3xl border border-[#E2E0D8] bg-white p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#BFA175] block">
                    Strategic Markets
                  </span>
                  <h3 className="mt-2 font-display text-xl text-[#0F172A]">
                    National Footprint
                  </h3>
                  <p className="mt-2 font-body text-xs text-[#64748B] leading-relaxed">
                    DHA Lahore · Gwadar Maritime Corridor · Islamabad Airport Hub · Gilgit-Baltistan
                  </p>
                </div>

                <div className="border-t border-[#F2F1EC] pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#BFA175] block">
                    Global Exposure
                  </span>
                  <h3 className="mt-2 font-display text-xl text-[#0F172A]">
                    International Networks
                  </h3>
                  <p className="mt-2 font-body text-xs text-[#64748B] leading-relaxed">
                    United Arab Emirates (Dubai) · China (Beijing / CPEC) · United Kingdom (London)
                  </p>
                </div>

                <div className="border-t border-[#F2F1EC] pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#BFA175] block">
                    Direct Contact Channels
                  </span>
                  <div className="mt-3 space-y-2 text-xs font-body text-[#0F172A]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider">Email:</span>
                      <a href="mailto:jdbsays@gmail.com" className="font-medium hover:text-[#BFA175] transition-colors">
                        jdbsays@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider">Phone:</span>
                      <a href="tel:+923211116000" className="font-medium hover:text-[#BFA175] transition-colors">
                        +92 321 1116000
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#F2F1EC] pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#BFA175] block">
                    Confidentiality Notice
                  </span>
                  <p className="mt-2 font-body text-xs text-[#64748B] leading-relaxed">
                    All private allocation inquiries and institutional joint venture proposals are handled directly by executive leadership under strict non-disclosure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
