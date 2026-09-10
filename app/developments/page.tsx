import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SelectedDevelopments } from "@/components/projects/SelectedDevelopments";
import { InvestmentJourney } from "@/components/investment/InvestmentJourney";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Developments & Corridors",
  description:
    "JDB Group's development activity across Lahore, Gwadar, Islamabad and Gilgit-Baltistan.",
};

export default function DevelopmentsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="Portfolio &amp; Corridors"
          title="Where JDB Builds &amp; Deploys Capital."
          intro="Development and strategic land portfolios across four defining Pakistani markets, each shaped by its distinct macroeconomic and infrastructure growth."
          badge="Active Portfolio"
        />
        <SelectedDevelopments />
        <InvestmentJourney />
      </main>
      <Footer />
    </>
  );
}

