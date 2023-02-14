import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          {CartItem.length === 0 ? (
            <div className="no-items product">
              <i className="fa fa-cart-arrow-down"></i>
              <h1>Votre Panier est vide !</h1>
              <p>Parcourez nos produits et services et commencer vos achats</p>
              <Link to="/">
                <button className="btn-start">Commencez vos achats</button>
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-details product">
                {CartItem.map((item) => {
                  const productQty = item.price * item.qty;
                  return (
                    <div className="cart-list  d_flex" key={item.id}>
                      <div className="img">
                        <img src={item.cover} alt="" />
                      </div>
                      <div className="cart-details">
                        <h3>{item.name}</h3>
                        <span>Disponible</span>
                        <h4>{productQty}.00 DA</h4>
                      </div>
                      <div className="cart-items-function">
                        <div className="cartControl d_flex">
                          <button
                            className="desCart"
                            onClick={() => decreaseQty(item)}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                          <span className="qte">{item.qty}</span>
                          <button
                            className="incCart"
                            onClick={() => addToCart(item)}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-price"></div>
                    </div>
                  );
                })}
              </div>
              <div className="cart-total product">
                <h2>Résumé du panier</h2>
                <div className="d_flex">
                  <h4>Prix-total :</h4>
                  <h3>{totalPrice}.00 DA</h3>
                </div>
                <div className="dflex">
                  <p>Livraison disponible 24h sur le territoire national</p>
                  <img src={require("../../assets/images/logo/shipping.png")} />
                </div>
                <Link to="/">
                  <button className="btn-confirm"> Valider ma commande</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
