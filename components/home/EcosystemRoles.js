import Button from "@/components/ui/Button";
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
const roles = [
  {
    number: "01",
    badgeColor: "bg-rc-purple-dark",
    borderColor: "border-cyan-200",
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
    buttonVariant: "outline-purple",
  },
  {
    number: "02",
    badgeColor: "bg-emerald-500",
    borderColor: "border-emerald-200",
    label: "THE PROMOTER",
    tag: "You Promote",
    description:
      "Promoters help content and brands reach the right audience through collaboration.",
    // The promoter card has an extra "two types" sub-section instead
    // of a plain bullet list — handled separately in the JSX below.
    subTypes: [
      {
        title: "INFLUENCER",
        items: ["Promotes RankCine", "Shares content", "Invites community"],
      },
      {
        title: "BRANDS",
        items: ["Promotes their brands", "Runs campaigns", "Collaborates on RankCine"],
      },
    ],
    footerNote:
      "Together, they create visibility, build trust, and grow the entire RankCine ecosystem.",
    buttonLabel: "I WANT TO PROMOTE →",
    buttonVariant: "outline-green",
  },
  {
    number: "03",
    badgeColor: "bg-pink-500",
    borderColor: "border-pink-200",
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
    buttonVariant: "outline-pink",
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
          <div
            key={role.number}
            className={`flex flex-col rounded-2xl border-2 bg-white p-5 shadow-sm ${role.borderColor}`}
          >
            {/* Card header: numbered badge + label */}
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${role.badgeColor}`}
              >
                {role.number}
              </span>
              <span className="text-sm font-extrabold text-rc-black">
                {role.label}
              </span>
            </div>

            <p className="mt-2 text-xs font-semibold text-rc-gray-600">
              {role.tag}
            </p>
            <p className="mt-2 text-sm text-rc-gray-600">{role.description}</p>

            {/* --- Regular bullet list (Ranker + Publisher cards) --- */}
            {role.bullets && (
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.text}
                    className="flex items-start gap-2 text-xs text-rc-black"
                  >
                    <bullet.Icon className="mt-0.5 h-4 w-4 shrink-0 text-rc-purple" />
                    {bullet.text}
                  </li>
                ))}
              </ul>
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
                      className="rounded-lg bg-rc-gray-50 p-2 text-[11px]"
                    >
                      <p className="mb-1 font-bold text-rc-black">
                        {sub.title}
                      </p>
                      <ul className="space-y-0.5 text-rc-gray-600">
                        {sub.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-[11px] italic text-rc-gray-600">
                  {role.footerNote}
                </p>
              </div>
            )}

            <Button variant={role.buttonVariant} className="mt-5 w-full">
              {role.buttonLabel}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
