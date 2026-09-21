import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './NotFoundPage.css'

export default function NotFoundPage() {
  useDocumentMeta(
    'Page Not Found',
    "The page you're looking for doesn't exist. Head back to the SD Gas homepage or get in touch directly.",
    '/404',
    { noindex: true },
  )

  return (
    <section className="not-found container">
      <div className="leak" aria-hidden="true">
        <svg className="leak__svg" viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="leak__puddle"
            d="M64 196 Q70 186 100 188 Q135 184 164 194 Q150 204 110 203 Q80 205 64 196 Z"
          />
          <circle className="leak__ripple leak__ripple--1" cx="114" cy="196" r="8" />
          <circle className="leak__ripple leak__ripple--2" cx="107" cy="196" r="8" />
          <circle className="leak__ripple leak__ripple--3" cx="122" cy="196" r="8" />

          {/* A long horizontal run with a single elbow down at the right,
              matching a pipe that carries on into the wall — plus a
              coupling collar near the bend, which is just a normal fitting,
              not the leak. */}
          <path className="leak__pipe" d="M16 62 H226 Q250 62 250 86 V120" />

          <g className="leak__collar">
            <rect x="199" y="52" width="12" height="20" rx="2" />
            <line x1="203" y1="56" x2="203" y2="68" />
            <line x1="207" y1="56" x2="207" y2="68" />
          </g>

          {/* A jagged fracture straight through the pipe wall, further left
              along the run — the actual leak. */}
          <path className="leak__crack-line" d="M111,49 L118,57 L110,63 L119,70 L112,75" />

          <path className="leak__wet-stain" d="M110 76 Q107 92 109 104 Q112 112 110 120 Q108 112 106 104 Q107 92 110 76 Z" />
          <path className="leak__wet-stain" d="M122 76 Q119 90 121 100 Q124 108 122 116 Q120 108 118 100 Q119 90 122 76 Z" />

          <g className="leak__drop leak__drop--1">
            <path
              className="leak__drop-shape"
              d="M0,-8 C3,-3 5,2 5,5 C5,8.5 2.5,10 0,10 C-2.5,10 -5,8.5 -5,5 C-5,2 -3,-3 0,-8 Z"
              transform="translate(110,78) scale(0.85)"
            />
          </g>
          <g className="leak__drop leak__drop--2">
            <path
              className="leak__drop-shape"
              d="M0,-8 C3,-3 5,2 5,5 C5,8.5 2.5,10 0,10 C-2.5,10 -5,8.5 -5,5 C-5,2 -3,-3 0,-8 Z"
              transform="translate(118,77) scale(1)"
            />
          </g>
          <g className="leak__drop leak__drop--3">
            <path
              className="leak__drop-shape"
              d="M0,-8 C3,-3 5,2 5,5 C5,8.5 2.5,10 0,10 C-2.5,10 -5,8.5 -5,5 C-5,2 -3,-3 0,-8 Z"
              transform="translate(114,79) scale(0.8)"
            />
          </g>

          {[1, 2, 3].map((n) =>
            [1, 2].map((p) => (
              <circle
                key={`${n}-${p}`}
                className={`leak__splash leak__splash--${n}-${p}`}
                cx={n === 1 ? 110 : n === 2 ? 116 : 114}
                cy="197"
                r="2.2"
              />
            )),
          )}
        </svg>
      </div>

      <p className="not-found__code">404</p>
      <h1>We've sprung a leak</h1>
      <p>
        The page you were looking for might have moved or no longer exists — a bit like this pipe. Try one of
        the links below, or head back to the homepage.
      </p>
      <div className="not-found__links">
        <Link className="btn btn--orange" to="/home">
          Back to Homepage
        </Link>
        <Link className="btn btn--navy" to="/schedule">
          Request a Call
        </Link>
      </div>
      <ul className="not-found__nav">
        <li>
          <Link to="/service">Our Services</Link>
        </li>
        <li>
          <Link to="/certificates">Certificates &amp; Accreditation</Link>
        </li>
        <li>
          <a href="tel:07480969210">Call us on 07480 969210</a>
        </li>
      </ul>
    </section>
  )
}
