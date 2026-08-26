import Reveal from '../Reveal.jsx'

export default function SectionHead({
  kicker,
  title,
  lead,
  align = 'left',
  className = '',
}) {
  return (
    <Reveal className={`section-head section-head--${align} ${className}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}
