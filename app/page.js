import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import SeeItInMotion from "@/components/home/SeeItInMotion";
import Library from "@/components/home/Library";
import EcosystemRoles from "@/components/home/EcosystemRoles";
import WhyRankcine from "@/components/home/WhyRankcine";

export const metadata = {
  title: "Rank Cine | Watch. Rank. Be Heard.",
  description: "Rank Cine is an AI-powered content evaluation platform. Join millions of rankers, evaluate movies, and earn sponsor rewards through our 0.5 Consensus Engine.",
  alternates: { canonical: 'https://rankcine.com' }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Rank Cine",
        "url": "https://rankcine.com",
        "logo": "https://rankcine.com/images/RC.png",
        "description": "AI-native content discovery and evaluation ecosystem."
      },
      {
        "@type": "SoftwareApplication",
        "name": "Rank Cine",
        "applicationCategory": "EntertainmentApplication",
        "operatingSystem": "iOS, Android, Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <HowItWorks />
      <SeeItInMotion />
      <Library />
      <EcosystemRoles />
      <WhyRankcine />
    </main>
  );
}