import React, { useEffect, useRef } from 'react';

export default function PhotoGalleryModal({ activeImage, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeImage) return undefined;
    const previousFocus = document.activeElement;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [activeImage, onClose]);

  if (!activeImage) return null;

  return (
    <div className="gallery-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox preview">
      <div className="gallery-modal-container" onClick={(e) => e.stopPropagation()}>
        <button ref={closeButtonRef} type="button" className="gallery-modal-close" onClick={onClose} aria-label="Close preview">
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
