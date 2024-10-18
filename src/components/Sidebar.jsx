import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import SidebarContent from './SidebarContent';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Sidebar.css'

function Sidebar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="mobile-offcanvas">
      <Offcanvas.Header closeButton className="sidebar-header">
        <Offcanvas.Title className="sidebar-title">
          <FaUserCircle size={30} className="me-2 user-icon" />
          <span>John Doe</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="sidebar-body">
        <SidebarContent handleClose={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;