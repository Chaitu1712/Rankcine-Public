import React from 'react';

export const metadata = {
  title: "Terms of Service | Rank Cine",
  description: "Terms of Service and Platform Rules for Rank Cine.",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-rc-black">
      <div className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm font-bold text-rc-gray-600">Effective Date: September 6, 2026</p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-rc-gray-600">
        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Rank Cine, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the platform.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">2. Platform Mechanics</h2>
          <p>
            Rank Cine operates a 0.5 Consensus Mode evaluation system. Users ("Rankers") evaluate media assets. Rewards, vouchers, and leaderboards are calculated dynamically based on proximity to the crowd consensus peak. Rank Cine reserves the right to withhold or void rewards if automated manipulation, bot activity, or review-bombing is detected.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">3. User Conduct & Moderation</h2>
          <p className="mb-2">You agree not to submit reviews or content that is:</p>
          <ul className="list-inside list-disc space-y-1 ml-4">
            <li>Profane, abusive, or explicitly toxic.</li>
            <li>A personal attack against creators, actors, or other users.</li>
            <li>Spam, repetitive, or machine-generated via unauthorized scripts.</li>
          </ul>
          <p className="mt-2">
            Our AI evaluation engine and administration team actively monitor submissions. Violations will result in immediate content removal, score deductions, and potential account suspension.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">4. Creator & Brand Obligations</h2>
          <p>
            Producers and Brands utilizing the platform to host campaigns must honor the reward pools allocated during campaign creation. Rank Cine is not liable for third-party voucher fulfillment failures, though we will investigate fraudulent sponsor activity.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">5. Intellectual Property</h2>
          <p>
            All platform designs, AI orchestration logic, and proprietary code belong to Rank Cine. Media assets uploaded by Producers remain the intellectual property of the respective studios, licensed to Rank Cine solely for the purpose of evaluation and display on the platform.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising out of or in connection with the use of the platform shall be subject to the exclusive jurisdiction of the courts located in India.
          </p>
        </section>
      </div>
    </main>
  );
}