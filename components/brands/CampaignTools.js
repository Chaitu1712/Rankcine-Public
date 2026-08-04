import Reveal from "@/components/ui/Reveal";

const tools = [
  {
    glyph: "🎯",
    title: "Smart Targeting",
    description: "Reach rankers by taste, tier and category.",
    color: "bg-violet-500",
  },
  {
    glyph: "📣",
    title: "Native Promotion",
    description: "Live inside the ranked discovery feed.",
    color: "bg-teal-400",
  },
  {
    glyph: "📊",
    title: "Real-time Metrics",
    description: "Track votes, lift, sentiment & ROAS.",
    color: "bg-pink-400",
  },
  {
    glyph: "👥",
    title: "Audience Reach",
    description: "2.1M+ engaged rankers across 120 countries.",
    color: "bg-sky-300",
  },
  {
    glyph: "📈",
    title: "Trend Boost",
    description: "Amplify campaigns riding cultural moments.",
    color: "bg-indigo-500",
  },
  {
    glyph: "⚡",
    title: "Always-On Speed",
    description: "Launch in minutes, optimize in real-time.",
    color: "bg-emerald-400",
  },
];

export default function CampaignTools() {
  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="mb-2 text-sm text-rc-gray-600">What you get ?</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-rc-black sm:text-4xl">
              Campaign tools
              <br />
              <span className="text-rc-purple">built for</span>
              <br />
              attention.
            </h2>
          </Reveal>

          {/* Target/dartboard illustration placeholder — swap for the
              real Figma graphic once available. */}
          <Reveal delay={100}>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-teal-200 to-sky-200 text-5xl shadow-inner transition-transform duration-500 hover:rotate-12">
              🎯
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 100}>
              <div className="group flex flex-col items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${tool.color}`}
                >
                  {tool.glyph}
                </span>
                <h3 className="text-sm font-extrabold text-rc-black">
                  {tool.title}
                </h3>
                <p className="text-xs text-rc-gray-600">{tool.description}</p>
                <span className="h-0.5 w-8 bg-rc-purple/40 transition-all duration-300 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
