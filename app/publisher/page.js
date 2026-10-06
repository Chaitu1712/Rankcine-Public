import PublisherHero from "@/components/publisher/PublisherHero";
import TrendBegins from "@/components/publisher/TrendBegins";
import PublisherBenefits from "@/components/publisher/PublisherBenefits";
import PublishingScheme from "@/components/publisher/PublishingScheme";
import PublishingFlow from "@/components/publisher/PublishingFlow";

export const metadata = {
  title: "For Publishers & Studios | Rank Cine",
  description: "Upload your movies and songs, get instant Gemini AI pre-evaluations, and tap into a verified crowd-consensus audience with Rank Cine Studio.",
  alternates: { canonical: 'https://rankcine.com/publisher' }
};

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