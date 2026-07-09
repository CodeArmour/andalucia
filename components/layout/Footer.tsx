import type { PageId, ServiceId } from "@/lib/content";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type FooterProps = {
  onNavigate: (page: PageId, service?: ServiceId) => void;
};

const serviceLinks: { label: string; service: ServiceId }[] = [
  { label: "Civil Engineering", service: "civil" },
  { label: "Water Resources", service: "water" },
  { label: "Construction Supervision", service: "supervision" },
  { label: "Project Management", service: "pm" },
  { label: "Technical Advisory", service: "advisory" },
  { label: "Quantity Surveying", service: "qs" },
];
const company: PageId[] = [
  "about",
  "team",
  "projects",
  "industries",
  "insights",
  "careers",
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-grid">
          <div>
            <button className="logo" onClick={() => onNavigate("home")}>
              <div className="logo-box">
                <PlaceholderImage
                  src="/home/logo.png"
                  label="Andalucia emblem"
                  alt="Andalucia Engineering Consulting star emblem"
                />
              </div>
              <div className="logo-words">
                <b>Andalucia</b>
                <span>Engineering Consulting</span>
              </div>
            </button>
            <p className="foot-desc">
              Civil and water infrastructure consultancy based in Budapest,
              Hungary. Technical advisory, construction supervision, and project
              management for international infrastructure programmes.
            </p>
            <div
              style={{
                fontFamily: "var(--ff-h)",
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.2)",
              }}
            >
              Location
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.3)",
                marginTop: 6,
                lineHeight: 1.6,
              }}
            >
              Budapest, Hungary
              <br />
              1054 Budapest, Honvéd utca 8.
            </div>
          </div>
          <div>
            <div className="foot-col-title">Services</div>
            <div className="foot-links">
              {serviceLinks.map((link) => (
                <button
                  key={link.service}
                  onClick={() => onNavigate("services", link.service)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="foot-col-title">Company</div>
            <div className="foot-links">
              {company.map((id) => (
                <button key={id} onClick={() => onNavigate(id)}>
                  {id === "about"
                    ? "About Us"
                    : id[0].toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="foot-col-title">Contact</div>
            <div className="foot-links">
              <button onClick={() => onNavigate("contact")}>
                Get in Touch
              </button>
              <button onClick={() => onNavigate("contact")}>
                Schedule Consultation
              </button>
              <button onClick={() => onNavigate("contact")}>
                Careers Enquiries
              </button>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="foot-legal">
            © 2025 Andalucia Engineering Consulting. All rights reserved.
          </div>
          <div className="foot-leg-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
