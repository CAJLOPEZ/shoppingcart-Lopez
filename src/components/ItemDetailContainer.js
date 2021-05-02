import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "./Counter";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    db();
  }, [title]);

  async function db() {
    try {
      const call = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=escritorio&limit=6"
      );
      const result = await call.json();
      console.log(result.results[0]);
      setItem(result.results.find(i => i.title === title));
      console.log("result.results.find(i => i.title === title)", result.results.find(i => i.title === title))
    } catch (err) {
      console.log("Ocurrio un problema", err);
    }
  }

  return (
    <>
      <h1>Detalle</h1>
      {item.length === 0 ? (
        <p>Loading..</p>
      ) : (
        <div className="Card">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <img src={item.thumbnail} alt="foto" style={{ width: 200 }} />
          <Counter />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
