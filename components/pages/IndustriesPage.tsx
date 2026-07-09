import type { PageId, ServiceId } from "@/lib/content";
import CtaBand from "@/components/ui/CtaBand";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
const sectorCards = [
  [
    "Transport Infrastructure",
    "Civil works that connect.",
    "Road and bridge projects sit at the intersection of structural engineering, geotechnics, and programme management. We provide civil engineering input, construction supervision, and project management services for road and bridge works in Eastern Europe and Central Asia.",
  ],
  [
    "Municipal & Urban",
    "Public works that last.",
    "Municipal infrastructure requires engineering that balances technical performance with public budget constraints and community expectations. We support municipalities across drainage, roads, and water supply, providing independent technical advice free from contractor interests.",
  ],
  [
    "Agriculture & Rural Development",
    "Infrastructure for food security.",
    "Agricultural infrastructure, including irrigation, drainage, rural roads, and storage facilities, forms the backbone of food-secure economies. We have delivered agricultural water management studies and irrigation system designs for government ministries and development bank-funded programmes.",
  ],
  [
    "International Development",
    "MDB programmes delivered well.",
    "Multilateral development bank programmes have their own vocabulary, safeguard requirements, and reporting expectations. Our team's direct experience within international organisation and MDB frameworks means we navigate these requirements fluently, as a benefit to clients, not a burden on them.",
  ],
];

export default function IndustriesPage({ onNavigate }: PageProps) {
  return (
    <div id="page-industries" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Industries</div>
          <h1>
            Sectors we know
            <br />
            from <em>the inside.</em>
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
            Deep sector knowledge means we understand the constraints, the
            standards, and the stakeholders, not just the engineering.
          </p>
        </div>
      </div>
      <div className="photo-feature">
        <div className="pf-img">
          <PlaceholderImage
            src="/industries/inds.jpg"
            label="Water infrastructure"
            alt="Aerial view of national water treatment infrastructure facility at sunset"
          />
        </div>
        <div className="pf-body pf-cream">
          <div className="eyebrow">Primary Specialism</div>
          <h2 className="heading feature-heading">
            Water &amp;
            <br />
            <em>Irrigation</em>
          </h2>
          <p className="body-m" style={{ marginBottom: 16 }}>
            Our leadership brings over a decade of large-scale irrigation
            infrastructure experience in Egypt and MDB-funded consultancy
            programmes across Central Asia. We understand the operational
            realities of irrigation systems, not just their design parameters.
          </p>
          <p className="body-m">
            Clients include government water authorities, rural development
            agencies, MDB programme management units, and agricultural
            enterprises.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="sec-inner">
          <div className="sector-detail-grid">
            {sectorCards.map(([tag, title, desc]) => (
              <div className="sector-detail-card" key={tag}>
                <div className="sector-tag">{tag}</div>
                <div className="sector-title">{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Operating in one of these sectors?"
        subtitle="Talk to us about your technical requirements."
        primary="Talk to an Engineer"
        onNavigate={onNavigate}
      />
    </div>
  );
}
