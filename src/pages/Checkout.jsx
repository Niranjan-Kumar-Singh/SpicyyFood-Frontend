import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Checkout.css";
import { useUser } from "../context/UserContext"; // ✅ Import User Context

function Checkout() {
  const { user, loading } = useUser();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderType, setOrderType] = useState("dinein");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tableNumber: "",
    pickupTime: "",
    paymentMethod: "Cash", // ✅ Default payment method
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

    if (!form.paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");

      const orderData = {
        orderType: orderType === "dinein" ? "dine-in" : "takeaway",
        tableNumber: orderType === "dinein" ? form.tableNumber : null,
        pickupTime: orderType === "takeaway" ? form.pickupTime : null,
        name: form.name,
        phone: form.phone,
        paymentMethod: form.paymentMethod,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/orders/checkout`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Order placed successfully!");
      console.log("Order response:", res.data);
    } catch (err) {
      console.error("Error placing order:", err.response?.data || err.message);
      alert("❌ Failed to place order");
    }
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
                  <span className="item-qty">Qty: {item.quantity}</span>
                </div>
                <div className="item-total">
                  ₹{(item.item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-summary">
            <p className="total-text">Total: ₹{total}</p>
          </div>

          <div className="checkout-form">
            <h2>Customer Details</h2>

            <div className="order-options">
              <button
                type="button"
                className={`order-option ${orderType === "dinein" ? "active" : ""}`}
                onClick={() =>
                  setOrderType("dinein") ||
                  setForm((prev) => ({ ...prev, pickupTime: "" }))
                }
              >
                Dine-In
              </button>
              <button
                type="button"
                className={`order-option ${orderType === "takeaway" ? "active" : ""}`}
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
                />
                {errors.tableNumber && (
                  <p className="form-error">{errors.tableNumber}</p>
                )}
              </div>
            )}

            {orderType === "takeaway" && (
              <div className="input-group">
                <label className="order-label">Pickup Time</label>
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

            {/* ✅ Payment Method Dropdown */}
            <div className="input-group">
              <label className="order-label">Payment Method</label>
              <select
                name="paymentMethod"
                className={`order-input ${errors.paymentMethod ? "error" : ""}`}
                value={form.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="">Select Method</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
                <option value="Online">Online</option>
              </select>
              {errors.paymentMethod && (
                <p className="form-error">{errors.paymentMethod}</p>
              )}
            </div>

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
