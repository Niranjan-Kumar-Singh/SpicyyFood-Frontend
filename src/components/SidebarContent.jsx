import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaShoppingCart, FaUserAlt, FaListAlt, FaInfoCircle, FaEnvelope,
  FaHandsHelping, FaFileAlt, FaSignOutAlt, FaCreditCard, FaCog, FaHeart
} from 'react-icons/fa';
import LogoutModal from './LogOut'; // Import the logout modal
import { useUser } from '../context/UserContext'; // Import useUser to access handleLogout

function SidebarContent({ handleClose, isLoggedIn, onLogout, isAdmin }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { handleLogout } = useUser(); // Get handleLogout from context
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Show modal when clicking logout
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false); // Close modal after cancel or logout
  };

  const handleConfirmLogout = () => {
    handleLogout(); // Clear session in context
    setShowLogoutModal(false); // Close modal
    handleClose(); // Close sidebar
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <>
      <Nav className="flex-column sidebar-nav">
        <Nav.Link as={Link} to="/#categories" onClick={handleClose} className="nav-item">
          <FaListAlt className="me-2" /> All Categories
        </Nav.Link>
        <Nav.Link as={Link} to="/orders" onClick={handleClose} className="nav-item">
          <FaShoppingCart className="me-2" /> My Orders
        </Nav.Link>
        <Nav.Link as={Link} to="/cart" onClick={handleClose} className="nav-item">
          <FaShoppingCart className="me-2" /> My Cart
        </Nav.Link>
        <Nav.Link as={Link} to="/account" onClick={handleClose} className="nav-item">
          <FaUserAlt className="me-2" /> My Account
        </Nav.Link>

        {isAdmin && (
          <>
            <div className="sidebar-divider"></div>
            <Nav.Link as={Link} to="/manage-orders" onClick={handleClose} className="nav-item">
              <FaShoppingCart className="me-2" /> Manage Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/manage-users" onClick={handleClose} className="nav-item">
              <FaUserAlt className="me-2" /> Manage Users
            </Nav.Link>
          </>
        )}

        <div className="sidebar-divider"></div>

        <Nav.Link as={Link} to="/favorites" onClick={handleClose} className="nav-item">
          <FaHeart className="me-2" /> My Favorites
        </Nav.Link>
        <Nav.Link as={Link} to="/payment" onClick={handleClose} className="nav-item">
          <FaCreditCard className="me-2" /> Payment Methods
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" onClick={handleClose} className="nav-item">
          <FaCog className="me-2" /> Settings
        </Nav.Link>

        <div className="sidebar-divider"></div>

        <Nav.Link as={Link} to="/about" onClick={handleClose} className="nav-item">
          <FaInfoCircle className="me-2" /> About
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" onClick={handleClose} className="nav-item">
          <FaEnvelope className="me-2" /> Contact
        </Nav.Link>
        <Nav.Link as={Link} to="/help" onClick={handleClose} className="nav-item">
          <FaHandsHelping className="me-2" /> Help Center
        </Nav.Link>
        <Nav.Link as={Link} to="/legal" onClick={handleClose} className="nav-item">
          <FaFileAlt className="me-2" /> Legal
        </Nav.Link>

        {/* Show either Login or Logout based on isLoggedIn */}
        {isLoggedIn ? (
          <Nav.Link onClick={handleLogoutClick} className="nav-item logout-link">
            <FaSignOutAlt className="me-2" /> Logout
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/login" onClick={handleClose} className="nav-item">
            <FaSignOutAlt className="me-2" /> Login
          </Nav.Link>
        )}
      </Nav>

      {/* Render the Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          show={showLogoutModal}
          handleClose={handleCloseModal}
          handleConfirm={handleConfirmLogout} // Pass confirm logout handler
        />
      )}
    </>
  );
}

export default SidebarContent;
