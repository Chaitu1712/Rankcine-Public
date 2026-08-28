// Small line-style icons used inside the "Three sides of the ecosystem"
// cards (EcosystemRoles.js). Kept as plain inline SVG (no external icon
// library) so we have full control over stroke/fill to match Figma.
//
// Usage: <WatchLineIcon className="h-4 w-4 text-rc-purple" />

import React from "react";

/* ------------------------------------------------------------------ */
/*  ICONS — same shapes you already had, now theme-aware via          */
/*  `currentColor`. Just wrap them in a span with a text-color class. */
/* ------------------------------------------------------------------ */

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
      <path d="M6 4h8v3a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="1.5" />
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

export function HandshakeLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M2 9l3-2 3 2 2-1.5 2 1.5 3-2 3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 9v3l3 2 3-2V9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function GearLineIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 3v2m0 10v2m7-7h-2M5 10H3m11.5-5.5-1.4 1.4M6.9 13.1l-1.4 1.4m11-1.4-1.4-1.4M6.9 6.9 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  THEME TOKENS — every color used per role, kept explicit so        */
/*  Tailwind's compiler can see every class (no dynamic class names). */
/* ------------------------------------------------------------------ */

const THEMES = {
  purple: {
    outerBorder: "bg-gradient-to-br from-sky-200 via-cyan-100 to-violet-200",
    card: "bg-gradient-to-b from-violet-50/60 via-white to-white",
    badgeBg: "bg-violet-600",
    badgeText: "text-white",
    titleText: "text-violet-700",
    pillBg: "bg-violet-100",
    pillText: "text-violet-700",
    chipBg: "bg-violet-100",
    chipIcon: "text-violet-600",
    divider: "border-violet-100",
    cta: "bg-violet-200/70 hover:bg-violet-300/80 text-violet-800",
  },
  green: {
    outerBorder: "bg-gradient-to-br from-pink-200 via-fuchsia-100 to-emerald-200",
    card: "bg-gradient-to-b from-emerald-50/60 via-white to-white",
    badgeBg: "bg-emerald-500",
    badgeText: "text-white",
    titleText: "text-emerald-700",
    pillBg: "bg-emerald-100",
    pillText: "text-emerald-700",
    chipBg: "bg-emerald-100",
    chipIcon: "text-emerald-600",
    divider: "border-emerald-100",
    cta: "bg-emerald-100/80 hover:bg-emerald-200/90 text-emerald-800",
    subBoxBg: "bg-emerald-50/80",
    subBoxBorder: "border-emerald-100",
  },
  pink: {
    outerBorder: "bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200",
    card: "bg-gradient-to-b from-pink-50/60 via-white to-white",
    badgeBg: "bg-pink-500",
    badgeText: "text-white",
    titleText: "text-pink-600",
    pillBg: "bg-pink-100",
    pillText: "text-pink-700",
    chipBg: "bg-pink-100",
    chipIcon: "text-pink-600",
    divider: "border-pink-100",
    cta: "bg-pink-500 hover:bg-pink-600 text-white",
  },
};

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                      */
/* ------------------------------------------------------------------ */

function NumberBadge({ n, theme }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shadow-sm ${theme.badgeBg} ${theme.badgeText}`}
    >
      {n}
    </span>
  );
}

function Pill({ children, theme }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${theme.pillBg} ${theme.pillText}`}
    >
      {children}
    </span>
  );
}

function FeatureRow({ icon, emoji, text, theme }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${theme.chipBg} ${theme.chipIcon}`}
      >
        {icon}
      </span>
      <span className="text-sm text-slate-700">
        {text} {emoji && <span className="ml-1">{emoji}</span>}
      </span>
    </li>
  );
}

function CTAButton({ children, theme }) {
  return (
    <button
      className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-colors ${theme.cta}`}
    >
      {children}
      <span aria-hidden>→</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  CARD SHELL                                                        */
/* ------------------------------------------------------------------ */

