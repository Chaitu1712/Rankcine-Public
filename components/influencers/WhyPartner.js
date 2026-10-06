import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Image from "next/image";

// Each reason card. `flow` is the small 3-step mini-diagram inside
// the card (e.g. YOU SHARE → RANKCINE GROWS → COMMUNITY JOINS), and
// `tags` are the 3 small labeled chips at the bottom of the card.
const reasons = [
  {
    number: "01",
    badgeColor: "bg-violet-600",
    title: "PROMOTE",
    titleColor: "text-violet-600",
    heroGlyph:  <Image
      src="/images/Microphone.png"
      alt="Trophy"
      width={150}
      height={150}
      className="object-contain"
    />,
    flow: [
      { glyph: "👤", label: "YOU SHARE" },
      { glyph: "🅁", label: "RANKCINE GROWS" },
      { glyph: "👥", label: "COMMUNITY JOINS" },
    ],
    tags: [
      { glyph: "🔗", label: "Share & Inspire" },
      { glyph: "📊", label: "Increase Visibility" },
      { glyph: "👥", label: "Build Audience" },
    ],
    cardBg: "bg-violet-50",
    cornerColor: "bg-violet-600",
  },
  {
    number: "02",
    badgeColor: "bg-pink-500",
    title: "EARN",
    titleColor: "text-pink-500",
    heroGlyph:  <Image
      src="/images/TrophyPink.png"
      alt="Trophy"
      width={130}
      height={130}
      className="object-contain"
    />,
    flow: [
      { glyph: "📶", label: "PERFORMANCE TRACKED" },
      { glyph: "🎁", label: "REWARDS EARNED" },
      { glyph: "💰", label: "YOU EARN" },
    ],
    tags: [
      { glyph: "🏅", label: "Performance Based" },
      { glyph: "🎁", label: "Exclusive Rewards" },
      { glyph: "💰", label: "Timely Payouts" },
    ],
    cardBg: "bg-pink-50",
    cornerColor: "bg-pink-500",
  },
  {
    number: "03",
    badgeColor: "bg-violet-600",
    title: "COLLABORATE",
    titleColor: "text-violet-600",
    heroGlyph:  <Image
      src="/images/collaborate.png"
      alt="Trophy"
      width={130}
      height={130}
      className="object-contain"
    />,
    flow: [
      { glyph: "🏢", label: "BRANDS CONNECT" },
      { glyph: "🅁", label: "RANKCINE COLLABS" },
      { glyph: "👤", label: "YOU GROW" },
    ],
    tags: [
      { glyph: "⭐", label: "Brand Collabs" },
      { glyph: "📈", label: "Expand Reach" },
      { glyph: "🤝", label: "Long-term Partnerships" },
    ],
    cardBg: "bg-violet-50",
    cornerColor: "bg-violet-600",
  },
];

export default function WhyPartner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-2 text-sm text-rc-gray-600">Why partner ?</p>
        <h2 className="font-display text-4xl font-extrabold text-rc-purple sm:text-5xl">
          Three reasons to join.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {reasons.map((reason, i) => (
          <Reveal key={reason.number} delay={i * 120}>
            <div
              className={`group relative overflow-hidden rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${reason.cardBg}`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold text-white ${reason.badgeColor}`}
                >
                  {reason.number}
                </span>
                <h3 className={`text-sm font-extrabold ${reason.titleColor}`}>
                  {reason.title}
                </h3>
              </div>

              <div className="my-6 flex justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
                {reason.heroGlyph}
              </div>

              {/* Mini flow diagram */}
              <div className="flex items-center justify-between text-center">
                {reason.flow.map((step, si) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex w-16 flex-col items-center gap-1">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-sm">
                        {step.glyph}
                      </span>
                      <span className="text-[8px] font-semibold leading-tight text-rc-gray-600">
                        {step.label}
                      </span>
                    </div>
                    {si < reason.flow.length - 1 && (
                      <span className="text-xs text-rc-gray-400" aria-hidden>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom tags */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-white/60 p-3">
                {reason.tags.map((tag) => (
                  <div
                    key={tag.label}
                    className="flex flex-col items-center gap-1 text-center transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <span className="text-base">{tag.glyph}</span>
                    <span className="text-[8px] font-semibold text-rc-gray-600">
                      {tag.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative corner triangle, matches screenshot */}
              <span
                className={`absolute bottom-0 right-0 h-10 w-10 rounded-tl-3xl opacity-80 ${reason.cornerColor}`}
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
