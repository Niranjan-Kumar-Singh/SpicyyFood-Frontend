import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound'; // Create this component for 404 pages
import Footer from './components/Footer';

// Lazy load CategoryPage and Contact page
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow-1"> {/* Ensure main takes available space */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
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
