import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import Counter from '../components/Counter';

const JOURNEY_STATS = [
  { count: 25, suffix: '+', label: 'Projects Delivered' },
  { count: 20, suffix: '+', label: 'Satisfied Clients' },
  { count: 3, suffix: ' Yrs', label: 'Industry Experience' },
  { count: 5, suffix: '', label: 'Core Offerings' },
];

const VALUES = [
  { icon: 'target', title: 'Purposeful Work', desc: 'I do not build for the sake of building. Every feature and design decision has a clear reason tied to your goals.' },
  { icon: 'users', title: 'Client Partnership', desc: 'I treat every client as a long-term partner, not a one-time transaction.' },
  { icon: 'cpu', title: 'Technical Excellence', desc: 'I keep my skills sharp, use modern tools, and maintain high engineering standards on every project.' },
  { icon: 'lightbulb', title: 'Honest Simplicity', desc: 'Clear pricing, clear timelines, and clear communication. I believe simplicity builds more trust than complexity.' },
  { icon: 'trending-up', title: 'Results-Focused', desc: 'Beautiful design is incomplete without results. I measure success by the impact created for your business.' },
  { icon: 'refresh-cw', title: 'Continuous Improvement', desc: 'I never stop learning, iterating, and improving to bring better execution to every new project.' },
];

