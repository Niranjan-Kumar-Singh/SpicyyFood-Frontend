import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import '../styles/Cart.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item)); // Increase quantity by adding the same item again
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(removeFromCart(item.id)); // Remove only one quantity
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Explore our items and add something to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p className="price">₹{item.price} per unit</p>
                <p className="total-item-price">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>

                <div className="quantity-control">
                  <button onClick={() => handleDecreaseQuantity(item)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>
                    <FaPlus />
                  </button>
                </div>

                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-section">
          <h3>Total Amount: ₹{calculateTotalAmount()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
