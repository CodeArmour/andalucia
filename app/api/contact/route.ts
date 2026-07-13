import { NextResponse } from "next/server";

const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@andaluciagroup.eu";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "Andalucia Website <info@andaluciagroup.eu>";

function value(payload: Record<string, unknown>, key: string) {
  const raw = payload[key];
  return typeof raw === "string" ? raw.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return NextResponse.json({ message: "Invalid enquiry data." }, { status: 400 });
  }

  const firstName = value(payload, "firstName");
  const lastName = value(payload, "lastName");
  const email = value(payload, "email");
  const organisation = value(payload, "organisation");
  const enquiryType = value(payload, "enquiryType");
  const projectLocation = value(payload, "projectLocation");
  const message = value(payload, "message");

  if (!firstName || !lastName || !email || !enquiryType || !message) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "Email delivery is not configured yet. Please email info@andaluciagroup.eu directly.",
      },
      { status: 503 },
    );
  }

  const subject = `Website enquiry: ${enquiryType} - ${firstName} ${lastName}`;
  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Organisation: ${organisation || "Not provided"}`,
    `Enquiry type: ${enquiryType}`,
    `Project location: ${projectLocation || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message:
          "Unable to send your enquiry. Please email info@andaluciagroup.eu directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Your enquiry has been sent to info@andaluciagroup.eu.",
  });
}
