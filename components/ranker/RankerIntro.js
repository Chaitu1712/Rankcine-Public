"use client";

// "Start" and "About" behave like two different views of the Ranker
// page. The screenshots only show the "About" tab's content (What You
// See / What You Do / What You Get), so "Start" is a placeholder CTA
// for now — replace with real onboarding content once that's designed.

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import WhatYouSee from "./WhatYouSee";
import WhatYouDo from "./WhatYouDo";
import WhatYouGet from "./WhatYouGet";

export default function RankerIntro() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-2 text-sm text-rc-gray-600">How it works</p>

        <h1
          className="font-display text-4xl font-extrabold text-rc-black sm:text-5xl"
          style={{ textShadow: "0 0 24px rgba(147,51,234,0.3)" }}
        >
          From passion to <span className="text-rc-purple">recognition</span>
        </h1>

        <p className="mt-2 text-lg font-bold text-rc-purple-dark">
          Upload. Rank. Earn.
        </p>

        {/* Start / About tab pills */}
        <div className="mt-4 inline-flex rounded-pill bg-rc-purple-light/40 p-1">
          <button
            type="button"
            onClick={() => setActiveTab("start")}
            className={`rounded-pill px-5 py-2 text-sm font-bold transition-all duration-200 hover:scale-105 ${
              activeTab === "start"
                ? "bg-rc-purple-dark text-white shadow-md"
                : "text-rc-purple hover:text-rc-purple-dark"
            }`}
          >
            Start →
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("about")}
            className={`rounded-pill px-5 py-2 text-sm font-bold transition-all duration-200 hover:scale-105 ${
              activeTab === "about"
                ? "bg-rc-purple-dark text-white shadow-md"
                : "text-rc-purple hover:text-rc-purple-dark"
            }`}
          >
            About →
          </button>
        </div>
      </Reveal>

      {/* key={activeTab} forces a remount on tab switch so scroll-in
          animations replay each time, same pattern used in the FAQ
          tabs section. */}
      <div key={activeTab} className="mt-10">
        {activeTab === "about" && (
          <>
            <WhatYouSee />
            <WhatYouDo />
            <WhatYouGet />
          </>
        )}

        {activeTab === "start" && (
          <Reveal>
            {/* TODO: replace with real "Start" / getting-started content
                once that part of the Figma file is available. */}
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-rc-purple-light/20 p-16 text-center">
              <p className="text-lg font-extrabold text-rc-black">
                Ready to start ranking?
              </p>
              <p className="max-w-sm text-sm text-rc-gray-600">
                Download the app and cast your first vote in under a minute.
              </p>
              <Button variant="purple" className="transition-transform duration-200 hover:scale-105">
                Get Started →
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
