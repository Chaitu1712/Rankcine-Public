"use client";

// This section has a row of pill tabs (Rankers / Promoters / Publisher).
// Clicking a tab swaps the three cards shown below it. All the CONTENT
// for every tab lives in the `tabsData` object below — the component
// itself just reads whichever tab is currently active and renders its
// cards. To add a 4th role later, add one more key to `tabsData`, and
// one more entry to the `tabOrder` array.

import { useState } from "react";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";

const tabOrder = ["rankers", "promoters", "publisher"];

const tabLabels = {
  rankers: "Rankers",
  promoters: "Promoters",
  publisher: "Publisher",
};

const tabsData = {
  rankers: {
    subheading: "See how rankings shape influence, visibility and discovery!",
    cards: [
      {
        number: "01",
        title: "Why rank?",
        subtitle: "Your voice shapes culture",
        variant: "list",
        heroEmoji: "📣",
        items: [
          { glyph: "💬", label: "Your voice steers culture" },
          { glyph: "🏅", label: "Earn tiers & badges" },
          { glyph: "🔍", label: "Discover better content" },
        ],
      },
      {
        number: "02",
        title: "What you do?",
        subtitle: "Simple actions. Real impact.",
        variant: "pills",
        heroEmoji: "▶️",
        pills: [
          { glyph: "👁", label: "Watch" },
          { glyph: "✅", label: "Vote" },
          { glyph: "💬", label: "Comment" },
        ],
      },
      {
        number: "03",
        title: "How it works?",
        subtitle: "Your actions create better rankings",
        variant: "flow",
        steps: [
          "Download app",
          "Open the app",
          "Cast votes",
          "See impact for better content visualization",
        ],
      },
    ],
  },
  promoters: {
    subheading: "See how rankings shape influence, visibility and discovery!",
    cards: [
      {
        number: "01",
        title: "Why promote?",
        variant: "list-detailed",
        items: [
          {
            glyph: "🎯",
            label: "1. Native attention",
            description: "Ranked feed – the most engaged surface in mobile.",
          },
          {
            glyph: "🛡️",
            label: "2. Trust by signal",
            description: "Audiences trust what their tribe ranks.",
          },
          {
            glyph: "📊",
            label: "3. Measurable lift",
            description: "Real-time votes, sentiment and ROAS.",
          },
        ],
      },
      {
        number: "02",
        title: "What you can do?",
        variant: "numbered-list",
        heroEmoji: "📣",
        heroPosition: "bottom",
        items: ["Run campaigns.", "Target tiers.", "Sponsor trends."],
      },
      {
        number: "03",
        title: "How it works?",
        variant: "list-detailed",
        heroEmoji: "🚀",
        items: [
          { glyph: "👤", label: "1. Create", description: "A brand account" },
          {
            glyph: "🚀",
            label: "2. Launch",
            description: "Build a campaign in minutes.",
          },
          {
            glyph: "📈",
            label: "3. Optimize",
            description: "Track in the dashboard, optimize live.",
          },
        ],
      },
    ],
  },
  publisher: {
    subheading: "See how rankings shape influence, visibility and discovery!",
    cards: [
      {
        number: "01",
        title: "Why upload?",
        variant: "list-detailed",
        items: [
          {
            glyph: "⚡",
            label: "1. Built-in discovery",
            description: "Your work enters a ranked feed instantly.",
          },
          {
            glyph: "👥",
            label: "2. Audience signal",
            description: "See exactly who's ranking your content.",
          },
          {
            glyph: "📊",
            label: "3. Tools that scale",
            description: "Analytics, promotion, subscriptions, all in one.",
          },
        ],
      },
      {
        number: "02",
        title: "What tools you get?",
        variant: "numbered-list",
        heroEmoji: "📣",
        heroPosition: "bottom",
        items: ["Upload manager", "Performance dashboard", "Promotion toolkit"],
      },
      {
        number: "03",
        title: "How it works?",
        variant: "list-detailed",
        heroEmoji: "🏅",
        items: [
          {
            glyph: "👤",
            label: "1. Create a Creator account",
            description: "Sign up via Creator Login.",
          },
          {
            glyph: "☁️",
            label: "2. Upload",
            description: "Drag and drop your content.",
          },
          {
            glyph: "📈",
            label: "3. Track and grow",
            description: "Use insights to climb the rankings.",
          },
        ],
      },
    ],
  },
};

// Small helper: renders the dashed vertical line connecting the icon
// badges down a "list-detailed" or "list" card, matching the dotted
// connector visible behind the icons in the screenshot. It's an
// absolutely positioned line sitting BEHIND the icons (z-0), while
// the icons themselves sit in front (z-10 via `relative` on the li).
function ConnectorLine() {
  return (
    <span
      aria-hidden
      className="absolute left-4 top-4 bottom-4 w-px border-l-2 border-dashed border-rc-purple-light"
    />
  );
}

