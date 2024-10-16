// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // To detect URL hash changes
import { Row, Col, Container, Spinner, Button } from 'react-bootstrap';
import CategoryCard from '../components/CategoryCard';
import BestSellingCard from '../components/BestSellingCard';
import heroImage from '../assets/images/hero/hero-image.jpg'; // Add a hero image
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/Homepage.css'; // Import the custom CSS

// Category and best selling item images
import coffeeImage from '../assets/images/Categories/coffee.jpeg';
import noodlesImage from '../assets/images/Categories/noodles.jpeg';
import pizzaImage from '../assets/images/Categories/pizza.jpeg';
import burgerImage from '../assets/images/Categories/burger.jpeg';
import chickenImage from '../assets/images/Categories/chicken.jpeg';
import kebabImage from '../assets/images/Categories/kebab.jpeg';
import iceCreamImage from '../assets/images/Categories/ice_cream.jpeg';
import coldDrinkImage from '../assets/images/Categories/cold_drink.jpeg';
import cortadoImage from '../assets/images/coffee/Cortado.jpg';
import espressoImage from '../assets/images/coffee/Espresso Con Panna.jpg';
import bbqChickenImage from '../assets/images/pizza/BBQ Chicken.webp';
import spicyVeggieImage from '../assets/images/pizza/Spicy Veggie.jpeg';
import macaroniImage from '../assets/images/Noodles/Macaroni.jpg';
import rotiniImage from '../assets/images/Noodles/Rotini.jpeg';
import hamburgerImage from '../assets/images/Burger/classic hamburger.jpg';
import kababBurgerImage from '../assets/images/Burger/chicken kabab burger.jpg';
import frenchVanillaImage from '../assets/images/IceCream/French Vanilla Bean.jpg';
import galoutiImage from '../assets/images/Kebabs/Galouti.jpeg';
import tandooriFriedImage from '../assets/images/Chicken/Tandoori Fried.jpg';
import rootBeerImage from '../assets/images/ColdDrink/Root Beer.jpeg';

