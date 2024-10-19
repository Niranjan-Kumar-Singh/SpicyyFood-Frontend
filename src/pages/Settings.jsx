import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Settings.css';

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('INR');
  
  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Logic to save settings goes here
    alert('Settings saved successfully!');
  };

  return (
    <Container className="settings-page mt-5 pt-5">
      <h1 className="text-center mb-4">Settings</h1>

      <Form onSubmit={handleSaveSettings}>
        <Row>
          {/* Account Section */}
          <Col md={6}>
            <h3>Account Settings</h3>
            <Form.Group controlId="changePassword">
              <Form.Label>Change Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>
            
            <Form.Group controlId="twoFactorAuth">
              <Form.Check 
                type="checkbox" 
                label="Enable Two-Factor Authentication" 
              />
            </Form.Group>
          </Col>

          {/* Privacy Section */}
          <Col md={6}>
            <h3>Privacy Settings</h3>
            <Form.Group controlId="profileVisibility">
              <Form.Label>Profile Visibility</Form.Label>
              <Form.Control as="select" value={language} onChange={e => setLanguage(e.target.value)}>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="locationSharing">
              <Form.Check 
                type="checkbox" 
                label="Enable Location Sharing for Recommendations" 
              />
            </Form.Group>
            
            <Form.Group controlId="dataSharing">
              <Form.Check 
                type="checkbox" 
                label="Allow Data Sharing with Third-Party Services" 
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          {/* Notification Section */}
          <Col md={6}>
            <h3>Notification Settings</h3>
            <Form.Group controlId="emailNotifications">
              <Form.Check 
                type="checkbox" 
                label="Order Updates (Email)" 
                checked={emailNotifications} 
                onChange={() => setEmailNotifications(!emailNotifications)} 
              />
            </Form.Group>
            
            <Form.Group controlId="smsNotifications">
              <Form.Check 
                type="checkbox" 
                label="Promotions & Offers (SMS)" 
                checked={smsNotifications} 
                onChange={() => setSmsNotifications(!smsNotifications)} 
              />
            </Form.Group>
            
            <Form.Group controlId="pushNotifications">
              <Form.Check 
                type="checkbox" 
                label="Push Notifications for App" 
                checked={pushNotifications} 
                onChange={() => setPushNotifications(!pushNotifications)} 
              />
            </Form.Group>
          </Col>

          {/* Payment Preferences */}
          <Col md={6}>
            <h3>Payment Preferences</h3>
            <Form.Group controlId="defaultPaymentMethod">
              <Form.Label>Default Payment Method</Form.Label>
              <Form.Control as="select">
                <option value="card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="wallet">Wallet</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="autoPayments">
              <Form.Check 
                type="checkbox" 
                label="Enable Automatic Payments for Subscriptions" 
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          {/* App Settings */}
          <Col md={6}>
            <h3>App Settings</h3>
            <Form.Group controlId="darkMode">
              <Form.Check 
                type="checkbox" 
                label="Enable Dark Mode" 
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)} 
              />
            </Form.Group>

            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control as="select" value={language} onChange={e => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="hi">Hindi</option>
                {/* Add more language options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Regional Settings */}
          <Col md={6}>
            <h3>Regional Settings</h3>
            <Form.Group controlId="currency">
              <Form.Label>Preferred Currency</Form.Label>
              <Form.Control as="select" value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                {/* Add more currency options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button type="submit" className="save-settings-btn">Save Changes</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Settings;

