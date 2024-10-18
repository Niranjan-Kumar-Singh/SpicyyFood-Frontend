import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCreditCard, FaPlusCircle } from 'react-icons/fa';
import '../styles/PaymentMethods.css';

function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([
    { type: 'Credit Card', lastFour: '1234', expiry: '12/25', cardHolder: 'John Doe' },
    { type: 'Debit Card', lastFour: '5678', expiry: '11/24', cardHolder: 'Jane Doe' }
  ]);

  const handleAddPaymentMethod = () => {
    // Logic to add new payment method
    alert('Add Payment Method functionality');
  };

  return (
    <div className="payment-page-wrapper">
      <Container className="payment-methods-page mt-5 pt-5">
        <h1 className="text-center mb-4">Payment Methods</h1>

        <div className="payment-methods-box">
          <Row>
            {paymentMethods.map((method, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className={`payment-card ${method.type.toLowerCase().replace(' ', '-')}`}>
                  <Card.Body>
                    <Card.Title>
                      <FaCreditCard className="me-2" /> {method.type}
                    </Card.Title>
                    <Card.Text className="card-details">
                      <span className="card-number">•••• •••• •••• {method.lastFour}</span>
                      <br />
                      <span className="card-expiry">Expiry: {method.expiry}</span>
                      <br />
                      <span className="card-holder">Card Holder: {method.cardHolder}</span>
                    </Card.Text>
                    <Button variant="danger" className="remove-btn">
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="text-center mt-4">
          <Button onClick={handleAddPaymentMethod} className="add-payment-btn">
            <FaPlusCircle className="me-2" /> Add Payment Method
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default PaymentMethods;
