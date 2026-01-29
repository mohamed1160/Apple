// routes/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const token = localStorage.getItem("token"); // جلب الـ JWT

    if (!token) {
        // لو مفيش login → redirect للـ login
        return <Navigate to="/login" replace />;
    }

    // لو موجود → عرض أي route child جوه Outlet
    return <Outlet />;
}
