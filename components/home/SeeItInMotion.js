import VideoThumbnail from "@/components/ui/VideoThumbnail";

// IMPORTANT: replace this with your real YouTube video ID.
// Get it from the YouTube URL: youtube.com/watch?v=THIS_PART_HERE
const HERO_VIDEO_ID = "dQw4w9WgXcQ";

export default function SeeItInMotion() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 text-sm text-rc-gray-600">How it works</p>

      <h2 className="font-display text-5xl font-extrabold text-rc-black sm:text-6xl">
        See it in <span className="text-rc-purple-light">MOTION.</span>
      </h2>

      <a
        href={`https://www.youtube.com/watch?v=${HERO_VIDEO_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-bold text-rc-purple-dark hover:underline"
      >
        Watch RANKCINE →
      </a>

      <p className="mt-2 max-w-lg text-sm text-rc-gray-600">
        Short films and explainers — built for tappers, scrollers, and
        culture-watchers.
      </p>

      <div className="mt-10">
        <VideoThumbnail
          videoId={HERO_VIDEO_ID}
          title="See RANKCINE in motion"
          gradient="from-indigo-800 via-purple-500 to-pink-100"
          glow="ring-4 ring-pink-300/60 shadow-[0_0_60px_rgba(236,72,153,0.35)]"
          playButtonColor="#6C5CE7"
          className="mx-auto max-w-2xl"
        />
      </div>
    </section>
  );
}
