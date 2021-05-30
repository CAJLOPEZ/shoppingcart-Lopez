import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/CartContext";
import Cart from "../Components/Cart/Cart";
import "firebase/firestore";

export default function CartContainer() {
  const [cartItems] = useContext(Context);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cartItems &&
      cartItems.map((item) =>
        setTotal((prevTotal) => prevTotal + item.price * item.qty)
      );
  }, [cartItems]);

  return (
    <div>
      <Cart total={total} />
    </div>
  );
}
