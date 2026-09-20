import Reveal from "@/components/ui/Reveal";

import Image from "next/image";

const badges = [
  {
    label: "TASTEMAKER",
    labelColor: "text-violet-600 bg-violet-50",
    glyph: "✨",
    ringColor: "bg-gradient-to-br from-violet-500 to-indigo-600",
    description: "You set the vibe. Everyone follows.",
    stat: "Influence 1000+",
  },
  {
    label: "TRENDSETTER",
    labelColor: "text-pink-600 bg-pink-50",
    glyph: "🔥",
    ringColor: "bg-gradient-to-br from-pink-500 to-rose-500",
    description: "You spark trends. The world catches on.",
    stat: "Top 1% Trends",
  },
  {
    label: "TOP VOICE",
    labelColor: "text-emerald-600 bg-emerald-50",
    glyph: "🎖️",
    ringColor: "bg-gradient-to-br from-emerald-400 to-teal-500",
    description: "Your voice echoes across the ranks.",
    stat: "Top 100 Voices",
  },
  {
    label: "COMMUNITY LEAD",
    labelColor: "text-sky-600 bg-sky-50",
    glyph: "👥",
    ringColor: "bg-gradient-to-br from-sky-400 to-blue-500",
    description: "You build. You inspire. You lead.",
    stat: "Community Hero",
  },
];

export default function BadgesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="mb-2 text-sm text-rc-gray-600">Why partner ?</p>
          <h2 className="text-2xl font-extrabold text-rc-black sm:text-3xl">
            Partner with Rankcine and turn your passion into real influence
            and rewards !
          </h2>
        </Reveal>

        {/* Megaphone illustration placeholder */}
       <Reveal delay={100}>
 <div className="relative h-62 w-62 transition-transform duration-500 hover:-rotate-6">
  <Image
    src="/images/horn.png"
    alt="Trophy"
    fill
    className="object-contain"
  />
</div>
</Reveal>
      </div>

      <Reveal delay={100}>
        <h3 className="mt-4 text-2xl font-extrabold text-rc-purple-light" style={{ WebkitTextStroke: "1px #6C5CE7", color: "#C9BFFF" }}>
          Earn badges that mean something.
        </h3>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge, i) => (
          <Reveal key={badge.label} delay={i * 100}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <span
                className={`rounded-pill px-3 py-1 text-[9px] font-bold tracking-wide ${badge.labelColor}`}
              >
                {badge.label}
              </span>

              <span
                className={`mt-2 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${badge.ringColor}`}
              >
                {badge.glyph}
              </span>

              <p className="text-xs text-rc-gray-600">{badge.description}</p>

              <span className="rounded-pill border border-rc-gray-100 px-3 py-1 text-[10px] font-semibold text-rc-purple-dark">
                ⭐ {badge.stat}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
