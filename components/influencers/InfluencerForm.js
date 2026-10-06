"use client";

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
  socialLink: "",
  niche: "",
  audienceRange: "",
  about: "",
  whyJoin: "",
  website: "", // Honeypot
};

export default function InfluencerForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileWidgetRef = useRef(null);
  const turnstileIdRef = useRef(null);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (!turnstileReady || !turnstileWidgetRef.current || !window.turnstile || !turnstileSiteKey) {
      return;
    }
    if (turnstileIdRef.current) return;

    turnstileIdRef.current = window.turnstile.render(turnstileWidgetRef.current, {
      sitekey: turnstileSiteKey,
      callback: (token) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
    });
  }, [turnstileReady, turnstileSiteKey]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatusMessage(null);

    // Bot honeypot check
    if (formData.website) {
      setStatusMessage({ type: "success", text: "Application submitted successfully!" });
      setFormData(initialFormState);
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setStatusMessage({ type: "error", text: "Please complete the captcha verification." });
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
        throw new Error(result.message || "Failed to submit application.");
      }

      setStatusMessage({ type: "success", text: "Application submitted successfully! Our team will contact you shortly." });
      setFormData(initialFormState);
      setTurnstileToken("");

      if (window.turnstile && turnstileIdRef.current) {
        window.turnstile.reset(turnstileIdRef.current);
      }
    } catch (error) {
      setStatusMessage({ type: "error", text: error.message || "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="influencer-form" className="mx-auto max-w-4xl px-6 py-16">
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
        />
      )}

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
            Influencer Onboarding Form
          </p>

          {statusMessage && (
            <div
              className={`mb-6 p-4 rounded-xl text-xs font-semibold ${
                statusMessage.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          {/* Honeypot field */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
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

          <div className="mt-5">
            <p className="mb-2 text-xs font-bold text-rc-black">
              Primary Social Media Link *
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
                type="url"
                name="socialLink"
                value={formData.socialLink}
                onChange={handleChange}
                required
                placeholder="https://instagram.com/yourhandle"
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
                <option value="entertainment">Entertainment & Film</option>
                <option value="music">Music & Audio</option>
                <option value="tech">Tech & Gaming</option>
                <option value="lifestyle">Lifestyle & Culture</option>
                <option value="fashion">Fashion & Arts</option>
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
              <textarea
                name="about"
                rows={3}
                value={formData.about}
                onChange={handleChange}
                required
                placeholder="Share your journey, content style and what makes you unique..."
                className="input-field resize-none"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Why do you want to join as an influencer on RankCine? *">
              <textarea
                name="whyJoin"
                rows={3}
                value={formData.whyJoin}
                onChange={handleChange}
                required
                placeholder="Your motivation, creator goals, and audience vision..."
                className="input-field resize-none"
              />
            </Field>
          </div>

          {turnstileSiteKey && (
            <div className="mt-6 flex justify-center">
              <div ref={turnstileWidgetRef} />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full rounded-full bg-rc-purple py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:shadow-lg disabled:opacity-50"
            style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
          >
            {isSubmitting ? "Submitting Application..." : "Submit Application →"}
          </button>
        </form>
      </Reveal>

      <style jsx>{`
        :global(.input-field) {
          width: 100%;
          border: 1px solid #e4e4e7;
          border-radius: 0.75rem;
          padding: 0.65rem 0.9rem;
          font-size: 0.825rem;
          color: #18181b;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.input-field:focus) {
          outline: none;
          border-color: #9333ea;
          box-shadow: 0 0 0 2px rgba(147, 51, 234, 0.1);
        }
      `}</style>
    </section>
  );
}

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