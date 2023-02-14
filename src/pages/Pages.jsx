import React from "react";
import Home from "../components/MainPage/Home";
import OffrePromo from "../components/OffrePromo/OffrePromo";
import StockLimite from "../components/StockLimite/StockLimite";

const Pages = ({ productItems, addToCart }) => {
  return (
    <>
      <Home />
      {/* <StockLimite productItems={productItems} addToCart={addToCart} />
      <OffrePromo productItems={productItems} addToCart={addToCart} /> */}
    </>
  );
};

export default Pages;
