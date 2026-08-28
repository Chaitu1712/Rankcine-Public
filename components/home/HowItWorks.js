"use client";

// "use client" is now required because the timeline at the bottom
// needs to know which step card is currently hovered — and since the
// timeline and the cards are SIBLINGS (not nested inside each other),
// plain CSS `group-hover` can't connect them. We track the hovered
// step index in React state instead, and both the cards and the
// timeline read from that same state.

import { useState } from "react";
import {
  WatchIcon,
  RankIcon,
  InfluenceIcon,
  BeHeardIcon,
} from "./icons/StepIcons";
import Reveal from "@/components/ui/Reveal";
import OutlinedHeading from "@/components/ui/OutlinedHeading";

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
  // null = nothing hovered. Otherwise 0–3, matching the step's index.
  const [hoveredStep, setHoveredStep] = useState(null);

  // How far along the timeline the purple "fill" should reach, as a
  // percentage. Hovering step index 0 fills to the first dot (0%),
  // hovering the last step fills the entire line (100%).
  const stepWidthPercent = 100 / (steps.length - 1);
  const fillPercent = hoveredStep === null ? 0 : hoveredStep * stepWidthPercent;

  return (
    <section className="bg-gradient-to-br from-white via-white to-rc-purple-light/60 px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-white to-pink-50 p-10">
        <p className="mb-2 text-sm text-rc-gray-600">How it works</p>

        <OutlinedHeading className="text-5xl tracking-tight sm:text-6xl">
          Your opinion always matters !
        </OutlinedHeading>

        <p className="mt-3 font-display text-2xl font-extrabold text-rc-purple-dark">
          From a tap to a trend.
        </p>

        {/* Steps row */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 120}
              className="group relative"
            >
              <div
                // Hovering ANY part of this card (icon, badge, text)
                // sets the shared hover state to this step's index —
                // that's what lets the timeline below react to it.
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Numbered badge */}
                <span className="absolute -top-4 left-8 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rc-purple-dark text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>

                {/* Card */}
                <div className="flex h-full flex-col items-start rounded-2xl bg-white/80 p-6 pt-10 shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:ring-rc-purple/30">
                  <div className="flex w-full justify-center scale-150 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-[1.65]">
                    <step.Icon />
                  </div>

                  <h3 className="relative   mt-4 pb-1 text-lg font-extrabold text-rc-purple-dark">
                    {step.title}
                    <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-rc-purple transition-all duration-300 group-hover:w-full" />
                  </h3>

                  <p className="mt-2 text-sm text-rc-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <span className="absolute right-[-28px] top-1/2 hidden -translate-y-1/2 text-xl text-rc-purple transition-transform duration-300 group-hover:translate-x-1 lg:block">
                    ⇢
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom timeline */}
        <div className="relative mt-10 hidden items-center lg:flex">
          {/* Base line, always visible underneath */}
          <div className="h-[2px] w-full bg-gradient-to-r from-rc-purple/30 to-pink-300/30" />

          {/* Glowing fill line — width animates smoothly based on
              hoveredStep. This sits on top of the base line. */}
          <div
            className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-pill bg-gradient-to-r from-rc-purple to-pink-400 shadow-[0_0_12px_rgba(108,92,231,0.7)] transition-all duration-500 ease-out"
            style={{ width: `${fillPercent}%` }}
          />

          {/* Dots — filled purple once the fill line has reached (or
              passed) them, otherwise a plain outlined circle. */}
          {steps.map((step, i) => {
            const dotPercent = i * stepWidthPercent;
            const isFilled = hoveredStep !== null && dotPercent <= fillPercent;
            return (
              <span
                key={step.number}
                className={`absolute h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                  isFilled
                    ? "scale-125 border-rc-purple bg-rc-purple shadow-[0_0_10px_rgba(108,92,231,0.8)]"
                    : "border-rc-purple/50 bg-white"
                }`}
                style={{
                  left: `${dotPercent}%`,
                  transform: "translateX(-50%)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
