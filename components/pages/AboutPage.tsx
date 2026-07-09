import type { PageId, ServiceId } from "@/lib/content";
import CtaBand from "@/components/ui/CtaBand";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type PageProps = { onNavigate: (page: PageId, service?: ServiceId) => void };

export default function AboutPage({ onNavigate }: PageProps) {
  return (
    <div id="page-about" className="page active">
      <div className="about-hero">
        <PlaceholderImage
          className="about-hero-img"
          src="/about/Engineering_Better_Decisions..png"
          label="About Andalucia Engineering"
          alt="Civil engineering consultancy office"
        />
        <div className="about-inner">
          <div className="eyebrow">About</div>
          <h1>
            Engineering <em>Better Decisions.</em>
          </h1>
          <div className="about-hero-copy">
            <p>
              Infrastructure is more than construction. It is the foundation of
              economic growth, environmental resilience, and stronger
              communities. Every successful project begins with informed
              decisions, technical precision, and the confidence that every
              stage of delivery is supported by sound engineering judgment.
            </p>
            <p>
              At Andalucia Engineering Consulting, we provide independent
              engineering consultancy for organizations seeking practical,
              technically robust, and sustainable solutions across the
              infrastructure lifecycle. From early feasibility studies and
              technical due diligence to construction supervision, contract
              administration, and project delivery support, our role is to help
              clients make decisions that stand the test of time.
            </p>
          </div>
        </div>
      </div>
      <section className="sec sec-cream">
        <div className="sec-inner">
          <div className="eyebrow">Mission, Vision &amp; Values</div>
          <h2 className="heading" style={{ marginTop: 12, marginBottom: 48 }}>
            What we <em>stand for.</em>
          </h2>
          <div className="vals-row">
            {[
              [
                "I. Mission",
                "Rigorous. Independent. Results-driven.",
                "To deliver technically rigorous, independently minded engineering consultancy that helps clients make better decisions, control risk, and achieve lasting infrastructure outcomes.",
              ],
              [
                "II. Vision",
                "The trusted technical partner.",
                "To be the trusted engineering partner of choice for international infrastructure programmes across Europe, MENA, and Central Asia, built on integrity and technical depth.",
              ],
              [
                "III. Values",
                "Honesty above convenience.",
                "Technical honesty. Clarity in communication. Sustainability in design. Independence in judgment. We tell clients what the engineering requires, not what they want to hear.",
              ],
            ].map(([roman, title, desc]) => (
              <div className="val-card" key={roman}>
                <div className="val-roman">{roman}</div>
                <div className="val-title">{title}</div>
                <div className="val-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="sec-inner">
          <div className="eyebrow">Founder Profile</div>
          <h2 className="heading" style={{ marginTop: 12, marginBottom: 48 }}>
            The engineer <em>behind</em> the consultancy.
          </h2>
          <div className="founder-layout">
            <div className="fnd-img">
              <PlaceholderImage
                src="/about/Founder.webp"
                label="Mohamed Abdelalim"
                alt="Mohamed Abdelalim, Founder and Principal Engineer"
              />
            </div>
            <div className="fnd-body">
              <p>
                Mohamed Abdelalim is a civil and water infrastructure engineer
                with more than 13 years of experience across MENA, Central Asia,
                and Europe. His career spans large-scale government programmes,
                multilateral development bank-funded projects, and independent
                technical advisory.
              </p>
              <p>
                Before establishing Andalucia Engineering Consulting, Mohamed
                directed a 924.5 km canal lining programme across 271 canals, a
                portfolio exceeding 3 billion EGP in value. He subsequently
                transitioned to international consultancy, most recently serving
                as an International Supervision Engineer on an MDB-funded
                irrigation programme in Central Asia.
              </p>
              <p>
                Mohamed is based across Granada, Spain and Budapest, Hungary,
                and holds full EU work authorisation.
              </p>
              <p>
                His engineering philosophy is founded on technical honesty:
                every recommendation must be defensible, every design must
                account for the full lifecycle, and every client deserves
                counsel that prioritises their project, not the consultant's
                convenience.
              </p>
              <p>
                Established in Budapest, Hungary, we operate with an
                international perspective, supporting clients across Europe, the
                MENA region, and beyond. While the consultancy is newly
                established, it is founded on extensive professional experience
                gained through participation in multidisciplinary infrastructure
                programs delivered alongside public authorities, international
                consultants, contractors, and development partners.
              </p>
              <p>
                Our expertise spans civil engineering, infrastructure
                development, transportation, water resources, hydraulic
                structures, project management, technical advisory, and
                construction supervision. Every engagement is approached with
                the same objective: delivering engineering solutions that are
                practical, resilient, and aligned with the long-term interests
                of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="photo-feature reverse-feature">
        <div className="pf-img">
          <PlaceholderImage
            src="/about/about2.jpg"
            label="International Perspective"
            alt="International infrastructure consultancy perspective"
          />
        </div>
        <div className="pf-body pf-cream">
          <div className="eyebrow">Global Delivery</div>
          <h2 className="heading feature-heading">
            International
            <br />
            <em>Perspective</em>
          </h2>
          <p className="body-m" style={{ marginBottom: 16 }}>
            Modern infrastructure requires collaboration across disciplines,
            organizations, and borders.
          </p>
          <p className="body-m" style={{ marginBottom: 16 }}>
            The professional experience behind Andalucia Engineering Consulting
            has been developed through complex infrastructure programs delivered
            across Europe, Central Asia, and the MENA region, working alongside
            multidisciplinary engineering teams on projects involving
            transportation, irrigation, hydraulic infrastructure, public works,
            and sustainable development.
          </p>
          <p className="body-m">
            This international exposure has strengthened our ability to navigate
            diverse technical standards, contractual frameworks, stakeholder
            environments, and project delivery models while maintaining a
            consistent focus on quality, accountability, and long-term
            performance.
          </p>
        </div>
      </div>
      <div className="photo-feature">
        <div className="pf-img">
          <PlaceholderImage
            src="/about/Engineering_for_the_long%20_term..jpg"
            label="Sustainable engineering"
            alt="Green glass office building facade with trees, sustainable architecture"
          />
        </div>
        <div className="pf-body pf-dark">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Sustainability
          </div>
          <h2 className="heading heading-light feature-heading">
            Engineering for
            <br />
            the <em>long term.</em>
          </h2>
          <p className="body-md" style={{ marginBottom: 16 }}>
            Infrastructure built today will serve communities for 50 to 100
            years. We integrate climate resilience, lifecycle cost analysis, and
            environmental safeguards into our standard engineering methodology.
          </p>
          <p className="body-md">
            Sustainability at Andalucia Engineering is a technical discipline,
            not a branding position.
          </p>
        </div>
      </div>
      <CtaBand
        title="Talk to our engineers directly."
        subtitle="No layers of management. Direct technical dialogue with qualified engineers from first contact."
        primary="Contact Our Team"
        onNavigate={onNavigate}
      />
    </div>
  );
}
