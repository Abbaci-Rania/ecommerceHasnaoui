import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [is_client_particulier, setclientParticulier] = useState(false);
  const [is_client_groupe, setclientGroupe] = useState(false);
  const [redirect, setredirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        is_client_groupe,
        is_client_particulier,
      }),
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
          name="email"
          className="form-control"
          placeholder="Saisir votre email"
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
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Phone number"
          name="phone"
          onChange={(e) => setphone(e.target.value)}
        />{" "}
        <br />
        <input
          type="radio"
          id="client"
          name="is_client_particulier"
          value="is_client_particulier"
          onChange={(e) => setclientParticulier(true)}
        />
          <label for="is_client_particulier">Particulier</label>
        <input
          type="radio"
          id="client"
          name="is_client_groupe"
          value="is_client_groupe"
          onChange={(e) => setclientGroupe(true)}
        />
        <label for="is_client_groupe">Groupe</label>
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};
{
  /* <input
          type="radio"
          id="admin"
          name="is_admin"
          value="is_admin"
          onChange={(e) => setadmin(true)}
        />
          <label for="is_admin">admin</label>
        <br /> {" "}
        <input
          type="radio"
          id="comercial"
          name="is_comercial"
          value="is_comercial"
          onChange={(e) => {
            setcomercial(true);
          }}
        />
         <label for="is_comercial">comercial</label>
        <br /> {" "} */
}
export default Register;
