import Reveal from "@/components/ui/Reveal";

const perks = [
  {
    glyph: "🎟️",
    title: "Sponsor Vouchers",
    description: "Hit the top consensus bins to earn cryptographic RC-<HEX> reward vouchers from brand sponsors.",
  },
  {
    glyph: "🤖",
    title: "Gemini AI Synthesis",
    description: "Submit voice or video reviews, and our AI transcribes and synthesizes your feedback instantly.",
  },
  {
    glyph: "🎖️",
    title: "Ranker Badges",
    description: "Earn unique badges as your accuracy percentile improves across the platform.",
  },
  {
    glyph: "📈",
    title: "Build Your Reputation",
    description: "Grow your Accuracy Index and become a verified top-tier voice in the community.",
  },
  {
    glyph: "👁",
    title: "Early Access",
    description: "Be the first to explore new features and exciting platform updates.",
  },
  {
    glyph: "💬",
    title: "Creator Impact",
    description: "Help great creators get the precise technical feedback they deserve.",
  },
  {
    glyph: "👥",
    title: "Personalized Experience",
    description: "Get smarter content recommendations tailored to your taste profile.",
  },
  {
    glyph: "🎯",
    title: "Beat the Bots",
    description: "Our 0.5 Consensus Engine mathematically eliminates review bombing and fake scores.",
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
    </div>
  );
}