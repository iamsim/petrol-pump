import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if the user is authenticated

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    // Redirect to Login page if not authenticated
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
