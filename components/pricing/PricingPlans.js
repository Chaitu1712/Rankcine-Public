import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

// Every plan's copy + feature list lives here. Each feature is either
// a plain string (shown with a green check) or an object with
// `included: false` (shown with a gray X) — see the Free/Pro plans
// below for both cases.
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    tagline: "Get started for free",
    features: [
      { label: "Basic Analytics", included: true },
      { label: "Rankings Access", included: true },
      { label: "Community Access", included: true },
      { label: "AI Insights", included: false },
      { label: "Priority Support", included: false },
    ],
    buttonLabel: "Get Started",
    buttonVariant: "outline-purple",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    tagline: "For growing creators",
    features: [
      { label: "Advanced Analytics", included: true },
      { label: "Competitor Tracking", included: true },
      { label: "Priority Support", included: true },
      { label: "Ad-free Experience", included: true },
      { label: "Custom Reports", included: false },
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "outline-purple",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$12.99",
    period: "/month",
    tagline: "Everything creators need",
    badge: "Most Popular",
    features: [
      { label: "Everything in Pro", included: true },
      { label: "AI Growth Insights", included: true },
      { label: "Custom Reports", included: true },
      { label: "Custom Solutions", included: true },
      { label: "White-label Access", included: true },
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "purple",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "For teams & agencies",
    features: [
      { label: "Everything in Premium", included: true },
      { label: "Dashboard Manager", included: true },
      { label: "Custom Solutions", included: true },
      { label: "Dedicated Manager", included: true },
      { label: "White-label Access", included: true },
    ],
    buttonLabel: "Contact Sales",
    buttonVariant: "outline-purple",
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="flex items-start justify-between">
          <div>
            <p className="mb-2 flex items-center gap-1 text-sm text-rc-gray-600">
              For brands &amp; promoters <span aria-hidden>→</span>
            </p>
            <h1
              className="font-display text-4xl font-extrabold text-rc-purple sm:text-5xl"
              style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.1)" }}
            >
              Pick your altitude.
            </h1>
            <p className="mt-2 text-lg font-bold text-rc-black">
              Start free. Scale as your campaigns climb the leaderboard.
            </p>
          </div>

          {/* Shield/checkmark icon placeholder — swap for the real
              Figma illustration once available. */}
          <span className="hidden text-6xl transition-transform duration-300 hover:rotate-6 sm:block">
            🛡️
          </span>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 rounded-3xl bg-rc-gray-50 p-8">
          <p className="mb-6 text-center text-xs text-rc-gray-600">
            Collaborate, compete, and grow together
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`group relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    plan.highlighted
                      ? "border-2 border-rc-purple ring-2 ring-rc-purple/20"
                      : "border border-rc-gray-100"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-rc-purple px-3 py-1 text-[10px] font-bold text-white shadow-md">
                      ⭐ {plan.badge}
                    </span>
                  )}

                  <p className="text-sm font-bold text-rc-black">{plan.name}</p>

                  <p className="mt-2">
                    <span className="text-3xl font-extrabold text-rc-black transition-transform duration-300 group-hover:scale-105">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs text-rc-gray-600">
                        {plan.period}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-rc-gray-600">
                    {plan.tagline}
                  </p>

                  <ul className="mt-5 flex flex-1 flex-col gap-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-center gap-2 text-xs transition-transform duration-200 hover:translate-x-1 ${
                          feature.included
                            ? "text-rc-black"
                            : "text-rc-gray-400 line-through"
                        }`}
                      >
                        <span
                          className={
                            feature.included ? "text-emerald-500" : "text-rc-gray-400"
                          }
                        >
                          {feature.included ? "✓" : "✕"}
                        </span>
                        {feature.label}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.buttonVariant}
                    className="mt-6 w-full transition-transform duration-200 hover:scale-105"
                  >
                    {plan.buttonLabel}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-8 flex justify-center">
          {/* Wrapped in Next.js <Link> so it's a real navigation, not
              just a styled button that does nothing. `as="span"` on
              Button tells it to render a <span> instead of a
              <button> element, since <Link> already provides the
              clickable/navigable behavior — nesting a real <button>
              inside an <a> tag is invalid HTML. */}
          <Link href="/">
            <Button
              as="span"
              variant="black"
              className="gap-2 transition-transform duration-200 hover:scale-105"
            >
              ← BACK
            </Button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}