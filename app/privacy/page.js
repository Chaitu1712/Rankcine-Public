import React from 'react';

export const metadata = {
  title: "Privacy Policy | Rank Cine",
  description: "Privacy Policy and Data Protection guidelines for Rank Cine.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-rc-black">
      <div className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm font-bold text-rc-gray-600">Effective Date: September 6, 2026</p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-rc-gray-600">
        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">1. Introduction</h2>
          <p>
            Welcome to Rank Cine ("Platform", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000. This policy explains how we collect, process, and safeguard your data when you use our mobile application and web portals.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">2. Data We Collect</h2>
          <p className="mb-2">We collect the following categories of data:</p>
          <ul className="list-inside list-disc space-y-1 ml-4">
            <li><strong>Identity & Contact Data:</strong> Name, phone number, email address, and date of birth.</li>
            <li><strong>Biometric & Media Data:</strong> Audio and video recordings voluntarily submitted during the media evaluation process.</li>
            <li><strong>Technical Data:</strong> IP addresses, device identifiers, and platform usage metrics.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">3. How We Use Your Data</h2>
          <p className="mb-2">Your data is processed strictly for the following purposes:</p>
          <ul className="list-inside list-disc space-y-1 ml-4">
            <li>To verify identity and prevent sybil attacks or review fraud.</li>
            <li>To process audio and video reviews through Google Gemini AI for transcription, sentiment analysis, and moderation.</li>
            <li>To calculate community consensus percentiles and allocate sponsor rewards.</li>
            <li>To deliver aggregated, anonymized demographic insights to content producers.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">4. Data Sharing & Third Parties</h2>
          <p>
            We do not sell your personal data. Media reviews (audio/video/text) are securely transmitted to Google Cloud (Gemini AI) strictly for processing and evaluation. Aggregated rating data and demographic segments (e.g., "18-24 Male") are shared with Producers and Brands, but individual personal identifiers remain obfuscated.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">5. Your Rights Under DPDP Act 2023</h2>
          <p className="mb-2">As a Data Principal, you hold the right to:</p>
          <ul className="list-inside list-disc space-y-1 ml-4">
            <li>Request a summary of your personal data being processed.</li>
            <li>Request correction, completion, or erasure of your personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>Nominate an individual to act on your behalf in the event of incapacity.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-rc-black">6. Grievance Redressal</h2>
          <p>
            In accordance with the IT Act 2000 and DPDP Act 2023, if you have any discrepancies or grievances regarding the processing of your data, please contact our Grievance Officer at:
          </p>
          <p className="mt-2 font-bold text-rc-black">Email: grievance@rankcine.com</p>
        </section>
      </div>
    </main>
  );
}