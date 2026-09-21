import { PinIcon, PhoneIcon, MailIcon, ClockIcon } from './icons.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import './Contact.css'

const MAPS_URL =
  'https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu'
const MAPS_EMBED_URL = 'https://www.google.com/maps?q=56.1188068,-3.1801092&z=15&output=embed'

export default function Contact() {
  const reveal = useReveal<HTMLElement>('left')

  return (
    <section ref={reveal.ref} className={`contact container ${reveal.className}`} id="contact">
      <div className="section-heading">
        <h2>Contact Us</h2>
        <hr />
      </div>

      <p className="contact__intro">
        Prefer to speak to someone directly? Give us a call, drop us an email, or find us on the map below —
        whichever's easiest, we're happy to talk through the job before you commit to anything.
      </p>

      <div className="contact__layout">
        <ul className="contact__list">
          <li>
            <PinIcon aria-hidden="true" />
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              Bennochy Road, Kirkcaldy, KY2 5, United Kingdom
            </a>
          </li>
          <li>
            <PhoneIcon aria-hidden="true" />
            <a href="tel:07480969210">07480 969210</a>
          </li>
          <li>
            <MailIcon aria-hidden="true" />
            <a href="mailto:ssdgasservices@gmail.com">ssdgasservices@gmail.com</a>
          </li>
          <li>
            <ClockIcon aria-hidden="true" />
            <span>Open 24 hours a day, 7 days a week</span>
          </li>
        </ul>

        <div className="contact__map">
          <iframe
            title="Map showing the SD Gas service area near Bennochy Road, Kirkcaldy"
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="btn btn--orange contact__directions" href={MAPS_URL} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
