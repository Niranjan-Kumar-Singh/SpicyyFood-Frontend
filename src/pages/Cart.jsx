import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/Cart.css'; // Ensure this file is properly linked
import bbqChickenImage from '../assets/images/pizza/BBQ Chicken.webp';
import kababBurgerImage from '../assets/images/Burger/chicken kabab burger.jpg';
import tandooriFriedImage from '../assets/images/Chicken/Tandoori Fried.jpg';
import CappuccinoImage from '../assets/images/coffee/Cappuccino.jpg';
import KhorovatsImage from '../assets/images/Kebabs/Khorovats.jpeg';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'BBQ Chicken Pizza', price: 250, quantity: 1, image: bbqChickenImage },
    { id: 2, name: 'Tandoori Chicken', price: 260, quantity: 2, image: tandooriFriedImage },
    { id: 3, name: 'Chicken Kebab Burger', price: 300, quantity: 1, image: kababBurgerImage },
    { id: 4, name: 'Cappuccino Coffee', price: 129, quantity: 2, image: CappuccinoImage },
    { id: 5, name: 'Khorovats Kebab', price: 260, quantity: 1, image: KhorovatsImage },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => (
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => (
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page-wrapper mt-5 pt-5">
      <div className="cart-page">
        <h1 className="text-center mb-4">Your Cart</h1>

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p className="price">₹{item.price}</p>
                
                {/* Quantity Control with Buttons */}
                <div className="quantity-control">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    <FaPlus />
                  </button>
                </div>

                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="total-section">
          <h3>Total: ₹{totalPrice}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
