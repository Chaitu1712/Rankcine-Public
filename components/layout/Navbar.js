"use client";

// "use client" needed for usePathname() (active-link highlighting)
// AND now also for the mobile menu's open/close state.

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "PUBLISHER", href: "/publisher" },
  { label: "RANKER", href: "/ranker" },
  { label: "BRANDS", href: "/brands" },
  { label: "INFLUENCERS", href: "/influencers" },
  { label: "INSIGHTS", href: "/insights" },
  { label: "PRICING", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  // Controls whether the mobile dropdown menu is open. Only matters
  // below the md breakpoint — the desktop link row is always visible
  // and ignores this entirely.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Every page navigation should close the mobile menu automatically,
  // so tapping a link doesn't leave the dropdown open underneath the
  // new page. We just call this directly on each link's onClick.
  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="relative border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-rc-black text-sm font-extrabold text-white transition-transform duration-300 hover:rotate-6">
            R
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            RANK<span className="text-rc-purple">CINE</span>
          </span>
        </Link>

        {/* Center links — DESKTOP ONLY (md and up). This is the row
            that was silently disappearing on mobile with nothing to
            replace it. */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={`rounded-pill px-4 py-2 text-xs font-bold transition-colors duration-200 ${
              pathname === "/"
                ? "bg-rc-black text-white"
                : "text-rc-black hover:text-rc-purple"
            }`}
          >
            HOME
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-pill px-3 py-2 text-xs font-bold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "bg-rc-black text-white"
                    : "text-rc-black hover:text-rc-purple"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: Log in / Get App always visible, PLUS the
            hamburger button which only shows below md. */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-pill bg-rc-black px-4 py-2 text-xs font-bold text-white transition-transform duration-200 hover:scale-105 sm:inline-block"
          >
            Log in
          </Link>
          <Link
            href="/get-app"
            className="rounded-pill bg-rc-black px-3 py-2 text-[11px] font-bold text-white transition-transform duration-200 hover:scale-105 sm:px-4 sm:text-xs"
          >
            GET APP →
          </Link>

          {/* Hamburger button — DESKTOP: hidden (md:hidden means it
              disappears at md and up, since the full link row takes
              over there). MOBILE: this is the only way to reach the
              nav links. */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-pill bg-rc-gray-50 text-rc-black transition-transform duration-200 hover:scale-105 md:hidden"
          >
            {/* Simple hamburger ↔ X swap based on open state — pure
                CSS/text, no icon library needed for two glyphs. */}
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel. Only rendered (and only relevant)
          below md — on md+ screens this whole block stays hidden
          because isMobileMenuOpen never gets toggled there (the
          hamburger button that would set it is itself hidden). */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-gray-200 bg-white shadow-lg md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`rounded-lg px-4 py-3 text-sm font-bold transition-colors duration-200 ${
                pathname === "/"
                  ? "bg-rc-black text-white"
                  : "text-rc-black hover:bg-rc-purple-light/40"
              }`}
            >
              HOME
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`rounded-lg px-4 py-3 text-sm font-bold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "bg-rc-black text-white"
                      : "text-rc-black hover:bg-rc-purple-light/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Log in is hidden on the smallest screens in the top
                bar (sm:inline-block), so surface it here too on
                mobile where it would otherwise be missing entirely. */}
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="mt-2 rounded-lg bg-rc-gray-50 px-4 py-3 text-center text-sm font-bold text-rc-black sm:hidden"
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}