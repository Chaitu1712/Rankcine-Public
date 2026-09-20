"use client";

// components/influencers/InfluencerForm.js
//
// Real, working form: controlled inputs, submit handling, plus the two
// client-side pieces of the security checklist:
//   - a hidden honeypot field bots tend to fill in
//   - a Cloudflare Turnstile captcha widget, whose token gets sent to the
//     server and verified there before anything is saved
//
 

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import Reveal from "@/components/ui/Reveal";

const socialPlatforms = [
  { key: "instagram", glyph: "📷" },
  { key: "youtube", glyph: "▶️" },
  { key: "tiktok", glyph: "🎵" },
  { key: "facebook", glyph: "📘" },
  { key: "x", glyph: "✕" },
  { key: "other", glyph: "🔗" },
];

const initialFormState = {
  fullName: "",
  handle: "",
  email: "",
  phone: "",
  dob: "",
  country: "",
  niche: "",
  audienceRange: "",
  about: "",
  whyJoin: "",
  // Honeypot — real users never see this field. Any real fill-in on submit
  // tells the server it's almost certainly a bot.
  website: "",
};

export default function InfluencerForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileWidgetRef = useRef(null);
  const turnstileIdRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Register the global callback Turnstile calls once a person passes the
  // challenge. Must exist on `window` before the widget script runs it.
  useEffect(() => {
  if (!turnstileReady || !turnstileWidgetRef.current || !window.turnstile) {
    return;
  }
  if (turnstileIdRef.current) return;

  turnstileIdRef.current = window.turnstile.render(turnstileWidgetRef.current, {
    sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    callback: (token) => setTurnstileToken(token),
    "expired-callback": () => setTurnstileToken(""),
  });
}, [turnstileReady]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Please complete the captcha before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/influencer-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        alert(result.message || "Something went wrong. Please try again.");
        return;
      }

      alert("Application submitted successfully!");
      setFormData(initialFormState);
      setTurnstileToken("");
      // Reset the widget so a second submission needs a fresh token
      if (window.turnstile && turnstileIdRef.current) {
        window.turnstile.reset(turnstileIdRef.current);
      }
    } catch (error) {
      console.error("Network or unexpected error submitting form:", error);
      alert("Network error — please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
<section id="influencer-form" className="mx-auto max-w-4xl px-6 py-16">
        {/* Loads the Turnstile widget script once, client-side only */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
      />

      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-4xl">📋✏️</span>
          <p className="text-sm font-semibold text-rc-gray-600">
            You&apos;re Ready to Begin.
          </p>
          <h2 className="text-3xl font-extrabold text-rc-black sm:text-4xl">
            Start Your Influencer
            <br />
            <span className="text-rc-purple">Onboarding</span>
          </h2>
          <p className="max-w-md text-sm text-rc-gray-600">
            Fill out the form below and join a community that values your
            influence and empowers your journey.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl bg-white p-8 shadow-[0_0_40px_rgba(147,51,234,0.12)] ring-1 ring-rc-purple-light"
        >
          <p className="mb-6 text-center text-sm font-bold text-rc-purple">
            Influencer Onboarding Form (Sample)
          </p>

          {/* --------------------------------------------------------- */}
          {/* Honeypot field — hidden from real users via off-screen     */}
          {/* positioning (not display:none, which some bots detect and */}
          {/* skip). Real visitors will never see or fill this in.       */}
          {/* --------------------------------------------------------- */}
          <div
            style={{ position: "absolute", left: "-9999px" }}
            aria-hidden="true"
          >
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name *">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="input-field"
              />
            </Field>

            <Field label="Username / Handle *">
              <input
                type="text"
                name="handle"
                value={formData.handle}
                onChange={handleChange}
                required
                placeholder="@yourhandle"
                className="input-field"
              />
            </Field>

            <Field label="Email Address *">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="input-field"
              />
            </Field>

            <Field label="Phone Number *">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="input-field"
              />
            </Field>

            <Field label="Date of Birth *">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="input-field"
              />
            </Field>

            <Field label="Country *">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select your country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </Field>
          </div>

          {/* Social media links */}
          <div className="mt-5">
            <p className="mb-2 text-xs font-bold text-rc-black">
              Social Media Links *
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {socialPlatforms.map((platform) => (
                <span
                  key={platform.key}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-rc-gray-50 text-sm transition-transform duration-200 hover:scale-110"
                >
                  {platform.glyph}
                </span>
              ))}
              <input
                type="text"
                placeholder="Add other social media link"
                className="input-field flex-1"
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Content Category / Niche *">
              <select
                name="niche"
                value={formData.niche}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select your primary niche</option>
                <option value="fashion">Fashion</option>
                <option value="tech">Tech</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="fitness">Fitness</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </Field>

            <Field label="Audience Range *">
              <select
                name="audienceRange"
                value={formData.audienceRange}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select audience range</option>
                <option value="0-10k">0 - 10K</option>
                <option value="10k-100k">10K - 100K</option>
                <option value="100k-1m">100K - 1M</option>
                <option value="1m+">1M+</option>
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Tell us about yourself *">
              <input
                type="text"
                name="about"
                value={formData.about}
                onChange={handleChange}
                required
                placeholder="Share your journey, content style and what makes you unique... (min 10 characters)"
                className="input-field"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Why do you want to join as an influencer on RankCine? *">
              <input
                type="text"
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                required
                placeholder="Your answer... (min 10 characters)"
                className="input-field"
              />
            </Field>
          </div>

          {/* Turnstile captcha widget renders into this div */}
          <div className="mt-6 flex justify-center">
            <div ref={turnstileWidgetRef} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full rounded-pill bg-rc-purple py-3 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Application →"}
          </button>
        </form>
      </Reveal>

      <style jsx>{`
        :global(.input-field) {
          width: 100%;
          border: 1px solid #f4f4f5;
          border-radius: 0.75rem;
          padding: 0.6rem 0.9rem;
          font-size: 0.8rem;
          transition: border-color 0.2s;
        }
        :global(.input-field:focus) {
          outline: none;
          border-color: #6c5ce7;
        }
      `}</style>
    </section>
  );
}

// Small label + input wrapper used throughout the form above.
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-rc-black">
        {label}
      </span>
      {children}
    </label>
  );
}