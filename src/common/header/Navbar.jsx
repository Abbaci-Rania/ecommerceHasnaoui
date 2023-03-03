import logo from "../../assets/images/logo/gsh.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({ CartItem }) => {
  //userInfo
  const { name } = useContext(AuthContext);

  // fixed Header
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 100);
  });
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <section className="navbar">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/" exact>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="menu-container" ref={menuRef}>
            <div
              className="categories"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <button className="f_flex">
                {" "}
                Produits et services<i className="fa fa-chevron-down"></i>
              </button>
            </div>

            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <Dropdown icon="fa fa-hard-hat" text={"Construction"} />
                <Dropdown
                  icon="fa fa-broadcast-tower"
                  text={"Télécommunication"}
                />
                <Dropdown icon="fa fa-tree" text={"Agriculture "} />
                <Dropdown icon="fa fa-cogs" text={"Services"} />
              </ul>
            </div>
          </div>

          <div className="search f_flex">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Chercher un produit ..." />
            </div>
            <button type="submit">Rechercher</button>
          </div>

          <div className="icon f_flex width">
            <Link to="/">
              <i className="fa fa-question-circle"></i>
            </Link>
            <Link to="/connexion">
              {" "}
              <i className="fa fa-user"></i>
              <p>Hello {name} </p>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag"></i>
                <span>{CartItem.length === 0 ? "0" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Navbar;
