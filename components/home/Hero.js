import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_auto_auto]">
      {/* Left: headline + copy + CTAs */}
      <div>
        <h1 className="font-display text-6xl font-extrabold leading-[0.95] text-rc-black text-offset-shadow sm:text-7xl">
          WATCH.
          <br />
          RANK.
          <br />
          <span className="text-rc-purple">BE</span>
          <br />
          <span className="text-rc-purple">HEARD.</span>
        </h1>

        <p className="mt-6 max-w-sm text-sm font-bold text-rc-black">
          Your opinion shapes what rises.
          <br />
          Join millions ranking the content that matters.
        </p>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-rc-gray-600">
          An AI-powered platform that evaluates content quality through user
          engagement, demographic insights, and intelligent ranking
          algorithms.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href='/coming-soon'>
            <button className="rounded-pill bg-rc-black px-6 py-3 text-sm font-bold text-white" style={{ cursor:'pointer'}}>
              Download App →
            </button>
          </a>
          <a href="#demo">
            <button className="rounded-pill bg-rc-purple px-6 py-3 text-sm font-bold text-white" style={{ cursor:'pointer'}}>
              PLATFORM DEMO →
            </button>
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="h-7 w-7 rounded-full border-2 border-white bg-rc-gray-400/60"
              />
            ))}
          </div>
          <p className="text-xs text-rc-gray-600">
            Join thousands ranking content every day
          </p>
        </div>
      </div>

      {/* Center: phone mockup */}
      <PhoneMockup />

      {/* Right: trophy image */}
    <div className="relative hidden h-[520px] w-[250px] lg:block">
  <img
    src="/images/trophy.png"
    alt="Top ranked creator"
    width={220}
    height={420}
    className="absolute right-0 top-28 h-auto w-auto object-contain"
  />
</div>
    </section>
  );
}