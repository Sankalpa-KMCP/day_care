import { Link } from 'react-router-dom'
import { photos } from '../../data/site.js'
import { Squiggle } from '../decor.jsx'
import Reveal from '../Reveal.jsx'
import Photo from '../Photo.jsx'

const filmstripRatios = ['4 / 3.2', '4 / 3.6', '4 / 3']

export default function Welcome() {
  return (
    <section className="section welcome-section">
      <div className="container welcome-grid">
        <Reveal className="welcome-head">
          <p className="kicker">Welcome to Parkdale Daycare</p>
          <h2 className="section-title">
            A neighbourhood daycare, built around <em>children</em>.
            <Squiggle className="welcome-squiggle" width={140} />
          </h2>
          <Link className="text-link" to="/about">
            More about us →
          </Link>
        </Reveal>

        <Reveal delay={120} className="welcome-body">
          <p>
            Parkdale Daycare is a childcare home in the heart of Edmonton’s Parkdale neighbourhood.
            We keep our days simple and full of good things — play, stories, quiet corners,
            creative mess and plenty of gentle attention.
          </p>
          <p>
            Walk in and you’ll find calm rooms, familiar faces and children busy doing what they do
            best. Choosing care for your child takes trust, and we’d love to earn yours — come by
            for a visit and see what a Parkdale day feels like.
          </p>
          <p className="hand welcome-sign">— everyone at Parkdale</p>
        </Reveal>
      </div>

      <div className="container filmstrip-wrap">
        <div className="filmstrip">
          {photos.filmstrip.map((image, i) => (
            <Reveal
              key={image.alt}
              delay={i * 120}
              className={`filmstrip-item filmstrip-item--${'abc'[i]}`}
            >
              <Photo image={image} ratio={filmstripRatios[i]} showTag={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
