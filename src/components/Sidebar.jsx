// src/components/Sidebar.jsx

import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import SidebarContent from './SidebarContent';
import { FaUserCircle } from 'react-icons/fa';

function Sidebar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="mobile-offcanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <FaUserCircle size={30} className="me-2" />
          John Doe
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SidebarContent handleClose={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
