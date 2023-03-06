import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
const HeaderWrapper = ({ CartItem }) => {
  const location = useLocation();

  // Only show the navbar on certain routes
  if (
    location.pathname === "/connexion" ||
    location.pathname === "/register" ||
    location.pathname === "/comercial" ||
    location.pathname === "/admin"
  ) {
    return null;
  }

  return <Header CartItem={CartItem} />;
};

export default HeaderWrapper;
