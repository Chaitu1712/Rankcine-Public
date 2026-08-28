import Button from "@/components/ui/Button";
import Image from "next/image";

import {
  WatchLineIcon,
  StarLineIcon,
  TrophyLineIcon,
  UsersLineIcon,
  MegaphoneLineIcon,
  CloudUploadLineIcon,
} from "./icons/RoleIcons";

// Each entry below is ONE full card in the "Three sides of the
// ecosystem" section. Everything about a card — its color theme,
// heading, bullet list, and button — is defined here as data, so
// adding a 4th role later is just adding one more object, not writing
// new JSX.
//
// `illustration` is left as a slot — drop your own SVG/PNG component
// or <img> in there per card once you have the assets.
const roles = [
  {
    number: "01",
    badgeColor: "bg-rc-purple-dark",
    haloGradient: "from-sky-200 via-cyan-100 to-violet-200",
    cardBg: "bg-[#F7F5FF]", // flat, solid — no gradient/opacity stacking
    titleText: "text-rc-purple-dark",
    tagBg: "bg-[#E7E2FB]",
    tagText: "text-rc-purple-dark",
    iconColor: "text-rc-purple",
    label: "THE RANKER",
    tag: "You Rank",
    description:
      "Rankers watch, evaluate and rank content. Your opinions power the rankings and decide what rises.",
    bullets: [
      { Icon: WatchLineIcon, text: "Watch content" },
      { Icon: StarLineIcon, text: "Give honest ratings" },
      { Icon: TrophyLineIcon, text: "Rank and influence the leaderboard" },
      { Icon: UsersLineIcon, text: "Shape trends and support creators" },
    ],
    buttonLabel: "I WANT TO RANK →",
    buttonVariant: "pill-purple",
    illustration: (
     <div className="   w-[200px] h-[200px] -translate-x-[50px] relative bottom-8">
  <Image
    src="/images/publisher.png"
    alt="The Publisher"
    width={500}
    height={500}
    className="h-full w-full object-contain"
  />
</div>
    ), // <-- drop your SVG here
  },
  {
    number: "02",
    badgeColor: "bg-emerald-500",
    haloGradient: "from-pink-200 via-fuchsia-100 to-emerald-200",
    cardBg: "bg-[#F3FBF7]",
    titleText: "text-emerald-600",
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-700",
    iconColor: "text-emerald-600",
    label: "THE PROMOTER",
    tag: "You Promote",
    description:
      "Promoters help content and brands reach the right audience through collaboration.",
      
    // The promoter card has an extra "two types" sub-section instead
    // of a plain bullet list — handled separately in the JSX below.
    subTypes: [
      {
        title: "INFLUENCER",
        items: ["Promotes RankCine", "Shares our platform", "Invites community", "Drives more users"],
        illustration: null, // <-- drop your SVG here
      },
      {
        title: "BRANDS",
        items: ["Promotes their brands", "Runs campaigns", "Reaches target audience", "Collaborates on RankCine"],
        illustration: null, // <-- drop your SVG here
      },
    ],
    footerNote:
      "Together, they create visibility, build trust and grow the entire ecosystem.",
    buttonLabel: "I WANT TO PROMOTE →",
    buttonVariant: "pill-green",
    illustration: (
     <div className="   w-[180px] h-[180px] -translate-x-[50px] relative bottom-8">
  <Image
    src="/images/horn.png"
    alt="The Horn"
    width={500}
    height={500}
    className="h-full w-full object-contain"
  />
</div>
    ),  // <-- drop your SVG here (megaphone)
  },
  {
    number: "03",
    badgeColor: "bg-pink-500",
    haloGradient: "from-rose-200 via-pink-100 to-fuchsia-200",
    cardBg: "bg-[#FFF3F7]",
    titleText: "text-pink-600",
    tagBg: "bg-pink-100",
    tagText: "text-pink-700",
    iconColor: "text-pink-600",
    label: "THE PUBLISHER",
    tag: "You Upload",
    description:
      "Publishers upload content for the ecosystem. Without content, nothing works!",
    bullets: [
      { Icon: CloudUploadLineIcon, text: "Upload Movies, Shows, Clips, Trailers & More" },
      { Icon: StarLineIcon, text: "Provide quality content" },
      { Icon: UsersLineIcon, text: "Enable rankers & promoters to engage" },
      { Icon: MegaphoneLineIcon, text: "Power the entire RankCine ecosystem" },
    ],
    buttonLabel: "I WANT TO PUBLISH →",
    buttonVariant: "pill-pink",
    illustration:(
     <div className="   w-[160px] h-[160px] -translate-x-[30px] relative bottom-8">
  <Image
    src="/images/Monitior.png"
    alt="The Monitior"
    width={500}
    height={500}
    className="h-full w-full object-contain"
  />
</div>
    ),  // <-- drop your SVG here (monitor/upload)
  },
];

