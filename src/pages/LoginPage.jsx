import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/LoginPage.css';
import { useUser } from '../context/UserContext'; // Import useUser

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser(); // Access setUser from context

  // You could add simple email validation on form submission
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email.");
    setLoading(false);
    return;
  }

  // Ensure password is not empty
  if (!password) {
    toast.error("Please enter your password.");
    setLoading(false);
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });

    const { token, name, isAdmin } = response.data;

    localStorage.setItem('token', token);
    const userData = { name, isAdmin, token };
    setUser(userData);

    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate('/');
    }
  } catch (error) {
    toast.error(error.response?.data?.message || 'Invalid email or password.');
    console.error('Login failed:', error.response ? error.response.data : error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
