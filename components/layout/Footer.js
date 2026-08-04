import Button from "@/components/ui/Button";

// Each column in the footer's link grid. Storing these as data means
// adding a new link is just adding a string to an array — you never
// need to touch the JSX layout below.
const linkColumns = [
  {
    title: "EXPLORE",
    links: ["Home", "FAQ", "Publisher", "Ranker", "Brand", "Influencer", "Insights", "Pricing"],
  },
  {
    title: "HELP & GUIDE",
    links: [
      "Help Centre",
      "How It Works",
      "Getting Started",
      "Guidelines",
      "Community",
      "Support",
      "Sitemap",
    ],
  },
  {
    title: "CONTACT",
    links: ["Contact Us", "Partnerships", "Press & Media", "Advertising", "Feedback"],
  },
  {
    title: "LEGAL",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Content Policy",
      "Refund Policy",
      "Cookie Policy",
      "Data Protection",
    ],
  },
];

// Platform stats shown in the bar above the very bottom of the footer.
const stats = [
  { value: "2.1M+", label: "ACTIVE RANKERS" },
  { value: "480K", label: "DAILY VOTES" },
  { value: "38K", label: "CREATORS" },
  { value: "120+", label: "COUNTRIES" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      {/* --- Top CTA banner --- */}
      <p className="mb-4 text-center text-lg font-extrabold text-pink-400">
        Every vote climbs the ladder.
      </p>

      <div className="rounded-3xl bg-gradient-to-br from-cyan-100 to-white px-6 py-12 text-center">
        <p className="text-xs font-bold tracking-widest text-rc-purple-dark">
          JOIN THE MOVEMENT
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-rc-black sm:text-5xl">
          Watch. Rank.
          <br />
          <span className="text-rc-purple">Be Heard.</span>
        </h2>
        <p className="mt-3 text-sm text-rc-gray-600">
          The ranking ecosystem in your pocket.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 ">
          <Button variant="black" className="gap-2 rounded-3xl">
            <span aria-hidden> </span> Download on App Store
          </Button>
          <Button variant="black" className="gap-2 rounded-3xl">
            <span aria-hidden>▶</span> Get it on Google Play
          </Button>
        </div>
      </div>

      {/* --- Link columns --- */}
      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {linkColumns.map((column) => (
          <div key={column.title}>
            <p className="mb-3 text-xs font-extrabold tracking-wide text-rc-purple-dark">
              {column.title}
            </p>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-rc-gray-600 hover:text-rc-purple"
                  >
                    {link} <span className="text-rc-gray-400">›</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- Stats bar --- */}
      <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 shadow-sm sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-extrabold text-rc-purple">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-wide text-rc-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* --- Bottom bar: made-with-love note + social icons --- */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
        <p className="text-xs text-rc-gray-600">
          Made with <span className="text-rc-purple">♥</span> for creators and
          content lovers.
        </p>
        <div className="flex gap-3">
          {/* Replace these letters with real react-icons / lucide-react
              icons once that package is installed. */}
          {["IG", "TW", "YT", "IN"].map((social) => (
            <span
              key={social}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-rc-purple-light text-[10px] font-bold text-rc-purple-dark"
            >
              {social}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient accent strip, matches the screenshot */}
      <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-rc-purple to-pink-400" />
    </footer>
  );
}
