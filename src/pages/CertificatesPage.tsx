import { ShieldCheckIcon, UmbrellaIcon, DocumentIcon } from '../components/icons.tsx'
import GasSafeBanner from '../components/GasSafeBanner.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import './CertificatesPage.css'

const CREDENTIALS = [
  {
    icon: ShieldCheckIcon,
    title: 'Gas Safe Registered',
    text: "Every engineer who works on your property is Gas Safe registered — the legally required register for anyone who works with gas in Great Britain. It's your guarantee that we're qualified to work on the specific type of appliance in your home.",
  },
  {
    icon: UmbrellaIcon,
    title: 'Fully Insured',
    text: "We carry public liability insurance, so you're covered in the unlikely event that something goes wrong while we're working in your home or business.",
  },
  {
    icon: DocumentIcon,
    title: 'Written Records',
    text: "Every service, repair, and installation comes with a written record of the work carried out — useful for warranty claims, landlord safety certificates, and your own peace of mind.",
  },
]

export default function CertificatesPage() {
  useDocumentMeta(
    'Certificates & Accreditation',
    'Gas Safe registration, insurance, and written records — what our accreditations mean for you, and how to check them yourself.',
    '/certificates',
  )
  const intro = useReveal<HTMLDivElement>('left')
  const grid = useReveal<HTMLDivElement>()
  const note = useReveal<HTMLDivElement>('right')
  const banner = useReveal<HTMLDivElement>('left')

  return (
    <>
      <Breadcrumbs items={[{ label: 'Certificates' }]} />
      <div className="certificates-page container">
        <div className="section-heading">
          <h1>Certificates &amp; Accreditation</h1>
          <hr />
        </div>

        <p ref={intro.ref} className={`certificates-page__intro ${intro.className}`}>
          Gas work carries real risk when it's done badly, which is exactly why it's regulated. Here's what our
          accreditations mean in practice, and how you can check them for yourself before any work begins.
        </p>

        <div
          ref={grid.ref}
          className={`certificates-page__grid reveal-stagger${grid.isVisible ? ' is-visible' : ''}`}
        >
          {CREDENTIALS.map(({ icon: Icon, title, text }) => (
            <div className="credential-card hover-lift" key={title}>
              <Icon width={32} height={32} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div ref={note.ref} className={`certificates-page__note ${note.className}`}>
          <h2>Always ask to see the card</h2>
          <p>
            Before any engineer starts work, you're entitled to ask to see their Gas Safe ID card — it shows
            their licence number, photo, and exactly which types of gas appliance they're qualified to work on.
            You can also check any engineer or business is currently registered directly on the official Gas
            Safe Register website, free of charge, before booking a job.
          </p>
        </div>

        <div ref={banner.ref} className={banner.className}>
          <GasSafeBanner />
        </div>
      </div>
    </>
  )
}
