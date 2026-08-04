const contents = [
  { title: "MIDNIG...", rating: 5 },
  { title: "NEON...", rating: 5 },
];

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-rc-black bg-white shadow-2xl">
      {/* Notch */}
      <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-rc-black" />

      {/* Screen */}
      <div className="overflow-hidden rounded-[2rem]">
        {/* Header - gradient purple */}
        <div className="bg-gradient-to-b from-rc-purple to-rc-purple-dark px-5 pb-8 pt-6 text-white">
          <div className="mb-4 flex items-center justify-between text-xs">
            <span>←</span>
            <span>●</span>
            <span>▲◢ ▮</span>
          </div>
          <p className="font-display text-lg font-extrabold">RANKCINE</p>

          <button className="mt-4 w-full rounded-pill bg-white/90 py-2 text-xs font-bold text-rc-black">
            BE A PART OF OUR COMMUNITY
          </button>
          <button className="mt-2 flex w-full items-center justify-center gap-1 rounded-pill bg-white/20 py-2 text-xs font-bold text-white">
            ⬇ DOWNLOAD
          </button>
        </div>

        {/* Contents panel */}
        <div className="bg-white px-5 py-4">
          <p className="mb-3 text-center text-sm font-bold text-rc-black">
            CONTENTS
          </p>

          <div className="mb-3 flex gap-2">
            <span className="flex items-center gap-1 rounded-pill bg-rc-purple-dark px-3 py-1 text-[10px] font-bold text-white">
              ✓ REVIEWED
            </span>
            <span className="rounded-pill bg-rc-gray-100 px-3 py-1 text-[10px] font-bold text-rc-gray-600">
              UPLOADED
            </span>
          </div>

          <ul className="divide-y divide-gray-100">
            {contents.map((item) => (
              <li key={item.title} className="flex items-center gap-3 py-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-rc-gray-100" />
                <span className="flex-1 truncate text-sm font-semibold">
                  {item.title}
                </span>
                <span className="text-xs">{"★".repeat(item.rating)}</span>
                <span>♡</span>
              </li>
            ))}
          </ul>

          <button className="mt-2 w-full rounded-pill border border-rc-purple py-2 text-xs font-bold text-rc-purple-dark">
            VIEW ALL →
          </button>
        </div>

        {/* Bottom tab bar */}
        <div className="flex items-center justify-around bg-rc-purple-light py-3">
          <span>★</span>
          <span>⊛</span>
          <span>⊛</span>
        </div>
        <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-rc-black/80" />
      </div>
    </div>
  );
}
