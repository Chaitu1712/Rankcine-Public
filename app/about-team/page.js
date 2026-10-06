"use client";

import Reveal from "@/components/ui/Reveal";

const teamMembers = [
  {
    id: "member-1",
    name: "Chaitanya Pandey",
    role: "Founder & Chief Executive Officer",
    badge: "Leadership",
    bio: "Passionate about reshaping entertainment discovery, consensus-driven community auditing, and empowering independent filmmakers with transparent audience intelligence.",
    avatarPlaceholder: "👤",
    socials: {
      linkedin: "#",
      x: "#",
      email: "contact@rankcine.com",
    },
  },
  {
    id: "member-2",
    name: "Om Pannase",
    role: "Co-Founder & Chief Technology Officer",
    badge: "Engineering & AI",
    bio: "Architecting real-time consensus frequency models, distributed media evaluation pipelines, and high-performance multimodal streaming systems.",
    avatarPlaceholder: "⚙️",
    socials: {
      linkedin: "#",
      x: "#",
      email: "engineering@rankcine.com",
    },
  },
  {
    id: "member-3",
    name: "Sneha Muley",
    role: "Head of Product & Community Growth",
    badge: "Product & Operations",
    bio: "Leading creator partnerships, user trust & safety programs, and scaling the Rate-to-Earn ecosystem across studios and film reviewers worldwide.",
    avatarPlaceholder: "🚀",
    socials: {
      linkedin: "#",
      x: "#",
      email: "growth@rankcine.com",
    },
  },
];

export default function AboutTeamPage() {
  return (
    <main className="min-h-screen bg-rc-gray-50/50 py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-rc-purple bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              The Leadership
            </span>
            <h1 className="text-4xl font-extrabold text-rc-black tracking-tight sm:text-5xl">
              Meet the Minds Behind <span className="text-rc-purple">Rank Cine</span>
            </h1>
            <p className="max-w-xl text-sm text-rc-gray-600 leading-relaxed mt-2">
              We are a passionate team building the future of decentralized film critique, Rate-to-Earn audience rewards, and AI-powered creator analytics.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 120}>
              <div className="flex flex-col justify-between h-full rounded-3xl bg-white p-8 shadow-sm border border-zinc-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-rc-purple-light">
                <div>
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-4xl mb-6 shadow-inner">
                    {member.avatarPlaceholder}
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-rc-purple bg-purple-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      {member.badge}
                    </span>
                    <h3 className="text-lg font-bold text-rc-black">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-rc-gray-600 mt-0.5 mb-4">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed text-center font-normal border-t border-zinc-100 pt-4">
                    {member.bio}
                  </p>
                </div>

                <div className="flex justify-center items-center gap-4 pt-6 mt-6 border-t border-zinc-100">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-xs text-zinc-600 hover:text-rc-purple hover:border-rc-purple transition-colors"
                    title="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href={member.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-xs text-zinc-600 hover:text-rc-purple hover:border-rc-purple transition-colors"
                    title="X / Twitter"
                  >
                    ✕
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-xs text-zinc-600 hover:text-rc-purple hover:border-rc-purple transition-colors"
                    title="Email"
                  >
                    ✉
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}