"use client"
import {
  CompassCircleIcon,
  TrendUpCircleIcon,
  MegaphoneCircleIcon,
  FlameCircleIcon,
  HeartCircleIcon,
  AwardCircleIcon,
} from "./icons/FeatureIcons";
import Image from "next/image";


// Data for the 6 small feature cards. Same pattern as EcosystemRoles:
// content lives in an array, JSX below just maps over it. To add a
// 7th feature card later, just add one more object here.
//
// `underline` matches each card's underline accent to its icon color.
const features = [
  {
    Icon: CompassCircleIcon,
    title: "Discover Better Content",
    description: "Surface gems through community signal.",
    underline: "bg-sky-400",
  },
  {
    Icon: TrendUpCircleIcon,
    title: "Influence Rankings",
    description: "Your taste tilts the leaderboard.",
    underline: "bg-violet-400",
  },
  {
    Icon: MegaphoneCircleIcon,
    title: "Promote Smarter",
    description: "Native ads inside ranked discovery.",
    underline: "bg-emerald-400",
  },
  {
    Icon: FlameCircleIcon,
    title: "Grow Faster",
    description: "Climb tiers with engaged audiences.",
    underline: "bg-pink-400",
  },
  {
    Icon: HeartCircleIcon,
    title: "Build Communities",
    description: "Rally fans around the content you love.",
    underline: "bg-purple-500",
  },
  {
    Icon: AwardCircleIcon,
    title: "Earn Recognition",
    description: "Badges, streaks, and ranker tiers.",
    underline: "bg-teal-400",
  },
];

export default function WhyRankcine() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Top row: heading on the left, illustration placeholder on the right */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm text-rc-gray-600">The problem we solve</p>
          <h2 className="font-display text-4xl font-extrabold text-rc-black sm:text-5xl">
            Why RANKCINE ?
          </h2>
          <p className="mt-3 max-w-md text-2xl font-extrabold leading-snug">
            <span className="text-rc-purple-light">From content chaos to</span>
            <br />
            <span className="text-rc-black">crystal-clear </span>
            <span className="text-rc-purple-light">rankings.</span>
          </p>
        </div>

    
        <div className="flex h-56 items-center justify-center  from-rc-purple-light to-white text-sm text-rc-gray-400">
            <div className="absolute h-104 w-104">
  <Image
    src="/images/dashboardhome.png"
    alt="Thinking character"
    fill
    className="object-contain"
  />
</div>
        </div>
      </div>

      {/* Feature grid: 1 col mobile, 2 col tablet, 3 col desktop.
          Each feature now sits inside its own card container
          (white bg, rounded corners, soft shadow) instead of
          floating directly in the grid. */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="group feature-card flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md shadow-black/5 ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <feature.Icon />
            <div>
              <h3 className="text-sm font-extrabold text-rc-black">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-rc-gray-600">
                {feature.description}
              </p>
              {/* Underline accent — grows wider on hover */}
              <span
                className={`mt-2 block h-0.5 w-8 transition-all duration-300 ease-out group-hover:w-14 ${feature.underline}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Staggered fade-up entrance for the feature cards on page load.
          `animationDelay` above (set per-card via inline style) makes
          them appear one after another instead of all at once. */}
      <style jsx>{`
        .feature-card {
          opacity: 0;
          animation: featureFadeUp 0.6s ease-out forwards;
        }
        @keyframes featureFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}