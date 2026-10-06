import VideoThumbnail from "@/components/ui/VideoThumbnail";
import Button from "@/components/ui/Button";
import Image from "next/image";

// Data for the video cards in this section. Add a 3rd card later by
// just adding one more object — the grid below will pick it up.
const libraryVideos = [
  {
    videoId: "REPLACE_WITH_YOUTUBE_ID_1",
    title: "Platform overview",
    subtitle: "Meet RANKCINE in 90 seconds.",
    gradient: "from-teal-300 to-white",
    playButtonColor: "#0D9488",
  },
  {
    videoId: "REPLACE_WITH_YOUTUBE_ID_2",
    title: "How ranking works",
    subtitle: "Animated explainer — voting flow.",
    gradient: "from-fuchsia-500 to-pink-200",
    playButtonColor: "#C026D3",
  },
];

export default function Library() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 flex items-center gap-1 text-sm text-rc-black">
        What&apos;s rising <span aria-hidden>→</span>
      </p>

      <h2 className="font-display text-5xl font-extrabold leading-tight text-rc-black sm:text-6xl">
        Library :
        <br />
        <span className="text-rc-purple-light">More to explore</span>
      </h2>

      <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row">
        {/* Video cards */}
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {libraryVideos.map((video) => (
            <div
              key={video.title}
              className="rounded-2xl border border-rc-purple-light bg-white p-3 shadow-sm"
            >
              <VideoThumbnail
                videoId={video.videoId}
                title={video.title}
                gradient={video.gradient}
                playButtonColor={video.playButtonColor}
              />
              <p className="mt-3 text-sm font-extrabold text-rc-black">
                {video.title} :
              </p>
              <p className="text-xs text-rc-gray-600">{video.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
