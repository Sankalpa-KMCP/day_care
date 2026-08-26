import Reveal from './Reveal.jsx'
import Photo from './Photo.jsx'

export default function GalleryGrid({ items, compact = false }) {
  return (
    <div className={`gallery${compact ? ' gallery--compact' : ''}`}>
      {items.map((item, i) => (
        <Reveal key={item.id} delay={(i % 3) * 90} className={`gallery-item g-${item.span}`}>
          <Photo image={item} showTag={false} />
          {item.caption && (
            <p className="gallery-cap">
              <span aria-hidden="true">—</span> {item.caption}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  )
}
