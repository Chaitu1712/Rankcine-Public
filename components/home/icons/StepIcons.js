export function WatchIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14">
      <defs>
        <linearGradient id="watchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9F8CFF" />
          <stop offset="100%" stopColor="#6C5CE7" />
        </linearGradient>
      </defs>
      <rect x="6" y="10" width="48" height="40" rx="8" fill="url(#watchGrad)" />
      <rect
        x="6"
        y="10"
        width="48"
        height="40"
        rx="8"
        fill="none"
        stroke="#5842E0"
        strokeWidth="2"
      />
      <path d="M26 22 L42 30 L26 38 Z" fill="white" />
    </svg>
  );
}

export function RankIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14">
      <defs>
        <linearGradient id="rankGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#5FE0C4" />
          <stop offset="100%" stopColor="#34C99B" />
        </linearGradient>
      </defs>
      <rect x="10" y="34" width="8" height="18" rx="2" fill="url(#rankGrad)" />
      <rect x="22" y="26" width="8" height="26" rx="2" fill="url(#rankGrad)" />
      <rect x="34" y="18" width="8" height="34" rx="2" fill="url(#rankGrad)" />
      <path
        d="M10 20 L28 10 L46 16 L54 8"
        fill="none"
        stroke="#22B27D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M46 8 L54 8 L54 16" fill="none" stroke="#22B27D" strokeWidth="3" />
    </svg>
  );
}

export function InfluenceIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14">
      <defs>
        <linearGradient id="globeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B08CFF" />
          <stop offset="100%" stopColor="#E086D6" />
        </linearGradient>
      </defs>
      <circle cx="26" cy="30" r="18" fill="url(#globeGrad)" />
      <path
        d="M12 30h28M26 12c6 6 6 24 0 36M26 12c-6 6-6 24 0 36"
        fill="none"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <path
        d="M40 34c-4 0-7 3-7 7s3 7 7 7c1.2 0 2.3-.3 3.3-.8L48 50l-.8-3.6c1.1-1.2 1.8-2.8 1.8-4.6 0-4-3-7-9-7z"
        fill="white"
      />
      <path d="M42 44l2 3 3-4" fill="none" stroke="#E086D6" strokeWidth="1.5" />
    </svg>
  );
}

export function BeHeardIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14">
      <defs>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C7BFF" />
          <stop offset="100%" stopColor="#6C5CE7" />
        </linearGradient>
      </defs>
      <path
        d="M32 6l20 8v14c0 14-9 22-20 26C21 50 12 42 12 28V14z"
        fill="url(#badgeGrad)"
        stroke="#F4B94A"
        strokeWidth="2"
      />
      <path
        d="M32 20l3.5 7 7.7 1.1-5.6 5.5 1.3 7.7L32 37.7l-6.9 3.6 1.3-7.7-5.6-5.5 7.7-1.1z"
        fill="#F4B94A"
      />
    </svg>
  );
}
