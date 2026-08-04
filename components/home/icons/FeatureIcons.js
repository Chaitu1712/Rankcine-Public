// Colored circular icons for the "Why RANKCINE?" feature grid.
// Each one is a filled circle background + a simple line icon on top,
// matching the soft-colored circular icons in the screenshot
// (blue compass, purple arrow, green megaphone, pink flame, etc).
//
// `bg` sets the circle's background color — pass any Tailwind bg-*
// class string.

function IconCircle({ bg, children }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full ${bg}`}
    >
      {children}
    </div>
  );
}

export function CompassCircleIcon() {
  return (
    <IconCircle bg="bg-sky-100">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#0284C7" strokeWidth="1.5" />
        <path d="M15 9l-2 5-5 2 2-5 5-2Z" fill="#0284C7" />
      </svg>
    </IconCircle>
  );
}

export function TrendUpCircleIcon() {
  return (
    <IconCircle bg="bg-violet-100">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M4 16l5-5 4 4 7-8"
          stroke="#6C5CE7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 7h5v5" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconCircle>
  );
}

export function MegaphoneCircleIcon() {
  return (
    <IconCircle bg="bg-emerald-100">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M4 10v4h3l8 4V6l-8 4H4Z"
          stroke="#059669"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M18 10v4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </IconCircle>
  );
}

export function FlameCircleIcon() {
  return (
    <IconCircle bg="bg-pink-100">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 3c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-.5-1.7-1-2 1 3-1 3-1 5"
          stroke="#DB2777"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </IconCircle>
  );
}

export function HeartCircleIcon() {
  return (
    <IconCircle bg="bg-purple-100">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#7C3AED">
        <path d="M12 20s-7-4.4-9.3-9C1.4 8 3 5 6 5c2 0 3.3 1.2 4 2.3C10.7 6.2 12 5 14 5c3 0 4.6 3 3.3 6-2.3 4.6-9.3 9-9.3 9Z" />
      </svg>
    </IconCircle>
  );
}

export function AwardCircleIcon() {
  return (
    <IconCircle bg="bg-teal-100">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="9" r="4" stroke="#0D9488" strokeWidth="1.5" />
        <path
          d="M9.5 12.5 8 20l4-2 4 2-1.5-7.5"
          stroke="#0D9488"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </IconCircle>
  );
}
