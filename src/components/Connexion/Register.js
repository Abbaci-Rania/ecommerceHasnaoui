import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [redirect, setredirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, phone }),
    });
    setredirect(true);
  };
  if (redirect) return <Redirect to="/connexion" />;

  return (
    <div className="form">
      <form className="form-signin" onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Creer votre compte</h1>
        <input
          type="text"
          placeholder="Saisir votre nom"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          className="form-control"
          placeholder="Saisir votre email"
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Phone number"
          onChange={(e) => setphone(e.target.value)}
        />{" "}
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Register;
