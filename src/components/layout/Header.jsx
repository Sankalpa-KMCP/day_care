import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks } from '../../data/site.js'
import { SunMark, IconPhone } from '../decor.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const closeRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    if (open) closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Parkdale Daycare — home">
          <span className="brand-mark">
            <SunMark size={40} />
          </span>
          <span className="brand-text">
            <span className="brand-name">Parkdale</span>
            <span className="brand-sub">Daycare · Edmonton</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-call" href={business.phone.tel}>
            <IconPhone size={16} />
            <span>{business.phone.friendly}</span>
          </a>
          <ButtonLink to="/contact" variant="primary" size="sm" className="header-cta">
            Book a Visit
          </ButtonLink>
          <button
            type="button"
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-box" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav" id="mobile-nav" role="dialog" aria-label="Menu">
          <button
            ref={closeRef}
            type="button"
            className="mobile-close"
            onClick={() => setOpen(false)}
          >
            Close ×
          </button>
          <nav className="mobile-links" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={{ '--i': i }}
                className={({ isActive }) => `mobile-link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-actions">
            <ButtonLink to="/contact" variant="primary" arrow>
              Book a Visit
            </ButtonLink>
            <ButtonLink href={business.phone.tel} variant="ghost">
              Call {business.phone.friendly}
            </ButtonLink>
          </div>
          <p className="mobile-meta">
            {business.address.street} · {business.hours.short}
          </p>
        </div>
      )}
    </header>
  )
}
