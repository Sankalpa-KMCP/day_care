import { business, testimonials, placeholderQuote } from '../../data/site.js'
import SectionHead from '../ui/SectionHead.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import Reveal from '../Reveal.jsx'

export default function ReviewsSection() {
  return (
    <section className="section reviews-section">
      <div className="container">
        <SectionHead
          align="center"
          kicker="Kind words"
          title={
            <>
              What families say <em>about Parkdale.</em>
            </>
          }
        />

        {testimonials.length > 0 ? (
          <div className="reviews-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90} className="review-card">
                <p className="review-quote">“{t.quote}”</p>
                <footer>
                  <span className="review-name">{t.name}</span>
                  <span className="review-role">{t.role}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="review-placeholder">
            <span className="review-mark" aria-hidden="true">
              ”
            </span>
            <p className="review-text">{placeholderQuote}</p>
            <p className="review-hint">
              In the meantime, you can read what parents say on our Google listing.
            </p>
            <ButtonLink
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              arrow
            >
              View Google Reviews
            </ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  )
}
