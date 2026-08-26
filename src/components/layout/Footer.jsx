import { Link } from 'react-router-dom'
import { business, navLinks } from '../../data/site.js'
import { SunMark, IconPhone, IconPin, IconClock } from '../decor.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand brand--light" aria-label="Parkdale Daycare — home">
              <span className="brand-mark">
                <SunMark size={40} />
              </span>
              <span className="brand-text">
                <span className="brand-name">Parkdale</span>
                <span className="brand-sub">Daycare · Edmonton</span>
              </span>
            </Link>
            <p className="footer-tagline">{business.positioning}</p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3 className="footer-heading">Explore</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3 className="footer-heading">Visit us</h3>
            <ul className="footer-info">
              <li>
                <IconPin size={15} />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.province} {business.address.postalCode}
                </span>
              </li>
              <li>
                <IconPhone size={15} />
                <a href={business.phone.tel}>{business.phone.display}</a>
              </li>
              <li>
                <IconClock size={15} />
                <span>
                  {business.hours.days}
                  <br />
                  {business.hours.time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {business.name} · Edmonton, Alberta
          </p>
          <p className="footer-made">Made with care for little people.</p>
        </div>
      </div>
    </footer>
  )
}
