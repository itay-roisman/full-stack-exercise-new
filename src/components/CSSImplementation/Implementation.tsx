import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export function Implementation() {
  return (
    <div className="implementation min-h-screen">
      <div className="implementation-header">
        <Link to="/css-challenge" className="back-link">
          ← Back to Instructions
        </Link>
      </div>
      {/* Implement your solution here */}
    </div>
  );
}