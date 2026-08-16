import React from 'react';

export default function TeamCard({ member }) {
  if (!member) return null;

  const {
    name,
    role,
    bio,
    focusAreas = [],
    initials = 'EC',
    category = 'Staff',
    credential = 'State Certified Educator',
    image
  } = member;

  return (
    <article className="team-card">
      <div className="team-card-header">
        {image ? (
          <div className="team-avatar-image-container">
            <img src={image} alt={`Portrait of ${name}`} className="team-avatar-img" />
          </div>
        ) : (
          <div 
            className="team-avatar-placeholder" 
            role="img" 
            aria-label={`Visual portrait placeholder for ${name}`}
          >
            <div className="team-avatar-circle">
              <span className="team-avatar-initials" aria-hidden="true">{initials}</span>
            </div>
          </div>
        )}
        <div className="team-badge-row">
          <span className="team-category-badge">{category}</span>
          <span className="team-credential-badge">{credential}</span>
        </div>
      </div>

      <div className="team-card-body">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <p className="team-member-bio">{bio}</p>

        {focusAreas.length > 0 && (
          <div className="team-focus-section">
            <h4 className="team-focus-label">Specializations</h4>
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
