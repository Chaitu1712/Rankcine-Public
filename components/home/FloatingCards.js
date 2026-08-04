export default function FloatingCards() {
  return (
    <div className="relative hidden h-[420px] w-[220px] lg:block">
      {/* Top Rankers card */}
      <div className="absolute right-0 top-0 w-40 -rotate-3 rounded-xl bg-white p-3 shadow-lg">
        <p className="mb-2 text-xs font-bold">Top Rankers</p>
        <div className="flex -space-x-2">
          <span className="h-8 w-8 rounded-full border-2 border-white bg-rc-gray-100" />
          <span className="h-8 w-8 rounded-full border-2 border-white bg-rc-purple" />
          <span className="h-8 w-8 rounded-full border-2 border-white bg-rc-gray-100" />
        </div>
      </div>

      {/* Trophy image placeholder — replace with SVG export from Figma */}
      <div className="absolute right-8 top-28 flex h-40 w-40 items-center justify-center">
        <span className="text-7xl">🏆</span>
      </div>

      {/* Trending Videos card */}
      <div className="absolute right-2 bottom-0 w-36 rotate-2 rounded-xl bg-white p-3 shadow-lg">
        <span className="mb-1 block text-lg">🔥</span>
        <p className="text-xs font-bold">Trending Videos</p>
      </div>
    </div>
  );
}
