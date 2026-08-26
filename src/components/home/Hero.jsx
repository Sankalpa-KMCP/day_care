import { business } from '../../data/site.js'
import { Sparkle, Squiggle, Stamp, IconPin, IconClock } from '../decor.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import Reveal from '../Reveal.jsx'
import Photo from '../Photo.jsx'

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
                learn,
                <br />
                play
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
              <li>
                <IconPin size={16} />
                <span>8608 112 Ave NW, Edmonton</span>
              </li>
              <li>
                <IconClock size={16} />
                <span>Mon – Fri · 7 AM – 6 PM</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="hero-media">
          <Reveal delay={150} className="hero-photo-wrap">
            <span className="hero-arch" aria-hidden="true" />
            <Photo
              image={{ src: null, alt: 'Children playing together at Parkdale Daycare', variant: 0 }}
              ratio="4 / 4.6"
              eager
            />
            <figure className="hero-polaroid">
              <Photo image={{ src: null, alt: 'Craft time at Parkdale Daycare', variant: 3 }} ratio="1 / 1" showTag={false} />
              <figcaption className="hand">life at parkdale</figcaption>
            </figure>
            <Stamp className="hero-stamp" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
