import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Data from "../StockLimite/Data";
import DetailsLivraison from "./LivraisonDetails";

const DetailsPage = () => {
  const { productItems } = Data;
  let params = useParams();
  const id = params.id;
  return (
    <section className="pagedetails">
      {productItems.map((productItems) => {
        return productItems.id == id ? (
          <div className="container d_flex">
            <div className="productDetails d_flex ">
              <div className="img">
                <img src={productItems.cover} alt="" />
              </div>
              <div className="second-part">
                <div className="cart-details d_flex">
                  <div className="">
                    <p>puma product</p>
                    <h3>{productItems.name}</h3>
                    <span>Disponible</span>
                    <br></br>
                    <div className="stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <i className="fa fa-bookmark"></i>
                </div>
                <div className="prix">
                  <p className="price">{productItems.price}.00 DA</p>
                  <span>! Il reste 2 article seulement</span>
                  <button className="btn-confirm">
                    <i className=" fa fa-cart-plus"></i>AJOUTER AU PANIER
                  </button>
                </div>
              </div>
            </div>
            <div className="livraison product">
              <DetailsLivraison />
            </div>
          </div>
        ) : (
          <></>
        );
      })}
    </section>
  );
};

export default DetailsPage;
