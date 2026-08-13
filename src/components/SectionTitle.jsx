import React from 'react';

export default function SectionTitle({ title, subtitle, badge, centered = true }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
