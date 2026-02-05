import React, { useMemo, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/ItemCard.css';

function ItemCard({ item }) {
  const dispatch = useDispatch();
  const [favTick, setFavTick] = useState(0);

  const handleAddToCart = () => {
    dispatch(addToCart({itemId: item._id, quantity: 1}));
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
    <Card className="item-card">
      <button
        type="button"
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
      <Card.Img
        variant="top"
        src={item.image && item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_BASE_URL}/${item.image}`}
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
