import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { EnquiryForm } from "@/components/investment/EnquiryForm";

export const metadata: Metadata = {
  title: "Private Investment Enquiry",
  description: "Start a private, discreet conversation with JDB about an investment opportunity.",
};

export default function InvestmentEnquiryPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FBFBF9] text-[#0F172A] selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Private Allocation"
          title="Private Investment Dialogue."
          intro="This enquiry is routed directly to executive leadership. All parameters and preliminary project data are shared under strict discretion."
          badge="Confidential Dialogue"
        />
        <section className="bg-[#FBFBF9] py-24 md:py-36">
          <div className="container-jdb">
            <div className="max-w-2xl mx-auto">
              <EnquiryForm
                theme="light"
                showOrganisation
                interestLabel="Primary Asset Focus"
                interestOptions={[
                  "Prime Land Bank Acquisition",
                  "Joint Venture Development",
                  "Capital Gateway (Islamabad)",
                  "Strategic Wealth Advisory",
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
