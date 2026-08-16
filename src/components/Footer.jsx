import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, navLinks } from '../data/placeholderData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Footer Trust Bar */}
      <div className="footer-trust-bar">
        <div className="container trust-bar-container">
          <div className="trust-bar-item">
            <svg className="trust-bar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>State Licensed & Certified</span>
          </div>
          <div className="trust-bar-item">
            <svg className="trust-bar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <span>CPR & First-Aid Certified Staff</span>
          </div>
          <div className="trust-bar-item">
            <svg className="trust-bar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 0-7.5 16.6A10 10 0 0 0 12 22a10 10 0 0 0 7.5-3.4A10 10 0 0 0 12 2z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span>1:4 Low Caregiver-to-Child Ratio</span>
          </div>
          <div className="trust-bar-item">
            <svg className="trust-bar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>4.9★ Rated by 150+ Families</span>
          </div>
        </div>
      </div>

      <div className="container footer-container">
        {/* Brand & Identity Column */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
              </svg>
            </div>
            <span className="brand-name">{siteConfig.name}</span>
          </Link>
          <p className="footer-tagline">
            Dedicated to providing attentive care, sensory-rich play, and early foundational learning in a warm community environment.
          </p>
          <div className="footer-social-pills">
            <span className="social-pill">🌿 Certified Eco-Healthy Childcare</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li><Link to="/programs#schedule">Daily Routine</Link></li>
            <li><Link to="/contact#faq">Parent FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Campus Location</h3>
          <ul className="footer-contact-info">
            <li>
              <strong>Address:</strong>
              <div>{siteConfig.address}</div>
            </li>
            <li>
              <strong>Phone Line:</strong>
              <div><a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a></div>
            </li>
            <li>
              <strong>Inquiries:</strong>
              <div><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
            </li>
          </ul>
        </div>

        {/* Hours & Tour Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Hours & Visits</h3>
          <p className="footer-hours">
            <strong>Operating Hours:</strong><br />
            {siteConfig.hours}
          </p>
          <div className="footer-cta-box">
            <Link to="/contact" className="btn btn-primary footer-cta">
              Schedule a Campus Tour
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <span>•</span>
            <Link to="/programs">Programs</Link>
            <span>•</span>
            <Link to="/contact">Contact & Admissions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
