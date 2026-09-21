import { Link } from 'react-router-dom'
import engineerAtWork from '../assets/gallery/engineer-at-work.jpg'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './AboutPage.css'

export default function AboutPage() {
  useDocumentMeta(
    'About Us',
    'SD Gas is a Gas Safe registered gas engineer and plumbing business run by Sabri, covering the whole of Fife.',
    '/about',
  )
  const intro = useReveal<HTMLDivElement>('left')
  const story = useReveal<HTMLDivElement>('right')
  const values = useReveal<HTMLDivElement>('left')

  return (
    <>
      <Breadcrumbs items={[{ label: 'About' }]} />
      <div className="about-page container">
        <div className="section-heading">
          <h1>About SD Gas</h1>
          <hr />
        </div>

        <div ref={intro.ref} className={`about-page__intro ${intro.className}`}>
          <div className="about-page__photo">
            <img src={engineerAtWork} alt="An engineer working on the open internals of a boiler" loading="lazy" />
          </div>
          <div>
            <p>
              SD Gas is a small, independent gas engineer and plumbing business run by Sabri, covering homes
              and businesses across the whole of Fife. Every job — from a routine boiler service to a full
              installation — is carried out personally by a Gas Safe registered engineer, not passed along to
              a rotating team of subcontractors.
            </p>
            <p>
              That's reflected in the reviews customers leave on our Google page: people who've called Sabri
              out once and had him back for the next job, because they knew what to expect — straight answers,
              tidy work, and no surprises on the bill.
            </p>
          </div>
        </div>

        <div ref={story.ref} className={`about-page__section ${story.className}`}>
          <h2>How we work</h2>
          <p>
            We keep things straightforward. You call or send a request, we talk through what's going on, and
            we give you an honest answer — including telling you when something doesn't need fixing yet. On
            the job, that means explaining what we're doing and why, leaving the property as tidy as we found
            it, and giving you a written record of the work for your own peace of mind or your landlord
            paperwork.
          </p>
          <p>
            Being <Link to="/certificates">Gas Safe registered</Link> isn't just a badge on the site — every
            engineer who works on your property is qualified for that specific type of gas work, and you're
            always welcome to ask to see the ID card before anything starts.
          </p>
        </div>

        <div ref={values.ref} className={`about-page__section ${values.className}`}>
          <h2>What matters to us</h2>
          <ul className="about-page__values">
            <li>
              <strong>Safety first.</strong> Every job follows Gas Safe standards, not just the parts a
              customer would notice.
            </li>
            <li>
              <strong>Straight talking.</strong> Clear pricing and honest advice, even if that means telling
              you not to spend money yet.
            </li>
            <li>
              <strong>Showing up.</strong> Available 24 hours a day, 7 days a week for the jobs that can't
              wait.
            </li>
          </ul>
          <p className="about-page__cta">
            Have a job in mind? <Link to="/schedule">Request a call</Link> and we'll get back to you within
            one working day.
          </p>
        </div>
      </div>
    </>
  )
}
