// components/brands/WhyBrandsLoveUs.js
//
// "For brands & agencies" section on the Brands page.
// Two cards side by side:
//   Left  -> "Why Brands Love RankCine" (icon + title + description list)
//   Right -> "Brands Win With RankCine" (trophy illustration + checklist)
//
// ICONS: every small icon below is an <img> pointing at /icons/*.png —
// drop your 3D icon PNGs into /public/icons/ using those exact filenames,
// or update the `icon` paths in the arrays to match whatever you name them.
//
// TROPHY: the big illustration is intentionally left empty (just a sized
// placeholder box) — drop your trophy PNG at /public/images/trophy.png,
// or point the <img src> below wherever you upload it.

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

// Left card content — icon, title, description.
// NOTE: swap each `icon` path for your real 3D icon PNG.
const brandBenefits = [
  {
    icon: "/brand/icons/reach.png",
    title: "Massive & Targeted Reach",
    desc: "Connect with millions of entertainment enthusiasts.",
  },
  {
    icon: "/brand/icons/engagement.png",
    title: "High Engagement",
    desc: "Our audience interacts, ranks, comments and shares.",
  },
  {
    icon: "/brand/icons/trust.png",
    title: "Trusted Community",
    desc: "Safe, transparent and community driven platform.",
  },
  {
    icon: "/brand/icons/analytics.png",
    title: "Real-Time Analytics",
    desc: "Track impressions, clicks, engagement and conversions.",
  },
  {
    icon: "/brand/icons/visibility.png",
    title: "Boost Visibility",
    desc: "Increase brand awareness and drive meaningful impact.",
  },
];

// Right card checklist items
const winPoints = [
  "More Reach",
  "More Engagement",
  "More Conversions",
  "Stronger Brand Recall",
  "Long-term Growth",
];

// Decorative confetti dots scattered around the trophy.
// Purely CSS — no image needed. Tweak position/color/size freely,
// or delete this array + its map below if you'd rather the trophy PNG
// bring its own sparkle/confetti baked in.
const confetti = [
  
];

export default function WhyBrandsLoveUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-6 font-display text-lg font-semibold text-rc-gray-600">
          For brands & agencies
        </p>
      </Reveal>

      {/* Outer gradient wrapper matching the screenshot's soft lavender frame */}
      <Reveal>
        <div className="rounded-[2rem] bg-gradient-to-br from-rc-purple-light/60 via-white to-rc-purple-light/60 p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* ---------------------------------------------------------- */}
            {/* LEFT CARD — Why Brands Love RankCine                        */}
            {/* ---------------------------------------------------------- */}
            <div className="rounded-3xl bg-white/70 p-8 shadow-sm backdrop-blur-sm">
              <h3 className="mb-6 font-display text-xl font-extrabold tracking-wide text-rc-purple">
                WHY BRANDS LOVE RANKCINE
              </h3>

              <div className="space-y-10">
                {brandBenefits.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rc-purple-light/70 transition-transform duration-300 hover:scale-105">
                       <img
                        src={item.icon}
                        alt=""
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-rc-black">
                        {item.title}
                      </p>
                      <p className="text-sm text-rc-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* RIGHT CARD — Brands Win With RankCine                       */}
            {/* ---------------------------------------------------------- */}
            <div className="rounded-3xl bg-gradient-to-br from-rc-purple-light/60 to-white p-8 shadow-sm">
              <h3 className="mb-8 font-display text-xl font-extrabold tracking-wide text-rc-purple">
                BRANDS WIN WITH RANKCINE
              </h3>

                <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center">
                {confetti.map((c, i) => (
                  <span
                    key={i}
                    className={`absolute ${c.size} ${c.color} ${c.shape}`}
                    style={{
                      top: c.top,
                      bottom: c.bottom,
                      left: c.left,
                      right: c.right,
                    }}
                  />
                ))}

                {/* TODO: replace src with your uploaded trophy PNG path */}
                <img
                  src="/images/TrophySimple.png"
                  alt="Trophy"
                  className="relative z-10 h-50 w-50 object-contain"
                  
                />
              </div>

              <div className="space-y-4">
                {winPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-rc-purple text-rc-purple">
                      {/* TODO: swap for a real checkmark icon SVG if preferred */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium text-rc-black">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
