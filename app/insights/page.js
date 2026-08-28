import RankerView from "@/components/insights/RankerView";
import PublisherView from "@/components/insights/PublisherView";
import BrandView from "@/components/insights/BrandView";

// Lives at the /insights URL (app/insights/page.js → "/insights").
// The three dashboard mockups (Ranker/Publisher/Brand) are stacked
// sequentially on one page — NOT tab-switched — matching the
// screenshots, which show all three under the same page heading.
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
