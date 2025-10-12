import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const state = JSON.parse(localStorage.getItem("login"));

  if (!state) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
