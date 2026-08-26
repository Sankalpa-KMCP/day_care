import { business, heroFacts, photos } from '../../data/site.js'
import { Sparkle, Squiggle, Stamp, IconPin, IconClock } from '../decor.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import Reveal from '../Reveal.jsx'
import Photo from '../Photo.jsx'

const factIcons = { pin: IconPin, clock: IconClock }

export default function Hero() {
  return (
    <section className="hero">
      <Sparkle className="hero-sparkle hero-sparkle--one" size={22} />
      <Sparkle className="hero-sparkle hero-sparkle--two" size={14} />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="kicker">
              <Sparkle size={13} /> Daycare · After School Care · Edmonton
            </p>
            <h1 className="hero-title">
              A caring place to{' '}
              <em>
                learn, play
                <Squiggle className="hero-squiggle" width={170} />
              </em>{' '}
              &amp; grow.
            </h1>
          </Reveal>
          <Reveal delay={110}>
            <p className="hero-lead">
              A warm and welcoming childcare environment for Edmonton families — where children feel
              comfortable, supported and excited to explore every day.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="btn-row">
              <ButtonLink to="/contact" arrow>
                Book a Visit
              </ButtonLink>
              <ButtonLink href={business.phone.tel} variant="ghost">
                Call Us
              </ButtonLink>
            </div>
            <ul className="hero-facts">
              {heroFacts.map((fact) => {
                const Icon = factIcons[fact.icon]
                return (
                  <li key={fact.icon}>
                    <Icon size={16} />
                    <span>{fact.text}</span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <div className="hero-media">
          <Reveal delay={150} className="hero-photo-wrap">
            <span className="hero-arch" aria-hidden="true" />
            <Photo
              image={photos.hero}
              ratio="4 / 4.6"
              eager
              showTag={false}
            />
            <figure className="hero-polaroid">
              <Photo image={photos.heroPolaroid} ratio="1 / 1" showTag={false} />
              <figcaption className="hand">life at parkdale</figcaption>
            </figure>
            <Stamp className="hero-stamp" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
