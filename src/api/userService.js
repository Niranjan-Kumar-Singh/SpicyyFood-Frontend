import axios from 'axios';

// Helper function to get token from localStorage and configure headers
const getTokenConfig = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error("Token not found in localStorage");
  }
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

// Fetch user profile with error handling
export const fetchUserProfile = async () => {
  try {
    const config = getTokenConfig();
    const response = await axios.get('http://localhost:5000/api/users/profile', config);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Re-throw or handle it as per your requirement
  }
};

// Update user profile with error handling
export const updateUserProfile = async (userData) => {
  try {
    const config = getTokenConfig();
    const response = await axios.put('http://localhost:5000/api/users/profile', userData, config);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error; // Re-throw or handle it as per your requirement
  }
};

// Change password with error handling
export const changePassword = async (passwordData) => {
  try {
    const config = getTokenConfig();
    const response = await axios.put(
      'http://localhost:5000/api/users/change-password',
      passwordData,
      config
    );
    return response.data;
  } catch (error) {
    console.error('Error changing password:', error);
    throw error; // Re-throw or handle it as per your requirement
  }
};
