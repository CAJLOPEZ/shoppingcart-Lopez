import React from 'react';
import ItemCount from './ItemCount';

const Item = ({id, price, title, description, img, stock}) => {
    return (
        <div className="tarjeta">
            <div className="product--info">
                <p>{title}</p>
                <img src={img} className="img-fluid" alt="producto"/>
                <p className="product--price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>{id}</p>
            </div>
                <button>Agrega al Carrito</button>
                <p className="product--info">{description}</p>
                <ItemCount stock={stock}/>
                <div style={{borderBottom: 'solid 2px white', display: 'flex'}}/>
        </div>

    )
}

export default Item;
