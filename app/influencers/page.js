 
import InfluencerHero from "@/components/influencers/InfluencerHero";
import WhyPartner from "@/components/influencers/WhyPartner";
import BadgesSection from "@/components/influencers/BadgesSection";
import OnboardingProcess from "@/components/influencers/OnboardingProcess";
import EvaluationCriteria from "@/components/influencers/EvaluationCriteria";
import OutcomeCards from "@/components/influencers/OutcomeCards";
import VerifiedCTA from "@/components/influencers/VerifiedCTA";
import InfluencerForm from "@/components/influencers/InfluencerForm";

// Lives at the /influencers URL (app/influencers/page.js → "/influencers").
//
// NOTE: the "Watch. Rank. Be Heard." + App Store/Google Play block at
// the very bottom of the screenshots is NOT rebuilt here — it's the
// same shared Footer component every other page uses.
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
