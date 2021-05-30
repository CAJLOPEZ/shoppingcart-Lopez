import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/CartContext";
import { getFirestore } from "../firebase";
import ItemDetail from "../Components/itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [contador, setContador] = useState(0);
  const [cartItems, setCartItems] = useContext(Context);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El doc no existe");
          return true;
        }
        const dataQuery = doc.data();
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Ocurrio un error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const buyHandle = () => {
    let alreadyInCart = false;
    cartItems &&
      cartItems.map((itemIn) => {
        if (itemIn.id === item.id) {
          alreadyInCart = true;
        }
      });
    if (!alreadyInCart) {
      let itemCompra = {
        qty: contador,
        ...item,
      };
      setCartItems((currentCart) => [...currentCart, itemCompra]);
    } else {
      setModal(true);
    }
  };

  return (
    <>
      {!modal ? (
        <ItemDetail
          loading={loading}
          item={item}
          setContador={setContador}
          contador={contador}
          buyHandle={buyHandle}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ItemDetailContainer;
