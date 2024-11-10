import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import api from './api'; // Ensure this points to your API utility
import '../styles/UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/users/all'); // Fetch all users, admin only
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users. Please try again.");
    }
  };

  useEffect(() => {
    fetchUsers();
    return () => {
      toast.dismiss();
    };
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleUpdateUser = async () => {
    if (!selectedUser) return;

    const updatedData = {
      name: selectedUser.name,
      email: selectedUser.email,
      isAdmin: selectedUser.isAdmin,
    };

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      setUpdateLoading(true);
      await axios.put(`http://localhost:5000/api/users/${selectedUser._id}`, updatedData, config);
      toast.success('User updated successfully');

      // Update users state after successful update
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === selectedUser._id ? { ...user, ...updatedData } : user))
      );

      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error.response?.data?.message || 'Failed to update user');
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    const previousUsers = users;
    setUsers(users.filter(user => user._id !== userId));
    setDeleteLoading(true);

    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      toast.success('User deleted successfully!');
    } catch (error) {
      console.error("Error deleting user:", error);
      setUsers(previousUsers); // Restore previous users on failure
      toast.error('Error deleting user. Please try again.');
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="container mt-5 admin-dashboard">
      <h2 className="mb-4">User Management</h2>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                <td>
                  <Button className="btn-warning me-2" onClick={() => openModal(user)}>
                    Edit
                  </Button>
                  <Button
                    className="btn-danger"
                    onClick={() => handleDeleteUser(user._id)}
                    disabled={deleteLoading}
                  >
                    {deleteLoading ? (
                      <Spinner animation="border" variant="light" size="sm" />
                    ) : (
                      'Delete'
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser?.name || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="userEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={selectedUser?.email || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="userIsAdmin" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={selectedUser?.isAdmin || false}
                onChange={(e) => setSelectedUser({ ...selectedUser, isAdmin: e.target.checked })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            className="primary"
            onClick={handleUpdateUser}
            disabled={updateLoading}
          >
            {updateLoading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              'Update User'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
