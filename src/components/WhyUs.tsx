import type { ComponentType } from 'react'
import {
  ShieldCheckIcon,
  BoltIcon,
  HandshakeIcon,
  CoinIcon,
  SirenIcon,
  DeviceIcon,
  StarIcon,
  UmbrellaIcon,
} from './icons.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import './WhyUs.css'

interface Badge {
  icon: ComponentType<{ width?: number; height?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>
  label: string
  detail: string
}

const BADGES: Badge[] = [
  { icon: ShieldCheckIcon, label: 'Certified Engineer', detail: 'Gas Safe registered, qualified for the work carried out' },
  { icon: BoltIcon, label: 'Efficient Work', detail: 'Jobs diagnosed and completed with minimal disruption' },
  { icon: HandshakeIcon, label: 'Trusted Company', detail: 'Built on repeat customers and word of mouth across Fife' },
  { icon: CoinIcon, label: 'Cost Effective', detail: 'Honest, upfront pricing with no hidden extras' },
  { icon: SirenIcon, label: 'Emergency Service', detail: 'Available 24 hours a day, 7 days a week' },
  { icon: DeviceIcon, label: 'We are Digital', detail: 'Book online any time via the Request a Call form' },
  { icon: UmbrellaIcon, label: 'Fully Insured', detail: 'Covered by public liability insurance on every job' },
  { icon: StarIcon, label: '5 Star Rating', detail: 'Rated 4.9 out of 5 from genuine Google reviews' },
]

export default function WhyUs() {
  const reveal = useReveal<HTMLElement>('right')
  const gridReveal = useReveal<HTMLDivElement>()

  return (
    <section ref={reveal.ref} className={`why-us container ${reveal.className}`}>
      <div className="section-heading">
        <h2>Why Us</h2>
        <hr />
      </div>

      <p className="why-us__intro">
        Choose us because we're Gas Safe registered, which means every project we take on is carried out in
        line with the compliance and safety standards that protect you, your family, and your property. We
        guarantee a quality service by sticking closely to industry standards for gas safety at every stage
        of the job, not just the parts a customer would notice.
      </p>
      <p className="why-us__intro">
        With us, you can trust that your home or business is in experienced hands, with safety and regulatory
        compliance treated as a priority rather than an afterthought. If you ever run into a problem with
        your gas or heating, we're only a phone call away — so why not call us now and let one of our
        engineers get you back to a warm home? As gas and central heating specialists covering the whole of
        Fife, we're always happy to talk through an enquiry, however big or small.
      </p>

      <div
        ref={gridReveal.ref}
        className={`why-us__grid reveal-stagger${gridReveal.isVisible ? ' is-visible' : ''}`}
      >
        {BADGES.map(({ icon: Icon, label, detail }) => (
          <div className="why-us__badge hover-lift" key={label} title={detail}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
