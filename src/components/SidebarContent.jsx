// src/components/SidebarContent.jsx

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SidebarContent({ handleClose }) {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/categories" onClick={handleClose}>
        All Categories
      </Nav.Link>
      <Nav.Link as={Link} to="/orders" onClick={handleClose}>
        My Orders
      </Nav.Link>
      <Nav.Link as={Link} to="/cart" onClick={handleClose}>
        My Cart
      </Nav.Link>
      <Nav.Link as={Link} to="/account" onClick={handleClose}>
        My Account
      </Nav.Link>
      <Nav.Link as={Link} to="/notifications" onClick={handleClose}>
        My Notifications
      </Nav.Link>
      <Nav.Link as={Link} to="/about" onClick={handleClose}>
        About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact" onClick={handleClose}>
        Contact
      </Nav.Link>
      <Nav.Link as={Link} to="/help" onClick={handleClose}>
        Help Center
      </Nav.Link>
      <Nav.Link as={Link} to="/legal" onClick={handleClose}>
        Legal
      </Nav.Link>
      <Nav.Link as={Link} to="/logout" onClick={handleClose}>
        Logout
      </Nav.Link>
    </Nav>
  );
}

export default SidebarContent;
