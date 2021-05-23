import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import { getFirebase, getFirestore } from "../../src/firebase";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
    const [products, setProducts] = useState([]);

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log('Sin resultados!');
      }
      setProducts(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("Error buscando items", error);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <>
      <h1>E-Commerce</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((p, index) => (
          <div key={index} className="Card">
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <Link to={`/item/${p.title}`}>
              <img src={p.imgId} style={{ width: 200 }}/>
            </Link>
            <Counter/>
          </div>
        ))
      )}
    </>
  );
        };
// return (
//   <>
//     <h1>Detalle</h1>
//     {item.length === 0 ? (
//       <p>Loading..</p>
//     ) : (
//       <div className="Card">
//         <h3>{item.title}</h3>
//         <p>${item.price}</p>
//         <img src={item.thumbnail} alt="foto" style={{ width: 200 }} />
//         <Counter />
//       </div>
//     )}
//   </>
// );
// };

export default ItemDetailContainer;


// const ItemDetailContainer = () => {
  // const [item, setItem] = useState([]);
  // const { title } = useParams();

  // // useEffect(() => {
  //   db();
  // }, [title]);

  // async function db() {
  //   try {
  //     const call = await fetch(
  //       "https://api.mercadolibre.com/sites/MLA/search?q=escritorio&limit=6"
  //     );
  //     const result = await call.json();
  //     console.log(result.results[0]);
  //     setItem(result.results.find(i => i.title === title));
  //     console.log("result.results.find(i => i.title === title)", result.results.find(i => i.title === title))
  //   } catch (err) {
  //     console.log("Ocurrio un problema", err);
  //   }
  // }

