import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProgramDetailCard({ program, index }) {
  const { title, ageGroup, description, environmentFocus, dailyFocusAreas, highlights, ratio, badgeVariant } = program;
  const isReversed = index % 2 === 1;
  const badgeClass = badgeVariant ? `program-detail-badge badge-${badgeVariant}` : 'program-detail-badge';

  return (
    <article className={`program-detail-card ${isReversed ? 'is-reversed' : ''}`} id={program.id}>
      <div className="program-detail-content">
        <div className="program-detail-header">
          <span className={badgeClass}>{ageGroup}</span>
          {ratio && <span className="program-detail-ratio">{ratio}</span>}
        </div>
        <h3 className="program-detail-title">{title}</h3>
        <p className="program-detail-description">{description}</p>
        
        <div className="program-detail-block">
          <h4 className="block-label">Environment Focus</h4>
          <p className="block-text">{environmentFocus}</p>
        </div>

        {dailyFocusAreas && (
          <div className="program-detail-block">
            <h4 className="block-label">Key Developmental Focus Areas</h4>
            <ul className="focus-areas-list">
              {dailyFocusAreas.map((area, idx) => (
                <li key={idx}>
                  <span className="focus-bullet" aria-hidden="true">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="program-detail-actions">
          <Link to="/contact" className="btn btn-primary">
            Schedule a Tour for this Age
          </Link>
          <a href="#schedule" className="btn btn-outline">
            View Daily Routine &rarr;
          </a>
        </div>
      </div>

      <div className="program-detail-visual">
        <ImagePlaceholder
          src={program.image}
          alt={`${title} classroom and learning environment`}
          title={`${title} Learning Environment`}
          aspect="4/3"
          tag={ageGroup}
        />
        <div className="highlights-box mt-4">
          <h4 className="highlights-title">Curriculum Highlights</h4>
          <ul className="highlights-list">
            {highlights.map((item, idx) => (
              <li key={idx}>
                <svg className="check-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
