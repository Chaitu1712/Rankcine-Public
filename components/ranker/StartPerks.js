import Reveal from "@/components/ui/Reveal";
import Icon3D from "./Icon3D";

const perks = [
  {
    glyph: "📈",
    gradientFrom: "#A5B4FC",
    gradientTo: "#818CF8",
    title: "Personalized Feed",
    description: "Get content that matches your taste.",
  },
  {
    glyph: "🏅",
    gradientFrom: "#C4B5FD",
    gradientTo: "#8B5CF6",
    title: "Ranker Badges",
    description: "Unlock badges as u rank and contribute.",
  },
  {
    glyph: "🎁",
    gradientFrom: "#C4B5FD",
    gradientTo: "#8B5CF6",
    title: "Real Impact",
    description: "See the reach u help create.",
  },
];

const stats = [
  { glyph: "👤", value: "10K+", label: "Active Rankers" },
  { glyph: "⭐", value: "50K+", label: "Content Ranked" },
  { glyph: "📤", value: "2M+", label: "Reach Generated" },
  { glyph: "∞", value: "∞", label: "Impact Created" },
];

export default function StartPerks() {
  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-b from-white to-rc-purple-light/40 p-4 sm:p-6">
      <p className="mb-4 text-base font-extrabold text-rc-black sm:text-lg">
        What you get ?
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {perks.map((perk, i) => (
          <Reveal key={perk.title} delay={i * 100}>
            <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-rc-purple-light bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Icon3D
                glyph={perk.glyph}
                gradientFrom={perk.gradientFrom}
                gradientTo={perk.gradientTo}
              />
              <h3 className="text-base font-extrabold text-rc-purple-dark">
                {perk.title}
              </h3>
              <p className="text-xs text-rc-gray-600">{perk.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Stats bar — wraps to 2 columns on small screens instead of
          squeezing 4 items into a too-narrow row. */}
      <Reveal delay={150}>
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-white/70 p-5 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="text-lg text-rc-purple">{stat.glyph}</span>
              <p className="text-sm font-extrabold text-rc-black">
                {stat.value}
              </p>
              <p className="text-[10px] text-rc-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}