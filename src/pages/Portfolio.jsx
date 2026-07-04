import { useState } from 'react';
import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import portfolioItems, { FILTERS } from '../data/portfolioItems';
import { BuildingIcon, SunIcon, CarIcon } from '../components/PortfolioIcons';
import './Portfolio.css';

const ICONS = { building: BuildingIcon, sun: SunIcon, car: CarIcon };

export default function Portfolio() {
  useRevealAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════════ */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Portfolio</span>
          <h1>Projects I Am Proud Of</h1>
          <p style={{ maxWidth: 540, marginTop: 16 }}>
            A selection of websites, apps, designs, and digital products I have built for
            clients, each one focused on practical results and quality execution.
          </p>
        </div>
      </section>

      {/* ══ FILTERS + GRID ═══════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', paddingTop: 48 }}>
        <div className="container">
          <div className="portfolio-filters">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {visibleItems.map((item) => {
              const Icon = item.icon ? ICONS[item.icon] : null;
              const thumb = (
                <div className="portfolio-thumb">
                  <img
                    src={item.thumb}
                    alt={item.alt}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {Icon && <Icon />}
                </div>
              );

              return (
                <div className="portfolio-card reveal" data-category={item.category} key={item.id}>
                  {item.thumbLink ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">{thumb}</a>
                  ) : (
                    thumb
                  )}
                  <div className="portfolio-info">
                    <div className="tag-container">
                      {item.tags.map((tag) => (
                        <span className={`tag${tag.highlight ? ' tag-highlight' : ''}`} key={tag.text}>
                          {tag.text}
                        </span>
                      ))}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="portfolio-visit">
                        {item.visitText}
                      </a>
                    ) : (
                      <span className="portfolio-visit" style={{ cursor: 'pointer', color: '#888' }}>
                        {item.staticText}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═══════════════════════════════════════ */}
      <section className="cta-banner" style={{ marginTop: 96 }}>
        <div className="container">
          <span className="section-tag">Next Project</span>
          <h2>Want to be on this list?</h2>
          <p>Let's build something worth showcasing.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-white">Start a Project</Link>
            <Link to="/services" className="btn btn-outline">Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
