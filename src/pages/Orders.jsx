import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Orders.css";

// Capitalize utility with fallback
const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";

// Convert payment method to friendly display
const formatPaymentMethod = (method) => {
  switch (method) {
    case "cash":
      return "Cash on Delivery";
    case "online":
      return "Online Payment (Demo)";
    default:
      return capitalize(method);
  }
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="loading-text">Loading your orders...</p>;

  return (
    <div className="orders-container">
      <h2 className="orders-heading">My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id || order.createdAt} className="order-card">
              <div className="order-header">
                <span className="label">Order ID:</span>
                <span className="value">
                  {order._id ? order._id.slice(-6).toUpperCase() : "N/A"}
                </span>
              </div>

              <div className="order-details">
                <p>
                  <span className="label">Type:</span>{" "}
                  {capitalize(order.orderType)}
                </p>
                <p>
                  <span className="label">Payment:</span>{" "}
                  {formatPaymentMethod(order.paymentMethod)}
                </p>
                {order.tableNumber && (
                  <p>
                    <span className="label">Table No.:</span>{" "}
                    {order.tableNumber}
                  </p>
                )}
                {order.pickupTime && (
                  <p>
                    <span className="label">Pickup Time:</span>{" "}
                    {order.pickupTime}
                  </p>
                )}
                <p>
                  <span className="label">Total:</span>{" "}
                  <strong>₹{order.totalPrice}</strong>
                </p>
                <p>
                  <span className="label">Status:</span>{" "}
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {capitalize(order.status)}
                  </span>
                </p>
                <p>
                  <span className="label">Date:</span>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="order-items">
                <h4>Items Ordered:</h4>
                <div className="item-table-header">
                  <span>Item</span>
                  <span>Qty</span>
                  <span>Total</span>
                </div>
                <div className="item-table-body">
                  {order.orderItems.map((item, idx) => (
                    <div key={idx} className="item-row">
                      <span className="item-name">{item.name}</span>
                      <span>{item.quantity}</span>
                      <span className="item-total">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ✅ Add this total row at the end */}
                <div className="item-total-summary">
                  <span>Total Amount</span>
                  <span>₹{order.totalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
