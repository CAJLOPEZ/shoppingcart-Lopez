import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos}) => {
    return (
        <>
        <div className="catalogo">Catalogo</div>
        {productos.map((dato)=>
        <div key={dato.id} className="col-lg-3 shop-info-grid mt-4">
            <Item img={dato.img} title={dato.title} description={dato.description} price={dato.price} stock={dato.stock}/>
        </div>
        )}
        </>
    )
}


export default ItemList;

