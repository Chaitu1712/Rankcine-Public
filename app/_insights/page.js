import RankerView from "@/components/insights/RankerView";
import PublisherView from "@/components/insights/PublisherView";
import BrandView from "@/components/insights/BrandView";

export const metadata = {
  title: "Platform Insights | Rank Cine",
  description: "Explore live analytics, top trending content, demographic tracking, and campaign ROI data across the Rank Cine ecosystem.",
  alternates: { canonical: 'https://rankcine.com/insights' }
};

export default function InsightsPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <h1 className="text-2xl font-extrabold text-rc-black">
          Insights &amp; Analytics
        </h1>
      </div>
      <RankerView />
      <PublisherView />
      <BrandView />
    </main>
  );
}