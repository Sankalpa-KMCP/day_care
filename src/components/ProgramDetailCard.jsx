import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramDetailCard({ program, index }) {
  const { title, ageGroup, description, environmentFocus, dailyFocusAreas, highlights, ratio, image } = program;
  const isReversed = index % 2 === 1;

  return (
    <article className={`program-editorial-item ${isReversed ? 'is-reversed' : ''}`} id={program.id}>
      <div className="program-editorial-content">
        <div className="program-meta-row">
          <span className="program-age-chip">{ageGroup}</span>
          {ratio && <span className="program-ratio-chip">{ratio}</span>}
        </div>
        <h3 className="program-editorial-title">{title}</h3>
        <p className="program-editorial-desc">{description}</p>
        
        <div className="program-info-block">
          <h4 className="program-block-label">Classroom Environment</h4>
          <p className="program-block-text">{environmentFocus}</p>
        </div>

        {dailyFocusAreas && (
          <div className="program-info-block">
            <h4 className="program-block-label">Daily Learning Focus</h4>
            <ul className="program-focus-list">
              {dailyFocusAreas.map((area, idx) => (
                <li key={idx}>
                  <span className="focus-dot" aria-hidden="true">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="program-actions-row">
          <Link to="/contact" className="btn btn-primary">
            Schedule a Tour for this Age &rarr;
          </Link>
        </div>
      </div>

      <div className="program-editorial-visual">
        <div className="program-photo-frame">
          <img
            src={image}
            alt={`${title} classroom and learning environment`}
            className="program-photo-img"
          />
        </div>
        
        {highlights && highlights.length > 0 && (
          <div className="program-highlights-box">
            <h4 className="highlights-box-label">Curriculum Takeaways</h4>
            <ul className="highlights-box-list">
              {highlights.map((item, idx) => (
                <li key={idx}>
                  <span className="highlight-check" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
