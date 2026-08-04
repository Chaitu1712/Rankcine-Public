import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const statCards = [
  { glyph: "🔗", label: "Active Campaigns", value: "12", change: "+2 New", bg: "bg-violet-100" },
  { glyph: "🧑", label: "Total Reach", value: "2.4M", change: "+18%", bg: "bg-pink-100" },
  { glyph: "💬", label: "Engagement", value: "320K", change: "+22%", bg: "bg-emerald-100" },
  { glyph: "✨", label: "ROI", value: "4.6x", change: "+15%", bg: "bg-amber-100" },
];

const topInfluencers = [
  { name: "Ananya Sharma", category: "Fashion", followers: "125K Followers", rating: "4.8" },
  { name: "Rohit Verma", category: "Tech", followers: "210K Followers", rating: "4.6" },
  { name: "Sneha Iyer", category: "Lifestyle", followers: "95K Followers", rating: "4.7" },
  { name: "Karan Malhotra", category: "Fitness", followers: "17SK Followers", rating: "4.6" },
];

// Campaign Overview donut breakdown. Percentages must add to 100 —
// used both for the legend text and to build the conic-gradient below.
const campaignBreakdown = [
  { label: "Completed", percent: 65, color: "#6C5CE7" },
  { label: "In Progress", percent: 25, color: "#93C5FD" },
  { label: "Upcoming", percent: 10, color: "#E5E7EB" },
];

const recentCampaigns = [
  { title: "Summer Collection 2025", category: "Fashion", status: "In Progress", statusColor: "text-emerald-600 bg-emerald-50", reach: "1.2M", engagement: "145K", roi: "4.2x" },
  { title: "Tech Unboxed", category: "Tech", status: "Completed", statusColor: "text-sky-600 bg-sky-50", reach: "920K", engagement: "110K", roi: "3.8x" },
  { title: "Glow & Go Skincare", category: "Beauty", status: "In Progress", statusColor: "text-emerald-600 bg-emerald-50", reach: "850K", engagement: "96K", roi: "4.0x" },
];

// Builds a CSS conic-gradient string from the breakdown array above,
// so the donut chart always matches the data instead of being drawn
// by hand as a static image.
function buildConicGradient(breakdown) {
  let cursor = 0;
  const stops = breakdown.map((slice) => {
    const start = cursor;
    cursor += slice.percent;
    return `${slice.color} ${start}% ${cursor}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

export default function BrandView() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="mb-1 text-lg font-extrabold text-rc-purple">
        <span className="rounded bg-rc-purple-light/60 px-1">Brand View</span>{" "}
        →
      </p>

      <Reveal>
        <div className="rounded-3xl border-2 border-fuchsia-400/70 bg-white p-6 shadow-[0_0_40px_rgba(217,70,239,0.15)] sm:p-8">
          <p className="text-lg font-extrabold text-rc-black">
            Welcome back, Brand Studio 👋
          </p>
          <p className="text-xs text-rc-gray-600">
            Here&apos;s what&apos;s happening with your campaigns today.
          </p>

          {/* Stat cards */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-rc-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-base transition-transform duration-300 hover:scale-110 ${stat.bg}`}
                >
                  {stat.glyph}
                </span>
                <p className="mt-2 text-[10px] text-rc-gray-600">{stat.label}</p>
                <p className="text-xl font-extrabold text-rc-black">
                  {stat.value}
                </p>
                <p className="text-[10px] font-semibold text-emerald-500">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            {/* --- Top Influencers --- */}
            <div className="rounded-2xl bg-rc-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-extrabold text-rc-black">
                  Top Influencers
                </p>
                <button type="button" className="text-xs font-semibold text-rc-purple hover:underline">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {topInfluencers.map((influencer) => (
                  <div
                    key={influencer.name}
                    className="flex flex-col items-center gap-1 rounded-xl bg-white p-3 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="h-12 w-12 rounded-full bg-rc-purple-light" />
                    <p className="text-xs font-bold text-rc-black">
                      {influencer.name}
                    </p>
                    <p className="text-[10px] text-rc-gray-600">
                      {influencer.category}
                    </p>
                    <p className="text-[9px] text-rc-gray-400">
                      {influencer.followers}
                    </p>
                    <p className="text-[10px] font-semibold text-amber-500">
                      ⭐ {influencer.rating}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Campaign Overview donut --- */}
            <div className="rounded-2xl bg-rc-gray-50 p-4">
              <p className="mb-3 text-xs font-extrabold text-rc-black">
                Campaign Overview
              </p>
              <div className="flex justify-center">
                <div
                  className="relative flex h-32 w-32 items-center justify-center rounded-full transition-transform duration-500 hover:scale-105"
                  style={{ background: buildConicGradient(campaignBreakdown) }}
                >
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-rc-gray-50">
                    <span className="text-lg font-extrabold text-rc-black">
                      65%
                    </span>
                    <span className="text-[9px] text-rc-gray-600">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <ul className="mt-4 flex flex-col gap-1.5 text-[10px]">
                {campaignBreakdown.map((slice) => (
                  <li key={slice.label} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: slice.color }}
                    />
                    <span className="flex-1 text-rc-gray-600">
                      {slice.label}
                    </span>
                    <span className="font-semibold text-rc-black">
                      {slice.percent}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">
            {/* --- Recent Campaigns table --- */}
            <div className="rounded-2xl bg-rc-gray-50 p-4">
              <p className="mb-3 text-xs font-extrabold text-rc-black">
                Recent Campaigns
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-xs">
                  <thead>
                    <tr className="text-[9px] font-bold uppercase tracking-wide text-rc-gray-600">
                      <th className="pb-2">Campaign</th>
                      <th className="pb-2">Reach</th>
                      <th className="pb-2">Engagement</th>
                      <th className="pb-2">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCampaigns.map((campaign) => (
                      <tr
                        key={campaign.title}
                        className="border-t border-rc-gray-100 transition-colors duration-200 hover:bg-white"
                      >
                        <td className="flex items-center gap-2 py-3">
                          <span className="h-8 w-8 rounded-lg bg-rc-gray-100" />
                          <div>
                            <p className="font-bold text-rc-black">
                              {campaign.title}
                            </p>
                            <p className="text-[9px] text-rc-gray-600">
                              {campaign.category}
                            </p>
                          </div>
                          <span
                            className={`ml-2 rounded-pill px-2 py-0.5 text-[9px] font-semibold ${campaign.statusColor}`}
                          >
                            {campaign.status}
                          </span>
                        </td>
                        <td className="py-3 text-rc-gray-600">{campaign.reach}</td>
                        <td className="py-3 text-rc-gray-600">
                          {campaign.engagement}
                        </td>
                        <td className="py-3 font-semibold text-rc-black">
                          {campaign.roi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- Create New Campaign card --- */}
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-rc-purple-light/30 p-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-transform duration-300 hover:rotate-90">
                +
              </span>
              <p className="text-sm font-extrabold text-rc-black">
                Create New Campaign
              </p>
              <p className="text-[10px] text-rc-gray-600">
                Start a new campaign and reach the right audience.
              </p>
              <Button
                variant="purple"
                className="transition-transform duration-200 hover:scale-105"
              >
                Create Campaign
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
