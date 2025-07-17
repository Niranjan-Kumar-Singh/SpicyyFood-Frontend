import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/LoginPage.css";
import { useUser } from "../context/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { handleLogin } = useUser(); // ✅ Use context login function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      setLoading(false);
      return;
    }

    if (!password) {
      toast.error("Please enter your password.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      // ✅ Store full user object (name, email, phone, isAdmin, token, etc.)
      handleLogin(response.data);

      // ✅ Navigate based on role
      navigate(response.data.isAdmin ? "/admin" : "/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid email or password."
      );
      console.error("Login failed:", error.response || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group password-container">
          <label>Password:</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <ToastContainer />

      <p className="register-link">
        Don't have an account? <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
};

export default LoginPage;
