import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import cart from '../assets/img/cart.png';

// export const CartIcon = () => {
//   const [cartProducts] = useContext(CartContext);
//   const cartSize = () => {
//       return cartProducts.reduce((sum, product) => sum + product.count, 0);
//   }

//   return (
//           <Link to={'/cart'}>
//               <span className="badge white"> {cartSize()} </span>
//           </Link>
//   );
// };

export const NavBar = ({categories}) => {
  const [cartProducts] = useContext(CartContext);
  
  const cartSize = () => {
      return cartProducts;
      // return cartProducts.reduce((sum, product) => sum + product.count, 0);

  }

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
              <Link to={'/cart'}>
              <span className="badge white"> {cartSize()} </span>
          </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
