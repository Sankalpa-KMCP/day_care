import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProgramCard({ program }) {
  const { title, ageGroup, description, highlights, image, ratio, id, badgeVariant } = program;

  const badgeClass = badgeVariant ? `program-age-badge badge-${badgeVariant}` : 'program-age-badge';

  return (
    <article className="program-card">
      {image && (
        <div className="program-card-visual">
          <ImagePlaceholder
            src={image}
            alt={title}
            title={title}
            aspect="16/10"
            tag={ageGroup}
          />
        </div>
      )}
      <div className="program-card-body">
        <div className="program-card-header">
          <span className={badgeClass}>{ageGroup}</span>
          {ratio && <span className="program-ratio-tag">{ratio}</span>}
        </div>
        <h3 className="program-card-title">{title}</h3>
        <p className="program-card-description">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="program-card-highlights">
            {highlights.slice(0, 3).map((item, index) => (
              <li key={index}>
                <svg className="check-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="program-card-footer">
          <Link to={`/programs#${id}`} className="btn btn-secondary btn-sm btn-block">
            View Curriculum & Schedule &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
