import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Floating stat cards around the phone mockup. Data-driven so
// repositioning/adding one is just editing this array.
const floatingStats = [
  { position: "top-6 -left-4", label: "Engagement", value: "+76%", type: "chart" },
  { position: "top-20 right-[-70px]", label: "Your Brand", value: "Ad Campaign", type: "video" },
  { position: "bottom-24 right-[-90px]", label: "Campaign Reach", value: "1.8M+", type: "reach" },
];

export default function BrandsHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left: copy */}
        <Reveal>
          <p className="mb-2 text-sm text-rc-gray-600">For brands &amp; agencies</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-rc-black sm:text-5xl">
            Highlight
            <br />
            your
            <br />
            <span className="text-rc-purple">BRAND.</span>
          </h1>

          <p className="mt-4 max-w-sm text-sm text-rc-gray-600">
            Place your campaign inside the most attention-rich surface in
            mobile: a community-ranked feed.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="outline-purple"
              className="transition-transform duration-200 hover:scale-105"
            >
              Join as BRAND
            </Button>
            <Button
              variant="outline-purple"
              className="transition-transform duration-200 hover:scale-105"
            >
              See Pricing →
            </Button>
          </div>
        </Reveal>

        {/* Right: phone mockup with floating stat cards.
            This whole block is a placeholder layout standing in for
            the real illustration — swap it for the Figma export
            whenever it's ready; the surrounding section spacing
            won't need to change. */}
        <Reveal delay={150}>
          <div className="relative mx-auto flex h-[420px] max-w-sm items-center justify-center">
            {/* Megaphone icon */}
            <span className="absolute -left-4 top-8 text-6xl transition-transform duration-300 hover:-rotate-6">
              📣
            </span>

            {/* Phone frame */}
            <div className="relative z-10 w-56 rounded-[2rem] border-[6px] border-rc-black bg-white p-3 shadow-2xl transition-transform duration-300 hover:scale-105">
              <p className="mb-2 text-center text-xs font-bold text-rc-black">
                RankCine Audience
              </p>
              <div className="rounded-xl bg-rc-purple-light/40 p-3 text-center">
                <p className="text-lg font-extrabold text-rc-purple">2.1M+</p>
                <p className="text-[9px] text-rc-gray-600">Active Users</p>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[8px] text-rc-gray-600">
                <span>Movies</span>
                <span>Web Series</span>
                <span>Shorts</span>
              </div>
              <div className="mt-3">
                <p className="mb-1 text-[9px] font-bold text-rc-black">
                  Top Categories <span className="float-right text-rc-purple">View all</span>
                </p>
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-14 rounded-md bg-rc-gray-100" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-4 w-28 rounded-xl bg-white p-2 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[9px] font-semibold text-rc-gray-600">Engagement</p>
              <p className="text-sm font-extrabold text-emerald-500">+76%</p>
              <span className="text-emerald-400">📈</span>
            </div>

            <div className="absolute -right-4 top-16 w-28 rounded-xl bg-white p-2 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[9px] font-semibold text-rc-gray-600">Your Brand</p>
              <div className="mt-1 flex h-8 items-center justify-center rounded-md bg-rc-purple text-white">
                ▶
              </div>
            </div>

            <div className="absolute -right-6 bottom-16 w-28 rounded-xl bg-white p-2 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[9px] font-semibold text-rc-gray-600">
                👤 Campaign Reach
              </p>
              <p className="text-sm font-extrabold text-rc-purple">1.8M+</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
