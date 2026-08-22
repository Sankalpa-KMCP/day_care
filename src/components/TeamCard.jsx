import React from 'react';

export default function TeamCard({ member }) {


  return (
    <article
      className={`guide-card guide-card-${member.id}`}
      data-profile={member.id}
      data-illustrative="true"
      aria-labelledby={`${member.id}-name`}
    >
      <div className="guide-photo-wrapper">
        <img
          src={member.image}
          alt={member.imageAlt}
          className="guide-photo-img"
          loading="lazy"
          decoding="async"
        />
        <div className="guide-photo-badges">
          <span className="photo-note">Illustrative Profile</span>
          {member.room && <span className="room-badge">{member.room}</span>}
        </div>
      </div>

      <div className="guide-copy">
        <p className="eyebrow">{member.role}</p>
        <h3 id={`${member.id}-name`}>{member.name}</h3>
        
        {member.credential && (
          <p className="guide-credential">{member.credential}</p>
        )}

        <p className="guide-bio-text">
          {member.bio}
        </p>

        {member.philosophyQuote && (
          <blockquote className="guide-philosophy-quote">
            {member.philosophyQuote}
          </blockquote>
        )}

        <div className="guide-focus-wrap">
          <span className="focus-label">Core Specializations:</span>
          <ul className="guide-focus-list" aria-label={`${member.name} focus areas`}>
            {member.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
