import {
  CompassCircleIcon,
  TrendUpCircleIcon,
  MegaphoneCircleIcon,
  FlameCircleIcon,
  HeartCircleIcon,
  AwardCircleIcon,
} from "./icons/FeatureIcons";

// Data for the 6 small feature cards. Same pattern as EcosystemRoles:
// content lives in an array, JSX below just maps over it. To add a
// 7th feature card later, just add one more object here.
const features = [
  {
    Icon: CompassCircleIcon,
    title: "Discover Better Content",
    description: "Surface gems through community signal.",
  },
  {
    Icon: TrendUpCircleIcon,
    title: "Influence Rankings",
    description: "Your taste tilts the leaderboard.",
  },
  {
    Icon: MegaphoneCircleIcon,
    title: "Promote Smarter",
    description: "Native ads inside ranked discovery.",
  },
  {
    Icon: FlameCircleIcon,
    title: "Grow Faster",
    description: "Climb tiers with engaged audiences.",
  },
  {
    Icon: HeartCircleIcon,
    title: "Build Communities",
    description: "Rally fans around the content you love.",
  },
  {
    Icon: AwardCircleIcon,
    title: "Earn Recognition",
    description: "Badges, streaks, and ranker tiers.",
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

        {/*
          Illustration placeholder — the screenshot shows a custom
          dashboard-style graphic (chart card + leaderboard + magnifier).
          Replace this div with an <Image src="/images/why-rankcine.svg" />
          once you export the real graphic from Figma.
        */}
        <div className="flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-rc-purple-light to-white text-sm text-rc-gray-400">
          [ illustration placeholder — export from Figma ]
        </div>
      </div>

      {/* Feature grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <feature.Icon />
            <div>
              <h3 className="text-sm font-extrabold text-rc-black">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-rc-gray-600">
                {feature.description}
              </p>
              {/* Small underline accent, matches the screenshot */}
              <span className="mt-2 block h-0.5 w-8 bg-rc-purple/40" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
