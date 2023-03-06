import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="form" onSubmit={loginUser}>
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Connexion</h1>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Saisir votre email"
        />
        <br />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Connexion
        </button>
        <br></br>
        <Link to="/register">Creer un compte</Link> <br />
        <Link to="/">Retour</Link>
      </form>
    </div>
  );
};

export default Login;
