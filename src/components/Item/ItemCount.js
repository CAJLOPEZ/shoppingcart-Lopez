import React, {useState} from 'react'

const ItemCount = ({stock}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockV, setStockV] = useState(0);

    const sumar = () => {
        let className = "btn"

        if(stockTotal === 0){
            className = "btn n"
        }else{
            setStockV(stockV + 1);
            setStockTotal(stockTotal - 1)
        }
    }

    const restar = () => {
        let className = "btn"

        if(stockTotal === 0 | stockV === 0){
            className = "btn n"
        }else{
            setStockV(stockV - 1);
            setStockTotal(stockTotal + 1)
        }
    }

    const onAdd = () =>{
        let className = "btn"
        let compra = stockTotal
        if(compra === 0){ 
            className = "btn n"
        }
    }

    return (
        <>
        <p className="cantidad">Cantidad en Stock: {stockTotal}</p>
        <div className="btn stock">
            <button onClick={restar}>-</button>
            <p>{stockV}</p>
            <button onClick={sumar}>+</button>
        </div>
        <a className="btn shop" onClick={onAdd}>Comprar</a>
        </>
    )
}

export default ItemCount;