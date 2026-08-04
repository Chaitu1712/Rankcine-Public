import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const flowSteps = [
  {
    number: "01",
    glyph: "⬆️",
    title: "Upload Content",
    items: ["Video", "Poster", "Metadata", "Description"],
  },
  {
    number: "02",
    glyph: "🛡️",
    title: "Admin Verification",
    items: ["Review", "Quality", "Copyright", "Standards", "Metadata Check"],
  },
  {
    number: "03",
    glyph: "🗄️",
    title: "Published",
    items: ["Visible on RankCine", "Added to Discovery Feed", "Available for Ranking"],
  },
  {
    number: "04",
    glyph: "👥",
    title: "Community Engagement",
    items: ["Rankers vote", "Influencers promote", "Brands discover", "Audience interacts"],
  },
  {
    number: "05",
    glyph: "🏆",
    title: "Performance",
    items: ["Insights", "Reach", "Ranking", "Growth", "Badges"],
  },
];

export default function PublishingFlow() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-6 text-xl font-extrabold text-rc-purple">
          Fuel the ranking ecosystem →
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-3xl bg-rc-purple-light/20 p-8">
          <p className="text-center text-[10px] font-bold tracking-wide text-rc-purple">
            HOW PUBLISHING WORKS
          </p>
          <h3 className="text-center text-2xl font-extrabold text-rc-black">
            From Upload <span className="text-rc-purple">to Impact</span>
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {flowSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="group relative flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-rc-purple-dark text-[10px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>

                  <span className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-rc-purple-light text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {step.glyph}
                  </span>

                  <h4 className="mt-3 text-sm font-extrabold text-rc-black">
                    {step.title}
                  </h4>

                  <ul className="mt-2 flex flex-col gap-1 text-left">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1 text-[11px] text-rc-gray-600"
                      >
                        <span className="text-emerald-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>

                  {/* Connector arrow between cards, hidden on last card
                      and hidden below lg (mobile stacks vertically) */}
                  {i < flowSteps.length - 1 && (
                    <span className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-lg text-rc-purple transition-transform duration-300 group-hover:translate-x-1 lg:block">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Closing app-store CTA */}
      <Reveal delay={200}>
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
    </section>
  );
}
