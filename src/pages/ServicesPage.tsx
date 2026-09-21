import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services.ts'
import type { ServiceInfo } from '../data/services.ts'
import { useHashScroll } from '../hooks/useHashScroll.ts'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import './ServicesPage.css'

function ServiceDetail({ service, reverse }: { service: ServiceInfo; reverse: boolean }) {
  const reveal = useReveal<HTMLElement>(reverse ? 'right' : 'left')

  return (
    <section
      ref={reveal.ref}
      id={service.slug}
      className={`service-detail ${reveal.className}` + (reverse ? ' service-detail--reverse' : '')}
    >
      <div className="container service-detail__inner">
        <div className="service-detail__image">
          <img src={service.image} alt={service.imageAlt} loading="lazy" />
        </div>
        <div className="service-detail__body">
          <h2>{service.title}</h2>
          {service.details.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {service.bulletGroups?.map((group) => (
            <div className="service-detail__bullets" key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <Link className="btn btn--orange" to="/home#contact">
            Call to Book
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  useHashScroll()
  useDocumentMeta(
    'Our Services',
    'Boiler installation, servicing, repair, plumbing, heat pump servicing, and Legionella risk assessments — full details of every service SD Gas offers across Fife.',
    '/service',
  )
  const intro = useReveal<HTMLElement>('left')

  return (
    <div className="services-page">
      <Breadcrumbs items={[{ label: 'Service' }]} />
      <header ref={intro.ref} className={`services-page__intro container ${intro.className}`}>
        <div className="section-heading">
          <h1>Our Services</h1>
          <hr />
        </div>
        <p>
          Whatever stage your heating system is at — brand new, due a service, or not working at all — we
          cover the full lifecycle of a domestic gas and central heating system in Fife. Have a look through
          what each service involves below, or call us directly if you'd rather just talk it through.
        </p>
      </header>

      {SERVICES.map((service, index) => (
        <ServiceDetail service={service} reverse={index % 2 === 1} key={service.slug} />
      ))}
    </div>
  )
}
