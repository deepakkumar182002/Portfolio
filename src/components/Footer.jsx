import { Link } from 'react-router-dom';

const DEFAULT_SERVICES = [
  'Backend Development',
  'Frontend Development',
  'DevOps & Cloud',
  'API Integration',
  'SaaS Solutions',
];

export default function Footer({
  tagline = 'Personal portfolio of Deepak Kumar, a Full Stack Developer specializing in scalable backend systems, cloud deployment, and business automation.',
  services = DEFAULT_SERVICES,
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">D e e p a k k<span>.me</span></Link>
            <p>{tagline}</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/deepakkumar2244/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">in</a>
              <a href="#" className="social-icon" title="Twitter/X">𝕏</a>
              <a href="#" className="social-icon" title="Instagram">ig</a>
              <a href="https://github.com/deepakkumar182002" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">gh</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Profile</h4>
            <ul>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:kumar041232@gmail.com">kumar041232@gmail.com</a></li>
              <li><a href="tel:+918273243959">+91 82732 43959</a></li>
              <li><a href="https://wa.me/918273243959" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>- Made with care by Deepak Kumar. -</p>
        </div>
      </div>
    </footer>
  );
}

export const WEBSITE_SERVICES = [
  'Website Design',
  'Mobile Apps',
  'UI/UX Design',
  'Graphics & Logo',
  '3D Modelling',
];

export const SIMPLE_TAGLINE = 'Personal portfolio of Deepak Kumar, an independent software engineer delivering reliable digital solutions.';
