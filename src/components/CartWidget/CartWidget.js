import React from 'react';
import cart from '../../assets/img/cart.png'

const CartWidget = () =>{
    return(
        <div>
            <img src={cart} className="cartWidget"></img>
        </div>
    )
}

export default CartWidget