const SKILL_GROUPS = [
  { icon: 'code', title: 'Programming', tags: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'] },
  { icon: 'layout', title: 'Frontend', tags: ['React.js', 'Tailwind CSS', 'Redux', 'REST API', 'Responsive Design'] },
  { icon: 'database', title: 'Backend', tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.IO', 'JWT', 'REST APIs'] },
  { icon: 'server', title: 'DevOps & Cloud', tags: ['Linux', 'AWS', 'Docker', 'Nginx', 'PM2', 'Git', 'GitHub', 'Cloudflare', 'Firebase', 'MongoDB Atlas'] },
];

const TIMELINE = [
  { title: 'Backend Development', desc: 'Designing secure, scalable, and high-performance backend applications using Node.js and Express.js, with secure data flows and robust microservices architecture.' },
  { title: 'API Development', desc: 'Creating high-performance REST APIs and real-time communication modules using Socket.IO, integrated with secure JWT authentication and role-based access controls.' },
  { title: 'Admin Panel Development', desc: 'Developing advanced custom admin panels, vendor portals, and dashboards featuring user tracking, lead management, analytics, and business automation utilities.' },
  { title: 'Cloud Deployment', desc: 'Deploying and maintaining production applications on Linux (Ubuntu) servers and AWS EC2. Configuring Nginx reverse proxies, PM2 cluster modes, SSL certificates, Cloudflare CDN/security, and MongoDB Atlas databases.' },
  { title: 'Business Automation', desc: 'Automating business workflows through the integration of WhatsApp API notifications, Firebase Cloud Messaging, SMS OTP services, Google Maps API, and email service handlers.' },
  { title: 'SaaS Development', desc: 'Designing and architecting secure SaaS platforms, booking workflow management systems, and vendor-marketplace products for growing companies.' },
  { title: 'System Architecture', desc: 'Designing scalable system architecture defining database schema relations, secure API policies, role-based controls, payment flows, and data security standards.' },
  { title: 'Performance Optimization', desc: 'Optimizing database indexing, API query times, assets storage using CDN platforms, server clusters using PM2/Nginx, and system security to deliver smooth web performance.' },
];

export default function About() {
  useRevealAnimation();

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════════ */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">About Me</span>
          <h1>Deepak Kumar<br />Full Stack Developer</h1>
          <p style={{ maxWidth: 540, marginTop: 16 }}>
            I am a passionate Full Stack Developer specializing in backend engineering, cloud deployment, and building
            reliable production systems.
          </p>
        </div>
      </section>

      {/* ══ STORY ════════════════════════════════════════════ */}
      <section className="about-story">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <span className="section-tag">My Journey</span>
              <h2 className="section-title">Transforming complex business ideas into reliable digital products</h2>
              <p style={{ marginBottom: 20 }}>
                I am a passionate Full Stack Developer with strong expertise in backend development, cloud deployment,
                and modern web technologies. I specialize in designing secure, scalable, and high-performance
                applications that solve real business problems.
              </p>
              <p style={{ marginBottom: 20 }}>
                Over the years, I have worked on SaaS platforms, Real Estate solutions, OTT streaming platforms,
                E-commerce systems, Service Booking applications, and Admin Dashboards. My focus is not only on writing
                clean code but also on building complete production-ready systems—from database architecture to
                deployment and maintenance.
              </p>
              <p style={{ marginBottom: 20 }}>
                Every project, regardless of size, gets focused attention, transparent communication, and a commitment
                to quality delivery. I enjoy translating complex operational flows into simple, reliable, and
                user-friendly software that creates real value.
              </p>
              <p>
                Kamwale.tech represents my professional brand under which I build scalable software solutions. As a
                developer, I aim to keep raising engineering standards, providing international clients with top-tier
                technical development and cloud deployment services.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/contact" className="btn btn-dark">Work With Me</Link>
              </div>
            </div>
            <div className="why-visual reveal">
              {JOURNEY_STATS.map((stat) => (
                <div className="why-card" key={stat.label}>
                  <h3><Counter target={stat.count} suffix={stat.suffix} /></h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ═════════════════════════════════ */}
      <section style={{ background: 'var(--bg-dark)', color: 'var(--white)', padding: '96px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div className="reveal">
              <span className="section-tag" style={{ color: 'var(--text-muted)' }}>My Mission</span>
              <h2 style={{ color: 'var(--white)', marginBottom: 16 }}>Deliver technology that solves business problems</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem' }}>
                I build digital systems that combine backend excellence with clean frontend interfaces, ensuring
                startups and businesses get secure, high-performance solutions that work.
              </p>
            </div>
            <div className="reveal">
              <span className="section-tag" style={{ color: 'var(--text-muted)' }}>My Vision</span>
              <h2 style={{ color: 'var(--white)', marginBottom: 16 }}>To be a trusted technical scaling partner</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem' }}>
                I aim to be the technical anchor for clients, helping them design robust software architectures and
                deploy stable, production-ready platforms that drive real-world outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ═══════════════════════════════════════════ */}
      <section className="about-values">
        <div className="container">
          <span className="section-tag">What Drives Me</span>
          <h2 className="section-title">Core Working Values</h2>
          <p className="section-desc">The principles that guide every project and every client interaction.</p>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card reveal" key={v.title}>
                <div className="value-icon">
                  <img src={`https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/${v.icon}.svg`} alt={v.title} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS SECTION ═══════════════════════════════════ */}
      <section
        className="skills-section"
        style={{ background: 'var(--bg)', padding: '96px 0', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">
            Categorized lists of programming languages, frameworks, databases, and DevOps tools I use daily.
          </p>
          <div className="grid-4" data-stagger style={{ marginTop: 48 }}>
            {SKILL_GROUPS.map((group) => (
              <div className="value-card reveal" key={group.title}>
                <div className="value-icon">
                  <img src={`https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/${group.icon}.svg`} alt={group.title} />
                </div>
                <h3 style={{ marginBottom: 16 }}>{group.title}</h3>
                <div className="service-tags">
                  {group.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE TIMELINE ══════════════════════════════ */}
      <section className="experience" style={{ background: 'var(--bg-soft)', padding: '96px 0' }}>
        <div className="container">
          <span className="section-tag">Timeline</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            A timeline of my hands-on work and development milestones in system design and automation.
          </p>
          <div className="timeline-container">
            <div className="timeline-line" />
            {TIMELINE.map((item) => (
              <div className="timeline-item reveal" key={item.title}>
                <div className="timeline-dot" />
                <span>Expertise Pillar</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═══════════════════════════════════════ */}
      <section className="cta-banner">
        <div className="container">
          <span className="section-tag">Let's Talk</span>
          <h2>Got a project in mind?</h2>
          <p>I would be glad to hear about it. Reach out and let's discuss your requirements.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-white">Contact Me</Link>
            <Link to="/services" className="btn btn-outline">Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
