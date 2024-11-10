import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import SidebarContent from './SidebarContent';
import { FaUserCircle } from 'react-icons/fa';
import { useUser } from '../context/UserContext';
import '../styles/Sidebar.css';

function Sidebar({ show, handleClose, onLogout }) {
  const { user } = useUser(); // Get user from context
  const isLoggedIn = Boolean(user); // Determine if user is logged in

  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="mobile-offcanvas">
      <Offcanvas.Header closeButton className="sidebar-header">
        <Offcanvas.Title className="sidebar-title">
          <FaUserCircle size={30} className="me-2 user-icon" />
          <span>{isLoggedIn && user?.name ? user.name : 'Guest'}</span> {/* Safely access user name */}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="sidebar-body">
        <SidebarContent 
          handleClose={handleClose} 
          isLoggedIn={isLoggedIn} 
          onLogout={onLogout} 
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;