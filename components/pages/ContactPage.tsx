import type { PageId, ServiceId } from "@/lib/content";
import Icon, { ArrowIcon, type IconName } from "@/components/ui/Icon";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
const contactItems: [string, string, string, IconName][] = [
  [
    "Address",
    "1054 Budapest, Honvéd utca 8.",
    "Budapest office location",
    "pin",
  ],
  [
    "Phone",
    "+36203769275",
    "For direct project and business enquiries",
    "phone",
  ],
  [
    "Email",
    "info@andalucia-engineering.com",
    "For project enquiries and general questions",
    "mail",
  ],
  [
    "Geographic Coverage",
    "Europe · MENA · Central Asia",
    "Available for international project deployments",
    "globe",
  ],
];

export default function ContactPage(_props: PageProps) {
  return (
    <div id="page-contact" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Contact</div>
          <h1>
            Let's discuss
            <br />
            your <em>project.</em>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,246,229,.5)",
              maxWidth: 500,
              marginTop: 20,
              lineHeight: 1.75,
            }}
          >
            We respond to all enquiries within three business days. For urgent
            requirements, please note this in your message.
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
                  <div className="ci-icon">
                    <Icon name={icon} />
                  </div>
                  <div>
                    <div className="ci-label">{label}</div>
                    <div className="ci-value">{value}</div>
                    <div className="ci-sub">{sub}</div>
                  </div>
                </div>
              ))}
              <div className="response-box">
                <strong>Response commitment</strong>We respond to all enquiries
                within three business days. For urgent project requirements or
                time-sensitive tenders, please note this in your message and we
                will prioritise accordingly.
              </div>
            </div>
            <div>
              <div className="form-title">Send an enquiry</div>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-group">
                <label>Organisation</label>
                <input type="text" placeholder="Your company or organisation" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label>Enquiry Type</label>
                <select defaultValue="">
                  <option value="">Select enquiry type</option>
                  <option>Project Consultation</option>
                  <option>Technical Advisory</option>
                  <option>Construction Supervision</option>
                  <option>Feasibility Study</option>
                  <option>Tender Support</option>
                  <option>Career / Speculative Application</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Location</label>
                <input
                  type="text"
                  placeholder="Where is your project located?"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Please describe your project, the type of support you need, and your timeline. The more detail you provide, the more useful our initial response will be." />
              </div>
              <button className="btn btn-gold submit-btn">
                Send Enquiry <ArrowIcon />
              </button>
              <p className="privacy-note">
                By submitting this form you agree to our Privacy Policy. Your
                information will be used solely to respond to your enquiry and
                will not be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
