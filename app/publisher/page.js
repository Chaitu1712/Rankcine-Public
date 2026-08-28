 
import PublisherHero from "@/components/publisher/PublisherHero";
import TrendBegins from "@/components/publisher/TrendBegins";
import PublisherBenefits from "@/components/publisher/PublisherBenefits";
import PublishingScheme from "@/components/publisher/PublishingScheme";
import PublishingFlow from "@/components/publisher/PublishingFlow";

// Lives at the /publisher URL (app/publisher/page.js → "/publisher").
export default function PublisherPage() {
  return (
    <main>
       <PublisherHero />
      <TrendBegins />
      <PublisherBenefits />
      <PublishingScheme />
      <PublishingFlow />
     </main>
  );
}
