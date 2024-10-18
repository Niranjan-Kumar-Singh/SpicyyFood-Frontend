import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
      <Container fluid className="footer-container"> {/* Use 'fluid' for full-width */}
        <div className="footer-column">
          <h4>Address</h4>
          <p>123 Salt Lake</p>
          <p>Kolkata, West Bengal 734001</p>
          <p>(+91) 12345-67890</p>
        </div>
        <div className="footer-column">
          <h4>About & Contact</h4>
          <Link to="/about" className="link">About Us</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/#categories" className="link">Menu</Link>
        </div>
        <div className="footer-column">
          <h4>Social & Subscribe</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/niranjan.singh.1419" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon facebook" />
            </a>
            <a href="https://www.instagram.com/niranjan._23/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://x.com/_Niranjan_Singh" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon twitter" />
            </a>
          </div>
          <Form onSubmit={handleSubmit} className="newsletter-form">
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
