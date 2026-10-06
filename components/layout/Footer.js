import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
 
const linkColumns = [
  {
    title: "EXPLORE",
    links: [
      { label: "Home", href: "/" },
      { label: "About the Team", href: "/about-team" },
      { label: "Publisher Studio", href: "/publisher" },
      { label: "Consumer App", href: "/ranker" },
      { label: "Brand Sponsors", href: "/brands" },
      { label: "Influencer Program", href: "/influencers" },
    ],
  },
  {
    title: "SUPPORT & CONTACT",
    links: [
      { label: "FAQ & Help Centre", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "B2B Partnerships", href: "https://studio.rankcine.com/register" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const stats = [
  { value: "2.1M+", label: "ACTIVE RANKERS" },
  { value: "480K", label: "DAILY VOTES" },
  { value: "38K", label: "CREATORS" },
  { value: "120+", label: "COUNTRIES" },
];

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/rankcine_?igsi=MTJzcW1xdmVhY2lxaQ%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/rankcine_1?s=11", label: "X" },
  { icon: FaYoutube, href: "https://youtube.com/@rankcine_1?si=gtvRW3ZfzpU92m0e", label: "YouTube" },
  { icon: FaFacebook, href: "https://facebook.com/yourhandle", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-16">
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

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/coming-soon">
            <Button as="span" variant="outline-purple" className="gap-2 rounded-3xl">
              <span aria-hidden><img src="/images/app-store.png" alt="Download on App Store" className="h-full w-full object-contain" style={{maxHeight: "5vh"}} /></span> Download on App Store
            </Button>
          </Link>
          <Link href="/coming-soon">
            <Button as="span" variant="outline-green" className="gap-2 rounded-3xl">
              <span aria-hidden><img src="/images/play-store.png" alt="Get it on Google Play" className="h-full w-full object-contain" style={{maxHeight: "5vh"}} /></span> Get it on Google Play
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {linkColumns.map((column) => (
          <div key={column.title}>
            <p className="mb-3 text-xs font-extrabold tracking-wide text-rc-purple-dark">
              {column.title}
            </p>
            <ul className="space-y-2">
              {column.links.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('http') ? (
                    <a href={item.href} className="text-sm text-rc-gray-600 hover:text-rc-purple transition-colors">
                      {item.label} <span className="text-rc-gray-400">›</span>
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm text-rc-gray-600 hover:text-rc-purple transition-colors">
                      {item.label} <span className="text-rc-gray-400">›</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
        <p className="text-xs text-rc-gray-600">
          &copy; {new Date().getFullYear()} Rankcine. All rights reserved. This
          product and its content are protected by copyright law.
        </p>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-rc-purple-light text-rc-purple-dark transition-colors hover:bg-rc-purple-dark hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-rc-purple to-pink-400" />
    </footer>
  );
}