"use client";

// This section has one small interactive piece (picking a content
// type in "Rank as Per Your Choice"), so it needs "use client".

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const contentChoices = [
  { key: "movies", glyph: "🎬", label: "Movies" },
  { key: "webSeries", glyph: "📺", label: "Web Series" },
  { key: "shortFilms", glyph: "🎞️", label: "Short Films" },
  { key: "videos", glyph: "▶️", label: "Videos" },
  { key: "creators", glyph: "👤", label: "Creators" },
];

const evaluationFactors = [
  { glyph: "⭐", label: "Content Quality", bg: "bg-violet-100" },
  { glyph: "❤️", label: "Engagement", bg: "bg-pink-100" },
  { glyph: "🎯", label: "Relevance", bg: "bg-sky-100" },
  { glyph: "👥", label: "Audience Impact", bg: "bg-emerald-100" },
  { glyph: "📈", label: "Consistency", bg: "bg-amber-100" },
  { glyph: "🛡️", label: "Authenticity", bg: "bg-indigo-100" },
];

const actionFlow = [
  { glyph: "👁", label: "You Rank", bg: "bg-violet-100" },
  { glyph: "📈", label: "Content Climbs", bg: "bg-emerald-100" },
  { glyph: "👥", label: "More Visibility", bg: "bg-pink-100" },
  { glyph: "⭐", label: "Creators Grow", bg: "bg-amber-100" },
  { glyph: "🏆", label: "Community Wins", bg: "bg-violet-100" },
];

export default function WhatYouDo() {
  const [selectedChoice, setSelectedChoice] = useState("movies");

  return (
    <div className="mt-16">
      <p className="mb-4 flex items-center gap-1 text-sm font-extrabold text-rc-purple-dark">
        What you do <span aria-hidden>→</span>
      </p>

      {/* --- Rank as Per Your Choice --- */}
      <Reveal>
        <h3 className="text-xl font-extrabold text-rc-black">
          Rank as Per
          <br />
          Your Choice
        </h3>
        <span className="mt-1 block h-0.5 w-8 bg-rc-purple" />
        <p className="mt-2 text-xs text-rc-gray-600">
          Choose what you love. Rank what matters.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {contentChoices.map((choice) => {
            const isSelected = choice.key === selectedChoice;
            return (
              <button
                key={choice.key}
                type="button"
                onClick={() => setSelectedChoice(choice.key)}
                className={`flex w-24 flex-col items-center gap-2 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isSelected
                    ? "border-rc-purple bg-rc-purple-light/40 shadow-md"
                    : "border-rc-gray-100 bg-white"
                }`}
              >
                <span className="text-2xl">{choice.glyph}</span>
                <span className="text-xs font-semibold text-rc-black">
                  {choice.label}
                </span>
                <span
                  className={`h-3 w-3 rounded-full border-2 transition-colors duration-200 ${
                    isSelected
                      ? "border-rc-purple bg-rc-purple"
                      : "border-rc-gray-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* --- We Evaluate What Matters --- */}
      <Reveal delay={100}>
        <div className="mt-12">
          <h3 className="text-xl font-extrabold text-rc-black">
            We Evaluate
            <br />
            What Matters
          </h3>
          <span className="mt-1 block h-0.5 w-8 bg-rc-purple" />
          <p className="mt-2 text-xs text-rc-gray-600">
            Transparent factors that determine every rank.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            {evaluationFactors.map((factor) => (
              <div
                key={factor.label}
                className={`flex w-28 flex-col items-center gap-2 rounded-2xl p-4 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-md ${factor.bg}`}
                style={{ clipPath: "none" }}
              >
                <span className="text-2xl">{factor.glyph}</span>
                <span className="text-xs font-semibold text-rc-black">
                  {factor.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* --- Your Action. Real Impact. --- */}
      <Reveal delay={200}>
        <div className="mt-12">
          <h3 className="text-xl font-extrabold text-rc-black">
            Your Action.
            <br />
            Real Impact.
          </h3>
          <p className="mt-2 max-w-sm text-xs text-rc-gray-600">
            Your rankings influence trends, visibility and recognition.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {actionFlow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-transform duration-300 hover:scale-110 ${step.bg}`}
                  >
                    {step.glyph}
                  </span>
                  <span className="text-[10px] font-semibold text-rc-black">
                    {step.label}
                  </span>
                </div>
                {i < actionFlow.length - 1 && (
                  <span className="text-rc-purple" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
