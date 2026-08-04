import Reveal from "@/components/ui/Reveal";
import {
  WatchIcon,
  RankIcon,
  InfluenceIcon,
  BeHeardIcon,
} from "./icons/StepIcons";

const steps = [
  {
    number: "01",
    title: "WATCH",
    description: "Discover hand-picked content.",
    Icon: WatchIcon,
  },
  {
    number: "02",
    title: "RANK",
    description: "Cast your vote in seconds.",
    Icon: RankIcon,
  },
  {
    number: "03",
    title: "INFLUENCE",
    description: "Shape what the world sees.",
    Icon: InfluenceIcon,
  },
  {
    number: "04",
    title: "BE HEARD",
    description: "Earn tiers, badges, voice.",
    Icon: BeHeardIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-white via-white to-rc-purple-light/60 px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-white to-pink-50 p-10">
        <p className="mb-2 text-sm text-rc-gray-600">How it works</p>

        <h2
          className="font-display text-5xl font-extrabold uppercase tracking-tight text-rc-purple-light sm:text-6xl"
          style={{
            WebkitTextStroke: "1.5px #6C5CE7",
            color: "#C9BFFF",
          }}
        >
          Your opinion always matters !
        </h2>

        <p className="mt-3 text-2xl font-extrabold text-rc-purple-dark">
          From a tap to a trend.
        </p>

        {/* Steps row */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            // `group` goes on this outer wrapper (not the inner card
            // div) because the numbered badge and connector arrow are
            // SIBLINGS of the card, not children of it. group-hover:
            // only affects descendants of the element carrying `group`,
            // so it has to live on the common parent of all three.
            <Reveal
              key={step.number}
              delay={i * 120}
              className="group relative"
            >
              {/* Numbered badge — scales up on hover of the whole card area */}
              <span className="absolute -top-4 left-8 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rc-purple-dark text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                {step.number}
              </span>

              {/* Card */}
              <div className="flex h-full flex-col items-start rounded-2xl bg-white/80 p-6 pt-10 shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:ring-rc-purple/30">
                {/* Icon gently scales + rotates on hover */}
                <div className="transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
                  <step.Icon />
                </div>

                <h3 className="relative mt-4 pb-1 text-lg font-extrabold text-rc-purple-dark">
                  {step.title}
                  {/* Underline grows from left to right on hover
                      instead of being a static fixed-width border */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-rc-purple transition-all duration-300 group-hover:w-full" />
                </h3>

                <p className="mt-2 text-sm text-rc-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow — nudges right on hover to suggest
                  "flow" toward the next step. Hidden on last card,
                  hidden on mobile stack. */}
              {i < steps.length - 1 && (
                <span className="absolute right-[-20px] top-1/2 hidden -translate-y-1/2 text-xl text-rc-purple transition-transform duration-300 group-hover:translate-x-1 lg:block">
                  ⇢
                </span>
              )}
            </Reveal>
          ))}
        </div>

        {/* Bottom timeline */}
        <div className="relative mt-10 hidden items-center lg:flex">
          <div className="h-[2px] w-full bg-gradient-to-r from-rc-purple to-pink-300" />
          {steps.map((step, i) => (
            <span
              key={step.number}
              className="absolute h-4 w-4 rounded-full border-2 border-rc-purple bg-white transition-all duration-300 hover:scale-150 hover:bg-rc-purple"
              style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
