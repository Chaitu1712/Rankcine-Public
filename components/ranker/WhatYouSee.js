import Reveal from "@/components/ui/Reveal";

const impactStats = [
  { label: "Ranks Submitted", value: "128", glyph: "📊" },
  { label: "Content Reviewed", value: "342", glyph: "🎬" },
  { label: "Badges Earned", value: "12", glyph: "📍" },
  { label: "Global Rank", value: "Top 1%", glyph: "🏆" },
];

const trendingThumbs = ["🎥", "🪖", "🎭", "🏙️", "🕴️"];

export default function WhatYouSee() {
  return (
    <div>
      <p className="mb-4 flex items-center gap-1 text-sm font-extrabold text-rc-purple-dark">
        What you see <span aria-hidden>→</span>
      </p>

      <Reveal>
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-rc-purple-light/30 p-8 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <p className="text-[10px] font-bold tracking-wide text-rc-purple">
              RANKER EXPERIENCE
            </p>
            <h3 className="mt-1 text-2xl font-extrabold leading-tight text-rc-black sm:text-3xl">
              Everything You See
              <br />
              as a <span className="text-rc-purple">Ranker.</span>
            </h3>
            <p className="mt-3 text-sm font-semibold text-rc-purple-dark">
              Explore. Evaluate. Rank.
              <br />
              All in one place.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-rc-purple-dark p-4 text-white transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">
                👤
              </span>
              <p className="text-xs">
                Your rankings shape what the world sees.
                <br />
                <span className="font-bold">Your voice matters.</span>
              </p>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="rounded-2xl bg-white p-4 shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 border-b border-rc-gray-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-rc-black text-xs font-bold text-white">
                R
              </span>
              <p className="text-sm font-bold text-rc-black">
                Welcome, Ranker!
              </p>
              <span className="ml-auto rounded-pill bg-rc-gray-50 px-3 py-1 text-[10px] text-rc-gray-600">
                🔍 Search
              </span>
            </div>

            <p className="mt-3 text-xs font-bold text-rc-black">
              Trending Now
            </p>
            <div className="mt-2 flex gap-2 overflow-x-auto">
              {trendingThumbs.map((thumb, i) => (
                <div
                  key={i}
                  className="flex h-16 w-12 shrink-0 items-center justify-center rounded-lg bg-rc-gray-100 text-xl transition-transform duration-200 hover:scale-110"
                >
                  {thumb}
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-rc-gray-50 p-2 text-center transition-transform duration-200 hover:-translate-y-1"
                >
                  <p>{stat.glyph}</p>
                  <p className="text-sm font-extrabold text-rc-black">
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-rc-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
