import Reveal from "@/components/ui/Reveal";

// Each of the 6 benefits. `visual` describes what renders in the
// small stat panel on the right of each row — kept simple/data-driven
// rather than building 6 fully custom illustrations.
const benefits = [
  {
    number: "1",
    title: "Maximum Visibility",
    glyph: "👁",
    color: "bg-violet-500",
    description:
      "Get discovered by a massive and engaged audience of rankers who actively evaluate and promote great content.",
    bullets: [
      "Feature on category listings & dashboards",
      'Appear in "Trending Now" & "Top Ranked" sections',
      "Boost organic reach across the platform",
    ],
    visual: { type: "stat", label: "Example Reach", value: "2.4M+", sub: "Monthly Impressions" },
  },
  {
    number: "2",
    title: "Engaged & Relevant Audience",
    glyph: "👥",
    color: "bg-pink-500",
    description:
      "Reach rankers who are genuinely interested in your content category.",
    bullets: [
      "Real users who watch, rank & share",
      "Higher watch time & interaction",
      "Quality feedback to improve your content",
    ],
    visual: {
      type: "ring",
      label: "Audience Quality Score",
      value: "92%",
      stats: ["92% Real Users", "85% Active Rankers", "High Engagement Rate"],
    },
  },
  {
    number: "3",
    title: "Data-Driven Insights",
    glyph: "📊",
    color: "bg-blue-500",
    description: "Make smarter decisions with advanced analytics designed for creators.",
    bullets: [
      "Track performance in real-time",
      "Understand audience behavior",
      "Optimize content strategy for better results",
    ],
    visual: {
      type: "icons",
      label: "Insights You Get",
      items: ["👁 Views", "⏱ Watch Time", "❤️ Engagement", "🏆 Rank Score"],
    },
  },
  {
    number: "4",
    title: "Fair Ranking. Real Recognition.",
    glyph: "🏆",
    color: "bg-emerald-500",
    description:
      "Our transparent ranking ecosystem ensures that quality content gets the recognition it deserves.",
    bullets: [
      "AI + Human powered ranking system",
      "No pay-to-rank. Only performance matters",
      "Build trust & credibility with the community",
    ],
    visual: {
      type: "steps",
      label: "Your Content. Your Rank.",
      steps: ["Submit", "Ranked", "Evaluated", "Recognized"],
    },
  },
  {
    number: "5",
    title: "Growth & Monetization Opportunities",
    glyph: "💼",
    color: "bg-orange-500",
    description: "Turn your content into real opportunities and long-term growth.",
    bullets: [
      "Unlock brand collaborations",
      "Attract sponsorships & partnerships",
      "Monetization tools coming soon",
    ],
    visual: {
      type: "icons",
      label: "Future Opportunities",
      items: ["🤝 Brand Deals", "🎁 Sponsorships", "💰 Revenue Share", "👑 Premium Features"],
    },
  },
  {
    number: "6",
    title: "Community & Support",
    glyph: "👥",
    color: "bg-violet-500",
    description: "You're never alone. We're here to support your journey at every step.",
    bullets: [
      "Dedicated publisher support",
      "Guides, resources & best practices",
      "Active community of creators",
    ],
    visual: {
      type: "avatars",
      label: "We Grow Together",
      sub: "Join a community of passionate creators and grow together.",
    },
  },
];

export default function PublisherBenefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-6 text-xl font-extrabold text-pink-500">
          Benefits of joining as a Publisher →
        </p>
      </Reveal>

      <div className="rounded-3xl bg-white p-6 shadow-[0_0_50px_rgba(147,51,234,0.12)] ring-1 ring-rc-purple-light">
        <div className="divide-y divide-rc-gray-100">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.number} delay={i * 100}>
              {/* `group` on this row lets the icon + bullets react
                  together when hovering anywhere on the row. */}
              <div className="group grid grid-cols-1 items-center gap-6 py-6 transition-colors duration-300 hover:bg-rc-purple-light/10 lg:grid-cols-[auto_1fr_260px]">
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${benefit.color}`}
                >
                  {benefit.glyph}
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-sm font-extrabold text-rc-black">
                    {benefit.number}. {benefit.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs text-rc-gray-600">
                    {benefit.description}
                  </p>
                  <ul className="mt-2 flex flex-col gap-1">
                    {benefit.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-1.5 text-xs text-rc-black transition-transform duration-200 hover:translate-x-1"
                      >
                        <span className="mt-0.5 text-emerald-500">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right-side visual — behavior depends on visual.type */}
                <div className="rounded-xl bg-rc-gray-50 p-4 text-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  {benefit.visual.type === "stat" && (
                    <>
                      <p className="text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-rc-purple">
                        {benefit.visual.value}
                      </p>
                      <p className="text-[10px] text-rc-gray-600">
                        {benefit.visual.sub}
                      </p>
                    </>
                  )}

                  {benefit.visual.type === "ring" && (
                    <>
                      <p className="text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-pink-500">
                        {benefit.visual.value}
                      </p>
                      <ul className="mt-1 space-y-0.5 text-left text-[10px] text-rc-gray-600">
                        {benefit.visual.stats.map((s) => (
                          <li key={s}>✓ {s}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {benefit.visual.type === "icons" && (
                    <>
                      <p className="mb-2 text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <div className="grid grid-cols-2 gap-1 text-[10px] font-semibold text-rc-black">
                        {benefit.visual.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg bg-white p-1.5 transition-transform duration-200 hover:scale-105"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {benefit.visual.type === "steps" && (
                    <>
                      <p className="mb-2 text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-rc-purple-dark">
                        {benefit.visual.steps.map((step, idx) => (
                          <span key={step} className="flex items-center gap-1">
                            {step}
                            {idx < benefit.visual.steps.length - 1 && (
                              <span aria-hidden>→</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {benefit.visual.type === "avatars" && (
                    <>
                      <div className="flex justify-center -space-x-2">
                        {[...Array(5)].map((_, idx) => (
                          <span
                            key={idx}
                            className="h-8 w-8 rounded-full border-2 border-white bg-rc-purple-light"
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-[10px] font-semibold text-rc-black">
                        {benefit.visual.label}
                      </p>
                      <p className="text-[9px] text-rc-gray-600">
                        {benefit.visual.sub}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
