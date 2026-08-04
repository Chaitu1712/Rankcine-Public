"use client";

// Small interactive piece: clicking a filter pill (All/Movies/Web
// Series/...) changes which category is highlighted. We don't
// actually filter the movie list here since we only have one sample
// set of movies — wire up real filtering once you have real content
// per category.

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const filterOptions = ["All", "Movies", "Web Series", "Short Films", "Videos"];

// Sample trending movies. `posterGradient` stands in for a real
// poster image — replace the whole poster <div> with an <Image>
// once you have real artwork; everything else (title/genre/rating)
// stays the same.
const trendingMovies = [
  { title: "12th Fail", genre: "Drama", year: "2023", rating: "4.6", posterGradient: "from-orange-700 to-red-900", badge: null },
  { title: "Oppenheimer", genre: "Biography", year: "2023", rating: "4.8", posterGradient: "from-amber-600 to-orange-900", badge: "TOP 1" },
  { title: "Interstellar", genre: "Sci-Fi", year: "2014", rating: "4.7", posterGradient: "from-slate-500 to-slate-800", badge: null },
  { title: "Dune: Part Two", genre: "Sci-Fi", year: "2024", rating: "4.5", posterGradient: "from-amber-800 to-stone-900", badge: null },
  { title: "The Batman", genre: "Action", year: "2022", rating: "4.4", posterGradient: "from-slate-700 to-black", badge: null },
];

const categories = [
  { glyph: "🎬", label: "Movies" },
  { glyph: "📺", label: "Web Series" },
  { glyph: "🔴", label: "Short Films" },
  { glyph: "▶️", label: "Videos" },
  { glyph: "👤", label: "Creators" },
];

const topRanked = [
  { rank: 1, title: "Oppenheimer", score: "4.8" },
  { rank: 2, title: "12th Fail", score: "4.6" },
  { rank: 3, title: "Interstellar", score: "4.7" },
  { rank: 4, title: "Dune: Part Two", score: "4.5" },
  { rank: 5, title: "The Batman", score: "4.4" },
];

export default function RankerView() {
  const [activeFilter, setActiveFilter] = useState("Movies");

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="mb-1 flex items-center gap-1 text-lg font-extrabold text-rc-purple">
        <span className="rounded bg-rc-purple-light/60 px-1">Ranker View</span>{" "}
        <span aria-hidden>→</span>
      </p>

      <Reveal>
        <div className="rounded-3xl border-2 border-fuchsia-400/70 bg-white p-6 shadow-[0_0_40px_rgba(217,70,239,0.15)] sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            {/* --- Left: trending + categories --- */}
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="flex items-center gap-1 text-sm font-extrabold text-rc-black">
                  Trending Now <span aria-hidden>🔥</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setActiveFilter(option)}
                      className={`rounded-pill px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 ${
                        activeFilter === option
                          ? "bg-rc-purple text-white shadow-sm"
                          : "bg-rc-gray-50 text-rc-gray-600"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Movie grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {trendingMovies.map((movie) => (
                  <div
                    key={movie.title}
                    className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div
                      className={`relative flex h-40 items-end overflow-hidden rounded-xl bg-gradient-to-b p-2 shadow-md transition-shadow duration-300 group-hover:shadow-xl ${movie.posterGradient}`}
                    >
                      {movie.badge && (
                        <span className="absolute left-2 top-2 rounded-pill bg-orange-500 px-2 py-0.5 text-[9px] font-bold text-white">
                          {movie.badge}
                        </span>
                      )}
                      <p className="text-xs font-extrabold uppercase leading-none text-white">
                        {movie.title}
                      </p>
                    </div>
                    <p className="mt-2 text-xs font-bold text-rc-black">
                      {movie.title}
                    </p>
                    <p className="text-[10px] text-rc-gray-600">
                      {movie.genre} • {movie.year}
                    </p>
                    <p className="text-[10px] font-semibold text-amber-500">
                      ⭐ {movie.rating}
                    </p>
                  </div>
                ))}
              </div>

              {/* Explore by category */}
              <p className="mb-3 mt-8 text-sm font-extrabold text-rc-black">
                Explore by Category
              </p>
              <div className="flex flex-wrap gap-6">
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    className="flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rc-purple-light text-xl transition-transform duration-300 hover:scale-110">
                      {cat.glyph}
                    </span>
                    <span className="text-xs font-semibold text-rc-black">
                      {cat.label}
                    </span>
                  </div>
                ))}
                {/* Floating AI sparkle button, matches screenshot */}
                <span className="ml-auto flex h-10 w-10 items-center justify-center self-end rounded-full bg-rc-purple text-white shadow-lg transition-transform duration-300 hover:rotate-12">
                  ✨
                </span>
              </div>
            </div>

            {/* --- Right: sidebar --- */}
            <div className="flex flex-col gap-4">
              {/* Today's Top Ranked */}
              <div className="rounded-2xl bg-rc-gray-50 p-4">
                <p className="mb-3 text-xs font-extrabold text-rc-black">
                  Today&apos;s Top Ranked
                </p>
                <ul className="flex flex-col gap-2">
                  {topRanked.map((item) => (
                    <li
                      key={item.rank}
                      className="flex items-center gap-2 rounded-lg bg-white p-2 text-xs transition-transform duration-200 hover:translate-x-1"
                    >
                      <span className="w-4 font-bold text-rc-gray-400">
                        {item.rank}
                      </span>
                      <span className="h-6 w-6 rounded bg-rc-gray-100" />
                      <span className="flex-1 font-semibold text-rc-black">
                        {item.title}
                      </span>
                      <span className="font-bold text-amber-500">
                        {item.score}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-3 text-xs font-bold text-rc-purple hover:underline"
                >
                  View Full Leaderboard →
                </button>
              </div>

              {/* Your Ranker Level */}
              <div className="rounded-2xl bg-rc-gray-50 p-4">
                <p className="mb-3 text-xs font-extrabold text-rc-black">
                  Your Ranker Level
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rc-purple text-xl text-white shadow-md transition-transform duration-300 hover:scale-110">
                    ⭐
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-rc-black">
                      Expert Ranker
                    </p>
                    <p className="text-[10px] text-rc-gray-600">
                      Top 2% of Rankers
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-pill bg-rc-gray-100">
                  <div className="h-full w-[72%] rounded-pill bg-rc-purple transition-all duration-700" />
                </div>
                <p className="mt-1 text-[10px] text-rc-gray-600">870 / 1200 XP</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
