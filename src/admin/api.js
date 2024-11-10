import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Your backend API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercept requests to include auth token if needed
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Assuming you're storing token in local storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
