import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for email subscription can be added here
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer bg-dark text-light text-center py-4 mt-5">
      <Container className="footer-container">
        <div className="footer-column">
          <h4>Address</h4>
          <p>123 Main Street</p>
          <p>Your City, ST 12345</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h4>About & Contact</h4>
          <a href="#about" className="link">About Us</a>
          <a href="#contact" className="link">Contact</a>
          <a href="/#categories" className="link">Menu</a>
        </div>
        <div className="footer-column">
          <h4>Social & Subscribe</h4>
          <div className="social-icons">
            <FaFacebookF className="icon facebook" />
            <FaInstagram className="icon instagram" />
            <FaTwitter className="icon twitter" />
          </div>
          <Form inline onSubmit={handleSubmit} className="newsletter-form">
            <Form.Control
              type="email"
              placeholder="Subscribe to our newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <Button type="submit" className="subscribe-btn">Subscribe</Button>
          </Form>
        </div>
      </Container>
      <div className="footer-bottom">
        <span className="text-muted">&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
