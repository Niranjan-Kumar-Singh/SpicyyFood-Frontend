// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaUserCircle, FaShoppingCart, FaSearch, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown, Badge } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', message: "Your order #123 has been delivered.", read: false },
    { id: 2, type: 'promo', message: "20% off on desserts today!", read: false },
    { id: 3, type: 'update', message: "New menu items available.", read: false }
  ]);

  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  // Count of unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Function to get icon based on notification type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'info':
        return <FaCheckCircle className="text-primary me-2" />;
      case 'promo':
        return <FaExclamationCircle className="text-warning me-2" />;
      case 'update':
        return <FaExclamationCircle className="text-success me-2" />;
      default:
        return <FaBell className="me-2" />;
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          {/* Hamburger Icon */}
          <Button variant="light" onClick={toggleSidebar} className="me-2">
            <FaBars size={20} />
          </Button>

          {/* Brand */}
          <Navbar.Brand as={Link} to="/">Spicy Food</Navbar.Brand>

          {/* Search Box */}
          <Form className="d-flex mx-auto search-form" style={{ maxWidth: '500px', width: '100%' }}>
            <FormControl
              type="search"
              placeholder="Search for dishes..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" className="search-icon-btn">
              <FaSearch size={20} />
            </Button>
          </Form>

          {/* Notification and Profile Icons */}
          <Nav className="ms-auto align-items-center">
            {/* Notification Dropdown */}
            <Dropdown align="end" className="me-3">
              <Dropdown.Toggle as="div" className="notification-toggle">
                <FaBell size={25} />
                {unreadCount > 0 && (
                  <Badge bg="danger" className="notification-badge">
                    {unreadCount}
                  </Badge>
                )}
              </Dropdown.Toggle>


              <Dropdown.Menu className="notification-menu">
                <div className="d-flex justify-content-between align-items-center px-3 py-2">
                  <span className="fw-bold">Notifications</span>
                  {unreadCount > 0 && (
                    <Button variant="link" className="mark-all-read-btn" onClick={handleMarkAllAsRead}>
                      Mark all as read
                    </Button>
                  )}
                </div>
                <Dropdown.Divider />
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <Dropdown.Item
                      key={notification.id}
                      className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      {getNotificationIcon(notification.type)}
                      {notification.message}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item className="notification-item text-center">No notifications</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            {/* Profile Icon */}
            <Nav.Link as={Link} to="/profile" className="nav-link d-flex align-items-center me-3">
              <FaUserCircle size={24} className="me-1" />
              <span className='fw-bold'>Username</span>
            </Nav.Link>

            {/* Cart Icon */}
            <Nav.Link as={Link} to="/cart" className="nav-link d-flex align-items-center">
              <FaShoppingCart size={22} className="me-1" />
              <span className='fw-bold'>{cartItemCount}</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Sidebar Component */}
      <Sidebar show={showSidebar} handleClose={toggleSidebar} />
    </>
  );
}

export default Header;
