import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./style.css";
import Data from "../StockLimite/Data";
import DetailsLivraison from "./LivraisonDetails";
import axios from "axios";
const DetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/getproduct/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Erreur Axios:", error);
      });
  }, [productId]);
  console.log(product);
  return (
    <section className="pagedetails">
      <p>Oroduct Items</p>
      {/* {productItems.map((productItems, index) => {
        return productItems.id == id ? (
          <div className="container d_flex" key={index}>
            <div className="productDetails d_flex ">
              <div className="product-cover">
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
          <div key={index}>No Data</div>
        );
      })} */}
    </section>
  );
};

export default DetailsPage;
