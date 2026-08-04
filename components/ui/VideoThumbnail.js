"use client";

// Reusable "click to play" YouTube video block.
//
// Why not just embed the iframe directly? Loading YouTube's iframe on
// every page load pulls in YouTube's own JS/tracking scripts even if
// the visitor never watches the video, which slows the page down.
// Instead we show OUR OWN styled gradient thumbnail (matching the
// Figma design) with a big play button, and only mount the real
// YouTube iframe once the user actually clicks it.
//
// Props:
//   videoId   - the YouTube video ID (the part after "watch?v=" in a
//               YouTube URL, e.g. "dQw4w9WgXcQ")
//   title     - accessible title for the iframe (for screen readers)
//   gradient  - Tailwind gradient classes for the thumbnail background,
//               e.g. "from-indigo-600 via-purple-500 to-pink-200"
//   glow      - Tailwind shadow/ring classes for the pink glow border
//               effect seen around the big hero video in the screenshot
//   playButtonColor - text color class for the triangle icon
//
// Example:
//   <VideoThumbnail
//     videoId="dQw4w9WgXcQ"
//     title="See Rankcine in motion"
//     gradient="from-indigo-700 via-purple-500 to-pink-100"
//     glow="shadow-[0_0_40px_rgba(236,72,153,0.35)]"
//   />

import { useState } from "react";

export default function VideoThumbnail({
  videoId="dQw4w9WgXcQ",
  title="See Rankcine in motion",
  gradient = "from-rc-purple to-rc-purple-light",
  glow = "",
  playButtonColor = "#6C5CE7", // hex value, NOT a Tailwind class — see note below
  className = "",
}) {
  // Once true, we swap the thumbnail out for the real YouTube iframe.
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl ${className}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b ${gradient} ${glow} ${className}`}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition group-hover:scale-105">
        {/* Play triangle drawn with borders. We use an inline style
            for the color (not a Tailwind class) because Tailwind's
            build step scans source files for literal class names —
            a class name built at runtime via string concatenation
            (like `border-l-${color}`) would NOT be generated in the
            production build and the triangle would render invisible. */}
        <span
          className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent"
          style={{ borderLeftColor: playButtonColor }}
        />
      </span>
    </button>
  );
}
