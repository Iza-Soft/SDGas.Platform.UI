import Breadcrumbs from '../components/Breadcrumbs.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './TermsPage.css'

export default function TermsPage() {
  useDocumentMeta(
    'Terms of Service',
    'The terms that apply to using this website and booking work with SD Gas.',
    '/terms',
  )
  const reveal = useReveal<HTMLDivElement>('left')

  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      <div ref={reveal.ref} className={`terms container ${reveal.className}`}>
        <div className="section-heading">
          <h1>Terms of Service</h1>
          <hr />
        </div>

        <p className="terms__updated">
          Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
        </p>

        <section>
          <h2>Using this website</h2>
          <p>
            This website is provided by SD Gas to give information about our services and to let you request
            a callback. You're welcome to browse and use it for those purposes. Content on this site —
            including text, images, and the SD Gas name and logo — belongs to SD Gas and shouldn't be copied
            or reused without permission.
          </p>
        </section>

        <section>
          <h2>Requesting a call and booking work</h2>
          <p>
            Submitting the "Request a Call" form is a request for a callback, not a confirmed booking. An
            appointment is only confirmed once we've spoken with you directly and agreed a time. The details
            of any specific job — including scope of work, timing, and cost — are agreed directly between you
            and SD Gas at that point, not fixed by anything on this website.
          </p>
        </section>

        <section>
          <h2>Cancellations and access</h2>
          <p>
            If you need to change or cancel an appointment, please let us know as early as you can so the slot
            can be offered to someone else. On the day, we'll need reasonable access to the relevant part of
            the property and to the gas or water supply to carry out the work safely.
          </p>
        </section>

        <section>
          <h2>Liability</h2>
          <p>
            We carry public liability insurance and take reasonable care and skill on every job. Nothing in
            these terms limits our liability for death or personal injury caused by negligence, or for fraud,
            or for anything else that can't legally be limited or excluded.
          </p>
        </section>

        <section>
          <h2>Governing law</h2>
          <p>
            These terms are governed by the law of Scotland, and any dispute relating to them will be dealt
            with by the Scottish courts.
          </p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time to reflect how the business or website operates. The
            version published here is the one that applies.
          </p>
        </section>

        <section>
          <h2>Contact us</h2>
          <p>
            If you have any questions about these terms, email us at{' '}
            <a href="mailto:ssdgasservices@gmail.com">ssdgasservices@gmail.com</a> or call{' '}
            <a href="tel:07480969210">07480 969210</a>.
          </p>
        </section>
      </div>
    </>
  )
}
