function artFor(variant) {
  switch (variant % 5) {
    case 0:
      return (
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="400" height="500" fill="#dce8dc" />
          <circle cx="300" cy="110" r="58" fill="#e3bc5f" />
          <path d="M-40 380 Q120 280 260 370 T480 350 V520 H-40 Z" fill="#afc7b5" />
          <path d="M-40 430 Q160 340 340 430 T520 420 V520 H-40 Z" fill="#2f5648" opacity="0.85" />
          <g fill="#faf4ea">
            <path d="M80 130l6 16 16 6-16 6-6 16-6-16-16-6 16-6z" opacity="0.9" />
            <circle cx="150" cy="80" r="5" opacity="0.7" />
            <circle cx="60" cy="220" r="4" opacity="0.6" />
          </g>
          <g stroke="#2f5648" strokeWidth="5" strokeLinecap="round">
            <path d="M330 400v-70" />
            <path d="M330 355c0-26 18-38 40-38 0 26-18 38-40 38z" fill="#afc7b5" stroke="none" />
            <path d="M330 372c0-22-15-32-34-32 0 22 15 32 34 32z" fill="#e3bc5f" stroke="none" />
          </g>
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="400" height="500" fill="#dde9e3" />
          <path d="M200 470V250a150 150 0 0 1 150-150v370z" fill="#c9714b" opacity="0.92" />
          <path d="M200 470V250a150 150 0 0 0-150-150v370z" fill="#e3bc5f" opacity="0.85" />
          <ellipse cx="105" cy="105" rx="52" ry="20" fill="#faf4ea" />
          <ellipse cx="140" cy="88" rx="34" ry="15" fill="#faf4ea" />
          <g fill="#faf4ea" opacity="0.95">
            <path d="M320 300l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" />
            <circle cx="290" cy="255" r="4" />
          </g>
          <rect y="470" width="400" height="30" fill="#2f5648" />
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="400" height="500" fill="#f2dacb" />
          <circle cx="110" cy="150" r="62" fill="#e3bc5f" />
          <path d="M240 500V210a120 120 0 0 1 120-120h40v410z" fill="#2f5648" opacity="0.9" />
          <path d="M60 360c40-30 90-30 130 0s90 30 130 0v140H60z" fill="#c9714b" opacity="0.75" />
          <g fill="#faf4ea">
            <circle cx="310" cy="120" r="6" />
            <path d="M270 170l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" opacity="0.85" />
          </g>
        </svg>
      )
    case 3:
      return (
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="400" height="500" fill="#f3e4bd" />
          <g fill="#2f5648">
            <path d="M200 120l10 28 28 10-28 10-10 28-10-28-28-10 28-10z" />
            <circle cx="90" cy="230" r="8" opacity="0.75" />
            <circle cx="315" cy="205" r="6" opacity="0.6" />
            <circle cx="255" cy="90" r="5" opacity="0.5" />
          </g>
          <path d="M-30 420q115-70 230-20t230-10V520H-30z" fill="#c9714b" opacity="0.8" />
          <path d="M-30 465q140-55 260-8t200-2V520H-30z" fill="#afc7b5" />
          <circle cx="330" cy="330" r="40" fill="#faf4ea" opacity="0.85" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="400" height="500" fill="#2f5648" />
          <path d="M265 95a75 75 0 1 0 30 118 82 82 0 0 1-30-118z" fill="#f3e4bd" />
          <g fill="#e3bc5f">
            <path d="M110 120l6 15 15 6-15 6-6 15-6-15-15-6 15-6z" />
            <circle cx="180" cy="215" r="5" opacity="0.85" />
            <circle cx="70" cy="300" r="4" opacity="0.6" />
            <path d="M330 260l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" opacity="0.9" />
          </g>
          <path d="M-40 420Q120 330 280 410t180-20V520H-40z" fill="#25453a" />
          <rect y="470" width="400" height="30" fill="#1d352c" />
        </svg>
      )
  }
}

export default function PlaceholderArt({ variant = 0 }) {
  return <div className="ph-art">{artFor(variant)}</div>
}
