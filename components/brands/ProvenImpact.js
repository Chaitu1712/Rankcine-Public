import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "3.4x", label: "Engagement vs. social ads" },
  { value: "62%", label: "Avg. brand lift" },
  { value: "$0.18", label: "Cost per qualified ranker" },
];

export default function ProvenImpact() {
  return (
    <section className="bg-rc-purple-light/30 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-2 flex items-center gap-1 text-sm font-bold text-rc-purple-dark">
            Proven impact <span aria-hidden>→</span>
          </p>
          <h2 className="text-3xl font-extrabold text-rc-gray-600 sm:text-4xl">
            Numbers that move boardrooms.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <p className="text-3xl font-extrabold text-rc-purple">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-rc-gray-600">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
