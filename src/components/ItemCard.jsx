import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import PropTypes from 'prop-types';
import '../styles/ItemCard.css';

function ItemCard({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({itemId: item._id, quantity: 1}));
  };

  return (
    <Card className="item-card">
      <Card.Img
        variant="top"
        src={item.image && item.image.startsWith('http') ? item.image : `http://localhost:5000/${item.image}`}
        alt={item.name || 'Item Image'}
        onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/fallback-image.jpg'; }}
      />
      <Card.Body>
        <Card.Title className="item-title">{item.name}</Card.Title>
        <Card.Text className="item-description">
          {item.description ? item.description : 'No description available.'}
        </Card.Text>
        <Card.Text className="item-price">
          {item.price ? `₹${item.price.toFixed(2)}` : 'N/A'}
        </Card.Text>
        <Button variant="primary" className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Fixed for MongoDB
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ItemCard;
