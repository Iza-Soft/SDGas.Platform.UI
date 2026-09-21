import { StarIcon, QuoteIcon } from './icons.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import './Testimonials.css'

const MAPS_URL =
  'https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu'

interface Review {
  name: string
  meta: string
  timeAgo: string
  rating: number
  text: string
  reply: string
  replyTimeAgo: string
}

const REVIEWS: Review[] = [
  {
    name: 'Aideen Higginson',
    meta: '1 review',
    timeAgo: '5 months ago',
    rating: 5,
    text: "Called SD about fitting a new gas oven. He quoted a good price and came the next day. He was pleasant, professional and knowledgeable. Explained everything he was doing and about gas safety. Went over and above. Would definitely use this business again and can't recommend highly enough. Thank you Sabri",
    reply: 'Thanks',
    replyTimeAgo: '5 months ago',
  },
  {
    name: 'Frank Mackay',
    meta: 'Local Guide · 21 reviews · 2 photos',
    timeAgo: '3 months ago',
    rating: 5,
    text: "Second time I've used Sabri to fix my boiler and I really can't fault him - turned up quickly and had the boiler fixed in no time at a very reasonable cost - would have no hesitation in recommending him to anyone - 5 star",
    reply: 'Thank you Frank',
    replyTimeAgo: '3 months ago',
  },
  {
    name: 'Kevin Gunn',
    meta: '2 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    text: 'Excellent service from start to finish. New boiler and pipe work supplied and fitted exactly as quoted with helpful explanations of what was being done. Prompt, reliable and very thorough. Can’t recommend highly enough.',
    reply: 'Thanks Kevin',
    replyTimeAgo: '6 months ago',
  },
]

export default function Testimonials() {
  const reveal = useReveal<HTMLElement>('left')
  const grid = useReveal<HTMLDivElement>()

  return (
    <section ref={reveal.ref} className={`testimonials container ${reveal.className}`}>
      <div className="section-heading">
        <h2>What Our Customers Say</h2>
        <hr />
      </div>

      <div ref={grid.ref} className={`testimonials__grid reveal-stagger${grid.isVisible ? ' is-visible' : ''}`}>
        {REVIEWS.map((review) => (
          <article className="review-card hover-lift" key={review.name}>
            <QuoteIcon className="review-card__quote" width={28} height={28} aria-hidden="true" />

            <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <StarIcon key={i} width={16} height={16} aria-hidden="true" />
              ))}
            </div>

            <p className="review-card__text">{review.text}</p>

            <div className="review-card__author">
              <span className="review-card__name">{review.name}</span>
              <span className="review-card__meta">
                {review.meta} · {review.timeAgo}
              </span>
            </div>

            <div className="review-card__reply">
              <span className="review-card__reply-label">Response from the owner · {review.replyTimeAgo}</span>
              <p>{review.reply}</p>
            </div>
          </article>
        ))}
      </div>

      <a className="testimonials__more" href={MAPS_URL} target="_blank" rel="noreferrer">
        See more reviews on Google
      </a>
    </section>
  )
}
