import "./Header.css";
import Head from "./Head";
import Navbar from "./Navbar";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Navbar CartItem={CartItem} />
    </>
  );
};

export default Header;
