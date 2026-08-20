import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/placeholderData';

export default function Footer() {
  return (
    <footer className="site-footer storybook-footer">
      <div className="footer-botanical" aria-hidden="true">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" focusable="false">
          <path className="footer-path-line" d="M-28 146c194-41 253 33 415 0 157-33 194-123 381-72 181 49 288-25 435-24 104 1 171 38 269 17" />
          <path className="footer-path-leaf" d="M319 151c-31-44-72-47-99-23 32 23 62 31 99 23Zm503-65c19-49 61-65 95-45-26 34-56 49-95 45Zm337-35c-20-41-57-51-83-32 26 24 52 34 83 32Z" />
        </svg>
      </div>
      <div className="container footer-editorial">
        <div className="footer-statement">
          <p className="kicker light">Stay curious</p>
          <h2>A small place for big beginnings.</h2>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-label">Explore</p>
          {navLinks.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </nav>
        <div className="footer-contact">
          <p className="footer-label">Explore the inquiry</p>
          <Link className="footer-inquiry-link" to="/contact">Try the demo inquiry <span aria-hidden="true">→</span></Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span>{siteConfig.address}</span>
        </div>
      </div>
      <div className="container footer-fineprint">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span className="footer-concept-note">{siteConfig.conceptLabel}</span>
      </div>
    </footer>
  );
}
