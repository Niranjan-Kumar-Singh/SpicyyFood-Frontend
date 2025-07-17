import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/LoginPage.css"; // Reusing login styles
import { useUser } from "../context/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    adminCode: "",
  });
  const [registerAsAdmin, setRegisterAsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, phone, password, adminCode } = formData;

    if (!name || !email || !phone || !password) {
      toast.error("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    // Optional admin code validation
    let isAdmin = false;
    if (registerAsAdmin) {
      if (!adminCode) {
        toast.error("Please enter the admin code.");
        setLoading(false);
        return;
      }

      if (adminCode !== "admin2025") {
        toast.error("Invalid admin code.");
        setLoading(false);
        return;
      }

      isAdmin = true;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, {
        name,
        email,
        phone,
        password,
        isAdmin,
      });

      const { token, name: userName, isAdmin: resIsAdmin } = res.data;
      localStorage.setItem("token", token);
      setUser({ name: userName, isAdmin: resIsAdmin, token });

      toast.success(
        resIsAdmin ? "Admin account created!" : "Account created successfully!"
      );
      navigate(resIsAdmin ? "/admin" : "/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
      console.error("Registration error:", error.response || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister} className="login-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group password-container">
          <label>Password:</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
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

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="adminCheckbox"
            checked={registerAsAdmin}
            onChange={() => setRegisterAsAdmin(!registerAsAdmin)}
          />
          <label htmlFor="adminCheckbox">Register as Admin</label>
        </div>

        {registerAsAdmin && (
          <div className="form-group">
            <label>Admin Code:</label>
            <input
              type="text"
              name="adminCode"
              value={formData.adminCode}
              onChange={handleChange}
              placeholder="Enter secret code"
            />
          </div>
        )}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>
      <ToastContainer />
      <p className="register-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;
