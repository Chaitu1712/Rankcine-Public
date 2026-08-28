import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

// The 6 spokes coming off the central "UPLOAD" circle.
const uploadSpokes = [
  { glyph: "👥", label: "Rankers", sub: "Rate & Rank", color: "bg-sky-100" },
  {
    glyph: "📣",
    label: "Influencers",
    sub: "Promote & Share",
    color: "bg-pink-100",
  },
  {
    glyph: "🏢",
    label: "Brands",
    sub: "Discover & Collaborate",
    color: "bg-amber-100",
  },
  {
    glyph: "🏆",
    label: "Leaderboard",
    sub: "Top Content Ranks",
    color: "bg-violet-100",
  },
  {
    glyph: "📊",
    label: "Insights",
    sub: "Track Performance",
    color: "bg-emerald-100",
  },
  {
    glyph: "❤️",
    label: "Community",
    sub: "Engages & Reacts",
    color: "bg-rose-100",
  },
];

// Dashboard stat tiles (Uploads, Views, Ranking Score, Audience Reach)
const dashboardStats = [
  { label: "Uploads", value: "128", glyph: "⬆️" },
  { label: "Views", value: "2.4M", glyph: "👁" },
  { label: "Ranking Score", value: "8.7", glyph: "⭐" },
  { label: "Audience Reach", value: "1.2M", glyph: "👥" },
];

const trendingContent = [
  { title: "The Last Horizon", type: "Movie", score: "9.2" },
  { title: "Echoes of Time", type: "Web Series", score: "8.8" },
  { title: "Beyond the Frame", type: "Short Film", score: "8.4" },
];

export default function TrendBegins() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-6 flex items-center gap-2 text-xl font-extrabold text-pink-500">
          Where every trend begins <span aria-hidden>→</span>
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-3xl bg-white p-8 shadow-[0_0_60px_rgba(147,51,234,0.15)] ring-1 ring-rc-purple-light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left: You Create. We Amplify. spoke diagram */}
            <div>
              <p className="text-[10px] font-bold tracking-wide text-rc-purple">
                YOUR CONTENT. REAL IMPACT.
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-rc-black">
                You Create. <span className="text-rc-purple">We Amplify.</span>
              </h3>

              <div className="mt-6 flex items-start gap-4">
                <div className="relative flex h-124 w-124 top-y-10 items-center justify-center py-8">
                  <Image
                    src="/images/upload.png"
                    alt="Laptop upload mockup"
                    fill
                    className="object-contain object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right: Publisher Dashboard mockup */}
            <div>
              <p className="mb-3 text-sm font-extrabold text-rc-black">
                Your Publisher Dashboard
              </p>

              {/* Stat tiles */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {dashboardStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-rc-gray-50 p-3 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="text-lg">{stat.glyph}</p>
                    <p className="text-sm font-extrabold text-rc-black">
                      {stat.value}
                    </p>
                    <p className="text-[9px] font-semibold text-rc-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trending content list */}
              <div className="mt-4 rounded-xl bg-rc-gray-50 p-3">
                <p className="mb-2 text-xs font-bold text-rc-black">
                  Trending Content
                </p>
                <ul className="flex flex-col gap-2">
                  {trendingContent.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-center justify-between rounded-lg bg-white p-2 text-xs transition-transform duration-200 hover:translate-x-1"
                    >
                      <div>
                        <p className="font-bold text-rc-black">{item.title}</p>
                        <p className="text-[10px] text-rc-gray-600">
                          {item.type}
                        </p>
                      </div>
                      <span className="font-bold text-amber-500">
                        ⭐ {item.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approval + badge row */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-rc-gray-50 p-3">
                  <span className="text-2xl">🔵</span>
                  <div>
                    <p className="text-sm font-extrabold text-rc-black">96%</p>
                    <p className="text-[9px] text-rc-gray-600">Approved</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-rc-gray-50 p-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="text-xs font-bold text-rc-black">
                      Verified Publisher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
