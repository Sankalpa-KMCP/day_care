import { Sparkle } from './decor.jsx'

const words = ['play', 'learn', 'grow', 'imagine', 'explore', 'wonder']

export default function MarqueeBand() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {words.map((word) => (
              <span key={word}>
                {word}
                <Sparkle size={13} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
