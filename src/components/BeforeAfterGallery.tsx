import beforeDrain from '../assets/gallery/before-drain.jpg'
import afterInstall from '../assets/gallery/after-install.jpg'
import beforeFilter from '../assets/gallery/before-filter.jpg'
import afterFilter from '../assets/gallery/after-filter.jpg'
import powerFlush from '../assets/gallery/power-flush.jpg'
import secondInstall from '../assets/gallery/second-install.jpg'
import engineerAtWork from '../assets/gallery/engineer-at-work.jpg'
import { useReveal } from '../hooks/useReveal.ts'
import './BeforeAfterGallery.css'

interface Pair {
  title: string
  before: { src: string; alt: string }
  after: { src: string; alt: string }
}

const PAIRS: Pair[] = [
  {
    title: 'Boiler Replacement',
    before: { src: beforeDrain, alt: 'The old system being drained down ahead of a boiler replacement' },
    after: { src: afterInstall, alt: 'The new combi boiler installed, commissioned, and ready to use' },
  },
  {
    title: 'Power Flush',
    before: { src: afterFilter, alt: 'A magnetic filter cleaned out and ready to go back on the system' },
    after: { src: powerFlush, alt: 'Power flushing equipment connected up to clear the system out' },
  },
]

const EXTRAS = [
  { src: beforeFilter, alt: 'A magnetic filter full of black sludge, found during a service' },
  { src: secondInstall, alt: 'A newly installed boiler with a smart thermostat control' },
  { src: engineerAtWork, alt: "An engineer's hands working on the open internals of a boiler" },
]

export default function BeforeAfterGallery() {
  const heading = useReveal<HTMLDivElement>('left')
  const grid = useReveal<HTMLDivElement>()
  const extras = useReveal<HTMLDivElement>()

  return (
    <section className="before-after container">
      <div ref={heading.ref} className={`section-heading ${heading.className}`}>
        <h2>Before &amp; After</h2>
        <hr />
      </div>
      <p className="before-after__intro">
        Real photos from real jobs across Fife — posted to our own Google Business page as we've worked.
      </p>

      <div ref={grid.ref} className={`before-after__grid reveal-stagger${grid.isVisible ? ' is-visible' : ''}`}>
        {PAIRS.map((pair) => (
          <div className="ba-pair hover-lift" key={pair.title}>
            <h3>{pair.title}</h3>
            <div className="ba-pair__images">
              <figure>
                <img src={pair.before.src} alt={pair.before.alt} loading="lazy" />
                <figcaption>Before</figcaption>
              </figure>
              <figure>
                <img src={pair.after.src} alt={pair.after.alt} loading="lazy" />
                <figcaption>After</figcaption>
              </figure>
            </div>
          </div>
        ))}
      </div>

      <div ref={extras.ref} className={`before-after__extras reveal-stagger${extras.isVisible ? ' is-visible' : ''}`}>
        {EXTRAS.map((photo) => (
          <div className="ba-extra hover-lift" key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
