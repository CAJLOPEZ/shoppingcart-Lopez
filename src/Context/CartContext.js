import React, { useState } from 'react'

export const Context = React.createContext();

const CartContext = (props) => {

    const [items, setItems] = useState([])

   

    return (

        <Context.Provider value={[items, setItems]}>

            {props.children}
        </Context.Provider>
    )
}

export default CartContext;