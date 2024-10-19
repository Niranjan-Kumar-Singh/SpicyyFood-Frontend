import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import '../styles/Account.css';

function Account() {
  const [accountInfo, setAccountInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '',
    phone: '9876543210',
    address: '123, Main Street, City, Country'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    alert('Account information updated successfully!');
  };

  return (
    <div className="account-page-wrapper">
      <Container className="account-page mt-5 pt-5">
        <h1 className="text-center mb-4">My Account</h1>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="account-card p-4">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={accountInfo.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={accountInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={accountInfo.password}
                      onChange={handleInputChange}
                      placeholder="Enter new password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={accountInfo.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      value={accountInfo.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" className="update-btn">
                      Update Information
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Account;
