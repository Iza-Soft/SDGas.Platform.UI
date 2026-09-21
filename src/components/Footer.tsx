import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark.png'
import { FacebookIcon } from './icons.tsx'
import './Footer.css'

const MAPS_URL =
  'https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu'
const FACEBOOK_URL = 'https://www.facebook.com/p/SD-Gas-100076293378941/'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="SD Gas logo" />
          <p>
            Gas and Central Heating Specialists covering the whole of Fife. Domestic installations, servicing,
            and repairs carried out by a Gas Safe registered engineer, day or night.
          </p>
          <a
            className="footer__social"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="SD Gas on Facebook"
          >
            <FacebookIcon width={20} height={20} aria-hidden="true" />
            Facebook
          </a>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/schedule">Request a Call</Link>
            </li>
          </ul>
        </div>

        <div className="footer__reviews">
          <h3>Reviews</h3>
          <p>
            Our services come recommended from many past clients, and you can find a number of their positive
            reviews on our{' '}
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              Google page
            </a>
            .
          </p>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>&copy; {year} SD Gas. All rights reserved.</span>
        <Link to="/privacy" className="footer__privacy-link">
          Privacy Policy
        </Link>
        <Link to="/terms" className="footer__privacy-link">
          Terms of Service
        </Link>
      </div>
    </footer>
  )
}
