import React, { useState } from 'react';

export default function ImagePlaceholder({
  src,
  alt,
  title,
  aspect = '4/3',
  tag = 'Campus Space',
  className = ''
}) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <div
        className={`image-card-wrapper ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <img
          src={src}
          alt={alt || title || 'Daycare campus environment'}
          className="image-card-img"
          onError={() => setHasError(true)}
        />
        {tag && <span className="image-card-badge">{tag}</span>}
      </div>
    );
  }

  return (
    <div
      className={`image-placeholder-surface ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={alt || `Illustration for ${title}`}
    >
      <div className="placeholder-content">
        <svg className="placeholder-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        {title && <span className="placeholder-title">{title}</span>}
        {tag && <span className="placeholder-tag">{tag}</span>}
      </div>
    </div>
  );
}
