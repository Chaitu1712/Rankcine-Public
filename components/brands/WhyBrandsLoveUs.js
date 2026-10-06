import Reveal from "@/components/ui/Reveal";

const brandBenefits = [
  {
    icon: "/brand/icons/reach.png",
    title: "Massive & Targeted Reach",
    desc: "Connect with millions of entertainment enthusiasts globally.",
  },
  {
    icon: "/brand/icons/engagement.png",
    title: "High Engagement",
    desc: "Our audience doesn't just watch—they interact, rank, and critique.",
  },
  {
    icon: "/brand/icons/trust.png",
    title: "Bot-Free Consensus",
    desc: "Our 0.5 Consensus Math engine mathematically eliminates review bombing and fake scores.",
  },
  {
    icon: "/brand/icons/analytics.png",
    title: "Real-Time Demographics",
    desc: "Track impressions, exact audience age brackets, and conversion ROI live.",
  },
  {
    icon: "/brand/icons/visibility.png",
    title: "Consensus-Driven Vouchers",
    desc: "Fund Lucky Draws where only the most accurate, attentive Rankers earn your RC-<HEX> promo codes.",
  },
];

const winPoints = [
  "Verified User Interaction",
  "Zero Bot Fraud",
  "Targeted Demographics",
  "Stronger Brand Recall",
  "Long-term Engagement Growth",
];

const confetti = [];

export default function WhyBrandsLoveUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-6 font-display text-lg font-semibold text-rc-gray-600">
          For brands & agencies
        </p>
      </Reveal>

      <Reveal>
        <div className="rounded-[2rem] bg-gradient-to-br from-rc-purple-light/60 via-white to-rc-purple-light/60 p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2">
            
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

                <img
                  src="/images/TrophySimple.png"
                  alt="Rank Cine Brand Analytics and Campaign Reach Trophy"
                  className="relative z-10 h-50 w-50 object-contain"
                />
              </div>

              <div className="space-y-4">
                {winPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-rc-purple text-rc-purple">
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