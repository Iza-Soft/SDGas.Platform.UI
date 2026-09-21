import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-mark.png'
import { useScrolled } from '../hooks/useScrolled.ts'
import './Header.css'

const NAV_LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/service', label: 'Service' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/blog', label: 'Blog' },
  { to: '/schedule', label: 'Request a Call' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header className={'navbar' + (scrolled ? ' is-scrolled' : '')}>
      <div className="navbar__bar container">
        <NavLink to="/home" className="navbar__brand" onClick={() => setOpen(false)} aria-label="SD Gas home">
          <img src={logo} alt="SD Gas" />
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 'navbar__link' + (isActive ? ' is-active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a className="btn btn--orange navbar__cta" href="tel:07480969210">
          Call Now
        </a>

        <button
          type="button"
          className={'navbar__toggle' + (open ? ' is-open' : '')}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={'navbar__drawer' + (open ? ' is-open' : '')}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 'navbar__drawer-link' + (isActive ? ' is-active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn--orange navbar__drawer-cta" href="tel:07480969210" onClick={() => setOpen(false)}>
            Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}
