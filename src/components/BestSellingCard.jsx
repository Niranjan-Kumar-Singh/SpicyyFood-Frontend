// src/components/BestSellingCard.jsx

import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import './BestSellingCard.css';
import { FaShoppingCart } from 'react-icons/fa';

function BestSellingCard({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    // Optionally, trigger scroll or modal
    // window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="best-selling-card-overlay">
          <Card.Title className="best-selling-card-title">{item.name}</Card.Title>
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Text className="best-selling-card-description flex-grow-1">
          {item.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price-tag fw-bolder">${item.price.toFixed(2)}</span>
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
