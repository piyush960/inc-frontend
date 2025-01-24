import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated, path}) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={path} replace />;
};

export default ProtectedRoute