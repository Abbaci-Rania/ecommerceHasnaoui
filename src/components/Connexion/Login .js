import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../common/header/Header";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setredirect] = useState(false);
  let { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const showNavbar = location.pathname !== "/connexion";
  console.log(showNavbar);
  return (
    <div className="form" onSubmit={loginUser}>
      {showNavbar && <Header />}
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Connexion</h1>
        <input
          name="username"
          className="form-control"
          placeholder="Saisir votre email"
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Connexion
        </button>
        <br></br>
        <Link to="/register">Creer un compte</Link>
      </form>
    </div>
  );
  // const submit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8000/users/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     credentials: "include",
  //     body: JSON.stringify({ email, password }),
  //   });
  //   console.log(response.status);
  //   if (response.status != 403) setredirect(true);
  // };
  // if (redirect) return <Redirect to="/cart" />;
};

export default Login;
