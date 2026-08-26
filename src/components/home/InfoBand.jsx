import { business } from '../../data/site.js'
import { IconPin, IconClock, IconStar, IconPhone } from '../decor.jsx'

const cells = [
  {
    icon: <IconPin size={17} />,
    label: 'Location',
    value: '8608 112 Ave NW, Edmonton',
  },
  {
    icon: <IconClock size={17} />,
    label: 'Hours',
    value: business.hours.short,
    sub: business.hours.note,
  },
  {
    icon: <IconStar size={17} />,
    label: 'Programs',
    value: 'Day Care · After School Care',
  },
  {
    icon: <IconPhone size={17} />,
    label: 'Call us',
    value: business.phone.display,
    href: business.phone.tel,
  },
]

export default function InfoBand() {
  return (
    <section className="infoband" aria-label="Key information">
      <div className="container infoband-grid">
        {cells.map((cell) => (
          <div key={cell.label} className="infoband-cell">
            <p className="infoband-label">{cell.icon}{cell.label}</p>
            {cell.href ? (
              <a className="infoband-value infoband-value--link" href={cell.href}>
                {cell.value}
              </a>
            ) : (
              <p className="infoband-value">{cell.value}</p>
            )}
            {cell.sub && <p className="infoband-sub">{cell.sub}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
