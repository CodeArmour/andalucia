import type { PageId, ServiceId } from "@/lib/content";
import Icon, { type IconName } from "@/components/ui/Icon";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
const cultureCards: [string, string, IconName][] = [
  [
    "International Standards",
    "Work to FIDIC, international organisation, and MDB frameworks on projects that matter across multiple countries.",
    "check",
  ],
  [
    "Real Responsibility",
    "Engineers here take real ownership of their work, without being buried under layers of management.",
    "briefcase",
  ],
  [
    "International Exposure",
    "Projects across MENA, Central Asia, and Europe give you experience a single-country career cannot.",
    "globe",
  ],
  [
    "Fast Growth",
    "Early employees at a growing consultancy advance faster than those at firms with fixed hierarchies.",
    "trend",
  ],
];

export default function CareersPage({ onNavigate }: PageProps) {
  return (
    <div id="page-careers" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Careers</div>
          <h1>
            Build your career
            <br />
            on <em>real engineering.</em>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,246,229,.5)",
              maxWidth: 540,
              marginTop: 20,
              lineHeight: 1.75,
            }}
          >
            We are building a team of engineers who want to work on substantive
            infrastructure projects, learn from senior practitioners, and
            operate to international standards.
          </p>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="eyebrow">Why Join Us</div>
          <h2 className="heading" style={{ marginTop: 12, marginBottom: 48 }}>
            What working here <em>means.</em>
          </h2>
          <div className="cult-grid" style={{ marginBottom: 64 }}>
            {cultureCards.map(([title, desc, icon]) => (
              <div className="cult-card" key={title}>
                <div className="cult-icon">
                  <Icon name={icon} />
                </div>
                <div className="cult-title">{title}</div>
                <div className="cult-desc">{desc}</div>
              </div>
            ))}
            <div className="career-photo cult-photo">
              <PlaceholderImage
                src="/career/career.jpg"
                label="Careers at Andalucia Engineering"
                alt="Engineering career and infrastructure project team"
              />
            </div>
          </div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Open Roles
          </div>
          <h2 className="heading" style={{ marginBottom: 24 }}>
            Current <em>opportunities.</em>
          </h2>
          <div className="divider" />
          <div className="roles-note">
            We are a newly established consultancy and do not currently have
            formally advertised vacancies. However, we are actively interested
            in hearing from experienced civil and water engineers, quantity
            surveyors, and construction supervisors with international project
            experience.
          </div>
          <div className="spec-cta">
            <div>
              <h3>Send a speculative application</h3>
              <p>
                If you have relevant experience and want to be considered for
                future roles, send your CV and a short note explaining what
                you're looking for.
              </p>
            </div>
            <button
              className="btn btn-gold"
              onClick={() => onNavigate("contact")}
            >
              Send Your CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
