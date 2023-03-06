import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  //These two states are made to keep the user connected even when he hits refresh button
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const History = useHistory();
  let [loading, setLoading] = useState(true);

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data); //this state is used to check if the user is still loggedIn
      setUser(jwt_decode(data.access)); //decode a token and give us the object user
      localStorage.setItem("authTokens", JSON.stringify(data));
      if (data.type === "particulier") History.push("/");
      else if (data.type === "groupe") History.push("/edit");
      else if (data.type === "comercial") History.push("/comercial");
      else if (data.type === "admin") History.push("/admin");
    } else {
      alert("LoginUser Fail");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    History.push("/");
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
