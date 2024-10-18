import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound'; // Create this component for 404 pages
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import Favorite from './pages/Favorites';
import HelpCenter from './pages/HelpCenter';
import Legal from './pages/LegalPage';
import Notification from './pages/Notifications';
import Orders from './pages/Orders';
import Payment from './pages/PaymentMethods';
import Settings from './pages/Settings';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Footer from './components/Footer';

// Lazy load CategoryPage and Contact page
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow-1"> {/* Ensure main takes available space */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* 404 Route */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;