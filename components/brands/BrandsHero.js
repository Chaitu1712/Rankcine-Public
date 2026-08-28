import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

// Floating stat cards around the phone mockup. Data-driven so
// repositioning/adding one is just editing this array.
const floatingStats = [
  { position: "top-6 -left-4", label: "Engagement", value: "+76%", type: "chart" },
  { position: "top-20 right-[-70px]", label: "Your Brand", value: "Ad Campaign", type: "video" },
  { position: "bottom-24 right-[-90px]", label: "Campaign Reach", value: "1.8M+", type: "reach" },
];

export default function BrandsHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left: copy */}
        <Reveal>
          <p className="mb-2 text-sm text-rc-gray-600">For brands &amp; agencies</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-rc-black sm:text-5xl">
            Highlight
            <br />
            your
            <br />
            <span className="text-rc-purple">BRAND.</span>
          </h1>

          <p className="mt-4 max-w-sm text-sm text-rc-gray-600">
            Place your campaign inside the most attention-rich surface in
            mobile: a community-ranked feed.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="outline-purple"
              className="transition-transform duration-200 hover:scale-105"
            >
              Join as BRAND
            </Button>
            <Button
              variant="outline-purple"
              className="transition-transform duration-200 hover:scale-105"
            >
              See Pricing →
            </Button>
          </div>
        </Reveal>
            <Image
  src="/images/BrandPhone.png"
  alt="Video ranking preview"
  width={760}
  height={760}
/>
         
         
      </div>
    </section>
  );
}
