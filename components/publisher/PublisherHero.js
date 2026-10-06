import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";

const trustFeatures = [
  { glyph: "🛡️", label: "Verified Platform" },
  { glyph: "🌐", label: "Global Visibility" },
  { glyph: "👤", label: "Ranker Driven" },
  { glyph: "🏆", label: "Real Impact" },
];

const contentTypes = [
  { glyph: "🎬", label: "Movies" },
  { glyph: "📺", label: "Web Series" },
  { glyph: "🎞️", label: "Short Films" },
  { glyph: "▶️", label: "Videos" },
  { glyph: "✂️", label: "Trailers & Clips" },
];

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

      <Reveal delay={100}>
        <div className="mt-10 grid grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-br from-rc-purple-light/40 to-white p-8 lg:grid-cols-2">
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
              <a href="https://studio.rankcine.com/register">
                <Button as="span" variant="purple" className="transition-transform duration-200 hover:scale-105">
                  Join as Publisher →
                </Button>
              </a>
              <Link href="/faq">
                <Button as="span" variant="outline-purple" className="gap-1 transition-transform duration-200 hover:scale-105">
                  ▶ Learn More
                </Button>
              </Link>
            </div>

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

          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/PublisherTop.png"
              alt="Rank Cine Publisher Studio Content Upload Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Reveal>

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