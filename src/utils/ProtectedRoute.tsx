import { userAuth } from "../hooks/userAuth";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const isLogged = userAuth();

  return <div>{isLogged() ? <Outlet /> : <Navigate to="/register" />}</div>;
}

export default ProtectedRoute;
