import { services, type PageId, type ServiceId } from "@/lib/content";
import CtaBand from "@/components/ui/CtaBand";
import Icon, { type IconName } from "@/components/ui/Icon";

type PageProps = {
  activeService: ServiceId;
  setActiveService: (service: ServiceId) => void;
  onNavigate: (page: PageId, service?: ServiceId) => void;
};
const serviceIconById: Record<ServiceId, IconName> = {
  civil: "building",
  water: "water",
  supervision: "shield",
  pm: "calendar",
  advisory: "lightbulb",
  studies: "check",
  qs: "calculator",
  tender: "briefcase",
};

export default function ServicesPage({
  activeService,
  setActiveService,
  onNavigate,
}: PageProps) {
  return (
    <div id="page-services" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Services</div>
          <h1>
            Engineering services
            <br />
            across the full
            <br />
            <em>project lifecycle.</em>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,246,229,.5)",
              maxWidth: 520,
              marginTop: 20,
              lineHeight: 1.75,
            }}
          >
            From initial feasibility through construction completion, we provide
            technical expertise and management rigour for complex
            infrastructure.
          </p>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="svc-detail-layout">
            <div className="svc-sidebar">
              <div className="svc-sidebar-label">Our Services</div>
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`svc-nav-a ${activeService === service.id ? "active" : ""}`}
                  onClick={() => setActiveService(service.id)}
                >
                  <Icon name={serviceIconById[service.id]} />
                  {service.title
                    .replace(" & Engineering Studies", "")
                    .replace(" & Cost Estimation", "")}
                </button>
              ))}
            </div>
            <div>
              {services.map((service) => (
                <div
                  key={service.id}
                  id={`svc-${service.id}`}
                  className={`svc-detail ${activeService === service.id ? "active" : ""}`}
                >
                  <div className="svc-dtitle">{service.title}</div>
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="svc-feats">
                    {service.features.map((feature) => (
                      <div className="svc-feat" key={feature.title}>
                        <strong>{feature.title}</strong>
                        <p>{feature.text}</p>
                      </div>
                    ))}
                  </div>
                  {service.footer ? (
                    <p>
                      <strong style={{ color: "var(--ink)" }}>
                        {service.footer.split(":")[0]}:
                      </strong>
                      {service.footer.slice(service.footer.indexOf(":") + 1)}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Need a specific service?"
        subtitle="Contact us to discuss your technical requirements."
        primary="Request Technical Advice"
        onNavigate={onNavigate}
      />
    </div>
  );
}
