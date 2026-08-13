import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramCard({ program }) {
  const { title, ageGroup, description, highlights } = program;

  return (
    <div className="program-card">
      <div className="program-card-header">
        <span className="program-age-badge">{ageGroup}</span>
        <h3 className="program-card-title">{title}</h3>
      </div>
      <p className="program-card-description">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="program-card-highlights">
          {highlights.slice(0, 3).map((item, index) => (
            <li key={index}>
              <span className="check-icon" aria-hidden="true">✓</span> {item}
            </li>
          ))}
        </ul>
      )}
      <div className="program-card-footer">
        <Link to="/programs" className="btn-link">
          Learn More <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
