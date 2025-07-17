import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

const CartList = ({ cartItems, refreshCart }) => {
  const handleIncreaseQuantity = async (itemId, currentQuantity) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/cart/${itemId}`,
        { quantity: currentQuantity + 1 },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      refreshCart();
    } catch (error) {
      console.error("Error increasing item quantity:", error);
    }
  };

  const handleDecreaseQuantity = async (itemId, currentQuantity) => {
    if (currentQuantity === 1) {
      handleRemoveItem(itemId);
      return;
    }
    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/cart/${itemId}`,
        { quantity: currentQuantity - 1 },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      refreshCart();
    } catch (error) {
      console.error("Error decreasing item quantity:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/cart/${itemId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      refreshCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={`${item.item._id}-${index}`} className="cart-item-card">
            <img src={item.item.image} alt={item.item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h2>{item.item.name}</h2>
              <p className="price">₹{item.item.price} per unit</p>
              <p className="total-item-price">
                Total: ₹{(item.item.price * item.quantity).toFixed(2)}
              </p>

              <div className="quantity-control">
                <button onClick={() => handleDecreaseQuantity(item.item._id, item.quantity)}>
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.item._id, item.quantity)}>
                  <FaPlus />
                </button>
              </div>

              <button className="remove-btn" onClick={() => handleRemoveItem(item.item._id)}>
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
    </>
  );
};

export default CartList;
