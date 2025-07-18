import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider, useUser } from './context/UserContext'; // updated
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';
import ScrollRestoration from './hooks/useScrollRestoration';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminRoutes from './admin/AdminRoutes';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages
const Homepage = React.lazy(() => import('./pages/Homepage'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const Account = React.lazy(() => import('./pages/Account'));
const Favorite = React.lazy(() => import('./pages/Favorites'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Legal = React.lazy(() => import('./pages/LegalPage'));
const Notification = React.lazy(() => import('./pages/Notifications'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Payment = React.lazy(() => import('./pages/PaymentMethods'));
const Settings = React.lazy(() => import('./pages/Settings'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Profile = React.lazy(() => import('./pages/Profile'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
      return <h1 style={{ color: 'red', textAlign: 'center' }}>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

// ✅ Wrap main content inside this inner component
function AppContent() {
  const { loading } = useUser();

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading user session...</div>;
  }

  return (
    <>
      <Router>
        <ScrollRestoration />
        <ScrollToTop />
        <Header />
        <ToastContainer position="top-right" autoClose={3000} />
        <main className="flex-grow-1" role="main">
          <ErrorBoundary>
            <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </Router>
    </>
  );
}

// ✅ Keep this
function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
