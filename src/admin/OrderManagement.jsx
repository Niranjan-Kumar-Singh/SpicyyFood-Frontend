import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../styles/OrdersManagement.css';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');
  const [searchOrderID, setSearchOrderID] = useState('');
  const [filteredStatus, setFilteredStatus] = useState('');

  const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api`;

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('User not authenticated.');
        setLoading(false);
        return;
      }
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get(`${API_BASE_URL}/checkout`, config);
      setOrders(response.data);
    } catch (error) {
      toast.error('Failed to fetch orders.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setStatus(order.status.toLowerCase()); // Ensure lowercase for initial state
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
    setStatus('');
  };

  const filterOrders = () => {
    return orders.filter(order => {
      const matchesSearch = searchOrderID === '' || order._id.includes(searchOrderID);
      const matchesStatus = filteredStatus === '' || order.status.toLowerCase() === filteredStatus.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  };

  const handleStatusUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('User not authenticated.');
        return;
      }
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(
        `${API_BASE_URL}/checkout/${selectedOrder._id}/status`, 
        { status: status.toLowerCase() }, // Ensure lowercase for API
        config
      );
      toast.success('Order status updated successfully!');
      fetchOrders();
      closeModal();
    } catch (error) {
      console.error('Error updating order status:', error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || 'Failed to update order status.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Manage Orders</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by Order ID..."
          value={searchOrderID}
          onChange={(e) => setSearchOrderID(e.target.value)}
          className="me-3"
        />
        <select value={filteredStatus} onChange={(e) => setFilteredStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {loading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterOrders().map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name || 'Unknown'}</td>
                <td>{order.status}</td>
                <td>₹{order.totalPrice.toFixed(2)}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>
                  <Button variant="info" onClick={() => openModal(order)}>View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <p><strong>Order ID:</strong> {selectedOrder._id}</p>
              <p><strong>Customer:</strong> {selectedOrder.user.name || 'Unknown'}</p>
              <p><strong>Status:</strong>
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                </Form.Select>
              </p>
              <p><strong>Total:</strong> ₹{selectedOrder.totalPrice.toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
              <hr />
              <h5>Order Items:</h5>
              <ul>
                {selectedOrder.orderItems.map((item, index) => (
                  <li key={index}>
                    {item.name} (x{item.quantity}) - ₹{item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleStatusUpdate}>Update Status</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrdersManagement;
