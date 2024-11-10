import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../../constants/authConstants';

// Action to login
export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password }, config);

    // Assuming the response contains both user info and token
    const { token, user } = data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user, token },  // Dispatching both user and token
    });

    localStorage.setItem('userInfo', JSON.stringify(user));  // Store user info
    localStorage.setItem('token', token);  // Store token

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.message || 'An error occurred. Please try again later.',
    });
  }
};

// Action to logout
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');  // Also remove token
  dispatch({ type: LOGOUT });
};
