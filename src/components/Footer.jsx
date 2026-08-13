import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, navLinks } from '../data/placeholderData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand & Identity Column */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <span className="brand-icon" aria-hidden="true">☀️</span>
            <span className="brand-name">{siteConfig.name}</span>
          </Link>
          <p className="footer-tagline">{siteConfig.tagline}</p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact Information</h3>
          <ul className="footer-contact-info">
            <li>
              <strong>Address:</strong> {siteConfig.address}
            </li>
            <li>
              <strong>Phone:</strong> <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        {/* Hours Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Operating Hours</h3>
          <p className="footer-hours">{siteConfig.hours}</p>
          <div className="footer-cta-box">
            <Link to="/contact" className="btn btn-secondary footer-cta">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
