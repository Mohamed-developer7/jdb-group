import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/Navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/footer/Footer";
import { Footprint } from "@/components/locations/Footprint";
import { BeyondBorders } from "@/components/locations/BeyondBorders";

export const metadata: Metadata = {
  title: "Growth Corridors & Footprint",
  description:
    "JDB Group's development footprint and strategic land holdings across Lahore, Gwadar, Islamabad and Gilgit-Baltistan.",
};

export default function LocationsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        <PageHero
          eyebrow="National Footprint"
          title="Four Defining Corridors of Opportunity."
          intro="From our foundational roots in DHA Lahore to the Arabian Sea maritime hub of Gwadar and the emerging Federal Capital masterplans."
          badge="National Scope"
        />
        <Footprint />
        <BeyondBorders />
      </main>
      <Footer />
    </>
  );
}

