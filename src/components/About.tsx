import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.ts'
import './About.css'

export default function About() {
  const reveal = useReveal<HTMLElement>('left')

  return (
    <section ref={reveal.ref} className={`about container ${reveal.className}`}>
      <p>
        We are a small, reputable, and well-established company based in Fife, covering homes and businesses
        across the whole Fife area with every aspect of domestic central heating and gas work. As a{' '}
        <Link to="/certificates">Gas Safe registered</Link> company, we take safety and a quality finish
        seriously on every job we take on, from the smallest repair to a full system installation.
      </p>
      <p>
        We can be trusted to carry out almost any job to the highest standards, with clear communication and
        tidy work at every stage. Because we carry out <Link to="/service">installations, servicing, and
        repairs</Link> on all types of heating systems ourselves, we're able to offer a complete
        start-to-finish service — one point of contact who knows your system from the first visit through to
        the last.
      </p>
    </section>
  )
}
