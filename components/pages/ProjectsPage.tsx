import type { PageId, ServiceId } from "@/lib/content";
import CtaBand from "@/components/ui/CtaBand";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const projects = [
  [
    "MENA Region",
    "National Canal Modernization Program",
    "Contributed to one of the region's largest irrigation modernization initiatives, involving the rehabilitation of 924.5 km of canals across 271 canal systems as part of a EGP 3 billion national infrastructure investment to enhance water efficiency and agricultural sustainability.",
    ["Investment", "EGP 3 billion"],
    ["Scale", "924.5 km / 271 canal systems"],
  ],
  [
    "EU",
    "Commercial Construction Portfolio",
    "Supported the contract administration and technical coordination of 12 commercial construction projects with a combined value exceeding €1.1million, ensuring effective project delivery and contractual compliance.",
    ["Portfolio Value", "> €1.1million"],
    ["Scope", "12 commercial projects"],
  ],
] as const;

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
export default function ProjectsPage({ onNavigate }: PageProps) {
  return (
    <div id="page-projects" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Projects</div>
          <h1>
            Selected Professional <em>Experience.</em>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,246,229,.5)",
              maxWidth: 620,
              marginTop: 20,
              lineHeight: 1.75,
            }}
          >
            These projects reflect the personal professional experience of our
            team's leadership. As Andalucia Engineering Consulting builds its
            own project portfolio, this section will be updated with company-led
            commissions.
          </p>
        </div>
      </div>
      <div className="photo-feature">
        <div className="pf-img">
          <PlaceholderImage
            src="/projects/cawrmp.jpg"
            label="CAWRMP Uzbekistan"
            alt="Concrete-lined irrigation canal with flowing water, Central Asia"
          />
        </div>
        <div className="pf-body pf-dark">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Central Asia | (ADB) Funded
          </div>
          <h2 className="heading heading-light feature-heading">
            Climate Adaptive Water Resources
            <br />
            <em>Management Program (CAWRMP)</em>
          </h2>
          <p className="body-md" style={{ marginBottom: 8 }}>
            Supported the delivery of a major irrigation rehabilitation program
            with a portfolio value exceeding $198 million. Comprising 127 km of
            canals, 45+ km of HDPE pipelines, and 80+ hydraulic structures,
            improving water management across more than 62,800.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div>
              <div className="proj-meta-l dark-meta">Portfolio Value</div>
              <div className="proj-meta-v light-meta">&gt; $198 million</div>
            </div>
            <div>
              <div className="proj-meta-l dark-meta">Region</div>
              <div className="proj-meta-v light-meta">Central Asia</div>
            </div>
          </div>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="project-note">
            Projects below were delivered by our team's leadership during their
            careers in government service and international consultancy,
            representing the depth of experience Andalucia Engineering brings to
            new client engagements.
          </div>
          <div className="proj-grid">
            {projects.map(([tag, title, desc, a, b]) => (
              <div className="proj-card" key={title}>
                <div className="proj-tag">{tag}</div>
                <div className="proj-title">{title}</div>
                <div className="proj-desc">{desc}</div>
                <div className="proj-metas">
                  <div>
                    <div className="proj-meta-l">{a[0]}</div>
                    <div className="proj-meta-v">{a[1]}</div>
                  </div>
                  <div>
                    <div className="proj-meta-l">{b[0]}</div>
                    <div className="proj-meta-v">{b[1]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="project-grid-photo">
            <PlaceholderImage
              src="/projects/project.jpg"
              label="Project experience"
              alt="Infrastructure project experience"
            />
          </div>
        </div>
      </section>
      <CtaBand
        title="Interested in working together?"
        subtitle="Discuss your project with our team."
        primary="Discuss Your Project"
        onNavigate={onNavigate}
      />
    </div>
  );
}
