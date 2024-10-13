// src/components/CategoryCard.jsx

import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import '../styles/CategoryCard.css'; // Ensure this import remains

function CategoryCard({ category }) {
  return (
    <Card className="category-card h-100 shadow-sm border-0" role="button" aria-label={`Category: ${category.name}`}>
      <div className="category-card-img-wrapper">
        <LazyLoad
          height={200}
          offset={100}
          once
          placeholder={<div className="placeholder-img"></div>}
        >
          <Card.Img
            variant="top"
            src={category.image}
            alt={category.name}
            className="category-card-img"
            onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/fallback-image.jpg'; }}
          />
        </LazyLoad>
        <div className="category-card-overlay">
          <Card.Title className="category-card-title">{category.name}</Card.Title>
        </div>
      </div>
    </Card>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default CategoryCard;
