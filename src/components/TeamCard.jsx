import React from 'react';

export default function TeamCard({ member }) {
  if (!member) return null;

  const {
    name,
    role,
    bio,
    focusAreas = [],
    initials = 'EC',
    credential,
    image
  } = member;

  return (
    <article className="educator-card">
      <div className="educator-portrait-col">
        {image ? (
          <div className="educator-portrait-frame">
            <img src={image} alt={`Portrait of ${name}`} className="educator-portrait-img" />
          </div>
        ) : (
          <div 
            className="educator-avatar-placeholder" 
            role="img" 
            aria-label={`Portrait placeholder for ${name}`}
          >
            <span className="educator-avatar-initials" aria-hidden="true">{initials}</span>
          </div>
        )}
      </div>

      <div className="educator-body">
        <h3 className="educator-name">{name}</h3>
        <p className="educator-role">{role}</p>
        {credential && <p className="educator-credential">{credential}</p>}
        <p className="educator-bio">{bio}</p>

        {focusAreas.length > 0 && (
          <div className="educator-focus-row">
            <span className="educator-focus-title">Focus:</span>
            <span className="educator-focus-items">{focusAreas.join(' • ')}</span>
          </div>
        )}
      </div>
    </article>
  );
}
