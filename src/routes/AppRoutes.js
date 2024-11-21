import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../layout/layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Free Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />

        {/* Redirect to login for unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
