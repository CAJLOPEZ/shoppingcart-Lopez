import React from "react";
import { Link } from "react-router-dom";
import cart from '../assets/img/cart.png';

export const NavBar = ({categories}) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
          <h2>Pre-Entrega</h2>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">
                 <img src={cart} className="cartWidget" style={{height: "30px"}}></img>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
