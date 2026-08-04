import Reveal from "@/components/ui/Reveal";

const applicationChecklist = [
  { glyph: "👤", label: "Profile Information", bg: "bg-sky-100" },
  { glyph: "▶️", label: "Content Samples", bg: "bg-pink-100" },
  { glyph: "🔗", label: "Social Links", bg: "bg-violet-100" },
  { glyph: "👥", label: "Audience Insights", bg: "bg-amber-100" },
  { glyph: "🏆", label: "Achievements", bg: "bg-emerald-100" },
];

const evaluationPoints = [
  { glyph: "🛡️", title: "Fair Evaluation", description: "Every application is reviewed transparently." },
  { glyph: "📊", title: "Data Driven", description: "Decisions based on real criteria and analysis." },
  { glyph: "🏆", title: "Quality First", description: "Only the best creators get selected." },
];

export default function OnboardingProcess() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-2 flex items-center gap-1 text-sm text-rc-gray-600">
          Influencer Onboarding <span aria-hidden>→</span>
        </p>
      </Reveal>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <Reveal delay={100}>
          <h2 className="font-display text-4xl font-extrabold text-rc-black sm:text-5xl">
            Submit. Review.
            <br />
            <span className="text-rc-purple">Get Approved.</span>
          </h2>
          <p className="mt-3 max-w-md text-sm text-rc-gray-600">
            Every influencer goes through a fair review process. We analyze,
            evaluate, and select the best to keep RankCine authentic and
            trusted.
          </p>
        </Reveal>

        {/* Application checklist mockup */}
        <Reveal delay={150}>
          <div className="relative mx-auto max-w-xs rounded-2xl bg-white p-4 shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <p className="mb-3 text-xs font-bold text-rc-black">
              Influencer Application
            </p>
            <ul className="flex flex-col gap-2">
              {applicationChecklist.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-xs transition-transform duration-200 hover:translate-x-1"
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md text-xs ${item.bg}`}
                  >
                    {item.glyph}
                  </span>
                  <span className="flex-1 font-medium text-rc-black">
                    {item.label}
                  </span>
                  <span className="text-emerald-500">✓</span>
                </li>
              ))}
            </ul>

            {/* Floating decorative cards */}
            <span className="absolute -right-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500 text-white shadow-lg transition-transform duration-300 hover:scale-110">
              ▶
            </span>
            <span className="absolute -right-10 top-1/2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white shadow-lg transition-transform duration-300 hover:scale-110">
              🖼️
            </span>
            <span className="absolute -right-6 bottom-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
              ⬆️
            </span>
          </div>
        </Reveal>
      </div>

      {/* Evaluation points row */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {evaluationPoints.map((point, i) => (
          <Reveal key={point.title} delay={i * 100}>
            <div className="flex items-start gap-3 transition-transform duration-200 hover:-translate-y-1">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rc-purple-light text-lg transition-transform duration-300 hover:scale-110">
                {point.glyph}
              </span>
              <div>
                <p className="text-sm font-bold text-rc-black">
                  {point.title}
                </p>
                <p className="text-xs text-rc-gray-600">
                  {point.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
