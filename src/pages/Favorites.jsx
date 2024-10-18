import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import bbqChickenImage from '../assets/images/pizza/BBQ Chicken.webp';
import kababBurgerImage from '../assets/images/Burger/chicken kabab burger.jpg';
import tandooriFriedImage from '../assets/images/Chicken/Tandoori Fried.jpg';
import '../styles/Favorites.css';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'BBQ Chicken Pizza', description: 'Savory BBQ chicken with mozzarella and red onions.', price: '₹250', image: bbqChickenImage },
    { id: 2, name: 'Tandoori Chicken', description: 'Spiced tandoori chicken grilled to perfection.', price: '₹260', image: tandooriFriedImage },
    { id: 3, name: 'Chicken Kebab Burger', description: 'Grilled chicken kebab with spicy mayo and fresh veggies.', price: '₹300', image: kababBurgerImage },
  ]);

  const handleRemoveFavorite = (id) => {
    // Logic to remove the item from favorites
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const handleAddToCart = (item) => {
    // Logic to add the item to the cart
    alert(`Added ${item.name} to cart!`);
  };

  return (
    <div className="favorites-page-wrapper">
      <Container className="favorites-page mt-5 pt-5">
        <h1 className="text-center mb-4">Your Favorites</h1>
        
        <div className="favorites-box">
          <Row>
            {favorites.map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card className="favorite-card">
                  <Card.Img variant="top" src={item.image} alt={item.name} className="favorite-img" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text className="price">{item.price}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="danger" onClick={() => handleRemoveFavorite(item.id)}>
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
        </div>
      </Container>
    </div>
  );
}

export default FavoritesPage;
