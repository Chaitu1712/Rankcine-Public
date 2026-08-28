import Reveal from "@/components/ui/Reveal";
import Icon3D from "./Icon3D";

const actions = [
  {
    glyph: "❤️",
    gradientFrom: "#8B7BFF",
    gradientTo: "#6C5CE7",
    title: "Discover content",
    titleColor: "text-rc-black",
    description: "Browse fresh content from real creators across categories.",
  },
  {
    glyph: "↑",
    gradientFrom: "#34D399",
    gradientTo: "#059669",
    title: "Rank what you love",
    titleColor: "text-emerald-600",
    description: "Your rankings. Decide what deserve more visibility.",
  },
  {
    glyph: "📊",
    gradientFrom: "#F472B6",
    gradientTo: "#DB2777",
    title: "Give your opinion",
    titleColor: "text-pink-600",
    description: "Top-ranked content gets boosted to reach more people.",
  },
  {
    glyph: "★",
    gradientFrom: "#38BDF8",
    gradientTo: "#0284C7",
    title: "Make an impact",
    titleColor: "text-sky-600",
    description: "Support creators, inspire others, and be a part of something bigger.",
  },
];

export default function StartActions() {
  return (
    <div className="rounded-3xl border-2 border-sky-400/60 bg-white p-4 shadow-[0_0_30px_rgba(56,189,248,0.15)] sm:p-6">
      {/* grid-cols-1 on mobile so cards stack full width and stay
          readable; 2 columns once there's room at sm, full 4 across
          only at lg where there's enough horizontal space. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action, i) => (
          <Reveal key={action.title} delay={i * 100}>
            <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-rc-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Icon3D
                glyph={action.glyph}
                gradientFrom={action.gradientFrom}
                gradientTo={action.gradientTo}
              />
              <h3 className={`text-base font-extrabold ${action.titleColor}`}>
                {action.title}
              </h3>
              <p className="text-xs text-rc-gray-600">{action.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}