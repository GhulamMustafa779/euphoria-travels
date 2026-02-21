import { Resend } from "resend";

const apiKey = process.env.PUBLIC_NEXT_RESEND_API_KEY;

if (!apiKey) {
  console.warn("RESEND_API_KEY is not set. Email sending will fail.");
}

export const resend = new Resend(apiKey);

/** From address must use a domain verified in Resend (e.g. onboarding@resend.dev for testing). */
export const DEFAULT_FROM_EMAIL =
  process.env.PUBLIC_NEXT_RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
export const DEFAULT_FROM_NAME =
  process.env.PUBLIC_NEXT_RESEND_FROM_NAME ?? "Euphoria Travels";
