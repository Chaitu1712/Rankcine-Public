import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

const consistencyReasons = [
  "Improves your content discovery",
  "Boosts ranking potential",
  "Increases audience engagement",
  "Strengthens publisher reputation",
];

// One row per content type in the schedule table.
const scheduleRows = [
  { glyph: "🎬", type: "Movies", perWeek: "1 - 2", interval: "Every 5 - 7 Days", bestTime: "10:00 AM / 7:00 PM" },
  { glyph: "📺", type: "Web Series", perWeek: "2 - 4", interval: "Every 3 - 4 Days", bestTime: "11:00 AM / 8:00 PM" },
  { glyph: "🟠", type: "Short Films", perWeek: "3 - 6", interval: "Every 2 - 3 Days", bestTime: "12:00 PM / 6:00 PM" },
  { glyph: "🎞️", type: "Videos / Clips", perWeek: "4 - 8", interval: "Every 1 - 2 Days", bestTime: "1:00 PM / 9:00 PM" },
  { glyph: "📣", type: "Trailers / Teasers", perWeek: "2 - 5", interval: "Every 2 - 3 Days", bestTime: "10:30 AM / 6:30 PM" },
];

export default function PublishingScheme() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-6 text-xl font-extrabold text-pink-500">
          Schemes and outlines →
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-3xl bg-white p-8 shadow-[0_0_50px_rgba(147,51,234,0.12)] ring-1 ring-rc-purple-light">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div>
              <span className="rounded-pill bg-rc-purple-light px-3 py-1 text-[10px] font-bold text-rc-purple-dark">
                PUBLISHER GUIDE
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-rc-black">
                Publishing Scheme
                <br />
                That <span className="text-rc-purple">Works Best</span>
              </h3>
              <p className="mt-2 max-w-xs text-xs text-rc-gray-600">
                Consistent publishing brings more visibility, engagement and
                rankings.
              </p>
            </div>

            {/* Calendar illustration placeholder */}
            {/* Right: laptop upload mockup illustration */}
<div className="relative flex h-64 w-64 items-center justify-center py-8">
  <Image
    src="/images/calender.png"
    alt="Laptop upload mockup"
    fill
    className="object-contain"
  />
</div>

            <div className="rounded-2xl bg-rc-gray-50 p-4">
              <p className="mb-2 text-xs font-extrabold text-rc-black">
                Why Consistency Matters
              </p>
              <ul className="flex flex-col gap-1.5">
                {consistencyReasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-center gap-2 text-xs text-rc-black transition-transform duration-200 hover:translate-x-1"
                  >
                    <span className="text-rc-purple">✓</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Schedule table */}
          <div className="mt-8 overflow-x-auto">
            <p className="mb-3 text-center text-xs font-bold text-rc-gray-600">
              Recommended Publishing Scheme (Sample)
            </p>
            <table className="w-full min-w-[640px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-rc-gray-100 text-[10px] font-bold uppercase tracking-wide text-rc-gray-600">
                  <th className="py-2">Content Type</th>
                  <th className="py-2">How Much (Per Week)</th>
                  <th className="py-2">Best Interval</th>
                  <th className="py-2">Best Time to Publish (IST)</th>
                  <th className="py-2">Benefits</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-rc-gray-100 transition-colors duration-200 hover:bg-rc-purple-light/10"
                  >
                    <td className="flex items-center gap-2 py-3 font-semibold text-rc-black">
                      <span>{row.glyph}</span> {row.type}
                    </td>
                    <td className="py-3">
                      <span className="rounded-lg border border-rc-gray-100 px-2 py-1 font-semibold">
                        {row.perWeek}
                      </span>
                    </td>
                    <td className="py-3 text-rc-gray-600">{row.interval}</td>
                    <td className="py-3 text-rc-gray-600">🕐 {row.bestTime}</td>
                    <td className="py-3">
                      <div className="flex gap-1 text-sm">
                        <span title="Visibility">👁</span>
                        <span title="Growth">📈</span>
                        <span title="Community">👥</span>
                        <span title="Featured">⭐</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
