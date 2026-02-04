import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/slices/cartSlice";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaUserCircle,
  FaShoppingCart,
  FaSearch,
  FaCheckCircle,
  FaExclamationCircle,
  FaHeart,
  FaCog,
  FaFire,
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
import axios from "axios";

function Header() {
  const { user, loading } = useUser(); // Get user from context
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchTimerRef = useRef(null);
  const searchBoxRef = useRef(null);
  const searchBoxMobileRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      const inDesktop =
        searchBoxRef.current && searchBoxRef.current.contains(e.target);
      const inMobile =
        searchBoxMobileRef.current &&
        searchBoxMobileRef.current.contains(e.target);
      if (!inDesktop && !inMobile) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const fetchSearchResults = async (query) => {
    if (!query || query.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      setShowSearchDropdown(false);
      return;
    }
    try {
      setIsSearching(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/items`
      );
      const items = Array.isArray(response.data) ? response.data : [];
      const normalizedQuery = query.toLowerCase();
      const filtered = items.filter((item) => {
        const name = item.name ? item.name.toLowerCase() : "";
        const desc = item.description ? item.description.toLowerCase() : "";
        return name.includes(normalizedQuery) || desc.includes(normalizedQuery);
      });
      setSearchResults(filtered.slice(0, 6));
      setShowSearchDropdown(true);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (searchTimerRef.current) {
      clearTimeout(searchTimerRef.current);
    }
    searchTimerRef.current = setTimeout(() => {
      fetchSearchResults(value);
    }, 250);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    setShowSearchDropdown(false);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleViewAllResults = () => {
    const query = searchQuery.trim();
    if (!query) return;
    setShowSearchDropdown(false);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          <Button
            variant="light"
            onClick={toggleSidebar}
            className={`hamburger-btn ${showSidebar ? "is-open" : ""}`}
            aria-label="Open Menu"
          >
            {showSidebar ? (
              <FaTimes size={20} className="hamburger-icon" />
            ) : (
              <FaBars size={20} className="hamburger-icon" />
            )}
          </Button>

          <Navbar.Brand as={Link} to="/">
            <span className="brand-logo">
              <FaFire className="brand-flame" />
              <span className="brand-text">Spicyy Food</span>
            </span>
          </Navbar.Brand>

          <Form
            className="d-flex mx-auto search-form d-none d-lg-flex"
            onSubmit={handleSearchSubmit}
            ref={searchBoxRef}
          >
            <FormControl
              type="search"
              placeholder="Search for dishes..."
              className="me-2"
              aria-label="Search"
              style={{ width: "350px" }}
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchResults.length && setShowSearchDropdown(true)}
            />
            <Button
              variant="light"
              className="search-icon-btn"
              aria-label="Search Button"
              type="submit"
            >
              <FaSearch size={20} />
            </Button>
            {showSearchDropdown && (
              <div className="search-dropdown">
                {isSearching ? (
                  <div className="search-dropdown-item muted">Searching...</div>
                ) : searchResults.length > 0 ? (
                  <>
                    {searchResults.map((item) => (
                      <button
                        key={item._id}
                        type="button"
                        className="search-dropdown-item"
                      onClick={() => {
                        setShowSearchDropdown(false);
                        const categoryId = item.categoryId?._id;
                        if (categoryId) {
                          navigate(`/category/${categoryId}`);
                        } else {
                          navigate(`/search?q=${encodeURIComponent(item.name || "")}`);
                        }
                      }}
                      >
                        <img
                        src={
                          item.image && item.image.startsWith("http")
                            ? item.image
                            : `${import.meta.env.VITE_API_BASE_URL}/${item.image}`
                        }
                          alt={item.name}
                          className="search-item-img"
                        />
                        <div className="search-item-info">
                          <div className="search-item-name">{item.name}</div>
                          <div className="search-item-desc">
                            {item.description || "No description available."}
                          </div>
                        </div>
                        <div className="search-item-price">
                          ₹{Number(item.price || 0).toFixed(2)}
                        </div>
                      </button>
                    ))}
                    <button
                      type="button"
                      className="search-dropdown-item view-all"
                      onClick={handleViewAllResults}
                    >
                      View all results
                    </button>
                  </>
                ) : (
                  <div className="search-dropdown-item muted">
                    No results found
                  </div>
                )}
              </div>
            )}
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
      <div className="mobile-search-bar d-lg-none">
        <Form
          className="search-form-mobile"
          onSubmit={handleSearchSubmit}
          ref={searchBoxMobileRef}
        >
          <FormControl
            type="search"
            placeholder="Search for dishes..."
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchResults.length && setShowSearchDropdown(true)}
          />
          <Button
            variant="light"
            className="search-icon-btn"
            aria-label="Search Button"
            type="submit"
          >
            <FaSearch size={18} />
          </Button>
          {showSearchDropdown && (
            <div className="search-dropdown mobile">
              {isSearching ? (
                <div className="search-dropdown-item muted">Searching...</div>
              ) : searchResults.length > 0 ? (
                <>
                  {searchResults.map((item) => (
                    <button
                      key={item._id}
                      type="button"
                      className="search-dropdown-item"
                      onClick={() => {
                        setShowSearchDropdown(false);
                        const categoryId = item.categoryId?._id;
                        if (categoryId) {
                          navigate(`/category/${categoryId}`);
                        } else {
                          navigate(`/search?q=${encodeURIComponent(item.name || "")}`);
                        }
                      }}
                    >
                      <img
                        src={
                          item.image && item.image.startsWith("http")
                            ? item.image
                            : `${import.meta.env.VITE_API_BASE_URL}/${item.image}`
                        }
                        alt={item.name}
                        className="search-item-img"
                      />
                      <div className="search-item-info">
                        <div className="search-item-name">{item.name}</div>
                        <div className="search-item-desc">
                          {item.description || "No description available."}
                        </div>
                      </div>
                      <div className="search-item-price">
                        ₹{Number(item.price || 0).toFixed(2)}
                      </div>
                    </button>
                  ))}
                  <button
                    type="button"
                    className="search-dropdown-item view-all"
                    onClick={handleViewAllResults}
                  >
                    View all results
                  </button>
                </>
              ) : (
                <div className="search-dropdown-item muted">
                  No results found
                </div>
              )}
            </div>
          )}
        </Form>
      </div>
      <Sidebar show={showSidebar} handleClose={toggleSidebar} />
    </>
  );
}

export default Header;
