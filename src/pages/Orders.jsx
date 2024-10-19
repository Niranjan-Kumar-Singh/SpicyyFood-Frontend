import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Orders.css'; // Link to the CSS file for styling

function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      items: ['BBQ Chicken Pizza', 'Chicken Kebab Burger'],
      total: 550,
      date: '2024-10-10',
      status: 'Delivered',
    },
    {
      id: 2,
      items: ['Tandoori Chicken', 'Chicken Wrap'],
      total: 400,
      date: '2024-10-12',
      status: 'In Progress',
    },
    {
      id: 3,
      items: ['Spicy Paneer Pizza'],
      total: 250,
      date: '2024-10-15',
      status: 'Cancelled',
    },
    {
      id: 4,
      items: ['Cheese Burst Pizza', 'Cold Coffee'],
      total: 300,
      date: '2024-09-22',
      status: 'Delivered',
    },
    {
      id: 5,
      items: ['Veg Biryani', 'Raita'],
      total: 450,
      date: '2024-09-15',
      status: 'Delivered',
    },
  ]);

  const reorderAlert = (id) => {
    alert(`Reordering Order #${id}`);
  };

  return (
    <div className="orders-page-wrapper mt-5 pt-5">
      <Container className="orders-page">
        <h1 className="text-center mb-4">Your Orders</h1>
        <Row className="order-items">
          {orders.map((order) => (
            <Col key={order.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="order-item-card">
                <Card.Body>
                  <Card.Title>Order #{order.id}</Card.Title>
                  <Card.Text>
                    <strong>Date:</strong> {order.date}
                    <br />
                    <strong>Items:</strong> <span className='order-item-list'>{order.items.join(', ')}</span>
                    <br />
                    <strong>Total:</strong> ₹{order.total}
                    <br />
                    <strong>Status:</strong> {order.status}
                  </Card.Text>
                  <Button variant="primary" className="reorder-btn" onClick={() => reorderAlert(order.id)}>
                    Reorder
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OrdersPage;