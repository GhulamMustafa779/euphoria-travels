import { NextRequest, NextResponse } from "next/server";
import { resend, DEFAULT_FROM_EMAIL, DEFAULT_FROM_NAME } from "@/config/resend";

export type SendEmailBody = {
  to?: string;
  subject?: string;
  /** Contact form fields (or any key-value data to include in the email). */
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  country?: string;
  message?: string;
  [key: string]: string | undefined;
};

const REQUIRED_KEYS = ["email", "message"] as const;

function validateBody(body: unknown): body is SendEmailBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return REQUIRED_KEYS.every(
    (key) => typeof b[key] === "string" && (b[key] as string).trim().length > 0,
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as unknown;

    if (!validateBody(body)) {
      return NextResponse.json(
        { error: "Missing or invalid fields. Required: email, message." },
        { status: 400 },
      );
    }

    const { to, subject, ...data } = body as SendEmailBody;
    const recipient = (to ??
      process.env.PUBLIC_NEXT_RESEND_TO_EMAIL ??
      body.email) as string;
    const emailSubject =
      subject ??
      `Contact from ${body.firstName ?? ""} ${body.lastName ?? ""}`.trim() ??
      "New contact form submission";

    const html = Object.entries(data)
      .filter(([, v]) => v != null && String(v).trim() !== "")
      .map(
        ([k, v]) =>
          `<p><strong>${k}:</strong> ${String(v).replace(/\n/g, "<br>")}</p>`,
      )
      .join();

    console.log(DEFAULT_FROM_NAME, DEFAULT_FROM_EMAIL);

    const { error } = await resend.emails.send({
      from: `${DEFAULT_FROM_NAME} <${DEFAULT_FROM_EMAIL}>`,
      to: [recipient],
      subject: emailSubject,
      html: html || `<p>${body.message}</p>`,
      replyTo: body.email ?? undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Email sent." });
  } catch (err) {
    console.error("Send email error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email" },
      { status: 500 },
    );
  }
}
