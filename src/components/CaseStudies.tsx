import maintenanceImg from '../assets/boiler-maintenance.jpg'
import installationImg from '../assets/boiler-installation.jpg'
import repairImg from '../assets/boiler-repair.jpeg'
import heatPumpImg from '../assets/heat-pump.jpg'
import { useReveal } from '../hooks/useReveal.ts'
import './CaseStudies.css'

interface CaseStudy {
  title: string
  image: string
  imageAlt: string
  challenge: string
  work: string
  outcome: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Boiler Replacement',
    image: installationImg,
    imageAlt: 'An engineer wiring the inside of a newly installed boiler',
    challenge: "An ageing boiler was struggling to keep up with demand and had started losing pressure regularly.",
    work: "We assessed the property's hot water and heating needs, removed the old unit, and installed a new, correctly sized boiler with updated pipework and controls.",
    outcome: 'A fully commissioned, Gas Safe registered installation, with lower running costs and the manufacturer warranty in place from day one.',
  },
  {
    title: 'Emergency Boiler Repair',
    image: repairImg,
    imageAlt: "An engineer's gloved hands using pliers on boiler pipework during a repair",
    challenge: 'No heating or hot water during a cold snap, with the boiler refusing to ignite.',
    work: 'Diagnosed a faulty ignition component on the same visit — we had the part on the van, so there was no need to wait on an order.',
    outcome: 'Heating and hot water restored the same day, with a full safety check carried out before we left.',
  },
  {
    title: 'Annual Boiler Service',
    image: maintenanceImg,
    imageAlt: "An engineer adjusting a boiler's control panel with a screwdriver during a service",
    challenge: 'A homeowner wanted peace of mind ahead of winter and to keep their warranty valid.',
    work: 'Full visual and mechanical inspection, gas pressure test, flue check, and a fire-up test to confirm everything was working as it should.',
    outcome: 'A clean bill of health, a written service record for the warranty, and one less thing to worry about before the cold months.',
  },
  {
    title: 'Heat Pump Check-Up',
    image: heatPumpImg,
    imageAlt: 'A technician inspecting an outdoor heat pump unit with a torch',
    challenge: 'An outdoor heat pump unit was showing signs of reduced efficiency after its first year in place.',
    work: "Cleared debris restricting airflow around the unit, checked the condensate drain, and tested performance against the system's expected output.",
    outcome: 'Efficiency back to where it should be, with a few small maintenance tips to keep it that way.',
  },
]

export default function CaseStudies() {
  const heading = useReveal<HTMLDivElement>('right')
  const grid = useReveal<HTMLDivElement>()

  return (
    <section className="case-studies container">
      <div ref={heading.ref} className={`section-heading ${heading.className}`}>
        <h2>Case Studies</h2>
        <hr />
      </div>
      <p className="case-studies__intro">
        A few examples of the kind of work we carry out across Fife — from routine servicing to same-day
        emergency repairs.
      </p>

      <div ref={grid.ref} className={`case-studies__grid reveal-stagger${grid.isVisible ? ' is-visible' : ''}`}>
        {CASE_STUDIES.map((study) => (
          <article className="case-study-card hover-lift" key={study.title}>
            <div className="case-study-card__image">
              <img src={study.image} alt={study.imageAlt} loading="lazy" />
            </div>
            <div className="case-study-card__body">
              <h3>{study.title}</h3>
              <dl>
                <div>
                  <dt>The challenge</dt>
                  <dd>{study.challenge}</dd>
                </div>
                <div>
                  <dt>What we did</dt>
                  <dd>{study.work}</dd>
                </div>
                <div>
                  <dt>The outcome</dt>
                  <dd>{study.outcome}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
