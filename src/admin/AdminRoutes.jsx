import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import UserManagement from './UserManagement';
import OrderManagement from './OrderManagement';
import ItemManagement from './ItemManagement';
import CategoryManagement from './CategoryManagement';

const AdminRoutes = () => (
    <div className="admin-content-wrapper">
        <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="items" element={<ItemManagement />} />
            <Route path="categories" element={<CategoryManagement />} />
        </Routes>
    </div>
);

export default AdminRoutes;
