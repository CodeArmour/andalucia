import {
  industries,
  processSteps,
  serviceCards,
  type PageId,
  type ServiceId,
} from "@/lib/content";
import CtaBand from "@/components/ui/CtaBand";
import Icon, { ArrowIcon, type IconName } from "@/components/ui/Icon";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
const collageImages = [
  { label: "Infrastructure Delivery", src: "/home/ind1.webp" },
  { label: "Water Resources", src: "/home/ind2.avif" },
  { label: "Hydraulic Structures", src: "/home/ind3.webp" },
  { label: "Civil Engineering", src: "/home/ind4.avif" },
];
const serviceIcons: IconName[] = ["building", "water", "shield", "calendar", "lightbulb", "calculator"];
const whyIcons: IconName[] = ["user", "check", "map", "shield"];
const industryIcons: IconName[] = ["water", "map", "building", "leaf", "leaf", "globe"];

export default function HomePage({ onNavigate }: PageProps) {
  return (
    <div id="page-home" className="page active">
      <section className="hero">
        <PlaceholderImage
          className="hero-img loaded"
          src="/home/hero.jpg"
          label="Modern engineering architecture"
          alt="Glass office building facade against blue sky, modern civil engineering architecture"
        />
        <div className="hero-bg" />
        <div className="hero-content">
          <div>
            <div className="hero-label">
              Civil &amp; Infrastructure Consultancy
            </div>
            <h1>
              Civil &amp; Water
              <br />
              Engineering.
              <br />
              <em>Consulting Excellence.</em>
            </h1>
            <p className="hero-sub">
              Andalucia Group is a Budapest-based engineering consultancy
              delivering technical advisory, construction supervision, and
              project management for complex infrastructure programmes across
              Europe, MENA, and Central Asia.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-gold"
                onClick={() => onNavigate("contact")}
              >
                Discuss Your Project <ArrowIcon />
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => onNavigate("services")}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stat-cell">
            <div className="stat-n">
              FIDIC<sup>✓</sup>
            </div>
            <div className="stat-l">Contract Administration</div>
          </div>
          <div className="stat-cell">
            <div className="stat-n">
              MDB<sup>✓</sup>
            </div>
            <div className="stat-l">Programme Delivery</div>
          </div>
          <div className="stat-cell">
            <div className="stat-n">
              3<sup>regions</sup>
            </div>
            <div className="stat-l">Europe · MENA · Central Asia</div>
          </div>
        </div>
      </div>

      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="services-intro">
            <div>
              <div className="eyebrow">What We Do</div>
              <h2 className="heading">
                Engineering
                <br />
                services that
                <br />
                <em>move projects</em>
                <br />
                forward.
              </h2>
            </div>
            <div>
              <p
                className="body-l"
                style={{ color: "var(--stone-light)", marginBottom: 28 }}
              >
                From early feasibility through final handover, we provide the
                technical depth and management rigour that complex
                infrastructure demands. Every engagement is led by a qualified,
                senior-level team.
              </p>
              <button
                className="btn btn-dark"
                onClick={() => onNavigate("services")}
              >
                All Services →
              </button>
            </div>
          </div>
          <div className="svc-grid">
            {serviceCards.map(([name, desc], index) => (
              <div className="svc-card" key={name}>
                <div className="svc-icon">
                  <Icon name={serviceIcons[index]} />
                </div>
                <div className="svc-name">{name}</div>
                <div className="svc-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="sec-inner">
          <div className="split-intro">
            <div>
              <div className="eyebrow">Our Difference</div>
              <h2 className="heading">
                Technical depth.
                <br />
                <em>Practical results.</em>
              </h2>
            </div>
            <p className="body-l" style={{ color: "var(--stone-light)" }}>
              We are a senior-led consultancy. Every engagement is run by
              qualified engineers with direct field experience, not managed from
              a distance by someone who hasn't been on site in years.
            </p>
          </div>
          <div className="why-grid">
            {[
              [
                "Senior-level on every engagement",
                "No delegation to junior staff on critical technical decisions. Senior engineers lead every commission, not junior staff.",
              ],
              [
                "FIDIC and MDB frameworks built in",
                "International organisation, MDB, and FIDIC requirements aren't something we learn when we mobilise. They're embedded in our standard working methodology.",
              ],
              [
                "Delivery across three regions",
                "Proven track record in Egypt, Uzbekistan, and across Europe, with an understanding of the regulatory, cultural, and technical context of each operating environment.",
              ],
              [
                "Independent judgment you can rely on",
                "We have no stake in construction outcomes. Our only interest is giving you accurate technical advice, including when that means telling you something you didn't want to hear.",
              ],
            ].map(([title, desc], index) => (
              <div className="why-card" key={title}>
                <div className="why-icon">
                  <Icon name={whyIcons[index]} />
                </div>
                <div className="why-title">{title}</div>
                <div className="why-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="photo-feature reverse-feature">
        <div className="pf-img">
          <PlaceholderImage
            src="/home/supervission.jpg"
            label="FIDIC contract administration"
            alt="Futuristic curved corten steel building facade, modern construction architecture"
          />
        </div>
        <div className="pf-body pf-cream">
          <div className="eyebrow">FIDIC Contract Administration</div>
          <h2 className="heading feature-heading">
            Supervision that
            <br />
            protects the
            <br />
            <em>client's position.</em>
          </h2>
          <p className="body-m" style={{ marginBottom: 28 }}>
            Construction disputes don't start at adjudication. They start when
            the Engineer doesn't record, doesn't enforce, and doesn't act on
            time. We administer FIDIC contracts the way they were designed to be
            administered.
          </p>
          <button
            className="btn btn-dark"
            onClick={() => onNavigate("services", "supervision")}
          >
            Construction Supervision →
          </button>
        </div>
      </div>

      <section className="sec sec-dark">
        <div className="sec-inner">
          <div className="split-intro">
            <div>
              <div className="eyebrow">Sectors</div>
              <h2 className="heading heading-light">
                Industries we
                <br />
                <em>understand</em>
                <br />
                from the inside.
              </h2>
            </div>
            <p className="body-md">
              Deep sector knowledge means we understand the constraints,
              standards, and stakeholders, not just the engineering equations
              behind them.
            </p>
          </div>
          <div className="ind-grid">
            {industries.map(([name, desc], index) => (
              <div className="ind-card" key={name}>
                <div className="ind-icon">
                  <Icon name={industryIcons[index]} />
                </div>
                <div className="ind-name">{name}</div>
                <div className="ind-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="img-collage">
        {collageImages.map(({ label, src }) => (
          <div className="ic-item" key={label}>
            <PlaceholderImage src={src} label={label} alt={label} />
            <div className="ic-overlay">
              <span className="ic-cap">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="sec sec-cream">
        <div className="sec-inner">
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto" }}>
            <div className="eyebrow centered-eyebrow">How We Work</div>
            <h2 className="heading">
              A structured approach
              <br />
              to every <em>engagement.</em>
            </h2>
          </div>
          <div className="process-row">
            {processSteps.map(([num, title, desc]) => (
              <div className="proc-item" key={num}>
                <div className="proc-num">{num}</div>
                <div className="proc-title">{title}</div>
                <div className="proc-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to discuss your infrastructure project?"
        subtitle="We respond to all enquiries within one business day."
        primary="Schedule a Consultation"
        secondary="View All Services"
        onNavigate={onNavigate}
      />
    </div>
  );
}
