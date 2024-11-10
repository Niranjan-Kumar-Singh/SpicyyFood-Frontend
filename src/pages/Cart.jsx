import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import "../styles/Cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCartItems(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleIncreaseQuantity = async (itemId, currentQuantity) => {
    try {
      await axios.put(
        `http://localhost:5000/api/cart/${itemId}`,
        { quantity: currentQuantity + 1 },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Error increasing item quantity:", error);
    }
  };
  
  const handleDecreaseQuantity = async (itemId, currentQuantity) => {
    if (currentQuantity === 1) return;
    try {
      await axios.put(
        `http://localhost:5000/api/cart/${itemId}`,
        { quantity: currentQuantity - 1 },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Error decreasing item quantity:", error);
    }
  };  

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${itemId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.item.price * item.quantity;
    }, 0).toFixed(2);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Explore our items and add something to your cart!</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default CartPage;
