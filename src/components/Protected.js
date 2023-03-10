import React from "react";
import { Navigate } from "react-router-dom";

export const Protected = ({ isLogin, Component }) => {
  if (isLogin === true) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
};
