import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { FaQuestionCircle, FaEnvelope, FaPhone, } from 'react-icons/fa';
import '../styles/HelpCenter.css'; // Add styles

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container className="help-center mt-5 p-5">
      <h1 className="text-center mb-4">Help Center</h1>

      <Form className="search-bar mb-4">
        <Form.Control
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </Form>

      <h2 className="mb-3">Frequently Asked Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <FaQuestionCircle className="me-2" /> What should I do if I forgot my password?
          </Accordion.Header>
          <Accordion.Body>
            If you forgot your password, click on the "Forgot Password" link on the login page. Follow the instructions to reset your password.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FaQuestionCircle className="me-2" /> How can I track my order?
          </Accordion.Header>
          <Accordion.Body>
            You can track your order by logging into your account and navigating to the "My Orders" section. Here you will find the tracking details.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <FaQuestionCircle className="me-2" /> What is your return policy?
          </Accordion.Header>
          <Accordion.Body>
            Our return policy allows you to return items within 30 days of receipt. Please visit our Returns & Exchanges page for more information.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <FaQuestionCircle className="me-2" /> How can I contact customer support?
          </Accordion.Header>
          <Accordion.Body>
            You can contact our customer support through the "Contact Us" page, or you can reach us via email at <a href="mailto:support@example.com">support@example.com</a>.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h2 className="mt-4">Need Further Assistance?</h2>
      <div className="contact-info">
        <p>If you need further assistance, feel free to reach out to us:</p>
        <p>
          <FaEnvelope className="me-2" />
          Email: <a href="mailto:support@example.com">support@example.com</a>
        </p>
        <p>
          <FaPhone className="me-2" />
          Phone: (+91) 12345-67890
        </p>
      </div>
    </Container>
  );
}

export default HelpCenter;