export default function WhyRankcineTabs() {
  const [activeTab, setActiveTab] = useState("rankers");
  const content = tabsData[activeTab];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-2 text-sm text-rc-gray-600">The problem we solve</p>

      <h2
        className="font-display text-4xl font-extrabold text-rc-purple-light sm:text-5xl"
        style={{ WebkitTextStroke: "1px #6C5CE7", color: "#C9BFFF" }}
      >
        Why RANKCINE ?
      </h2>

      <p className="mt-3 max-w-2xl text-lg font-bold text-rc-black">
        {content.subheading}
      </p>

      {/* --- Tab pills --- */}
      <div className="mt-6 inline-flex rounded-pill bg-rc-purple-light/40 p-1">
        {tabOrder.map((tabKey) => {
          const isActive = tabKey === activeTab;
          return (
            <button
              key={tabKey}
              type="button"
              onClick={() => setActiveTab(tabKey)}
              className={`rounded-pill px-5 py-2 text-sm font-bold transition-all duration-200 hover:scale-105 ${
                isActive
                  ? "bg-rc-purple-dark text-white shadow-md"
                  : "text-rc-purple hover:text-rc-purple-dark"
              }`}
            >
              {tabLabels[tabKey]}
            </button>
          );
        })}
      </div>

      {/* --- Cards row ---
          key={activeTab} forces a fresh mount on every tab switch, so
          the Reveal fade-in replays each time instead of only once. */}
      <div key={activeTab} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {content.cards.map((card, i) => (
          <Reveal key={card.number} delay={i * 120}>
            {/* `group` here lets the icon badges/list items react
                to hovering anywhere on the card, not just themselves. */}
            <div className="group flex h-full flex-col rounded-2xl bg-rc-purple-light/20 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-rc-purple-light/40 hover:shadow-xl">
              {/* Card header */}
              <div className="mb-1 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rc-purple-dark text-[10px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {card.number}
                </span>
                <h3 className="text-base font-extrabold text-rc-black">
                  {card.title}
                </h3>
              </div>
              {card.subtitle && (
                <p className="mb-4 text-xs text-rc-gray-600">{card.subtitle}</p>
              )}

              {/* --- variant: "list" --- */}
              {card.variant === "list" && (
                <>
                  <div className="mb-4 flex h-24 items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
                    {card.heroEmoji}
                  </div>
                  <ul className="relative mt-auto flex flex-col gap-3">
                    <ConnectorLine />
                    {card.items.map((item) => (
                      <li
                        key={item.label}
                        className="relative flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
                      >
                        <IconBadge glyph={item.glyph} size="h-8 w-8" />
                        <span className="text-xs font-medium text-rc-black">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* --- variant: "list-detailed" --- */}
              {card.variant === "list-detailed" && (
                <>
                  {card.heroEmoji && (
                    <div className="mb-4 flex h-20 items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
                      {card.heroEmoji}
                    </div>
                  )}
                  <ul className="relative mt-auto flex flex-col gap-4">
                    <ConnectorLine />
                    {card.items.map((item) => (
                      <li
                        key={item.label}
                        className="relative flex items-start gap-3 transition-transform duration-200 hover:translate-x-1"
                      >
                        <IconBadge glyph={item.glyph} size="h-8 w-8" />
                        <div>
                          <p className="text-xs font-bold text-rc-black">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-rc-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* --- variant: "pills" --- */}
              {card.variant === "pills" && (
                <div className="flex flex-1 items-center gap-4">
                  <div className="flex h-28 flex-1 items-center justify-center rounded-xl bg-rc-purple text-4xl transition-transform duration-300 group-hover:scale-105">
                    {card.heroEmoji}
                  </div>
                  <ul className="flex flex-1 flex-col gap-2">
                    {card.pills.map((pill) => (
                      <li
                        key={pill.label}
                        className="flex items-center gap-2 rounded-pill bg-white px-3 py-2 text-xs font-semibold text-rc-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span>{pill.glyph}</span>
                        {pill.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* --- variant: "numbered-list" ---
                  heroPosition controls whether the illustration
                  renders above or below the list (Publisher/Promoter
                  card 2 in the screenshot shows it BELOW). */}
              {card.variant === "numbered-list" && (
                <>
                  {card.heroEmoji && card.heroPosition !== "bottom" && (
                    <div className="mb-4 flex h-20 items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110">
                      {card.heroEmoji}
                    </div>
                  )}
                  <ol className="flex flex-col gap-3">
                    {card.items.map((item, idx) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rc-purple-light text-[11px] font-bold text-rc-purple-dark transition-transform duration-300 group-hover:scale-110">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-rc-black">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                  {card.heroEmoji && card.heroPosition === "bottom" && (
                    <div className="mt-4 flex h-24 items-center justify-center rounded-xl bg-rc-purple/90 text-4xl transition-transform duration-300 group-hover:scale-105">
                      {card.heroEmoji}
                    </div>
                  )}
                </>
              )}

              {/* --- variant: "flow" --- */}
              {card.variant === "flow" && (
                <div className="flex flex-1 items-center gap-4">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-rc-purple/40 text-2xl font-extrabold text-rc-purple transition-transform duration-500 group-hover:rotate-180">
                    RC
                  </div>
                  <ol className="flex flex-1 flex-col gap-2">
                    {card.steps.map((step, idx) => (
                      <li
                        key={step}
                        className="flex items-start gap-2 transition-transform duration-200 hover:translate-x-1"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rc-purple-dark text-[10px] font-bold text-white">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-rc-black">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
