import Reveal from "@/components/ui/Reveal";
import {
  EyeIcon,
  UsersIcon,
  BarChartIcon,
  TrophyIcon,
  WalletIcon,
} from "./icons/BenefitIcons";

// Each of the 6 benefits. `visual` describes what renders in the
// small stat panel on the right of each row — kept simple/data-driven
// rather than building 6 fully custom illustrations.
//
// `gradient` / `titleColor` / `panelBg` are the theme trio that keeps
// the icon, heading, and right-side panel color-matched per row.
const benefits = [
  {
    number: "1",
    title: "Maximum Visibility",
    Icon: EyeIcon,
    gradient: "from-violet-400 to-violet-600",
    titleColor: "text-violet-600",
    panelBg: "bg-violet-50",
    barColor: "bg-violet-500",
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
    Icon: UsersIcon,
    gradient: "from-pink-400 to-pink-600",
    titleColor: "text-pink-600",
    panelBg: "bg-pink-50",
    ringColor: "#ec4899",
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
      percent: 92,
      stats: ["92% Real Users", "85% Active Rankers", "High Engagement Rate"],
    },
  },
  {
    number: "3",
    title: "Data-Driven Insights",
    Icon: BarChartIcon,
    gradient: "from-blue-400 to-blue-600",
    titleColor: "text-blue-600",
    panelBg: "bg-blue-50",
    chipColor: "bg-blue-500",
    description: "Make smarter decisions with advanced analytics designed for creators.",
    bullets: [
      "Track performance in real-time",
      "Understand audience behavior",
      "Optimize content strategy for better results",
    ],
    visual: {
      type: "icons",
      label: "Insights You Get",
      items: [
        { glyph: "👁", label: "Views" },
        { glyph: "⏱", label: "Watch Time" },
        { glyph: "❤️", label: "Engagement" },
        { glyph: "🏆", label: "Rank Score" },
      ],
    },
  },
  {
    number: "4",
    title: "Fair Ranking. Real Recognition.",
    Icon: TrophyIcon,
    gradient: "from-emerald-400 to-emerald-600",
    titleColor: "text-emerald-600",
    panelBg: "bg-emerald-50",
    nodeColor: "bg-violet-500",
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
      steps: [
        { glyph: "🛡️", label: "Submit" },
        { glyph: "▶️", label: "Ranked" },
        { glyph: "📈", label: "Evaluated" },
        { glyph: "⭐", label: "Recognized" },
      ],
    },
  },
  {
    number: "5",
    title: "Growth & Monetization Opportunities",
    Icon: WalletIcon,
    gradient: "from-orange-400 to-orange-500",
    titleColor: "text-orange-500",
    panelBg: "bg-orange-50",
    nodeColor: "bg-orange-400",
    description: "Turn your content into real opportunities and long-term growth.",
    bullets: [
      "Unlock brand collaborations",
      "Attract sponsorships & partnerships",
      "Monetization tools coming soon",
    ],
    visual: {
      type: "steps",
      label: "Future Opportunities",
      steps: [
        { glyph: "🤝", label: "Brand Deals" },
        { glyph: "🎁", label: "Sponsorships" },
        { glyph: "💰", label: "Revenue Share" },
        { glyph: "👑", label: "Premium" },
      ],
    },
  },
  {
    number: "6",
    title: "Community & Support",
    Icon: UsersIcon,
    gradient: "from-violet-400 to-violet-600",
    titleColor: "text-violet-600",
    panelBg: "bg-violet-50",
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
                {/* Icon — 3D gradient square */}
                <benefit.Icon gradient={benefit.gradient} />

                {/* Text content */}
                <div>
                  <h3 className={`text-lg font-extrabold ${benefit.titleColor}`}>
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

                {/* Right-side visual — colored panel, behavior depends on visual.type */}
                <div
                  className={`rounded-2xl p-4 text-center shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${benefit.panelBg}`}
                >
                  {/* --- stat: mini rising bar chart --- */}
                  {benefit.visual.type === "stat" && (
                    <div className="text-left">
                      <p className="text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <p className={`mt-1 text-2xl font-extrabold ${benefit.titleColor}`}>
                        {benefit.visual.value}
                      </p>
                      <p className="mb-3 text-[10px] text-rc-gray-600">
                        {benefit.visual.sub}
                      </p>
                      <div className="flex h-12 items-end gap-1.5">
                        {[30, 45, 60, 80, 100].map((h, idx) => (
                          <span
                            key={idx}
                            style={{ height: `${h}%`, opacity: 0.4 + idx * 0.15 }}
                            className={`w-4 rounded-t-md transition-all duration-300 group-hover:translate-y-0 ${benefit.barColor}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* --- ring: real conic-gradient donut --- */}
                  {benefit.visual.type === "ring" && (
                    <>
                      <p className="text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <div className="relative mx-auto my-2 flex h-24 w-24 items-center justify-center rounded-full">
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `conic-gradient(${benefit.ringColor} ${benefit.visual.percent}%, #ffffff ${benefit.visual.percent}% 100%)`,
                          }}
                        />
                        <div className={`absolute inset-2 rounded-full ${benefit.panelBg}`} />
                        <span className={`relative text-lg font-extrabold ${benefit.titleColor}`}>
                          {benefit.visual.value}
                        </span>
                      </div>
                      <ul className="space-y-0.5 text-left text-[10px] text-rc-gray-600">
                        {benefit.visual.stats.map((s) => (
                          <li key={s} className="flex items-center gap-1">
                            <span className={benefit.titleColor}>✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* --- icons: colored circle icon nodes --- */}
                  {benefit.visual.type === "icons" && (
                    <>
                      <p className="mb-3 text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {benefit.visual.items.map((item) => (
                          <div
                            key={item.label}
                            className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-105"
                          >
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm text-white shadow-sm ${benefit.chipColor}`}
                            >
                              {item.glyph}
                            </span>
                            <span className="text-[9px] font-semibold text-rc-black">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* --- steps: colored circle nodes with connectors --- */}
                  {benefit.visual.type === "steps" && (
                    <>
                      <p className="mb-3 text-[10px] font-semibold text-rc-gray-600">
                        {benefit.visual.label}
                      </p>
                      <div className="flex items-start justify-between">
                        {benefit.visual.steps.map((step, idx) => (
                          <div key={step.label} className="flex flex-1 items-center">
                            <div className="flex flex-col items-center gap-1">
                              <span
                                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm text-white shadow-sm ${benefit.nodeColor}`}
                                style={{ opacity: 0.55 + idx * 0.15 }}
                              >
                                {step.glyph}
                              </span>
                              <span className="text-[8px] font-bold text-rc-black">
                                {step.label}
                              </span>
                            </div>
                            {idx < benefit.visual.steps.length - 1 && (
                              <span
                                aria-hidden
                                className="mx-0.5 mb-3 h-px flex-1 border-t border-dashed border-rc-gray-300"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* --- avatars --- */}
                  {benefit.visual.type === "avatars" && (
                    <>
                      <div className="flex justify-center -space-x-2">
                        {["from-violet-300 to-violet-500", "from-pink-300 to-pink-500", "from-blue-300 to-blue-500", "from-emerald-300 to-emerald-500", "from-orange-300 to-orange-500"].map(
                          (g, idx) => (
                            <span
                              key={idx}
                              className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br shadow-sm ${g}`}
                            />
                          )
                        )}
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