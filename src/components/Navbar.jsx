import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <>
      {/* ══ NAVBAR ══════════════════════════════════════════ */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'top', height: 20 }}>
              D e e p a k k.<span> me</span>
            </Link>
            <ul className="nav-links">
              <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
              <li><NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            </ul>
            <div className="nav-cta">
              <Link to="/contact" className="btn btn-dark">Get a Quote</Link>
              <button
                type="button"
                className="theme-toggle"
                aria-label={themeLabel}
                title={themeLabel}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '☀' : '☾'}
              </button>
            </div>
            <button
              className="hamburger"
              id="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span style={menuOpen ? { transform: 'rotate(45deg) translateY(7px)' } : undefined} />
              <span style={menuOpen ? { opacity: 0 } : undefined} />
              <span style={menuOpen ? { transform: 'rotate(-45deg) translateY(-7px)' } : undefined} />
            </button>
          </div>
        </div>
      </nav>

      {/* ══ MOBILE MENU ═════════════════════════════════════ */}
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <div className="mobile-menu-cta">
          <Link
            to="/contact"
            className="btn btn-dark"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="theme-toggle theme-toggle-mobile"
            aria-label={themeLabel}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </nav>
    </>
  );
}
