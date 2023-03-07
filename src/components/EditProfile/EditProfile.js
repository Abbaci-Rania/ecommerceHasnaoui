import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

const EditProfile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const email = user.email;
  const type = user.type;
  const [phone, setphone] = useState("");
  const [redirect, setredirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/partners/edit", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
    }
    setredirect(true);
  };
  //if (redirect) return <Redirect to="/connexion" />;

  return (
    <div className="form" onSubmit={submit}>
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Edit Profile</h1>
        <input
          type="text"
          name="nom"
          className="form-control"
          placeholder="Modifier votre Nom"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="phone"
          className="form-control"
          placeholder="N° de telephone"
          onChange={(e) => setphone(e.target.value)}
        />
        <br />
        <label>Adresse</label>
        <br />
        <input
          type="text"
          name="adresse"
          className="form-control"
          placeholder="Rue ..."
        />
        <br />
        <input
          type="text"
          name="adresse"
          className="form-control"
          placeholder="Wilaya "
        />{" "}
        <input
          type="text"
          name="adresse"
          className="form-control"
          placeholder="Commune"
        />{" "}
        <input
          type="text"
          name="adresse"
          className="form-control"
          placeholder="Code postal"
        />
        <br />
        <input
          type="text"
          name="adresse"
          className="form-control"
          placeholder="Pays"
        />
        <br />
        {type === "groupe" ? (
          <>
            <input
              type="text"
              name="Secteur"
              className="form-control"
              placeholder="Code postal"
            />
            <br />
            <input
              type="text"
              name="Activite"
              className="form-control"
              placeholder="Activite"
            />
            <input
              type="text"
              name="Branche"
              className="form-control"
              placeholder="Branche"
            />
            <input
              type="text"
              name="Societe mere"
              className="form-control"
              placeholder="Societe mere"
            />
            <input
              type="text"
              name="N° de registre de commerce"
              className="form-control"
              placeholder="N° de registre de commerce"
            />
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="NIS"
            />
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="ART"
            />
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="Code comptable"
            />
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="Date denregistrement RC"
            />
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="N° d'identification Fiscle NIF"
            />
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="TIN"
            />
          </>
        ) : null}
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Modifier
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};
export default EditProfile;

// const preloadedValues = {
//   firstname: "rania",
//   lastname: "rania",
// };
// const { register, handleSubmit } = useForm({
//   defaultValues: preloadedValues,
// });

// const onSubmit = (data) => {
//   alert(JSON.stringify(data));
// };

// return (
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <input
//       //ref={register}
//       placeholder="First Name"
//       type="text"
//       name="firstname"
//     />
//     <input
//       //ref={register}
//       placeholder="Last Name"
//       type="text"
//       name="lastname"
//     />
//     <button>Submit</button>
//   </form>
// );
