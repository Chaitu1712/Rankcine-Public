import InfluencerHero from "@/components/influencers/InfluencerHero";
import WhyPartner from "@/components/influencers/WhyPartner";
import BadgesSection from "@/components/influencers/BadgesSection";
import OnboardingProcess from "@/components/influencers/OnboardingProcess";
import EvaluationCriteria from "@/components/influencers/EvaluationCriteria";
import OutcomeCards from "@/components/influencers/OutcomeCards";
import VerifiedCTA from "@/components/influencers/VerifiedCTA";
import InfluencerForm from "@/components/influencers/InfluencerForm";

export const metadata = {
  title: "Verified Influencer Program | Rank Cine",
  description: "Promote Rank Cine, build real influence inside a ranking-first community, and collaborate with top brands.",
  alternates: { canonical: 'https://rankcine.com/influencers' }
};

export default function InfluencersPage() {
  return (
    <main>
      <InfluencerHero />
      <WhyPartner />
      <BadgesSection />
      <OnboardingProcess />
      <EvaluationCriteria />
      <OutcomeCards />
      <VerifiedCTA />
      <InfluencerForm />
    </main>
  );
}