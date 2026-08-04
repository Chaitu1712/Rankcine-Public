import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const perks = [
  {
    glyph: "🎖️",
    title: "Ranker Badges",
    description: "Earn unique badges as you stay active and consistent.",
  },
  {
    glyph: "🏅",
    title: "Leaderboard Spotlight",
    description: "Top rankers get featured on RankCine leaderboards.",
  },
  {
    glyph: "🎁",
    title: "Exclusive Rewards",
    description: "Access platform perks, events and future reward programs.",
  },
  {
    glyph: "📈",
    title: "Build Your Reputation",
    description: "Grow your Trust Score and become a recognized voice in the community.",
  },
  {
    glyph: "👁",
    title: "Early Access",
    description: "Be the first to explore new features and exciting updates.",
  },
  {
    glyph: "💬",
    title: "Creator Impact",
    description: "Help great creators get the recognition they truly deserve.",
  },
  {
    glyph: "👥",
    title: "Personalized Experience",
    description: "Get smarter content recommendations tailored to your taste.",
  },
  {
    glyph: "🎯",
    title: "Shape Rankings",
    description: "Your honest rankings influence visibility and community charts.",
  },
];

export default function WhatYouGet() {
  return (
    <div className="mt-16">
      <p className="mb-4 flex items-center gap-1 text-sm font-extrabold text-rc-purple-dark">
        What you get <span aria-hidden>→</span>
      </p>

      <Reveal>
        <div className="rounded-3xl border-2 border-rc-purple-dark/80 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 80}>
                <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rc-purple-light text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {perk.glyph}
                  </span>
                  <h4 className="text-sm font-extrabold text-rc-purple-dark">
                    {perk.title}
                  </h4>
                  <p className="text-[11px] text-rc-gray-600">
                    {perk.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Closing app-store CTA */}
      <Reveal delay={150}>
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 rounded-3xl bg-cyan-50 px-8 py-6">
            <Button variant="black" className="gap-2 transition-transform duration-200 hover:scale-105">
              <span aria-hidden></span> Download on App Store
            </Button>
            <Button variant="black" className="gap-2 transition-transform duration-200 hover:scale-105">
              <span aria-hidden>▶</span> Get it on Google Play
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
