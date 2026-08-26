import { philosophy } from '../../data/site.js'
import { Sparkle } from '../decor.jsx'
import Reveal from '../Reveal.jsx'

export default function PhilosophyBand() {
  return (
    <section className="philosophy-band">
      <Sparkle className="philo-sparkle philo-sparkle--one" size={26} />
      <Sparkle className="philo-sparkle philo-sparkle--two" size={16} />
      <Reveal className="container philosophy-inner">
        <blockquote className="philosophy-quote">
          “{philosophy.quote.split(' ').slice(0, 2).join(' ')}{' '}
          <em>{philosophy.quote.split(' ').slice(2).join(' ')}</em>”
        </blockquote>
        <p className="philosophy-lead">{philosophy.lead}</p>
      </Reveal>
    </section>
  )
}
