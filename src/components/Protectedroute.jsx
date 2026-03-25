import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/authcontext"; // adjust path to your context

const ProtectedRoute = ({ children }) => {
  const { userdata, loading } = useContext(AuthContext);

  // 1. If we are still checking the cookie, show nothing or a spinner
  if (loading) {
    return <div className="loading">Checking session...</div>;
  }

  // 2. If the check is done and there's no user, send them to Login
    if (!userdata) {
      alert("You have not login yet !")
    return <Navigate to="/login" replace />;
  }

  // 3. If logged in, show the protected page (Home, Cart, etc.)
  return children;
};

export default ProtectedRoute;