export default function EcosystemRoles() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-2 text-sm text-rc-gray-600">Three sides of the ecosystem</p>
      <h2 className="max-w-2xl font-display text-3xl font-extrabold text-rc-purple-dark sm:text-4xl">
        Where the Ranker, Promoter and the Publisher shapes the INFLUENCE
      </h2>

      {/* Card grid — stacks to 1 column on mobile, 3 across on desktop */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {roles.map((role) => (
          // Outer wrapper carries the gradient halo (border only); the
          // inner card fill is a flat solid color, no gradient/opacity.
          <div
            key={role.number}
            className={`rounded-[26px] bg-gradient-to-br p-[3px] ${role.haloGradient}`}
          >
            <div className={`flex h-full flex-col rounded-[24px] p-5 shadow-sm ${role.cardBg}`}>
              {/* Top row: text content on the left, illustration slot on the right */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-sm ${role.badgeColor}`}
                    >
                      {role.number}
                    </span>
                    <span className={`text-sm font-extrabold ${role.titleText}`}>
                      {role.label}
                    </span>
                  </div>

                  <span
                    className={`mt-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${role.tagBg} ${role.tagText}`}
                  >
                    {role.tag}
                  </span>

                  <p className="mt-3 text-sm text-rc-gray-600">{role.description}</p>
                </div>

                {/* Illustration slot — fixed size box reserved for your
                    3D character / megaphone / monitor SVG per card. */}
                <div className="h-28 w-28 shrink-0">{role.illustration}</div>
              </div>

              {/* --- Regular bullet list (Ranker + Publisher cards) --- */}
              {role.bullets && (
                <>
                  <hr className="mt-4 border-t border-rc-gray-100" />
                  <ul className="mt-4 flex flex-1 flex-col gap-3">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet.text}
                        className="flex items-center gap-3 text-xs text-rc-black"
                      >
                        <bullet.Icon className={`h-4 w-4 shrink-0 ${role.iconColor}`} />
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* --- Promoter card: two-column sub-types instead --- */}
              {role.subTypes && (
                <div className="mt-4 flex-1">
                  <p className="mb-2 text-center text-[11px] font-bold text-rc-gray-600">
                    Promoter has two types
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {role.subTypes.map((sub) => (
                      <div
                        key={sub.title}
                        className="rounded-lg bg-emerald-100/70 p-2 text-[11px]"
                      >
                        <div className="mb-1 flex items-center gap-1">
                          {/* Illustration slot for the influencer/brand icon */}
                          <div className="h-6 w-6 shrink-0">{sub.illustration}</div>
                          <p className="font-bold text-emerald-800">{sub.title}</p>
                        </div>
                        <ul className="space-y-0.5 text-rc-gray-600">
                          {sub.items.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-100/70 p-3">
                    <span aria-hidden>🤝</span>
                    <p className="text-[11px] font-medium text-emerald-800">
                      {role.footerNote}
                    </p>
                  </div>
                </div>
              )}

              <Button variant={role.buttonVariant} className="mt-5 w-full">
                {role.buttonLabel}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}