// src/components/HeroSection.jsx

import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/HeroSection.css'; // Import the CSS for styling

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center">
        <h1>Welcome to Our Restaurant</h1>
        <p>Delicious food, cozy ambiance, and exceptional service await you.</p>
        <Button href="#menu" className="btn-cta">Explore Our Menu</Button>
      </div>
    </section>
  );
}

export default HeroSection;
