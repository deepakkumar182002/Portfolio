import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import ProcessSteps from '../components/ProcessSteps';

const SERVICES = [
  {
    icon: 'database',
    title: 'Backend Development',
    desc: 'Robust, secure backend application engineering. Implementing efficient databases, secure role-based authentication systems, and scalable APIs.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'REST APIs', 'Socket.IO', 'Role Based Access', 'Payment Gateway', 'Secure Architecture'],
  },
  {
    icon: 'layout',
    title: 'Frontend Development',
    desc: 'Sleek, responsive, and pixel-perfect user interface development. Translating designs into optimized React codebases.',
    tags: ['React.js', 'Tailwind CSS', 'Responsive UI', 'JavaScript', 'TypeScript', 'Flutter Integration'],
  },
  {
    icon: 'cloud',
    title: 'DevOps & Cloud',
    desc: 'Configuring cloud resources and servers for high availability, continuous integration, and secure deployments.',
    tags: ['Linux', 'Ubuntu', 'AWS', 'Nginx', 'PM2', 'Docker', 'Cloudflare', 'Firebase', 'MongoDB Atlas', 'SSL', 'Domain Management', 'CI/CD'],
  },
  {
    icon: 'link',
    title: 'API Integration',
    desc: 'Seamless integration of third-party interfaces, communication gateways, map resources, and notification servers.',
    tags: ['Payment Gateway', 'WhatsApp API', 'Google Maps API', 'Firebase Cloud Messaging', 'Email Services', 'SMS OTP', 'Cloud Storage', 'Authentication Providers'],
  },
  {
    icon: 'layers',
    title: 'SaaS Solutions',
    desc: 'Building comprehensive software-as-a-service systems, vendor marketplaces, management boards, and automated workflows.',
    tags: ['Admin Panels', 'CRM', 'Lead Management', 'Vendor Portals', 'Marketplace Platforms', 'White Label Products', 'Booking Systems', 'Business Automation'],
  },
];

export default function Services() {
  useRevealAnimation();

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════════ */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Services</span>
          <h1>Services Built Around<br />Your Technical Goals</h1>
          <p style={{ maxWidth: 540, marginTop: 16 }}>
            From secure backend engineering and API design to DevOps automation and SaaS solutions, I provide
            end-to-end full stack development.
          </p>
        </div>
      </section>

      {/* ══ ALL SERVICES ═════════════════════════════════════ */}
      <section className="services-intro">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((s) => (
              <div className="service-full-card reveal" key={s.title}>
                <div className="service-icon">
                  <img src={`https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/${s.icon}.svg`} alt={s.title} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════════════ */}
      <section className="process">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-tag">How I Work</span>
            <h2 className="section-title">Project Process</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Transparent, structured, and focused on delivering results.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ══ PRICING NOTE ═════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Flexible Pricing for Technical Projects</h2>
          <p className="section-desc" style={{ margin: '0 auto 36px' }}>
            Every system, backend architecture, and SaaS product has unique requirements. I provide customized quotes
            based on project complexity and timelines. Share your goals, and I will outline a fair estimate.
          </p>
          <Link to="/contact" className="btn btn-dark">Request a Free Quote</Link>
        </div>
      </section>

      {/* ══ CTA BANNER ═══════════════════════════════════════ */}
      <section className="cta-banner">
        <div className="container">
          <span className="section-tag">Start Today</span>
          <h2>Not sure about system architecture?</h2>
          <p>Tell me your product idea and I will help you map out the database, backend, and cloud requirements.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-white">Talk to Me</Link>
            <Link to="/portfolio" className="btn btn-outline">See Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
