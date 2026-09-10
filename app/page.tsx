import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { Statement } from "@/components/typography/Statement";
import { TrackRecord } from "@/components/projects/TrackRecord";
import { IslamabadFuture } from "@/components/projects/IslamabadFuture";
import { SelectedDevelopments } from "@/components/projects/SelectedDevelopments";
import { Footprint } from "@/components/locations/Footprint";
import { Scale } from "@/components/typography/Scale";
import { Investment } from "@/components/investment/Investment";
import { InvestmentJourney } from "@/components/investment/InvestmentJourney";
import { StrategicPartnerships } from "@/components/investment/StrategicPartnerships";
import { BeyondBorders } from "@/components/locations/BeyondBorders";
import { Timeline } from "@/components/timeline/Timeline";
import { Leadership } from "@/components/leadership/Leadership";
import { ClientTrust } from "@/components/testimonials/ClientTrust";
import { FinalInvitation } from "@/components/layout/FinalInvitation";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="bg-navy-950 text-white selection:bg-champagne selection:text-navy-950">
        <Hero />
        <Statement />
        <TrackRecord />
        <IslamabadFuture />
        <SelectedDevelopments />
        <Footprint />
        <Scale />
        <Investment />
        <InvestmentJourney />
        <StrategicPartnerships />
        <BeyondBorders />
        <Timeline />
        <Leadership />
        <ClientTrust />
        <FinalInvitation />
      </main>
      <Footer />
    </>
  );
}

