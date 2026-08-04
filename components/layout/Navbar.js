"use client";

// "use client" is needed here because we use usePathname() below to
// detect which page is currently active, so we can highlight that
// link with a black pill background (matching the screenshots, where
// whichever section you're on — FAQ, PUBLISHER, RANKER — shows as a
// solid black pill instead of plain text).

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

  return (
    <header className="border-b border-gray-200">
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

        {/* Center links */}
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

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-pill bg-rc-black px-4 py-2 text-xs font-bold text-white transition-transform duration-200 hover:scale-105"
          >
            Log in
          </Link>
          <Link
            href="/get-app"
            className="rounded-pill bg-rc-black px-4 py-2 text-xs font-bold text-white transition-transform duration-200 hover:scale-105"
          >
            GET APP →
          </Link>
        </div>
      </nav>
    </header>
  );
}
