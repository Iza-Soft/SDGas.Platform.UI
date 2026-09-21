import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './ThankYouPage.css'

export default function ThankYouPage() {
  useDocumentMeta(
    'Thank You',
    'Thanks for your request — SD Gas will get back to you as soon as possible.',
    '/thank-you',
    { noindex: true },
  )

  return (
    <section className="thank-you container">
      <div className="thank-you__icon">
        <svg viewBox="0 0 52 52" width="52" height="52" fill="none">
          <circle cx="26" cy="26" r="25" stroke="var(--orange)" strokeWidth="2" />
          <path
            d="M15 27l7 7 15-15"
            stroke="var(--orange)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1>Thank you!</h1>
      <p>
        We will get back to you as soon as possible — we aim to respond to every enquiry within one working
        day. If it's urgent, it's still quickest to call us directly.
      </p>
      <div className="thank-you__links">
        <a className="btn btn--orange" href="tel:07480969210">
          Call Now
        </a>
        <Link className="btn btn--navy" to="/home">
          Back to Homepage
        </Link>
      </div>
    </section>
  )
}
