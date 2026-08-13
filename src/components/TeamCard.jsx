import React from 'react';

/**
 * TeamCard component
 * Displays a team member's fictional profile card with safe prototype image placeholders.
 */
export default function TeamCard({ member }) {
  if (!member) return null;

  const {
    name,
    role,
    bio,
    focusAreas = [],
    initials = 'TS',
    category = 'Staff'
  } = member;

  return (
    <article className="team-card">
      <div className="team-card-header">
        <div 
          className="team-avatar-placeholder" 
          role="img" 
          aria-label={`Visual portrait placeholder for ${name}`}
        >
          <div className="team-avatar-circle">
            <span className="team-avatar-initials" aria-hidden="true">{initials}</span>
          </div>
          <span className="team-avatar-tag" aria-hidden="true">Placeholder Portrait</span>
        </div>
        <div className="team-badge-row">
          <span className="team-category-badge">{category}</span>
          <span className="team-demo-badge">Demo Staff</span>
        </div>
      </div>

      <div className="team-card-body">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <p className="team-member-bio">{bio}</p>

        {focusAreas.length > 0 && (
          <div className="team-focus-section">
            <h4 className="team-focus-label">Key Focus Areas</h4>
            <ul className="team-focus-list">
              {focusAreas.map((focus, index) => (
                <li key={index} className="team-focus-item">
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
