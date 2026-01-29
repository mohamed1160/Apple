// routes/AdminRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user?.isAdmin) {
        // لو مش admin → redirect للـ login
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
