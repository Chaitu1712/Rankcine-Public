import React from 'react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: "Coming Soon | Rank Cine",
  description: "The Rank Cine mobile app is dropping soon on iOS and Android.",
};

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <Reveal>
        <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rc-purple-light/50 text-4xl shadow-inner mx-auto">
          🚀
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-rc-black sm:text-6xl">
          App Dropping <span className="text-rc-purple">Soon.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-rc-gray-600">
          We are putting the final touches on the Rank Cine mobile experience. You will soon be able to evaluate content, build your accuracy tier, and unlock consensus rewards directly from your phone.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button as="span" variant="outline-purple" className="px-8 py-3">
              ← Back Home
            </Button>
          </Link>
          <a href="https://studio.rankcine.com/register">
            <Button as="span" variant="purple" className="px-8 py-3">
              Join as Publisher Instead
            </Button>
          </a>
        </div>
      </Reveal>
    </main>
  );
}