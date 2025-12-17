import React from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      {children}
    </nav>
  );
}