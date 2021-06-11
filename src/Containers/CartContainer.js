import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/CartContext";
import Cart from "../components/Cart/Cart";
import "firebase/firestore";

export default function CartContainer() {
  const [items] = useContext(Context);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    items &&
      items.map((item) =>
        setTotal((prevTotal) => prevTotal + item.price * item.qty)
      );
  }, [items]);

  return (
    <div>
      <Cart total={total} />
    </div>
  );
}
