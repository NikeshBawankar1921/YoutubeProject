import { Navigate } from "react-router-dom";

// PrivateRoute is a higher-order component to protect routes from unauthorized access
const PrivateRoute = ({ children }) => {

  // Get the token from localStorage to check if user is authenticated
  let token = localStorage.getItem("token");

  // If token exists, allow access to the child component (protected route)
  // Otherwise, redirect user to the login page
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;