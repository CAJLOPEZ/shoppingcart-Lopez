import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Context/CartContext";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase";
import "./input.css";

export default function CheckOutContainer() {
  const [items] = useContext(Context);
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [conEmail, setConEmail] = useState("");
  const [order, setOrder] = useState({});

  const db = getFirestore();
  const orders = db.collection("orders");

  useEffect(() => {
    items &&
      items.map((item) =>
        setTotal((prevTotal) => prevTotal + item.price * item.qty)
      );
  }, [items]);

  useEffect(() => {
    if (order.items) {
      console.log("in");
      console.log("order.items", order.items);
      orders
        .add(order)
        .then((res) => setOrderId(res.id))
        .catch((err) => console.log("err", err));
    }
  }, [order]);

  const addOrder = () => {
    const buyer = { name, email, conEmail };

    let order = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };
    console.log("items", items);
    console.log("items.length", items.length);
    items.length && setOrder(order);
  };

  const onNameChange = (evento) => {
    setName(evento.target.value);
  };
  const onEmailChange = (evento) => {
    setEmail(evento.target.value);
  };
  const confonEmailChange = (evento) => {
    setConEmail(evento.target.value);
  };

  return (
    <div className="orderForm">
      <div>
        <h2>Dejanos tus datos y confirma tu compra</h2>
        <div className="form-group d-flex">
          <label className="text-start">nombre</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onNameChange}
            placeholder="Nombre y Apellido"
          />
        </div>
        <div className="form-group d-flex">
          <label className="text-start">email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
            placeholder="mail@ejemplo.com"
          />
        </div>
        <div className="form-group d-flex">
          <label className="text-start"> confirma tu email</label>
          <input
            type="email"
            name="conEmail"
            value={conEmail}
            onChange={confonEmailChange}
            placeholder="mail@ejemplo.com"
          />
        </div>
      </div>
      <div></div>
      <button onClick={addOrder} className="btn-detail-out">
        comprar
      </button>
      {orderId && (
        <h2>
          El codigo de tu orden es: {orderId} <hr /> Gracias por tu compra! Te
          enviaremos un e-mail con el detalle de tu orden!
        </h2>
      )}
    </div>
  );
}
