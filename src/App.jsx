import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';
import ScrollRestoration from './hooks/useScrollRestoration';

// Lazy load multiple routes
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const Account = React.lazy(() => import('./pages/Account'));
const Favorite = React.lazy(() => import('./pages/Favorites'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Legal = React.lazy(() => import('./pages/LegalPage'));
const Notification = React.lazy(() => import('./pages/Notifications'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Payment = React.lazy(() => import('./pages/PaymentMethods'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Profile = React.lazy(() => import('./pages/Profile'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <ScrollToTop />
      <Header />
      <main className="flex-grow-1" role="main">
        <ErrorBoundary>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
