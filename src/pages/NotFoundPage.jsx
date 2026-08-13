import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page-placeholder">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist or has been moved.</p>
      <div className="mt-6">
        <Link to="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

