import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/placeholderData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-editorial">
        <div className="footer-statement">
          <p className="kicker light">Stay curious</p>
          <h2>A small place for big beginnings.</h2>
        </div>
        <div className="footer-nav">
          <p className="footer-label">Explore</p>
          {navLinks.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </div>
        <div className="footer-contact">
          <p className="footer-label">Say hello</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span>{siteConfig.address}</span>
        </div>
      </div>
      <div className="container footer-fineprint">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>{siteConfig.conceptLabel}</span>
      </div>
    </footer>
  );
}
