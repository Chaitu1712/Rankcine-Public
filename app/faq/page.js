import WhyRankcineTabs from "@/components/faq/WhyRankcineTabs";

export const metadata = {
  title: "FAQ & Help Centre | Rank Cine",
  description: "Learn how Rank Cine's Rate-to-Earn mechanics, 0.5 Consensus mode, and Gemini AI evaluations work for rankers, brands, and publishers.",
  alternates: { canonical: 'https://rankcine.com/faq' }
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the Rate-to-Earn mechanism work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rate-to-Earn rewards users for high-accuracy evaluations. Your ratings are audited by our Gemini AI engine against community consensus. Placing in top percentile ranks mathematically unlocks sponsor vouchers."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 0.5 Consensus Engine prevent bots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ratings are mathematically binned into 0.5 steps to find the genuine Crowd Consensus Peak. This mathematically prevents review bombing because extreme outlier scores do not win rewards."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhyRankcineTabs />
    </main>
  );
}