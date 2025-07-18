import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Checkout.css";
import { useUser } from "../context/UserContext"; // ✅ Import User Context

function Checkout() {
  const { user, loading } = useUser(); // ✅ Access user data and loading state
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderType, setOrderType] = useState("dinein");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tableNumber: "",
    pickupTime: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.name || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/cart`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCart(res.data.items || []);
        const totalAmount = res.data.items.reduce(
          (sum, item) => sum + item.item.price * item.quantity,
          0
        );
        setTotal(totalAmount.toFixed(2));
      } catch (error) {
        console.error("Error fetching cart data in checkout:", error);
      }
    };
    fetchCartData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    else if (!/^[a-zA-Z\s]+$/.test(form.name))
      newErrors.name = "Name must contain only letters.";

    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be exactly 10 digits.";

    if (orderType === "dinein") {
      if (!form.tableNumber.trim())
        newErrors.tableNumber = "Table number is required.";
      else if (!/^\d+$/.test(form.tableNumber))
        newErrors.tableNumber = "Table must be a valid number.";
    }

    if (orderType === "takeaway" && !form.pickupTime.trim()) {
      newErrors.pickupTime = "Pickup time is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    const orderData = {
      orderType,
      name: form.name,
      phone: form.phone,
      items: cart,
      total,
    };

    if (orderType === "dinein") {
      orderData.tableNumber = form.tableNumber;
    } else if (orderType === "takeaway") {
      orderData.pickupTime = form.pickupTime;
    }

    console.log("Order placed!", orderData);
    // Here you would typically send orderData to the backend
  };

  if (loading) {
    return <div className="checkout-page">Loading user info...</div>;
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <div className="checkout-empty">
          <h2>Your cart is empty.</h2>
          <p>Add items before placing an order.</p>
        </div>
      ) : (
        <>
          <ul className="checkout-list">
            {cart.map((item, idx) => (
              <li key={`${item.item._id}-${idx}`} className="checkout-card">
                <div className="item-info">
                  <span className="item-name">{item.item.name}</span>
                  <span className="item-qty">Quantity: {item.quantity}</span>
                </div>
                <div className="item-total">
                  ₹{(item.item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-summary">
            <p className="total-text">Total Payable Amount: ₹{total}</p>
          </div>

          <div className="checkout-form">
            <h2>Customer Details</h2>

            <div className="order-options">
              <button
                type="button"
                className={`order-option ${
                  orderType === "dinein" ? "active" : ""
                }`}
                onClick={() =>
                  setOrderType("dinein") ||
                  setForm((prev) => ({ ...prev, pickupTime: "" }))
                }
              >
                Dine-In
              </button>
              <button
                type="button"
                className={`order-option ${
                  orderType === "takeaway" ? "active" : ""
                }`}
                onClick={() =>
                  setOrderType("takeaway") ||
                  setForm((prev) => ({ ...prev, tableNumber: "" }))
                }
              >
                Takeaway
              </button>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={`order-input ${errors.name ? "error" : ""}`}
                value={form.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className={`order-input ${errors.phone ? "error" : ""}`}
                value={form.phone}
                onChange={handleInputChange}
                inputMode="numeric"
              />
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>

            {orderType === "dinein" && (
              <div className="input-group">
                <input
                  type="text"
                  name="tableNumber"
                  placeholder="Table Number"
                  className={`order-input ${errors.tableNumber ? "error" : ""}`}
                  value={form.tableNumber}
                  onChange={handleInputChange}
                  inputMode="numeric"
                />
                {errors.tableNumber && (
                  <p className="form-error">{errors.tableNumber}</p>
                )}
              </div>
            )}

            {orderType === "takeaway" && (
              <div className="input-group">
                <label className="order-label">Select Pickup Time:</label>
                <input
                  type="time"
                  name="pickupTime"
                  className={`order-input ${errors.pickupTime ? "error" : ""}`}
                  value={form.pickupTime}
                  onChange={handleInputChange}
                />
                {errors.pickupTime && (
                  <p className="form-error">{errors.pickupTime}</p>
                )}
              </div>
            )}

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
