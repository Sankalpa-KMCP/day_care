import React, { useEffect, useId, useRef } from 'react';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function inertBackgroundSiblings(dialog) {
  const changedElements = [];
  let activeBranch = dialog;

  while (activeBranch && activeBranch !== document.body) {
    const parent = activeBranch.parentElement;
    if (!parent) break;

    Array.from(parent.children).forEach((sibling) => {
      if (!(sibling instanceof HTMLElement) || sibling === activeBranch || sibling.contains(dialog)) return;

      changedElements.push({
        element: sibling,
        hadAttribute: sibling.hasAttribute('inert'),
        wasInert: sibling.inert,
      });
      sibling.inert = true;
    });

    activeBranch = parent;
  }

  return () => {
    changedElements.reverse().forEach(({ element, hadAttribute, wasInert }) => {
      element.inert = wasInert;
      if (hadAttribute) element.setAttribute('inert', '');
      else element.removeAttribute('inert');
    });
  };
}

export default function PhotoGalleryModal({ activeImage, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const titleId = useId();
  const descriptionId = useId();
  const isOpen = Boolean(activeImage);

  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const restoreBackground = inertBackgroundSiblings(dialogRef.current);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableItems = Array.from(dialogRef.current?.querySelectorAll(focusableSelector) ?? []);
      if (focusableItems.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstItem || !dialogRef.current?.contains(activeElement))) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && (activeElement === lastItem || !dialogRef.current?.contains(activeElement))) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      restoreBackground();
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen]);

  if (!activeImage) return null;

  return (
    <div className="gallery-modal-backdrop" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} className="gallery-modal-container" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={activeImage.desc ? descriptionId : undefined} tabIndex={-1}>
        <button ref={closeButtonRef} type="button" className="gallery-modal-close" onClick={onClose} aria-label="Close preview">
          ✕
        </button>
        <img
          src={activeImage.src}
          alt={activeImage.alt || activeImage.title}
          className="gallery-modal-img"
        />
        <div className="gallery-modal-caption">
          <h3 id={titleId}>{activeImage.title}</h3>
          {activeImage.desc && <p id={descriptionId}>{activeImage.desc}</p>}
        </div>
      </div>
    </div>
  );
}
