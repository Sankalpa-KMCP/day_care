import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/placeholderData';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function inertLayoutBackground(trigger) {
  const header = trigger?.closest('.site-header');
  const layout = header?.parentElement;
  if (!header || !layout) return () => {};

  const changedElements = Array.from(layout.children)
    .filter((element) => element instanceof HTMLElement && element !== header)
    .map((element) => ({
      element,
      hadAttribute: element.hasAttribute('inert'),
      wasInert: element.inert,
    }));

  changedElements.forEach(({ element }) => { element.inert = true; });

  return () => {
    changedElements.reverse().forEach(({ element, hadAttribute, wasInert }) => {
      element.inert = wasInert;
      if (hadAttribute) element.setAttribute('inert', '');
      else element.removeAttribute('inert');
    });
  };
}

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
  const menuTriggerRef = useRef(null);
  const navigationRef = useRef(null);
  const previousFocusRef = useRef(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.key]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 981px)');
    const closeAtDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener?.('change', closeAtDesktop);
    return () => desktopQuery.removeEventListener?.('change', closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const menuTrigger = menuTriggerRef.current;
    const restoreBackground = inertLayoutBackground(menuTrigger);
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const navItems = navigationRef.current
        ? Array.from(navigationRef.current.querySelectorAll(focusableSelector))
        : [];
      const focusableItems = [menuTriggerRef.current, ...navItems].filter(Boolean);

      if (focusableItems.length === 0) return;

      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstItem || !focusableItems.includes(activeElement))) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && (activeElement === lastItem || !focusableItems.includes(activeElement))) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    menuTrigger?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      restoreBackground();

      const previousFocus = previousFocusRef.current;
      previousFocusRef.current = null;
      if (previousFocus?.isConnected) {
        previousFocus.focus();
      } else {
        menuTrigger?.focus();
      }
    };
  }, [open]);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
      return;
    }

    previousFocusRef.current = menuTriggerRef.current;
    setOpen(true);
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="wordmark" aria-label={`${siteConfig.name} home`}>
          <LeafMark />
          <span><strong>{siteConfig.name}</strong><small>Early Learning House</small></span>
        </Link>
        <button ref={menuTriggerRef} className="menu-toggle" type="button" onClick={toggleMenu} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
          <span /> <span />
        </button>
        <nav ref={navigationRef} id="primary-navigation" className={`editorial-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul>{navLinks.map((item) => <li key={item.path}><NavLink to={item.path} end={item.path === '/'} onClick={() => setOpen(false)}>{item.label}</NavLink></li>)}</ul>
          <div className="nav-endcap"><span className="status-dot">Concept stage</span><Link className="text-link nav-inquiry" to="/contact" onClick={() => setOpen(false)}>Explore the inquiry <span aria-hidden="true">↗</span></Link></div>
        </nav>
      </div>
      {open && <button className="nav-scrim" type="button" tabIndex={-1} aria-hidden="true" onClick={() => setOpen(false)} />}
    </header>
  );
}
