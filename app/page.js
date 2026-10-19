import Link from "next/link";
import { services, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{site.name}</h1>
          <p className="hero-subtitle">Crafting Digital Experience that matter!</p>
          <p className="hero-description">
            Digital Designer with 4+ years experience in building scalable designs and intuitive
            user interfaces. Passionate about clean and impactful design.
          </p>
          <div className="hero-actions">
            <Link href="/portfolio" className="cta-button secondary">
              View My Work
            </Link>
            <Link href="/about#contact" className="cta-button">
              Available for Work
            </Link>
          </div>
        </div>
      </section>

      {/* Open to Work Section */}
      <section className="open-to-work">
        <div className="work-container">
          <h2 className="section-title">Open to Work</h2>
          <p className="work-subtitle">
            Currently accepting project commissions and delivering high quality, professional
            services tailored to your needs.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
