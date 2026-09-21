import Breadcrumbs from '../components/Breadcrumbs.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './PrivacyPolicyPage.css'

export default function PrivacyPolicyPage() {
  useDocumentMeta(
    'Privacy Policy',
    'How SD Gas collects, uses, and protects the information you share through this website.',
    '/privacy',
  )
  const reveal = useReveal<HTMLDivElement>('left')

  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <div ref={reveal.ref} className={`privacy container ${reveal.className}`}>
        <div className="section-heading">
          <h1>Privacy Policy</h1>
          <hr />
        </div>

        <p className="privacy__updated">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>

        <section>
          <h2>Who we are</h2>
          <p>
            SD Gas is a Gas Safe registered heating and plumbing business covering Fife. This page explains
            what information we collect through this website, why, and what we do with it.
          </p>
        </section>

        <section>
          <h2>What we collect</h2>
          <p>When you use the "Request a Call" form, we collect the information you choose to give us:</p>
          <ul>
            <li>Your name, phone number, and job site address</li>
            <li>Your email address, if you provide one</li>
            <li>Any message or extra detail you type in</li>
            <li>A photo, if you choose to attach one</li>
          </ul>
          <p>
            We don't ask for anything beyond what's needed to get back to you about the job, and fields marked
            optional are exactly that — optional.
          </p>
        </section>

        <section>
          <h2>How we use it</h2>
          <p>
            Information submitted through the form is sent directly to our business email address so an
            engineer can review the request and call you back. We don't sell, rent, or share your details with
            third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>
            We keep enquiry details for as long as reasonably needed to handle the job and any related
            follow-up (such as warranty or servicing history), and delete them when they're no longer needed.
          </p>
        </section>

        <section>
          <h2>Cookies and analytics</h2>
          <p>
            This site doesn't use cookies or any analytics or tracking software. We don't collect any
            information about you simply from browsing the site — only what you choose to submit through the
            "Request a Call" form.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            Under UK GDPR, you can ask us what information we hold about you, ask us to correct it, or ask us to
            delete it. To do any of these, just get in touch using the details below.
          </p>
        </section>

        <section>
          <h2>Contact us</h2>
          <p>
            If you have any questions about this policy or how your information is handled, email us at{' '}
            <a href="mailto:ssdgasservices@gmail.com">ssdgasservices@gmail.com</a> or call{' '}
            <a href="tel:07480969210">07480 969210</a>.
          </p>
        </section>
      </div>
    </>
  )
}
