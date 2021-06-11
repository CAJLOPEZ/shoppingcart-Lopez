import React from "react";
import Contador from "../../Containers/CountContainer";
import { Link } from "react-router-dom";
import "./itemDetail.css";

export default function ItemDetail({
  item,
  loading,
  contador,
  setContador,
  buyHandle,
}) {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h4 className="title-item-detail">Detalles del Producto</h4>
      <div
        className="flex-detail"
        bg="secondary"
        text="white"
        style={{ height: "350px" }}
      >
        <div className="description-name-button-detail">
          <h3 className="h3-size margin-bottom">{item.name}</h3>
          <p className="text-start"> {item.description}</p>
          <p className="text-start margin-bottom">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni
            voluptatibus praesentium dolore aut quaerat magnam, ea obcaecati
            aliquam eius omnis accusantium, voluptatem maxime, et impedit
            dignissimos itaque quisquam tempore.{" "}
          </p>
          <p className="price-detail">${item.price}</p>
          <p className="text-start margin-bottom">{item.stock} en Stock!</p>
          <div className="contadorItem">
            <Contador
              className="width-200px"
              min={0}
              max={item.stock}
              contador={contador}
              setContador={setContador}
            >
              Agregar
            </Contador>
          </div>
          {contador > 0 ? (
            <div>
              <Link to={"/cart/"}>
                <button className="btn-detail" onClick={buyHandle}>
                  Comprar {contador}
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <button
                className="btn-detail"
                onClick={() => setContador(contador + 1)}
              >
                Agregar
              </button>
            </div>
          )}
        </div>
        <div className="title-img-detail">
          <img src={item.img} className="img-detail" />
        </div>
      </div>
    </div>
  );
}
