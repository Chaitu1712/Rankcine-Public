// Small line-style icons used inside the "Three sides of the ecosystem"
// cards (EcosystemRoles.js). Kept as plain inline SVG (no external icon
// library) so we have full control over stroke/fill to match Figma.
//
// Usage: <WatchLineIcon className="h-4 w-4 text-rc-purple" />

export function WatchLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M4 10c1.5-3 3.8-4.5 6-4.5s4.5 1.5 6 4.5c-1.5 3-3.8 4.5-6 4.5s-4.5-1.5-6-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StarLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 2l2.2 5.6 6 .4-4.6 3.9 1.6 5.9L10 14.9l-5.2 2.9 1.6-5.9L1.8 8l6-.4L10 2Z" />
    </svg>
  );
}

export function TrophyLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M6 4h8v3a4 4 0 0 1-8 0V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 11v3h2v-3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 16h6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 5H4v1a3 3 0 0 0 3 3M14 5h2v1a3 3 0 0 1-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function UsersLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="7" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 16c.5-2.5 2-4 4-4s3.5 1.5 4 4M12 16c.3-1.8 1.5-3 3-3s2.6 1.2 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MegaphoneLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M3 8v3h2l7 3V5L5 8H3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 11v3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CloudUploadLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M6 14a3.5 3.5 0 0 1-.5-6.96A4 4 0 0 1 13 6a3 3 0 0 1-.3 6H6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 12V8m0 0-2 2m2-2 2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
