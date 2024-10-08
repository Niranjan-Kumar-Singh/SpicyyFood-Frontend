// src/components/Footer.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <Container>
        <span className="text-muted">&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</span>
      </Container>
    </footer>
  );
}

export default Footer;
