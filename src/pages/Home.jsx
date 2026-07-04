import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import Counter from '../components/Counter';
import ProcessSteps from '../components/ProcessSteps';

const TECH_ITEMS = [
  { icon: 'nodedotjs', name: 'Node.js' },
  { icon: 'express', name: 'Express.js' },
  { icon: 'react', name: 'React.js' },
  { icon: 'javascript', name: 'JavaScript' },
  { icon: 'typescript', name: 'TypeScript' },
  { icon: 'mongodb', name: 'MongoDB' },
  { icon: 'firebase', name: 'Firebase' },
  { icon: 'amazonwebservices', name: 'AWS' },
  { icon: 'linux', name: 'Linux' },
  { icon: 'docker', name: 'Docker' },
  { icon: 'tailwindcss', name: 'Tailwind CSS' },
  { icon: 'git', name: 'Git' },
  { icon: 'github', name: 'GitHub' },
  { icon: 'nginx', name: 'Nginx' },
  { icon: 'pm2', name: 'PM2' },
  { icon: 'socketdotio', name: 'Socket.IO' },
  { icon: 'jsonwebtokens', name: 'JWT' },
  { icon: 'cloudinary', name: 'Cloudinary' },
  { icon: 'cloudflare', name: 'Cloudflare' },
  { icon: 'googlemaps', name: 'Google Maps API' },
  { icon: 'whatsapp', name: 'WhatsApp API' },
];

const HERO_STATS = [
  { count: 25, suffix: '+', label: 'Projects Delivered' },
  { count: 20, suffix: '+', label: 'Happy Clients' },
  { count: 3, suffix: ' Yrs', label: 'Industry Experience' },
];

const CORE_SERVICES = [
  { icon: 'database', name: 'Backend Development', desc: 'Designing secure, scalable, and high-performance backend systems with Node.js, Express, and MongoDB.' },
  { icon: 'layout', name: 'Frontend Development', desc: 'Building responsive, modern, and pixel-perfect user interfaces using React, TypeScript, and Tailwind CSS.' },
  { icon: 'cloud', name: 'DevOps & Cloud', desc: 'Deploying and managing cloud resources on AWS, configuring Linux servers, Nginx, Docker, and PM2.' },
  { icon: 'link', name: 'API Integration', desc: 'Seamlessly connecting payment gateways, WhatsApp automation, Google Maps, messaging, and OTP services.' },
  { icon: 'layers', name: 'SaaS Solutions', desc: 'Developing full-featured vendor portals, admin dashboards, booking platforms, and custom business automation tools.' },
];

const WHY_ITEMS = [
  { icon: 'zap', title: 'Fast Delivery', desc: 'I work in focused sprints and deliver on time without compromising quality.' },
  { icon: 'shield', title: 'Clean Code & Security', desc: 'Every backend API and frontend component is designed with security and clean guidelines in mind.' },
  { icon: 'message-circle', title: 'Clear Communication', desc: 'You are kept in the loop at every milestone. No surprises, no confusion — just execution.' },
  { icon: 'cpu', title: 'Scalable Architecture', desc: 'Database schemas, server deployment, and backend architectures are designed for performance and scale.' },
];

const WHY_STATS = [
  { count: 50, suffix: '+', label: 'Projects Successfully Delivered' },
  { count: 98, suffix: '%', label: 'Client Satisfaction' },
  { count: 30, suffix: '+', label: 'Happy Clients' },
  { count: 3, suffix: ' Yrs', label: 'Experience' },
];

const TESTIMONIALS = [
  {
    initials: 'AK',
    quote: '"Deepak delivered our e-commerce and vendor platform ahead of schedule. The API integration and admin portal are incredibly robust and easy to use. Highly professional execution."',
    name: 'Ahmad Khan',
    role: 'E-Commerce Business Owner',
  },
  {
    initials: 'SR',
    quote: '"Deepak engineered our dating platform\'s backend and real-time chat system using Node.js and Socket.IO. The performance is flawless and extremely secure."',
    name: 'Sara Rehman',
    role: 'Startup Founder',
  },
  {
    initials: 'MZ',
    quote: '"Deepak designed the system architecture and cloud infrastructure for our OTT streaming platform. The deployment was smooth, and the system scales automatically."',
    name: 'Muhammad Zafar',
    role: 'Tech Director',
  },
];

export default function Home() {
  useRevealAnimation();
  const loopedTech = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span />
            Available for new projects
          </div>
          <h1>
            Deepak Kumar<br />
            <em>Full Stack Developer</em>
          </h1>
          <p className="hero-desc">
            Building scalable web applications, mobile backends, cloud infrastructure, and automation solutions for
            startups and businesses.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-dark">Explore Services</Link>
            <Link to="/portfolio" className="btn btn-outline">View Portfolio</Link>
          </div>

          {/* ── Tech Carousel ────────────────────────── */}
          <div className="tech-strip">
            <p className="tech-strip-label">Technologies &amp; Platforms I Work With</p>
            <div className="carousel-wrapper">
              <div className="carousel-track">
                {loopedTech.map((tech, i) => (
                  <div key={`${tech.icon}-${i}`} style={{ display: 'contents' }}>
                    <div className="carousel-item">
                      <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tech.icon}.svg`} alt={tech.name} />
                      <span>{tech.name}</span>
                    </div>
                    <div className="carousel-divider" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-stats">
            {HERO_STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <h3><Counter target={stat.count} suffix={stat.suffix} /></h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE SERVICES ════════════════════════════════════ */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <div>
              <span className="section-tag">What I Do</span>
              <h2 className="section-title">Core Services</h2>
              <p className="section-desc">Professional full-stack services for robust, scalable applications.</p>
            </div>
            <Link to="/services" className="btn btn-outline">All Services →</Link>
          </div>
          <div className="grid-3" data-stagger>
            {CORE_SERVICES.map((service) => (
              <div className="service-card" key={service.name}>
                <div className="service-icon">
                  <img src={`https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/${service.icon}.svg`} alt={service.name} />
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY KAMWALE ══════════════════════════════════════ */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div>
              <span className="section-tag">Why Work With Me</span>
              <h2 className="section-title">Built for results, not just looks</h2>
              <p>I focus on what actually matters — performance, usability, and outcomes for your business.</p>
              <div className="why-list">
                {WHY_ITEMS.map((item) => (
                  <div className="why-item reveal" key={item.title}>
                    <div className="why-item-icon">
                      <img src={`https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/${item.icon}.svg`} alt={item.title} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <Link to="/about" className="btn btn-dark">Learn More About Me</Link>
              </div>
            </div>
            <div className="why-visual reveal">
              {WHY_STATS.map((stat) => (
                <div className="why-card" key={stat.label}>
                  <h3><Counter target={stat.count} suffix={stat.suffix} /></h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════════════ */}
      <section className="process">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 0 }}>
            <span className="section-tag">How I Work</span>
            <h2 className="section-title">Development Process</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              A structured, transparent engineering workflow from requirements to deployment.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════ */}
      {/* <section className="testimonials">
        <div className="container">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">What Clients Say</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testi-card reveal" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <blockquote>{t.quote}</blockquote>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══ CTA BANNER ═══════════════════════════════════════ */}
      <section className="cta-banner">
        <div className="container">
          <span className="section-tag">Let's Build Something Amazing Together</span>
          <h2>Ready to build something scalable?</h2>
          <p>Tell me about your product, backend, or cloud needs, and I'll get back to you within 24 hours.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-white">Get in Touch</Link>
            <Link to="/portfolio" className="btn btn-outline">View Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
