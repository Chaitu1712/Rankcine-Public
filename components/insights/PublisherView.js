import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const contentLibrary = [
  { title: "Beyond Dreams", type: "Short Film", score: "8.6", status: "Published", statusColor: "text-emerald-600 bg-emerald-50", views: "12.4K" },
  { title: "The Hidden Truth", type: "Web Series", score: "8.1", status: "Scheduled", statusColor: "text-amber-600 bg-amber-50", views: "8.7K" },
  { title: "Echoes of Time", type: "Short Film", score: "7.8", status: "Publishing", statusColor: "text-orange-600 bg-orange-50", views: "5.3K" },
];

const upcoming = [
  { title: "Echoes of Time", type: "Short Film", date: "20 May, 11:00 AM" },
  { title: "The Hidden Truth", type: "Web Series", date: "22 May, 04:00 PM" },
  { title: "City Lights", type: "Short Film", date: "25 May, 09:30 AM" },
];

// Simple static calendar grid for May 2025, matching the screenshot.
// Each week is one row of 7 day numbers (or null for empty leading/
// trailing cells). `highlighted` marks the currently selected day (17).
const calendarWeeks = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
];
const weekdayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function PublisherView() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="mb-1 text-lg font-extrabold text-rc-purple">
        <span className="rounded bg-rc-purple-light/60 px-1">
          Publisher View
        </span>{" "}
        →
      </p>

      <Reveal>
        <div className="rounded-3xl border-2 border-fuchsia-400/70 bg-white p-6 shadow-[0_0_40px_rgba(217,70,239,0.15)] sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* --- Left: upload + content library --- */}
            <div>
              <p className="mb-3 text-sm font-extrabold text-rc-black">
                Upload New Content
              </p>

              <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-rc-gray-100 bg-rc-gray-50 p-10 text-center transition-colors duration-300 hover:border-rc-purple hover:bg-rc-purple-light/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-2xl transition-transform duration-300 hover:scale-110">
                  ☁️⬆️
                </span>
                <p className="text-sm font-semibold text-rc-black">
                  Drag &amp; drop your file here
                </p>
                <p className="text-xs text-rc-gray-600">
                  or browse from your device
                </p>
                <Button
                  variant="purple"
                  className="mt-1 transition-transform duration-200 hover:scale-105"
                >
                  Browse Files
                </Button>
              </div>

              {/* Upload progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs">
                  <p className="text-rc-gray-600">
                    Uploading: <span className="font-semibold text-rc-black">Beyond Dreams.mp4</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-rc-black">72%</span>
                    <button
                      type="button"
                      aria-label="Cancel upload"
                      className="text-rc-gray-400 hover:text-rc-black"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-pill bg-rc-gray-100">
                  <div className="h-full w-[72%] rounded-pill bg-rc-purple transition-all duration-700" />
                </div>
              </div>

              {/* Content library */}
              <p className="mb-2 mt-6 text-sm font-extrabold text-rc-black">
                Your Content Library
              </p>
              <ul className="flex flex-col gap-2">
                {contentLibrary.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl bg-rc-gray-50 p-3 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="h-10 w-10 shrink-0 rounded-lg bg-rc-gray-100" />
                    <div className="flex-1">
                      <p className="font-bold text-rc-black">{item.title}</p>
                      <p className="text-[10px] text-rc-gray-600">{item.type}</p>
                    </div>
                    <span className="font-bold text-amber-500">{item.score}</span>
                    <span
                      className={`rounded-pill px-2 py-1 text-[10px] font-semibold ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                    <span className="text-rc-gray-600">{item.views}</span>
                    <button
                      type="button"
                      aria-label="More options"
                      className="text-rc-gray-400 hover:text-rc-black"
                    >
                      ⋯
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Right: publishing schedule --- */}
            <div>
              <p className="mb-3 text-sm font-extrabold text-rc-black">
                Publishing Schedule
              </p>

              <div className="rounded-2xl bg-rc-gray-50 p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-bold text-rc-black">
                  <button type="button" className="hover:text-rc-purple">‹</button>
                  <span>May 2025</span>
                  <button type="button" className="hover:text-rc-purple">›</button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold text-rc-gray-600">
                  {weekdayLabels.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                {calendarWeeks.map((week, wi) => (
                  <div key={wi} className="mt-1 grid grid-cols-7 gap-1">
                    {week.map((day, di) => (
                      <span
                        key={di}
                        className={`flex h-7 items-center justify-center rounded-full text-[10px] transition-transform duration-200 ${
                          day === null
                            ? ""
                            : day === 17
                            ? "scale-110 bg-rc-purple font-bold text-white"
                            : "text-rc-black hover:scale-110 hover:bg-rc-purple-light/60"
                        }`}
                      >
                        {day ?? ""}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Upcoming */}
              <p className="mb-2 mt-6 text-sm font-extrabold text-rc-black">
                Upcoming
              </p>
              <ul className="flex flex-col gap-2">
                {upcoming.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl bg-rc-gray-50 p-3 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="h-10 w-10 shrink-0 rounded-lg bg-rc-gray-100" />
                    <div className="flex-1">
                      <p className="font-bold text-rc-black">{item.title}</p>
                      <p className="text-[10px] text-rc-gray-600">{item.type}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-rc-purple-dark">
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
