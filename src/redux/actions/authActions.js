import axios from 'axios';
import { login, logout, setLoading, setError } from '../slices/userSlice'; // Import actions from userSlice
import { toast } from 'react-toastify';

// Login action
export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, { email, password });
    const { user, token } = data;

    // Dispatch the login action from the user slice
    dispatch(login({ user, token }));

    // Store user and token in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    toast.success('Login successful!');
  } catch (error) {
    // Dispatch error handling
    dispatch(setError(error.message || 'Login failed.'));
    toast.error(error.message || 'Login failed.');
  } finally {
    dispatch(setLoading(false));
  }
};

// Logout action
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  dispatch(logout());  // Dispatch logout from the user slice
};
