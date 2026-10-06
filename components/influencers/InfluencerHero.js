import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";


export default function InfluencerHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="mb-2 text-sm text-rc-gray-600">Creator partnerships</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-rc-black sm:text-5xl">
            Become an
            <br />
            <span className="text-rc-purple">Influencer</span>
            <br />
            <span className="text-rc-gray-600">with us.</span>
          </h1>

          <p className="mt-4 max-w-sm text-sm text-rc-gray-600">
            Promote our platform and build real influence inside a
            ranking-first community.
          </p>
          <a href="#influencer-form">
          <Button
            variant="outline-purple"
            style={{cursor: 'pointer'}}
            className="mt-6 transition-transform duration-200 hover:scale-105"
          >
            Join as INFLUENCER →
          </Button>
          </a>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex h-56 items-center justify-center text-8xl transition-transform duration-500 hover:scale-105">
             <Image
      src="/images/handshake.png"
      alt="Rank Cine Influencer Partnership and Growth"
      width={400}
      height={400}
      className="object-contain"
    />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
