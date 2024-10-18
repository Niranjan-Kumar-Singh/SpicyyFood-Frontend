import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/Settings.css'; // Add CSS styles for custom styling

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
    // Add logic to save settings here
  };

  return (
    <Container className="settings-page mt-5 p-5">
      <h1 className="text-center mb-4">Settings</h1>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Account Settings</Card.Title>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" defaultValue="John Doe" />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber" className="mt-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" defaultValue="+91 9876543210" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" defaultValue="john@example.com" />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter new password" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <Form>
                <Form.Check
                  type="switch"
                  id="email-notifications"
                  label="Email Notifications"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <Form.Check
                  type="switch"
                  id="sms-notifications"
                  label="SMS Notifications"
                  checked={smsNotifications}
                  onChange={(e) => setSmsNotifications(e.target.checked)}
                />
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Preferences</Card.Title>
              <Form>
                <Form.Check
                  type="switch"
                  id="dark-mode"
                  label="Enable Dark Mode"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
