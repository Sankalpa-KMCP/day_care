export function SunMark({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <g stroke="#e3bc5f" strokeWidth="2.6" strokeLinecap="round">
        <line x1="24" y1="5" x2="24" y2="10" />
        <line x1="11.5" y1="9.5" x2="15" y2="13" />
        <line x1="36.5" y1="9.5" x2="33" y2="13" />
        <line x1="7" y1="21" x2="12" y2="21" />
        <line x1="36" y1="21" x2="41" y2="21" />
      </g>
      <circle cx="24" cy="26" r="9.5" fill="#e3bc5f" />
      <path d="M8 39h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function Sparkle({ className = '', size = 18 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
    </svg>
  )
}

export function Squiggle({ className = '', width = 150 }) {
  return (
    <svg
      className={className}
      width={width}
      height={Math.round(width * 0.14)}
      viewBox="0 0 160 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 14c14-9 27 8 41 0s27-9 41 0 27 8 41 0 21-6 31-2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Stamp({ className = '' }) {
  return (
    <svg className={`stamp ${className}`} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="stamp-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
      </defs>
      <text fontSize="10.5" letterSpacing="2.6" fill="currentColor">
        <textPath href="#stamp-circle">PARKDALE DAYCARE • EDMONTON •</textPath>
      </text>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="60" y1="42" x2="60" y2="47" />
        <line x1="49" y1="46" x2="52" y2="50" />
        <line x1="71" y1="46" x2="68" y2="50" />
        <line x1="44" y1="55" x2="49" y2="55" />
        <line x1="71" y1="55" x2="76" y2="55" />
      </g>
      <circle cx="60" cy="63" r="9" fill="#e3bc5f" />
      <line x1="46" y1="79" x2="74" y2="79" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function IconPin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconClock({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function IconPhone({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function IconStar({ size = 16, filled = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...base}
      fill={filled ? 'currentColor' : 'none'}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function IconHeart({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

export function IconSprout({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 22v-8" />
      <path d="M12 14c0-4.4-3.1-6.5-7.5-6.5 0 4.4 3.1 6.5 7.5 6.5z" />
      <path d="M12 14c0-4.4 3.1-6.5 7.5-6.5 0 4.4-3.1 6.5-7.5 6.5z" />
    </svg>
  )
}

export function IconSun({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  )
}
