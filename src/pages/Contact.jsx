import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Icons added
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    console.log('Form submitted:', formData);
  };

  return (
    <Container fluid className="contact-container mt-5 pt-4">
      <h1 className="text-center mb-3">Get in Touch</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="contact-card shadow-lg p-5"> {/* Added 'shadow-lg' for a stronger shadow */}
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 submit-btn">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="contact-info-card shadow-lg p-2">
            <h4 className="text-center mb-4">Reach Us At</h4>
            <div className="contact-detail mb-3">
              <FaEnvelope className="icon me-2" /> <strong>Email:</strong> contact@spicyyfood.com
            </div>
            <div className="contact-detail mb-3">
              <FaPhoneAlt className="icon me-2" /> <strong>Phone:</strong> (123) 456-7890
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt className="icon me-2" /> <strong>Address:</strong> 123 Spicyy St, Flavor Town, FL 12345
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
