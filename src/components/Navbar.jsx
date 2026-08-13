import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { siteConfig, navLinks } from '../data/placeholderData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-icon" aria-hidden="true">☀️</span>
          <span className="brand-name">{siteConfig.name}</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
        >
          <span className="toggle-icon">
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </span>
        </button>

        {/* Navigation Menu */}
        <nav
          id="primary-navigation"
          className={`navbar-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-cta-wrapper">
            <Link
              to="/contact"
              className="btn btn-primary nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Visit
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="navbar-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}
