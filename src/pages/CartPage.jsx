import React, { useEffect, useState } from "react";
import axios from "axios";
import CartList from "../components/CartList";
import "../styles/Cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCartItems(response.data?.items || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {loading ? (
          <p>Loading...</p>
        ) : cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Explore our items and add something to your cart!</p>
          </div>
        ) : (
          <CartList cartItems={cartItems} refreshCart={fetchCartItems} />
        )}
      </div>
    </div>
  );
};

export default CartPage;
