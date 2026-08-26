import { business } from '../data/site.js'

export default function MapEmbed({ className = '' }) {
  return (
    <div className={`map-embed ${className}`}>
      <iframe
        title="Map showing Parkdale Daycare at 8608 112 Ave NW, Edmonton"
        src={business.mapEmbedUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
