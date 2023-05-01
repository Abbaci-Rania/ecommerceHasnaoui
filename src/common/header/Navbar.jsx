import logo from "../../assets/images/logo/gsh.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const Navbar = ({ CartItem }) => {
  //userInfo
  const { user, logoutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
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

          {/* <div className="menu-container" ref={menuRef}>
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
          </div> */}

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
                  <i className="fa fa-user-circle">
                    {" "}
                    {user && <p className="icon-name">{user.username}</p>}
                  </i>
                  {/* {user && <p>Hello {user.username}</p>} */}
                </button>
                {showMenu ? (
                  <div className="menu-items">
                    <ul>
                      <li>
                        <i className="fa fa-user-secret"></i>
                        <Link to="/edit">
                          <p>Mon Compte</p>
                        </Link>
                      </li>
                      <li>
                        <i className="fa fa-shopping-bag"></i>
                        <p>Mes commande</p>
                      </li>
                      <li>
                        <FaSignOutAlt className="react-icon" />
                        <p onClick={logoutUser}> Déconnexion </p>
                      </li>
                    </ul>
                  </div>
                ) : null}
                {/* <Link to="/">
                <i className="fa fa-plus"></i>
              </Link> */}
              </div>
            ) : (
              <Link to="/connexion">
                <div className="icon-react">
                  <FaSignInAlt />
                </div>
              </Link>
            )}
            {/* <i className="fa fa-user"></i>
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
            )} */}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-cart">
                  {" "}
                  <p className="icon-name">Panier</p>
                </i>{" "}
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
