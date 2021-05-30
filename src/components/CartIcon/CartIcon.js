import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from './cart.svg';

const CartIcon =(props)=> {

    return (
        <div>
            <Link to ='/cart'>
               <img src={cart}/> 
            </Link> 
        </div>
    )
}

export default CartIcon;
