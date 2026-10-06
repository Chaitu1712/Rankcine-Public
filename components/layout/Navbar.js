"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "PUBLISHER", href: "/publisher" },
  { label: "RANKER", href: "/ranker" },
  { label: "BRANDS", href: "/brands" },
  { label: "INFLUENCERS", href: "/influencers" },
];

// Normalizes path by removing trailing slashes so "/ranker/" and "/ranker" match identically
const normalizePath = (path) => {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clientPath, setClientPath] = useState("");
  const pathname = usePathname();

  // Sync client-side location on mount to handle static HTML export hydration on Hostinger
  useEffect(() => {
    if (typeof window !== "undefined") {
      setClientPath(normalizePath(window.location.pathname));
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use client-verified pathname, falling back to Next.js usePathname
  const activeNormalizedPath = normalizePath(clientPath || pathname);

  const checkIsActive = (linkHref) => {
    const targetNormalized = normalizePath(linkHref);
    if (targetNormalized === "/") {
      return activeNormalizedPath === "/";
    }
    return (
      activeNormalizedPath === targetNormalized ||
      activeNormalizedPath.startsWith(targetNormalized + "/")
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center font-black text-white text-base">
              R
            </div>
            <div className="flex items-center">
              <span className="font-extrabold text-lg tracking-tight text-foreground">
                RANK
              </span>
              <span className="font-extrabold text-lg tracking-tight text-primary">
                CINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Trailing-slash invariant active highlighter */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white"
                      : "text-foreground hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://studio.rankcine.com"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors border border-border hover:border-primary"
            >
              Log In
            </Link>
            <Link
              href="https://rankcine.com"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-black text-white border border-black hover:bg-neutral-800 transition-all shadow-sm"
            >
              GET APP →
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <div className="flex flex-col gap-2 py-4 border-t border-b border-border">
                {navLinks.map((link) => {
                  const isActive = checkIsActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? "bg-black text-white"
                          : "text-foreground hover:bg-neutral-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="https://studio.rankcine.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider border border-border"
                >
                  Log In
                </Link>
                <Link
                  href="https://rankcine.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider bg-black text-white"
                >
                  GET APP →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}