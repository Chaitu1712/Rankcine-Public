// app/api/influencer-applications/route.js
//
// POST /api/influencer-applications
//
// Security measures in this file (see chat for the full 7-step checklist):
//  1. Tightened Zod validation (min AND max lengths, real email/phone checks)
//  2. Sanitizes free-text fields before storing (strips tags/angle brackets)
//  3. In-memory rate limiting per IP (5 requests / hour)
//  4. Honeypot field check (silently no-ops if a bot fills the hidden field)
//  5. Cloudflare Turnstile captcha verification
//  6. try/catch around req.json() so malformed bodies can't crash the route
//  7. Every error response sent to the client is a short, generic message —
//     real errors are only ever console.error'd server-side

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Prisma client (Prisma 7 requires an explicit driver adapter).
// Cached on globalThis so dev-mode hot reloads don't spawn a new client
// (and a new DB connection pool) on every file save.
// ---------------------------------------------------------------------------
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// ---------------------------------------------------------------------------
// STEP 3 — Very simple in-memory rate limiter.
// NOTE: resets on server restart, and does NOT work across multiple server
// instances (serverless functions, load-balanced deployments). Fine for a
// single dev server / small VPS. For Vercel or similar in production, swap
// this for @upstash/ratelimit backed by Redis instead.
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map(); // ip -> array of request timestamps

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

// ---------------------------------------------------------------------------
// STEP 2 — Minimal HTML/script stripper for free-text fields.
// Intentionally basic: strips tags and stray angle brackets so stored text
// can't inject markup if it's ever rendered in an admin dashboard later.
// For anything more elaborate, swap this for the `sanitize-html` package.
// ---------------------------------------------------------------------------
function sanitizeText(value) {
  return value
    .replace(/<[^>]*>?/gm, "") // strip full tags
    .replace(/[<>]/g, "") // strip any stray angle brackets left over
    .trim();
}

// ---------------------------------------------------------------------------
// STEP 1 — Validation schema.
// - .trim() on every string field
// - max lengths on everything (prevents someone posting a giant blob)
// - real email format check, real (loose) phone format check
// ---------------------------------------------------------------------------
const applicationSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  handle: z.string().trim().min(2).max(50),
  email: z.string().trim().email().max(150),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  country: z.string().trim().min(2).max(60),
  niche: z.string().trim().min(2).max(60),
  audienceRange: z.string().trim().min(2).max(30),
  about: z.string().trim().min(10).max(1000),
  whyJoin: z.string().trim().min(10).max(1000),

  // STEP 4 — Honeypot. Real users never see/fill this (hidden off-screen in
  // the form). Optional here so it never blocks a legit submission by
  // itself — the *value* is what we check further down.
  website: z.string().optional().default(""),

  // STEP 5 — Cloudflare Turnstile token from the widget, verified below.
  turnstileToken: z.string().min(1, "Captcha verification required"),
});

// ---------------------------------------------------------------------------
// STEP 5 — Verify the Turnstile token with Cloudflare's siteverify endpoint.
// TURNSTILE_SECRET_KEY must be set in .env (server-side only, no
// NEXT_PUBLIC_ prefix).
// ---------------------------------------------------------------------------
async function verifyTurnstile(token, ip) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(req) {
  // Best-effort real client IP (Next.js dev server won't have this header;
  // most hosts/proxies like Vercel, Cloudflare, etc. set it in production).
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  try {
    // STEP 3 — rate limit before doing any real work
    if (isRateLimited(ip)) {
      return Response.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // STEP 6 — guard against malformed / non-JSON bodies
    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json(
        { success: false, message: "Invalid request." },
        { status: 400 }
      );
    }

    // STEP 1 — validate shape/lengths
    const parsed = applicationSchema.safeParse(body);
    if (!parsed.success) {
      // Full detail stays server-side only (STEP 7)
      console.error("Validation failed:", parsed.error.issues);
      return Response.json(
        {
          success: false,
          message: "Please check your form entries and try again.",
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // STEP 4 — honeypot check. If it's filled, it's a bot. Return a
    // normal-looking success response so the bot doesn't learn it was
    // caught, but never touch the database.
    if (data.website && data.website.length > 0) {
      console.warn("Honeypot triggered from IP:", ip);
      return Response.json({ success: true });
    }

    // STEP 5 — verify captcha before touching the database
    const captchaOk = await verifyTurnstile(data.turnstileToken, ip);
    if (!captchaOk) {
      return Response.json(
        {
          success: false,
          message: "Captcha verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // STEP 2 — sanitize free-text fields before storing
    const clean = {
      fullName: sanitizeText(data.fullName),
      handle: sanitizeText(data.handle),
      email: data.email.toLowerCase(),
      phone: sanitizeText(data.phone),
      country: sanitizeText(data.country),
      niche: sanitizeText(data.niche),
      audienceRange: sanitizeText(data.audienceRange),
      about: sanitizeText(data.about),
      whyJoin: sanitizeText(data.whyJoin),
    };

    const application = await prisma.influencerApplication.create({
      data: clean,
    });

    return Response.json({ success: true, id: application.id });
  } catch (error) {
    // STEP 7 — never leak raw Prisma/DB errors to the client
    if (error.code === "P2002") {
      // Unique constraint violation. Only fires once you add @unique to a
      // field (e.g. email) on the InfluencerApplication model — currently
      // that model has no unique fields besides `id`, so this is here for
      // when you add one.
      return Response.json(
        {
          success: false,
          message: "An application with these details already exists.",
        },
        { status: 409 }
      );
    }

    console.error("Unexpected error in influencer-applications route:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// Only POST is handled here — Next.js automatically returns 405 for any
// other method on this route since no other handlers (GET, PUT, etc.) are
// exported from this file.