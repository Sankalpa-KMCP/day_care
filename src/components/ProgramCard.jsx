import React from 'react';
import { Link } from 'react-router-dom';

const roomAccents = {
  'infant-toddler': 'clay',
  'preschool-learning': 'honey',
  'pre-k-readiness': 'sage',
};

export default function ProgramCard({ program, index = 0 }) {
  const accent = roomAccents[program.id] || 'clay';

  return (
    <article className={`program-story story-${index + 1} program-story-${program.id} room-accent room-accent-${accent}`} data-room={program.id} data-accent={accent}>
      <Link to={`/programs#${program.id}`} className="program-image-wrap" aria-label={`Read about ${program.title}`}>
        <img src={program.image} alt={program.imageAlt} width="1400" height="1050" loading="lazy" decoding="async" />
        <span className="photo-note">Illustrative concept image</span>
      </Link>
      <div className="program-story-copy">
        <div className="program-meta"><span>{program.ageGroup}</span><span>{program.ratio}</span></div>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <Link className="text-link" to={`/programs#${program.id}`}>Explore {program.title} <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
