import axios from 'axios';
import { toast } from 'react-toastify';

// Action Types
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// Action Creators

// Fetch user data (e.g., after login or session refresh)
export const fetchUserData = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });

  try {
    const token = localStorage.getItem('token');  // Get the token from localStorage
    if (!token) {
      throw new Error('Authorization token is missing. Please log in again.');
    }

    // Fetch the user profile data
    const response = await axios.get('http://localhost:5000/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Dispatch success action with user data
    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    // Dispatch failure action with error message
    dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
    // Display a toast error message to the user
    toast.error(error.response?.data?.message || 'Error fetching user data.');
  }
};

// Update user data (e.g., for profile update)
export const updateUser = (userData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });

  try {
    const token = localStorage.getItem('token');  // Get the token from localStorage
    if (!token) {
      throw new Error('Authorization token is missing. Please log in again.');
    }

    // Send the update request with new user data
    const response = await axios.put('http://localhost:5000/api/users/me', userData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Dispatch success action with updated user data
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    // Show success toast notification
    toast.success('User updated successfully!');
  } catch (error) {
    // Dispatch failure action with error message
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    // Display a toast error message to the user
    toast.error(error.response?.data?.message || 'Failed to update user.');
  }
};
