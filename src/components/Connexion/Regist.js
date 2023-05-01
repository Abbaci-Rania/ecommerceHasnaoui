import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Regist = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [is_client_particulier, setclientParticulier] = useState(false);
  const [is_client_groupe, setclientGroupe] = useState(false);
  const [redirect, setredirect] = useState(false);

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.client_type == "groupe"
      ? setData((p) => {
          return { ...p, is_client_groupe: true };
        })
      : setData((p) => {
          return { ...p, is_client_particulier: true };
        });
    console.log(data);
    data.password == data.passwordConf && setConfirm(true);

    axios
      .post(
        "http://localhost:8000/users/register",
        {
          name,
          email,
          password,
          phone,
          is_client_groupe,
          is_client_particulier,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setredirect(true);
      })
      .catch((error) => {
        console.error("erreur dans register", error);
      });
  };
  redirect && <Redirect to="/connexion" />;

  return (
    <div className="form">
      <form className="form-signin" onSubmit={handleSubmit}>
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
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setpassword(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Phone number"
          name="phone"
          onChange={(e) => setphone(e.target.value)}
        />{" "}
        <br />
        <input
          type="radio"
          id="client"
          name="client"
          value="is_client_particulier"
          onChange={(e) => setclientParticulier(true)}
          required
        />
        <label htmlFor="is_client_particulier">Particulier</label>
        <input
          type="radio"
          id="client1s"
          name="client"
          value="is_client_groupe"
          required
          onChange={(e) => setclientGroupe(true)}
        />
        <label htmlFor="is_client_groupe">Groupe</label>
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Regist;
