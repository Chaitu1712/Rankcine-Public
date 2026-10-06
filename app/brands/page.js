import BrandsHero from "@/components/brands/BrandsHero";
import CampaignTools from "@/components/brands/CampaignTools";
import ProvenImpact from "@/components/brands/ProvenImpact";
import WhyBrandsLoveUs from "@/components/brands/WhyBrandsLoveUs";

export const metadata = {
  title: "Brand Sponsorships | Rank Cine",
  description: "Launch targeted sponsor campaigns and fund Rate-to-Earn lucky draws. Reach millions of verified, highly-engaged content rankers with zero bot fraud.",
  alternates: { canonical: 'https://rankcine.com/brands' }
};

export default function BrandsPage() {
  return (
    <main>
      <BrandsHero />
      <CampaignTools />
      <WhyBrandsLoveUs/>
      <ProvenImpact />
    </main>
  );
}