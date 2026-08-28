// 3D-style gradient icon squares for the "Benefits of joining as a
// Publisher" section. Each is a saturated gradient rounded-square with
// a glossy highlight overlay (same "orb" technique as FeatureIcons.js)
// + a white line/fill icon on top — matching the bold colored icon
// tiles in the reference screenshot (purple eye, pink users, blue
// bar-chart, green trophy, orange wallet).
//
// `gradient` sets the Tailwind gradient stops (from-x to-y), so the
// same shape (e.g. UsersIcon) can be reused with different colors.

function IconSquare({ gradient, children }) {
  return (
    <div
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${gradient}`}
    >
      {/* Glossy highlight — gives the flat gradient square its 3D look */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/35 via-white/5 to-transparent" />
      <span className="relative z-10">{children}</span>
    </div>
  );
}

export function EyeIcon({ gradient }) {
  return (
    <IconSquare gradient={gradient}>
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M2 12c2-4 6-6.5 10-6.5S20 8 22 12c-2 4-6 6.5-10 6.5S4 16 2 12Z"
          fill="white"
          fillOpacity="0.25"
        />
        <path
          d="M2 12c2-4 6-6.5 10-6.5S20 8 22 12c-2 4-6 6.5-10 6.5S4 16 2 12Z"
          stroke="white"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="3" fill="white" />
      </svg>
    </IconSquare>
  );
}

export function UsersIcon({ gradient }) {
  return (
    <IconSquare gradient={gradient}>
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 19c0-3.5 2.7-6 6-6s6 2.5 6 6v1H3v-1Z" />
        <circle cx="17" cy="9" r="2.4" fillOpacity="0.85" />
        <path d="M14.5 13.2c2.7.4 4.5 2.6 4.5 5.3v.5h3v-.5c0-2.8-2.1-5-4.9-5.4-.9.2-1.8.4-2.6.1Z" fillOpacity="0.85" />
      </svg>
    </IconSquare>
  );
}

export function BarChartIcon({ gradient }) {
  return (
    <IconSquare gradient={gradient}>
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
        <rect x="3" y="13" width="4" height="8" rx="1" fillOpacity="0.7" />
        <rect x="10" y="9" width="4" height="12" rx="1" fillOpacity="0.85" />
        <rect x="17" y="4" width="4" height="17" rx="1" />
      </svg>
    </IconSquare>
  );
}

export function TrophyIcon({ gradient }) {
  return (
    <IconSquare gradient={gradient}>
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" fill="white" fillOpacity="0.9" />
        <path d="M10 13v3h4v-3" stroke="white" strokeWidth="1.6" />
        <path d="M8 19h8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M7 5H4v1.5A3.5 3.5 0 0 0 7.5 10M17 5h3v1.5A3.5 3.5 0 0 1 16.5 10"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </IconSquare>
  );
}

export function WalletIcon({ gradient }) {
  return (
    <IconSquare gradient={gradient}>
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2.5" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="white" strokeWidth="1.6" />
        <circle cx="17" cy="14" r="1.6" fill="white" />
      </svg>
    </IconSquare>
  );
}
