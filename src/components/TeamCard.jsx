import React from 'react';

export default function TeamCard({ member }) {
  return (
    <article className={`guide-card guide-card-${member.id}`} data-profile={member.id} data-illustrative="true" aria-labelledby={`${member.id}-name`}>
      <div className="guide-photo irregular-photo-frame"><img src={member.image} alt={member.imageAlt} width="900" height="1200" loading="lazy" decoding="async" /><span className="photo-note">Illustrative profile</span></div>
      <div className="guide-copy"><p className="eyebrow">{member.role}</p><h3 id={`${member.id}-name`}>{member.name}</h3><p>{member.bio}</p><ul className="guide-focus-list" aria-label={`${member.name} focus areas`}>{member.focusAreas.map((area) => <li key={area}>{area}</li>)}</ul><small className="guide-credential">{member.credential}</small></div>
    </article>
  );
}
