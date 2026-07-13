"use client";

import { useState } from "react";
import type { PageId, ServiceId } from "@/lib/content";
import Icon, { ArrowIcon, type IconName } from "@/components/ui/Icon";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
const contactItems: [string, string, string, IconName][] = [
  ["Address", "1054 Budapest, Honvéd utca 8.", "Budapest office location", "pin"],
  ["Phone", "+36203769275", "For direct project and business enquiries", "phone"],
  ["Email", "info@andaluciagroup.eu", "For project enquiries and general questions", "mail"],
  ["Geographic Coverage", "Europe · MENA · Central Asia", "Available for international project deployments", "globe"],
];

export default function ContactPage(_props: PageProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setStatusMessage("");

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message ?? "Unable to send your enquiry.");

      form.reset();
      setStatus("success");
      setStatusMessage(result.message ?? "Your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please email info@andaluciagroup.eu.",
      );
    }
  }

  return (
    <div id="page-contact" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Contact</div>
          <h1>Let's discuss<br />your <em>project.</em></h1>
          <p style={{ fontSize: 16, color: "rgba(255,246,229,.5)", maxWidth: 500, marginTop: 20, lineHeight: 1.75 }}>
            We respond to all enquiries within three business days. For urgent requirements, please note this in your message.
          </p>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="contact-layout">
            <div>
              <div className="map-box">
                <iframe
                  title="Andalucia Engineering Consulting location map"
                  src="https://www.google.com/maps?q=1054%20Budapest%2C%20Honv%C3%A9d%20utca%208&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {contactItems.map(([label, value, sub, icon]) => (
                <div className="ci-block" key={label}>
                  <div className="ci-icon"><Icon name={icon} /></div>
                  <div><div className="ci-label">{label}</div><div className="ci-value">{value}</div><div className="ci-sub">{sub}</div></div>
                </div>
              ))}
              <div className="response-box">
                <strong>Response commitment</strong>We respond to all enquiries within three business days. For urgent project requirements or time-sensitive tenders, please note this in your message and we will prioritise accordingly.
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-title">Send an enquiry</div>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input name="firstName" type="text" placeholder="Your first name" required /></div>
                <div className="form-group"><label>Last Name</label><input name="lastName" type="text" placeholder="Your last name" required /></div>
              </div>
              <div className="form-group"><label>Organisation</label><input name="organisation" type="text" placeholder="Your company or organisation" /></div>
              <div className="form-group"><label>Email Address</label><input name="email" type="email" placeholder="your.email@example.com" required /></div>
              <div className="form-group"><label>Enquiry Type</label><select name="enquiryType" defaultValue="" required><option value="">Select enquiry type</option><option>Project Consultation</option><option>Technical Advisory</option><option>Construction Supervision</option><option>Feasibility Study</option><option>Tender Support</option><option>Career / Speculative Application</option><option>Other</option></select></div>
              <div className="form-group"><label>Project Location</label><input name="projectLocation" type="text" placeholder="Where is your project located?" /></div>
              <div className="form-group"><label>Message</label><textarea name="message" placeholder="Please describe your project, the type of support you need, and your timeline. The more detail you provide, the more useful our initial response will be." required /></div>
              <button className="btn btn-gold submit-btn" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Enquiry"} <ArrowIcon /></button>
              {statusMessage ? <p className={`form-status ${status}`}>{statusMessage}</p> : null}
              <p className="privacy-note">By submitting this form you agree to our Privacy Policy. Your information will be used solely to respond to your enquiry and will not be shared with third parties.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
