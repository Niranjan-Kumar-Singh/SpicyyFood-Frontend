import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { handleUpdateUser } = useContext(UserContext);

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

  const fetchUserProfile = async () => {
    const config = getTokenConfig();
    if (!config) return;
    try {
      const res = await axios.get('http://localhost:5000/api/users/profile', config);
      setUserData(res.data);
    } catch (error) {
      const message = error.response?.status === 401 ? 'Session expired. Please log in again.' : 'Failed to fetch user profile.';
      toast.error(message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const config = getTokenConfig();
    if (!config) return;
    setLoading(true);
    try {
      const res = await axios.put('http://localhost:5000/api/users/profile', userData, config);
      toast.success('Profile updated successfully!');
      handleUpdateUser(res.data);
      setUserData(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      toast.error('Both current and new passwords are required.');
      return;
    }
    const config = getTokenConfig();
    if (!config) return;
    setPasswordLoading(true);
    try {
      const res = await axios.put('http://localhost:5000/api/users/profile/change-password', passwordData, config);
      if (res.status === 200 && res.data.message === "Password updated successfully") {
        toast.success('Password updated successfully');
        setPasswordData({ currentPassword: '', newPassword: '' });
        localStorage.setItem('token', res.data.token);
      } else {
        toast.error(res.data.message || 'Failed to update password');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="account-page-wrapper">
      <div className="account-page">
        <h2>Account Details</h2>
        <Form onSubmit={handleUpdateProfile}>
          <Form.Group controlId="userName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="userEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="userPhone" className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" name="phone" value={userData.phone} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Update Profile'}
          </Button>
        </Form>
        <hr />
        <h3>Change Password</h3>
        <Form onSubmit={handleChangePassword}>
          <Form.Group controlId="currentPassword" className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <InputGroup>
              <Form.Control type={showCurrentPassword ? 'text' : 'password'} name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} required />
              <Button variant="outline-secondary" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="newPassword" className="mb-3">
            <Form.Label>New Password</Form.Label>
            <InputGroup>
              <Form.Control type={showNewPassword ? 'text' : 'password'} name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} required />
              <Button variant="outline-secondary" onClick={() => setShowNewPassword(!showNewPassword)}>
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={passwordLoading}>
            {passwordLoading ? <Spinner animation="border" size="sm" /> : 'Change Password'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Account;
