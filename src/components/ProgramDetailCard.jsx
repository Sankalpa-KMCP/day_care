import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProgramDetailCard({ program, index }) {
  const { title, ageGroup, description, environmentFocus, dailyFocusAreas, highlights, icon } = program;
  const isReversed = index % 2 === 1;

  return (
    <article className={`program-detail-card ${isReversed ? 'is-reversed' : ''}`} id={program.id}>
      <div className="program-detail-content">
        <div className="program-detail-header">
          <span className="program-detail-icon" aria-hidden="true">{icon}</span>
          <span className="program-detail-badge">{ageGroup}</span>
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
                  <span className="focus-bullet" aria-hidden="true">•</span> {area}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="program-detail-actions">
          <Link to="/contact" className="btn btn-primary">
            Schedule a Visit
          </Link>
          <a href="#daily-routine" className="btn btn-outline">
            View Sample Routine &rarr;
          </a>
        </div>
      </div>

      <div className="program-detail-visual">
        <ImagePlaceholder
          title={`${title} Learning Environment`}
          aspect="4/3"
          icon={icon}
        />
        <div className="highlights-box mt-4">
          <h4 className="highlights-title">Program Highlights</h4>
          <ul className="highlights-list">
            {highlights.map((item, idx) => (
              <li key={idx}>
                <span className="check-mark" aria-hidden="true">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
