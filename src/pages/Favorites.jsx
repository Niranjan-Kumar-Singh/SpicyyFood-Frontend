import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import '../styles/Favorites.css';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();

  const loadFavorites = () => {
    try {
      const stored = localStorage.getItem('favorites');
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('Failed to parse favorites:', error);
      return [];
    }
  };

  const saveFavorites = (items) => {
    localStorage.setItem('favorites', JSON.stringify(items));
  };

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  const handleRemoveFavorite = (id) => {
    const next = favorites.filter(item => (item._id || item.id) !== id);
    setFavorites(next);
    saveFavorites(next);
  };

  const handleAddToCart = (item) => {
    if (!item?._id) return;
    dispatch(addToCart({ itemId: item._id, quantity: 1 }));
  };

  return (
    <div className="favorites-page-wrapper">
      <Container className="favorites-page mt-5 pt-5">
        <h1 className="text-center mb-4">Your Favorites</h1>
        
        <div className="favorites-box">
          {favorites.length === 0 ? (
            <div className="text-center text-muted py-4">No favorites yet.</div>
          ) : (
            <Row>
              {favorites.map((item) => (
                <Col key={item._id || item.id} md={4} className="mb-4">
                  <Card className="favorite-card">
                    <Card.Img
                      variant="top"
                      src={
                        item.image && item.image.startsWith('http')
                          ? item.image
                          : `${import.meta.env.VITE_API_BASE_URL}/${item.image}`
                      }
                      alt={item.name}
                      className="favorite-img"
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text className="price">₹{item.price}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="danger"
                          onClick={() => handleRemoveFavorite(item._id || item.id)}
                        >
                          <FaHeart className="me-2" /> Remove
                        </Button>
                        <Button variant="success" onClick={() => handleAddToCart(item)}>
                          <FaShoppingCart className="me-2" /> Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}

export default FavoritesPage;
