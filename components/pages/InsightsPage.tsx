import { insights, type PageId, type ServiceId } from "@/lib/content";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };
export default function InsightsPage({ onNavigate }: PageProps) {
  return (
    <div id="page-insights" className="page active">
      <div className="svc-hero">
        <div style={{ maxWidth: "var(--mw)", margin: "0 auto" }}>
          <div className="eyebrow">Insights</div>
          <h1>
            Engineering
            <br />
            <em>perspectives</em>
            <br />
            worth reading.
          </h1>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="ins-grid">
            {insights.map(([tag, title, exc, meta]) => (
              <div className="ins-card" key={title}>
                <span className="ins-tag">{tag}</span>
                <div className="ins-title">{title}</div>
                <div className="ins-exc">{exc}</div>
                <div className="ins-meta">{meta}</div>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "var(--stone-mid)",
              marginTop: 48,
            }}
          >
            Our insights programme is launching shortly. Register your interest
            and we'll notify you when articles go live.
          </p>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              className="btn btn-dark"
              onClick={() => onNavigate("contact")}
            >
              Notify Me on Launch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
