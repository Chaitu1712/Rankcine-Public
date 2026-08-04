import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrandsHero from "@/components/brands/BrandsHero";
import CampaignTools from "@/components/brands/CampaignTools";
import ProvenImpact from "@/components/brands/ProvenImpact";

// Lives at the /brands URL (app/brands/page.js → "/brands").
//
// NOTE: the "Watch. Rank. Be Heard." + App Store/Google Play CTA seen
// at the bottom of the Brands screenshots is NOT a new component —
// it's the same Footer already used on the homepage/FAQ/Publisher/
// Ranker pages, so we just reuse it here instead of rebuilding it.
export default function BrandsPage() {
  return (
    <main>
      <Navbar />
      <BrandsHero />
      <CampaignTools />
      <ProvenImpact />
      <Footer />
    </main>
  );
}
