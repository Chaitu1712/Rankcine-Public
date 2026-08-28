// Colored circular icons for the "Why RANKCINE?" feature grid.
// Each one is a saturated gradient circle with a soft glossy highlight
// (mimicking a 3D orb) + a white line icon on top — matching the
// bold circular icons in the screenshot (blue compass, purple arrow,
// green megaphone, pink flame, etc).
//
// `gradient` sets the circle's Tailwind gradient stops (from-x to-y).

function IconCircle({ gradient, children }) {
  return (
    <div
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br shadow-lg shadow-black/10 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 ${gradient}`}
    >
      {/* Glossy highlight overlay — gives the flat gradient circle its
          3D "orb" look, like a light source hitting the top-left. */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/5 to-transparent" />
      <span className="relative z-10">{children}</span>
    </div>
  );
}

export function CompassCircleIcon() {
  return (
    <IconCircle gradient="from-sky-400 to-sky-600">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
        <path d="M15 9l-2 5-5 2 2-5 5-2Z" fill="white" />
      </svg>
    </IconCircle>
  );
}

export function TrendUpCircleIcon() {
  return (
    <IconCircle gradient="from-violet-400 to-violet-600">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M4 16l5-5 4 4 7-8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 7h5v5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconCircle>
  );
}

export function MegaphoneCircleIcon() {
  return (
    <IconCircle gradient="from-emerald-300 to-emerald-500">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M4 10v4h3l8 4V6l-8 4H4Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M18 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </IconCircle>
  );
}

export function FlameCircleIcon() {
  return (
    <IconCircle gradient="from-pink-400 to-pink-600">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 3c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-.5-1.7-1-2 1 3-1 3-1 5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </IconCircle>
  );
}

export function HeartCircleIcon() {
  return (
    <IconCircle gradient="from-purple-500 to-purple-700">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
        <path d="M12 20s-7-4.4-9.3-9C1.4 8 3 5 6 5c2 0 3.3 1.2 4 2.3C10.7 6.2 12 5 14 5c3 0 4.6 3 3.3 6-2.3 4.6-9.3 9-9.3 9Z" />
      </svg>
    </IconCircle>
  );
}

export function AwardCircleIcon() {
  return (
    <IconCircle gradient="from-teal-300 to-emerald-400">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <circle cx="12" cy="9" r="4" stroke="white" strokeWidth="1.5" />
        <path
          d="M9.5 12.5 8 20l4-2 4 2-1.5-7.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </IconCircle>
  );
}