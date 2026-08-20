import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, style, ...props }) {
  const nodeRef = useRef(null);
  const [observing, setObserving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    const motionQuery = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    const canEnhance = 'IntersectionObserver' in window && !motionQuery?.matches;
    const startsBelowFold = node.getBoundingClientRect().top >= window.innerHeight;

    if (!canEnhance || !startsBelowFold) return undefined;

    setObserving(true);
    setVisible(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    const handleMotionPreference = (event) => {
      if (!event.matches) return;
      observer.disconnect();
      setObserving(false);
      setVisible(true);
    };

    observer.observe(node);
    motionQuery?.addEventListener?.('change', handleMotionPreference);

    return () => {
      observer.disconnect();
      motionQuery?.removeEventListener?.('change', handleMotionPreference);
    };
  }, []);

  return (
    <Tag
      ref={nodeRef}
      className={`reveal-on-scroll ${observing ? 'is-observing' : ''} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
