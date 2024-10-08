// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import '../styles/Header.css'

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          {/* Hamburger Icon */}
          <Button variant="light" onClick={toggleSidebar} className="me-2">
            <FaBars size={20} />
          </Button>

          {/* Brand */}
          <Navbar.Brand as={Link} to="/">Restaurant</Navbar.Brand>

          {/* Search Box */}
          <Form className="d-flex mx-auto" style={{ maxWidth: '500px', width: '100%' }}>
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
            <Nav.Link href="#notifications" className="mb-1" style={{ marginBottom: '2px' }}>
              <FaBell size={20} />
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link d-flex align-items-center">
              <FaUserCircle size={24} className="me-1" />
              <span className='fw-bold'>Username</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
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
