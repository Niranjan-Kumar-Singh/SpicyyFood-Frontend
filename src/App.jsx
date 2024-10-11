// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';

// Placeholder components for demonstration
const Categories = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>All Categories</h2>
  </div>
);
const Orders = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>My Orders</h2>
  </div>
);
const Cart = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>My Cart</h2>
  </div>
);
const Account = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>My Account</h2>
  </div>
);
const Notifications = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>My Notifications</h2>
  </div>
);
const About = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>About</h2>
  </div>
);
const Contact = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>Contact</h2>
  </div>
);
const HelpCenter = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>Help Center</h2>
  </div>
);
const Legal = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>Legal</h2>
  </div>
);
const Logout = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>Logout</h2>
  </div>
);
const Profile = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h2>Profile</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
