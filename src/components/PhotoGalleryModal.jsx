import React, { useEffect } from 'react';

export default function PhotoGalleryModal({ activeImage, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activeImage) return null;

  return (
    <div className="gallery-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox preview">
      <div className="gallery-modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="gallery-modal-close" onClick={onClose} aria-label="Close preview">
          ✕
        </button>
        <img
          src={activeImage.src}
          alt={activeImage.alt || activeImage.title}
          className="gallery-modal-img"
        />
        <div className="gallery-modal-caption">
          <h3>{activeImage.title}</h3>
          {activeImage.desc && <p>{activeImage.desc}</p>}
        </div>
      </div>
    </div>
  );
}
