import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt, FaLock, FaExclamationTriangle, FaEnvelope } from 'react-icons/fa';
import '../styles/Legal.css'; // Add styles

function Legal() {
  return (
    <Container className="legal-page mt-5">
      <h1 className="text-center mb-4">Legal Information</h1>
      
      <Row className="mb-">
        <Col md={4}>
          <Card className="legal-card">
            <Card.Body>
              <FaShieldAlt className="legal-icon" />
              <Card.Title>Terms of Service</Card.Title>
              <Card.Text>
                Welcome! By using our services, you agree to comply with our terms. 
                Please read carefully to understand your rights and responsibilities.
              </Card.Text>
              <Card.Link href="#terms">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="legal-card">
            <Card.Body>
              <FaLock className="legal-icon" />
              <Card.Title>Privacy Policy</Card.Title>
              <Card.Text>
                Your privacy is paramount to us. We are committed to safeguarding your personal data.
              </Card.Text>
              <Card.Link href="#privacy">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="legal-card">
            <Card.Body>
              <FaExclamationTriangle className="legal-icon" />
              <Card.Title>Disclaimer</Card.Title>
              <Card.Text>
                The information on our site is for general informational purposes only. 
                Read our disclaimer for more details.
              </Card.Text>
              <Card.Link href="#disclaimer">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <section id="terms" className="terms">
        <h2>Terms of Service</h2>
        <p>
          Welcome to our website! By accessing and using our services, you agree to comply with and be bound by the following terms and conditions of use. 
          If you do not agree with these terms, please do not use our services.
        </p>
        <p>[Your terms of service content goes here.]</p>
      </section>

      <section id="privacy" className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. We are committed to protecting your personal information and your right to privacy. 
          If you have any questions or concerns about our policy, please contact us.
        </p>
        <p>[Your privacy policy content goes here.]</p>
      </section>

      <section id="disclaimer" className="disclaimer">
        <h2>Disclaimer</h2>
        <p>
          The information provided by our website is for general informational purposes only. 
          We make no representation or warranty of any kind regarding the accuracy or completeness of any information on the site.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our legal terms, please contact us at:
          <br />
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </section>
    </Container>
  );
}

export default Legal;
