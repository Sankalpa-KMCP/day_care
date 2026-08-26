import { business } from '../data/site.js'
import { IconClock, IconPhone, IconPin } from './decor.jsx'
import ButtonLink from './ui/ButtonLink.jsx'
import MapEmbed from './MapEmbed.jsx'

const rows = [
  {
    icon: <IconPin size={17} />,
    label: 'Visit',
    content: (
      <>
        {business.address.street}
        <br />
        {business.address.city}, {business.address.province} {business.address.postalCode}
      </>
    ),
  },
  {
    icon: <IconPhone size={17} />,
    label: 'Call',
    content: (
      <a className="loc-phone" href={business.phone.tel}>
        {business.phone.friendly}
      </a>
    ),
  },
  {
    icon: <IconClock size={17} />,
    label: 'Hours',
    content: (
      <>
        {business.hours.days}
        <br />
        {business.hours.time}
      </>
    ),
  },
]

export default function LocationSection() {
  return (
    <section className="section location-section">
      <div className="container location-grid">
        <div className="location-card">
          <p className="kicker">Find us</p>
          <h2 className="section-title">Right in the Parkdale neighbourhood.</h2>
          <ul className="loc-rows">
            {rows.map((row) => (
              <li key={row.label} className="loc-row">
                <span className="loc-icon">{row.icon}</span>
                <span className="loc-body">
                  <span className="loc-label">{row.label}</span>
                  <span className="loc-content">{row.content}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <ButtonLink href={business.directionsUrl} target="_blank" rel="noreferrer" arrow>
              Get Directions
            </ButtonLink>
            <ButtonLink href={business.phone.tel} variant="ghost">
              Call Us
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Contact Us
            </ButtonLink>
          </div>
        </div>
        <MapEmbed className="location-map" />
      </div>
    </section>
  )
}
