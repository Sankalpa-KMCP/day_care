import Reveal from './Reveal.jsx'
import { Sparkle } from './decor.jsx'

export default function PageHero({ kicker, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <Sparkle size={13} /> {kicker}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="page-hero-title">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={180}>
            <p className="lead page-hero-lead">{lead}</p>
          </Reveal>
        )}
        <div className="page-hero-rule" aria-hidden="true">
          <span />
          <Sparkle size={11} />
          <span />
        </div>
      </div>
    </section>
  )
}