function Home() {
  const [categories, setCategories] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingBestSelling, setLoadingBestSelling] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      // Mock data for categories
      const mockCategories = [
        { id: 1, name: 'Coffee', image: coffeeImage },
        { id: 2, name: 'Noodles', image: noodlesImage },
        { id: 3, name: 'Pizza', image: pizzaImage },
        { id: 4, name: 'Burger', image: burgerImage },
        { id: 5, name: 'Chicken', image: chickenImage },
        { id: 6, name: 'Kebab', image: kebabImage },
        { id: 7, name: 'Ice Cream', image: iceCreamImage },
        { id: 8, name: 'Cold Drink', image: coldDrinkImage },
      ];
      setCategories(mockCategories);
      setLoadingCategories(false);
    };

    const fetchBestSelling = async () => {
      // Mock data for best selling items
      const mockBestSelling = [
        { id: 101, name: 'Cortado', description: 'Smooth and rich espresso with a dash of steamed milk.', price: 150, image: cortadoImage, isSpecial: true },
        { id: 102, name: 'Espresso con Panna', description: 'Bold espresso topped with a dollop of whipped cream.', price: 100, image: espressoImage, isSpecial: false },
        { id: 103, name: 'BBQ Chicken Pizza', description: 'Savory BBQ chicken with mozzarella and red onions.', price: 250, image: bbqChickenImage, isSpecial: true },
        { id: 104, name: 'Spicy Veggie Pizza', description: 'A fiery mix of vegetables with spicy tomato sauce.', price: 300, image: spicyVeggieImage, isSpecial: false },
        { id: 105, name: 'Macaroni', description: 'Creamy macaroni with a blend of cheeses.', price: 50, image: macaroniImage, isSpecial: false },
        { id: 106, name: 'Rotini', description: 'Twisted rotini pasta with fresh basil and tomatoes.', price: 60, image: rotiniImage, isSpecial: true },
        { id: 107, name: 'Classic Hamburger', description: 'Juicy beef patty with lettuce, tomato, and cheese.', price: 300, image: hamburgerImage, isSpecial: false },
        { id: 108, name: 'Chicken Kebab Burger', description: 'Grilled chicken kebab with spicy mayo and fresh veggies.', price: 300, image: kababBurgerImage, isSpecial: true },
        { id: 109, name: 'French Vanilla Bean', description: 'Creamy vanilla ice cream with real vanilla beans.', price: 150, image: frenchVanillaImage, isSpecial: true },
        { id: 110, name: 'Galouti Kebab', description: 'Tender minced meat kebab infused with aromatic spices.', price: 320, image: galoutiImage, isSpecial: false },
        { id: 111, name: 'Tandoori Chicken', description: 'Spiced tandoori chicken grilled to perfection.', price: 260, image: tandooriFriedImage, isSpecial: true },
        { id: 112, name: 'Root Beer', description: 'Classic root beer with a nostalgic flavor.', price: 620, image: rootBeerImage, isSpecial: false },
      ];
      setBestSelling(mockBestSelling);
      setLoadingBestSelling(false);
    };

    fetchCategories();
    fetchBestSelling();
  }, []);

  // Scroll to "Categories" section if the URL hash is "#categories"
  useEffect(() => {
    if (location.hash === '#categories') {
      const categorySection = document.getElementById('categories');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <Container fluid className="main-content mt-5 pt-5">
      {/* Hero Section */}
      <section className="mb-5 mt-15 hero-section">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-4">Welcome to Our Restaurant</h1>
            <p className="lead">
              Experience the finest dining with our exquisite menu crafted by expert chefs.
            </p>
            <Button variant="primary" size="lg" href="#categories">
              Explore Our Menu
            </Button>
          </Col>
          <Col md={6}>
            <LazyLoad height={400} offset={100} once placeholder={<div className="placeholder-hero-img"></div>}>
              <img
                src={heroImage}
                alt="Delicious Food"
                className="img-fluid rounded shadow-sm"
              />
            </LazyLoad>
          </Col>
        </Row>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mb-5">
        <h2 className="mb-4 text-center">Categories</h2>
        {loadingCategories ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            {categories.map((category) => (
              <Col key={category.id} xs={6} sm={4} md={3} className="mb-4">
                <Link to={`/category/${category.name.toLowerCase().replace(/\s+/g, '')}`}>
                  <CategoryCard category={category} />
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </section>

      {/* Best Selling Section */}
      <section className="mb-5">
        <h2 className="mb-4 text-center">Best Selling</h2>
        {loadingBestSelling ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            {bestSelling.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <BestSellingCard item={item} />
              </Col>
            ))}
          </Row>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-5 why-choose-us">
        <h2 className="mb-4 text-center">Why Choose Us</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={tandooriFriedImage}
              alt="Why Choose Us"
              className="img-fluid rounded shadow-sm why-choose-us-img"
              loading="lazy"
            />
          </Col>
          <Col md={6}>
            <p className="lead">
              At our restaurant, we focus on offering a unique dining experience with attention to detail, quality, and service.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-award-fill text-success me-2"></i>
                Award-winning chefs with decades of experience
              </li>
              <li className="mb-2">
                <i className="bi bi-basket-fill text-success me-2"></i>
                Locally sourced and fresh ingredients
              </li>
              <li className="mb-2">
                <i className="bi bi-emoji-smile-fill text-success me-2"></i>
                Friendly and welcoming environment
              </li>
              <li className="mb-2">
                <i className="bi bi-clock-fill text-success me-2"></i>
                Quick service and on-time delivery
              </li>
            </ul>
            <Button variant="success" size="lg" className="mt-3">
              Order Now
            </Button>
          </Col>
        </Row>
      </section>

      {/* Customer Testimonials Section */}
      <section className="mb-5 testimonials-section">
        <h2 className="mb-4 text-center">Customer Testimonials</h2>
        <Row>
          {[
            {
              id: 1,
              quote: "The best dining experience I've ever had! Highly recommend their grilled salmon.",
              author: "John Doe",
            },
            {
              id: 2,
              quote: "Absolutely loved the ambiance and the food was phenomenal.",
              author: "Jane Smith",
            },
            {
              id: 3,
              quote: "A hidden gem! The desserts are to die for.",
              author: "Michael Brown",
            },
          ].map((testimonial) => (
            <Col key={testimonial.id} xs={12} sm={6} md={4} className="mb-4">
              <div className="testimonial-card p-3 shadow-sm rounded">
                <p className="mb-2">“{testimonial.quote}”</p>
                <small>- {testimonial.author}</small>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Home;
