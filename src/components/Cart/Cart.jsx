import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cartStyle.css";
import { Context } from '../../Context/CartContext';


export default function Cart({ total }) {
    const [cartItems,setCartItems] = useContext(Context);

  return (
    <div className="cartPageStyle">
      {cartItems && cartItems.length ? (
        <div>
          <h2 className="title-item-detail"> Detalle </h2>
          <div>
            {cartItems.map((item) => (
              <div>
                <div>
                  <span>Item :</span> {item.name}
                </div>
                <div>
                  <strong>
                    <span>Precio :</span> {item.price}
                  </strong>
                </div>
                <div>
                  <strong>
                    <span>Cantidad :</span> {item.qty}
                  </strong>
                </div>
                <br></br>
              </div>
            ))}
            <div>
              <strong>
                <span>Total :</span> {total}
              </strong>
            </div>
          </div>
          <div className="">
            <Link to={"/"}>
              <button className="btn-detail-card"> ir a Home</button>
            </Link>
            <Link to={"/checkout/"}>
              <button className="btn-detail-card links-card"> Comprar</button>
            </Link>
            <Link to={"/"}>
              <button className="btn-detail-card" onClick={() => setCartItems([])}> Vaciar carrito</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="noItems">
          <h2 className="textNoItems">Carrito vacio</h2>
          <Link to={"/"} className="links-bottom">
            <button className="btn-detail"> ir a Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}
