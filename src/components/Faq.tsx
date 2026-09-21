import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.ts'
import './Faq.css'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'How often should I get my boiler serviced?',
    answer:
      "Once a year is the standard recommendation, and it's usually a requirement to keep your manufacturer's warranty valid. It's also the main way to catch a developing fault — or a safety issue like a carbon monoxide leak — before it becomes a breakdown.",
  },
  {
    question: 'What does it mean that you\'re Gas Safe registered?',
    answer:
      "Gas Safe Register is the official, legally required register for anyone who works with gas in Great Britain. Every engineer we send is on that register, qualified for the specific type of gas work being carried out, and carries an ID card you're welcome to ask to see.",
  },
  {
    question: 'Do you offer emergency call-outs?',
    answer:
      "Yes — we're available 24x7, seven days a week. If you've got no heating or hot water, or you're concerned about a gas safety issue, call us directly rather than waiting for a scheduled appointment.",
  },
  {
    question: 'How quickly will you get back to me after I submit a request?',
    answer:
      "We aim to respond to every enquiry within one working day. If it's urgent, calling us directly is always the fastest route.",
  },
  {
    question: 'Do you cover my area?',
    answer:
      "We cover the whole of Fife. If you're not sure whether that includes you, just get in touch and we'll let you know.",
  },
  {
    question: 'What areas of work do you cover besides boilers?',
    answer:
      "Alongside boiler installation, servicing, and repair, we handle general plumbing, heat pump servicing, and Legionella risk assessments. Have a look at our Services page for the full list.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reveal = useReveal<HTMLElement>('right')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <section ref={reveal.ref} className={`faq container ${reveal.className}`}>
      <div className="section-heading">
        <h2>Frequently Asked Questions</h2>
        <hr />
      </div>

      <div className="faq__list">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div className="faq__item" key={faq.question}>
              <button
                type="button"
                className="faq__question"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {faq.question}
                <span className="faq__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div className={`faq__answer${isOpen ? ' is-open' : ''}`} id={`faq-answer-${i}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </section>
  )
}
