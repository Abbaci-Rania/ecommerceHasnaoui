import logo from "../../assets/images/logo/gsh.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const Navbar = ({ CartItem }) => {
  //userInfo
  const { user, logoutUser } = useContext(AuthContext);

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

  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

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
            {user ? (
              <div className="dropdown">
                <button onClick={handleClick} className="icon-button">
                  <i className="fa fa-plus"></i>
                </button>
                {showMenu ? (
                  <div className="menu-items">
                    <ul>
                      <li>
                        <i className="fa fa-user-secret"></i>
                        <p>Mon Compte</p>
                      </li>
                      <li>
                        <i className="fa fa-shopping-bag"></i>
                        <p>Mes commande</p>
                      </li>
                      <li>
                        <i className="fa fa fa-truck" />
                        <p>Etat de ma commande</p>
                      </li>
                    </ul>
                  </div>
                ) : null}
                {/* <Link to="/">
                <i className="fa fa-plus"></i>
              </Link> */}
              </div>
            ) : (
              <></>
            )}
            {/* <i className="fa fa-user"></i> */}
            {user ? (
              <div className="icon-react">
                <FaSignOutAlt onClick={logoutUser} />
              </div>
            ) : (
              <Link to="/connexion">
                <div className="icon-react">
                  <FaSignInAlt />
                </div>
              </Link>
            )}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
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
