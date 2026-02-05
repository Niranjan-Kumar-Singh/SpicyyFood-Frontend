// src/components/BestSellingCard.jsx

import React, { useMemo, useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import '../styles/BestSellingCard.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';

function BestSellingCard({ item }) {
  const dispatch = useDispatch();
  const [favTick, setFavTick] = useState(0);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    // Optionally, trigger scroll or modal
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const favoriteKey = item?._id || item?.id;

  const isFavorite = useMemo(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
      return Array.isArray(stored) && stored.some(f => (f._id || f.id) === favoriteKey);
    } catch {
      return false;
    }
  }, [favoriteKey, favTick]);

  const toggleFavorite = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
      const list = Array.isArray(stored) ? stored : [];
      const exists = list.some(f => (f._id || f.id) === favoriteKey);
      const next = exists
        ? list.filter(f => (f._id || f.id) !== favoriteKey)
        : [
            ...list,
            {
              _id: item._id,
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              image: item.image,
              categoryId: item.categoryId,
            },
          ];
      localStorage.setItem('favorites', JSON.stringify(next));
      setFavTick((t) => t + 1);
    } catch (error) {
      console.error('Failed to update favorites:', error);
    }
  };

  return (
    <Card className="best-selling-card h-100 shadow-sm border-0">
      <div className="best-selling-card-img-wrapper">
        <LazyLoad
          height={200}
          offset={100}
          once
          placeholder={<div className="placeholder-img"></div>}
        >
          <Card.Img
            variant="top"
            src={item.image}
            alt={item.name}
            className="best-selling-card-img"
          />
        </LazyLoad>
        {item.isSpecial && (
          <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-2">
            Special
          </Badge>
        )}
        <button
          type="button"
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
        <div className="best-selling-card-overlay">
          <Card.Title className="best-selling-card-title">{item.name}</Card.Title>
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Text className="best-selling-card-description flex-grow-1">
          {item.description}
        </Card.Text>
        <div className="best-selling-card-actions">
          <span className="price-tag fw-bolder">₹{item.price.toFixed(2)}</span>
          <Button variant="primary" size="sm" onClick={handleAddToCart}>
            <FaShoppingCart className="me-1 customIcon" /> Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

BestSellingCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    isSpecial: PropTypes.bool, // Optional
  }).isRequired,
};

export default BestSellingCard;
