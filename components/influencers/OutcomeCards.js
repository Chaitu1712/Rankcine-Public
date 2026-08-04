import Reveal from "@/components/ui/Reveal";

const outcomes = [
  {
    glyph: "✓",
    iconColor: "text-emerald-600 bg-emerald-100",
    title: "Approved",
    description: "You're in! Start collaborating, promote, earn and grow with RankCine.",
    buttonLabel: "Welcome to the Community! 🎉",
    buttonColor: "bg-emerald-100 text-emerald-700",
    cardBg: "bg-emerald-50/50",
  },
  {
    glyph: "🕐",
    iconColor: "text-amber-600 bg-amber-100",
    title: "Under Review",
    description: "We need a little more time. Our team will get back to you soon.",
    buttonLabel: "Hang tight!",
    buttonColor: "bg-amber-100 text-amber-700",
    cardBg: "bg-amber-50/50",
  },
  {
    glyph: "✕",
    iconColor: "text-red-600 bg-red-100",
    title: "Not Selected",
    description: "Keep improving! You can reapply anytime with better content.",
    buttonLabel: "Try Again",
    buttonColor: "bg-red-100 text-red-700",
    cardBg: "bg-red-50/50",
  },
];

export default function OutcomeCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="text-center text-[10px] font-bold tracking-wide text-rc-purple">
          • FINAL OUTCOME •
        </p>
        <h2 className="text-center text-2xl font-extrabold text-rc-black sm:text-3xl">
          Only the Best <span className="text-rc-purple">Get Selected</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 rounded-3xl border-2 border-fuchsia-400/70 bg-white p-6 shadow-[0_0_40px_rgba(217,70,239,0.15)] sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {outcomes.map((outcome, i) => (
              <Reveal key={outcome.title} delay={i * 100}>
                <div
                  className={`group flex flex-col items-start gap-3 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${outcome.cardBg}`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold transition-transform duration-300 group-hover:scale-110 ${outcome.iconColor}`}
                  >
                    {outcome.glyph}
                  </span>
                  <h3 className="text-base font-extrabold text-rc-black">
                    {outcome.title}
                  </h3>
                  <p className="text-xs text-rc-gray-600">
                    {outcome.description}
                  </p>
                  <span
                    className={`mt-2 rounded-pill px-4 py-2 text-xs font-bold transition-transform duration-200 group-hover:scale-105 ${outcome.buttonColor}`}
                  >
                    {outcome.buttonLabel}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Trophy closing line */}
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-rc-purple-light text-4xl transition-transform duration-300 hover:rotate-6">
                🏆
              </span>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight text-rc-purple">
                  Quality.
                  <br />
                  Trust.
                  <br />
                  Influence.
                </h3>
                <p className="mt-1 text-sm text-rc-gray-600">
                  That&apos;s the Rankcine Promise
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
