import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard container mt-4 pt-2">
            <h2>Admin Dashboard</h2>
            <div className="list-group mt-3">
                <Link to="/admin/users" className="list-group-item list-group-item-action">Manage Users</Link>
                <Link to="/admin/orders" className="list-group-item list-group-item-action">Manage Orders</Link>
                <Link to="/admin/items" className="list-group-item list-group-item-action">Manage Items</Link>
                <Link to="/admin/categories" className="list-group-item list-group-item-action">Manage Categories</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
