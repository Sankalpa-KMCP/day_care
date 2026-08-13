import React from 'react';

export default function ImagePlaceholder({ title, aspect = '16/9', icon = '🎨', className = '' }) {
  return (
    <div
      className={`image-placeholder-surface ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`Placeholder illustration for ${title}`}
    >
      <div className="placeholder-content">
        <span className="placeholder-icon" aria-hidden="true">{icon}</span>
        <span className="placeholder-title">{title}</span>
        <span className="placeholder-tag">Daycare Environment Feature</span>
      </div>
    </div>
  );
}
