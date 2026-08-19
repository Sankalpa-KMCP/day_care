import React from 'react';

export default function TeamCard({ member }) {
  return (
    <article className="guide-card">
      <div className="guide-photo"><img src={member.image} alt={member.imageAlt} width="900" height="1200" /><span className="photo-note">Illustrative profile</span></div>
      <div className="guide-copy"><p className="eyebrow">{member.role}</p><h3>{member.name}</h3><p>{member.bio}</p><ul>{member.focusAreas.map((area) => <li key={area}>{area}</li>)}</ul><small>{member.credential}</small></div>
    </article>
  );
}
