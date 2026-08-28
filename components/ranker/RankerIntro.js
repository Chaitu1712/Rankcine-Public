"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import OutlinedHeading from "@/components/ui/OutlinedHeading";
import WhatYouSee from "./WhatYouSee";
import WhatYouDo from "./WhatYouDo";
import WhatYouGet from "./WhatYouGet";
import StartActions from "./StartActions";
import StartPerks from "./StartPerks";
import RankingsPower from "./RankingsPower";

export default function RankerIntro() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-2 text-sm text-rc-gray-600">How it works</p>

        <OutlinedHeading
          as="h1"
          className="text-4xl tracking-tight sm:text-5xl"
          strokeColor="#6C5CE7"
          fillColor="#C9BFFF"
        >
          From passion to recognition
        </OutlinedHeading>

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
          <>
            <StartActions />
            <StartPerks />
            <RankingsPower />
          </>
        )}
      </div>
    </section>
  );
}