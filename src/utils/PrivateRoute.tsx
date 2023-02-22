import React from "react";
import { userAuth } from "../hooks/userAuth";
import { Navigate } from "react-router-dom";
import EmailConfirm from "./../pages/EmailConfirm";
import { UserLogged } from "./../context/UserLoggedContext";

// type childrenProps = {
//   children: React.ReactNode;
// };

function PrivateRoute() {
  const { registerMail } = UserLogged();
  const isLogged = userAuth();

  return (
    <div>
      {isLogged() ? (
        <Navigate to="/home" />
      ) : registerMail == "" ? (
        <Navigate to="/register" />
      ) : (
        <EmailConfirm />
      )}
    </div>
  );
}

export default PrivateRoute;
