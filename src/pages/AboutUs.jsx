import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import RestaurantImage from '../assets/images/restaurantImage.jpg';
import ChefImage from '../assets/images/myPhoto.jpg';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <Container className="about-us-container my-5 py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About Us</h1>
          <p className="lead text-center">
            Welcome to Spicyyfood! We are passionate about delivering delicious food and an unforgettable dining experience.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Spicyyfood started with a vision to bring the most flavorful and aromatic dishes from around the world to your table. 
            Our chefs use only the freshest ingredients to craft each dish, ensuring that every meal is bursting with flavor.
          </p>
          <p>
            Whether you're dining in or ordering takeout, we strive to make each experience memorable with top-notch customer service and food that warms the soul.
          </p>
        </Col>
        <Col md={6}>
          <Image src={RestaurantImage} alt="Restaurant Image" fluid rounded />
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src={ChefImage} alt="Chef Image" fluid rounded />
        </Col>
        <Col md={6}>
          <h2>Meet Our Chef</h2>
          <p>
            Our head chef, John Doe, has over 20 years of experience in the culinary industry. His passion for creating innovative and flavorful dishes 
            has earned him a reputation as one of the best chefs in the region.
          </p>
          <p>
            John believes in the power of food to bring people together and loves experimenting with new ingredients and cooking techniques. 
            He leads a dedicated team of culinary experts who share his commitment to excellence.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-center">Our Mission</h2>
          <p className="text-center">
            At Spicyyfood, our mission is simple: to serve high-quality, delicious meals in a welcoming and comfortable environment. 
            We aim to create a space where people can come together, share a meal, and make memories.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
