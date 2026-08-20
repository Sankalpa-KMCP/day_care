import React from 'react';

const toneValues = {
  pine: 'var(--pine, #17372e)',
  clay: 'var(--clay, #c35e42)',
  honey: 'var(--honey, #f3be62)',
  sage: 'var(--sage, #a8b8a2)',
  parchment: 'var(--parchment, #f7f0e4)',
};

function MeanderTrail() {
  return (
    <>
      <path d="M12 132C96 134 84 42 174 48c77 5 56 91 142 84 88-8 92-104 188-94 72 7 90 75 204 58" />
      <path className="botanical-trail__twig" d="M116 79c-17-8-28-21-33-37M215 70c9-18 23-31 42-39M390 83c-12-18-15-35-8-53M555 55c14 3 30-1 47-15" />
      <g className="botanical-trail__leaves">
        <path d="M75 41c21-7 36-1 43 17-19 5-34 0-43-17Z" />
        <path d="M84 43c-3-19 4-33 22-41 2 19-5 32-22 41Z" />
        <path d="M254 31c19-4 33 3 39 21-18 3-31-4-39-21Z" />
        <path d="M382 31c-18-4-30-14-35-31 19 3 30 14 35 31Z" />
        <path d="M598 40c4-18 15-29 33-34-4 18-15 29-33 34Z" />
        <path d="M601 40c18 2 30 11 37 27-18-1-30-10-37-27Z" />
      </g>
      <circle className="botanical-trail__seed" cx="173" cy="48" r="4" />
      <circle className="botanical-trail__seed" cx="506" cy="37" r="4" />
    </>
  );
}

function VerticalTrail() {
  return (
    <>
      <path d="M74 8c-3 69 55 80 37 151-17 66-69 67-61 141 8 78 70 77 58 157-5 35-21 66-46 95" />
      <path className="botanical-trail__twig" d="M104 111c20-8 34-22 41-42M57 245c-20-5-36-17-48-36M102 402c19-6 35-18 48-37" />
      <g className="botanical-trail__leaves">
        <path d="M145 68c-5-20 1-35 19-46 5 19-2 35-19 46Z" />
        <path d="M145 69c19 4 31 15 36 34-18-3-30-15-36-34Z" />
        <path d="M10 208c4-19 15-31 34-36-3 18-15 30-34 36Z" />
        <path d="M149 365c-2-20 6-35 24-44 2 20-6 34-24 44Z" />
        <path d="M149 366c18 5 29 17 33 35-18-4-29-16-33-35Z" />
      </g>
      <circle className="botanical-trail__seed" cx="50" cy="300" r="4" />
    </>
  );
}

function ArchTrail() {
  return (
    <>
      <path d="M9 231C48 109 140 35 253 34c105-1 183 55 236 169" />
      <path className="botanical-trail__twig" d="M79 112c-23-2-42-11-56-28M174 50c-7-20-5-39 6-57M352 57c9-20 23-34 42-43M443 133c22-3 41-13 55-31" />
      <g className="botanical-trail__leaves">
        <path d="M23 84c20-4 35 3 43 22-19 3-33-5-43-22Z" />
        <path d="M180 0c18 7 28 20 29 39-18-6-28-19-29-39Z" />
        <path d="M393 15c-2 20-12 33-30 40 2-19 12-33 30-40Z" />
        <path d="M497 102c-18 0-31-8-40-24 18-1 31 7 40 24Z" />
      </g>
      <circle className="botanical-trail__seed" cx="253" cy="34" r="4" />
    </>
  );
}

export default function BotanicalTrail({ variant = 'meander', tone = 'pine', className = '' }) {
  const isVertical = variant === 'vertical';
  const viewBox = isVertical ? '0 0 184 560' : variant === 'arch' ? '0 0 510 250' : '0 0 720 180';
  const trailClassName = [
    'botanical-trail',
    `botanical-trail--${variant}`,
    `botanical-trail--${tone}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <svg
      className={trailClassName}
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      data-variant={variant}
      data-tone={tone}
      style={{ '--botanical-trail-color': toneValues[tone] ?? toneValues.pine }}
    >
      <g
        fill="none"
        stroke="var(--botanical-trail-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {isVertical ? <VerticalTrail /> : variant === 'arch' ? <ArchTrail /> : <MeanderTrail />}
      </g>
    </svg>
  );
}
