import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import "./navbar.css";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <header>
      <div className={`navStyle`}>
        <div className="ul">
          <NavLink to="/" className="links-nav">
            <img className="logo" src={logo} />
          </NavLink>
          <NavLink to="/categories" className="links-nav">
            <h2 className="nav-link">Categorias</h2>
          </NavLink>
        </div>
        <div>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
