import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
 

const quickSteps = [
  { glyph: "📋", bg: "bg-violet-100", title: "Fill the Influencer Form", description: "Share your details, content niche, and social media links." },
  { glyph: "🛡️", bg: "bg-pink-100", title: "Get Verified", description: "Our team reviews your application and verifies your profile." },
  { glyph: "✅", bg: "bg-emerald-100", title: "Get Onboarded", description: "Access your influencer dashboard and start creating impact." },
];

const journeySteps = [
  { number: "01", glyph: "📝", color: "bg-violet-600", title: "Fill the Form", description: "Submit your details and social media information." },
  { number: "02", glyph: "🔍", color: "bg-pink-500", title: "Verification", description: "Our team reviews your application carefully." },
  { number: "03", glyph: "✉️", color: "bg-amber-500", title: "Get Verified", description: "You'll receive an email once you're verified." },
  { number: "04", glyph: "👤", color: "bg-emerald-500", title: "Get Onboarded", description: "Access your dashboard and start your journey." },
];

export default function VerifiedCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* --- Become a Verified Influencer --- */}
      <Reveal>
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-rc-purple-light/20 p-8 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm text-rc-purple">Ready to join?</p>
            <h2 className="text-3xl font-extrabold text-rc-black sm:text-4xl">
              Become a <span className="text-rc-purple">Verified</span>{" "}
              Influencer
            </h2>
            <span className="mt-2 block h-0.5 w-10 bg-rc-purple" />
            <p className="mt-3 max-w-sm text-sm text-rc-gray-600">
              Fill out a quick form, get verified by our team and start your
              journey with RankCine.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {quickSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-3 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-300 hover:scale-110 ${step.bg}`}
                  >
                    {step.glyph}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-rc-black">
                      {step.title}
                    </p>
                    <p className="text-xs text-rc-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
<a href="#influencer-form">
  <Button
    variant="purple"
    className="mt-6 transition-transform duration-200 hover:scale-105"
  >
    Fill the Influencer Form →
  </Button>
</a>
            <p className="mt-2 text-xs text-rc-gray-600">
              🔒 Secure. Simple. Verified.
            </p>
          </div>

          {/* Clipboard illustration placeholder */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/verifiedinfluencer.png"
              alt="Trophy"
              width={450}
              height={450}
              className="object-contain"
            />
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rc-purple-light text-sm">
                👥
              </span>
              <p className="max-w-[220px] text-[11px] text-rc-gray-600">
                Once verified, you&apos;ll be part of an exclusive community
                of influencers on RankCine.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* --- Your Onboarding Journey --- */}
      <Reveal delay={150}>
        <h3 className="mt-14 text-center text-2xl font-extrabold text-rc-black sm:text-3xl">
          Your <span className="text-rc-purple">Onboarding</span> Journey
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="group relative flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${step.color}`}
                >
                  {step.glyph}
                </span>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-pill bg-white px-2 py-0.5 text-[9px] font-bold text-rc-black shadow-sm">
                  {step.number}
                </span>
                <p className="mt-3 text-sm font-extrabold text-rc-black">
                  {step.title}
                </p>
                <p className="mt-1 max-w-[160px] text-xs text-rc-gray-600">
                  {step.description}
                </p>

                {i < journeySteps.length - 1 && (
                  <span className="absolute right-[-28px] top-8 hidden text-rc-purple transition-transform duration-300 group-hover:translate-x-1 lg:block">
                    ⇢
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-rc-purple-light/20 p-6 text-center sm:flex-row sm:text-left">
          <span className="text-3xl">🥇</span>
          <div>
            <p className="text-sm font-extrabold text-rc-black">
              Verified. Trusted. Onboarded.
            </p>
            <p className="text-xs text-rc-gray-600">
              We ensure a safe and trusted space for Influencers to grow and
              collaborate.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}