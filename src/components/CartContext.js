import React, {useState, useEffect} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    console.log()

useEffect(() =>{
    console.log(cartProducts)
},[cartProducts])

    return (
        <CartContext.Provider value={[cartProducts, setCartProducts]}>
            {children}
        </CartContext.Provider>
    )
}