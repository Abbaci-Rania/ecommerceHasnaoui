import React from "react";
import { AuthContext } from "./AuthContext";
export const AuthProvider = ({ children }) => {
  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log("data:", data);
    console.log("response", response);
  };

  let contextData = {
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
