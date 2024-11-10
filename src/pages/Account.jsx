import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import '../styles/Account.css';

const Account = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, handleUpdateUser } = useContext(UserContext);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Get token config for authentication headers
  const getTokenConfig = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Authorization token missing. Please log in again.");
      return null;
    }
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // Fetch user profile
  const fetchUserProfile = async () => {
    const config = getTokenConfig();
    if (!config) return;

    try {
      const res = await axios.get('http://localhost:5000/api/users/profile', config);
      setUserData(res.data);
    } catch (error) {
      const message =
        error.response?.status === 401
          ? 'Session expired. Please log in again.'
          : 'Failed to fetch user profile.';
      toast.error(message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // Handle profile input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // Update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const config = getTokenConfig();
    if (!config) return;

    setLoading(true);

    try {
      const res = await axios.put('http://localhost:5000/api/users/profile', userData, config);
      toast.success('Profile updated successfully!');  // Success notification
      handleUpdateUser(res.data); // Update global user state
      setUserData(res.data); // Reflect updated data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile.');  // Error notification
    } finally {
      setLoading(false);
    }
  };

  // Change password
const handleChangePassword = async (e) => {
  e.preventDefault();
  const { currentPassword, newPassword } = passwordData;

  // Ensure both fields are filled
  if (!currentPassword || !newPassword) {
    toast.error('Both current and new passwords are required.');
    return;
  }

  const config = getTokenConfig();
  if (!config) return;
  setPasswordLoading(true);

  try {
    // Send current and new password to backend
    const res = await axios.put(
      'http://localhost:5000/api/users/profile/change-password',
      { currentPassword, newPassword },
      config
    );
    
    // Log the response to see its structure
    console.log(res);

    // Check if the response indicates success
    if (res.status === 200 && res.data.success) {
      toast.success('Password updated successfully');  // Success notification
      setPasswordData({ currentPassword: '', newPassword: '' });

      // Update token after password change
      localStorage.setItem('token', res.data.token);
    } else {
      toast.error(res.data.message || 'Failed to update password');  // Error notification
    }
  } catch (error) {
    // Log the error to check what is being returned
    console.error(error);

    // Check if the error response is defined and use it for the message
    toast.error(error.response?.data?.message || 'Error updating password.');  // Error handling
  } finally {
    setPasswordLoading(false);
  }
};

  return (
    <div className="account-page-wrapper">
      <div className="account-page">
        <h2>Account Details</h2>

        {/* Profile Update Form */}
        <Form onSubmit={handleUpdateProfile}>
          <Form.Group controlId="userName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
              aria-label="Name"
            />
          </Form.Group>

          <Form.Group controlId="userEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
              aria-label="Email"
            />
          </Form.Group>

          <Form.Group controlId="userPhone" className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              aria-label="Phone"
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" variant="light" size="sm" role="status" aria-hidden="true" />
                {' '}Updating...
              </>
            ) : (
              'Update Profile'
            )}
          </Button>
        </Form>

        <hr />

        {/* Change Password Form */}
        <h3>Change Password</h3>
        <Form onSubmit={handleChangePassword}>
          <Form.Group controlId="currentPassword" className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              required
              aria-label="Current Password"
            />
          </Form.Group>

          <Form.Group controlId="newPassword" className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              required
              aria-label="New Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={passwordLoading}>
            {passwordLoading ? (
              <>
                <Spinner animation="border" variant="light" size="sm" role="status" aria-hidden="true" />
                {' '}Updating...
              </>
            ) : (
              'Change Password'
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Account;
