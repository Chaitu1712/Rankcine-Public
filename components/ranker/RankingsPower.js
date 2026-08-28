import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function RankingsPower() {
  return (
    <Reveal delay={100}>
      <div className="mt-8 grid grid-cols-1 items-center gap-6 rounded-3xl bg-rc-gray-50 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto]">
       
        <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed border-rc-gray-100 text-xs text-rc-gray-400 sm:w-40">
       <Image
  src="/images/calender.png"
  alt="Video ranking preview"
  width={160}
  height={160}
/>
        </div>

        {/* Center: copy + CTA */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-extrabold text-rc-black sm:text-2xl">
            YOUR RANKINGS HAVE POWER
          </h3>
          <p className="mt-2 text-sm text-rc-gray-600">
            Every rank you give helps great content get the attention it
            truly deserves !
          </p>
          <Button
            variant="purple"
            className="mt-4 transition-transform duration-200 hover:scale-105"
          >
            Start Ranking →
          </Button>
        </div>

         
        <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed border-rc-gray-100 text-xs text-rc-gray-400 sm:w-40">
             <Image
  src="/images/earth.png"
  alt="Video ranking preview"
  width={160}
  height={160}
/>
        </div>
      </div>
    </Reveal>
  );
}