import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

const leftCriteria = [
  {
    glyph: "🛡️",
    color: "bg-violet-100",
    title: "Profile Authenticity",
    description: "Verifying real identity, bio completeness and credibility.",
  },
  {
    glyph: "▶️",
    color: "bg-sky-100",
    title: "Content Quality",
    description: "Assessing originality, clarity, value and consistency.",
  },
  {
    glyph: "👥",
    color: "bg-violet-100",
    title: "Engagement Rate",
    description: "Analyzing likes, comments, shares and saves.",
  },
];

const rightCriteria = [
  {
    glyph: "👥",
    color: "bg-emerald-100",
    title: "Audience Insights",
    description: "Evaluating audience quality, demographics and activity.",
  },
  {
    glyph: "📈",
    color: "bg-amber-100",
    title: "Growth & Consistency",
    description: "Tracking growth pattern, content frequency and stability.",
  },
  {
    glyph: "❤️",
    color: "bg-pink-100",
    title: "Community Impact",
    description: "Measuring influence, trust and community connection.",
  },
];

export default function EvaluationCriteria() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="rounded-3xl border-2 border-sky-400/70 bg-white p-6 shadow-[0_0_40px_rgba(56,189,248,0.15)] sm:p-8">
          <p className="text-center text-[10px] font-bold tracking-wide text-rc-purple">
            • HOW WE EVALUATE •
          </p>
          <h2 className="text-center text-2xl font-extrabold text-rc-black sm:text-3xl">
            Our Analysis is Based on{" "}
            <span className="text-rc-purple">Key Criteria</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              {leftCriteria.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="group flex items-start gap-3 rounded-xl bg-rc-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                    >
                      {item.glyph}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-rc-black">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-rc-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Center scoring badge */}
            <Reveal delay={150}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-35 w-35 items-center justify-center rounded-full bg-rc-purple-light/60 shadow-inner transition-transform duration-500 hover:scale-105">
                  <span className="flex h-30 w-30 items-center justify-center rounded-full bg-rc-purple text-3xl text-white shadow-lg">
                    <Image
                      src="/images/shield.png"
                      alt="Trophy"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </span>
                </div>
                <div className="w-40 rounded-xl bg-rc-gray-50 p-3 text-center">
                  <p className="text-xs font-bold text-rc-black">
                    Scoring System
                  </p>
                  <p className="mt-1 text-[10px] text-rc-gray-600">
                    Each criterion is scored to ensure a fair and consistent
                    evaluation.
                  </p>
                  <p className="mt-1 text-amber-400">★★★★☆</p>
                </div>
              </div>
            </Reveal>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              {rightCriteria.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="group flex items-start gap-3 rounded-xl bg-rc-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                    >
                      {item.glyph}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-rc-black">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-rc-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
