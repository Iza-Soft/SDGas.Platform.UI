import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services.ts'
import { useReveal } from '../hooks/useReveal.ts'
import './Services.css'

export default function Services() {
  const heading = useReveal<HTMLDivElement>('left')
  const grid = useReveal<HTMLDivElement>()

  return (
    <section className="services container">
      <div ref={heading.ref} className={`section-heading ${heading.className}`}>
        <h2>Our Service</h2>
        <hr />
      </div>

      <div ref={grid.ref} className={`services__grid reveal-stagger${grid.isVisible ? ' is-visible' : ''}`}>
        {SERVICES.map((service) => (
          <article className="service-card hover-lift" key={service.slug}>
            <div className="service-card__image">
              <img src={service.image} alt={service.imageAlt} loading="lazy" />
            </div>
            <div className="service-card__body">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <Link className="service-card__link" to={`/service#${service.slug}`}>
                For more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
