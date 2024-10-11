// src/components/Logo.jsx

import React from 'react';
import logo from '../assets/icons/logo.png'; // Ensure this path is correct

function Logo({ width = 50, height = 50 }) {
  return (
    <img
      src={logo}
      alt="Spicyy Food"
      width={width}
      height={height}
      style={{ objectFit: 'contain' }}
    />
  );
}

export default Logo;
