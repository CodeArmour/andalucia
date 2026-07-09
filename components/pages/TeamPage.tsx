import type { PageId, ServiceId } from "@/lib/content";
import Icon, { type IconName } from "@/components/ui/Icon";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
const futureRoles: [string, string, IconName][] = [
  [
    "Senior Civil Engineer",
    "Hydraulic and irrigation specialist to support water infrastructure commissions across MENA and Central Asia.",
    "building",
  ],
  [
    "Resident Engineer",
    "On-site supervision engineer for civil and infrastructure projects across Europe and Central Asia.",
    "shield",
  ],
  [
    "Quantity Surveyor",
    "QS specialist to support cost estimation, BoQ preparation, and variation assessment on civil infrastructure projects.",
    "calculator",
  ],
];

export default function TeamPage({ onNavigate }: PageProps) {
  return (
    <div id="page-team" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Our Team</div>
          <h1>
            The people who
            <br />
            <em>do the work.</em>
          </h1>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="team-note">
            <Icon name="info" />
            <span>
              Andalucia Engineering Consulting is a newly established firm,
              currently operating with its founding principal and a network of
              specialist collaborators. We are building a core team to support
              growing client demand. See our{" "}
              <button onClick={() => onNavigate("careers")}>
                Careers page
              </button>{" "}
              for opportunities.
            </span>
          </div>
          <div className="team-founder-card">
            <div>
              <div className="fnd-img portrait">
                <PlaceholderImage
                  src="/team/moh.png"
                  label="Mohamed Abdelalim"
                  alt="Mohamed Abdelalim, Founder and Principal Engineer"
                />
              </div>
              <div className="fnd-plate no-margin">
                <strong>Mohamed Abdelalim</strong>
                <span>Founder &amp; Principal Engineer</span>
              </div>
            </div>
            <div className="team-founder-body">
              <div className="team-founder-title">
                Founder &amp; Principal <em>Engineer</em>
              </div>
              <p>
                Andalucia Engineering Consulting is led by Mohamed Abdelalim, a
                civil engineer with international experience in engineering
                consultancy, infrastructure delivery, project management,
                construction supervision, and technical advisory.
              </p>
              <p>
                Working alongside multidisciplinary teams, he has contributed to
                the successful delivery of infrastructure programs across
                Europe, Central Asia, and the MENA region, supporting public
                authorities, private developers, engineering consultants,
                contractors, and international organizations.
              </p>
              <div className="team-tags">
                {[
                  "FIDIC Administration",
                  "Infrastructure Engineering",
                  "Water Resources",
                  "MDB Frameworks",
                  "Construction Supervision",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="education-label">Education</div>
              <div className="education-line">
                Master of Water Management Engineering
              </div>
              <div className="education-line">
                Bachelor of Civil Engineering
              </div>
            </div>
          </div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Growing with demand
          </div>
          <h3 className="future-heading">
            Future team <em>positions</em>
          </h3>
          <div className="tfu-grid">
            {futureRoles.map(([role, desc, icon]) => (
              <div className="tfu-card" key={role}>
                <div className="tfu-icon">
                  <Icon name={icon} />
                </div>
                <div className="tfu-role">{role}</div>
                <div className="tfu-desc">{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button
              className="btn btn-dark"
              onClick={() => onNavigate("careers")}
            >
              View Careers Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
