import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Small feature row under the hero copy (Verified Platform, Global
// Visibility, etc). Data-driven so adding a 5th item is one line.
const trustFeatures = [
  { glyph: "🛡️", label: "Verified Platform" },
  { glyph: "🌐", label: "Global Visibility" },
  { glyph: "👤", label: "Ranker Driven" },
  { glyph: "🏆", label: "Real Impact" },
];

// The colored "content type" cards floating beside the laptop mockup.
const uploadPreviewCards = [
  { label: "Movie", color: "bg-indigo-500" },
  { label: "Web Series", color: "bg-pink-500" },
  { label: "Short Films", color: "bg-amber-500" },
  { label: "Video", color: "bg-violet-500" },
];

// The 3 destination bubbles on the right of the laptop (what your
// upload flows into).
const destinations = [
  { glyph: "👥", label: "Rankers" },
  { glyph: "📣", label: "Prometers" },
  { glyph: "🏆", label: "Trending Rankings" },
];

// "What You Upload" row.
const contentTypes = [
  { glyph: "🎬", label: "Movies" },
  { glyph: "📺", label: "Web Series" },
  { glyph: "🎞️", label: "Short Films" },
  { glyph: "▶️", label: "Videos" },
  { glyph: "✂️", label: "Trailers & Clips" },
];

// Small tag pills next to the content type icons.
const contentTags = [
  { glyph: "🔷", label: "HD Quality" },
  { glyph: "✅", label: "Verified Content" },
  { glyph: "🏷️", label: "Metadata" },
  { glyph: "🎭", label: "Genre" },
  { glyph: "🌍", label: "Language" },
  { glyph: "📍", label: "Region" },
];

export default function PublisherHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h1
          className="text-center font-display text-3xl font-extrabold uppercase tracking-tight text-rc-black sm:text-4xl md:text-5xl"
          style={{ textShadow: "0 0 24px rgba(236,72,153,0.35)" }}
        >
          Build the feed. Shape the future.
        </h1>
      </Reveal>

      {/* Main panel */}
      <Reveal delay={100}>
        <div className="mt-10 grid grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-br from-rc-purple-light/40 to-white p-8 lg:grid-cols-2">
          {/* Left: copy + CTAs + trust row */}
          <div>
            <span className="inline-block rounded-pill bg-rc-purple-light px-3 py-1 text-[10px] font-bold tracking-wide text-rc-purple-dark">
              FOR PUBLISHERS
            </span>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-rc-black sm:text-3xl">
              Upload Once.
              <br />
              Power <span className="text-rc-purple">Every Ranking.</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm text-rc-gray-600">
              The content you publish becomes the foundation of RankCine&apos;s
              ranking ecosystem.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="purple" className="transition-transform duration-200 hover:scale-105">
                Join as Publisher →
              </Button>
              <Button
                variant="outline-purple"
                className="gap-1 transition-transform duration-200 hover:scale-105"
              >
                ▶ Learn More
              </Button>
            </div>

            {/* Trust features row */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-col items-center gap-1 text-center transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="text-xl">{feature.glyph}</span>
                  <span className="text-[10px] font-semibold text-rc-gray-600">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: laptop upload mockup — placeholder graphic.
              Replace this whole block with the real illustration
              exported from Figma once available; the surrounding
              layout (content cards left, destination bubbles right)
              won't need to change. */}
          <div className="relative flex items-center justify-center gap-4 py-8">
            {/* Floating content-type cards */}
            <div className="flex flex-col gap-2">
              {uploadPreviewCards.map((card) => (
                <div
                  key={card.label}
                  className={`flex h-9 w-24 items-center justify-center rounded-lg text-[10px] font-bold text-white shadow-md transition-transform duration-300 hover:scale-105 ${card.color}`}
                >
                  ▶ {card.label}
                </div>
              ))}
            </div>

            {/* Laptop / upload card placeholder */}
            <div className="flex h-40 w-48 flex-col items-center justify-center rounded-xl border-2 border-rc-black bg-white shadow-xl transition-transform duration-300 hover:scale-105">
              <span className="text-3xl">☁️⬆️</span>
              <p className="mt-2 text-[11px] font-bold text-rc-black">
                Uploading... 80%
              </p>
              <div className="mt-1 h-1.5 w-32 overflow-hidden rounded-pill bg-rc-gray-100">
                <div className="h-full w-4/5 rounded-pill bg-rc-purple" />
              </div>
              <p className="mt-2 text-[10px] font-bold text-rc-purple-dark">
                RankCine
              </p>
            </div>

            {/* Destination bubbles */}
            <div className="flex flex-col gap-3">
              {destinations.map((dest) => (
                <div
                  key={dest.label}
                  className="flex flex-col items-center gap-1 rounded-full bg-white p-3 text-center shadow-md transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="text-lg">{dest.glyph}</span>
                  <span className="w-16 text-[9px] font-semibold text-rc-gray-600">
                    {dest.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* "What You Upload" row */}
      <Reveal delay={200}>
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <p className="mb-4 text-center text-sm font-extrabold text-rc-black">
            What You Upload
          </p>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex flex-1 flex-wrap justify-around gap-6">
              {contentTypes.map((type) => (
                <div
                  key={type.label}
                  className="flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rc-purple-light text-2xl transition-transform duration-300 hover:scale-110">
                    {type.glyph}
                  </span>
                  <span className="text-xs font-semibold text-rc-black">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {contentTags.map((tag) => (
                <span
                  key={tag.label}
                  className="flex items-center gap-1 rounded-pill bg-rc-gray-50 px-3 py-1 text-[10px] font-semibold text-rc-gray-600 transition-transform duration-200 hover:scale-105"
                >
                  {tag.glyph} {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
