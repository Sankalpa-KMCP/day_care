import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page-placeholder storybook-404 not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-illustration" aria-hidden="true">
        <svg className="not-found-path" viewBox="0 0 560 250" focusable="false">
          <path className="path-line" d="M-18 219c95-4 112-91 210-80 79 9 79 77 158 55 71-20 85-109 225-118" />
          <path className="path-leaf" d="M127 157c-36-42-77-33-94-5 37 14 67 15 94 5Zm166 43c-23-45-63-56-91-34 30 25 58 37 91 34Zm116-50c10-49 47-70 82-58-19 37-45 57-82 58Z" />
          <circle cx="192" cy="139" r="8" />
          <circle cx="350" cy="194" r="8" />
        </svg>
      </div>
      <div className="not-found-copy">
        <p className="kicker">A path between the pages</p>
        <p className="not-found-code" aria-label="Error 404">404</p>
        <h1 id="not-found-title">This little trail ends here.</h1>
        <p>The page may have moved, but there is plenty more to discover back at The Little Grove.</p>
        <Link to="/" className="btn btn-primary button-solid">
          Return to the grove <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
