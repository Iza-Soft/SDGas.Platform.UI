import { PhoneIcon } from './icons.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import './CtaBanner.css'

export default function CtaBanner() {
  const reveal = useReveal<HTMLElement>('right')

  return (
    <section ref={reveal.ref} className={`cta-banner ${reveal.className}`}>
      <div className="container cta-banner__inner">
        <PhoneIcon className="cta-banner__icon" width={40} height={40} aria-hidden="true" />
        <div>
          <p>Call for specialized Heating &amp; Plumbing services</p>
          <a href="tel:07480969210">07480 969210</a>
        </div>
      </div>
    </section>
  )
}
