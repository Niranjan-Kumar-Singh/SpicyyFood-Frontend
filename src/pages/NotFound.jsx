import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">We can't seem to find the page you're looking for. How about heading back to the homepage?</p>
      <Link to="/" className="not-found-btn">Take Me Home</Link>
    </div>
  );
}

export default NotFound;