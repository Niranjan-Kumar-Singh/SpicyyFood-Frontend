import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Button for "Add to Cart"
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; // Assuming Redux is used
import '../styles/ItemCard.css'; // CSS file for styling

// ItemCard component
function ItemCard({ item }) {
  const dispatch = useDispatch(); // Using Redux for state management

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item }); // Replace with actual cart action
  };

  return (
    <Card className="item-card">
      <Card.Img
        variant="top"
        src={item.image}
        alt={item.name}
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = 'path/to/fallback-image.jpg'; // Replace with fallback image path
        }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

// Defining PropTypes for type checking
ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
