import React from "react";

const DetailsLivraison = () => {
  return (
    <>
      <h2>LIVRAISON ET RETOUR</h2>
      <div className="d_flex">
        <p>Livraison disponible 24h sur le territoire national</p>
        <img src={require("../../assets/images/logo/shipping.png")} />
      </div>
    </>
  );
};

export default DetailsLivraison;
