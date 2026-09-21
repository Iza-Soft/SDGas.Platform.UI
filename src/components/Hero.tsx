import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <h1 className="hero__in hero__in--1">Are you looking for a Gas Engineer or Plumber in Fife?</h1>
        <p className="hero__in hero__in--2">
          Call us 24x7, seven days a week — a Gas Safe registered engineer is always on hand.
        </p>
        <div className="hero__cta-group hero__in hero__in--3">
          <a className="btn btn--orange cta-pulse" href="tel:07480969210">
            Call Now
          </a>
          <span className="hero__or">or</span>
          <Link className="btn btn--navy" to="/schedule">
            Request a Call
          </Link>
        </div>
      </div>
    </section>
  )
}
