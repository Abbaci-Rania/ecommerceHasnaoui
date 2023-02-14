import React from "react"
import "./Header.css"
import Head from "./Head"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Navbar CartItem={ CartItem }/> 
    </>
  )
}

export default Header
