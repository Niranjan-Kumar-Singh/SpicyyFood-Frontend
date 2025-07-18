import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/slices/cartSlice";
import {
  FaBars,
  FaBell,
  FaUserCircle,
  FaShoppingCart,
  FaSearch,
  FaCheckCircle,
  FaExclamationCircle,
  FaHeart,
  FaCog,
} from "react-icons/fa";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Dropdown,
  Badge,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useUser } from "../context/UserContext"; // Ensure this path is correct
import "../styles/Header.css";

function Header() {
  const { user, loading } = useUser(); // Get user from context
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      message: "Your order #123 has been delivered.",
      read: false,
    },
    {
      id: 2,
      type: "promo",
      message: "20% off on desserts today!",
      read: false,
    },
    {
      id: 3,
      type: "update",
      message: "New menu items available.",
      read: false,
    },
  ]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCart()); // Fetch cart again when user logs in
    }
  }, [user, dispatch]); // depend on `user`

  const cart = useSelector((state) => state.cart || { items: [] });
  const cartItemCount = Array.isArray(cart.items)
    ? cart.items.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case "info":
        return (
          <FaCheckCircle className="notification-icon text-primary me-2" />
        );
      case "promo":
        return (
          <FaExclamationCircle className="notification-icon text-warning me-2" />
        );
      case "update":
        return (
          <FaExclamationCircle className="notification-icon text-success me-2" />
        );
      default:
        return <FaBell className="notification-icon me-2" />;
    }
  };

  const handleUserClick = () => {
    navigate(user ? "/account" : "/login");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          <Button
            variant="light"
            onClick={toggleSidebar}
            className="me-2"
            aria-label="Open Menu"
          >
            <FaBars size={20} />
          </Button>

          <Navbar.Brand as={Link} to="/">
            Spicyy Food
          </Navbar.Brand>

          <Form className="d-flex mx-auto search-form d-none d-lg-flex">
            <FormControl
              type="search"
              placeholder="Search for dishes..."
              className="me-2"
              aria-label="Search"
              style={{ width: "350px" }}
            />
            <Button
              variant="light"
              className="search-icon-btn"
              aria-label="Search Button"
            >
              <FaSearch size={20} />
            </Button>
          </Form>

          <Nav className="d-flex flex-row ms-auto align-items-center navbar-icons">
            <Dropdown align="end" className="me-3">
              <Dropdown.Toggle as="div" className="notification-toggle">
                <FaBell size={25} />
                {unreadCount > 0 && (
                  <Badge bg="danger" pill className="notification-badge">
                    {unreadCount}
                  </Badge>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="notification-menu">
                <div className="d-flex justify-content-between align-items-center px-3 py-2">
                  <span className="fw-bold">Notifications</span>
                  {unreadCount > 0 && (
                    <Button
                      variant="link"
                      className="mark-all-read-btn"
                      onClick={() =>
                        setNotifications(
                          notifications.map((notification) => ({
                            ...notification,
                            read: true,
                          }))
                        )
                      }
                    >
                      Mark all as read
                    </Button>
                  )}
                </div>
                <Dropdown.Divider />
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <Dropdown.Item
                      key={notification.id}
                      className={`notification-item ${
                        notification.read ? "read" : "unread"
                      }`}
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      {getNotificationIcon(notification.type)}
                      <div className="notification-text">
                        {notification.message}
                      </div>
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item className="notification-item text-center">
                    No notifications
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link onClick={handleUserClick} className="me-3 username-link">
              <FaUserCircle size={24} className="me-1" />
              <span className="fw-bold">
                {loading ? "Loading..." : user?.name || "Login"}
              </span>
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/cart"
              className="position-relative me-3"
            >
              <FaShoppingCart size={22} />
              {cartItemCount > 0 && (
                <Badge bg="success" pill className="cart-badge">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/favorites"
              className="me-3 favorite-link"
            >
              <FaHeart size={22} className="me-1" />
              <span className="fw-bold">Favorites</span>
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/settings"
              className="me-3 settings-link"
            >
              <FaCog size={22} className="me-1" />
              <span className="fw-bold">Settings</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Sidebar show={showSidebar} handleClose={toggleSidebar} />
    </>
  );
}

export default Header;
