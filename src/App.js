import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Cart from "./components/Cart";
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
        <Route path="/cart" exact component={Cart} />
        <Route path="/item/:title" exact component={ItemDetailContainer} />
      </Switch>
    </>
  );
}