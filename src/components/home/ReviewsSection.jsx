import { business, testimonials, placeholderQuote } from '../../data/site.js'
import { IconStar } from '../decor.jsx'
import SectionHead from '../ui/SectionHead.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import Reveal from '../Reveal.jsx'

const initialsOf = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')

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
                {t.rating ? (
                  <div className="review-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }, (_, s) => (
                      <IconStar key={s} size={14} />
                    ))}
                  </div>
                ) : null}
                <p className="review-quote">“{t.quote}”</p>
                <footer>
                  <span className="review-avatar" aria-hidden="true">
                    {initialsOf(t.name)}
                  </span>
                  <span className="review-meta">
                    <span className="review-name">{t.name}</span>
                    <span className="review-role">{t.role}</span>
                  </span>
                </footer>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="review-placeholder">
            <div className="review-stars review-stars--center" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <IconStar key={i} size={15} />
              ))}
            </div>
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
