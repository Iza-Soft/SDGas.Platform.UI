import { Link, useLocation } from 'react-router-dom'
import './StickyMobileCta.css'

// Hidden on the pages that already have their own primary CTA front and
// centre, so it doesn't compete with (or overlap) the request form itself.
const HIDDEN_ON = ['/schedule', '/thank-you']

export default function StickyMobileCta() {
  const location = useLocation()
  if (HIDDEN_ON.includes(location.pathname)) return null

  return (
    <div className="sticky-cta" role="region" aria-label="Quick contact">
      <a className="sticky-cta__link sticky-cta__link--call" href="tel:07480969210">
        Call Now
      </a>
      <Link className="sticky-cta__link sticky-cta__link--request" to="/schedule">
        Request a Call
      </Link>
    </div>
  )
}
