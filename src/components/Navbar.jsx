import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/placeholderData';

function LeafMark() {
  return (
    <svg className="leaf-mark" viewBox="0 0 56 56" aria-hidden="true">
      <path d="M11 40C15 18 29 8 47 8c-1 18-12 34-31 36" />
      <path d="M14 43c7-12 15-20 27-28" />
      <path d="M25 31c-1-5 0-9 2-13M27 30c5 0 9 1 12 3" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const close = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="wordmark" aria-label={`${siteConfig.name} home`}>
          <LeafMark />
          <span><strong>{siteConfig.name}</strong><small>Early Learning House</small></span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
          <span /> <span />
        </button>
        <nav id="primary-navigation" className={`editorial-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul>{navLinks.map((item) => <li key={item.path}><NavLink to={item.path} end={item.path === '/'}>{item.label}</NavLink></li>)}</ul>
          <div className="nav-endcap"><span className="status-dot">Concept stage</span><Link className="text-link nav-inquiry" to="/contact">Plan a visit <span aria-hidden="true">↗</span></Link></div>
        </nav>
      </div>
      {open && <button className="nav-scrim" type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu" />}
    </header>
  );
}
