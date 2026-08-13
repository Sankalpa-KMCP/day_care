import React from 'react';

export default function TestimonialCard({ testimonial }) {
  const { parentName, role, childAge, quote, rating, isDemo } = testimonial;

  return (
    <div className="testimonial-card">
      {isDemo && (
        <div className="demo-badge-tag">
          <span>Demo Feedback</span>
        </div>
      )}
      <div className="testimonial-rating" aria-label={`Rated ${rating} out of 5 stars`}>
        {'★'.repeat(rating)}
      </div>
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      <div className="testimonial-author">
        <div className="author-avatar" aria-hidden="true">
          {parentName.charAt(0)}
        </div>
        <div className="author-info">
          <span className="author-name">{parentName}</span>
          <span className="author-meta">{role} ({childAge})</span>
        </div>
      </div>
    </div>
  );
}
