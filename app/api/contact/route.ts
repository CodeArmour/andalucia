import { NextResponse } from "next/server";

const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@andaluciagroup.eu";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "Andalucia Website <info@andaluciagroup.eu>";

function value(payload: Record<string, unknown>, key: string) {
  const raw = payload[key];
  return typeof raw === "string" ? raw.trim() : "";
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(label: string, content: string) {
  return `
    <tr>
      <td style="padding:0 0 14px;">
        <div style="font-size:12px;line-height:1.3;text-transform:uppercase;letter-spacing:.08em;color:#7b746b;font-weight:700;margin-bottom:6px;">${label}</div>
        <div style="font-size:15px;line-height:1.55;color:#1f2a2e;font-weight:600;">${escapeHtml(content)}</div>
      </td>
    </tr>
  `;
}

function buildEmailHtml(data: {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  enquiryType: string;
  projectLocation: string;
  message: string;
}) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
  const replyHref = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(
    `Re: ${data.enquiryType} enquiry`,
  )}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Website enquiry from ${escapeHtml(fullName)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4efe5;font-family:Arial,Helvetica,sans-serif;color:#1f2a2e;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4efe5;margin:0;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#fffaf0;border:1px solid #e1d6c2;border-radius:18px;overflow:hidden;">
            <tr>
              <td style="background:#17343a;padding:30px 32px;">
                <div style="font-size:12px;line-height:1;text-transform:uppercase;letter-spacing:.16em;color:#d6a84f;font-weight:700;margin-bottom:16px;">Andalucia Engineering Consulting</div>
                <h1 style="margin:0;color:#fff6e5;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.12;font-weight:400;">New website enquiry</h1>
                <p style="margin:14px 0 0;color:rgba(255,246,229,.72);font-size:15px;line-height:1.65;">A contact form submission was received from ${escapeHtml(fullName)}.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 32px 10px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 18px;">
                      <div style="background:#efe5d1;border-left:4px solid #d6a84f;border-radius:12px;padding:18px 20px;">
                        <div style="font-size:12px;line-height:1.3;text-transform:uppercase;letter-spacing:.08em;color:#78613a;font-weight:700;margin-bottom:8px;">Message</div>
                        <div style="font-size:16px;line-height:1.75;color:#243236;">${safeMessage}</div>
                      </div>
                    </td>
                  </tr>
                  ${field("Name", fullName)}
                  ${field("Email", data.email)}
                  ${field("Organisation", data.organisation || "Not provided")}
                  ${field("Enquiry type", data.enquiryType)}
                  ${field("Project location", data.projectLocation || "Not provided")}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 32px;">
                <a href="${replyHref}" style="display:inline-block;background:#d6a84f;color:#172b31;text-decoration:none;font-size:14px;line-height:1;font-weight:800;padding:15px 20px;border-radius:999px;">Reply to ${escapeHtml(data.firstName)}</a>
                <p style="margin:20px 0 0;color:#7b746b;font-size:12px;line-height:1.6;">This message was sent from the contact form on andaluciagroup.eu. Use the sender email above for direct correspondence.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
      html: buildEmailHtml({
        firstName,
        lastName,
        email,
        organisation,
        enquiryType,
        projectLocation,
        message,
      }),
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
