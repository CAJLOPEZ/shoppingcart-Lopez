import React from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import HomeContainer from "./Containers/HomeContainer";
import CartContainer from "./Containers/CartContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import CartContext from "./Context/CartContext";
import CategoryContainer from "./Containers/CategoryContainer";
import CheckOutContainer from "./Containers/CheckOutContainer/CheckOutContainer";
import Greeting from "./Components/Greeting/greeting";
import CatContainer from "./Containers/CatContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/gracias/" render={() => <Greeting />} />
            <Route path="/checkout/" render={() => <CheckOutContainer />} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/categories/:id" component={CatContainer} />
            <Route path="/categories/" component={CategoryContainer} />
            <Route path="/cart/" render={() => <CartContainer />} />
            <Route path="/" render={() => <HomeContainer />} />
          </Switch>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
