import React from 'react';

export default function SectionTitle({ title, subtitle, badge, badgeVariant, centered = true }) {
  const badgeClass = badgeVariant ? `section-badge badge-${badgeVariant}` : 'section-badge';
  
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      {badge && <span className={badgeClass}>{badge}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
