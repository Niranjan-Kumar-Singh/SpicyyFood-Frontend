// src/App.jsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound'; // Create this component for 404 pages

// Lazy load CategoryPage
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
