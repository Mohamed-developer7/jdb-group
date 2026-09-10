import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { EnquiryForm } from "@/components/investment/EnquiryForm";

export const metadata: Metadata = {
  title: "Strategic Partnership Enquiry",
  description: "Start a private conversation with JDB about a strategic partnership.",
};

export default function PartnershipEnquiryPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Institutional Dialogue"
          title="Initiate Partnership Dialogue."
          intro="Tell us briefly about your organisation, development scope, or capital allocation parameters. This goes directly to JDB executive leadership."
          badge="Executive Dialogue"
        />
        <section className="bg-[#FBFBF9] py-24 md:py-36">
          <div className="container-jdb">
            <div className="max-w-2xl mx-auto">
              <EnquiryForm
                theme="light"
                showOrganisation
                interestLabel="Partnership Classification"
                interestOptions={[
                  "Institutional Development Joint Venture",
                  "Land Bank Equity & Co-Investment",
                  "Cross-Border International Consortium",
                  "GCC / Sovereign Capital Allocation",
                  "Public-Sector & Institutional Tender Dialogue",
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
