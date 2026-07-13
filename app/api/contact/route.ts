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
      <td style="padding:14px 0;border-bottom:1px solid #e7e2d8;">
        <div style="font-size:11px;line-height:1.3;text-transform:uppercase;letter-spacing:.12em;color:#6f7776;font-weight:700;margin-bottom:5px;">${label}</div>
        <div style="font-size:15px;line-height:1.55;color:#1f2a2e;font-weight:500;">${escapeHtml(content)}</div>
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
  const replyHref = `mailto:${data.email}?subject=${encodeURIComponent(
    `Re: Website enquiry - ${data.enquiryType}`,
  )}&body=${encodeURIComponent(`Dear ${data.firstName},\n\n`)}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Website enquiry from ${escapeHtml(fullName)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f3f1ec;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#1f2a2e;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f1ec;margin:0;padding:34px 14px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;background:#ffffff;border:1px solid #d9ddd9;border-radius:10px;overflow:hidden;">
            <tr>
              <td style="background:#132f35;padding:28px 34px;border-bottom:5px solid #cda24a;">
                <div style="font-size:11px;line-height:1;text-transform:uppercase;letter-spacing:.18em;color:#cda24a;font-weight:700;margin-bottom:14px;">Andalucia Engineering Consulting</div>
                <h1 style="margin:0;color:#ffffff;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:25px;line-height:1.25;font-weight:700;">New Contact Form Enquiry</h1>
                <p style="margin:11px 0 0;color:#dce5e3;font-size:14px;line-height:1.65;">Received from ${escapeHtml(fullName)} via andaluciagroup.eu.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 34px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 20px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f5ef;border:1px solid #e2d8c5;border-left:5px solid #cda24a;border-radius:8px;">
                        <tr>
                          <td style="padding:22px 24px;">
                            <div style="font-size:11px;line-height:1.3;text-transform:uppercase;letter-spacing:.12em;color:#6f7776;font-weight:700;margin-bottom:10px;">Client message</div>
                            <div style="font-size:16px;line-height:1.78;color:#1f2a2e;">${safeMessage}</div>
                          </td>
                        </tr>
                      </table>
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
              <td style="padding:18px 34px 34px;">
                <a href="${replyHref}" target="_blank" style="display:inline-block;background:#132f35;color:#ffffff;text-decoration:none;font-size:14px;line-height:1;font-weight:700;padding:14px 20px;border-radius:4px;">Compose Reply</a>
                <p style="margin:18px 0 0;color:#6f7776;font-size:12px;line-height:1.65;">This email was generated automatically from the Andalucia Engineering Consulting website contact form. The reply button opens a new email addressed to ${escapeHtml(data.email)}.</p>
              </td>
            </tr>
            <tr>
              <td style="background:#f7f5ef;border-top:1px solid #e7e2d8;padding:16px 34px;color:#6f7776;font-size:11px;line-height:1.6;">
                Andalucia Engineering Consulting · Budapest, Hungary · info@andaluciagroup.eu
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
