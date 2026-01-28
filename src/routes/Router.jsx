// routes/Router.jsx
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Models from "../pages/Models";
import ModelDetails from "../pages/ModelDetails";
import Wishlist from "../pages/WishList";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Admin/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

export default function AppRouter() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<ModelDetails />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User Protected */}
            <Route
                path="/wishlist"
                element={
                    <ProtectedRoute>
                        <Wishlist />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/cart"
                element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                }
            />

            {/* Admin */}
            <Route
                path="/admin/dashboard"
                element={
                    <AdminRoute>
                        <Dashboard />
                    </AdminRoute>
                }
            />
        </Routes>
    );
}
