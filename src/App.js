import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Cart from "./components/Cart";
import {Carrito} from "./components/CartContext";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import ItemDetailContainer from "./components/ItemDetailContainer";


export default function App() {
  const category = ["category1", "category2"];
  return (
    <>
      <NavBar categories={category} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart">
        <Cart/>
        </Route>
        {/* <Route path="/cart" exact component={Cart} /> */}
        {/* <Route path="/item/:title" exact component={ItemDetailContainer} /> */}
        <Route path="/item/:title">
        <Carrito>
        <ItemDetailContainer/>
        </Carrito>
        </Route>
      </Switch>
    </>
  );
}