function RoleCard({ number, emoji, icon, title, pill, description, children, theme, cta }) {
  return (
    <div className={`rounded-[28px] p-[3px] ${theme.outerBorder}`}>
      <div className={`flex h-full flex-col rounded-[26px] p-6 ${theme.card}`}>
        <div className="mb-3 flex items-center justify-between">
          <NumberBadge n={number} theme={theme} />
          <span className="text-xl" aria-hidden>
            {emoji}
          </span>
        </div>

        <div className={`mb-2 flex items-center gap-2 text-lg font-extrabold tracking-wide ${theme.titleText}`}>
          {icon}
          {title}
        </div>

        <div className="mb-3">
          <Pill theme={theme}>{pill}</Pill>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-slate-600">{description}</p>

        {children}

        <CTAButton theme={theme}>{cta}</CTAButton>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION — the 3 role cards, RankCine-style                   */
/* ------------------------------------------------------------------ */

export default function RoleCards() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {/* 01 — RANKER */}
      <RoleCard
        number={1}
        emoji="🏆"
        icon={<StarLineIcon className="h-5 w-5" />}
        title="THE RANKER"
        pill="🎬 You Rank"
        description="Rankers watch, evaluate and rank content. Your opinions power the rankings and decide what rises."
        theme={THEMES.purple}
        cta="I WANT TO RANK"
      >
        <hr className={`mb-4 border-t ${THEMES.purple.divider}`} />
        <ul className="mb-2 flex flex-col gap-3">
          <FeatureRow
            icon={<WatchLineIcon className="h-4 w-4" />}
            emoji="📺"
            text="Watch content"
            theme={THEMES.purple}
          />
          <FeatureRow
            icon={<StarLineIcon className="h-4 w-4" />}
            emoji="⭐"
            text="Give honest ratings"
            theme={THEMES.purple}
          />
          <FeatureRow
            icon={<TrophyLineIcon className="h-4 w-4" />}
            emoji="🏅"
            text="Rank and influence the leaderboard"
            theme={THEMES.purple}
          />
          <FeatureRow
            icon={<UsersLineIcon className="h-4 w-4" />}
            emoji="🚀"
            text="Shape trends and support creators"
            theme={THEMES.purple}
          />
        </ul>
      </RoleCard>

      {/* 02 — PROMOTER */}
      <RoleCard
        number={2}
        emoji="📣"
        icon={<MegaphoneLineIcon className="h-5 w-5" />}
        title="THE PROMOTER"
        pill="📢 You Promote"
        description="Promoters help content and brands reach the right audience through collaboration."
        theme={THEMES.green}
        cta="I WANT TO PROMOTE"
      >
        <p className="mb-2 text-sm font-bold text-slate-700">Promoter has two types</p>
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className={`rounded-xl border p-3 ${THEMES.green.subBoxBg} ${THEMES.green.subBoxBorder}`}>
            <p className="mb-1 text-xs font-bold text-emerald-700">👩‍💻 INFLUENCER</p>
            <ul className="space-y-0.5 text-xs text-slate-600">
              <li>• Promotes RankCine</li>
              <li>• Shares our platform</li>
              <li>• Invites community</li>
              <li>• Drives more users</li>
            </ul>
          </div>
          <div className={`rounded-xl border p-3 ${THEMES.green.subBoxBg} ${THEMES.green.subBoxBorder}`}>
            <p className="mb-1 text-xs font-bold text-emerald-700">🏢 BRANDS</p>
            <ul className="space-y-0.5 text-xs text-slate-600">
              <li>• Promotes their brands</li>
              <li>• Runs campaigns</li>
              <li>• Reaches target audience</li>
              <li>• Collaborates on RankCine</li>
            </ul>
          </div>
        </div>
        <div className={`mb-1 flex items-center gap-2 rounded-xl border p-3 ${THEMES.green.subBoxBg} ${THEMES.green.subBoxBorder}`}>
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${THEMES.green.chipBg} ${THEMES.green.chipIcon}`}>
            <HandshakeLineIcon className="h-4 w-4" />
          </span>
          <p className="text-xs font-medium text-emerald-800">
            🤝 Together, they create visibility, build trust and grow the entire ecosystem.
          </p>
        </div>
      </RoleCard>

      {/* 03 — PUBLISHER */}
      <RoleCard
        number={3}
        emoji="🎥"
        icon={<CloudUploadLineIcon className="h-5 w-5" />}
        title="THE PUBLISHER"
        pill="⬆️ You Upload"
        description="Publishers upload content for the ecosystem. Without content, nothing works!"
        theme={THEMES.pink}
        cta="I WANT TO PUBLISH"
      >
        <ul className="mb-2 flex flex-col gap-3">
          <FeatureRow
            icon={<CloudUploadLineIcon className="h-4 w-4" />}
            emoji="🎬"
            text="Upload Movies, Shows, Clips, Trailers & More"
            theme={THEMES.pink}
          />
          <FeatureRow
            icon={<StarLineIcon className="h-4 w-4" />}
            emoji="✨"
            text="Provide quality content"
            theme={THEMES.pink}
          />
          <FeatureRow
            icon={<UsersLineIcon className="h-4 w-4" />}
            emoji="🤝"
            text="Enable rankers & promoters to engage"
            theme={THEMES.pink}
          />
          <FeatureRow
            icon={<GearLineIcon className="h-4 w-4" />}
            emoji="⚙️"
            text="Power the entire RankCine ecosystem"
            theme={THEMES.pink}
          />
        </ul>
      </RoleCard>
    </section>
  );
}
